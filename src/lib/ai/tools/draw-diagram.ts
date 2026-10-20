import { z } from "zod";
import { ToolResult } from "./types";
import {
  PhysicsCircuitTemplate,
  ChemistryTitrationTemplate,
  BiologyFlowerTemplate,
  EconomicsMarketTemplate
} from "../diagram-templates";

export const DrawDiagramInputSchema = z.object({
  family: z.enum([
    "GEOMETRY_CIRCLE",
    "PHYSICS_CIRCUIT",
    "CHEMISTRY_MOLECULE",
    "BIOLOGY_CELL",
    "TECHNICAL_DRAWING"
  ]).describe("Diagram family to render"),
  title: z.string().describe("Descriptive title of diagram"),
  parameters: z.record(z.any()).optional().describe("Dynamic parameters such as angle values, labels, or resistance")
});

export type DrawDiagramInput = z.infer<typeof DrawDiagramInputSchema>;

export async function runDrawDiagram(args: DrawDiagramInput): Promise<ToolResult<any>> {
  const startTime = Date.now();
  try {
    let spec: any = null;

    if (args.family === "PHYSICS_CIRCUIT") {
      spec = PhysicsCircuitTemplate;
    } else if (args.family === "CHEMISTRY_MOLECULE") {
      spec = ChemistryTitrationTemplate;
    } else if (args.family === "BIOLOGY_CELL") {
      spec = BiologyFlowerTemplate;
    } else if (args.family === "TECHNICAL_DRAWING") {
      spec = EconomicsMarketTemplate;
    } else {
      // Default geometric circle diagram
      spec = {
        id: "diag_geom_circle_dynamic",
        title: args.title || "Geometric Circle Diagram",
        family: "GEOMETRY_CIRCLE",
        viewBox: "0 0 400 400",
        elements: [
          { type: "circle", attrs: { cx: 200, cy: 200, r: 120, fill: "none", stroke: "#2563eb", strokeWidth: 2 } },
          { type: "circle", attrs: { cx: 200, cy: 200, r: 4, fill: "#dc2626" } },
        ],
        annotations: [
          { x: 205, y: 195, text: "O", color: "#dc2626" },
        ],
        altText: "Geometric circle diagram with centre O",
        examModeAvailable: true
      };
    }

    return {
      success: true,
      toolName: "draw_diagram",
      durationMs: Date.now() - startTime,
      engineUsed: "deterministic",
      data: {
        spec,
        svgViewBox: spec.viewBox,
        title: spec.title
      }
    };
  } catch (err: any) {
    return {
      success: false,
      toolName: "draw_diagram",
      durationMs: Date.now() - startTime,
      engineUsed: "deterministic",
      error: err.message
    };
  }
}
