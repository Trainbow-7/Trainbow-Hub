import nerdamer from "nerdamer";
import * as math from "mathjs";
import {
  AssessmentItem,
  AssessmentSubmission,
  AssessmentGradingResult,
  QuestionResult,
  ObjectiveMastery,
  NumericAnswerSpec,
} from "./types";
import { getMisconception } from "./misconceptions";

/**
 * Checks algebraic/symbolic equivalence between two mathematical expressions
 * Returns true if expr1 and expr2 simplify to the same form or their difference is 0.
 */
export function checkSymbolicEquivalence(userExpr: string, expectedExpr: string): boolean {
  if (!userExpr || !expectedExpr) return false;

  const clean = (s: string) =>
    s
      .trim()
      .replace(/\\\(|\\\)|\\\[|\\\]|\$/g, "")
      .replace(/−/g, "-")
      .replace(/²/g, "^2")
      .replace(/³/g, "^3")
      .replace(/\s+/g, "")
      .toLowerCase();

  const cUser = clean(userExpr);
  const cExpected = clean(expectedExpr);

  // 1. Direct string match after whitespace normalization
  if (cUser === cExpected) return true;

  // 2. Evaluate with nerdamer CAS: simplify(expr1 - (expr2)) === "0"
  try {
    // Add explicit multiplication for implicit terms e.g. 2x -> 2*x
    const norm = (s: string) =>
      s
        .replace(/(\d+)([a-zA-Z])/g, "$1*$2")
        .replace(/\)\(/g, ")*(")
        .replace(/([a-zA-Z0-9])\(/g, "$1*(")
        .replace(/\)([a-zA-Z0-9])/g, ")*$1");

    const diff = nerdamer(`(${norm(cUser)}) - (${norm(cExpected)})`).expand().simplify().text();
    if (diff === "0") return true;

    // Check ratio equals 1 (handles equivalent non-zero factorings)
    try {
      const ratio = nerdamer(`(${norm(cUser)}) / (${norm(cExpected)})`).simplify().text();
      if (ratio === "1") return true;
    } catch {
      // ignore
    }
  } catch {
    // If nerdamer parsing fails, try mathjs evaluation with test variable substitutions
  }

  // 3. Monte Carlo numerical check at test values: x in [0.5, 1.7, 3.1]
  try {
    const testValues = [0.5, 1.7, 3.2, 5.1];
    let allMatch = true;
    for (const val of testValues) {
      const uVal = math.evaluate(cUser.replace(/x/g, `(${val})`));
      const eVal = math.evaluate(cExpected.replace(/x/g, `(${val})`));
      if (Math.abs(uVal - eVal) > 1e-6) {
        allMatch = false;
        break;
      }
    }
    if (allMatch) return true;
  } catch {
    // ignore
  }

  return false;
}

/**
 * Checks numeric answer with tolerance and optional units
 */
