import { describe, it, expect } from "vitest";
import {
  DiagramSpecSchema,
  validateDiagramSanity,
  DiagramSpec,
} from "@/lib/ai/diagram-spec";

describe("Stage 5: Diagram Engine Core & Validation Suite", () => {
  it("validates DiagramSpec against Zod schema", () => {
    const spec: DiagramSpec = {
      id: "diag_geom_circle_01",
      title: "Circle PMQN Diameter & Inscribed Angles",
      family: "GEOMETRY",
      viewBox: "0 0 500 400",
      elements: [
        { type: "circle", attrs: { cx: 250, cy: 200, r: 120, stroke: "#4338ca", fill: "#f5f3ff" } },
        { type: "line", attrs: { x1: 130, y1: 200, x2: 370, y2: 200, stroke: "#1e293b", strokeWidth: 2 }, label: "Diameter PQ" },
        { type: "line", attrs: { x1: 130, y1: 200, x2: 310, y2: 100, stroke: "#2563eb", strokeWidth: 2 }, label: "Chord PM" },
        { type: "line", attrs: { x1: 370, y1: 200, x2: 310, y2: 100, stroke: "#2563eb", strokeWidth: 2 }, label: "Chord QM" },
      ],
      annotations: [
        { x: 120, y: 200, text: "P" },
        { x: 380, y: 200, text: "Q" },
        { x: 310, y: 90, text: "M (90°)" },
        { x: 250, y: 215, text: "O (Centre)" },
      ],
      altText: "Geometric diagram of circle PMQN with diameter PQ, centre O, showing angle in a semicircle PMQ = 90 degrees.",
      examModeAvailable: true,
    };

    const parsed = DiagramSpecSchema.parse(spec);
    expect(parsed.id).toBe("diag_geom_circle_01");
    expect(parsed.elements.length).toBe(4);
    expect(parsed.annotations.length).toBe(4);

    const sanity = validateDiagramSanity(parsed);
    expect(sanity.passed).toBe(true);
    expect(sanity.errors.length).toBe(0);
  });

  it("detects missing elements and label collisions during sanity check", () => {
    const invalidSpec: DiagramSpec = {
      id: "diag_invalid",
      title: "Collision Spec",
      family: "GEOMETRY",
      viewBox: "0 0 500 400",
      elements: [], // Missing elements
      annotations: [
        { x: 100, y: 100, text: "Label A" },
        { x: 105, y: 103, text: "Label B" }, // Overlapping
      ],
      altText: "Test collision diagram",
      examModeAvailable: true,
    };

    const sanity = validateDiagramSanity(invalidSpec);
    expect(sanity.passed).toBe(false);
    expect(sanity.errors).toContain("Diagram contains no renderable elements");
    expect(sanity.warnings.length).toBeGreaterThan(0);
    expect(sanity.warnings[0]).toContain("Potential label overlap");
  });
});
