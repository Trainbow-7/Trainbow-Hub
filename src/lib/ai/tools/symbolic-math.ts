import { z } from "zod";
import nerdamer from "nerdamer";
import { ToolResult } from "./types";

export const SymbolicMathInputSchema = z.object({
  action: z.enum([
    "solve",
    "substitute_and_check",
    "simplify",
    "factor",
    "expand",
    "differentiate",
    "integrate"
  ]).describe("The algebraic CAS operation to perform"),
  equationOrExpr: z.string().describe("Equation (e.g. '1/(3*a-1) = 2/(a+1) - 3/8' or '2*x^2 - 5*x + 3 = 0') or expression"),
  variable: z.string().default("x").describe("The variable symbol to solve for or differentiate with respect to (e.g. 'x', 'a')"),
  candidateRoots: z.array(z.string()).optional().describe("Array of candidate solutions to substitute and verify (e.g. ['3', '7/9'])")
});

export type SymbolicMathInput = z.infer<typeof SymbolicMathInputSchema>;

export interface SubstitutionCheckItem {
  root: string;
  lhsValue: string;
  rhsValue: string;
  isEqual: boolean;
  evidence: string;
}

export interface SymbolicMathOutput {
  action: string;
  variable: string;
  result?: string;
  roots?: string[];
  simplified?: string;
  factored?: string;
  substitutionChecks?: SubstitutionCheckItem[];
  allRootsVerified?: boolean;
  notes?: string;
}

function cleanAlgebraicInput(input: string): string {
  let cleaned = input.trim();
  // Strip LaTeX delimiters \( \) \[ \] $
  cleaned = cleaned.replace(/\\\(|\\\)|\\\[|\\\]|\$/g, "");
  // Replace unicode minus and squares
  cleaned = cleaned.replace(/−/g, "-").replace(/²/g, "^2").replace(/³/g, "^3");
  // Replace implicit multiplication like 3a or 2x with 3*a or 2*x
  cleaned = cleaned.replace(/(\d+)\s*([a-zA-Z])/g, "$1*$2");
  // Replace )( with )*(
  cleaned = cleaned.replace(/\)\s*\(/g, ")*(");
  // Replace )a with )*a
  cleaned = cleaned.replace(/\)\s*([a-zA-Z0-9])/g, ")*$1");
  // Replace a( with a*(
  cleaned = cleaned.replace(/([a-zA-Z0-9])\s*\(/g, "$1*(");
  return cleaned;
}

