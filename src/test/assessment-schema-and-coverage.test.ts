import { describe, it, expect } from "vitest";
import { ALL_ASSESSMENT_ITEMS, getItemsByCourse, getItemsByLesson } from "@/lib/assessment/banks";
import { ALL_COURSES } from "@/lib/data/seed-data";
import { AssessmentItemSchema } from "@/lib/assessment/types";

const MATH_COURSE_SLUGS = [
  "waec-ssce-mathematics-mastery",
  "jamb-utme-speed-mathematics",
  "jss3-basic-mathematics-bece-prep",
  "ss2-algebra-and-trigonometry-deep-dive",
  "primary6-quantitative-reasoning-common-entrance",
  "cambridge-igcse-extended-mathematics",
];

describe("Mathematics Assessment Curriculum Coverage & Schema Validation", () => {
  it("covers all 6 Mathematics curriculum courses", () => {
    const mathCourses = ALL_COURSES.filter((c) => MATH_COURSE_SLUGS.includes(c.slug));
    expect(mathCourses.length).toBe(6);

    for (const slug of MATH_COURSE_SLUGS) {
      const items = getItemsByCourse(slug);
      expect(items.length, `Expected items for course ${slug}`).toBeGreaterThanOrEqual(126);
    }
  });

  it("ensures all 71 lessons across courses have at least 14 banked items", () => {
    const mathCourses = ALL_COURSES.filter((c) => MATH_COURSE_SLUGS.includes(c.slug));
    let totalLessonsCount = 0;

    for (const course of mathCourses) {
      const allLessons = (course.syllabus || []).flatMap((m) => m.lessons);
      totalLessonsCount += allLessons.length;

      for (const lesson of allLessons) {
        const lessonItems = getItemsByLesson(course.slug, lesson.id);
        expect(
          lessonItems.length,
          `Course ${course.slug} lesson ${lesson.id} (${lesson.title}) must have >= 14 items`
        ).toBeGreaterThanOrEqual(14);
      }
    }

    expect(totalLessonsCount).toBe(71);
    expect(ALL_ASSESSMENT_ITEMS.length).toBe(994);
  });

  it("validates every item conforms strictly to AssessmentItemSchema", () => {
    for (const item of ALL_ASSESSMENT_ITEMS) {
      const parseResult = AssessmentItemSchema.safeParse(item);
      expect(parseResult.success, `Item ${item.id} schema error: ${parseResult.error?.message}`).toBe(true);

      // Verify non-empty essential metadata
      expect(item.id.length).toBeGreaterThan(0);
      expect(item.prompt.trim().length).toBeGreaterThan(0);
      expect(item.objective.length).toBeGreaterThan(0);
      expect(item.explanation.trim().length).toBeGreaterThan(0);
      expect(item.original).toBe(true);
      expect(item.reviewStatus).toBe("needs_teacher_review");
      expect(item.softwareVerified).toBe(true);
    }
  });

  it("verifies MCQ distractor misconception tags are present", () => {
    let mcqCount = 0;
    for (const item of ALL_ASSESSMENT_ITEMS) {
      if (item.questionType === "single_choice" && item.options) {
        mcqCount++;
        const correctId = String(item.correctAnswer).trim();
        for (const opt of item.options) {
          if (opt.id !== correctId) {
            expect(opt.misconceptionTag, `Distractor ${opt.id} in ${item.id} should have misconception tag`).toBeDefined();
            expect(opt.misconceptionTag?.length).toBeGreaterThan(0);
          }
        }
      }
    }
    expect(mcqCount).toBeGreaterThan(600);
  });

  it("verifies cognitive depth blueprint covers multiple thinking levels per lesson", () => {
    const mathCourses = ALL_COURSES.filter((c) => MATH_COURSE_SLUGS.includes(c.slug));
    for (const course of mathCourses) {
      const allLessons = (course.syllabus || []).flatMap((m) => m.lessons);
      for (const lesson of allLessons) {
        const items = getItemsByLesson(course.slug, lesson.id);
        const hasUnderstanding = items.some((i) => i.thinkingLevel === "understanding");
        const hasApplication = items.some((i) => i.thinkingLevel === "application");
        const hasErrorAnalysis = items.some((i) => i.thinkingLevel === "error_analysis");

        expect(hasUnderstanding, `Lesson ${lesson.id} missing understanding items`).toBe(true);
        expect(hasApplication, `Lesson ${lesson.id} missing application items`).toBe(true);
        expect(hasErrorAnalysis, `Lesson ${lesson.id} missing error analysis items`).toBe(true);
      }
    }
  });
});

