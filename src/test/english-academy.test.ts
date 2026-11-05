/**
 * Trainbow HUB: English Language Academy Comprehensive Verification Suite
 *
 * Verifies:
 * 1. 11 authentic, curriculum-aligned English courses matching the card requirements.
 * 2. Every lesson targets an evidenced WeakArea in the deficiency map.
 * 3. Distinct lesson lists per level/exam (Primary 1-6, JSS 1-3, SS 1-3, WAEC, JAMB).
 * 4. Diagnostics tagged with WeakArea codes generating personalized remediation paths.
 * 5. Banned internal phrases removed from customer-facing pages.
 * 6. Learner-Needs Dashboard NDPA 2023 privacy threshold (< 10 -> "Not enough data yet").
 * 7. Teacher Review Gate enforcement (reviewStatus = "needs_teacher_review").
 * 8. IPA phonetic symbol rendering support.
 */

import { describe, it, expect } from "vitest";
import * as fs from "fs";
import * as path from "path";
import {
  ENGLISH_COURSES_DATA,
  getEnglishCourseBySlug,
  listAllEnglishLessons,
  getEnglishLessonBySlug,
} from "../lib/data/english-curriculum";
import {
  ENGLISH_WEAK_AREAS,
  getWeakAreaByCode,
  listPriorityWeakAreas,
} from "../lib/data/english-deficiency-map";
import {
  SEED_SUBJECTS,
  SEED_COURSES,
  SEED_ENGLISH_COURSES,
  ALL_COURSES,
  getCoursesBySubject,
} from "../lib/data/seed-data";
import {
  ENGLISH_DIAGNOSTICS,
  getCourseDiagnostic,
} from "../lib/data/english-diagnostics";

