/**
 * Trainbow HUB: Physics Academy Comprehensive Verification Suite
 *
 * Verifies:
 * 1. 12 authentic, curriculum-aligned Physics courses matching the card requirements.
 *    (Mechanics, thermal energy, optics, wave motion, electromagnetism, atomic physics)
 * 2. Every lesson targets an evidenced WeakArea in the deficiency map.
 * 3. Distinct lesson lists per level/exam (SS 1-3, WAEC & NECO SSCE Prep, JAMB UTME Prep).
 * 4. Diagnostics tagged with WeakArea codes generating personalized remediation paths.
 * 5. Physical formulas define symbols and SI units; physical constants transparency.
 * 6. Banned internal phrases removed from customer-facing pages.
 * 7. Learner-Needs Dashboard NDPA 2023 privacy threshold (< 10 -> "Not enough data yet").
 * 8. Teacher Review Gate enforcement (reviewStatus = "needs_teacher_review").
 * 9. Physics KaTeX symbol & Greek glyph integrity.
 * 10. Strict lesson route isolation (wrong lesson under a course returns 404).
 */

import { describe, it, expect } from "vitest";
import * as fs from "fs";
import * as path from "path";
import {
  PHYSICS_COURSES_DATA,
  getPhysicsCourseBySlug,
  listAllPhysicsLessons,
  getPhysicsLessonBySlug,
} from "../lib/data/physics-curriculum";
import {
  PHYSICS_WEAK_AREAS,
  getPhysicsWeakAreaByCode,
  listPriorityPhysicsWeakAreas,
  listPhysicsWeakAreasBySkill,
} from "../lib/data/physics-deficiency-map";
import {
  SEED_SUBJECTS,
  SEED_COURSES,
  SEED_ENGLISH_COURSES,
  SEED_PHYSICS_COURSES,
  ALL_COURSES,
  getCoursesBySubject,
} from "../lib/data/seed-data";
import {
  PHYSICS_DIAGNOSTICS,
  getPhysicsDiagnostic,
} from "../lib/data/physics-diagnostics";
import { getCourseDiagnostic } from "../lib/data/english-diagnostics";

