import {
  SolverOutput,
  SolverOutputSchema,
  validateSolutionQuality,
} from "./solver-schema";
import { StructuredExtraction } from "./extraction-schema";

const SOLVER_SYSTEM_PROMPT = `You are a world-class academic tutor and mathematical reasoning solver for Trainbow HUB, tailored to Nigerian (WAEC SSCE, NECO, JAMB UTME) and British (Cambridge IGCSE) curricula.

Your mandate is to provide rigorous, accurate, complete mathematical proofs and worked calculations.

RULES FOR SOLVING:
1. GIVEN FACTS: Explicitly identify all known parameters, given angle values, lengths, equations, or geometric labels.
2. FACTS FROM FIGURE: If an attached diagram exists, note all relevant relationships (points on circle, centres, parallel lines, straight lines, isosceles triangles formed by radii, etc.).
3. NUMBERED DEDUCTION STEPS:
   - For every step, provide:
     * "statement": The mathematical equation or step.
     * "reason": The geometric theorem, algebraic rule, or physical law applied (e.g. "angles on a straight line sum to 180°", "base angles of isosceles triangle with radii OP=OS are equal", "subtended angles in the same segment").
     * "result": The deduced angle value, root, or intermediate expression.
4. FINAL ANSWER:
   - Provide the exact final answer in plain text with units or degrees (e.g., "Angle PQO = 35°" or "x = 1 or x = 3/2" or "I = 1.2 A").
   - NEVER return vague placeholder sentences like "Complete academic answer provided".
5. NO GENERIC FILLER:
   - NEVER use boilerplate steps like "Analyze Question Requirements", "Apply Curriculum Framework", or "Synthesize and Conclude".
   - You must perform actual mathematical operations on the numbers in the question.

You must respond ONLY with valid JSON conforming to the following schema:
{
  "domain": string,
  "detectedSubject": string,
  "summaryTitle": string,
  "keyFormulaOrLaw": string,
  "conceptualClue": string,
  "steps": [
    {
      "stepNumber": number,
      "statement": string,
      "reason": string,
      "result": string
    }
  ],
  "finalAnswer": string,
  "examinerTips": string,
  "confidence": number
}`;

export interface ReasoningSolverOptions {
  questionText: string;
  structuredExtraction?: StructuredExtraction;
  imageBase64?: string;
  curriculum?: string;
  subject?: string;
  previousHistory?: { role: "user" | "assistant"; content: string }[];
}

/**
 * Calls Gemini reasoning model (gemini-1.5-flash or gemini-2.0-flash)
 */
