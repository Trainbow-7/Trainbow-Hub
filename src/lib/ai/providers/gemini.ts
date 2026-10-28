import { GoogleGenAI } from "@google/genai";
import { IAIProviderAdapter, ProviderCallParams, ProviderCallResult } from "./types";
import { GEMINI_TOOL_DECLARATIONS } from "../tools";

export class GeminiProviderAdapter implements IAIProviderAdapter {
  public readonly providerName = "gemini";

  async generateReasoningSolution(params: ProviderCallParams): Promise<ProviderCallResult> {
    const ai = new GoogleGenAI({ apiKey: params.apiKey });

    const contents: any[] = [];
    const userParts: any[] = [{ text: params.userPrompt }];

    if (params.imageBase64 && params.imageBase64.startsWith("data:")) {
      const match = params.imageBase64.match(/^data:([^;]+);base64,(.+)$/);
      if (match) {
        userParts.push({
          inlineData: {
            mimeType: match[1],
            data: match[2],
          },
        });
      }
    }
    contents.push({ role: "user", parts: userParts });

    const toolsConfig = [{ functionDeclarations: GEMINI_TOOL_DECLARATIONS }];
    const toolAudits: any[] = [];

    let turn = 0;
    const MAX_TURNS = 6;
    let finalRawText = "";
    let usageTotals = { promptTokens: 0, completionTokens: 0, thinkingTokens: 0, totalTokens: 0 };

    while (turn < MAX_TURNS) {
      turn++;
      const config: any = {
        systemInstruction: params.systemInstruction,
        temperature: 0.1,
        tools: toolsConfig,
      };

      if (params.reasoningEffort) {
        config.thinkingConfig = {
          thinkingBudget: params.reasoningEffort === "high" ? 4096 : params.reasoningEffort === "medium" ? 2048 : 1024,
        };
      }

      const response = await ai.models.generateContent({
        model: params.model,
        contents,
        config,
      });

      if (response.usageMetadata) {
        usageTotals.promptTokens += response.usageMetadata.promptTokenCount || 0;
        usageTotals.completionTokens += response.usageMetadata.candidatesTokenCount || 0;
        usageTotals.totalTokens += response.usageMetadata.totalTokenCount || 0;
      }

      const candidate = response.candidates?.[0];
      if (!candidate || !candidate.content || !candidate.content.parts) {
        throw new Error("No candidate returned from Gemini API");
      }

      const parts = candidate.content.parts;
      contents.push({ role: "model", parts });

      const functionCalls = parts.filter((p: any) => p.functionCall);
      if (functionCalls.length === 0) {
        finalRawText = parts.map((p: any) => p.text || "").join("\n").trim();
        break;
      }

      for (const fcPart of functionCalls) {
        const fc = fcPart.functionCall;
        const callStartTime = Date.now();
        let toolOutput: any;

        if (params.onToolCall) {
          try {
            toolOutput = await params.onToolCall(fc.name, fc.args || {});
          } catch (e: any) {
            toolOutput = { success: false, error: e.message };
          }
        } else {
          toolOutput = { success: false, error: "No tool handler configured" };
        }

        const callDuration = Date.now() - callStartTime;
        toolAudits.push({
          toolName: fc.name,
          input: fc.args,
          output: toolOutput.data || toolOutput.error,
          durationMs: callDuration,
          timestamp: new Date().toISOString(),
        });

        contents.push({
          role: "user",
          parts: [
            {
              functionResponse: {
                name: fc.name,
                response: toolOutput,
              },
            },
          ],
        });
      }
    }

    return {
      rawText: finalRawText,
      toolAudits,
      usage: usageTotals,
      modelUsed: params.model,
      provider: "gemini",
    };
  }

  async checkSolutionWithModel(params: {
    questionText: string;
    proposedSolution: string;
    model: string;
    apiKey: string;
  }): Promise<{ agrees: boolean; reasons: string; correctAnswer?: string }> {
    const ai = new GoogleGenAI({ apiKey: params.apiKey });

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

    const res = await ai.models.generateContent({
      model: params.model,
      contents: [{ role: "user", parts: [{ text: checkerPrompt }] }],
      config: {
        temperature: 0.1,
        responseMimeType: "application/json",
      },
    });

    try {
      const parsed = JSON.parse(res.candidates?.[0]?.content?.parts?.[0]?.text || "{}");
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