describe("Physics Academy Suite", () => {
  // --------------------------------------------------------------------------
  // 1. Course Catalog & Structure
  // --------------------------------------------------------------------------
  describe("1. Course Catalog & Structure", () => {
    it("exports exactly 12 Physics courses matching required levels and disciplines", () => {
      expect(PHYSICS_COURSES_DATA).toHaveLength(12);
      expect(SEED_PHYSICS_COURSES).toHaveLength(12);

      const requiredSlugs = [
        "physics-ss1-measurement-motion-forces",
        "physics-ss2-energy-heat-waves-light",
        "physics-ss3-electricity-magnetism-modern",
        "waec-neco-ssce-physics-mastery",
        "jamb-utme-physics-complete",
        "physics-numericals-bootcamp",
        "graphs-diagrams-practical-physics",
        "mechanics-deep-dive",
        "heat-and-thermal-physics",
        "waves-sound-light-optics",
        "electricity-magnetism-deep-dive",
        "atomic-nuclear-physics-essentials",
      ];

      for (const slug of requiredSlugs) {
        const course = getPhysicsCourseBySlug(slug);
        expect(course, `Expected course with slug '${slug}' to exist`).toBeDefined();
      }
    });

    it("verifies SEED_COURSES and SEED_ENGLISH_COURSES remain intact in ALL_COURSES", () => {
      expect(SEED_COURSES).toHaveLength(6);
      expect(SEED_ENGLISH_COURSES).toHaveLength(11);
      expect(SEED_PHYSICS_COURSES).toHaveLength(12);
      expect(ALL_COURSES).toHaveLength(29);
    });

    it("updates Physics subject courseCount to 12 in SEED_SUBJECTS", () => {
      const phySubject = SEED_SUBJECTS.find((s) => s.slug === "physics");
      expect(phySubject).toBeDefined();
      expect(phySubject!.courseCount).toBe(12);
    });

    it("getCoursesBySubject returns all 12 courses for 'physics'", () => {
      const byPhysics = getCoursesBySubject("physics");
      expect(byPhysics).toHaveLength(12);
    });

    it("ensures courses have distinct lesson lists reflecting their level and exam", () => {
      const lessonListsByCourse = new Map<string, string[]>();

      for (const course of PHYSICS_COURSES_DATA) {
        const lessonSlugs = course.modules.flatMap((m) => m.lessons.map((l) => l.slug));
        lessonListsByCourse.set(course.slug, lessonSlugs);
      }

      const slugs = Array.from(lessonListsByCourse.keys());
      for (let i = 0; i < slugs.length; i++) {
        for (let j = i + 1; j < slugs.length; j++) {
          const listA = lessonListsByCourse.get(slugs[i])!;
          const listB = lessonListsByCourse.get(slugs[j])!;

          const intersection = listA.filter((x) => listB.includes(x));
          expect(
            intersection.length,
            `Courses '${slugs[i]}' and '${slugs[j]}' should not have completely identical lesson sets`
          ).toBeLessThan(Math.min(listA.length, listB.length));
        }
      }
    });

    it("covers all 6 major card disciplines across courses", () => {
      const disciplines = [
        "Mechanics",
        "Thermal",
        "Optics",
        "Wave",
        "Electromagnetism",
        "Atomic",
      ];

      const allCourseTags = PHYSICS_COURSES_DATA.flatMap((c) => c.tags || []);
      for (const disc of disciplines) {
        const match = allCourseTags.some((tag) =>
          tag ? tag.toLowerCase().includes(disc.toLowerCase()) : false
        );
        expect(match, `Expected curriculum tags to cover discipline '${disc}'`).toBe(true);
      }
    });
  });

  // --------------------------------------------------------------------------
  // 2. Deficiency Map & Weak Area Alignment
  // --------------------------------------------------------------------------
  describe("2. Deficiency Map & Weak Area Integrity", () => {
    it("contains 37 evidenced weak area records across 6 skill areas", () => {
      expect(PHYSICS_WEAK_AREAS).toHaveLength(37);

      const mechanicsAreas = listPhysicsWeakAreasBySkill("MECHANICS");
      const thermalAreas = listPhysicsWeakAreasBySkill("THERMAL_PHYSICS");
      const wavesAreas = listPhysicsWeakAreasBySkill("WAVES_OPTICS");
      const elecAreas = listPhysicsWeakAreasBySkill("ELECTRICITY_MAGNETISM");
      const atomicAreas = listPhysicsWeakAreasBySkill("ATOMIC_NUCLEAR");
      const practicalAreas = listPhysicsWeakAreasBySkill("PRACTICAL_MEASUREMENT");

      expect(mechanicsAreas.length).toBeGreaterThanOrEqual(10);
      expect(thermalAreas.length).toBeGreaterThanOrEqual(4);
      expect(wavesAreas.length).toBeGreaterThanOrEqual(5);
      expect(elecAreas.length).toBeGreaterThanOrEqual(6);
      expect(atomicAreas.length).toBeGreaterThanOrEqual(4);
      expect(practicalAreas.length).toBeGreaterThanOrEqual(2);
    });

    it("every weak area has evidence source, confidence, and needsReview flag", () => {
      for (const wa of PHYSICS_WEAK_AREAS) {
        expect(wa.code).toMatch(/^WA-PHY-[A-Z]{3}-\d{2}$/);
        expect(wa.title.length).toBeGreaterThan(5);
        expect(wa.evidenceSource.length).toBeGreaterThan(5);
        expect(wa.evidenceDate.length).toBeGreaterThan(3);
        expect(["high", "medium", "needs teacher input"]).toContain(wa.confidence);
        expect(wa.needsReview).toBe(true);
      }
    });

    it("every single Physics lesson links to a valid WeakArea record", () => {
      const allLessons = listAllPhysicsLessons().map((item) => item.lesson);
      expect(allLessons.length).toBeGreaterThan(0);

      for (const lesson of allLessons) {
        expect(
          lesson.weakAreaCodes && lesson.weakAreaCodes.length > 0,
          `Lesson '${lesson.title}' (${lesson.slug}) must have at least one weakAreaCode`
        ).toBe(true);

        for (const code of lesson.weakAreaCodes!) {
          const wa = getPhysicsWeakAreaByCode(code);
          expect(
            wa,
            `Lesson '${lesson.slug}' links to unknown weakAreaCode '${code}'`
          ).toBeDefined();
        }
      }
    });
  });

  // --------------------------------------------------------------------------
  // 3. Lesson Content Quality & Physical Standards
  // --------------------------------------------------------------------------
  describe("3. Lesson Content Quality & Physical Standards", () => {
    it("ensures physics formulas define mathematical expressions, symbols, and SI units", () => {
      const allLessons = listAllPhysicsLessons().map((item) => item.lesson);
      const lessonsWithFormulas = allLessons.filter((l) => l.formulas && l.formulas.length > 0);

      expect(lessonsWithFormulas.length).toBeGreaterThanOrEqual(10);

      for (const lesson of lessonsWithFormulas) {
        for (const f of lesson.formulas!) {
          expect(f.expression.length).toBeGreaterThan(0);
          expect(f.name.length).toBeGreaterThan(0);
          expect(f.variables.length).toBeGreaterThan(0);
          for (const v of f.variables) {
            expect(v.symbol.length).toBeGreaterThan(0);
            expect(v.meaning.length).toBeGreaterThan(0);
            expect(v.unit.length).toBeGreaterThan(0);
          }
        }
      }
    });

    it("ensures physical constants are transparently stated with units and confidence", () => {
      const allLessons = listAllPhysicsLessons().map((item) => item.lesson);
      const lessonsWithConstants = allLessons.filter(
        (l) => l.constantsTable && l.constantsTable.length > 0
      );

      expect(lessonsWithConstants.length).toBeGreaterThanOrEqual(5);

      for (const l of lessonsWithConstants) {
        for (const c of l.constantsTable!) {
          expect(c.symbol.length).toBeGreaterThan(0);
          expect(c.value.length).toBeGreaterThan(0);
          expect(c.unit.length).toBeGreaterThan(0);
          expect(c.examConvention!.length).toBeGreaterThan(0);
        }
      }
    });

    it("ensures common mistakes highlight Nigerian examination pitfalls", () => {
      const allLessons = listAllPhysicsLessons().map((item) => item.lesson);

      for (const lesson of allLessons) {
        expect(
          lesson.commonMistakes,
          `Lesson '${lesson.slug}' must include common examination mistakes`
        ).toBeDefined();

        expect(lesson.commonMistakes.mistake.length).toBeGreaterThan(5);
        expect(lesson.commonMistakes.wrongExample.length).toBeGreaterThan(5);
        expect(lesson.commonMistakes.correctedExample.length).toBeGreaterThan(5);
        expect(lesson.commonMistakes.explanation.length).toBeGreaterThan(5);
      }
    });

    it("ensures worked examples include context, step-by-step solution, and final answer", () => {
      const allLessons = listAllPhysicsLessons().map((item) => item.lesson);

      for (const lesson of allLessons) {
        expect(
          lesson.workedExamples && lesson.workedExamples.length > 0,
          `Lesson '${lesson.slug}' must have worked examples`
        ).toBe(true);

        for (const ex of lesson.workedExamples) {
          expect(ex.context.length).toBeGreaterThan(3);
          expect(ex.question.length).toBeGreaterThan(10);
          expect(ex.stepByStepSolution.length).toBeGreaterThan(0);
          expect(ex.finalAnswer.length).toBeGreaterThan(0);
          expect(ex.ruleExplanation.length).toBeGreaterThan(0);
        }
      }
    });

    it("ensures every lesson has a 5-question practice checkpoint with valid options", () => {
      const allLessons = listAllPhysicsLessons().map((item) => item.lesson);

      for (const lesson of allLessons) {
        expect(lesson.checkpoint, `Lesson '${lesson.slug}' must have a checkpoint`).toBeDefined();
        expect(lesson.checkpoint.questions).toHaveLength(5);

        for (const q of lesson.checkpoint.questions) {
          expect(q.prompt.length).toBeGreaterThan(5);
          expect(q.options).toHaveLength(4);
          expect(["A", "B", "C", "D"]).toContain(q.correctOptionId);
          expect(q.explanation.length).toBeGreaterThan(10);
          expect(q.weakAreaCode).toMatch(/^WA-PHY-/);
        }
      }
    });
  });

  // --------------------------------------------------------------------------
  // 4. Diagnostics & Remediation Mapping
  // --------------------------------------------------------------------------
  describe("4. Diagnostics & Remediation Mapping", () => {
    it("provides 12-question diagnostic test banks for Physics courses", () => {
      expect(Object.keys(PHYSICS_DIAGNOSTICS).length).toBeGreaterThanOrEqual(2);

      for (const [slug, diag] of Object.entries(PHYSICS_DIAGNOSTICS)) {
        expect(diag.courseSlug).toBe(slug);
        expect(diag.questions.length).toBe(12);

        for (const q of diag.questions) {
          expect(q.prompt.length).toBeGreaterThan(5);
          expect(q.options).toHaveLength(4);
          expect(["A", "B", "C", "D"]).toContain(q.correctOptionId);
          expect(q.weakAreaCode).toMatch(/^WA-PHY-/);
          expect(q.explanation.length).toBeGreaterThan(5);
        }
      }
    });

    it("getCourseDiagnostic cleanly resolves diagnostic for any Physics course", () => {
      for (const course of PHYSICS_COURSES_DATA) {
        const diag = getCourseDiagnostic(course.slug);
        expect(diag, `Expected diagnostic for course slug '${course.slug}'`).toBeDefined();
        if (diag) {
          expect(diag.questions.length).toBe(12);
        }
      }
    });
  });

  // --------------------------------------------------------------------------
  // 5. Governance, Privacy & Review Gates
  // --------------------------------------------------------------------------
  describe("5. Governance, Privacy & Review Gates", () => {
    it("enforces Teacher Review Gate: all lessons have reviewStatus = 'needs_teacher_review'", () => {
      const allLessons = listAllPhysicsLessons().map((item) => item.lesson);
      for (const lesson of allLessons) {
        expect(lesson.reviewStatus).toBe("needs_teacher_review");
      }
    });

    it("verifies banned phrases are absent from subject page and seed data", () => {
      const bannedPhrases = [
        "vetted Nigerian tutor",
        "Helper testing in progress",
        "authoring pipeline",
        "private roster",
      ];

      const filesToCheck = [
        "src/app/academy/[subject]/page.tsx",
        "src/lib/data/seed-data.ts",
      ];

      for (const relPath of filesToCheck) {
        const fullPath = path.resolve(process.cwd(), relPath);
        if (fs.existsSync(fullPath)) {
          const content = fs.readFileSync(fullPath, "utf8");
          for (const phrase of bannedPhrases) {
            expect(
              content.includes(phrase),
              `File '${relPath}' should NOT contain banned phrase: '${phrase}'`
            ).toBe(false);
          }
        }
      }
    });

    it("verifies NDPA 2023 Section 31 privacy threshold (< 10 -> 'Not enough data yet')", () => {
      const learnerNeedsPath = path.resolve(
        process.cwd(),
        "src/app/admin/analytics/learner-needs/page.tsx"
      );
      expect(fs.existsSync(learnerNeedsPath)).toBe(true);

      const content = fs.readFileSync(learnerNeedsPath, "utf8");
      expect(content).toContain("Not enough data yet");
      expect(content).toContain("cohort.sampleSize < 10");
      expect(content).toContain("NDPA 2023");
    });
  });

  // --------------------------------------------------------------------------
  // 6. Physics Symbols & KaTeX Math Glyphs
  // --------------------------------------------------------------------------
  describe("6. Physics Symbols & KaTeX Math Glyphs", () => {
    it("verifies standard Greek and physical symbols exist in formulas without corruption", () => {
      const allLessons = listAllPhysicsLessons().map((item) => item.lesson);
      const allExpressions = allLessons
        .flatMap((l) => [
          ...(l.formulas || []).map((f) => f.expression),
          ...(l.keyPoints || []),
        ])
        .join(" ");

      const requiredSymbols = [
        "\\Delta",
        "\\theta",
        "\\alpha",
        "\\rho",
      ];

      for (const sym of requiredSymbols) {
        expect(allExpressions.includes(sym), `Expected KaTeX symbol '${sym}' in physics curriculum`).toBe(true);
      }
    });
  });

  // --------------------------------------------------------------------------
  // 7. Verified Video Integration & Coverage
  // --------------------------------------------------------------------------
  describe("7. Verified Video Integration & Coverage", () => {
    it("ensures every Physics lesson has a verified YouTube videoId attached", () => {
      const allLessons = listAllPhysicsLessons();
      expect(allLessons.length).toBeGreaterThan(0);

      for (const { courseSlug, lesson } of allLessons) {
        expect(
          lesson.videoId,
          `Expected lesson '${lesson.slug}' in course '${courseSlug}' to have a verified videoId`
        ).toBeDefined();
        expect(lesson.videoId).toMatch(/^[a-zA-Z0-9_-]{11}$/);
      }
    });

    it("ensures all physics lessons are registered in content/video-map.json with APPROVED status", () => {
      const videoMapPath = path.join(process.cwd(), "content", "video-map.json");
      expect(fs.existsSync(videoMapPath)).toBe(true);

      const videoMap = JSON.parse(fs.readFileSync(videoMapPath, "utf8"));
      const allLessons = listAllPhysicsLessons();

      for (const { courseSlug, lesson } of allLessons) {
        const found = videoMap.find(
          (v: any) => v.courseSlug === courseSlug && (v.lessonId === lesson.id || v.providerVideoId === lesson.videoId)
        );
        expect(
          found,
          `Expected videoMap entry for lesson '${lesson.id}' in '${courseSlug}'`
        ).toBeDefined();
        expect(found.status).toBe("APPROVED");
        expect(found.embeddable).toBe(true);
        expect(found.provider).toBe("YOUTUBE");
      }
    });
  });
});
