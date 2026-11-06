import { describe, it, expect } from "vitest";
import {
  checkSymbolicEquivalence,
  checkNumericTolerance,
  gradeAssessment,
} from "@/lib/assessment/grading";
import {
  sanitizeAssessmentItem,
  drawLessonCheckpoint,
  drawModuleTest,
  drawCourseFinalAssessment,
} from "@/lib/assessment/selector";
import { AssessmentItem } from "@/lib/assessment/types";

describe("Assessment Grading Engine & Security Sanitization", () => {
  describe("Symbolic CAS Equivalence Grading", () => {
    it("recognizes factorized and expanded algebraic expressions as equivalent", () => {
      expect(checkSymbolicEquivalence("2(x + 2)", "2x + 4")).toBe(true);
      expect(checkSymbolicEquivalence("(x - 3)*(x + 3)", "x^2 - 9")).toBe(true);
      expect(checkSymbolicEquivalence("x^2 + 2x + 1", "(x + 1)^2")).toBe(true);
    });

    it("rejects non-equivalent expressions", () => {
      expect(checkSymbolicEquivalence("2x + 5", "2x + 4")).toBe(false);
      expect(checkSymbolicEquivalence("x^2 + 9", "(x + 3)^2")).toBe(false);
    });

    it("handles whitespace and ordering variations cleanly", () => {
      expect(checkSymbolicEquivalence("  4 + 2*x  ", "2x + 4")).toBe(true);
      expect(checkSymbolicEquivalence("-3 + x", "x - 3")).toBe(true);
    });
  });

  describe("Numeric Tolerance Grading", () => {
    it("accepts inputs within tolerance", () => {
      expect(checkNumericTolerance("12.5", 12.5, 0.05)).toBe(true);
      expect(checkNumericTolerance("12.53", 12.5, 0.05)).toBe(true);
      expect(checkNumericTolerance("12.48", 12.5, 0.05)).toBe(true);
    });

    it("rejects inputs outside tolerance", () => {
      expect(checkNumericTolerance("12.60", 12.5, 0.05)).toBe(false);
      expect(checkNumericTolerance("12.35", 12.5, 0.05)).toBe(false);
    });

    it("accepts answers with specified unit suffixes", () => {
      expect(checkNumericTolerance("48 cm", 48, 0.1, ["cm", "centimeters"])).toBe(true);
      expect(checkNumericTolerance("₦14,000", 14000, 1, ["₦", "NGN", "Naira"])).toBe(true);
    });
  });

  describe("Security Sanitization (Zero Answer Leakage)", () => {
    const mockItem: AssessmentItem = {
      id: "sec-test-1",
      courseSlug: "waec-ssce-mathematics-mastery",
      moduleId: "waec-m1",
      lessonId: "l1",
      objectiveId: "obj-1",
      topic: "Fractions",
      objective: "Add fractions",
      thinkingLevel: "application",
      questionType: "single_choice",
      prompt: "What is 1/2 + 1/4?",
      options: [
        {
          id: "A",
          text: "3/4",
          misconceptionTag: undefined,
          rationale: "Correct sum",
          remediation: "Good job",
        },
        {
          id: "B",
          text: "2/6",
          misconceptionTag: "MIS-FRAC-DENOM-SUM",
          rationale: "Added numerators and denominators directly",
          remediation: "Find common denominator first",
        },
      ],
      correctAnswer: "A",
      correctOptionId: "A",
      explanation: "1/2 + 1/4 = 2/4 + 1/4 = 3/4",
      markingScheme: "M1 for common denominator 4; A1 for 3/4",
      hint: "Find common denominator",
      original: true,
      reviewStatus: "needs_teacher_review",
      softwareVerified: true,
      verificationEvidence: {
        method: "cas",
        computedAnswer: "3/4",
        disjointOptions: true,
      },
    };

    it("strips all answers, explanations, and distractor rationales in sanitized output", () => {
      const sanitized = sanitizeAssessmentItem(mockItem);

      // Must retain prompt, ID, options text
      expect(sanitized.id).toBe("sec-test-1");
      expect(sanitized.prompt).toBe("What is 1/2 + 1/4?");
      expect(sanitized.options?.length).toBe(2);
      expect(sanitized.options?.[0].text).toBe("3/4");
      expect(sanitized.options?.[1].text).toBe("2/6");

      // MUST STRIP secrets
      expect((sanitized as any).correctAnswer).toBeUndefined();
      expect((sanitized as any).correctOptionId).toBeUndefined();
      expect((sanitized as any).explanation).toBeUndefined();
      expect((sanitized as any).markingScheme).toBeUndefined();
      expect((sanitized as any).verificationEvidence).toBeUndefined();

      // Distractor hints and rationales must also be stripped
      expect((sanitized.options?.[0] as any).rationale).toBeUndefined();
      expect((sanitized.options?.[0] as any).remediation).toBeUndefined();
      expect((sanitized.options?.[1] as any).misconceptionTag).toBeUndefined();
    });
  });

  describe("Checkpoint & Assessment Random Draw Selectors", () => {
    it("draws a balanced 6-8 question checkpoint for a lesson", () => {
      const checkpoint = drawLessonCheckpoint("waec-ssce-mathematics-mastery", "l1", 7);
      expect(checkpoint.length).toBe(7);
      // Ensure all drawn questions belong to l1
      for (const q of checkpoint) {
        expect(q.lessonId).toBe("l1");
      }
    });

    it("draws a 10-12 question module test across lessons", () => {
      const moduleTest = drawModuleTest("waec-ssce-mathematics-mastery", "waec-m1", 10);
      expect(moduleTest.length).toBe(10);
      for (const q of moduleTest) {
        expect(q.moduleId).toBe("waec-m1");
      }
    });

    it("draws a 30-40 question comprehensive course final exam", () => {
      const finalExam = drawCourseFinalAssessment("waec-ssce-mathematics-mastery", 30);
      expect(finalExam.length).toBe(30);
      for (const q of finalExam) {
        expect(q.courseSlug).toBe("waec-ssce-mathematics-mastery");
      }
    });
  });

  describe("Server-Side Grading & Objective Mastery", () => {
    it("grades submissions accurately and calculates objective mastery", () => {
      const items: AssessmentItem[] = [
        {
          id: "g1",
          courseSlug: "waec-ssce-mathematics-mastery",
          moduleId: "waec-m1",
          lessonId: "l1",
          objectiveId: "obj-fractions",
          topic: "Fractions",
          objective: "Operations on fractions",
          thinkingLevel: "application",
          questionType: "single_choice",
          prompt: "What is 1/2 + 1/4?",
          options: [
            { id: "A", text: "3/4" },
            { id: "B", text: "2/6", misconceptionTag: "MIS-FRAC-DENOM-SUM", rationale: "Added denominators" },
          ],
          correctAnswer: "A",
          correctOptionId: "A",
          explanation: "Common denominator is 4",
          original: true,
          reviewStatus: "needs_teacher_review",
          softwareVerified: true,
        },
        {
          id: "g2",
          courseSlug: "waec-ssce-mathematics-mastery",
          moduleId: "waec-m1",
          lessonId: "l1",
          objectiveId: "obj-fractions",
          topic: "Fractions",
          objective: "Operations on fractions",
          thinkingLevel: "application",
          questionType: "single_choice",
          prompt: "What is 3/4 - 1/4?",
          options: [
            { id: "A", text: "2/4 = 1/2" },
            { id: "B", text: "2/0" },
          ],
          correctAnswer: "A",
          correctOptionId: "A",
          explanation: "Subtract numerators",
          original: true,
          reviewStatus: "needs_teacher_review",
          softwareVerified: true,
        },
      ];

      // 100% submission
      const resultPerfect = gradeAssessment(items, { g1: "A", g2: "A" });
      expect(resultPerfect.score).toBe(2);
      expect(resultPerfect.totalQuestions).toBe(2);
      expect(resultPerfect.percentage).toBe(100);
      expect(resultPerfect.objectiveMastery[0].status).toBe("understood");
      expect(resultPerfect.isMastered).toBe(true);

      // Submission triggering misconception
      const resultWithMisconception = gradeAssessment(items, { g1: "B", g2: "A" });
      expect(resultWithMisconception.score).toBe(1);
      expect(resultWithMisconception.percentage).toBe(50);
      expect(resultWithMisconception.objectiveMastery[0].status).toBe("almost_there");
      expect(resultWithMisconception.misconceptionsIdentified.length).toBe(1);
      expect(resultWithMisconception.misconceptionsIdentified[0].tag).toBe("MIS-FRAC-DENOM-SUM");
      expect(resultWithMisconception.isMastered).toBe(false);
    });
  });
});

