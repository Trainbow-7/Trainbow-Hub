import { ToolResult } from "./types";
import { runSymbolicMath, SymbolicMathInput } from "./symbolic-math";
import { runNumericCalc, NumericCalcInput } from "./numeric-calc";
import { runStatistics, StatisticsInput } from "./statistics";
import { runGeometryCheck, GeometryCheckInput } from "./geometry-check";
import { runUnitTools, UnitToolsInput } from "./unit-tools";
import { runChemistryTools, ChemistryToolsInput } from "./chemistry-tools";
import { runCodeExec, CodeExecInput } from "./code-exec";
import { runRetrieveSyllabus, RetrieveSyllabusInput } from "./retrieve-syllabus";
import { runDrawDiagram, DrawDiagramInput } from "./draw-diagram";
import { runRereadImageRegion, RereadImageRegionInput } from "./reread-image-region";

export class ToolsProvider {
  private serviceUrl?: string;
  private secret: string;

  constructor() {
    this.serviceUrl = process.env.TOOLS_SERVICE_URL;
    this.secret = process.env.TOOLS_SERVICE_SECRET || "trainbow_tools_secret_dev";
  }

  public isPythonServiceConfigured(): boolean {
    return !!this.serviceUrl;
  }

  public async executeTool(toolName: string, args: any): Promise<ToolResult> {
    const startTime = Date.now();

    // 1. If Python service is configured, try calling it for supported computational tools
    if (this.serviceUrl) {
      try {
        const pyResult = await this.callPythonService(toolName, args);
        if (pyResult) {
          return pyResult;
        }
      } catch (err: any) {
        console.warn(`[TOOLS_PROVIDER_FAILOVER] Python tools service call failed: ${err.message}. Falling back to Node CAS tools.`);
      }
    }

    // 2. Local Node CAS & deterministic tools (Baseline for Vercel / zero-dependency)
    let nodeRes: ToolResult;
    switch (toolName) {
      case "symbolic_math":
        nodeRes = await runSymbolicMath(args as SymbolicMathInput);
        break;
      case "numeric_calc":
        nodeRes = await runNumericCalc(args as NumericCalcInput);
        break;
      case "statistics":
        nodeRes = await runStatistics(args as StatisticsInput);
        break;
      case "geometry_check":
        nodeRes = await runGeometryCheck(args as GeometryCheckInput);
        break;
      case "unit_tools":
        nodeRes = await runUnitTools(args as UnitToolsInput);
        break;
      case "chemistry_tools":
        nodeRes = await runChemistryTools(args as ChemistryToolsInput);
        break;
      case "code_exec":
        nodeRes = await runCodeExec(args as CodeExecInput);
        break;
      case "retrieve_syllabus":
        nodeRes = await runRetrieveSyllabus(args as RetrieveSyllabusInput);
        break;
      case "draw_diagram":
        nodeRes = await runDrawDiagram(args as DrawDiagramInput);
        break;
      case "reread_image_region":
        nodeRes = await runRereadImageRegion(args as RereadImageRegionInput);
        break;
      default:
        return {
          success: false,
          toolName,
          durationMs: Date.now() - startTime,
          engineUsed: "node_cas",
          error: `Unrecognized tool: ${toolName}`
        };
    }

    if (this.serviceUrl && nodeRes) {
      nodeRes.notes = (nodeRes.notes ? nodeRes.notes + " | " : "") + "Executed via Node CAS engine (Python service unavailable)";
    }
    return nodeRes;
  }

  private async callPythonService(toolName: string, args: any): Promise<ToolResult | null> {
    const endpointMap: Record<string, string> = {
      symbolic_math: "/solve",
      numeric_calc: "/calc",
      statistics: "/stats",
      unit_tools: "/units",
      chemistry_tools: "/chemistry",
      code_exec: "/run_code",
    };

    const endpoint = endpointMap[toolName];
    if (!endpoint) return null;

    const startTime = Date.now();
    let bodyPayload: any = args;

    // Adapt args to python endpoint schemas
    if (toolName === "symbolic_math") {
      bodyPayload = {
        equation: args.equationOrExpr,
        variable: args.variable || "x",
        substitute_check: args.candidateRoots,
      };
    } else if (toolName === "numeric_calc") {
      bodyPayload = {
        expression: args.expression,
        precision: args.precision || 10,
        sig_figs: args.significantFigures,
      };
    } else if (toolName === "statistics") {
      bodyPayload = {
        data: args.data || [],
        regression_y: args.dataY,
      };
    } else if (toolName === "unit_tools") {
      bodyPayload = {
        value: args.value,
        from_unit: args.fromUnit,
        to_unit: args.toUnit,
      };
    } else if (toolName === "chemistry_tools") {
      bodyPayload = {
        action: args.action === "balance_equation" ? "balance" : args.action,
        equation: args.equation,
        formula: args.formula,
        h_concentration: args.hConcentration,
        oh_concentration: args.ohConcentration,
      };
    }

    const resp = await fetch(`${this.serviceUrl}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Tools-Secret": this.secret,
      },
      body: JSON.stringify(bodyPayload),
      signal: AbortSignal.timeout(4000),
    });

    if (!resp.ok) {
      throw new Error(`Python service HTTP ${resp.status}`);
    }

    const json = await resp.json();
    return {
      success: json.success !== false,
      toolName,
      durationMs: Date.now() - startTime,
      engineUsed: "python_service",
      data: json,
      notes: "Computed via high-precision Python service (SymPy/SciPy/Pint/ChemPy)"
    };
  }
}

export const toolsProvider = new ToolsProvider();