export function checkNumericAnswer(
  userAns: any,
  expected: number | NumericAnswerSpec
): boolean {
  if (userAns === undefined || userAns === null || userAns === "") return false;

  let expectedVal: number;
  let tolerance = 0.02; // default tolerance 2% or 0.02

  if (typeof expected === "number") {
    expectedVal = expected;
  } else {
    expectedVal = expected.value;
    if (expected.tolerance !== undefined) {
      tolerance = expected.tolerance;
    }
  }

  // Parse user numeric answer (strip units or commas)
  let cleanUserStr = String(userAns).trim().replace(/,/g, "");
  // Extract number
  const numMatch = cleanUserStr.match(/[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?/);
  if (!numMatch) return false;
  const userNum = parseFloat(numMatch[0]);

  if (isNaN(userNum)) return false;

  // If expected has a unit, check that user didn't specify a contradicting unit
  if (typeof expected === "object" && expected.unit) {
    const unitPart = cleanUserStr.replace(numMatch[0], "").trim().toLowerCase();
    const expUnit = expected.unit.toLowerCase();
    if (unitPart && !unitPart.includes(expUnit) && !expUnit.includes(unitPart)) {
      // User provided an incorrect unit
      return false;
    }
  }

  const diff = Math.abs(userNum - expectedVal);
  return diff <= tolerance || (expectedVal !== 0 && diff / Math.abs(expectedVal) <= tolerance);
}

/**
 * Checks numeric tolerance with optional allowed unit list
 */
export function checkNumericTolerance(
  userAns: any,
  expectedVal: number,
  tolerance: number = 0.02,
  allowedUnits?: string[]
): boolean {
  if (userAns === undefined || userAns === null || userAns === "") return false;
  let cleanUserStr = String(userAns).trim().replace(/,/g, "");

  if (allowedUnits && allowedUnits.length > 0) {
    for (const unit of allowedUnits) {
      if (cleanUserStr.toLowerCase().includes(unit.toLowerCase())) {
        cleanUserStr = cleanUserStr.replace(new RegExp(unit.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi"), "").trim();
        break;
      }
    }
  }

  const numMatch = cleanUserStr.match(/[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?/);
  if (!numMatch) return false;
  const userNum = parseFloat(numMatch[0]);
  if (isNaN(userNum)) return false;

  const diff = Math.abs(userNum - expectedVal);
  return diff <= tolerance + 1e-9;
}

/**
 * Grades an entire assessment submission against the items
 */
export function gradeAssessment(
  items: AssessmentItem[],
  submission: AssessmentSubmission | Record<string, any>
): AssessmentGradingResult & { objectiveMastery: ObjectiveMastery[]; misconceptionsIdentified: any[] } {
  const itemMap = new Map<string, AssessmentItem>();
  for (const item of items) {
    itemMap.set(item.id, item);
  }

  const rawAnswers = (submission && (submission as any).answers) ? (submission as any).answers : (submission || {});

  let totalScore = 0;
  let correctCount = 0;
  const results: QuestionResult[] = [];
  const objectiveMap = new Map<string, { total: number; correct: number }>();
  const identifiedMisconceptionIds = new Set<string>();

  for (const item of items) {
    const userAns = rawAnswers[item.id];
    let isCorrect = false;
    let score = 0;
    let feedback = "";
    let misconceptionId: string | undefined;

    // Track objective grouping
    if (!objectiveMap.has(item.objective)) {
      objectiveMap.set(item.objective, { total: 0, correct: 0 });
    }
    const objStats = objectiveMap.get(item.objective)!;
    objStats.total++;

    switch (item.questionType) {
      case "single_choice":
      case "true_false_justification":
      case "table_reading": {
        const uStr = String(userAns || "").trim().toUpperCase();
        const expStr = String(item.correctAnswer).trim().toUpperCase();
        isCorrect = uStr === expStr;
        score = isCorrect ? 1 : 0;

        // Check if user chose an option tagged with a specific misconception
        if (!isCorrect && item.options) {
          const selectedOption = item.options.find((o) => o.id.toUpperCase() === uStr);
          const miscTag = selectedOption?.misconceptionTag || selectedOption?.misconceptionId;
          if (miscTag) {
            misconceptionId = miscTag;
            feedback = selectedOption?.feedback || selectedOption?.rationale || "";
            identifiedMisconceptionIds.add(miscTag);
          }
        }
        break;
      }

      case "multi_select": {
        const uArr: string[] = Array.isArray(userAns)
          ? userAns.map((v) => String(v).trim().toUpperCase())
          : [String(userAns || "").trim().toUpperCase()];
        const expArr: string[] = Array.isArray(item.correctAnswer)
          ? item.correctAnswer.map((v) => String(v).trim().toUpperCase())
          : [String(item.correctAnswer).trim().toUpperCase()];

        const correctSelected = uArr.filter((id) => expArr.includes(id)).length;
        const incorrectSelected = uArr.filter((id) => !expArr.includes(id)).length;

        // All correct and none wrong
        if (correctSelected === expArr.length && incorrectSelected === 0) {
          isCorrect = true;
          score = 1;
        } else if (correctSelected > 0 && incorrectSelected === 0) {
          // Partial credit
          score = correctSelected / expArr.length;
          isCorrect = false;
        } else {
          score = 0;
          isCorrect = false;
        }
        break;
      }

      case "numeric_entry": {
        isCorrect = checkNumericAnswer(userAns, item.correctAnswer as number | NumericAnswerSpec);
        score = isCorrect ? 1 : 0;
        break;
      }

      case "symbolic_entry": {
        const uStr = String(userAns || "").trim();
        const expStr = String(item.correctAnswer).trim();
        isCorrect = checkSymbolicEquivalence(uStr, expStr);
        score = isCorrect ? 1 : 0;
        break;
      }

      case "ordering": {
        const userSteps: string[] = Array.isArray(userAns) ? userAns : [];
        const expSteps: string[] = (item.correctAnswer as any)?.steps || [];
        if (userSteps.length === expSteps.length && userSteps.every((s, i) => s === expSteps[i])) {
          isCorrect = true;
          score = 1;
        } else {
          isCorrect = false;
          score = 0;
        }
        break;
      }

      case "structured_theory": {
        // Structured questions support method/accuracy partial credit
        if (typeof userAns === "object" && userAns !== null) {
          // Graded via sub-part answers
          const parts = item.markingScheme || [];
          let marksEarned = 0;
          let marksTotal = 0;
          for (const m of parts) {
            marksTotal += m.marks;
            if (userAns[m.step]) marksEarned += m.marks;
          }
          score = marksTotal > 0 ? marksEarned / marksTotal : 0;
          isCorrect = score >= 0.8;
        } else {
          isCorrect = checkSymbolicEquivalence(String(userAns || ""), String(item.correctAnswer));
          score = isCorrect ? 1 : 0;
        }
        break;
      }
    }

    if (isCorrect) {
      correctCount++;
      objStats.correct++;
    }
    totalScore += score;

    results.push({
      questionId: item.id,
      prompt: item.prompt,
      thinkingLevel: item.thinkingLevel,
      objective: item.objective,
      userAnswer: userAns,
      correctAnswer: item.correctAnswer,
      isCorrect,
      score,
      explanation: item.explanation,
      misconceptionId,
      feedback,
      solutionSteps: item.solutionSteps,
    });
  }

  const totalQuestions = items.length;
  const percentage = totalQuestions > 0 ? Math.round((totalScore / totalQuestions) * 100) : 0;
  const passPercentage = 60; // 60% threshold for checkpoint
  const passed = percentage >= passPercentage;

  // Objective Masteries calculation: >= 80% Understood, 60-79% Almost There, <60% Needs Work
  const objectiveMasteries: ObjectiveMastery[] = [];
  const missedObjectives: string[] = [];

  for (const [objective, stats] of objectiveMap.entries()) {
    const objPct = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
    let status: ObjectiveMastery["status"] = "needs_work";
    if (objPct >= 80) {
      status = "understood";
    } else if (objPct >= 50) {
      status = "almost_there";
    } else {
      status = "needs_work";
    }

    objectiveMasteries.push({
      objective,
      totalQuestions: stats.total,
      correctQuestions: stats.correct,
      percentage: objPct,
      status,
    });
  }

  // Compile identified misconceptions
  const identifiedMisconceptions = Array.from(identifiedMisconceptionIds)
    .map((idOrTag) => {
      const m = getMisconception(idOrTag);
      return {
        id: idOrTag,
        tag: idOrTag,
        code: m?.code || idOrTag,
        title: m?.title || idOrTag,
        remediation: m?.remediation || "Review this topic to address this misconception.",
      };
    });

  // Recommended lessons for review
  const lessonSlug = (submission as any)?.lessonId || items[0]?.lessonId || "";
  const recommendedLessons: { slug: string; title: string; reason: string }[] = [];
  if (!passed || missedObjectives.length > 0) {
    recommendedLessons.push({
      slug: lessonSlug,
      title: `Review Core Concept: ${items[0]?.objective || "This Topic"}`,
      reason: missedObjectives.length > 0 ? `Needs practice on: ${missedObjectives[0]}` : "Reinforce foundation principles",
    });
  }

  const attemptId = `asm-${Date.now()}-${Math.random().toString(36).substring(7)}`;

  return {
    attemptId,
    score: totalScore,
    percentage,
    totalQuestions,
    correctCount,
    passed,
    passPercentage,
    timeSpentSeconds: (submission as any)?.timeSpentSeconds || 0,
    mode: (submission as any)?.mode || "practice",
    results,
    objectiveMasteries,
    objectiveMastery: objectiveMasteries,
    identifiedMisconceptions,
    misconceptionsIdentified: identifiedMisconceptions,
    recommendedLessons,
    isMastered: passed && percentage >= 80,
  } as any;
}

