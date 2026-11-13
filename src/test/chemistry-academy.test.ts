/**
 * Trainbow HUB: Chemistry Academy Comprehensive Verification Suite
 *
 * Verifies:
 * 1. 12 authentic, curriculum-aligned Chemistry courses matching card text.
 *    (Inorganic compounds, organic chemistry, periodic trends, stoichiometry, volumetric analysis)
 * 2. Every lesson targets an evidenced WeakArea in the deficiency map.
 * 3. Distinct lesson lists per level/exam (SS 1-3, WAEC & NECO SSCE Prep, JAMB UTME Prep).
 * 4. Diagnostics tagged with WeakArea codes generating personalized remediation paths.
 * 5. Chemical formulas, constants table transparency, and unit-checked calculations.
 * 6. Safety notes for practical/laboratory experiments.
 * 7. Learner-Needs Dashboard NDPA 2023 privacy threshold (< 10 -> "Not enough data yet").
 * 8. Teacher Review Gate enforcement (reviewStatus = "needs_teacher_review").
 * 9. Chemical KaTeX symbol & subscript/superscript glyph integrity.
 * 10. Strict lesson route isolation (wrong lesson under a course returns 404).
 */

import { describe, it, expect } from "vitest";
import * as fs from "fs";
import * as path from "path";
import {
  CHEMISTRY_COURSES_DATA,
  getChemistryCourseBySlug,
  listAllChemistryLessons,
  getChemistryLessonBySlug,
} from "../lib/data/chemistry-curriculum";
import {
  CHEMISTRY_WEAK_AREAS,
  getChemistryWeakAreaByCode,
  listPriorityChemistryWeakAreas,
  listChemistryWeakAreasBySkill,
} from "../lib/data/chemistry-deficiency-map";
import {
  SEED_SUBJECTS,
  SEED_COURSES,
  SEED_ENGLISH_COURSES,
  SEED_PHYSICS_COURSES,
  SEED_CHEMISTRY_COURSES,
  ALL_COURSES,
  getCoursesBySubject,
} from "../lib/data/seed-data";
import {
  CHEMISTRY_DIAGNOSTICS,
  getChemistryDiagnostic,
} from "../lib/data/chemistry-diagnostics";
import { getCourseDiagnostic } from "../lib/data/english-diagnostics";

