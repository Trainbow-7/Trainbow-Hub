import Anthropic from "@anthropic-ai/sdk";
import { IAIProviderAdapter, ProviderCallParams, ProviderCallResult } from "./types";
import { getAnthropicToolDefinitions } from "./tool-definitions";

export class AnthropicProviderAdapter implements IAIProviderAdapter {
  public readonly providerName = "anthropic";

  async generateReasoningSolution(params: ProviderCallParams): Promise<ProviderCallResult> {
    const anthropic = new Anthropic({ apiKey: params.apiKey });

    const messages: Anthropic.MessageParam[] = [];

    if (params.imageBase64 && params.imageBase64.startsWith("data:")) {
      const match = params.imageBase64.match(/^data:([^;]+);base64,(.+)$/);
      if (match) {
        messages.push({
          role: "user",
          content: [
            {
              type: "image",
              source: {
                type: "base64",
                media_type: match[1] as any,
                data: match[2],
              },
            },
            { type: "text", text: params.userPrompt },
          ],
        });
      } else {
        messages.push({ role: "user", content: params.userPrompt });
      }
    } else {
      messages.push({ role: "user", content: params.userPrompt });
    }

    const tools = getAnthropicToolDefinitions();
    const toolAudits: any[] = [];
    let turn = 0;
    const MAX_TURNS = 6;
    let finalRawText = "";
    let usageTotals = { promptTokens: 0, completionTokens: 0, thinkingTokens: 0, totalTokens: 0 };

    while (turn < MAX_TURNS) {
      turn++;
      const reqPayload: any = {
        model: params.model,
        system: params.systemInstruction,
        messages,
        max_tokens: 4096,
        tools: tools.length > 0 ? tools : undefined,
      };

      if (params.reasoningEffort && params.reasoningEffort !== "low") {
        reqPayload.thinking = {
          type: "enabled",
          budget_tokens: params.reasoningEffort === "high" ? 4096 : 2048,
        };
        reqPayload.max_tokens = 8192;
      }

      const response = await anthropic.messages.create(reqPayload);

      if (response.usage) {
        usageTotals.promptTokens += response.usage.input_tokens || 0;
        usageTotals.completionTokens += response.usage.output_tokens || 0;
        usageTotals.totalTokens += (response.usage.input_tokens || 0) + (response.usage.output_tokens || 0);
      }

      messages.push({
        role: "assistant",
        content: response.content,
      });

      const toolUseBlocks = response.content.filter((b) => b.type === "tool_use");

      if (toolUseBlocks.length === 0) {
        finalRawText = response.content
          .filter((b) => b.type === "text")
          .map((b: any) => b.text)
          .join("\n")
          .trim();
        break;
      }

      const toolResults: Anthropic.ToolResultBlockParam[] = [];

      for (const block of toolUseBlocks) {
        if (block.type === "tool_use") {
          const fnName = block.name;
          const fnArgs = (block.input as any) || {};
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

          toolResults.push({
            type: "tool_result",
            tool_use_id: block.id,
            content: JSON.stringify(toolOutput),
          });
        }
      }

      messages.push({
        role: "user",
        content: toolResults,
      });
    }

    return {
      rawText: finalRawText,
      toolAudits,
      usage: usageTotals,
      modelUsed: params.model,
      provider: "anthropic",
    };
  }

  async checkSolutionWithModel(params: {
    questionText: string;
    proposedSolution: string;
    model: string;
    apiKey: string;
  }): Promise<{ agrees: boolean; reasons: string; correctAnswer?: string }> {
    const anthropic = new Anthropic({ apiKey: params.apiKey });

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

    const res = await anthropic.messages.create({
      model: params.model,
      system: "You are an expert academic evaluator. Return JSON only.",
      messages: [{ role: "user", content: checkerPrompt }],
      max_tokens: 1024,
    });

    const text = res.content
      .filter((b) => b.type === "text")
      .map((b: any) => b.text)
      .join("\n")
      .trim();

    try {
      const parsed = JSON.parse(text);
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