export async function runSymbolicMath(args: SymbolicMathInput): Promise<ToolResult<SymbolicMathOutput>> {
  const startTime = Date.now();
  const variable = args.variable || "x";
  const expr = cleanAlgebraicInput(args.equationOrExpr);

  try {
    switch (args.action) {
      case "solve": {
        const sol = nerdamer.solve(expr, variable);
        const rootsStr = sol.toString();
        // Parse "{3, 7/9}" into array ["3", "7/9"]
        const cleanRoots = rootsStr
          .replace(/^\{|\}$/g, "")
          .split(",")
          .map((r) => r.trim())
          .filter(Boolean);

        // Auto-run substitution check if equation contains "="
        let subChecks: SubstitutionCheckItem[] | undefined;
        let allVerified: boolean | undefined;

        if (expr.includes("=") && cleanRoots.length > 0) {
          const parts = expr.split("=");
          const lhs = parts[0].trim();
          const rhs = parts[1].trim();

          subChecks = cleanRoots.map((root) => {
            try {
              const lhsVal = nerdamer(lhs, { [variable]: root }).evaluate().text();
              const rhsVal = nerdamer(rhs, { [variable]: root }).evaluate().text();
              const isEqual = lhsVal === rhsVal;
              return {
                root,
                lhsValue: lhsVal,
                rhsValue: rhsVal,
                isEqual,
                evidence: `At ${variable} = ${root}: LHS = ${lhsVal}, RHS = ${rhsVal} (Equal: ${isEqual})`
              };
            } catch (evalErr: any) {
              return {
                root,
                lhsValue: "error",
                rhsValue: "error",
                isEqual: false,
                evidence: `Evaluation error at ${variable} = ${root}: ${evalErr.message}`
              };
            }
          });
          allVerified = subChecks.every((c) => c.isEqual);
        }

        return {
          success: true,
          toolName: "symbolic_math",
          durationMs: Date.now() - startTime,
          engineUsed: "node_cas",
          data: {
            action: "solve",
            variable,
            result: rootsStr,
            roots: cleanRoots,
            substitutionChecks: subChecks,
            allRootsVerified: allVerified,
            notes: allVerified
              ? `All roots verified programmatically by substitution: ${cleanRoots.join(", ")}`
              : `Found roots: ${cleanRoots.join(", ")}`
          }
        };
      }

      case "substitute_and_check": {
        if (!expr.includes("=")) {
          throw new Error("substitute_and_check requires an equation with an '=' sign");
        }
        const parts = expr.split("=");
        const lhs = parts[0].trim();
        const rhs = parts[1].trim();
        const candidates = args.candidateRoots || [];

        const checks: SubstitutionCheckItem[] = candidates.map((root) => {
          const cleanRoot = root.replace(/\$/g, "").trim();
          try {
            const lhsVal = nerdamer(lhs, { [variable]: cleanRoot }).evaluate().text();
            const rhsVal = nerdamer(rhs, { [variable]: cleanRoot }).evaluate().text();
            const isEqual = lhsVal === rhsVal;
            return {
              root: cleanRoot,
              lhsValue: lhsVal,
              rhsValue: rhsVal,
              isEqual,
              evidence: `At ${variable} = ${cleanRoot}: LHS = ${lhsVal}, RHS = ${rhsVal} (Equal: ${isEqual})`
            };
          } catch (evalErr: any) {
            return {
              root: cleanRoot,
              lhsValue: "error",
              rhsValue: "error",
              isEqual: false,
              evidence: `Evaluation error at ${variable} = ${cleanRoot}: ${evalErr.message}`
            };
          }
        });

        const allValid = checks.length > 0 && checks.every((c) => c.isEqual);

        return {
          success: true,
          toolName: "symbolic_math",
          durationMs: Date.now() - startTime,
          engineUsed: "node_cas",
          data: {
            action: "substitute_and_check",
            variable,
            substitutionChecks: checks,
            allRootsVerified: allValid,
            notes: allValid
              ? `Checked by substitution: LHS = RHS for all candidate roots`
              : `Substitution check failed or had discrepancies`
          }
        };
      }

      case "simplify": {
        const simp = nerdamer(expr).text();
        return {
          success: true,
          toolName: "symbolic_math",
          durationMs: Date.now() - startTime,
          engineUsed: "node_cas",
          data: { action: "simplify", variable, result: simp }
        };
      }

      case "factor": {
        const factored = nerdamer(`factor(${expr})`).text();
        return {
          success: true,
          toolName: "symbolic_math",
          durationMs: Date.now() - startTime,
          engineUsed: "node_cas",
          data: { action: "factor", variable, result: factored }
        };
      }

      case "expand": {
        const expanded = nerdamer(`expand(${expr})`).text();
        return {
          success: true,
          toolName: "symbolic_math",
          durationMs: Date.now() - startTime,
          engineUsed: "node_cas",
          data: { action: "expand", variable, result: expanded }
        };
      }

      case "differentiate": {
        const diff = nerdamer(`diff(${expr}, ${variable})`).text();
        return {
          success: true,
          toolName: "symbolic_math",
          durationMs: Date.now() - startTime,
          engineUsed: "node_cas",
          data: { action: "differentiate", variable, result: diff }
        };
      }

      case "integrate": {
        const integ = nerdamer(`integrate(${expr}, ${variable})`).text();
        return {
          success: true,
          toolName: "symbolic_math",
          durationMs: Date.now() - startTime,
          engineUsed: "node_cas",
          data: { action: "integrate", variable, result: integ }
        };
      }

      default:
        throw new Error(`Unsupported symbolic action: ${args.action}`);
    }
  } catch (err: any) {
    return {
      success: false,
      toolName: "symbolic_math",
      durationMs: Date.now() - startTime,
      engineUsed: "node_cas",
      error: err.message
    };
  }
}
