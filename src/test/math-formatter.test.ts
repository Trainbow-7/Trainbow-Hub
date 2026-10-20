import { describe, it, expect } from "vitest";
import { normalizeMathInText } from "@/lib/ai/math-formatter";

describe("Mathematical Formatting & OCR Normalization", () => {
  it("wraps un-delimited LaTeX equations with fractions into $ delimiters", () => {
    const input = "Solve the equation \\frac{1}{3a - 1} = \\frac{2}{a + 1} - \\frac{3}{8}.";
    const result = normalizeMathInText(input);
    expect(result).toBe("Solve the equation $\\frac{1}{3a - 1} = \\frac{2}{a + 1} - \\frac{3}{8}$.");
  });

  it("wraps standalone LaTeX equations on their own line into $$ delimiters", () => {
    const input = "\\frac{1}{3a - 1} = \\frac{2}{a + 1} - \\frac{3}{8}";
    const result = normalizeMathInText(input);
    expect(result).toBe("$$\\frac{1}{3a - 1} = \\frac{2}{a + 1} - \\frac{3}{8}$$");
  });

  it("leaves already delimited LaTeX expressions untouched", () => {
    const input = "Solve the equation $\\frac{1}{3a - 1} = \\frac{2}{a + 1} - \\frac{3}{8}$.";
    const result = normalizeMathInText(input);
    expect(result).toBe("Solve the equation $\\frac{1}{3a - 1} = \\frac{2}{a + 1} - \\frac{3}{8}$.");
  });

  it("leaves display math blocks $$...$$ untouched", () => {
    const input = "$$\\frac{1}{3a - 1} = \\frac{2}{a + 1} - \\frac{3}{8}$$";
    const result = normalizeMathInText(input);
    expect(result).toBe("$$\\frac{1}{3a - 1} = \\frac{2}{a + 1} - \\frac{3}{8}$$");
  });

  it("formats algebraic LCM expressions with parenthesis and variables", () => {
    const input = "The LCM of the denominators is 8(3a - 1)(a + 1).";
    const result = normalizeMathInText(input);
    expect(result).toBe("The LCM of the denominators is $8(3a - 1)(a + 1)$.");
  });

  it("handles multi-line exam questions from textbook photos (Example 13)", () => {
    const input = `Example 13
Solve the equation \\frac{1}{3a - 1} = \\frac{2}{a + 1} - \\frac{3}{8}.
The LCM of the denominators is 8(3a - 1)(a + 1).`;

    const result = normalizeMathInText(input);
    expect(result).toContain("Example 13");
    expect(result).toContain("Solve the equation $\\frac{1}{3a - 1} = \\frac{2}{a + 1} - \\frac{3}{8}$.");
    expect(result).toContain("The LCM of the denominators is $8(3a - 1)(a + 1)$.");
  });
});
