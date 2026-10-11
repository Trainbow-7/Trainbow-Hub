import { describe, it, expect, beforeEach } from "vitest";
import {
  gradeQuizAttempt,
  calculateCourseProgress,
  calculateUpdatedStreak,
  completeLessonForUser,
  getCourseLessonList,
} from "@/lib/academy/engine";
import { db } from "@/lib/db";

describe("Phase D: Academy & Learning Engine Unit Tests", () => {
  beforeEach(async () => {
    await db.reset();
  });

  describe("Quiz Grading & Revision Recommendations Engine (LN-02, LN-05)", () => {
    it("grades all correct answers with 100% and empty revision recommendations", () => {
      // For lesson l1: q1 -> A, q2 -> A, q3 -> B
      const result = gradeQuizAttempt("l1", {
        q1: "A",
        q2: "A",
        q3: "B",
      });

      expect(result.score).toBe(100);
      expect(result.correctCount).toBe(3);
      expect(result.totalQuestions).toBe(3);
      expect(result.passed).toBe(true);
      expect(result.recommendedTopics).toHaveLength(0);
      expect(result.questionResults.every((qr) => qr.isCorrect)).toBe(true);
    });

    it("evaluates missed questions, assigns partial score, and extracts targeted revision topics", () => {
      // Miss q3 (select A instead of B)
      const result = gradeQuizAttempt("l1", {
        q1: "A",
        q2: "A",
        q3: "A",
      });

      expect(result.score).toBe(67);
      expect(result.correctCount).toBe(2);
      expect(result.totalQuestions).toBe(3);
      expect(result.passed).toBe(true); // >= 65% pass percentage
      expect(result.recommendedTopics).toContain("Unknown Number Bases & Linear Formulation");
      expect(result.questionResults[2].isCorrect).toBe(false);
      expect(result.questionResults[2].explanation).toContain("Expanding 23");
    });

    it("evaluates failing score when multiple questions are missed", () => {
      const result = gradeQuizAttempt("l1", {
        q1: "D",
        q2: "D",
        q3: "D",
      });

      expect(result.score).toBe(0);
      expect(result.correctCount).toBe(0);
      expect(result.passed).toBe(false);
      expect(result.recommendedTopics.length).toBeGreaterThan(1);
    });

    it("throws a clear error if lesson or quiz does not exist", () => {
      expect(() => gradeQuizAttempt("non-existent-lesson", {})).toThrowError();
    });
  });

  describe("Progress & Completion Calculations (LN-01, LN-03)", () => {
    it("calculates progress percentage correctly with rounding", () => {
      expect(calculateCourseProgress(0, 9)).toBe(0);
      expect(calculateCourseProgress(1, 9)).toBe(11); // 1/9 = 11.11%
      expect(calculateCourseProgress(3, 9)).toBe(33); // 3/9 = 33.33%
      expect(calculateCourseProgress(9, 9)).toBe(100);
      expect(calculateCourseProgress(10, 9)).toBe(100);
      expect(calculateCourseProgress(0, 0)).toBe(0);
    });

    it("retrieves flattened course lesson list sequentially", () => {
      const lessons = getCourseLessonList("waec-ssce-mathematics-mastery");
      expect(lessons.length).toBeGreaterThanOrEqual(6);
      expect(lessons[0].id).toBe("l1");
      expect(lessons[1].id).toBe("l2");
      expect(lessons[2].id).toBe("l3");
    });

    it("records lesson completion, updates progress percentage, and advances next lesson pointer", async () => {
      const userId = "usr-std-001";
      const courseSlug = "waec-ssce-mathematics-mastery";

      // Complete lesson l2 (after seeded l1)
      const res = await completeLessonForUser(userId, courseSlug, "l2");

      expect(res.enrollment.completedLessonIds).toContain("l1");
      expect(res.enrollment.completedLessonIds).toContain("l2");
      expect(res.enrollment.completedLessonIds.length).toBe(2);
      expect(res.enrollment.progressPercentage).toBeGreaterThan(11);
      expect(res.nextLessonId).toBe("l3");
      expect(res.studyStats.lessonsCompleted).toBe(2);
    });
  });

  describe("Daily Learning Streak Engine", () => {
    it("maintains current streak if already active today", () => {
      const today = new Date().toISOString().split("T")[0];
      const streak = calculateUpdatedStreak(5, today);
      expect(streak).toBe(5);
    });

    it("increments streak if last active yesterday", () => {
      const yesterday = new Date(Date.now() - 24 * 3600 * 1000).toISOString().split("T")[0];
      const streak = calculateUpdatedStreak(5, yesterday);
      expect(streak).toBe(6);
    });

    it("resets streak to 1 if more than one day was skipped", () => {
      const threeDaysAgo = new Date(Date.now() - 3 * 24 * 3600 * 1000).toISOString().split("T")[0];
      const streak = calculateUpdatedStreak(5, threeDaysAgo);
      expect(streak).toBe(1);
    });
  });

  describe("Tutor Course Authoring Lifecycle & Versioning (LN-06)", () => {
    it("creates course draft and transitions to PUBLISHED with incremented version", async () => {
      const tutorId = "usr-tut-004";
      const slug = "test-course-calculus";

      // 1. Create Draft
      const draft = await db.createOrUpdateAuthoringCourse({
        authorId: tutorId,
        title: "Test Calculus Course",
        slug,
        subjectSlug: "mathematics",
        level: "SSS 3",
        status: "DRAFT",
        priceMinorUnits: 2500000,
        shortDescription: "Short overview of calculus principles",
        fullDescription: "Comprehensive calculus guide with WAEC past questions",
        syllabus: [],
      });

      expect(draft.status).toBe("DRAFT");
      expect(draft.version).toBe(1);

      // 2. Submit for Review
      const inReview = await db.createOrUpdateAuthoringCourse({
        ...draft,
        status: "IN_REVIEW",
      });
      expect(inReview.status).toBe("IN_REVIEW");
      expect(inReview.version).toBe(1);

      // 3. Publish course and verify version increments
      const published = await db.createOrUpdateAuthoringCourse({
        ...inReview,
        status: "PUBLISHED",
        version: inReview.version + 1,
        changelog: "Curriculum reviewed and approved for publication.",
      });

      expect(published.status).toBe("PUBLISHED");
      expect(published.version).toBe(2);
      expect(published.changelog).toContain("Curriculum reviewed");
    });
  });
});