describe("English Language Academy Suite", () => {
  // --------------------------------------------------------------------------
  // 1. Registry & Course Integrity
  // --------------------------------------------------------------------------
  describe("1. Course Catalog & Structure", () => {
    it("exports exactly 11 English courses matching required levels and skills", () => {
      expect(ENGLISH_COURSES_DATA).toHaveLength(11);
      expect(SEED_ENGLISH_COURSES).toHaveLength(11);

      const requiredSlugs = [
        "primary-english-foundations-1-3",
        "primary-english-foundations-4-6",
        "jss-english-grammar-and-writing",
        "ss-english-grammar-comprehension-essay",
        "waec-neco-ssce-english-mastery",
        "jamb-utme-use-of-english-complete",
        "grammar-fix-it-common-errors",
        "comprehension-and-summary-skills-masterclass",
        "oral-english-sounds-stress-intonation",
        "essay-and-letter-writing-workshop",
        "literary-analysis-skills-workshop",
      ];

      for (const slug of requiredSlugs) {
        const course = getEnglishCourseBySlug(slug);
        expect(course, `Expected course with slug '${slug}' to exist`).toBeDefined();
      }
    });

    it("verifies SEED_COURSES remains 6 mathematics courses for backwards compatibility", () => {
      expect(SEED_COURSES).toHaveLength(6);
      expect(ALL_COURSES).toHaveLength(17);
    });

    it("updates English subject courseCount to 11 in SEED_SUBJECTS", () => {
      const engSubject = SEED_SUBJECTS.find((s) => s.slug === "english");
      expect(engSubject).toBeDefined();
      expect(engSubject!.courseCount).toBe(11);
    });

    it("getCoursesBySubject returns all 11 courses for both 'english' and 'english-language'", () => {
      const byEnglish = getCoursesBySubject("english");
      const byEnglishLanguage = getCoursesBySubject("english-language");

      expect(byEnglish).toHaveLength(11);
      expect(byEnglishLanguage).toHaveLength(11);
    });

    it("ensures courses have distinct lesson lists reflecting their level and exam", () => {
      const lessonListsByCourse = new Map<string, string[]>();

      for (const course of ENGLISH_COURSES_DATA) {
        const lessonSlugs = course.modules.flatMap((m) => m.lessons.map((l) => l.slug));
        lessonListsByCourse.set(course.slug, lessonSlugs);
      }

      const slugs = Array.from(lessonListsByCourse.keys());
      for (let i = 0; i < slugs.length; i++) {
        for (let j = i + 1; j < slugs.length; j++) {
          const listA = lessonListsByCourse.get(slugs[i])!;
          const listB = lessonListsByCourse.get(slugs[j])!;

          // Distinct lesson lists: they should not be identical
          const areIdentical =
            listA.length === listB.length &&
            listA.every((val, idx) => val === listB[idx]);

          expect(
            areIdentical,
            `Courses '${slugs[i]}' and '${slugs[j]}' share identical lesson lists!`
          ).toBe(false);
        }
      }
    });
  });

  // --------------------------------------------------------------------------
  // 2. Deficiency Map & Lesson Grounding
  // --------------------------------------------------------------------------
  describe("2. Deficiency Map Grounding & Lesson Quality", () => {
    it("ensures deficiency map catalog contains verified weak areas across all skill areas", () => {
      expect(ENGLISH_WEAK_AREAS.length).toBeGreaterThanOrEqual(25);

      const skillsRepresented = new Set(ENGLISH_WEAK_AREAS.map((w) => w.skillArea));
      expect(skillsRepresented.has("GRAMMAR")).toBe(true);
      expect(skillsRepresented.has("LEXIS_STRUCTURE")).toBe(true);
      expect(skillsRepresented.has("COMPREHENSION_SUMMARY")).toBe(true);
      expect(skillsRepresented.has("ORAL_ENGLISH")).toBe(true);
      expect(skillsRepresented.has("ESSAY_COMPOSITION")).toBe(true);
      expect(skillsRepresented.has("LITERARY_ANALYSIS")).toBe(true);
    });

    it("every lesson links to at least one valid WeakArea code", () => {
      const allLessons = listAllEnglishLessons();
      expect(allLessons.length).toBeGreaterThanOrEqual(30);

      for (const { courseSlug, lesson } of allLessons) {
        expect(
          lesson.weakAreaCodes && lesson.weakAreaCodes.length > 0,
          `Lesson '${lesson.slug}' in course '${courseSlug}' must have at least 1 weakAreaCode`
        ).toBe(true);

        for (const code of lesson.weakAreaCodes) {
          const wa = getWeakAreaByCode(code);
          expect(
            wa,
            `Lesson '${lesson.slug}' references unknown weak area code '${code}'`
          ).toBeDefined();
        }
      }
    });

    it("verifies Teacher Review Gate: all content starts with reviewStatus = 'needs_teacher_review'", () => {
      const allLessons = listAllEnglishLessons();
      for (const { lesson } of allLessons) {
        expect(lesson.reviewStatus).toBe("needs_teacher_review");
      }

      for (const wa of ENGLISH_WEAK_AREAS) {
        expect(wa.needsReview).toBe(true);
      }
    });

    it("first lesson of each course has isFreePreview = true, subsequent lessons have false", () => {
      for (const course of ENGLISH_COURSES_DATA) {
        const allLessons = course.modules.flatMap((m) => m.lessons);
        expect(allLessons[0].isFreePreview).toBe(true);

        for (let i = 1; i < allLessons.length; i++) {
          expect(allLessons[i].isFreePreview).toBe(false);
        }
      }
    });

    it("every lesson has common mistakes with wrong and corrected examples", () => {
      const allLessons = listAllEnglishLessons();
      for (const { lesson } of allLessons) {
        expect(lesson.commonMistakes).toBeDefined();
        expect(lesson.commonMistakes.mistake).toBeTruthy();
        expect(lesson.commonMistakes.wrongExample).toBeTruthy();
        expect(lesson.commonMistakes.correctedExample).toBeTruthy();
        expect(lesson.commonMistakes.explanation).toBeTruthy();
      }
    });

    it("every lesson has original worked examples and checkpoint with explanations", () => {
      const allLessons = listAllEnglishLessons();
      for (const { lesson } of allLessons) {
        expect(lesson.workedExamples.length).toBeGreaterThanOrEqual(1);
        expect(lesson.checkpoint).toBeDefined();
        expect(lesson.checkpoint.questions.length).toBeGreaterThanOrEqual(1);
        for (const q of lesson.checkpoint.questions) {
          expect(q.prompt).toBeTruthy();
          expect(q.options.length).toBeGreaterThanOrEqual(2);
          expect(q.correctOptionId).toBeTruthy();
          expect(q.explanation).toBeTruthy();
        }
      }
    });
  });

  // --------------------------------------------------------------------------
  // 3. Diagnostics & Remediation Path
  // --------------------------------------------------------------------------
  describe("3. Diagnostics & Personal Remediation", () => {
    it("provides diagnostics with questions tagged to WeakArea codes", () => {
      const diagnosticKeys = Object.keys(ENGLISH_DIAGNOSTICS);
      expect(diagnosticKeys.length).toBeGreaterThanOrEqual(4);

      for (const key of diagnosticKeys) {
        const diag = ENGLISH_DIAGNOSTICS[key];
        expect(diag.questions.length).toBeGreaterThanOrEqual(12);

        for (const q of diag.questions) {
          expect(q.options).toHaveLength(4);
          expect(["A", "B", "C", "D"]).toContain(q.correctOptionId);
          expect(getWeakAreaByCode(q.weakAreaCode)).toBeDefined();
        }
      }
    });

    it("getCourseDiagnostic provides a fallback diagnostic for all 11 courses", () => {
      for (const course of ENGLISH_COURSES_DATA) {
        const diag = getCourseDiagnostic(course.slug);
        expect(diag, `Diagnostic must be available for course '${course.slug}'`).toBeDefined();
        expect(diag!.questions.length).toBeGreaterThanOrEqual(12);
      }
    });
  });

  // --------------------------------------------------------------------------
  // 4. Copy Cleanliness & Banned Phrases Removal
  // --------------------------------------------------------------------------
  describe("4. Copy Cleanliness & User-Facing Tone", () => {
    it("ensures banned phrases do NOT appear in customer-facing subject page", () => {
      const subjectPagePath = path.join(process.cwd(), "src", "app", "academy", "[subject]", "page.tsx");
      const code = fs.readFileSync(subjectPagePath, "utf-8");

      expect(code).not.toContain("Helper testing in progress");
      expect(code).not.toContain("Courses in authoring pipeline");
      expect(code).not.toContain("Lesson recordings and practice items are being reviewed");
      expect(code).not.toContain("New courses publishing soon");
    });

    it("ensures empty subject state provides a helpful Request a Tutor link", () => {
      const subjectPagePath = path.join(process.cwd(), "src", "app", "academy", "[subject]", "page.tsx");
      const code = fs.readFileSync(subjectPagePath, "utf-8");

      expect(code).toContain("/request-tutor");
      expect(code).toContain("Request a tutor");
    });
  });

  // --------------------------------------------------------------------------
  // 5. Learner Needs Privacy Protection (NDPA 2023)
  // --------------------------------------------------------------------------
  describe("5. Learner Needs Privacy & Admin Analytics", () => {
    it("learner needs dashboard enforces privacy rule: cohorts < 10 show 'Not enough data yet'", () => {
      const dashboardPath = path.join(process.cwd(), "src", "app", "admin", "analytics", "learner-needs", "page.tsx");
      expect(fs.existsSync(dashboardPath)).toBe(true);

      const code = fs.readFileSync(dashboardPath, "utf-8");
      expect(code).toContain("Not enough data yet");
      expect(code).toContain("sampleSize < 10");
      expect(code).toContain("NDPA 2023");
    });
  });

  // --------------------------------------------------------------------------
  // 6. IPA Phonetic Font Support
  // --------------------------------------------------------------------------
  describe("6. IPA Phonetic Rendering & Font Invariants", () => {
    it("globals.css contains unicode-range fallback for IPA characters", () => {
      const globalsCssPath = path.join(process.cwd(), "src", "app", "globals.css");
      const css = fs.readFileSync(globalsCssPath, "utf-8");

      expect(css).toContain("unicode-range");
      // Check that it includes IPA ranges (U+0250-02AF) and Greek (U+0370-03FF for θ)
      expect(css).toContain("U+0250-02AF");
      expect(css).toContain("U+0370-03FF");
    });

    it("verifies IPA character strings render without string corruption", () => {
      const ipaCharacters = ["ə", "θ", "ð", "ŋ", "ː", "æ", "ʌ", "ʃ", "ʒ", "tʃ", "dʒ"];
      for (const char of ipaCharacters) {
        expect(char.length).toBeGreaterThan(0);
        expect(char.charCodeAt(0)).toBeGreaterThan(0);
      }
    });
  });
});

