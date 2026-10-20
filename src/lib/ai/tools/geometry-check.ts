import { z } from "zod";
import { verifyGeometryProblem, GeometryVerificationResult } from "../geometry-verifier";
import { ToolResult } from "./types";

export const GeometryCheckInputSchema = z.object({
  problemText: z.string().describe("Geometric problem statement, figure label, or question text (e.g. 'Fig. 2.26 find angle PQO', 'PMQN diameter find QNM', 'cyclic quadrilateral ABCD opposite angles')"),
  claimedAnswer: z.string().optional().describe("Claimed final angle or length to verify (e.g. '35°', '27°', 'x = 40°')")
});

export type GeometryCheckInput = z.infer<typeof GeometryCheckInputSchema>;

export async function runGeometryCheck(args: GeometryCheckInput): Promise<ToolResult<any>> {
  const startTime = Date.now();
  try {
    const res = verifyGeometryProblem(args.problemText);
    if (!res) {
      return {
        success: false,
        toolName: "geometry_check",
        durationMs: Date.now() - startTime,
        engineUsed: "deterministic",
        error: "Could not match geometry constraints to a known theorem configuration in solver"
      };
    }

    let matchesClaimed = true;
    if (args.claimedAnswer) {
      const claimedDigits = args.claimedAnswer.match(/\d+(?:\.\d+)?/);
      if (claimedDigits) {
        const val = parseFloat(claimedDigits[0]);
        const calculatedValues = Object.values(res.calculatedAngles);
        matchesClaimed = calculatedValues.includes(val);
      }
    }

    return {
      success: true,
      toolName: "geometry_check",
      durationMs: Date.now() - startTime,
      engineUsed: "deterministic",
      data: {
        isValid: res.isValid,
        theoremCitations: res.theoremCitations,
        calculatedAngles: res.calculatedAngles,
        stepCheck: res.stepCheck,
        notes: res.notes,
        matchesClaimed
      }
    };
  } catch (err: any) {
    return {
      success: false,
      toolName: "geometry_check",
      durationMs: Date.now() - startTime,
      engineUsed: "deterministic",
      error: err.message
    };
  }
}
