import OpenAI from "openai";
import { IAIProviderAdapter, ProviderCallParams, ProviderCallResult } from "./types";
import { getOpenAIToolDefinitions } from "./tool-definitions";

export class OpenAIProviderAdapter implements IAIProviderAdapter {
  public readonly providerName = "openai";

  async generateReasoningSolution(params: ProviderCallParams): Promise<ProviderCallResult> {
    const openai = new OpenAI({ apiKey: params.apiKey });

    const messages: OpenAI.Chat.ChatCompletionMessageParam[] = [
      { role: "system", content: params.systemInstruction },
    ];

    if (params.imageBase64 && params.imageBase64.startsWith("data:")) {
      messages.push({
        role: "user",
        content: [
          { type: "text", text: params.userPrompt },
          {
            type: "image_url",
            image_url: { url: params.imageBase64 },
          },
        ],
      });
    } else {
      messages.push({ role: "user", content: params.userPrompt });
    }

    const tools = getOpenAIToolDefinitions();
    const toolAudits: any[] = [];
    let turn = 0;
    const MAX_TURNS = 6;
    let finalRawText = "";
    let usageTotals = { promptTokens: 0, completionTokens: 0, thinkingTokens: 0, totalTokens: 0 };

    while (turn < MAX_TURNS) {
      turn++;
      const reqPayload: any = {
        model: params.model,
        messages,
        tools: tools.length > 0 ? tools : undefined,
        temperature: 0.1,
      };

      // Support o1 / o3 reasoning effort if model is an o-series reasoning model
      if (params.model.startsWith("o1") || params.model.startsWith("o3") || params.model.includes("reasoning")) {
        delete reqPayload.temperature;
        reqPayload.reasoning_effort = params.reasoningEffort || "high";
      }

      const response = await openai.chat.completions.create(reqPayload);

      if (response.usage) {
        usageTotals.promptTokens += response.usage.prompt_tokens || 0;
        usageTotals.completionTokens += response.usage.completion_tokens || 0;
        usageTotals.totalTokens += response.usage.total_tokens || 0;
        if ((response.usage as any).completion_tokens_details?.reasoning_tokens) {
          usageTotals.thinkingTokens += (response.usage as any).completion_tokens_details.reasoning_tokens;
        }
      }

      const choice = response.choices?.[0];
      if (!choice || !choice.message) {
        throw new Error("No completion choice returned from OpenAI");
      }

      const assistantMsg = choice.message;
      messages.push(assistantMsg);

      if (!assistantMsg.tool_calls || assistantMsg.tool_calls.length === 0) {
        finalRawText = assistantMsg.content || "";
        break;
      }

      for (const tc of assistantMsg.tool_calls) {
        const fnName = tc.function.name;
        let fnArgs = {};
        try {
          fnArgs = JSON.parse(tc.function.arguments || "{}");
        } catch {
          fnArgs = {};
        }

        const callStartTime = Date.now();
        let toolOutput: any;
        if (params.onToolCall) {
          try {
            toolOutput = await params.onToolCall(fnName, fnArgs);
          } catch (e: any) {
            toolOutput = { success: false, error: e.message };
          }
        } else {
          toolOutput = { success: false, error: "No tool handler configured" };
        }

        const callDuration = Date.now() - callStartTime;
        toolAudits.push({
          toolName: fnName,
          input: fnArgs,
          output: toolOutput.data || toolOutput.error,
          durationMs: callDuration,
          timestamp: new Date().toISOString(),
        });

        messages.push({
          role: "tool",
          tool_call_id: tc.id,
          content: JSON.stringify(toolOutput),
        });
      }
    }

    return {
      rawText: finalRawText,
      toolAudits,
      usage: usageTotals,
      modelUsed: params.model,
      provider: "openai",
    };
  }

  async checkSolutionWithModel(params: {
    questionText: string;
    proposedSolution: string;
    model: string;
    apiKey: string;
  }): Promise<{ agrees: boolean; reasons: string; correctAnswer?: string }> {
    const openai = new OpenAI({ apiKey: params.apiKey });

    const checkerPrompt = `You are an independent academic verification checker.
Review the question and the proposed solution.
Question:
${params.questionText}

Proposed Solution:
${params.proposedSolution}

INSTRUCTION:
Determine if the solution and final answer are mathematically and scientifically correct.
Respond STRICTLY in valid JSON format:
{
  "agrees": true or false,
  "reasons": "Detailed explanation of agreement or mathematical error found",
  "correctAnswer": "Correct answer if you disagree, or empty string if you agree"
}`;

    const res = await openai.chat.completions.create({
      model: params.model,
      messages: [
        { role: "system", content: "You are an expert academic evaluator. Return JSON only." },
        { role: "user", content: checkerPrompt },
      ],
      response_format: { type: "json_object" },
      temperature: 0.1,
    });

    try {
      const parsed = JSON.parse(res.choices?.[0]?.message?.content || "{}");
      return {
        agrees: !!parsed.agrees,
        reasons: parsed.reasons || "No details provided",
        correctAnswer: parsed.correctAnswer || undefined,
      };
    } catch {
      return {
        agrees: false,
        reasons: "Checker output could not be parsed as JSON",
      };
    }
  }
}
