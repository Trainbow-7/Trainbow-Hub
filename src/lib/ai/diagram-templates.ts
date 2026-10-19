import { DiagramSpec } from "./diagram-spec";

/**
 * Curated Library of Vetted Academic Diagram Templates across Disciplines
 * Guaranteed deterministic layouts with standard notation and labelled anchor points.
 */

// 1. PHYSICS: Electric Circuit & Free-Body Force Diagram
export const PhysicsCircuitTemplate: DiagramSpec = {
  id: "diag_phys_circuit_series_01",
  title: "DC Circuit with Battery, Switch, Resistor, and Ammeter",
  family: "PHYSICS_CIRCUIT",
  viewBox: "0 0 500 300",
  elements: [
    // Circuit Wire Loop
    { type: "line", attrs: { x1: 80, y1: 80, x2: 420, y2: 80, stroke: "#1e293b", strokeWidth: 2.5 } },
    { type: "line", attrs: { x1: 420, y1: 80, x2: 420, y2: 220, stroke: "#1e293b", strokeWidth: 2.5 } },
    { type: "line", attrs: { x1: 420, y1: 220, x2: 80, y2: 220, stroke: "#1e293b", strokeWidth: 2.5 } },
    { type: "line", attrs: { x1: 80, y1: 220, x2: 80, y2: 80, stroke: "#1e293b", strokeWidth: 2.5 } },

    // Battery Symbol (Long line + short thick line)
    { type: "line", attrs: { x1: 70, y1: 140, x2: 90, y2: 140, stroke: "#dc2626", strokeWidth: 3 } },
    { type: "line", attrs: { x1: 74, y1: 160, x2: 86, y2: 160, stroke: "#1e293b", strokeWidth: 4 } },

    // Resistor Box on top branch
    { type: "rect", attrs: { x1: 210, y1: 70, width: 80, height: 20, fill: "#f8fafc", stroke: "#2563eb", strokeWidth: 2 } },

    // Ammeter Circle on right branch
    { type: "circle", attrs: { cx: 420, cy: 150, r: 18, fill: "#f0fdf4", stroke: "#059669", strokeWidth: 2 } },
  ],
  annotations: [
    { x: 50, y: 152, text: "Battery (V)", color: "#dc2626" },
    { x: 250, y: 62, text: "Resistor (R = 10 Ω)", color: "#2563eb" },
    { x: 420, y: 154, text: "A", color: "#059669" },
    { x: 455, y: 154, text: "Ammeter (I)", color: "#059669" },
    { x: 250, y: 240, text: "Conventional Current I →", color: "#475569" },
  ],
  altText: "Standard schematic DC circuit showing battery, resistor R, ammeter A and wire loop.",
  examModeAvailable: true,
};

// 2. CHEMISTRY: Titration Apparatus Setup
export const ChemistryTitrationTemplate: DiagramSpec = {
  id: "diag_chem_titration_01",
  title: "Acid-Base Titration Setup (Burette & Conical Flask)",
  family: "CHEMISTRY_MOLECULE",
  viewBox: "0 0 400 450",
  elements: [
    // Retort Stand Base & Rod
    { type: "rect", attrs: { x1: 60, y1: 410, width: 140, height: 16, fill: "#475569", stroke: "#1e293b", strokeWidth: 1.5 } },
    { type: "line", attrs: { x1: 100, y1: 410, x2: 100, y2: 40, stroke: "#475569", strokeWidth: 4 } },

    // Clamp Arm
    { type: "line", attrs: { x1: 100, y1: 150, x2: 220, y2: 150, stroke: "#334155", strokeWidth: 3 } },

    // Burette (Vertical glass cylinder with graduations)
    { type: "rect", attrs: { x1: 215, y1: 50, width: 22, height: 230, fill: "#eff6ff", stroke: "#2563eb", strokeWidth: 1.8 } },
    { type: "line", attrs: { x1: 226, y1: 280, x2: 226, y2: 310, stroke: "#2563eb", strokeWidth: 2 } }, // Jet tap

    // Conical Flask (Erlenmeyer)
    { type: "polygon", attrs: { points: "205,330 247,330 275,410 177,410", fill: "#fdf4ff", stroke: "#7c3aed", strokeWidth: 2 } },
  ],
  annotations: [
    { x: 280, y: 120, text: "Burette (Standard Solution)", color: "#2563eb" },
    { x: 270, y: 295, text: "Stopcock Tap", color: "#334155" },
    { x: 226, y: 390, text: "Analyte + Indicator", color: "#7c3aed" },
    { x: 226, y: 435, text: "Conical Flask", color: "#6b21a8" },
  ],
  altText: "Laboratory setup of acid-base titration showing retort stand, burette and conical flask.",
  examModeAvailable: true,
};