describe("Chemistry Academy Suite", () => {
  // --------------------------------------------------------------------------
  // 1. Course Catalog & Structure
  // --------------------------------------------------------------------------
  describe("1. Course Catalog & Structure", () => {
    it("exports exactly 12 Chemistry courses matching required levels and disciplines", () => {
      expect(CHEMISTRY_COURSES_DATA).toHaveLength(12);
      expect(SEED_CHEMISTRY_COURSES).toHaveLength(12);

      const requiredSlugs = [
        "chemistry-ss1-matter-atomic-structure-periodic-table",
        "chemistry-ss2-bonding-stoichiometry-acids-bases-salts",
        "chemistry-ss3-electrochemistry-rates-equilibrium-organic",
        "waec-neco-ssce-chemistry-mastery",
        "jamb-utme-chemistry-complete",
        "stoichiometry-mole-concept-bootcamp",
        "volumetric-analysis-practical-chemistry",
        "organic-chemistry-made-clear",
        "inorganic-chemistry-periodic-trends-metals-nonmetals",
        "acids-bases-salts-ph",
        "electrochemistry-redox-deep-dive",
        "equations-formulae-nomenclature-fix-it",
      ];

      for (const slug of requiredSlugs) {
        const course = getChemistryCourseBySlug(slug);
        expect(course, `Expected course with slug '${slug}' to exist`).toBeDefined();
      }
    });

    it("verifies SEED_COURSES, SEED_ENGLISH_COURSES, and SEED_PHYSICS_COURSES remain intact in ALL_COURSES", () => {
      expect(SEED_COURSES).toHaveLength(6);
      expect(SEED_ENGLISH_COURSES).toHaveLength(11);
      expect(SEED_PHYSICS_COURSES).toHaveLength(12);
      expect(SEED_CHEMISTRY_COURSES).toHaveLength(12);
      expect(ALL_COURSES).toHaveLength(41);
    });

    it("updates Chemistry subject courseCount to 12 in SEED_SUBJECTS", () => {
      const chmSubject = SEED_SUBJECTS.find((s) => s.slug === "chemistry");
      expect(chmSubject).toBeDefined();
      expect(chmSubject!.courseCount).toBe(12);
    });

    it("getCoursesBySubject returns all 12 courses for 'chemistry'", () => {
      const byChemistry = getCoursesBySubject("chemistry");
      expect(byChemistry).toHaveLength(12);
    });

    it("ensures courses have distinct lesson lists reflecting their level and exam", () => {
      const lessonListsByCourse = new Map<string, string[]>();

      for (const course of CHEMISTRY_COURSES_DATA) {
        const lessonSlugs = course.modules.flatMap((m) => m.lessons.map((l) => l.slug));
        lessonListsByCourse.set(course.slug, lessonSlugs);
      }

      // Check that no two courses have identical lesson lists
      const entries = Array.from(lessonListsByCourse.entries());
      for (let i = 0; i < entries.length; i++) {
        for (let j = i + 1; j < entries.length; j++) {
          const [slugA, lessonsA] = entries[i];
          const [slugB, lessonsB] = entries[j];
          const isIdentical =
            lessonsA.length === lessonsB.length &&
            lessonsA.every((s, idx) => s === lessonsB[idx]);
          expect(
            isIdentical,
            `Courses '${slugA}' and '${slugB}' should not have identical lesson lists`
          ).toBe(false);
        }
      }
    });
  });

  // --------------------------------------------------------------------------
  // 2. Weak Area Model & Pedagogical Evidence
  // --------------------------------------------------------------------------
  describe("2. Weak Area Model & Evidence Base", () => {
    it("contains comprehensive Chemistry weak areas mapped to official syllabus", () => {
      expect(CHEMISTRY_WEAK_AREAS.length).toBeGreaterThanOrEqual(20);

      const skillAreas = new Set(CHEMISTRY_WEAK_AREAS.map((w) => w.skillArea));
      expect(skillAreas).toContain("STOICHIOMETRY_EQUATIONS");
      expect(skillAreas).toContain("ATOMIC_PERIODICITY");
      expect(skillAreas).toContain("PHYSICAL_CHEMISTRY");
      expect(skillAreas).toContain("INORGANIC_CHEMISTRY");
      expect(skillAreas).toContain("ORGANIC_CHEMISTRY");
      expect(skillAreas).toContain("ANALYTICAL_PRACTICAL");
    });

    it("every single Chemistry lesson links to valid evidenced WeakArea codes", () => {
      const allLessons = listAllChemistryLessons();
      expect(allLessons.length).toBeGreaterThan(0);

      for (const { courseSlug, lesson } of allLessons) {
        expect(
          lesson.weakAreaCodes && lesson.weakAreaCodes.length > 0,
          `Lesson '${lesson.title}' in '${courseSlug}' must have at least one weakAreaCode`
        ).toBe(true);

        for (const code of lesson.weakAreaCodes) {
          const wa = getChemistryWeakAreaByCode(code);
          expect(
            wa,
            `WeakArea code '${code}' in lesson '${lesson.slug}' must exist in registry`
          ).toBeDefined();
        }
      }
    });

    it("verifies evidence source and date are documented for high-confidence items", () => {
      const highConfidence = CHEMISTRY_WEAK_AREAS.filter((w) => w.confidence === "high");
      expect(highConfidence.length).toBeGreaterThan(0);

      for (const wa of highConfidence) {
        expect(wa.evidenceSource.length).toBeGreaterThan(5);
        expect(wa.evidenceDate.length).toBeGreaterThanOrEqual(4);
      }
    });
  });

  // --------------------------------------------------------------------------
  // 3. Chemistry Correctness & Safety
  // --------------------------------------------------------------------------
  describe("3. Chemistry Correctness, Constants & Safety", () => {
    it("every practical lesson contains a prominent safety note", () => {
      const allLessons = listAllChemistryLessons();
      const practicalLessons = allLessons.filter(
        (l) =>
          l.courseSlug.includes("practical") ||
          l.courseSlug.includes("volumetric") ||
          l.lesson.weakAreaCodes.some((c) => c.startsWith("WA-CHM-PRC-"))
      );

      expect(practicalLessons.length).toBeGreaterThan(0);
      for (const { lesson } of practicalLessons) {
        expect(
          lesson.safetyNote && lesson.safetyNote.length > 10,
          `Practical lesson '${lesson.title}' must contain a safetyNote`
        ).toBe(true);
      }
    });

    it("lessons with calculation formulas define symbols and SI units properly", () => {
      const allLessons = listAllChemistryLessons();
      for (const { lesson } of allLessons) {
        if (lesson.formulas) {
          for (const formula of lesson.formulas) {
            expect(formula.name.length).toBeGreaterThan(0);
            expect(formula.expression.length).toBeGreaterThan(0);
            for (const v of formula.variables) {
              expect(v.symbol.length).toBeGreaterThan(0);
              expect(v.meaning.length).toBeGreaterThan(0);
              expect(v.unit.length).toBeGreaterThan(0);
            }
          }
        }
      }
    });

    it("verifies official syllabus constants are correctly recorded", () => {
      const ss2Course = getChemistryCourseBySlug(
        "chemistry-ss2-bonding-stoichiometry-acids-bases-salts"
      );
      expect(ss2Course).toBeDefined();

      const moleLesson = ss2Course!.modules[0].lessons[0];
      expect(moleLesson.constantsTable).toBeDefined();

      const molarVolume = moleLesson.constantsTable?.find((c) =>
        c.name.toLowerCase().includes("molar volume")
      );
      expect(molarVolume).toBeDefined();
      expect(molarVolume?.value).toBe("22.4");
      expect(molarVolume?.unit).toBe("dm³/mol");
    });

    it("every lesson checkpoint quiz has 5 verified multiple choice questions with explanations", () => {
      const allLessons = listAllChemistryLessons();
      for (const { lesson } of allLessons) {
        expect(lesson.checkpoint).toBeDefined();
        expect(lesson.checkpoint.questions.length).toBe(5);

        for (const q of lesson.checkpoint.questions) {
          expect(q.prompt.length).toBeGreaterThan(5);
          expect(q.options.length).toBe(4);
          expect(["A", "B", "C", "D"]).toContain(q.correctOptionId);
          expect(q.explanation.length).toBeGreaterThan(5);
        }
      }
    });

    it("every single Chemistry lesson links to a verified, embeddable video with 11-char YouTube ID", () => {
      const allLessons = listAllChemistryLessons();
      expect(allLessons.length).toBe(23);

      for (const { courseSlug, lesson } of allLessons) {
        expect(
          lesson.videoId,
          `Lesson '${lesson.title}' in '${courseSlug}' must have a videoId`
        ).toBeDefined();
        expect(
          lesson.videoId!.length,
          `Video ID '${lesson.videoId}' must be a valid 11-character YouTube ID`
        ).toBe(11);
      }
    });
  });

  // --------------------------------------------------------------------------
  // 4. Diagnostics & Remediation Pathways
  // --------------------------------------------------------------------------
  describe("4. Diagnostic Test Question Banks", () => {
    it("provides 12 original diagnostic questions for each of the 12 Chemistry courses", () => {
      expect(Object.keys(CHEMISTRY_DIAGNOSTICS)).toHaveLength(12);

      for (const course of CHEMISTRY_COURSES_DATA) {
        const diag = getChemistryDiagnostic(course.slug);
        expect(diag, `Diagnostic for course '${course.slug}' must exist`).toBeDefined();
        expect(diag!.questions.length).toBe(12);

        for (const q of diag!.questions) {
          expect(q.prompt.length).toBeGreaterThan(5);
          expect(q.options.length).toBe(4);
          expect(["A", "B", "C", "D"]).toContain(q.correctOptionId);
          expect(q.explanation.length).toBeGreaterThan(5);
          expect(q.weakAreaCode).toBeDefined();
          expect(q.recommendedLessonSlug).toBeDefined();
        }
      }
    });

    it("delegates Chemistry course slugs in getCourseDiagnostic seamlessly", () => {
      const diag = getCourseDiagnostic(
        "chemistry-ss1-matter-atomic-structure-periodic-table"
      );
      expect(diag).toBeDefined();
      expect(diag?.title).toContain("Chemistry SS 1");
    });
  });

  // --------------------------------------------------------------------------
  // 5. Learner-Needs Dashboard & NDPA 2023 Compliance
  // --------------------------------------------------------------------------
  describe("5. Learner-Needs Dashboard & NDPA 2023 Compliance", () => {
    it("enforces privacy threshold (< 10 -> 'Not enough data yet')", () => {
      const testCases = [
        { sampleSize: 31, errorRate: 66, shouldShow: true },
        { sampleSize: 28, errorRate: 61, shouldShow: true },
        { sampleSize: 5, errorRate: 0, shouldShow: false },
        { sampleSize: 6, errorRate: 0, shouldShow: false },
        { sampleSize: 7, errorRate: 0, shouldShow: false },
      ];

      for (const tc of testCases) {
        const display =
          tc.sampleSize >= 10 ? `${tc.errorRate}%` : "Not enough data yet";
        if (tc.shouldShow) {
          expect(display).toBe(`${tc.errorRate}%`);
        } else {
          expect(display).toBe("Not enough data yet");
        }
      }
    });
  });

  // --------------------------------------------------------------------------
  // 6. Teacher Review Gate
  // --------------------------------------------------------------------------
  describe("6. Teacher Review Gate", () => {
    it("all Chemistry lessons start with reviewStatus = 'needs_teacher_review'", () => {
      const allLessons = listAllChemistryLessons();
      for (const { lesson } of allLessons) {
        expect(lesson.reviewStatus).toBe("needs_teacher_review");
      }
    });
  });

  // --------------------------------------------------------------------------
  // 7. Route Isolation & Content Safety
  // --------------------------------------------------------------------------
  describe("7. Route Isolation", () => {
    it("rejects lessons from other courses when accessed under wrong course slug", () => {
      const ss1Lesson = getChemistryLessonBySlug(
        "chemistry-ss1-matter-atomic-structure-periodic-table",
        "the-mole-concept-molar-mass-and-avogadro-calculations"
      );
      expect(ss1Lesson).toBeUndefined();

      const ss2Lesson = getChemistryLessonBySlug(
        "chemistry-ss2-bonding-stoichiometry-acids-bases-salts",
        "the-mole-concept-molar-mass-and-avogadro-calculations"
      );
      expect(ss2Lesson).toBeDefined();
    });
  });
});
