import { describe, it, expect, beforeEach } from "vitest";
import { db } from "@/lib/db";
import { getVideoProvider } from "@/lib/adapters/video";

describe("Phase G: Online Virtual Classroom & Safeguarding Engine (CL-01 to CL-06)", () => {
  beforeEach(async () => {
    await db.reset();
  });

  describe("CL-01: Time-Limited Session Links & Multi-Role Video Tokens", () => {
    it("generates an ephemeral room and role-scoped tokens for booked sessions", async () => {
      const videoProvider = getVideoProvider();
      const booking = await db.findBookingById("bkg-seed-001");
      expect(booking).toBeDefined();

      const room = await videoProvider.createRoom({
        bookingId: booking!.id,
        roomName: `trb-cls-${booking!.id}`,
        slotDurationMinutes: 60,
      });

      expect(room.name).toBe("trb-cls-bkg-seed-001");
      expect(room.url).toContain("trb-cls-bkg-seed-001");
      expect(room.recordingEnabled).toBe(false); // CL-06 invariant

      // Tutor token has owner permissions
      const tutorToken = await videoProvider.generateToken({
        roomName: room.name,
        userId: "usr-tut-004",
        userName: "Dr. Tayo Okafor",
        role: "TUTOR",
        bookingId: booking!.id,
      });
      expect(tutorToken.isOwner).toBe(true);
      expect(tutorToken.userRole).toBe("TUTOR");

      // Student token has participant permissions (not owner)
      const studentToken = await videoProvider.generateToken({
        roomName: room.name,
        userId: booking!.studentId,
        userName: "Chioma Adeleke",
        role: "STUDENT",
        bookingId: booking!.id,
      });
      expect(studentToken.isOwner).toBe(false);
      expect(studentToken.userRole).toBe("STUDENT");

      // Guardian token has observer permissions
      const guardianToken = await videoProvider.generateToken({
        roomName: room.name,
        userId: "usr-par-003",
        userName: "Babatunde Adeleke",
        role: "GUARDIAN",
        bookingId: booking!.id,
      });
      expect(guardianToken.isOwner).toBe(false);
      expect(guardianToken.userRole).toBe("GUARDIAN");
    });

    it("initializes and retrieves database-backed classroom sessions", async () => {
      const session = await db.getOrCreateClassroomSession("bkg-seed-001");
      expect(session).toBeDefined();
      expect(session!.bookingId).toBe("bkg-seed-001");
      expect(session!.recordingEnabled).toBe(false);
      expect(session!.status).toBe("SCHEDULED");
    });
  });

  describe("CL-02: Link Access Revoked on Cancellation or Expiry", () => {
    it("marks session as cancelled and revokes access when booking is cancelled", async () => {
      const booking = await db.findBookingById("bkg-seed-001");
      expect(booking).toBeDefined();

      // Cancel booking
      await db.cancelBooking("bkg-seed-001", "Learner schedule conflict");
      await db.revokeClassroomSession("bkg-seed-001");

      const session = await db.findClassroomSessionByBookingId("bkg-seed-001");
      expect(session?.status).toBe("CANCELLED");

      const updatedBooking = await db.findBookingById("bkg-seed-001");
      expect(updatedBooking?.bookingStatus).toBe("CANCELLED");
    });
  });

  describe("CL-03: Attendance Recorded Against Booking", () => {
    it("logs participant join, updates session to LIVE, and tracks leave duration", async () => {
      const session = await db.getOrCreateClassroomSession("bkg-seed-001");
      expect(session).toBeDefined();

      // Student joins
      const joinRecord = await db.recordAttendanceJoin({
        sessionId: session!.id,
        bookingId: "bkg-seed-001",
        userId: "usr-std-001",
        role: "STUDENT",
      });

      expect(joinRecord.id).toBeDefined();
      expect(joinRecord.userId).toBe("usr-std-001");
      expect(joinRecord.role).toBe("STUDENT");
      expect(joinRecord.joinedAt).toBeInstanceOf(Date);

      // Verify session became LIVE
      const liveSession = await db.findClassroomSessionById?.(session!.id) || await db.findClassroomSessionByBookingId("bkg-seed-001");
      expect(liveSession?.status).toBe("LIVE");

      // Student leaves after session
      const leaveRecord = await db.recordAttendanceLeave(joinRecord.id);
      expect(leaveRecord).toBeDefined();
      expect(leaveRecord!.leftAt).toBeInstanceOf(Date);
      expect(leaveRecord!.durationSeconds).toBeGreaterThanOrEqual(0);
      expect(leaveRecord!.status).toBe("ATTENDED");
    });
  });

  describe("CL-04: In-Session Safeguarding & Conduct Reporting", () => {
    it("captures incident reports with severity, category, and session timestamp", async () => {
      const incident = await db.createSafeguardingIncident({
        sessionId: "cls-seed-001",
        bookingId: "bkg-seed-001",
        reporterId: "usr-std-001",
        reportedUserId: "usr-tut-004",
        severity: "URGENT",
        category: "SAFETY_CONCERN",
        description: "Audio feed was dropped unexpectedly and unauthorized participant attempt detected.",
        sessionTimestampSeconds: 420, // 7 minutes into session
      });

      expect(incident.id).toMatch(/^inc-/);
      expect(incident.severity).toBe("URGENT");
      expect(incident.category).toBe("SAFETY_CONCERN");
      expect(incident.sessionTimestampSeconds).toBe(420);
      expect(incident.status).toBe("OPEN");
      expect(incident.assignedTo).toContain("Safeguarding Lead");

      const incidents = await db.findSafeguardingIncidents();
      expect(incidents.length).toBeGreaterThan(0);
      expect(incidents[0].id).toBe(incident.id);
    });
  });

  describe("CL-06: Recording Off by Default (NDPA 2023 Child Safeguards)", () => {
    it("strictly ensures recording is disabled by default for rooms and tokens", async () => {
      const session = await db.getOrCreateClassroomSession("bkg-seed-001");
      expect(session!.recordingEnabled).toBe(false);

      const videoProvider = getVideoProvider();
      const room = await videoProvider.createRoom({
        bookingId: "bkg-test-privacy",
        roomName: "trb-cls-privacy-test",
      });
      expect(room.recordingEnabled).toBe(false);
    });
  });

  describe("Lesson Completion & Post-Session Tutor Rating Engine", () => {
    it("transitions session to COMPLETED and permits student review submission", async () => {
      // 1. Tutor concludes lesson
      const completionResult = await db.completeSessionAndBooking("bkg-seed-001", "dr-tayo-okafor");
      expect(completionResult.booking.bookingStatus).toBe("COMPLETED");
      expect(completionResult.session.status).toBe("COMPLETED");
      expect(completionResult.session.endedAt).toBeInstanceOf(Date);

      // 2. Student submits 5-star review
      const review = await db.createTutorReview({
        bookingId: "bkg-seed-001",
        studentId: "usr-std-001",
        tutorSlug: "dr-tayo-okafor",
        rating: 5,
        reviewText: "Dr. Tayo explained quadratic equations using real-life examples. Very patient!",
      });

      expect(review.id).toMatch(/^rev-/);
      expect(review.rating).toBe(5);
      expect(review.tutorSlug).toBe("dr-tayo-okafor");

      // 3. Verify tutor profile rating is updated
      const tutor = await db.findTutorBySlug("dr-tayo-okafor");
      expect(tutor).toBeDefined();
      expect(tutor!.rating).toBe(5);

      // 4. Verify review retrieval by booking ID
      const retrieved = await db.findReviewByBookingId("bkg-seed-001");
      expect(retrieved?.id).toBe(review.id);
    });

    it("rejects invalid star ratings outside 1 to 5", async () => {
      await expect(
        db.createTutorReview({
          bookingId: "bkg-seed-001",
          studentId: "usr-std-001",
          tutorSlug: "dr-tayo-okafor",
          rating: 6,
          reviewText: "Invalid rating test",
        })
      ).rejects.toThrow("Rating must be between 1 and 5 stars");
    });
  });
});
