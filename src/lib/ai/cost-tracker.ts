export interface CostRecord {
  timestamp: string;
  provider: string;
  model: string;
  studentId?: string;
  subject?: string;
  promptTokens: number;
  completionTokens: number;
  thinkingTokens: number;
  totalTokens: number;
  toolCallsCount: number;
  latencyMs: number;
  costNGN: number;
}

// Model pricing in USD per 1M tokens (converted to NGN at rate 1 USD = 1500 NGN)
const USD_TO_NGN = 1500;

interface ModelPrice {
  inputPerMillion: number;
  outputPerMillion: number;
}

const MODEL_PRICING: Record<string, ModelPrice> = {
  // Google Gemini
  "gemini-2.5-pro": { inputPerMillion: 1.25, outputPerMillion: 5.0 },
  "gemini-2.5-flash": { inputPerMillion: 0.15, outputPerMillion: 0.6 },
  "gemini-1.5-pro": { inputPerMillion: 1.25, outputPerMillion: 5.0 },
  "gemini-1.5-flash": { inputPerMillion: 0.075, outputPerMillion: 0.3 },

  // OpenAI
  "o3-mini": { inputPerMillion: 1.10, outputPerMillion: 4.40 },
  "o1": { inputPerMillion: 15.0, outputPerMillion: 60.0 },
  "gpt-4o": { inputPerMillion: 2.50, outputPerMillion: 10.0 },
  "gpt-4o-mini": { inputPerMillion: 0.15, outputPerMillion: 0.60 },

  // Anthropic Claude
  "claude-3-7-sonnet-20250219": { inputPerMillion: 3.0, outputPerMillion: 15.0 },
  "claude-3-5-sonnet-20241022": { inputPerMillion: 3.0, outputPerMillion: 15.0 },
  "claude-3-5-haiku-20241022": { inputPerMillion: 0.8, outputPerMillion: 4.0 },
};

export class CostTracker {
  private static monthlySpendNGN = 0;
  private static records: CostRecord[] = [];

  static calculateCostNGN(model: string, promptTokens: number, completionTokens: number): number {
    const pricing = MODEL_PRICING[model] || { inputPerMillion: 1.0, outputPerMillion: 4.0 };
    const costUSD = (promptTokens / 1_000_000) * pricing.inputPerMillion +
                    (completionTokens / 1_000_000) * pricing.outputPerMillion;
    return Math.round(costUSD * USD_TO_NGN * 100) / 100;
  }

  static recordTurn(params: {
    provider: string;
    model: string;
    studentId?: string;
    subject?: string;
    promptTokens: number;
    completionTokens: number;
    thinkingTokens?: number;
    toolCallsCount: number;
    latencyMs: number;
  }): CostRecord {
    const costNGN = this.calculateCostNGN(params.model, params.promptTokens, params.completionTokens);
    this.monthlySpendNGN += costNGN;

    const record: CostRecord = {
      timestamp: new Date().toISOString(),
      provider: params.provider,
      model: params.model,
      studentId: params.studentId,
      subject: params.subject,
      promptTokens: params.promptTokens,
      completionTokens: params.completionTokens,
      thinkingTokens: params.thinkingTokens || 0,
      totalTokens: params.promptTokens + params.completionTokens,
      toolCallsCount: params.toolCallsCount,
      latencyMs: params.latencyMs,
      costNGN,
    };

    this.records.push(record);
    this.checkBudgetAlerts();
    return record;
  }

  static getMonthlySpendNGN(): number {
    return this.monthlySpendNGN;
  }

  static isBudgetExceeded(): boolean {
    const budgetCap = parseFloat(process.env.AI_MONTHLY_BUDGET_NGN || "500000");
    return this.monthlySpendNGN >= budgetCap;
  }

  static getBudgetStatus(): {
    spentNGN: number;
    budgetCapNGN: number;
    percentUsed: number;
    isAlert50: boolean;
    isAlert80: boolean;
    isAlert100: boolean;
  } {
    const budgetCap = parseFloat(process.env.AI_MONTHLY_BUDGET_NGN || "500000");
    const percentUsed = (this.monthlySpendNGN / budgetCap) * 100;

    return {
      spentNGN: this.monthlySpendNGN,
      budgetCapNGN: budgetCap,
      percentUsed: Math.round(percentUsed * 10) / 10,
      isAlert50: percentUsed >= 50 && percentUsed < 80,
      isAlert80: percentUsed >= 80 && percentUsed < 100,
      isAlert100: percentUsed >= 100,
    };
  }

  private static checkBudgetAlerts() {
    const status = this.getBudgetStatus();
    if (status.isAlert100) {
      console.warn(`[AI_BUDGET_ALERT_100%] Monthly budget exhausted: ₦${status.spentNGN.toLocaleString()} / ₦${status.budgetCapNGN.toLocaleString()}`);
    } else if (status.isAlert80) {
      console.warn(`[AI_BUDGET_ALERT_80%] Monthly budget at 80%: ₦${status.spentNGN.toLocaleString()} / ₦${status.budgetCapNGN.toLocaleString()}`);
    } else if (status.isAlert50) {
      console.info(`[AI_BUDGET_ALERT_50%] Monthly budget at 50%: ₦${status.spentNGN.toLocaleString()} / ₦${status.budgetCapNGN.toLocaleString()}`);
    }
  }

  static resetForTest() {
    this.monthlySpendNGN = 0;
    this.records = [];
  }
}
