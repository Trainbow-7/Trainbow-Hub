import { z } from "zod";

/**
 * Validated Structured Output Schema for Reasoning-Capable Academic Solvers
 */
export const SolverStepSchema = z.object({
  stepNumber: z.number().optional(),
  statement: z.string().describe("Mathematical statement, derivation line, or equation setup"),
  reason: z.string().describe("Geometrical theorem, algebraic law, rule, or physical principle used"),
  result: z.string().optional().describe("Computed intermediate numerical value or deduced equation"),
});

export const SolverOutputSchema = z.object({
  domain: z.string().default("MATHEMATICS"),
  detectedSubject: z.string().default("Mathematics"),
  summaryTitle: z.string().default("Academic Worked Solution"),
  keyFormulaOrLaw: z.string().describe("Core theorem, formula, or governing law"),
  conceptualClue: z.string().describe("Guiding conceptual insight for Hint Level 1"),
  steps: z.array(SolverStepSchema).min(1).describe("Step-by-step rigorous deduction with reasons"),
  finalAnswer: z.string().describe("Unambiguous final answer with units or degrees (e.g. 'Angle PQO = 35°' or 'x = 1 or x = 3/2')"),
  examinerTips: z.string().optional().describe("Specific marking guide tip tailored to this problem"),
  confidence: z.number().min(0).max(100).default(95),
});

export type SolverStep = z.infer<typeof SolverStepSchema>;
export type SolverOutput = z.infer<typeof SolverOutputSchema>;

export const BANNED_FILLER_PHRASES = [
  "analyze question requirements",
  "apply curriculum framework",
  "complete curriculum-grounded academic answer provided",
  "completecurriculum - groundedacademicanswerprovided",
  "grounded academic answer provided",
  "groundedacademicanswerprovided",
  "carefully define the core terms and concepts",
  "apply the authoritative rules, theorems",
  "synthesize and conclude",
];

export interface QualityGateResult {
  passed: boolean;
  violations: string[];
}

/**
 * Solution quality gate:
 * (a) Must use at least one given value or parameter from question
 * (b) Must contain at least one computed result or concrete derivation step
 * (c) Must contain a final answer that is not placeholder text
 * (d) Must contain none of the banned filler phrases
 */
export function validateSolutionQuality(
  output: SolverOutput,
  questionText: string
): QualityGateResult {
  const violations: string[] = [];

  const allText = `${output.summaryTitle} ${output.keyFormulaOrLaw} ${output.conceptualClue} ${output.steps.map(s => `${s.statement} ${s.reason} ${s.result || ""}`).join(" ")} ${output.finalAnswer} ${output.examinerTips || ""}`.toLowerCase();

  // (d) Banned phrases check
  for (const banned of BANNED_FILLER_PHRASES) {
    if (allText.includes(banned.toLowerCase())) {
      violations.push(`Contains banned filler phrase: "${banned}"`);
    }
  }

  // (c) Final answer placeholder check
  const faLower = output.finalAnswer.trim().toLowerCase();
  if (
    !faLower ||
    faLower.length < 2 ||
    faLower.includes("grounded") ||
    faLower.includes("academic answer provided") ||
    faLower.includes("placeholder")
  ) {
    violations.push("Final answer is empty, too short, or placeholder text");
  }

  // (b) At least one concrete step
  if (!output.steps || output.steps.length === 0) {
    violations.push("Solution contains no steps");
  } else {
    const hasMeaningfulStep = output.steps.some(
      (s) => (s.statement && s.statement.length > 5) || (s.result && s.result.length > 0)
    );
    if (!hasMeaningfulStep) {
      violations.push("Steps contain no meaningful mathematical statement or result");
    }
  }

  // (a) Given value / concrete concept usage check:
  // If question has numbers (like 77, 68, 63, 10, 5, etc.), at least one number or variable must appear
  const numbersInQuestion = questionText.match(/\b\d+(?:\.\d+)?\b/g);
  if (numbersInQuestion && numbersInQuestion.length > 0) {
    const usesNumber = numbersInQuestion.some((num) => allText.includes(num));
    // If no exact number, check for variables/points like x, P, Q, R, S
    const lettersInQuestion = questionText.match(/\b[A-Z]\b/g);
    const usesLetter = lettersInQuestion && lettersInQuestion.length >= 2
      ? lettersInQuestion.filter((l) => allText.includes(l.toLowerCase())).length >= 2
      : true;

    if (!usesNumber && !usesLetter) {
      violations.push("Solution fails to reference any given values or geometric labels from the question");
    }
  }

  return {
    passed: violations.length === 0,
    violations,
  };
}
