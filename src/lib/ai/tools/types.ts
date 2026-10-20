import { z } from "zod";

export interface ToolResult<T = any> {
  success: boolean;
  toolName: string;
  data?: T;
  error?: string;
  durationMs: number;
  engineUsed: "node_cas" | "python_service" | "deterministic";
  notes?: string;
}

export interface ToolDefinition {
  name: string;
  description: string;
  parameters: z.ZodObject<any>;
  execute: (args: any) => Promise<ToolResult>;
}

export interface ToolCallAudit {
  toolName: string;
  input: any;
  output: any;
  durationMs: number;
  timestamp: string;
  engineUsed: string;
}
