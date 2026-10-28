import { IAIProviderAdapter, ProviderCallParams, ProviderCallResult, AIProviderName } from "./types";
import { GeminiProviderAdapter } from "./gemini";
import { OpenAIProviderAdapter } from "./openai";
import { AnthropicProviderAdapter } from "./anthropic";

export * from "./types";
export * from "./tool-definitions";
export * from "./gemini";
export * from "./openai";
export * from "./anthropic";

export class ProviderRegistry {
  private static adapters: Map<AIProviderName, IAIProviderAdapter> = new Map([
    ["gemini", new GeminiProviderAdapter()],
    ["openai", new OpenAIProviderAdapter()],
    ["anthropic", new AnthropicProviderAdapter()],
  ]);

  static getAdapter(provider: AIProviderName): IAIProviderAdapter {
    const adapter = this.adapters.get(provider);
    if (!adapter) {
      throw new Error(`Unsupported AI Provider: "${provider}". Must be one of: gemini, openai, anthropic.`);
    }
    return adapter;
  }

  static getActiveProviderConfig(): {
    primaryProvider: AIProviderName;
    secondaryProvider?: AIProviderName;
    reasoningModel: string;
    visionModel: string;
    fastModel: string;
    apiKey: string;
    routing: "always_strong" | "adaptive";
    reasoningEffort: "low" | "medium" | "high";
    maxToolCalls: number;
    timeoutSeconds: number;
  } {
    const primaryProvider = (process.env.AI_PROVIDER || "gemini").toLowerCase() as AIProviderName;
    const secondaryProvider = (process.env.AI_SECONDARY_PROVIDER || "").toLowerCase() as AIProviderName | undefined;

    let apiKey = "";
    if (primaryProvider === "gemini") apiKey = process.env.GEMINI_API_KEY || "";
    else if (primaryProvider === "openai") apiKey = process.env.OPENAI_API_KEY || "";
    else if (primaryProvider === "anthropic") apiKey = process.env.ANTHROPIC_API_KEY || "";

    const defaultReasoningModel: Record<AIProviderName, string> = {
      gemini: "gemini-2.5-pro",
      openai: "o3-mini",
      anthropic: "claude-3-7-sonnet-20250219",
      sandbox: "sandbox-model",
    };

    const defaultVisionModel: Record<AIProviderName, string> = {
      gemini: "gemini-2.5-pro",
      openai: "gpt-4o",
      anthropic: "claude-3-7-sonnet-20250219",
      sandbox: "sandbox-vision",
    };

    const defaultFastModel: Record<AIProviderName, string> = {
      gemini: "gemini-2.5-flash",
      openai: "gpt-4o-mini",
      anthropic: "claude-3-5-haiku-20241022",
      sandbox: "sandbox-fast",
    };

    return {
      primaryProvider,
      secondaryProvider: secondaryProvider && secondaryProvider !== primaryProvider ? secondaryProvider : undefined,
      reasoningModel: process.env.AI_REASONING_MODEL || defaultReasoningModel[primaryProvider] || "gemini-2.5-pro",
      visionModel: process.env.AI_VISION_MODEL || defaultVisionModel[primaryProvider] || "gemini-2.5-pro",
      fastModel: process.env.AI_FAST_MODEL || defaultFastModel[primaryProvider] || "gemini-2.5-flash",
      apiKey,
      routing: (process.env.AI_ROUTING || "always_strong") as "always_strong" | "adaptive",
      reasoningEffort: (process.env.AI_REASONING_EFFORT || "high") as "low" | "medium" | "high",
      maxToolCalls: parseInt(process.env.AI_MAX_TOOL_CALLS || "8", 10),
      timeoutSeconds: parseInt(process.env.AI_REQUEST_TIMEOUT_SECONDS || "45", 10),
    };
  }
}
