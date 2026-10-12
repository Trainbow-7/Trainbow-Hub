import { describe, it, expect, beforeEach } from "vitest";
import { db } from "@/lib/db";
import {
  triggerDatabaseBackup,
  getBackupArchives,
  testRestoreProcedure,
  getDisasterRecoveryStatus,
} from "@/lib/recovery/backup";
import {
  executePrivacyPurge,
  getPrivacyPurgeHistory,
  DATA_RETENTION_POLICIES,
} from "@/lib/privacy/retention";

describe("Phase M: Production Release Gates, Disaster Recovery & Handover (ADR-014, PRD Section 8 & 9)", () => {
  beforeEach(async () => {
    await db.reset();
  });

  describe("Release Gates 1-8 Automated Verification Engine", () => {
    it("should list all 8 mandatory release gates with 100% initial passing score", async () => {
      const evaluation = await db.runAllReleaseGates();
      expect(evaluation.gates.length).toBe(8);
      expect(evaluation.allPassed).toBe(true);
      expect(evaluation.overallScore).toBeGreaterThanOrEqual(95.0);

      // Verify each individual gate exists and has valid evidence
      const gate1 = evaluation.gates.find((g) => g.gateNumber === 1);
      expect(gate1).toBeDefined();
      expect(gate1?.gateName).toContain("Security");
      expect(gate1?.passed).toBe(true);

      const gate2 = evaluation.gates.find((g) => g.gateNumber === 2);
      expect(gate2?.gateName).toContain("Booking Conflicts");
      expect(gate2?.passed).toBe(true);

      const gate3 = evaluation.gates.find((g) => g.gateNumber === 3);
      expect(gate3?.gateName).toContain("Payment");
      expect(gate3?.passed).toBe(true);

      const gate4 = evaluation.gates.find((g) => g.gateNumber === 4);
      expect(gate4?.gateName).toContain("Access Controls");
      expect(gate4?.passed).toBe(true);

      const gate5 = evaluation.gates.find((g) => g.gateNumber === 5);
      expect(gate5?.gateName).toContain("AI Accuracy");
      expect(gate5?.passed).toBe(true);

      const gate6 = evaluation.gates.find((g) => g.gateNumber === 6);
      expect(gate6?.gateName).toContain("Backup Restoration");
      expect(gate6?.passed).toBe(true);

      const gate7 = evaluation.gates.find((g) => g.gateNumber === 7);
      expect(gate7?.gateName).toContain("Safeguarding");
      expect(gate7?.passed).toBe(true);

      const gate8 = evaluation.gates.find((g) => g.gateNumber === 8);
      expect(gate8?.gateName).toContain("Policies Published");
      expect(gate8?.passed).toBe(true);
    });

    it("should allow re-evaluating an individual release gate with updated evidence", async () => {
      const updated = await db.evaluateReleaseGate(1, true, 100.0, {
        tlsEnforced: true,
        penetrationTestCompleted: true,
        criticalVulnerabilities: 0,
      });

      expect(updated.gateNumber).toBe(1);
      expect(updated.scorePercentage).toBe(100.0);
      expect(updated.passed).toBe(true);
      expect(updated.evidencePayload).toContain("penetrationTestCompleted");
    });
  });

  describe("Disaster Recovery, Automated Backups & Restore Demonstration", () => {
    it("should trigger automated database snapshots with cryptographic checksums", async () => {
      const initialCount = (await getBackupArchives()).length;
      const backup = await triggerDatabaseBackup("MANUAL_ADMIN");

      expect(backup.id).toBeDefined();
      expect(backup.snapshotFilename).toContain(".sql.gz");
      expect(backup.checksum).toContain("sha256-");
      expect(backup.dataScrubbed).toBe(true);
      expect(backup.status).toBe("VERIFIED");

      const all = await getBackupArchives();
      expect(all.length).toBe(initialCount + 1);
    });

    it("should verify recovery status and RPO/RTO indicators", async () => {
      const status = await getDisasterRecoveryStatus();
      expect(status.rpoTargetMinutes).toBe(15);
      expect(status.rtoTargetMinutes).toBe(5);
      expect(status.restoreRunbookVerified).toBe(true);
    });

    it("should demonstrate automated backup restoration within target RTO", async () => {
      const backups = await getBackupArchives();
      const targetBackup = backups[0];

      const result = await testRestoreProcedure(targetBackup.id);
      expect(result.success).toBe(true);
      expect(result.backup.status).toBe("RESTORED");
      expect(result.rtoActualSeconds).toBeLessThanOrEqual(300); // <= 5 minutes (300 sec)
    });
  });

  describe("NDPA 2023 Data Retention & Privacy Erasure", () => {
    it("should define statutory data retention policy matrix", () => {
      expect(DATA_RETENTION_POLICIES.length).toBeGreaterThanOrEqual(5);

      const aiPolicy = DATA_RETENTION_POLICIES.find((p) => p.dataType.includes("AI Conversations"));
      expect(aiPolicy).toBeDefined();
      expect(aiPolicy?.retentionWindow).toContain("90 Days");
      expect(aiPolicy?.userErasureSupported).toBe(true);

      const taxPolicy = DATA_RETENTION_POLICIES.find((p) => p.dataType.includes("Paystack Financial"));
      expect(taxPolicy).toBeDefined();
      expect(taxPolicy?.retentionWindow).toContain("7 Years");
      expect(taxPolicy?.userErasureSupported).toBe(false);
    });

    it("should execute statutory privacy purge request and log audit entry", async () => {
      const purgeResult = await executePrivacyPurge(
        "usr-std-001",
        "AI_CONVERSATIONS_90D",
        "STUDENT"
      );

      expect(purgeResult.id).toBeDefined();
      expect(purgeResult.userId).toBe("usr-std-001");
      expect(purgeResult.status).toBe("COMPLETED");
      expect(purgeResult.auditNotes).toContain("NDPA 2023");

      const history = await getPrivacyPurgeHistory();
      expect(history.some((h) => h.id === purgeResult.id)).toBe(true);
    });
  });

  describe("12 Platform Handover Deliverables Verification", () => {
    it("should verify all 12 handover items from PRD Section 9 are delivered", () => {
      const items = db.getHandoverDeliverables();
      expect(items.length).toBe(12);

      const numbers = items.map((i) => i.number);
      expect(numbers).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

      const allDelivered = items.every((i) => i.status === "DELIVERED");
      expect(allDelivered).toBe(true);
    });
  });
});
