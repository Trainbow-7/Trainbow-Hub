import { describe, it, expect } from "vitest";
import { ALL_ASSESSMENT_ITEMS } from "@/lib/assessment/banks";
import { ALL_PARAMETRIC_TEMPLATES } from "@/lib/assessment/templates/math-templates";
import { verifyAssessmentItem, verifyParametricTemplate } from "@/lib/assessment/verifier";

describe("Assessment Verification & Parametric Template CI Suite", () => {
  it("verifies 100% of all static assessment items without error", () => {
    let failCount = 0;
    const errors: string[] = [];

    for (const item of ALL_ASSESSMENT_ITEMS) {
      const res = verifyAssessmentItem(item);
      if (!res.isValid) {
        failCount++;
        errors.push(`Item ${item.id}: ${res.errors.join(", ")}`);
      }
    }

    expect(failCount, `Static items failed verification: \n${errors.slice(0, 10).join("\n")}`).toBe(0);
    expect(ALL_ASSESSMENT_ITEMS.length).toBe(994);
  });

  it("verifies all parametric calculation templates across 50 random variants each (300 variants)", () => {
    expect(ALL_PARAMETRIC_TEMPLATES.length).toBe(6);

    for (const template of ALL_PARAMETRIC_TEMPLATES) {
      const tRes = verifyParametricTemplate(template, 50);
      expect(
        tRes.isValid,
        `Template ${template.id} (${template.title}) failed with ${tRes.failureCount} errors: ${tRes.errors.join("; ")}`
      ).toBe(true);
      expect(tRes.variantsTested).toBe(50);
      expect(tRes.failureCount).toBe(0);
    }
  });
});

