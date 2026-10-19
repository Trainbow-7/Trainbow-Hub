import { describe, it, expect } from "vitest";
import {
  PhysicsCircuitTemplate,
  ChemistryTitrationTemplate,
  BiologyFlowerTemplate,
  EconomicsMarketTemplate,
  TEMPLATE_LIBRARY,
} from "@/lib/ai/diagram-templates";
import { validateDiagramSanity } from "@/lib/ai/diagram-spec";

describe("Stage 6: Multi-Disciplinary Diagram Families & Template Library", () => {
  it("validates Physics Circuit Diagram template", () => {
    const sanity = validateDiagramSanity(PhysicsCircuitTemplate);
    expect(sanity.passed).toBe(true);
    expect(PhysicsCircuitTemplate.family).toBe("PHYSICS_CIRCUIT");
    expect(PhysicsCircuitTemplate.elements.some((el) => el.attrs.stroke === "#dc2626")).toBe(true); // Battery
  });

  it("validates Chemistry Titration Setup template", () => {
    const sanity = validateDiagramSanity(ChemistryTitrationTemplate);
    expect(sanity.passed).toBe(true);
    expect(ChemistryTitrationTemplate.elements.some((el) => el.type === "polygon")).toBe(true); // Conical flask
  });

  it("validates Biology Flower Anatomy template with anchor points", () => {
    const sanity = validateDiagramSanity(BiologyFlowerTemplate);
    expect(sanity.passed).toBe(true);
    expect(BiologyFlowerTemplate.family).toBe("BIOLOGY_ANATOMY");
    const labels = BiologyFlowerTemplate.annotations.map((a) => a.text);
    expect(labels).toContain("Stigma (Sticky Surface)");
    expect(labels).toContain("Ovary (Ovules)");
  });

  it("validates Economics Supply & Demand Equilibrium Shift template", () => {
    const sanity = validateDiagramSanity(EconomicsMarketTemplate);
    expect(sanity.passed).toBe(true);
    expect(EconomicsMarketTemplate.family).toBe("ECONOMICS_CURVE");
    const labels = EconomicsMarketTemplate.annotations.map((a) => a.text);
    expect(labels).toContain("Price (P)");
    expect(labels).toContain("Quantity (Q)");
  });

  it("template library resolves all discipline templates", () => {
    expect(TEMPLATE_LIBRARY.circuit).toBeDefined();
    expect(TEMPLATE_LIBRARY.titration).toBeDefined();
    expect(TEMPLATE_LIBRARY.flower).toBeDefined();
    expect(TEMPLATE_LIBRARY.market_equilibrium).toBeDefined();
  });
});
