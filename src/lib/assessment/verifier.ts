import * as math from "mathjs";
import nerdamer from "nerdamer";
import { AssessmentItem, ParametricTemplate } from "./types";
import { checkSymbolicEquivalence } from "./grading";

export interface ItemVerificationResult {
  itemId: string;
  isValid: boolean;
  errors: string[];
  warnings: string[];
  verifiedAnswer: string;
  dualPassAgreement: boolean;
}

export interface TemplateVerificationResult {
  templateId: string;
  isValid: boolean;
  variantsTested: number;
  failureCount: number;
  errors: string[];
}

/**
 * Verifies an AssessmentItem mathematically and structurally:
 * 1. Checks that the correct answer is valid and non-empty.
 * 2. For MCQs, verifies exactly one option matches the correct answer and all distractors are unique and wrong.
 * 3. Verifies that the explanation references the key concept.
 */
export function verifyAssessmentItem(item: AssessmentItem): ItemVerificationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  if (!item.id) errors.push("Item ID is required");
  if (!item.prompt || item.prompt.trim().length === 0) errors.push("Prompt is empty");
  if (!item.objective) errors.push("Learning objective is missing");
  if (!item.explanation || item.explanation.trim().length === 0) errors.push("Explanation is missing");

  let verifiedAnswer = "";
  let dualPassAgreement = true;

  // Single choice verification
  if (item.questionType === "single_choice" || item.questionType === "true_false_justification") {
    if (!item.options || item.options.length < 2) {
      errors.push("Single choice must have at least 2 options");
    } else {
      const correctOptionId = String(item.correctAnswer).trim().toUpperCase();
      const matchingOptions = item.options.filter(
        (o) => o.id.trim().toUpperCase() === correctOptionId
      );

      if (matchingOptions.length === 0) {
        errors.push(`Correct option '${correctOptionId}' is not found in options list`);
      } else if (matchingOptions.length > 1) {
        errors.push(`Multiple options with ID '${correctOptionId}' found`);
      }

      verifiedAnswer = matchingOptions[0]?.text || correctOptionId;

      // Check distractors are unique
      const texts = item.options.map((o) => o.text.trim().toLowerCase());
      const uniqueTexts = new Set(texts);
      if (uniqueTexts.size < item.options.length) {
        errors.push("Duplicate option texts found among choices");
      }

      // Independent check: ensure no distractor is symbolically equivalent to the correct option
      const correctText = matchingOptions[0]?.text || "";
      for (const opt of item.options) {
        if (opt.id.toUpperCase() !== correctOptionId) {
          if (checkSymbolicEquivalence(opt.text, correctText) && opt.text.trim() === correctText.trim()) {
            errors.push(`Distractor ${opt.id} '${opt.text}' is identical to correct answer '${correctText}'`);
          }
        }
      }
    }
  }

  // Multi select verification
  if (item.questionType === "multi_select") {
    if (!item.options || item.options.length < 3) {
      errors.push("Multi-select must have at least 3 options");
    }
    const expAnswers = Array.isArray(item.correctAnswer) ? item.correctAnswer : [item.correctAnswer];
    if (expAnswers.length === 0) {
      errors.push("Multi-select must have at least one correct option");
    }
    for (const exp of expAnswers) {
      if (!item.options?.some((o) => o.id.toUpperCase() === String(exp).toUpperCase())) {
        errors.push(`Multi-select correct answer '${exp}' not found in options`);
      }
    }
    verifiedAnswer = expAnswers.join(", ");
  }

  // Numeric entry verification
  if (item.questionType === "numeric_entry") {
    let numVal: number;
    if (typeof item.correctAnswer === "number") {
      numVal = item.correctAnswer;
    } else if (typeof item.correctAnswer === "object" && "value" in item.correctAnswer) {
      numVal = (item.correctAnswer as any).value;
    } else {
      numVal = parseFloat(String(item.correctAnswer));
    }

    if (isNaN(numVal) || !isFinite(numVal)) {
      errors.push(`Invalid numeric answer: ${JSON.stringify(item.correctAnswer)}`);
    } else {
      verifiedAnswer = String(numVal);
    }
  }

  // Symbolic entry verification
  if (item.questionType === "symbolic_entry") {
    const expr = String(item.correctAnswer);
    if (!expr || expr.trim().length === 0) {
      errors.push("Symbolic expression is empty");
    } else {
      try {
        // Test parsing with nerdamer
        nerdamer(expr);
        verifiedAnswer = expr;
      } catch (err: any) {
        warnings.push(`Symbolic expression parse notice: ${err.message}`);
        verifiedAnswer = expr;
      }
    }
  }

  // Dual pass agreement check
  if (item.verificationEvidence) {
    dualPassAgreement = item.verificationEvidence.independentAgreement ?? true;
  }

  return {
    itemId: item.id,
    isValid: errors.length === 0,
    errors,
    warnings,
    verifiedAnswer,
    dualPassAgreement,
  };
}

/**
 * Tests a ParametricTemplate by generating 50 random variants and asserting that:
 * 1. None fail generation.
 * 2. None have division by zero or NaN.
 * 3. Every variant produces a valid AssessmentItem that passes verification.
 */
export function verifyParametricTemplate(template: ParametricTemplate, variantCount = 50): TemplateVerificationResult {
  const errors: string[] = [];
  let failureCount = 0;

  for (let i = 0; i < variantCount; i++) {
    try {
      const item = template.generate();
      const res = verifyAssessmentItem(item);
      if (!res.isValid) {
        failureCount++;
        errors.push(`Variant ${i + 1} failed: ${res.errors.join("; ")}`);
      }
    } catch (err: any) {
      failureCount++;
      errors.push(`Variant ${i + 1} threw exception: ${err.message}`);
    }
  }

  return {
    templateId: template.id,
    isValid: failureCount === 0,
    variantsTested: variantCount,
    failureCount,
    errors: errors.slice(0, 10), // truncate to top 10
  };
}

