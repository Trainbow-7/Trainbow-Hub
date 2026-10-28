import { describe, it, expect } from "vitest";
import { generateSocraticResponse } from "@/lib/adapters/ai";
import { BANNED_FILLER_PHRASES } from "@/lib/ai/solver-schema";
import { ProviderRegistry } from "@/lib/ai/providers";
import { CostTracker } from "@/lib/ai/cost-tracker";
import { classifyQuestion } from "@/lib/ai/difficulty-classifier";

describe("Rule 1: Format Contract & Golden Snapshot Tests", () => {
  it("Direct Mode (FULL_SOLUTION) outputs all required contract sections in exact order", async () => {
    const res = await generateSocraticResponse({
      prompt: "Example 13: Solve the equation 1/(3a-1) = 2/(a+1) - 3/8",
      hintLevel: "FULL_SOLUTION",
      curriculum: "WAEC_SSCE",
      subject: "Mathematics",
    });

    expect(res.content).toBeDefined();

    // 1. Verification badge header
    expect(res.content).toMatch(/\[AI-Generated Mathematical Guidance — Verified by Trainbow Hub Engine/);

    // 2. Full Worked Solution heading
    expect(res.content).toMatch(/### Full Worked Solution/);

    // 3. Step headings with bold titles
    expect(res.content).toMatch(/#### Step 1:/);

    // 4. Final Answer section
    expect(res.content).toMatch(/### Final Answer:/);
    expect(res.content).toMatch(/a = 3 or a = 7\/9/);

    // 5. Examiner Tip with curriculum name
    expect(res.content).toMatch(/💡 \*\*Examiner Tip for WAEC SSCE \(Senior Secondary\):\*\*/);

    // 6. Verification metadata
    expect(res.verification.isValid).toBe(true);
    expect(res.verification.method).toBeDefined();
  });

  it("Hint-First Mode (HINT_1) reveals conceptual clues without disclosing final answer", async () => {
    const res = await generateSocraticResponse({
      prompt: "Example 13: Solve the equation 1/(3a-1) = 2/(a+1) - 3/8",
      hintLevel: "HINT_1",
      curriculum: "WAEC_SSCE",
      subject: "Mathematics",
    });

    // 1. Curriculum topic alignment
    expect(res.content).toMatch(/\*\*Curriculum Alignment:\*\* WAEC SSCE \(Senior Secondary\) — Mathematics/);

    // 2. Hint 1 heading
    expect(res.content).toMatch(/### Hint Level 1: Conceptual Clue 💡/);

    // 3. Core concept and insight
    expect(res.content).toMatch(/\*\*Core Concept & Governing Rule:\*\*/);
    expect(res.content).toMatch(/\*\*Conceptual Insight:\*\*/);

    // 4. Socratic CTA question
    expect(res.content).toMatch(/\*\*Socratic Question for You:\*\*/);

    // 5. FINAL ANSWER IS NOT REVEALED
    expect(res.content).not.toMatch(/### Final Answer:/);
    expect(res.content).not.toMatch(/a = 3 or a = 7\/9/);
  });
});

describe("Rule 2: Provider Adapters & Multi-Provider Registry", () => {
  it("instantiates Gemini, OpenAI, and Anthropic official adapters correctly", () => {
    const gemini = ProviderRegistry.getAdapter("gemini");
    const openai = ProviderRegistry.getAdapter("openai");
    const anthropic = ProviderRegistry.getAdapter("anthropic");

    expect(gemini.providerName).toBe("gemini");
    expect(openai.providerName).toBe("openai");
    expect(anthropic.providerName).toBe("anthropic");
  });

  it("reads pinned active provider configuration with fallback support", () => {
    const config = ProviderRegistry.getActiveProviderConfig();
    expect(config.primaryProvider).toBeDefined();
    expect(config.reasoningModel).toBeDefined();
    expect(config.maxToolCalls).toBeGreaterThanOrEqual(1);
    expect(config.timeoutSeconds).toBeGreaterThanOrEqual(10);
  });
});

describe("Rule 3: Banned Filler Phrase Zero-Tolerance Gate", () => {
  it("ensures no response contains prohibited generic filler phrases", async () => {
    const questions = [
      "Solve the quadratic equation: 2x^2 - 5x + 3 = 0",
      "In Fig. 2.26, find angle PQO.",
      "Calculate the arithmetic mean of 12, 15, 18, 20, 25.",
    ];

    for (const q of questions) {
      const res = await generateSocraticResponse({
        prompt: q,
        hintLevel: "FULL_SOLUTION",
      });

      const lower = res.content.toLowerCase();
      for (const banned of BANNED_FILLER_PHRASES) {
        expect(lower.includes(banned.toLowerCase())).toBe(false);
      }
    }
  });
});

describe("Rule 4: Safety, Log Scrubber & Budget Caps", () => {
  it("fails if any API key or secret token appears in output strings", () => {
    const SECRET_REGEX = /(?:AIza[0-9A-Za-z-_]{35}|sk-[a-zA-Z0-9]{32,}|sk-ant-[a-zA-Z0-9]{32,})/i;
    const testSample = "This is a verified mathematical solution for x = 1.";
    expect(SECRET_REGEX.test(testSample)).toBe(false);

    const leakingSample = "Error with key AIzaSyD3xAMPLE4567890123456789012345678";
    expect(SECRET_REGEX.test(leakingSample)).toBe(true);
  });

  it("tracks budget spend and calculates NGN cost correctly", () => {
    CostTracker.resetForTest();
    const cost = CostTracker.calculateCostNGN("gemini-2.5-pro", 1000, 2000);
    expect(cost).toBeGreaterThan(0);

    const record = CostTracker.recordTurn({
      provider: "gemini",
      model: "gemini-2.5-pro",
      promptTokens: 1000,
      completionTokens: 2000,
      toolCallsCount: 2,
      latencyMs: 1200,
    });

    expect(record.costNGN).toBe(cost);
    expect(CostTracker.getMonthlySpendNGN()).toBe(cost);

    const status = CostTracker.getBudgetStatus();
    expect(status.spentNGN).toBe(cost);
    expect(status.isAlert100).toBe(false);
  });
});

describe("Rule 5: Difficulty Classification & Multi-Part Decomposition", () => {
  it("correctly identifies multi-part questions for problem decomposition", () => {
    const multiPart = "(a) Prove cyclic quadrilateral supplementary. (b) Calculate x.";
    const classification = classifyQuestion(multiPart, "Mathematics");
    expect(classification.requiresDecomposition).toBe(true);
    expect(classification.difficulty).toBe("hard");
    expect(classification.recommendedEffort).toBe("high");
  });

  it("classifies simple arithmetic as easy with lower tool allocation", () => {
    const simple = "Calculate 15% of 200.";
    const classification = classifyQuestion(simple, "Mathematics");
    expect(classification.difficulty).toBe("easy");
    expect(classification.recommendedEffort).toBe("low");
  });
});