async function callGeminiReasoning(
  options: ReasoningSolverOptions,
  apiKey: string,
  modelName: string
): Promise<SolverOutput> {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`;

  let promptContext = `Curriculum: ${options.curriculum || "WAEC SSCE"}\nSubject: ${options.subject || "Mathematics"}\n\nQuestion to solve:\n${options.questionText}`;

  if (options.structuredExtraction) {
    promptContext += `\n\nStructured Extraction Data:\n${JSON.stringify({
      given_values: options.structuredExtraction.given_values,
      sub_questions: options.structuredExtraction.sub_questions,
      diagram_elements: options.structuredExtraction.diagram_elements,
      figure_description: options.structuredExtraction.figure_description,
    })}`;
  }

  if (options.previousHistory && options.previousHistory.length > 0) {
    promptContext += `\n\nPrevious Conversation Context (for follow-ups):\n${options.previousHistory
      .slice(-4)
      .map((m) => `${m.role.toUpperCase()}: ${m.content.slice(0, 300)}`)
      .join("\n")}`;
  }

  const parts: any[] = [
    {
      text: `${SOLVER_SYSTEM_PROMPT}\n\nSolve the following question:\n${promptContext}`,
    },
  ];

  if (options.imageBase64 && options.imageBase64.startsWith("data:")) {
    const match = options.imageBase64.match(/^data:([^;]+);base64,(.+)$/);
    if (match) {
      parts.push({
        inline_data: {
          mime_type: match[1],
          data: match[2],
        },
      });
    }
  }

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts }],
      generationConfig: {
        temperature: 0.1,
        response_mime_type: "application/json",
      },
    }),
  });

  if (!response.ok) {
    const errText = await response.text().catch(() => "");
    throw new Error(`Gemini Solver API error (HTTP ${response.status}): ${errText.substring(0, 300)}`);
  }

  const json = await response.json();
  const textOutput = json?.candidates?.[0]?.content?.parts?.[0]?.text || "{}";
  const cleaned = textOutput.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/i, "").trim();
  const parsed = JSON.parse(cleaned);
  return SolverOutputSchema.parse(parsed);
}

/**
 * Calls OpenAI reasoning model (e.g. gpt-4o, gpt-4o-mini)
 */
async function callOpenAIReasoning(
  options: ReasoningSolverOptions,
  apiKey: string,
  modelName: string
): Promise<SolverOutput> {
  const url = "https://api.openai.com/v1/chat/completions";

  let promptContext = `Curriculum: ${options.curriculum || "WAEC SSCE"}\nSubject: ${options.subject || "Mathematics"}\n\nQuestion to solve:\n${options.questionText}`;

  if (options.structuredExtraction) {
    promptContext += `\n\nStructured Extraction Data:\n${JSON.stringify({
      given_values: options.structuredExtraction.given_values,
      sub_questions: options.structuredExtraction.sub_questions,
      diagram_elements: options.structuredExtraction.diagram_elements,
      figure_description: options.structuredExtraction.figure_description,
    })}`;
  }

  const messages: any[] = [
    { role: "system", content: SOLVER_SYSTEM_PROMPT },
  ];

  if (options.previousHistory && options.previousHistory.length > 0) {
    for (const hist of options.previousHistory.slice(-4)) {
      messages.push({ role: hist.role, content: hist.content });
    }
  }

  const userContent: any[] = [{ type: "text", text: promptContext }];
  if (options.imageBase64 && options.imageBase64.startsWith("data:")) {
    userContent.push({
      type: "image_url",
      image_url: { url: options.imageBase64 },
    });
  }
  messages.push({ role: "user", content: userContent });

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: modelName,
      messages,
      response_format: { type: "json_object" },
      temperature: 0.1,
    }),
  });

  if (!response.ok) {
    const errText = await response.text().catch(() => "");
    throw new Error(`OpenAI Solver API error (HTTP ${response.status}): ${errText.substring(0, 300)}`);
  }

  const json = await response.json();
  const textOutput = json?.choices?.[0]?.message?.content || "{}";
  const cleaned = textOutput.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/i, "").trim();
  const parsed = JSON.parse(cleaned);
  return SolverOutputSchema.parse(parsed);
}

/**
 * Main Reasoning Solver Gateway with Quality Gate & Single-Retry Mechanism
 */
export async function solveWithReasoningModel(
  options: ReasoningSolverOptions
): Promise<SolverOutput | null> {
  const provider = process.env.AI_PROVIDER || "sandbox";
  const geminiKey = process.env.GEMINI_API_KEY || process.env.AI_API_KEY || "";
  const openAIKey = process.env.OPENAI_API_KEY || "";
  const modelName = process.env.AI_MODEL || (provider === "openai" ? "gpt-4o-mini" : "gemini-flash-latest");

  const apiKey = provider === "openai" ? openAIKey : (geminiKey || openAIKey);

  // If no live provider is configured or mock key, return null so caller can decide
  if (!apiKey || apiKey.startsWith("mock_") || provider === "sandbox") {
    return null;
  }

  const runCall = async (strictNote = "") => {
    const optsWithNote = strictNote
      ? { ...options, questionText: `${options.questionText}\n\nIMPORTANT QUALITY INSTRUCTION: ${strictNote}` }
      : options;

    if (provider === "openai" || (!geminiKey && openAIKey)) {
      return callOpenAIReasoning(optsWithNote, openAIKey, modelName);
    } else {
      return callGeminiReasoning(optsWithNote, geminiKey, modelName);
    }
  };

  try {
    let result = await runCall();
    let gate = validateSolutionQuality(result, options.questionText);

    if (!gate.passed) {
      console.warn("[SOLVER_QUALITY_GATE_RETRY]", gate.violations);
      // Quality Gate Single Retry with stricter instruction
      result = await runCall(
        `Your previous response failed quality checks: ${gate.violations.join("; ")}. You MUST compute the exact numerical result and quote the theorem name.`
      );
      gate = validateSolutionQuality(result, options.questionText);
      if (!gate.passed) {
        console.error("[SOLVER_QUALITY_GATE_FAILED]", gate.violations);
        throw new Error(`Solution quality gate failed: ${gate.violations.join("; ")}`);
      }
    }

    return result;
  } catch (err: any) {
    console.error("[REASONING_SOLVER_ERROR]", err);
    throw err;
  }
}
