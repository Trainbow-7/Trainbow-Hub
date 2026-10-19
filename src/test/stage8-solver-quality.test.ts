import { describe, it, expect, beforeEach } from "vitest";
import { db } from "@/lib/db";
import { verifyGeometryProblem } from "@/lib/ai/geometry-verifier";
import { verifyMathProblem, generateSocraticResponse } from "@/lib/adapters/ai";
import { validateSolutionQuality, BANNED_FILLER_PHRASES } from "@/lib/ai/solver-schema";

describe("Stage 5 Solver & Verifier Quality Suite", () => {
  beforeEach(async () => {
    await db.reset();
  });

  const fig226Question =
    "In Fig. 2.26, P, Q, R, S are points on a circle centre O. QP is produced to X. If angle XPS = 77 degrees and angle PSO = 68 degrees, find angle PQO.";

  const circleDiameterQuestion =
    "In Fig. 2.19, PQ is a diameter of circle PMQN, centre O. If PQM = 63 degrees, find QNM.";

  const cyclicQuadQuestion =
    "(a) Prove that the opposite angles of a cyclic quadrilateral are supplementary. (b) In Fig. 2.35, calculate the value of x, giving a reason for each step in your answer. [WAEC]";

  const algebraQuestion = "Solve 2x^2 - 5x + 3 = 0";

  const physicsCircuitQuestion =
    "A circuit contains a 12V battery and a 10 ohm resistor in series with an ammeter. Calculate the current reading I.";

  const chemistryTitrationQuestion =
    "In an acid-base titration, 25.0 cm3 of 0.100 mol/dm3 HCl neutralizes 20.0 cm3 of NaOH. Determine the concentration of the base.";

  describe("1. Fig. 2.26 Fixture Verification & Solution", () => {
    it("independently verifies Fig. 2.26: angle PQO = 35°, citing straight line and isosceles radius theorems", () => {
      const geom = verifyGeometryProblem(fig226Question);
      expect(geom).not.toBeNull();
      expect(geom?.isValid).toBe(true);
      expect(geom?.calculatedAngles.angle_PQO).toBe(35);
      expect(geom?.calculatedAngles.angle_QPS).toBe(103);
      expect(geom?.calculatedAngles.angle_QPO).toBe(35);

      const citations = geom?.theoremCitations.join(" ");
      expect(citations).toContain("Angles on a Straight Line");
      expect(citations).toContain("Isosceles Triangle Radius Theorem");
    });

    it("generates complete step-by-step worked solution for Fig. 2.26 with correct final answer and reasons", async () => {
      const response = await generateSocraticResponse({
        prompt: fig226Question,
        hintLevel: "FULL_SOLUTION",
        curriculum: "WAEC_SSCE",
        subject: "Mathematics",
      });

      expect(response.content).toContain("Angle PQO = 35°");
      expect(response.content).toContain("angles on a straight line");
      expect(response.content).toContain("isosceles triangle");
      expect(response.verification.isValid).toBe(true);
      expect(response.verification.notes).toContain("confirm ∠PQO = 35°");
    });
  });

  describe("2. Circle PMQN Diameter Fixture", () => {
    it("generates final answer 27° with semicircle theorem", async () => {
      const response = await generateSocraticResponse({
        prompt: circleDiameterQuestion,
        hintLevel: "FULL_SOLUTION",
      });
      expect(response.content).toContain("27^\\circ");
      expect(response.content).toContain("angle in a semicircle");
      expect(response.verification.isValid).toBe(true);
    });
  });

  describe("3. WAEC Cyclic Quadrilateral Fixture (Both Parts Addressed)", () => {
    it("proves supplementary opposite angles in Part (a) and calculates x = 40° with reasons in Part (b)", async () => {
      const response = await generateSocraticResponse({
        prompt: cyclicQuadQuestion,
        hintLevel: "FULL_SOLUTION",
      });
      expect(response.content).toContain("Part (a)");
      expect(response.content).toContain("supplementary");
      expect(response.content).toContain("Part (b)");
      expect(response.content).toContain("x = 40");
      expect(response.content).toContain("opposite angles of cyclic quad");
    });
  });

  describe("4. Algebra & Quantitative STEM Calculations", () => {
    it("Algebra: solves 2x^2 - 5x + 3 = 0, CAS verified with roots 1.5, 1", async () => {
      const response = await generateSocraticResponse({
        prompt: algebraQuestion,
        hintLevel: "FULL_SOLUTION",
      });
      expect(response.content).toContain("x = 1.5, 1");
      expect(response.verification.roots).toEqual([1.5, 1]);
      expect(response.verification.isValid).toBe(true);
    });

    it("Physics: calculates electric current with units (I = 1.2 A)", async () => {
      const response = await generateSocraticResponse({
        prompt: physicsCircuitQuestion,
        hintLevel: "FULL_SOLUTION",
        subject: "Physics",
      });
      expect(response.content).toContain("1.2");
      expect(response.content).toContain("A");
      expect(response.content).toContain("Ohm's Law");
    });

    it("Chemistry: calculates base concentration with units (0.125 mol/dm3)", async () => {
      const response = await generateSocraticResponse({
        prompt: chemistryTitrationQuestion,
        hintLevel: "FULL_SOLUTION",
        subject: "Chemistry",
      });
      expect(response.content).toContain("0.125");
      expect(response.content).toContain("mol/dm");
    });
  });

  describe("5. Banned-Phrase & Zero-Filler Quality Tests Across All Fixtures", () => {
    const fixtures = [
      fig226Question,
      circleDiameterQuestion,
      cyclicQuadQuestion,
      algebraQuestion,
      physicsCircuitQuestion,
      chemistryTitrationQuestion,
    ];

    it("asserts none of the solutions contain any banned template filler phrases", async () => {
      for (const fix of fixtures) {
        const response = await generateSocraticResponse({
          prompt: fix,
          hintLevel: "FULL_SOLUTION",
        });

        const lowerContent = response.content.toLowerCase();
        for (const phrase of BANNED_FILLER_PHRASES) {
          expect(lowerContent).not.toContain(phrase.toLowerCase());
        }

        // Must not contain duplicated question
        expect(lowerContent).not.toContain("here is the complete step-by-step solution for:\n*\"**" + fix.toLowerCase());
      }
    });

    it("quality gate validator rejects empty or filler outputs", () => {
      const mockFillerOutput = {
        domain: "GENERAL_ACADEMIC",
        detectedSubject: "General",
        summaryTitle: "Comprehensive Academic Solution",
        keyFormulaOrLaw: "Core Curriculum Principles",
        conceptualClue: "Break the problem down",
        steps: [
          {
            statement: "Analyze Question Requirements: Carefully define the core terms",
            reason: "Apply Curriculum Framework",
          },
        ],
        finalAnswer: "Complete curriculum-grounded academic answer provided.",
        confidence: 50,
      };

      const result = validateSolutionQuality(mockFillerOutput, fig226Question);
      expect(result.passed).toBe(false);
      expect(result.violations.some((v) => v.includes("banned filler"))).toBe(true);
      expect(result.violations.some((v) => v.includes("placeholder"))).toBe(true);
    });
  });

  describe("6. Hint-First Progression & Follow-Up Context", () => {
    it("Hint Level 1 hides final answer and provides conceptual clue only", async () => {
      const hint1 = await generateSocraticResponse({
        prompt: fig226Question,
        hintLevel: "HINT_1",
      });
      expect(hint1.content).toContain("Hint Level 1: Conceptual Clue");
      expect(hint1.content).not.toContain("Angle PQO = 35°");
      expect(hint1.content).not.toContain("Full Worked Solution");
    });

    it("Follow-up question in chat route retrieves previous context", async () => {
      const { POST: chatRoute } = await import("@/app/api/ai/chat/route");

      // Turn 1: Initial Question
      const req1 = new Request("http://localhost:3000/api/ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-user-id": "usr-std-001" },
        body: JSON.stringify({
          prompt: fig226Question,
          hintLevel: "FULL_SOLUTION",
        }),
      });

      const res1 = await chatRoute(req1);
      const data1 = await res1.json();
      expect(data1.success).toBe(true);

      // Turn 2: Follow-up question in same conversation
      const req2 = new Request("http://localhost:3000/api/ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-user-id": "usr-std-001" },
        body: JSON.stringify({
          conversationId: data1.conversationId,
          prompt: "Why is angle OPS equal to 68 degrees?",
          hintLevel: "FULL_SOLUTION",
        }),
      });

      const res2 = await chatRoute(req2);
      const data2 = await res2.json();
      expect(data2.success).toBe(true);
      expect(data2.conversationId).toBe(data1.conversationId);
    });
  });

  describe("7. Sequential 5-Fixture Independent Execution (No Cross-Contamination)", () => {
    it("executes 5 distinct fixtures sequentially, asserting correct distinct final answers", async () => {
      const tests = [
        { q: fig226Question, expected: "35" },
        { q: circleDiameterQuestion, expected: "27" },
        { q: cyclicQuadQuestion, expected: "40" },
        { q: algebraQuestion, expected: "1.5" },
        { q: physicsCircuitQuestion, expected: "1.2" },
      ];

      for (const item of tests) {
        const res = await generateSocraticResponse({
          prompt: item.q,
          hintLevel: "FULL_SOLUTION",
        });
        expect(res.content).toContain(item.expected);
      }
    });
  });
});
