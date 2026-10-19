import { z } from "zod";

export const DiagramFamilySchema = z.enum([
  "GEOMETRY",
  "FUNCTION_GRAPH",
  "STATISTICS",
  "PHYSICS_FORCE",
  "PHYSICS_CIRCUIT",
  "CHEMISTRY_MOLECULE",
  "BIOLOGY_ANATOMY",
  "ECONOMICS_CURVE",
  "COMPUTER_SCIENCE_FLOWCHART",
]);

export const DiagramSpecSchema = z.object({
  id: z.string(),
  title: z.string(),
  family: DiagramFamilySchema,
  viewBox: z.string().default("0 0 500 400"),
  elements: z.array(
    z.object({
      type: z.enum(["circle", "line", "rect", "path", "text", "polygon", "group"]),
      attrs: z.record(z.string(), z.any()),
      label: z.string().optional(),
    })
  ),
  annotations: z
    .array(
      z.object({
        x: z.number(),
        y: z.number(),
        text: z.string(),
        color: z.string().optional(),
      })
    )
    .default([]),
  altText: z.string(),
  examModeAvailable: z.boolean().default(true),
});

export type DiagramSpec = z.infer<typeof DiagramSpecSchema>;

export interface DiagramSanityReport {
  passed: boolean;
  errors: string[];
  warnings: string[];
}

export function validateDiagramSanity(spec: DiagramSpec): DiagramSanityReport {
  const errors: string[] = [];
  const warnings: string[] = [];

  if (!spec.viewBox) {
    errors.push("Missing required viewBox attribute");
  }

  if (!spec.elements || spec.elements.length === 0) {
    errors.push("Diagram contains no renderable elements");
  }

  // Check for label collisions or overlapping annotations
  const annotations = spec.annotations || [];
  for (let i = 0; i < annotations.length; i++) {
    for (let j = i + 1; j < annotations.length; j++) {
      const dx = Math.abs(annotations[i].x - annotations[j].x);
      const dy = Math.abs(annotations[i].y - annotations[j].y);
      if (dx < 15 && dy < 12) {
        warnings.push(
          `Potential label overlap detected between '${annotations[i].text}' and '${annotations[j].text}' at (${annotations[i].x}, ${annotations[i].y})`
        );
      }
    }
  }

  return {
    passed: errors.length === 0,
    errors,
    warnings,
  };
}
