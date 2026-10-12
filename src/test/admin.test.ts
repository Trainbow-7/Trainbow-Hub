import { describe, it, expect, beforeEach } from "vitest";
import { db } from "@/lib/db";

describe("Phase H: Administration, Safeguarding Triage & Financial Operations Hub (AD-01 to AD-06, PY-07 to PY-09)", () => {
  const adminId = "usr-adm-005";

  beforeEach(async () => {
    await db.reset();
  });

  describe("AD-01: User Management & Access Governance", () => {
    it("lists all system users with booking statistics and role tags", async () => {
      const users = await db.listUsersForAdmin();
      expect(users.length).toBeGreaterThanOrEqual(5);

      const student = users.find(u => u.id === "usr-std-001");
      expect(student).toBeDefined();
      expect(student?.role).toBe("STUDENT");
      expect(student?.bookingCount).toBeGreaterThanOrEqual(1);

      const tutor = users.find(u => u.id === "usr-tut-004");
      expect(tutor).toBeDefined();
      expect(tutor?.role).toBe("TUTOR");
      expect(tutor?.tutorStatus).toBe("APPROVED");
    });

    it("updates user role and records immutable audit log", async () => {
      const studentId = "usr-std-001";
      const updated = await db.updateUserRole(studentId, "PARENT", adminId);
      expect(updated.role).toBe("PARENT");

      const logs = await db.listAdminAuditLogs();
      const roleLog = logs.find(l => l.action === "USER_ROLE_UPDATED" && l.targetId === studentId);
      expect(roleLog).toBeDefined();
      expect(roleLog?.adminId).toBe(adminId);
      expect(roleLog?.afterState?.role).toBe("PARENT");
    });

    it("suspends and reactivates a user, cascading suspension to tutor profiles", async () => {
      const tutorUserId = "usr-tut-004";
      const suspended = await db.toggleUserSuspension(tutorUserId, true, adminId, "Violation of platform conduct");
      expect(suspended.isSuspended).toBe(true);
      expect(suspended.suspendedReason).toBe("Violation of platform conduct");

      // Verify tutor profile is marked SUSPENDED
      const tutors = await db.listTutorsForVetting();
      const drTayo = tutors.find(t => t.user.id === tutorUserId);
      expect(drTayo?.profile.status).toBe("SUSPENDED");

      // Reactivate user
      const reactivated = await db.toggleUserSuspension(tutorUserId, false, adminId);
      expect(reactivated.isSuspended).toBe(false);

      const reactivatedTutor = (await db.listTutorsForVetting()).find(t => t.user.id === tutorUserId);
      expect(reactivatedTutor?.profile.status).toBe("APPROVED");
    });
  });

  describe("AD-02: Tutor Vetting & Credential Verification Queue", () => {
    it("displays pending tutor applications with uploaded statutory documents", async () => {
      const pendingTutors = await db.listTutorsForVetting("PENDING_REVIEW");
      expect(pendingTutors.length).toBeGreaterThanOrEqual(1);

      const amina = pendingTutors.find(t => t.profile.slug === "amina-bello");
      expect(amina).toBeDefined();
      expect(amina?.profile.ninVerified).toBe(true);
      expect(amina?.profile.ninNumber).toBe("NIN-29481729381");
      expect(amina?.profile.degreeTitle).toContain("M.Sc. Applied Mathematics");
      expect(amina?.profile.trcnCertified).toBe(false); // Awaiting inspection
    });

    it("approves pending tutor, verifying status, credentials, and user verification", async () => {
      const amina = (await db.listTutorsForVetting()).find(t => t.profile.slug === "amina-bello");
      expect(amina).toBeDefined();

      const approved = await db.updateTutorVerification(
        amina!.profile.id,
        "APPROVED",
        adminId,
        "TRCN certificate and University of Lagos transcript verified"
      );

      expect(approved.status).toBe("APPROVED");
      expect(approved.trcnCertified).toBe(true);
      expect(approved.verificationNotes).toContain("TRCN certificate");

      const user = await db.findUserById(amina!.user.id);
      expect(user?.isVerified).toBe(true);

      const logs = await db.listAdminAuditLogs();
      const approveLog = logs.find(l => l.action === "TUTOR_STATUS_APPROVED" && l.targetId === amina!.profile.id);
      expect(approveLog).toBeDefined();
    });
  });

  describe("AD-04: Safeguarding Incident SLA Triage Queue", () => {
    it("tracks urgent safeguarding incidents with <24 hour SLA countdowns", async () => {
      const incidents = await db.listSafeguardingIncidentsAdmin();
      expect(incidents.length).toBeGreaterThanOrEqual(1);

      const urgentInc = incidents.find(i => i.severity === "URGENT");
      expect(urgentInc).toBeDefined();
      expect(urgentInc?.assignedTo).toContain("Grace Danladi");
      expect(urgentInc?.remainingSlaHours).toBeGreaterThan(0);
      expect(urgentInc?.remainingSlaHours).toBeLessThanOrEqual(24);
      expect(urgentInc?.isSlaBreached).toBe(false);
    });

    it("triages safeguarding incident with investigation notes and status progression", async () => {
      const incidents = await db.listSafeguardingIncidentsAdmin();
      const incident = incidents[0];

      // Update to INVESTIGATING
      const inProgress = await db.triageSafeguardingIncident(incident.id, {
        status: "INVESTIGATING",
        assignedTo: "Grace Danladi (Designated Safeguarding Lead)",
        resolutionNotes: "Spoke with student Chioma Adeleke; reviewing video session timestamps.",
        adminId,
      });
      expect(inProgress.status).toBe("INVESTIGATING");
      expect(inProgress.resolutionNotes).toContain("Chioma Adeleke");

      // Update to RESOLVED
      const resolved = await db.triageSafeguardingIncident(incident.id, {
        status: "RESOLVED",
        resolutionNotes: "Tutor issued formal reminder regarding platform conduct and screen-sharing rules.",
        adminId,
      });
      expect(resolved.status).toBe("RESOLVED");
    });
  });

  describe("PY-07: Provider Settlement Reconciliation", () => {
    it("runs automated daily reconciliation and flags zero discrepancy", async () => {
      const report = await db.runDailyReconciliation("2026-10-12", adminId);
      expect(report.status).toBe("BALANCED");
      expect(report.provider).toBe("PAYSTACK");
      expect(report.matchedCount).toBeGreaterThanOrEqual(1);
      expect(report.discrepancyMinorUnits).toBe(0);
      expect(report.reconciledBy).toBe(adminId);

      const reports = await db.listReconciliationReports();
      expect(reports.some(r => r.id === report.id)).toBe(true);
    });
  });

  describe("PY-08: Tutor Ledger Payouts & Commission Splits", () => {
    it("computes accurate 85% net tutor available balance from append-only ledger", async () => {
      const balances = await db.listTutorPayoutBalances();
      const drTayo = balances.find(b => b.tutorSlug === "dr-tayo-okafor");
      expect(drTayo).toBeDefined();

      // Seed booking: ₦7,500 (750,000 kobo)
      // 15% platform commission = ₦1,125 (112,500 kobo)
      // 85% net tutor earnings = ₦6,375 (637,500 kobo)
      expect(drTayo?.grossEarningsMinorUnits).toBe(750000);
      expect(drTayo?.commissionDebitedMinorUnits).toBe(112500);
      expect(drTayo?.availableBalanceMinorUnits).toBe(637500);
      expect(drTayo?.bankName).toContain("GTBank");
    });

    it("rejects tutor payout exceeding available balance", async () => {
      await expect(
        db.processTutorPayout("dr-tayo-okafor", 999999999, adminId)
      ).rejects.toThrow(/exceeds available balance/i);
    });

    it("processes valid tutor payout and appends PAYOUT ledger debit", async () => {
      const payoutAmount = 500000; // ₦5,000
      const { payout, ledgerEntry } = await db.processTutorPayout(
        "dr-tayo-okafor",
        payoutAmount,
        adminId,
        "Settlement via NIP transfer"
      );

      expect(payout.amountMinorUnits).toBe(payoutAmount);
      expect(payout.status).toBe("PROCESSED");
      expect(ledgerEntry.type).toBe("PAYOUT");
      expect(ledgerEntry.amountMinorUnits).toBe(payoutAmount);

      // Verify new available balance decreased by ₦5,000
      const balances = await db.listTutorPayoutBalances();
      const drTayo = balances.find(b => b.tutorSlug === "dr-tayo-okafor");
      expect(drTayo?.payoutsProcessedMinorUnits).toBe(payoutAmount);
      expect(drTayo?.availableBalanceMinorUnits).toBe(637500 - payoutAmount);
    });
  });

  describe("AD-03 & PY-09: Booking Monitoring & Dispute Resolution", () => {
    it("resolves booking dispute with full refund and writes REFUND_DEBIT to ledger", async () => {
      const bookingId = "bkg-seed-001";
      const { booking, refundLedgerEntry } = await db.resolveBookingDispute(bookingId, {
        decision: "REFUND_FULL",
        adminId,
        notes: "Technical network outage confirmed during session",
      });

      expect(booking.bookingStatus).toBe("CANCELLED");
      expect(booking.paymentStatus).toBe("REFUNDED");
      expect(booking.cancellationReason).toContain("Dispute resolved by Admin");

      expect(refundLedgerEntry).toBeDefined();
      expect(refundLedgerEntry?.type).toBe("REFUND_DEBIT");
      expect(refundLedgerEntry?.amountMinorUnits).toBe(750000);
    });
  });

  describe("AD-05: AI Usage & Governance Analytics", () => {
    it("computes prompt tokens, completion tokens, and estimated USD cost", async () => {
      const stats = await db.getAIUsageAdminAnalytics();
      expect(stats.totalQueries).toBeGreaterThanOrEqual(1);
      expect(stats.totalPromptTokens).toBeGreaterThanOrEqual(120);
      expect(stats.totalCompletionTokens).toBeGreaterThanOrEqual(280);
      expect(stats.estimatedCostUsd).toBeGreaterThanOrEqual(0.002);
      expect(stats.topCurriculums.length).toBeGreaterThanOrEqual(1);
    });
  });

  describe("AD-06: Operational Alerts Governance", () => {
    it("lists active operational alerts and transitions alert to ACKNOWLEDGED", async () => {
      const alerts = await db.listOperationalAlerts("ACTIVE");
      expect(alerts.length).toBeGreaterThanOrEqual(1);

      const targetAlert = alerts[0];
      const acknowledged = await db.updateOperationalAlertStatus(targetAlert.id, "ACKNOWLEDGED", adminId);
      expect(acknowledged.status).toBe("ACKNOWLEDGED");
      expect(acknowledged.acknowledgedBy).toBe("Trainbow Administrator");
      expect(acknowledged.acknowledgedAt).toBeDefined();
    });
  });

  describe("AD-07: Immutable Admin Action Audit Trail", () => {
    it("maintains an append-only audit trail for privileged actions", async () => {
      const initialLogs = await db.listAdminAuditLogs();
      const initialCount = initialLogs.length;

      await db.logAdminAudit({
        adminId,
        action: "TEST_SECURITY_CHECK",
        targetType: "SETTINGS",
        targetId: "MFA_POLICY",
        afterState: { enforced: true },
      });

      const updatedLogs = await db.listAdminAuditLogs();
      expect(updatedLogs.length).toBe(initialCount + 1);
      expect(updatedLogs[0].action).toBe("TEST_SECURITY_CHECK");
      expect(updatedLogs[0].adminId).toBe(adminId);
    });
  });
});
