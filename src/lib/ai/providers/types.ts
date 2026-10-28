import { SolverOutput } from "./solver-schema";

export type AIProviderName = "gemini" | "openai" | "anthropic" | "sandbox";

export interface ProviderCallParams {
  systemInstruction: string;
  userPrompt: string;
  imageBase64?: string;
  model: string;
  apiKey: string;
  reasoningEffort?: "low" | "medium" | "high";
  timeoutMs?: number;
  tools?: any[];
  onToolCall?: (toolName: string, args: any) => Promise<any>;
}

export interface ProviderCallResult {
  rawText: string;
  parsedOutput?: SolverOutput;
  toolAudits?: Array<{
    toolName: string;
    input: any;
    output: any;
    durationMs: number;
    timestamp: string;
  }>;
  usage?: {
    promptTokens: number;
    completionTokens: number;
    thinkingTokens?: number;
    totalTokens: number;
  };
  modelUsed: string;
  provider: AIProviderName;
}

export interface IAIProviderAdapter {
  providerName: AIProviderName;
  generateReasoningSolution(params: ProviderCallParams): Promise<ProviderCallResult>;
  checkSolutionWithModel(params: {
    questionText: string;
    proposedSolution: string;
    model: string;
    apiKey: string;
  }): Promise<{
    agrees: boolean;
    reasons: string;
    correctAnswer?: string;
  }>;
}
