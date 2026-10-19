import { z } from "zod";

export const GivenValueSchema = z.preprocess(
  (val: any) => {
    if (typeof val === "object" && val !== null) {
      const key = val.key ?? val.name ?? val.label ?? val.variable ?? val.parameter ?? val.symbol ?? "value";
      const value = val.value ?? val.val ?? val.amount ?? "";
      return {
        ...val,
        key: String(key),
        value: typeof value === "number" || typeof value === "string" ? value : String(value),
      };
    }
    return val;
  },
  z.object({
    key: z.string().default("value"),
    value: z.union([z.number(), z.string()]).default(""),
    unit: z.string().optional(),
  })
);

export const DiagramPointSchema = z.preprocess(
  (val: any) => {
    if (typeof val === "object" && val !== null) {
      return {
        ...val,
        name: String(val.name ?? val.label ?? val.point ?? "P"),
      };
    }
    return val;
  },
  z.object({
    name: z.string(),
    x: z.number().optional(),
    y: z.number().optional(),
    label: z.string().optional(),
  })
);

export const DiagramLineSchema = z.object({
  from: z.string().default("A"),
  to: z.string().default("B"),
  length: z.union([z.number(), z.string()]).optional(),
  style: z.enum(["solid", "dashed", "dotted"]).optional(),
  isDiameter: z.boolean().optional(),
  isRadius: z.boolean().optional(),
  isChord: z.boolean().optional(),
});

export const DiagramCircleSchema = z.preprocess(
  (val: any) => {
    if (typeof val === "object" && val !== null) {
      return {
        ...val,
        centre: val.centre ?? val.center ?? val.name ?? "O",
      };
    }
    return val;
  },
  z.object({
    centre: z.string().default("O"),
    radius: z.union([z.number(), z.string()]).optional(),
    pointsOnCircumference: z.array(z.string()).optional(),
    name: z.string().optional(),
  })
);

export const DiagramAngleSchema = z.preprocess(
  (val: any) => {
    if (typeof val === "object" && val !== null) {
      let arms = val.arms;
      if (!Array.isArray(arms)) {
        arms = ["A", "B"];
      } else if (arms.length === 1) {
        arms = [String(arms[0]), ""];
      } else if (arms.length > 2) {
        arms = [String(arms[0]), String(arms[1])];
      }
      return {
        ...val,
        vertex: String(val.vertex ?? val.point ?? val.at ?? "O"),
        arms,
      };
    }
    return val;
  },
  z.object({
    vertex: z.string().default("O"),
    arms: z.union([z.tuple([z.string(), z.string()]), z.array(z.string())]).default(["A", "B"]),
    degrees: z.number().optional(),
    label: z.string().optional(),
    isRightAngle: z.boolean().optional(),
  })
);

export const DiagramElementsSchema = z.object({
  figureType: z.string().default("geometry"),
  points: z.array(DiagramPointSchema).default([]),
  lines: z.array(DiagramLineSchema).default([]),
  circles: z.array(DiagramCircleSchema).default([]),
  angles: z.array(DiagramAngleSchema).default([]),
  labels: z.array(z.string()).default([]),
  relationships: z.array(z.string()).default([]),
});

export const StructuredExtractionSchema = z.preprocess(
  (val: any) => {
    if (typeof val === "object" && val !== null) {
      return {
        ...val,
        question_text: val.question_text ?? val.question ?? val.text ?? val.prompt ?? "",
        sub_questions: Array.isArray(val.sub_questions)
          ? val.sub_questions
          : Array.isArray(val.subQuestions)
          ? val.subQuestions
          : [],
      };
    }
    return val;
  },
  z.object({
    question_text: z.string().default(""),
    sub_questions: z.array(z.string()).default([]),
    given_values: z.array(GivenValueSchema).default([]),
    figure_description: z.string().optional(),
    diagram_elements: DiagramElementsSchema.optional(),
    tables: z.array(z.record(z.string(), z.any())).optional(),
    subject_guess: z.string().default("Mathematics"),
    level_guess: z.string().default("Senior Secondary (WAEC/NECO/JAMB)"),
    exam_style_guess: z.string().default("WAEC SSCE"),
    legibility: z.enum(["clear", "acceptable", "poor"]).default("clear"),
    confidence: z.number().min(0).max(100).default(95),
    ambiguities: z.array(z.string()).default([]),
  })
);

export type StructuredExtraction = z.infer<typeof StructuredExtractionSchema>;
export type DiagramElements = z.infer<typeof DiagramElementsSchema>;