// 3. BIOLOGY: Curated Vetted Flower Reproductive Structure
export const BiologyFlowerTemplate: DiagramSpec = {
  id: "diag_bio_flower_01",
  title: "Generalized Flower Structure (Carpel & Stamen Anatomy)",
  family: "BIOLOGY_ANATOMY",
  viewBox: "0 0 500 420",
  elements: [
    // Receptacle & Pedicel
    { type: "line", attrs: { x1: 250, y1: 340, x2: 250, y2: 400, stroke: "#15803d", strokeWidth: 6 } },
    { type: "polygon", attrs: { points: "220,340 280,340 260,370 240,370", fill: "#22c55e", stroke: "#15803d", strokeWidth: 2 } },

    // Sepals (Calyx)
    { type: "path", attrs: { d: "M 220 340 C 180 320, 160 350, 150 360", stroke: "#15803d", strokeWidth: 2.5, fill: "none" } },
    { type: "path", attrs: { d: "M 280 340 C 320 320, 340 350, 350 360", stroke: "#15803d", strokeWidth: 2.5, fill: "none" } },

    // Petals (Corolla)
    { type: "path", attrs: { d: "M 220 340 C 130 250, 110 140, 190 180", stroke: "#ec4899", strokeWidth: 2.5, fill: "#fdf2f8" } },
    { type: "path", attrs: { d: "M 280 340 C 370 250, 390 140, 310 180", stroke: "#ec4899", strokeWidth: 2.5, fill: "#fdf2f8" } },

    // Carpel / Pistil (Centre: Ovary, Style, Stigma)
    { type: "circle", attrs: { cx: 250, cy: 300, r: 35, fill: "#fef08a", stroke: "#ca8a04", strokeWidth: 2.2 } }, // Ovary
    { type: "line", attrs: { x1: 250, y1: 265, x2: 250, y2: 130, stroke: "#ca8a04", strokeWidth: 4 } }, // Style
    { type: "circle", attrs: { cx: 250, cy: 120, r: 12, fill: "#eab308", stroke: "#a16207", strokeWidth: 2 } }, // Stigma

    // Stamens (Filament & Anther on Left and Right)
    { type: "path", attrs: { d: "M 220 310 Q 180 230 180 150", stroke: "#eab308", strokeWidth: 2.5, fill: "none" } },
    { type: "rect", attrs: { x1: 170, y1: 136, width: 20, height: 14, rx: 4, fill: "#facc15", stroke: "#a16207", strokeWidth: 1.8 } }, // Anther Left

    { type: "path", attrs: { d: "M 280 310 Q 320 230 320 150", stroke: "#eab308", strokeWidth: 2.5, fill: "none" } },
    { type: "rect", attrs: { x1: 310, y1: 136, width: 20, height: 14, rx: 4, fill: "#facc15", stroke: "#a16207", strokeWidth: 1.8 } }, // Anther Right
  ],
  annotations: [
    { x: 250, y: 95, text: "Stigma (Sticky Surface)", color: "#a16207" },
    { x: 285, y: 195, text: "Style", color: "#a16207" },
    { x: 250, y: 304, text: "Ovary (Ovules)", color: "#854d0e" },
    { x: 125, y: 142, text: "Anther", color: "#a16207" },
    { x: 130, y: 220, text: "Filament", color: "#a16207" },
    { x: 375, y: 210, text: "Petal (Attracts Pollinators)", color: "#be185d" },
    { x: 110, y: 360, text: "Sepal", color: "#15803d" },
  ],
  altText: "Vetted biological anatomical diagram of generalized angiosperm flower structure.",
  examModeAvailable: true,
};

// 4. ECONOMICS: Supply and Demand Equilibrium & Shifts
export const EconomicsMarketTemplate: DiagramSpec = {
  id: "diag_econ_market_equilibrium_01",
  title: "Market Price Equilibrium & Outward Demand Shift",
  family: "ECONOMICS_CURVE",
  viewBox: "0 0 500 380",
  elements: [
    // Axes: P (Price) and Q (Quantity)
    { type: "line", attrs: { x1: 60, y1: 40, x2: 60, y2: 320, stroke: "#1e293b", strokeWidth: 2.5 } }, // Vertical P axis
    { type: "line", attrs: { x1: 60, y1: 320, x2: 440, y2: 320, stroke: "#1e293b", strokeWidth: 2.5 } }, // Horizontal Q axis

    // Supply Curve S (Upward sloping)
    { type: "line", attrs: { x1: 90, y1: 280, x2: 380, y2: 80, stroke: "#2563eb", strokeWidth: 2.5 } },

    // Initial Demand Curve D1 (Downward sloping)
    { type: "line", attrs: { x1: 90, y1: 80, x2: 380, y2: 280, stroke: "#dc2626", strokeWidth: 2.5 } },

    // Shifted Demand Curve D2 (Outward shift to the right)
    { type: "line", attrs: { x1: 140, y1: 80, x2: 430, y2: 280, stroke: "#059669", strokeWidth: 2.5, strokeDasharray: "5 3" } },

    // Equilibrium Point E1
    { type: "circle", attrs: { cx: 235, cy: 180, r: 4, fill: "#dc2626" } },
    // Equilibrium Point E2
    { type: "circle", attrs: { cx: 275, cy: 153, r: 4, fill: "#059669" } },
  ],
  annotations: [
    { x: 395, y: 80, text: "S", color: "#2563eb" },
    { x: 395, y: 285, text: "D₁", color: "#dc2626" },
    { x: 445, y: 285, text: "D₂", color: "#059669" },
    { x: 40, y: 45, text: "Price (P)", color: "#1e293b" },
    { x: 410, y: 345, text: "Quantity (Q)", color: "#1e293b" },
    { x: 220, y: 175, text: "E₁ (P₁, Q₁)", color: "#dc2626" },
    { x: 300, y: 145, text: "E₂ (P₂, Q₂)", color: "#059669" },
    { x: 260, y: 110, text: "Shift: Demand Increases →", color: "#059669" },
  ],
  altText: "Economics graph demonstrating market equilibrium shift from E1 to E2 following an outward demand increase.",
  examModeAvailable: true,
};

export const TEMPLATE_LIBRARY: Record<string, DiagramSpec> = {
  circuit: PhysicsCircuitTemplate,
  titration: ChemistryTitrationTemplate,
  flower: BiologyFlowerTemplate,
  market_equilibrium: EconomicsMarketTemplate,
};
