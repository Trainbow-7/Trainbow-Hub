import { GEMINI_TOOL_DECLARATIONS } from "../tools";

export function getOpenAIToolDefinitions() {
  return GEMINI_TOOL_DECLARATIONS.map((tool) => ({
    type: "function" as const,
    function: {
      name: tool.name,
      description: tool.description,
      parameters: {
        type: "object",
        properties: convertParameters(tool.parameters.properties),
        required: tool.parameters.required,
      },
    },
  }));
}

export function getAnthropicToolDefinitions() {
  return GEMINI_TOOL_DECLARATIONS.map((tool) => ({
    name: tool.name,
    description: tool.description,
    input_schema: {
      type: "object" as const,
      properties: convertParameters(tool.parameters.properties),
      required: tool.parameters.required,
    },
  }));
}

function convertParameters(props: Record<string, any>): Record<string, any> {
  const result: Record<string, any> = {};
  for (const [key, val] of Object.entries(props)) {
    result[key] = {
      type: (val.type || "string").toLowerCase(),
      description: val.description,
      ...(val.enum ? { enum: val.enum } : {}),
      ...(val.items ? { items: { type: (val.items.type || "string").toLowerCase() } } : {}),
    };
  }
  return result;
}
