import { describe, it, expect, beforeEach } from "vitest";
import { db } from "@/lib/db";
import { SEED_COURSES } from "@/lib/data/seed-data";
import { COURSES_DATA, SYLLABUS_SOURCES } from "@/lib/data/curricula";
import { getLessonById } from "@/lib/data/academy-content";
import { getCourseLessonList } from "@/lib/academy/engine";

describe("Course Syllabi, Routing Isolation & Truthfulness Architecture", () => {
  beforeEach(async () => {
    await db.reset();
  });

  describe("1. Data Structure & Curriculum Separation", () => {
    it("ensures all 6 courses exist with distinct official exam bodies and levels", () => {
      expect(SEED_COURSES).toHaveLength(6);
      const examBodies = SEED_COURSES.map((c) => c.slug);
      expect(new Set(examBodies).size).toBe(6);

      const waec = SEED_COURSES.find((c) => c.slug === "waec-ssce-mathematics-mastery")!;
      const jamb = SEED_COURSES.find((c) => c.slug === "jamb-utme-speed-mathematics")!;
      const jss3 = SEED_COURSES.find((c) => c.slug === "jss3-basic-mathematics-bece-prep")!;
      const ss2 = SEED_COURSES.find((c) => c.slug === "ss2-algebra-and-trigonometry-deep-dive")!;
      const pri6 = SEED_COURSES.find((c) => c.slug === "primary6-quantitative-reasoning-common-entrance")!;
      const igcse = SEED_COURSES.find((c) => c.slug === "cambridge-igcse-extended-mathematics")!;

      expect(waec).toBeDefined();
      expect(jamb).toBeDefined();
      expect(jss3).toBeDefined();
      expect(ss2).toBeDefined();
      expect(pri6).toBeDefined();
      expect(igcse).toBeDefined();
    });

    it("ensures every lesson has a topicId and unique slug within its course", () => {
      for (const course of COURSES_DATA) {
        const slugs = new Set<string>();
        for (const mod of course.modules) {
          expect(mod.lessons.length).toBeGreaterThan(0);
          for (const les of mod.lessons) {
            expect(les.topicId).toBeDefined();
            expect(les.topicId.length).toBeGreaterThan(3);
            expect(slugs.has(les.slug)).toBe(false);
            slugs.add(les.slug);
          }
        }
      }
    });

    it("ensures first lesson in every course has isFreePreview=true, and subsequent lessons are false", () => {
      for (const course of COURSES_DATA) {
        const allLessons = course.modules.flatMap((m) => m.lessons);
        expect(allLessons[0].isFreePreview).toBe(true);
        for (let i = 1; i < allLessons.length; i++) {
          expect(allLessons[i].isFreePreview).toBe(false);
        }
      }
    });

    it("guarantees pairwise topic overlap between different exam bodies is <= 50%", () => {
      for (let i = 0; i < COURSES_DATA.length; i++) {
        const c1 = COURSES_DATA[i];
        const topics1 = new Set(c1.modules.flatMap((m) => m.lessons.map((l) => l.topicId)));

        for (let j = i + 1; j < COURSES_DATA.length; j++) {
          const c2 = COURSES_DATA[j];
          if (c1.examBody !== c2.examBody) {
            const topics2 = new Set(c2.modules.flatMap((m) => m.lessons.map((l) => l.topicId)));
            let shared = 0;
            for (const t of topics1) {
              if (topics2.has(t)) shared++;
            }
            const minSize = Math.min(topics1.size, topics2.size);
            const overlap = (shared / minSize) * 100;
            expect(overlap).toBeLessThanOrEqual(50);
          }
        }
      }
    });

    it("guarantees Primary 6 contains NO senior secondary topics (calculus, circle theorems, 3D trig, matrices, vectors)", () => {
      const pri6 = COURSES_DATA.find((c) => c.slug === "primary6-quantitative-reasoning-common-entrance")!;
      const titles = pri6.modules.flatMap((m) => m.lessons.map((l) => l.title.toLowerCase())).join(" ");

      expect(titles).not.toContain("calculus");
      expect(titles).not.toContain("differentiation");
      expect(titles).not.toContain("circle theorem");
      expect(titles).not.toContain("sine rule");
      expect(titles).not.toContain("cosine rule");
      expect(titles).not.toContain("vector");
      expect(titles).not.toContain("matrix");
      expect(titles).not.toContain("surd");
    });

    it("guarantees Cambridge IGCSE contains NO primary-only topics (roman numerals, box puzzles)", () => {
      const igcse = COURSES_DATA.find((c) => c.slug === "cambridge-igcse-extended-mathematics")!;
      const titles = igcse.modules.flatMap((m) => m.lessons.map((l) => l.title.toLowerCase())).join(" ");

      expect(titles).not.toContain("roman numeral");
      expect(titles).not.toContain("quantitative puzzle");
    });
  });

  describe("2. Video Verification & Safe Fallbacks", () => {
    it("ensures no videoId is attached to more than 3 topics", () => {
      const videoUsage: Record<string, number> = {};
      for (const course of COURSES_DATA) {
        for (const mod of course.modules) {
          for (const les of mod.lessons) {
            if (les.videoId) {
              videoUsage[les.videoId] = (videoUsage[les.videoId] || 0) + 1;
            }
          }
        }
      }

      for (const [vidId, count] of Object.entries(videoUsage)) {
        expect(count, `Video ${vidId} attached to ${count} topics, expected <= 3`).toBeLessThanOrEqual(3);
      }
    });

    it("ensures approved videos in db have relevanceScore >= 0.85 and valid channel metadata", async () => {
      const approved = await db.listAllLessonVideos({ status: "APPROVED" });
      expect(approved.length).toBeGreaterThan(0);
      for (const v of approved) {
        expect(v.relevanceScore).toBeGreaterThanOrEqual(0.85);
        expect(v.providerVideoId).toMatch(/^[a-zA-Z0-9_-]{11}$/);
        expect(v.embeddable).toBe(true);
      }
    });
  });

  describe("3. Truthfulness Audit & Metadata Accuracy", () => {
    it("ensures lesson count and duration hours match sum of actual lessons", () => {
      for (const course of SEED_COURSES) {
        const actualLessonCount = course.syllabus.flatMap((m) => m.lessons).length;
        const totalMinutes = course.syllabus.flatMap((m) => m.lessons).reduce((acc, l) => acc + l.durationMinutes, 0);
        const actualHours = Math.round(totalMinutes / 60);

        expect(course.lessonCount).toBe(actualLessonCount);
        expect(course.durationHours).toBe(actualHours);
      }
    });

    it("ensures ratings default to 0 and reviewCount to 0 when no reviews exist in DB", () => {
      for (const course of SEED_COURSES) {
        expect(course.rating).toBe(0);
        expect(course.reviewCount).toBe(0);
      }
    });

    it("defaults instructor to 'Trainbow HUB Academy' across all courses", () => {
      for (const course of SEED_COURSES) {
        expect(course.instructorName).toBe("Trainbow HUB Academy");
      }
    });

    it("guarantees banned unverifiable marketing claims do not appear", () => {
      for (const course of SEED_COURSES) {
        expect(course.shortDescription).not.toContain("scoring 85+");
        expect(course.shortDescription).not.toContain("Target A*");
        expect(course.fullDescription).not.toContain("scoring 85+");
        expect(course.fullDescription).not.toContain("Target A*");
      }
    });
  });

  describe("4. Course-Scoped Routing & Navigation Isolation", () => {
    it("prevents cross-course lesson access: getLessonById with courseSlug verifies ownership", () => {
      const waecLesson = getLessonById("fractions-decimals-operations", "waec-ssce-mathematics-mastery");
      expect(waecLesson).not.toBeNull();
      expect(waecLesson?.courseSlug).toBe("waec-ssce-mathematics-mastery");

      // Attempting to access WAEC lesson under Primary 6 course returns null
      const invalidCrossAccess = getLessonById("fractions-decimals-operations", "primary6-quantitative-reasoning-common-entrance");
      expect(invalidCrossAccess).toBeNull();
    });

    it("ensures getCourseLessonList keeps previous and next navigation strictly inside the course", () => {
      const jambLessons = getCourseLessonList("jamb-utme-speed-mathematics");
      expect(jambLessons.length).toBeGreaterThan(0);

      // Verify all lessons in list belong to JAMB
      const jambCourse = SEED_COURSES.find((c) => c.slug === "jamb-utme-speed-mathematics")!;
      const jambSlugs = new Set(jambCourse.syllabus.flatMap((m) => m.lessons.map((l) => (l as any).slug || l.id)));

      for (const item of jambLessons) {
        expect(jambSlugs.has(item.slug || item.id)).toBe(true);
      }
    });

    it("verifies visiting Course A (Primary 6) and Course B (Cambridge IGCSE) returns completely distinct syllabi", () => {
      const pri6 = SEED_COURSES.find((c) => c.slug === "primary6-quantitative-reasoning-common-entrance")!;
      const igcse = SEED_COURSES.find((c) => c.slug === "cambridge-igcse-extended-mathematics")!;

      const pri6Titles = new Set(pri6.syllabus.flatMap((m) => m.lessons.map((l) => l.title)));
      const igcseTitles = new Set(igcse.syllabus.flatMap((m) => m.lessons.map((l) => l.title)));

      let sharedTitles = 0;
      for (const t of pri6Titles) {
        if (igcseTitles.has(t)) sharedTitles++;
      }
      expect(sharedTitles).toBe(0);
    });
  });

  describe("5. Idempotent Migration Safety", () => {
    it("running init multiple times causes zero data loss and produces identical record counts", async () => {
      const initialCoursesCount = db.courses.size;
      const initialModulesCount = db.modules.size;
      const initialLessonsCount = db.lessons.size;

      // Re-run init
      await db.init(true);

      expect(db.courses.size).toBe(initialCoursesCount);
      expect(db.modules.size).toBe(initialModulesCount);
      expect(db.lessons.size).toBe(initialLessonsCount);
    });
  });
});

