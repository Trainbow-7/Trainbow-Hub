import { describe, it, expect, beforeEach } from "vitest";
import { db } from "@/lib/db";

describe("Phase J: Parent & Guardian Oversight Portal Unit Tests (PP-01 to PP-05)", () => {
  beforeEach(async () => {
    await db.reset();
  });

  describe("PP-01: Multi-Child Oversight & Progress Tracking", () => {
    it("returns aggregated progress summary for verified linked wards", async () => {
      const parent = await db.findUserByEmail("parent@trainbowhub.ng");
      expect(parent).toBeDefined();

      const summaries = await db.getGuardianChildrenSummary(parent!.id);
      expect(summaries.length).toBeGreaterThanOrEqual(1);

      const chiomaSummary = summaries.find(s => s.student.fullName === "Chioma Adeleke");
      expect(chiomaSummary).toBeDefined();
      expect(chiomaSummary?.guardianship.status).toBe("VERIFIED");
      expect(chiomaSummary?.guardianship.relationship).toContain("Guardian");

      // Verify course progress metrics
      expect(chiomaSummary?.courses.length).toBeGreaterThanOrEqual(1);
      expect(chiomaSummary?.courses[0].progressPercentage).toBe(11);
      expect(chiomaSummary?.courses[0].completedLessonCount).toBe(1);

      // Verify quiz statistics
      expect(chiomaSummary?.quizzes.totalAttempts).toBe(1);
      expect(chiomaSummary?.quizzes.averageScore).toBe(67);
      expect(chiomaSummary?.quizzes.recommendedTopics).toContain("Unknown Number Bases & Linear Formulation");

      // Verify daily study streaks
      expect(chiomaSummary?.studyStats.streakDays).toBe(5);
      expect(chiomaSummary?.studyStats.totalMinutesStudied).toBe(145);

      // Verify AI quota consumption
      expect(chiomaSummary?.aiQuota.plan).toBe("FREE");
      expect(chiomaSummary?.aiQuota.dailyLimit).toBe(10);
    });

    it("shields unverified and pending OTP wards from summary view", async () => {
      const parent = await db.findUserByEmail("parent@trainbowhub.ng");
      const summaries = await db.getGuardianChildrenSummary(parent!.id);

      // Kelechi Eze (minor) is seeded in PENDING_OTP status and must NOT appear in verified summary
      const unverifiedWard = summaries.find(s => s.student.fullName === "Kelechi Eze");
      expect(unverifiedWard).toBeUndefined();
    });
  });

  describe("PP-02: Timetable, Attendance, 1-Tap Observer Entry & Payment Receipts", () => {
    it("provides upcoming timetable with 1-tap observer link", async () => {
      const parent = await db.findUserByEmail("parent@trainbowhub.ng");
      const timetable = await db.getGuardianTimetable(parent!.id);

      expect(timetable.length).toBeGreaterThanOrEqual(1);
      const mathSession = timetable.find(t => t.subject === "Mathematics");
      expect(mathSession).toBeDefined();
      expect(mathSession?.studentName).toBe("Chioma Adeleke");
      expect(mathSession?.tutorName).toBe("Dr. Tayo Okafor");
      expect(mathSession?.observerLink).toBe(`/classroom/${mathSession?.bookingId}?role=GUARDIAN`);
      expect(mathSession?.attendanceStatus).toBe("ATTENDED");
      expect(mathSession?.durationSeconds).toBe(3420);
    });

    it("retrieves verified Paystack payment receipts for linked wards", async () => {
      const parent = await db.findUserByEmail("parent@trainbowhub.ng");
      const txs = await db.getGuardianFinancialHistory(parent!.id);

      expect(txs.length).toBeGreaterThanOrEqual(1);
      const seedTx = txs.find(t => t.reference === "tb_pay_seed_001");
      expect(seedTx).toBeDefined();
      expect(seedTx?.studentName).toBe("Chioma Adeleke");
      expect(seedTx?.amountMinorUnits).toBe(750000); // ₦7,500
      expect(seedTx?.status).toBe("VERIFIED");
      expect(seedTx?.channel).toBe("card");
    });
  });

  describe("PP-03: Privacy-First Notifications & NDPA 2023 Lockscreen Invariants", () => {
    it("maintains generic lockscreen previews invariant regardless of update payload", async () => {
      const parent = await db.findUserByEmail("parent@trainbowhub.ng");
      const initialPrefs = await db.getGuardianNotificationPreferences(parent!.id);
      expect(initialPrefs.genericLockscreenPreviews).toBe(true);

      // Attempt to maliciously disable genericLockscreenPreviews
      const updated = await db.updateGuardianNotificationPreferences(parent!.id, {
        emailAlerts: false,
        whatsappAlerts: true,
        genericLockscreenPreviews: false as any,
        digestFrequency: "DAILY_DIGEST",
      });

      expect(updated.emailAlerts).toBe(false);
      expect(updated.whatsappAlerts).toBe(true);
      expect(updated.digestFrequency).toBe("DAILY_DIGEST");
      // Under NDPA 2023, generic lockscreen preview must remain true!
      expect(updated.genericLockscreenPreviews).toBe(true);
    });
  });

  describe("PP-04: Post-Lesson Qualitative Tutor Progress Notes & Access Revocation", () => {
    it("allows tutors to publish and guardians to view detailed progress notes", async () => {
      const parent = await db.findUserByEmail("parent@trainbowhub.ng");
      const notes = await db.getTutorProgressNotes(parent!.id);

      expect(notes.length).toBeGreaterThanOrEqual(1);
      const note = notes[0];
      expect(note.subject).toBe("Mathematics");
      expect(note.tutorSlug).toBe("dr-tayo-okafor");
      expect(note.summary).toContain("Chioma demonstrated strong conceptual grasp");
      expect(note.homeworkAssignment).toContain("WAEC 2024 Section B Questions");
      expect(note.strengths).toBeDefined();
      expect(note.areasForImprovement).toBeDefined();
    });

    it("prevents unauthorized access to notes of unlinked students", async () => {
      const unlinkedParent = await db.createUser({
        email: "unlinked.parent@trainbowhub.ng",
        passwordHash: "hash",
        fullName: "Stranger Guardian",
        role: "PARENT",
        isMinor: false,
        isVerified: true,
      });

      const student = await db.findUserByEmail("student@trainbowhub.ng");

      // Attempting to access notes for Chioma without a verified link should throw
      await expect(
        db.getTutorProgressNotes(unlinkedParent.id, student!.id)
      ).rejects.toThrow("UNAUTHORIZED_WARD_ACCESS");
    });

    it("immediately revokes guardian access and shields ward data per NDPA 2023", async () => {
      const parent = await db.findUserByEmail("parent@trainbowhub.ng");
      const student = await db.findUserByEmail("student@trainbowhub.ng");

      // Prior to revocation, guardian has access
      let summaries = await db.getGuardianChildrenSummary(parent!.id);
      expect(summaries.some(s => s.student.id === student!.id)).toBe(true);

      // Revoke access immediately
      const revoked = await db.revokeGuardianAccess(parent!.id, student!.id, "Parent request");
      expect(revoked).toBe(true);

      // Verify that after revocation, ward is immediately shielded from all queries
      summaries = await db.getGuardianChildrenSummary(parent!.id);
      expect(summaries.some(s => s.student.id === student!.id)).toBe(false);

      const timetable = await db.getGuardianTimetable(parent!.id);
      expect(timetable.some(t => t.studentId === student!.id)).toBe(false);

      const notes = await db.getTutorProgressNotes(parent!.id);
      expect(notes.some(n => n.studentId === student!.id)).toBe(false);
    });
  });

  describe("PP-05: Verified Child Linking Workflow via OTP", () => {
    it("rejects invalid verification codes when linking a student", async () => {
      const parent = await db.findUserByEmail("parent@trainbowhub.ng");
      const result = await db.verifyAndLinkChild(
        parent!.id,
        "minor@trainbowhub.ng",
        "000000", // Wrong OTP
        "Father"
      );

      expect(result.success).toBe(false);
      expect(result.message).toContain("Invalid 6-digit verification code");
    });

    it("successfully links ward when correct 6-digit OTP is supplied", async () => {
      const parent = await db.findUserByEmail("parent@trainbowhub.ng");
      const result = await db.verifyAndLinkChild(
        parent!.id,
        "minor@trainbowhub.ng",
        "202610", // Pre-seeded valid OTP
        "Father"
      );

      expect(result.success).toBe(true);
      expect(result.guardianship?.status).toBe("VERIFIED");
      expect(result.guardianship?.consentGivenAt).toBeDefined();

      // Now minor student appears in verified guardian children summary!
      const summaries = await db.getGuardianChildrenSummary(parent!.id);
      const minorSummary = summaries.find(s => s.student.fullName === "Kelechi Eze");
      expect(minorSummary).toBeDefined();
    });

    it("prevents self-linking as a ward", async () => {
      const parent = await db.findUserByEmail("parent@trainbowhub.ng");
      const result = await db.verifyAndLinkChild(
        parent!.id,
        parent!.email,
        "202610",
        "Self"
      );

      expect(result.success).toBe(false);
      expect(result.message).toContain("cannot link your own account");
    });
  });
});
