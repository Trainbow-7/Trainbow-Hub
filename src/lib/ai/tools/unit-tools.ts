import { z } from "zod";
import * as math from "mathjs";
import { ToolResult } from "./types";

export const UnitToolsInputSchema = z.object({
  value: z.number().describe("Numerical value to convert"),
  fromUnit: z.string().describe("Source unit (e.g. 'm', 'km', 'kg', 'g', 'm/s', 'km/h', 'J', 'kJ', 'degC', 'degF', 'K', 'Pa', 'atm')"),
  toUnit: z.string().describe("Target unit (e.g. 'cm', 'mile', 'lb', 'mph', 'cal', 'K')")
});

export type UnitToolsInput = z.infer<typeof UnitToolsInputSchema>;

export async function runUnitTools(args: UnitToolsInput): Promise<ToolResult<any>> {
  const startTime = Date.now();
  try {
    const unitFrom = math.unit(args.value, args.fromUnit);
    const converted = unitFrom.to(args.toUnit);

    return {
      success: true,
      toolName: "unit_tools",
      durationMs: Date.now() - startTime,
      engineUsed: "node_cas",
      data: {
        original: `${args.value} ${args.fromUnit}`,
        convertedValue: converted.toNumber(),
        convertedUnit: args.toUnit,
        formatted: converted.toString()
      }
    };
  } catch (err: any) {
    return {
      success: false,
      toolName: "unit_tools",
      durationMs: Date.now() - startTime,
      engineUsed: "node_cas",
      error: err.message
    };
  }
}
