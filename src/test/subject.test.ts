import { describe, it, expect, beforeEach } from "vitest";
import { db } from "@/lib/db";

describe("Phase I: Multi-Subject Registry, Dynamic Curriculum & AI Subject Governance (SB-01 to SB-09)", () => {
  beforeEach(async () => {
    await db.reset();
  });

  // ==============================================================================
  // 1. SB-01: Subject Registry & Lifecycle Management
  // ==============================================================================
  describe("1. Subject Registry & Lifecycle (SB-01)", () => {
    it("lists default seeded active subjects and filters draft subjects", async () => {
      const activeSubjects = await db.listSubjects({ status: "ACTIVE" });
      expect(activeSubjects.length).toBeGreaterThanOrEqual(4);

      const slugs = activeSubjects.map((s) => s.slug);
      expect(slugs).toContain("mathematics");
      expect(slugs).toContain("english-language");
      expect(slugs).toContain("physics");
      expect(slugs).toContain("chemistry");
      // DRAFT subjects should not appear in active filter
      expect(slugs).not.toContain("biology");
      expect(slugs).not.toContain("music-theory");
    });

    it("creates a new subject in DRAFT status and updates its lifecycle", async () => {
      const created = await db.createSubject({
        name: "Further Mathematics",
        slug: "further-mathematics",
        description: "Pure math, vectors, matrices and complex numbers for advanced students.",
        category: "STEM",
        levels: ["SSS 1-3", "WAEC Further Math"],
        deliveryFormats: ["ONE_ON_ONE_ONLINE"],
        status: "DRAFT",
        icon: "Calculator",
        color: "indigo",
        pricingTierMinorUnits: 850000,
        commissionRatePercent: 15.0,
        aiEnabled: false,
        aiEvaluationStatus: "NOT_STARTED",
        aiVerificationMethod: "SYMBOLIC_SOLVER",
      });

      expect(created.id).toBeDefined();
      expect(created.slug).toBe("further-mathematics");
      expect(created.status).toBe("DRAFT");

      // Update to ACTIVE
      const updated = await db.updateSubject("further-mathematics", { status: "ACTIVE" });
      expect(updated?.status).toBe("ACTIVE");

      const activeList = await db.listSubjects({ status: "ACTIVE" });
      expect(activeList.map((s) => s.slug)).toContain("further-mathematics");
    });

    it("prevents duplicate subject slug creation", async () => {
      await expect(
        db.createSubject({
          name: "Mathematics Duplicate",
          slug: "mathematics",
          description: "Duplicate",
          category: "STEM",
          levels: ["SSS 1-3"],
          deliveryFormats: ["ONE_ON_ONE_ONLINE"],
          status: "DRAFT",
          icon: "Calculator",
          color: "purple",
          pricingTierMinorUnits: 750000,
          commissionRatePercent: 15.0,
          aiEnabled: false,
          aiEvaluationStatus: "NOT_STARTED",
          aiVerificationMethod: "SYMBOLIC_SOLVER",
        })
      ).rejects.toThrow(/already exists/);
    });
  });

  // ==============================================================================
  // 2. SB-02: Content Manager Subject Scoping
  // ==============================================================================
  describe("2. Content Manager Subject Scoping (SB-02)", () => {
    it("restricts content managers to assigned subjects while allowing full admin access", async () => {
      const tutor = Array.from(db.users.values()).find((u) => u.role === "TUTOR");
      const admin = Array.from(db.users.values()).find((u) => u.role === "ADMIN");
      expect(tutor).toBeDefined();
      expect(admin).toBeDefined();

      // Tutor is assigned to 'mathematics' by seed
      const isAssignedMath = await db.isContentManagerAssignedToSubject(tutor!.id, "mathematics");
      expect(isAssignedMath).toBe(true);

      // Tutor is NOT assigned to 'chemistry'
      const isAssignedChem = await db.isContentManagerAssignedToSubject(tutor!.id, "chemistry");
      expect(isAssignedChem).toBe(false);

      // Admin has access to all subjects
      const isAdminMath = await db.isContentManagerAssignedToSubject(admin!.id, "mathematics");
      const isAdminChem = await db.isContentManagerAssignedToSubject(admin!.id, "chemistry");
      expect(isAdminMath).toBe(true);
      expect(isAdminChem).toBe(true);
    });
  });

  // ==============================================================================
  // 3. SB-03: Multi-Subject Tutor Qualifications & Verification
  // ==============================================================================
  describe("3. Multi-Subject Tutor Qualifications (SB-03)", () => {
    it("retrieves approved qualifications for a multi-subject tutor", async () => {
      const quals = await db.listTutorSubjectQualifications({ tutorSlug: "dr-tayo-okafor" });
      expect(quals.length).toBeGreaterThanOrEqual(2);

      const subjects = quals.filter((q) => q.status === "APPROVED").map((q) => q.subjectSlug);
      expect(subjects).toContain("mathematics");
      expect(subjects).toContain("physics");
    });

    it("verifies and approves a pending tutor qualification with admin audit trail", async () => {
      const admin = Array.from(db.users.values()).find((u) => u.role === "ADMIN");
      expect(admin).toBeDefined();

      // Amina Bello has pending qualification in english-language
      const pending = await db.listTutorSubjectQualifications({
        tutorSlug: "tp-002",
        subjectSlug: "english-language",
        status: "PENDING",
      });
      expect(pending.length).toBe(1);

      const approved = await db.verifyTutorSubjectQualification(pending[0].id, "APPROVED", admin!.id);
      expect(approved?.status).toBe("APPROVED");
      expect(approved?.verifiedByAdminId).toBe(admin!.id);

      // Verify admin audit log
      const audit = Array.from(db.adminAuditLogs.values()).find(
        (a) => a.action === "VERIFY_TUTOR_QUALIFICATION_APPROVED" && a.targetId === pending[0].id
      );
      expect(audit).toBeDefined();
    });
  });

  // ==============================================================================
  // 4. SB-04: Cross-Subject Search & Discovery
  // ==============================================================================
  describe("4. Cross-Subject Search & Discovery (SB-04)", () => {
    it("filters subjects by academic category", async () => {
      const stemSubjects = await db.listSubjects({ category: "STEM" });
      expect(stemSubjects.length).toBeGreaterThanOrEqual(3);
      expect(stemSubjects.every((s) => s.category === "STEM")).toBe(true);

      const langSubjects = await db.listSubjects({ category: "Languages" });
      expect(langSubjects.length).toBe(1);
      expect(langSubjects[0].slug).toBe("english-language");
    });
  });

  // ==============================================================================
  // 5. SB-05 & SB-06: Pre-Release AI Safety & Rubric Evaluation Gate
  // ==============================================================================
  describe("5. Pre-Release AI Safety & Rubric Gate (SB-05, SB-06)", () => {
    it("strictly blocks enabling AI if evaluation has not passed (score < 80%)", async () => {
      const admin = Array.from(db.users.values()).find((u) => u.role === "ADMIN");
      expect(admin).toBeDefined();

      // English Language has evaluation score 78.0% (FAILED gate)
      const english = await db.getSubjectBySlug("english-language");
      expect(english?.aiEvaluationStatus).toBe("IN_EVALUATION");
      expect(english?.aiEnabled).toBe(false);

      const toggleResult = await db.toggleSubjectAI("english-language", true, admin!.id);
      expect(toggleResult.success).toBe(false);
      expect(toggleResult.error).toContain("Pre-release safety and pedagogical evaluation has not passed");

      // Verify AI remains disabled
      const refreshed = await db.getSubjectBySlug("english-language");
      expect(refreshed?.aiEnabled).toBe(false);
    });

    it("allows enabling AI after formal evaluation passes >= 80% benchmark", async () => {
      const admin = Array.from(db.users.values()).find((u) => u.role === "ADMIN");
      expect(admin).toBeDefined();

      // Physics has passed evaluation (88.0%)
      const physics = await db.getSubjectBySlug("physics");
      expect(physics?.aiEvaluationStatus).toBe("PASSED");
      expect(physics?.aiEnabled).toBe(false);

      const toggleResult = await db.toggleSubjectAI("physics", true, admin!.id);
      expect(toggleResult.success).toBe(true);
      expect(toggleResult.subject?.aiEnabled).toBe(true);

      // Verify audit log
      const audit = Array.from(db.adminAuditLogs.values()).find(
        (a) => a.action === "ENABLE_SUBJECT_AI" && a.targetId === "physics"
      );
      expect(audit).toBeDefined();
    });

    it("submits a new AI evaluation and updates subject status", async () => {
      const admin = Array.from(db.users.values()).find((u) => u.role === "ADMIN");
      expect(admin).toBeDefined();

      const evaluation = await db.submitSubjectAIEvaluation({
        subjectSlug: "chemistry",
        evaluatorId: admin!.id,
        evaluatorName: admin!.fullName,
        rubricScore: 91.5,
        passed: true,
        unsafeContentBlockedCount: 14,
        groundingCoveragePercent: 94.0,
        notes: "Stoichiometry, organic mechanisms and periodic trends verified against WAEC mark schemes.",
        signOffSignature: "SIG-CHEM-ADMIN-EVAL-2026",
      });

      expect(evaluation.id).toBeDefined();
      expect(evaluation.passed).toBe(true);
      expect(evaluation.rubricScore).toBe(91.5);

      const chem = await db.getSubjectBySlug("chemistry");
      expect(chem?.aiEvaluationStatus).toBe("PASSED");
      expect(chem?.aiEvaluationScore).toBe(91.5);

      // Now toggle AI on should succeed
      const toggleRes = await db.toggleSubjectAI("chemistry", true, admin!.id);
      expect(toggleRes.success).toBe(true);
      expect(toggleRes.subject?.aiEnabled).toBe(true);
    });
  });

  // ==============================================================================
  // 6. SB-08 & SB-09: Per-Subject Analytics & Commission Overrides
  // ==============================================================================
  describe("6. Analytics & Commission Overrides (SB-08, SB-09)", () => {
    it("reports per-subject metrics and custom commission rates", async () => {
      const chem = await db.getSubjectBySlug("chemistry");
      expect(chem?.commissionRatePercent).toBe(12.5); // Custom commission override

      const mathAnalytics = await db.getSubjectAnalytics("mathematics");
      expect(mathAnalytics.tutorCount).toBeGreaterThanOrEqual(1);
      expect(mathAnalytics.enrolmentsCount).toBeGreaterThanOrEqual(1);
    });
  });
});
