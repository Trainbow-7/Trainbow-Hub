import { describe, it, expect, beforeEach } from "vitest";
import { db } from "@/lib/db";
import {
  SUPPORTED_LOCALES,
  getDictionary,
  LocaleCode,
} from "@/lib/i18n";
import {
  saveOfflineAttempt,
  getOfflineAttempts,
  getPendingSyncCount,
  isDataSaverEnabled,
  toggleDataSaver,
} from "@/lib/offline/sync";

describe("Phase L: Institutional School Administration & Localization (SC-01 to SC-05, ADR-013)", () => {
  beforeEach(async () => {
    await db.reset();
  });

  describe("SC-01: Institutional School & Cohort Registry", () => {
    it("should list registered institutional schools including King's College and Corona", async () => {
      const schools = await db.listSchools();
      expect(schools.length).toBeGreaterThanOrEqual(2);

      const kingsCollege = schools.find((s) => s.id === "sch-seed-001");
      expect(kingsCollege).toBeDefined();
      expect(kingsCollege?.name).toBe("King's College Lagos");
      expect(kingsCollege?.seatCapacity).toBe(500);
      expect(kingsCollege?.state).toContain("Lagos");

      const corona = schools.find((s) => s.id === "sch-seed-002");
      expect(corona).toBeDefined();
      expect(corona?.name).toBe("Corona Secondary School Agbara");
    });

    it("should retrieve school by ID and by institutional code", async () => {
      const school = await db.getSchoolById("sch-seed-001");
      expect(school).toBeDefined();
      expect(school?.code).toBe("KCL-2026");

      const byCode = await db.getSchoolByCode("KCL-2026");
      expect(byCode).toBeDefined();
      expect(byCode?.id).toBe("sch-seed-001");
    });

    it("should create and register a new institutional school cohort", async () => {
      const cohort = await db.createSchoolCohort({
        schoolId: "sch-seed-001",
        name: "SSS 3 Silver - Arts & Humanities",
        gradeLevel: "SSS 3",
        academicYear: "2026/2027",
        studentCount: 0,
      });

      expect(cohort.id).toBeDefined();
      expect(cohort.schoolId).toBe("sch-seed-001");
      expect(cohort.studentCount).toBe(0);

      const cohorts = await db.listCohortsBySchoolId("sch-seed-001");
      expect(cohorts.some((c) => c.name === "SSS 3 Silver - Arts & Humanities")).toBe(true);
    });
  });

  describe("SC-02: Bulk Student Roster Onboarding & License Allocation", () => {
    it("should bulk enroll students and increment allocated seats", async () => {
      const schoolBefore = (await db.getSchoolById("sch-seed-001"))!;
      const initialUsed = schoolBefore.seatsUsed;

      const newStudents = [
        {
          fullName: "Babatunde Raji",
          email: "babatunde.r@kingscollege.ng",
        },
        {
          fullName: "Chinedu Okafor",
          email: "chinedu.o@kingscollege.ng",
        },
      ];

      const result = await db.bulkEnrollSchoolStudents("sch-seed-001", "coh-seed-001", newStudents);
      expect(result.enrolledCount).toBe(2);

      const schoolAfter = (await db.getSchoolById("sch-seed-001"))!;
      expect(schoolAfter.seatsUsed).toBe(initialUsed + 2);

      const enrolledList = await db.listSchoolStudents("sch-seed-001");
      expect(enrolledList.some((s) => s.student.fullName === "Babatunde Raji")).toBe(true);
      expect(enrolledList.some((s) => s.student.fullName === "Chinedu Okafor")).toBe(true);
    });

    it("should track cohort student counts when students are enrolled", async () => {
      const cohortsBefore = await db.listCohortsBySchoolId("sch-seed-001");
      const cohortBefore = cohortsBefore.find((c) => c.id === "coh-seed-001")!;
      const countBefore = cohortBefore.studentCount;

      await db.bulkEnrollSchoolStudents("sch-seed-001", "coh-seed-001", [
        {
          fullName: "Fatima Aliyu",
          email: "fatima.a@kingscollege.ng",
        },
      ]);

      const cohortsAfter = await db.listCohortsBySchoolId("sch-seed-001");
      const cohortAfter = cohortsAfter.find((c) => c.id === "coh-seed-001")!;
      expect(cohortAfter.studentCount).toBe(countBefore + 1);
    });
  });

  describe("SC-03: Institutional Class Performance Analytics", () => {
    it("should compute school analytics including attendance, score, and study hours", async () => {
      const analytics = await db.getSchoolAnalytics("sch-seed-001");
      expect(analytics).toBeDefined();
      expect(analytics?.activeStudents).toBeGreaterThan(0);
      expect(analytics?.cohortsCount).toBeGreaterThanOrEqual(2);
      expect(analytics?.seatUtilizationPercent).toBeGreaterThan(0);
      expect(analytics?.totalSeats).toBe(500);
      expect(analytics?.cohorts.length).toBeGreaterThanOrEqual(2);
    });
  });

  describe("SC-04: Multilingual Localization & Regional Translation (ADR-013)", () => {
    it("should support 5 regional Nigerian languages", () => {
      expect(SUPPORTED_LOCALES.length).toBe(5);
      const codes = SUPPORTED_LOCALES.map((l) => l.code);
      expect(codes).toEqual(["en", "yo", "ha", "ig", "pcm"]);
    });

    it("should provide consistent translation dictionary structure across all 5 languages", () => {
      const locales: LocaleCode[] = ["en", "yo", "ha", "ig", "pcm"];

      locales.forEach((code) => {
        const dict = getDictionary(code);
        expect(dict.appName).toBe("Trainbow HUB");
        expect(dict.tagline).toBeTruthy();
        expect(dict.nav.academy).toBeTruthy();
        expect(dict.nav.subjects).toBeTruthy();
        expect(dict.nav.tutors).toBeTruthy();
        expect(dict.nav.music).toBeTruthy();
        expect(dict.nav.schools).toBeTruthy();
        expect(dict.common.dataSaver).toBeTruthy();
        expect(dict.common.language).toBeTruthy();
        expect(dict.school.title).toBeTruthy();
        expect(dict.school.seatCapacity).toBeTruthy();
        expect(dict.school.bulkEnroll).toBeTruthy();
      });
    });

    it("should fallback cleanly to English if unknown locale provided", () => {
      const fallback = getDictionary("fr" as any);
      expect(fallback.tagline).toBe("Learn • Connect • Grow");
    });
  });

  describe("SC-05: Low-Bandwidth Data Saver & Offline Synchronization", () => {
    it("should handle offline quiz attempt persistence", () => {
      const attempt = saveOfflineAttempt({
        quizId: "quiz-test-1",
        studentId: "usr-std-001",
        score: 8,
        totalQuestions: 10,
        completedAt: new Date().toISOString(),
        answers: { q1: "B", q2: "C" },
      });

      expect(attempt.id).toBeDefined();
      expect(attempt.synced).toBe(false);
      expect(attempt.score).toBe(8);
    });

    it("should manage Data Saver mode toggle", () => {
      expect(typeof isDataSaverEnabled()).toBe("boolean");
      expect(typeof toggleDataSaver()).toBe("boolean");
    });
  });
});
