import { describe, it, expect } from "vitest";
import { verifyGeometryProblem } from "@/lib/ai/geometry-verifier";
import { resolveSubjectProfile, SUBJECT_REGISTRY } from "@/lib/ai/subjects-registry";
import { verifyMathProblem, generateSocraticResponse } from "@/lib/adapters/ai";
import {
  renderGeometricDiagramSVG,
  verifyRedrawFidelity,
} from "@/lib/ai/figure-renderer";

describe("Stage 4: Multi-Subject Academic Solver & Geometry Verifier", () => {
  describe("Subject Registry & Gating", () => {
    it("Mathematics is enabled for students by default", () => {
      const profile = resolveSubjectProfile("Mathematics");
      expect(profile.enabledForStudents).toBe(true);
      expect(profile.verificationMethod).toBe("NUMERIC_CAS");
    });

    it("Non-math subjects are registered with profiles but gated behind evaluation", () => {
      const physics = resolveSubjectProfile("Physics");
      expect(physics.id).toBe("physics");
      expect(physics.enabledForStudents).toBe(false);

      const chemistry = resolveSubjectProfile("Chemistry");
      expect(chemistry.id).toBe("chemistry");
      expect(chemistry.enabledForStudents).toBe(false);
    });
  });

  describe("Geometry Constraint Solver & Circle Theorem Citations", () => {
    const circleQuestion =
      "In Fig. 2.19, PQ is a diameter of circle PMQN, centre O. If PQM = 63 degrees, find QNM.";

    it("programmatically verifies circle geometry problem and reproduces ∠PMQ = 90°, ∠QPM = 27°, and ∠QNM = 27°", () => {
      const result = verifyGeometryProblem(circleQuestion);
      expect(result).not.toBeNull();
      expect(result?.isValid).toBe(true);
      expect(result?.calculatedAngles.angle_PMQ).toBe(90);
      expect(result?.calculatedAngles.angle_PQM).toBe(63);
      expect(result?.calculatedAngles.angle_QPM).toBe(27);
      expect(result?.calculatedAngles.angle_QNM).toBe(27);

      // Verify circle theorems are explicitly cited
      const citations = result?.theoremCitations.join(" ");
      expect(citations).toContain("Angle in a Semicircle Theorem");
      expect(citations).toContain("Angles in the Same Segment Theorem");
      expect(citations).toContain("Triangle Angle Sum Axiom");
    });

    it("verifies WAEC cyclic quadrilateral question (Fig. 2.35)", () => {
      const cyclicQuadQuestion =
        "In Fig. 2.35, calculate the value of x, giving a reason for each step in your answer. [WAEC]";
      const result = verifyGeometryProblem(cyclicQuadQuestion);
      expect(result).not.toBeNull();
      expect(result?.isValid).toBe(true);
      expect(result?.calculatedAngles.x).toBe(40);
      expect(result?.theoremCitations.some((c) => c.includes("Cyclic Quadrilateral"))).toBe(true);
    });

    it("verifies circle problem through verifyMathProblem adapter", () => {
      const verification = verifyMathProblem(circleQuestion);
      expect(verification.isValid).toBe(true);
      expect(verification.notes).toContain("∠QNM = 27°");
      expect(verification.method).toContain("Semicircle");
    });

    it("generates full worked solution with method (M1) and accuracy (A1) marks", async () => {
      const response = await generateSocraticResponse({
        prompt: circleQuestion,
        hintLevel: "FULL_SOLUTION",
        curriculum: "WAEC_SSCE",
        subject: "Mathematics",
      });

      expect(response.content).toContain("27^\\circ");
      expect(response.content).toContain("angle in a semicircle");
      expect(response.content).toContain("angles in the same segment");
      expect(response.verification.isValid).toBe(true);
    });
  });

  describe("Figure Parsing & Vector Redraw Fidelity", () => {
    it("renders and verifies fidelity of WAEC cyclic quadrilateral ABCD with point E", () => {
      const cyclicElements = {
        figureType: "circle_geometry",
        points: [
          { name: "A" },
          { name: "B" },
          { name: "C" },
          { name: "D" },
          { name: "E" },
        ],
        lines: [
          { from: "A", to: "B" },
          { from: "B", to: "C" },
          { from: "C", to: "D" },
          { from: "D", to: "A" },
          { from: "D", to: "E" },
        ],
        circles: [{ centre: "O" }],
        angles: [],
        labels: ["A", "B", "C", "D", "E", "2x", "60°", "x"],
        relationships: [],
      };

      const svg = renderGeometricDiagramSVG(cyclicElements);
      expect(svg).toContain("<svg");
      expect(svg).toContain("Cyclic Quadrilateral ABCD");
      expect(svg).toContain(">A<");
      expect(svg).toContain(">B<");
      expect(svg).toContain(">C<");
      expect(svg).toContain(">D<");
      expect(svg).toContain(">E<");
      expect(svg).toContain("2x");
      expect(svg).toContain("60°");

      const fidelity = verifyRedrawFidelity(svg, cyclicElements);
      expect(fidelity.isFidelityMet).toBe(true);
      expect(fidelity.score).toBeGreaterThanOrEqual(0.8);
      expect(fidelity.renderedPointsCount).toBe(5);
    });
  });
});
