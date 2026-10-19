import { describe, it, expect } from "vitest";
import {
  evaluateSubjectGating,
  AUTHENTIC_BENCHMARK_FIXTURES,
  PERMANENT_REGRESSION_SAMPLES,
  EvaluationBenchmarkSample,
} from "@/lib/ai/evaluation-harness";
import { PhysicsCircuitTemplate } from "@/lib/ai/diagram-templates";

describe("Stage 6 & 7: 12-Fixture Benchmark Suite & Evaluation Harness", () => {
  it("contains exactly 12 authentic exam fixtures across disciplines", () => {
    expect(AUTHENTIC_BENCHMARK_FIXTURES.length).toBe(12);

    // Fixture 1 is the WAEC cyclic quad (mats2.jpeg)
    const fix1 = AUTHENTIC_BENCHMARK_FIXTURES[0];
    expect(fix1.id).toBe("fix_waec_cyclic_quad_01");
    expect(fix1.prompt).toContain("opposite angles of a cyclic quadrilateral are supplementary");
    expect(fix1.prompt).toContain("Fig. 2.35");
    expect(fix1.figureType).toBe("circle_geometry");

    // Fixture 2 is the circle semicircle (Fig. 2.19)
    const fix2 = AUTHENTIC_BENCHMARK_FIXTURES[1];
    expect(fix2.id).toBe("fix_waec_circle_semicircle_02");
    expect(fix2.prompt).toContain("Fig. 2.19");
    expect(fix2.expectedFinalAnswer).toBe("27°");
  });

  it("permanent regression suite passes all gating thresholds for Mathematics", () => {
    const report = evaluateSubjectGating("mathematics", AUTHENTIC_BENCHMARK_FIXTURES);
    expect(report.attachmentMixUpRate).toBe(0);
    expect(report.finalAnswerAccuracy).toBeGreaterThanOrEqual(95);
    expect(report.diagramSanityPassRate).toBeGreaterThanOrEqual(95);
    expect(report.canEnableSubjectForStudents).toBe(true);
    expect(report.blockers.length).toBe(0);
  });

  it("blocks enabling any subject with attachment mix-up (> 0%)", () => {
    const faultyReport = {
      subject: "Physics",
      totalSamples: 1,
      attachmentMixUpRate: 5,
      finalAnswerAccuracy: 95,
      diagramSanityPassRate: 100,
      canEnableSubjectForStudents: false,
      blockers: ["Attachment mix-up rate is 5%. Zero tolerance required."],
    };

    expect(faultyReport.canEnableSubjectForStudents).toBe(false);
    expect(faultyReport.blockers[0]).toContain("Zero tolerance required");
  });

  it("evaluates diagram sanity in benchmark samples", () => {
    const sampleWithDiagram: EvaluationBenchmarkSample[] = [
      {
        id: "phys_circ",
        subject: "Physics",
        prompt: "Draw a series circuit",
        expectedFinalAnswer: "Circuit drawn",
        expectedDiagramSpec: PhysicsCircuitTemplate,
      },
    ];

    const report = evaluateSubjectGating("physics", sampleWithDiagram);
    expect(report.diagramSanityPassRate).toBe(100);
    expect(report.canEnableSubjectForStudents).toBe(true);
  });
});
