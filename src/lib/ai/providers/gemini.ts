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
      const candidateModels = Array.from(
        new Set([
          params.model,
          "gemini-3.6-flash",
          "gemini-3.1-flash-lite",
          "gemini-3.5-flash",
          "gemini-3.5-flash-lite",
          "gemini-flash-lite-latest",
        ])
      );

      let response: any = null;
      let lastErr: any = null;

      for (const m of candidateModels) {
        // Attempt 1: with tools (thinkingConfig omitted because Gemini API forbids thinking + tools)
        const configWithTools: any = {
          systemInstruction: params.systemInstruction,
          temperature: 0.1,
          tools: toolsConfig,
        };

        // Attempt 2: fallback without tools if function calling fails or is unsupported
        const configWithoutTools: any = {
          systemInstruction: params.systemInstruction,
          temperature: 0.1,
        };

        const configsToTry = [configWithTools, configWithoutTools];

        let modelSuccess = false;
        for (const cfg of configsToTry) {
          try {
            const res = await ai.models.generateContent({
              model: m,
              contents,
              config: cfg,
            });
            if (res?.candidates?.[0]?.content?.parts) {
              response = res;
              modelSuccess = true;
              break;
            }
          } catch (callErr: any) {
            lastErr = callErr;
            console.warn(`[GEMINI_CALL_WARN] Model ${m} call attempt failed: ${callErr.message}`);
          }
        }

        if (modelSuccess) {
          break;
        }

        console.warn(`[GEMINI_REASONING_FAILOVER] Model ${m} failed. Trying next candidate model...`);
      }

      // Direct REST fallback if SDK failed across all candidate models
      if (!response) {
        for (const m of candidateModels) {
          try {
            const restUrl = `https://generativelanguage.googleapis.com/v1beta/models/${m}:generateContent?key=${params.apiKey}`;
            const restRes = await fetch(restUrl, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                system_instruction: { parts: [{ text: params.systemInstruction }] },
                contents,
                generationConfig: { temperature: 0.1 },
              }),
            });
            if (restRes.ok) {
              const restJson = await restRes.json();
              if (restJson?.candidates?.[0]?.content?.parts) {
                response = restJson;
                break;
              }
            }
          } catch (restErr: any) {
            console.warn(`[GEMINI_REST_FALLBACK_WARN] Model ${m} REST failed: ${restErr.message}`);
          }
        }
      }

      if (!response) {
        throw lastErr || new Error("No candidate returned from Gemini API");
      }

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
        if (!fc || !fc.name) continue;
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
