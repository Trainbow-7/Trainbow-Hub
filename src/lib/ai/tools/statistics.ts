import { z } from "zod";
import * as math from "mathjs";
import { ToolResult } from "./types";

export const StatisticsInputSchema = z.object({
  action: z.enum(["describe", "linear_regression", "combinatorics", "normal_cdf"]).describe("Statistical operation"),
  data: z.array(z.number()).optional().describe("Array of numeric data values"),
  dataY: z.array(z.number()).optional().describe("Array of dependent variable Y values for regression"),
  n: z.number().int().optional().describe("n for combinatorics (nPr, nCr)"),
  r: z.number().int().optional().describe("r for combinatorics"),
  combinatoricsType: z.enum(["permutation", "combination", "factorial"]).optional(),
  xVal: z.number().optional().describe("x value for normal distribution CDF"),
  mean: z.number().optional().default(0),
  stdDev: z.number().optional().default(1)
});

export type StatisticsInput = z.infer<typeof StatisticsInputSchema>;

function erf(x: number): number {
  // Abramowitz and Stegun approximation
  const a1 = 0.254829592;
  const a2 = -0.284496736;
  const a3 = 1.421413741;
  const a4 = -1.453152027;
  const a5 = 1.061405429;
  const p = 0.3275911;

  const sign = x < 0 ? -1 : 1;
  const absX = Math.abs(x);
  const t = 1.0 / (1.0 + p * absX);
  const y = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-absX * absX);
  return sign * y;
}

export async function runStatistics(args: StatisticsInput): Promise<ToolResult<any>> {
  const startTime = Date.now();
  try {
    switch (args.action) {
      case "describe": {
        if (!args.data || args.data.length === 0) {
          throw new Error("data array must contain at least one number");
        }
        const vals = [...args.data].sort((a, b) => a - b);
        const count = vals.length;
        const mean = math.mean(vals) as number;
        const median = math.median(vals) as number;
        const mode = math.mode(vals);
        const variance = count > 1 ? (math.variance(vals) as unknown as number) : 0;
        const stdDev = count > 1 ? (math.std(vals) as unknown as number) : 0;

        return {
          success: true,
          toolName: "statistics",
          durationMs: Date.now() - startTime,
          engineUsed: "node_cas",
          data: {
            action: "describe",
            count,
            mean,
            median,
            mode,
            variance,
            stdDev,
            min: vals[0],
            max: vals[count - 1],
            range: vals[count - 1] - vals[0]
          }
        };
      }

      case "linear_regression": {
        if (!args.data || !args.dataY || args.data.length !== args.dataY.length) {
          throw new Error("data and dataY must have the same non-zero length for regression");
        }
        const n = args.data.length;
        const x = args.data;
        const y = args.dataY;
        const sumX = x.reduce((a, b) => a + b, 0);
        const sumY = y.reduce((a, b) => a + b, 0);
        const sumXY = x.reduce((sum, xi, i) => sum + xi * y[i], 0);
        const sumX2 = x.reduce((sum, xi) => sum + xi * xi, 0);
        const sumY2 = y.reduce((sum, yi) => sum + yi * yi, 0);

        const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
        const intercept = (sumY - slope * sumX) / n;
        const rNum = (n * sumXY - sumX * sumY);
        const rDen = Math.sqrt((n * sumX2 - sumX * sumX) * (n * sumY2 - sumY * sumY));
        const r = rDen === 0 ? 0 : rNum / rDen;

        return {
          success: true,
          toolName: "statistics",
          durationMs: Date.now() - startTime,
          engineUsed: "node_cas",
          data: {
            action: "linear_regression",
            slope,
            intercept,
            correlation_r: r,
            r_squared: r * r,
            equation: `y = ${slope.toFixed(4)}x + ${intercept.toFixed(4)}`
          }
        };
      }

      case "combinatorics": {
        const n = args.n ?? 0;
        const r = args.r ?? 0;
        if (args.combinatoricsType === "factorial") {
          const val = Number(math.factorial(n));
          return {
            success: true,
            toolName: "statistics",
            durationMs: Date.now() - startTime,
            engineUsed: "node_cas",
            data: { n, result: val, formula: `${n}!` }
          };
        } else if (args.combinatoricsType === "permutation") {
          const val = Number(math.permutations(n, r));
          return {
            success: true,
            toolName: "statistics",
            durationMs: Date.now() - startTime,
            engineUsed: "node_cas",
            data: { n, r, result: val, formula: `${n}P${r}` }
          };
        } else {
          const val = Number(math.combinations(n, r));
          return {
            success: true,
            toolName: "statistics",
            durationMs: Date.now() - startTime,
            engineUsed: "node_cas",
            data: { n, r, result: val, formula: `${n}C${r}` }
          };
        }
      }

      case "normal_cdf": {
        const x = args.xVal ?? 0;
        const mean = args.mean ?? 0;
        const std = args.stdDev ?? 1;
        const z = (x - mean) / (std * Math.sqrt(2));
        const prob = 0.5 * (1 + erf(z));
        return {
          success: true,
          toolName: "statistics",
          durationMs: Date.now() - startTime,
          engineUsed: "node_cas",
          data: { x, mean, stdDev: std, probability_less_than_x: prob }
        };
      }

      default:
        throw new Error(`Unsupported statistics action`);
    }
  } catch (err: any) {
    return {
      success: false,
      toolName: "statistics",
      durationMs: Date.now() - startTime,
      engineUsed: "node_cas",
      error: err.message
    };
  }
}
