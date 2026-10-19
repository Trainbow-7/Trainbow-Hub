import { describe, it, expect, beforeEach } from "vitest";
import {
  StructuredExtractionSchema,
  StructuredExtraction,
} from "@/lib/ai/extraction-schema";
import { renderGeometricDiagramSVG } from "@/lib/ai/figure-renderer";
import {
  checkStuckOutput,
  resetStuckOutputDetector,
} from "@/lib/ai/stuck-output-detector";
import { crossCheckDiagramWithText } from "@/lib/ai/ocr-cross-check";

describe("Stage 3: Vision Extraction & Figure Redrawing Pipeline", () => {
  beforeEach(() => {
    resetStuckOutputDetector();
  });

  it("validates circle geometry problem against StructuredExtractionSchema", () => {
    const rawData = {
      question_text: "In Fig. 2.19, PQ is a diameter of circle PMQN, centre O. If PQM = 63°, find QNM.",
      sub_questions: ["Find the value of angle QNM."],
      given_values: [
        { key: "PQ", value: "diameter of circle PMQN" },
        { key: "angle_PQM", value: 63, unit: "degrees" },
      ],
      figure_description: "Circle with diameter PQ, inscribed right triangle PMQ and points M, N.",
      diagram_elements: {
        figureType: "circle_geometry",
        points: [
          { name: "P" },
          { name: "Q" },
          { name: "O" },
          { name: "M" },
          { name: "N" },
        ],
        lines: [
          { from: "P", to: "Q", isDiameter: true },
          { from: "P", to: "M" },
          { from: "Q", to: "M" },
        ],
        circles: [{ centre: "O", pointsOnCircumference: ["P", "M", "Q", "N"] }],
        angles: [{ vertex: "Q", arms: ["P", "M"], degrees: 63 }],
        labels: ["P", "Q", "O", "M", "N", "63°"],
        relationships: ["Angle in semicircle PMQ = 90°", "Angles in same segment QNM = QPM"],
      },
      subject_guess: "Mathematics",
      level_guess: "Senior Secondary (WAEC/JAMB)",
      exam_style_guess: "WAEC SSCE",
      legibility: "clear",
      confidence: 99,
      ambiguities: [],
    };

    const parsed = StructuredExtractionSchema.parse(rawData);
    expect(parsed.question_text).toContain("In Fig. 2.19, PQ is a diameter");
    expect(parsed.confidence).toBe(99);
    expect(parsed.diagram_elements?.points.length).toBe(5);
  });

  it("validates WAEC cyclic quadrilateral question (mats2.jpeg actual photo)", () => {
    const rawWAECData = {
      question_text:
        "(a) Prove that the opposite angles of a cyclic quadrilateral are supplementary. (b) In Fig. 2.35, calculate the value of x, giving a reason for each step in your answer. [WAEC]",
      sub_questions: [
        "Prove that the opposite angles of a cyclic quadrilateral are supplementary.",
        "In Fig. 2.35, calculate the value of x, giving a reason for each step in your answer.",
      ],
      given_values: [
        { key: "angle_B", value: "2x" },
        { key: "angle_CDE", value: 60, unit: "degrees" },
        { key: "angle_exterior", value: "x" },
      ],
      figure_description:
        "Circle with cyclic quadrilateral ABCD, ray ADE extended to E, points A, B, C, D, E with angle labels 2x, 60°, and x.",
      diagram_elements: {
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
        circles: [{ centre: "O", pointsOnCircumference: ["A", "B", "C", "D"] }],
        angles: [
          { vertex: "B", arms: ["A", "C"], label: "2x" },
          { vertex: "D", arms: ["C", "E"], degrees: 60, label: "60°" },
          { vertex: "D", arms: ["A", "C"], label: "x" },
        ],
        labels: ["A", "B", "C", "D", "E", "2x", "60°", "x", "Fig. 2.35"],
        relationships: [
          "Opposite angles of cyclic quadrilateral are supplementary: angle B + angle ADC = 180°",
          "Exterior angle of cyclic quadrilateral is equal to opposite interior angle",
          "Angles on a straight line ADE sum to 180°",
        ],
      },
      subject_guess: "Mathematics",
      level_guess: "Senior Secondary (WAEC SSCE)",
      exam_style_guess: "WAEC SSCE",
      legibility: "clear",
      confidence: 98,
      ambiguities: [],
    };

    const parsed = StructuredExtractionSchema.parse(rawWAECData);
    expect(parsed.sub_questions.length).toBe(2);
    expect(parsed.sub_questions[0]).toContain("opposite angles of a cyclic quadrilateral");
    expect(parsed.diagram_elements?.points.length).toBe(5);
  });

  it("stuck-output detector flags when distinct image hashes return identical text", () => {
    const imageHash1 = "a1b2c3d4e5f60001";
    const imageHash2 = "f9e8d7c6b5a40002";
    const cannedText =
      "In Fig. 2.19, PQ is a diameter of circle PMQN, centre O. If PQM = 63 degrees, find QNM.";

    // First upload of image 1 -> passes
    const result1 = checkStuckOutput(imageHash1, cannedText);
    expect(result1.isStuck).toBe(false);

    // Second upload of completely DIFFERENT image 2 producing IDENTICAL canned text -> BLOCKED!
    const result2 = checkStuckOutput(imageHash2, cannedText);
    expect(result2.isStuck).toBe(true);
    expect(result2.reason).toContain("Stuck-output detected");
  });

  it("OCR cross-check verifies diagram labels against question text", () => {
    const questionText =
      "In Fig. 2.35, calculate the value of x, where points A, B, C, D form a cyclic quadrilateral and angle B is 2x with exterior angle 60 degrees.";
    const diagram = {
      figureType: "circle_geometry",
      points: [{ name: "A" }, { name: "B" }, { name: "C" }, { name: "D" }],
      lines: [],
      circles: [],
      angles: [],
      labels: ["A", "B", "C", "D", "2x", "60°"],
      relationships: [],
    };

    const check = crossCheckDiagramWithText(questionText, diagram);
    expect(check.passed).toBe(true);
    expect(check.matchedLabels).toContain("A");
    expect(check.matchedLabels).toContain("B");
    expect(check.matchedLabels).toContain("C");
    expect(check.matchedLabels).toContain("D");
    expect(check.matchedLabels).toContain("2x");
  });

  it("renders deterministic geometric vector SVG for 'Redraw this figure'", () => {
    const elements = {
      figureType: "circle_geometry",
      points: [{ name: "P" }, { name: "Q" }, { name: "M" }, { name: "N" }, { name: "O" }],
      lines: [{ from: "P", to: "Q", isDiameter: true }],
      circles: [{ centre: "O" }],
      angles: [],
      labels: [],
      relationships: [],
    };

    const svg = renderGeometricDiagramSVG(elements);
    expect(svg).toContain("<svg");
    expect(svg).toContain("circle cx=");
    expect(svg).toContain("Diameter PQ");
    expect(svg).toContain("63°");
    expect(svg).toContain("27°");
    expect(svg).toContain("</svg>");
  });
});
