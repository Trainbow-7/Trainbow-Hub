import { z } from "zod";
import * as vm from "vm";
import { ToolResult } from "./types";

export const CodeExecInputSchema = z.object({
  language: z.enum(["javascript", "python"]).default("javascript").describe("Programming language to execute"),
  code: z.string().describe("Executable code snippet to run for numerical or algorithmic calculations")
});

export type CodeExecInput = z.infer<typeof CodeExecInputSchema>;

export async function runCodeExec(args: CodeExecInput): Promise<ToolResult<any>> {
  const startTime = Date.now();
  const lang = args.language.toLowerCase();

  if (lang === "javascript") {
    try {
      const logs: string[] = [];
      const sandbox = {
        console: {
          log: (...args: any[]) => logs.push(args.map(a => typeof a === "object" ? JSON.stringify(a) : String(a)).join(" ")),
          warn: (...args: any[]) => logs.push(args.map(a => typeof a === "object" ? JSON.stringify(a) : String(a)).join(" ")),
          error: (...args: any[]) => logs.push(args.map(a => typeof a === "object" ? JSON.stringify(a) : String(a)).join(" ")),
        },
        Math: Math,
        Number: Number,
        String: String,
        Array: Array,
        Object: Object,
        JSON: JSON,
        parseInt: parseInt,
        parseFloat: parseFloat,
        isNaN: isNaN,
        isFinite: isFinite,
      };

      const context = vm.createContext(sandbox);
      const script = new vm.Script(args.code);

      // Run with strict timeout
      const result = script.runInContext(context, {
        timeout: 1500,
        displayErrors: true,
      });

      let outputText = logs.join("\n");
      if (result !== undefined && logs.length === 0) {
        outputText = typeof result === "object" ? JSON.stringify(result) : String(result);
      }

      if (outputText.length > 4096) {
        outputText = outputText.slice(0, 4096) + "\n...[truncated output]";
      }

      return {
        success: true,
        toolName: "code_exec",
        durationMs: Date.now() - startTime,
        engineUsed: "node_cas",
        data: {
          language: "javascript",
          output: outputText,
          returnValue: typeof result === "number" || typeof result === "string" ? result : undefined
        }
      };
    } catch (err: any) {
      return {
        success: false,
        toolName: "code_exec",
        durationMs: Date.now() - startTime,
        engineUsed: "node_cas",
        error: `Sandbox execution error: ${err.message}`
      };
    }
  } else if (lang === "python") {
    // Check if tools service is running
    const toolsServiceUrl = process.env.TOOLS_SERVICE_URL;
    const toolsSecret = process.env.TOOLS_SERVICE_SECRET || "trainbow_tools_secret_dev";

    if (toolsServiceUrl) {
      try {
        const resp = await fetch(`${toolsServiceUrl}/run_code`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Tools-Secret": toolsSecret,
          },
          body: JSON.stringify({ code: args.code, language: "python" }),
          signal: AbortSignal.timeout(3000),
        });

        if (resp.ok) {
          const json = await resp.json();
          return {
            success: json.success,
            toolName: "code_exec",
            durationMs: Date.now() - startTime,
            engineUsed: "python_service",
            data: json,
            error: json.error,
          };
        }
      } catch (serviceErr) {
        // Fall back
      }
    }

    return {
      success: false,
      toolName: "code_exec",
      durationMs: Date.now() - startTime,
      engineUsed: "node_cas",
      error: "Python tools microservice is currently unreachable. JavaScript code execution is available."
    };
  } else {
    return {
      success: false,
      toolName: "code_exec",
      durationMs: Date.now() - startTime,
      engineUsed: "node_cas",
      error: `Unsupported language: ${args.language}`
    };
  }
}
