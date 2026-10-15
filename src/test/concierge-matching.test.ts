import { describe, it, expect, beforeEach } from "vitest";
import { db, UserRecord, RosterAvailabilityType } from "@/lib/db";

describe("Phase N: Concierge Tutor Matching Engine Unit Tests", () => {
  beforeEach(async () => {
    await db.reset();
  });

  it("REQ-01: blocks tutor request creation for minors without verified guardian consent (NDPA 2023 Section 31)", async () => {
    const minorUser: UserRecord = {
      id: "usr-minor-test-01",
      email: "minor@example.com",
      passwordHash: "salt:hash123",
      fullName: "Minor Student",
      role: "STUDENT",
      isMinor: true,
      isVerified: true,
      isSuspended: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    db.users.set(minorUser.id, minorUser);

    await expect(
      db.createTutorRequest({
        studentId: minorUser.id,
        subject: "Mathematics",
        level: "Senior Secondary (SS2)",
        examGoal: "WAEC",
        topicsNeedingHelp: "Calculus, Probability",
        preferredDays: ["Monday", "Wednesday"],
        preferredTimes: ["16:00 - 18:00"],
        lessonFormat: "ONLINE",
        urgency: "WITHIN_48_HOURS",
      })
    ).rejects.toThrow(/NDPA 2023 Section 31/i);
  });

  it("REQ-02: creates tutor request with unique reference code, sets status to RECEIVED, and logs event", async () => {
    const adultStudentId = "usr-std-001"; // adult student

    const req = await db.createTutorRequest({
      studentId: adultStudentId,
      subject: "Further Mathematics",
      level: "A-Level / Cambridge",
      examGoal: "CAMBRIDGE_IGCSE",
      topicsNeedingHelp: "Integration by parts, Vectors",
      preferredDays: ["Tuesday", "Thursday"],
      preferredTimes: ["17:00 - 19:00"],
      lessonFormat: "ONLINE",
      urgency: "THIS_WEEK",
      extraNotes: "Prefers past-paper drills",
    });

    expect(req).toBeDefined();
    expect(req.id).toMatch(/^req-/);
    expect(req.referenceCode).toMatch(/^TR-\d{6}$/);
    expect(req.status).toBe("RECEIVED");

    const events = await db.listRequestEvents(req.id);
    expect(events.length).toBeGreaterThanOrEqual(1);
    expect(events[0].toStatus).toBe("RECEIVED");
  });

  it("REQ-03: Director/Coordinator generates match proposal and updates request to TUTOR_PROPOSED", async () => {
    const adultStudentId = "usr-std-001";
    const coordinator = Array.from(db.users.values()).find((u) => u.role === "MATCHING_COORDINATOR");
    expect(coordinator).toBeDefined();

    const tutorProfile = Array.from(db.tutorProfiles.values())[0];
    expect(tutorProfile).toBeDefined();

    const req = await db.createTutorRequest({
      studentId: adultStudentId,
      subject: "Physics",
      level: "Senior Secondary (SS3)",
      examGoal: "WAEC",
      topicsNeedingHelp: "Electromagnetism",
      preferredDays: ["Saturday"],
      preferredTimes: ["10:00 - 12:00"],
      lessonFormat: "ONLINE",
      urgency: "WITHIN_48_HOURS",
    });

    const proposal = await db.createMatchProposal({
      requestId: req.id,
      tutorProfileId: tutorProfile.id,
      coordinatorId: coordinator!.id,
      proposedSlotDate: "2026-10-25",
      proposedSlotTime: "10:00 - 12:00",
      quoteAmountMinorUnits: 1500000,
      cancellationTerms: "Free cancellation up to 24 hours prior to session start.",
      messageToFamily: "Mr Oyedeji personally recommends this tutor for WAEC Physics revision.",
    });

    expect(proposal).toBeDefined();
    expect(proposal.id).toMatch(/^prop-/);
    expect(proposal.status).toBe("PENDING_APPROVAL");
    expect(proposal.quoteAmountMinorUnits).toBe(1500000);

    const updatedReq = await db.getTutorRequestById(req.id);
    expect(updatedReq?.status).toBe("TUTOR_PROPOSED");
    expect(updatedReq?.assignedCoordinatorId).toBe(coordinator!.id);

    const events = await db.listRequestEvents(req.id);
    expect(events.some((e) => e.toStatus === "TUTOR_PROPOSED")).toBe(true);
  });

  it("REQ-04: Learner/Guardian approves proposal, creates booking with pending payment, logs event", async () => {
    const adultStudentId = "usr-stu-001";
    const coordinator = Array.from(db.users.values()).find((u) => u.role === "MATCHING_COORDINATOR")!;
    const tutorProfile = Array.from(db.tutorProfiles.values())[0];

    const req = await db.createTutorRequest({
      studentId: adultStudentId,
      subject: "Chemistry",
      level: "UTME / JAMB",
      examGoal: "JAMB",
      topicsNeedingHelp: "Organic Chemistry",
      preferredDays: ["Friday"],
      preferredTimes: ["15:00 - 17:00"],
      lessonFormat: "ONLINE",
      urgency: "THIS_WEEK",
    });

    const proposal = await db.createMatchProposal({
      requestId: req.id,
      tutorProfileId: tutorProfile.id,
      coordinatorId: coordinator.id,
      proposedSlotDate: "2026-10-26",
      proposedSlotTime: "15:00 - 17:00",
      quoteAmountMinorUnits: 1200000,
      cancellationTerms: "Free cancellation up to 24 hours prior to session start.",
      messageToFamily: "Specialist in organic reactions and JAMB past question mastery.",
    });

    const { proposal: approvedProposal, booking } = await db.approveMatchProposal(proposal.id, adultStudentId);

    expect(approvedProposal.status).toBe("APPROVED");
    expect(booking).toBeDefined();
    expect(booking.bookingStatus).toBe("PENDING_PAYMENT");
    expect(booking.studentId).toBe(adultStudentId);
    expect(booking.amountMinorUnits).toBe(1200000);
    expect(booking.commissionMinorUnits).toBe(Math.round(1200000 * 0.15));

    const updatedReq = await db.getTutorRequestById(req.id);
    expect(updatedReq?.status).toBe("AWAITING_PAYMENT");

    const events = await db.listRequestEvents(req.id);
    expect(events.some((e) => e.toStatus === "AWAITING_PAYMENT")).toBe(true);
  });

  it("REQ-05: Learner/Guardian declines proposal with reason, returns request to MATCHING queue", async () => {
    const adultStudentId = "usr-stu-001";
    const coordinator = Array.from(db.users.values()).find((u) => u.role === "MATCHING_COORDINATOR")!;
    const tutorProfile = Array.from(db.tutorProfiles.values())[0];

    const req = await db.createTutorRequest({
      studentId: adultStudentId,
      subject: "Biology",
      level: "SSCE",
      examGoal: "WAEC",
      topicsNeedingHelp: "Genetics",
      preferredDays: ["Wednesday"],
      preferredTimes: ["14:00 - 16:00"],
      lessonFormat: "ONLINE",
      urgency: "FLEXIBLE",
    });

    const proposal = await db.createMatchProposal({
      requestId: req.id,
      tutorProfileId: tutorProfile.id,
      coordinatorId: coordinator.id,
      proposedSlotDate: "2026-10-28",
      proposedSlotTime: "14:00 - 16:00",
      quoteAmountMinorUnits: 1000000,
      cancellationTerms: "24h policy",
      messageToFamily: "Top biology instructor.",
    });

    const declinedProposal = await db.declineMatchProposal(
      proposal.id,
      adultStudentId,
      "Looking for a later evening schedule"
    );

    expect(declinedProposal.status).toBe("DECLINED");
    expect(declinedProposal.familyFeedback).toBe("Looking for a later evening schedule");

    const updatedReq = await db.getTutorRequestById(req.id);
    expect(updatedReq?.status).toBe("MATCHING");

    const events = await db.listRequestEvents(req.id);
    expect(events.some((e) => e.toStatus === "MATCHING")).toBe(true);
  });

  it("REQ-06: Director updates tutor roster status and private roster lists tutors with publicListing: false", async () => {
    const tutorProfile = Array.from(db.tutorProfiles.values())[0];

    const updatedProfile = await db.updateTutorRosterStatus(tutorProfile.slug, "AVAILABLE_NOW");
    expect(updatedProfile.rosterStatus).toBe("AVAILABLE_NOW");
    expect(updatedProfile.publicListing).toBe(false);

    const privateRoster = await db.listPrivateRosterTutors({ rosterStatus: "AVAILABLE_NOW" });
    expect(privateRoster.length).toBeGreaterThan(0);
    expect(privateRoster.every((t) => t.profile.publicListing === false)).toBe(true);
  });
});
