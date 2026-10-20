import { z } from "zod";
import * as math from "mathjs";
import { ToolResult } from "./types";

export const NumericCalcInputSchema = z.object({
  expression: z.string().describe("Mathematical expression to evaluate numerically (e.g. '2/4 - 3/8', 'sqrt(13^2 - 5^2)', 'sin(pi/6)')"),
  precision: z.number().int().min(1).max(64).default(14).describe("Decimal precision for computation"),
  significantFigures: z.number().int().min(1).max(20).optional().describe("Round output to specified number of significant figures")
});

export type NumericCalcInput = z.infer<typeof NumericCalcInputSchema>;

export interface NumericCalcOutput {
  expression: string;
  result: string;
  numericValue: number;
  significantFiguresFormatted?: string;
}

export async function runNumericCalc(args: NumericCalcInput): Promise<ToolResult<NumericCalcOutput>> {
  const startTime = Date.now();
  try {
    let cleanExpr = args.expression.trim().replace(/−/g, "-").replace(/²/g, "^2").replace(/³/g, "^3");
    // Strip dollar signs
    cleanExpr = cleanExpr.replace(/\$/g, "");

    const evaluated = math.evaluate(cleanExpr);
    const num = typeof evaluated === "number" ? evaluated : Number(evaluated);

    let sigFigStr: string | undefined;
    if (args.significantFigures && !isNaN(num) && isFinite(num)) {
      sigFigStr = Number(num.toPrecision(args.significantFigures)).toString();
    }

    return {
      success: true,
      toolName: "numeric_calc",
      durationMs: Date.now() - startTime,
      engineUsed: "node_cas",
      data: {
        expression: args.expression,
        result: String(evaluated),
        numericValue: num,
        significantFiguresFormatted: sigFigStr
      }
    };
  } catch (err: any) {
    return {
      success: false,
      toolName: "numeric_calc",
      durationMs: Date.now() - startTime,
      engineUsed: "node_cas",
      error: err.message
    };
  }
}
