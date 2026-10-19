import { AIHintLevel } from "@/lib/db";
import { StructuredExtraction } from "./extraction-schema";

const REASONING_SYSTEM_INSTRUCTION = `You are a Senior Academic Examiner and Step-by-Step Socratic Tutor for Trainbow HUB, tailored to approved Nigerian (WAEC SSCE, NECO, JAMB UTME) and British (Cambridge IGCSE) curricula.

Your goal is to provide a complete, verified, pedagogically rigorous worked solution for the student's question.

CRITICAL INSTRUCTIONS:
1. Restate the question briefly at the start so the student has context.
2. If the problem has multiple parts (e.g. (a) and (b)), solve EVERY part completely with clear headings.
3. Refer explicitly to the figure's labels (points, vertices, lines, and given angles) when geometric or physical diagrams are involved.
4. Give an explicit geometric or scientific REASON for each step in your answer (e.g. "[opposite angles of cyclic quadrilateral are supplementary]", "[angles on a straight line = 180°]", "[angle in a semicircle = 90°]").
5. Highlight the final answer clearly with units (e.g., "$$\\mathbf{x = 40^\\circ}$$").
6. Include a short, clear "Check your answer" verification step demonstrating that substituting the result back into the problem statement satisfies all conditions.
7. Include examination tips explaining how marks (Method M1, Accuracy A1, Reason R1) are allocated by WAEC/Cambridge examiners.
8. NEVER repeat or echo raw student commands like "solve the attached question" or placeholder tags like "[Exam Figure Attached]". If you cannot read the problem, state that directly.`;

export interface LLMSolveResult {
  content: string;
  pedagogicalSummary: string;
  isAiGenerated: boolean;
  modelUsed: string;
}

/**
 * Solves an academic problem using Google Gemini Reasoning / Chat model.
 */
export async function solveWithGemini(
  prompt: string,
  apiKey: string,
  curriculum = "WAEC_SSCE",
  subject = "Mathematics",
  hintLevel: AIHintLevel = "FULL_SOLUTION",
  extraction?: StructuredExtraction
): Promise<LLMSolveResult> {
  const model = process.env.AI_REASONING_MODEL || process.env.AI_MODEL || "gemini-flash-latest";
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

  let contextNote = `Curriculum: ${curriculum}\nSubject: ${subject}\nRequested Hint Level: ${hintLevel}\n\n`;
  if (extraction) {
    contextNote += `Extracted Question Verbatim:\n${extraction.question_text}\n\n`;
    if (extraction.sub_questions?.length) {
      contextNote += `Sub-questions to solve:\n${extraction.sub_questions.map((q, i) => `${i + 1}. ${q}`).join("\n")}\n\n`;
    }
    if (extraction.figure_description) {
      contextNote += `Figure Description:\n${extraction.figure_description}\n\n`;
    }
    if (extraction.diagram_elements?.relationships?.length) {
      contextNote += `Figure Geometric Relationships:\n${extraction.diagram_elements.relationships.join("\n")}\n\n`;
    }
  }

  const userQuery = `${contextNote}Problem Statement:\n${prompt}`;

  const requestBody = {
    contents: [
      {
        parts: [
          { text: `${REASONING_SYSTEM_INSTRUCTION}\n\n${userQuery}` },
        ],
      },
    ],
    generationConfig: {
      temperature: 0.2,
      maxOutputTokens: 2048,
    },
  };

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(requestBody),
  });

  if (!response.ok) {
    const errorText = await response.text().catch(() => "");
    throw new Error(
      `Gemini Reasoning API error (HTTP ${response.status}): ${errorText.substring(0, 300)}`
    );
  }

  const json = await response.json();
  const content =
    json?.candidates?.[0]?.content?.parts?.[0]?.text || "";

  if (!content) {
    throw new Error("Gemini returned empty response content.");
  }

  return {
    content,
    pedagogicalSummary: "Full Solution: Complete worked solution, verified answer, and exam tips.",
    isAiGenerated: true,
    modelUsed: model,
  };
}

/**
 * Solves an academic problem using OpenAI Chat/Reasoning model.
 */
export async function solveWithOpenAI(
  prompt: string,
  apiKey: string,
  curriculum = "WAEC_SSCE",
  subject = "Mathematics",
  hintLevel: AIHintLevel = "FULL_SOLUTION",
  extraction?: StructuredExtraction
): Promise<LLMSolveResult> {
  const model = process.env.AI_REASONING_MODEL || process.env.AI_MODEL || "gpt-4o-mini";
  const url = "https://api.openai.com/v1/chat/completions";

  let contextNote = `Curriculum: ${curriculum}\nSubject: ${subject}\nRequested Hint Level: ${hintLevel}\n\n`;
  if (extraction) {
    contextNote += `Extracted Question Verbatim:\n${extraction.question_text}\n\n`;
    if (extraction.sub_questions?.length) {
      contextNote += `Sub-questions to solve:\n${extraction.sub_questions.map((q, i) => `${i + 1}. ${q}`).join("\n")}\n\n`;
    }
    if (extraction.figure_description) {
      contextNote += `Figure Description:\n${extraction.figure_description}\n\n`;
    }
  }

  const requestBody = {
    model,
    messages: [
      { role: "system", content: REASONING_SYSTEM_INSTRUCTION },
      { role: "user", content: `${contextNote}Problem Statement:\n${prompt}` },
    ],
    temperature: 0.2,
  };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(requestBody),
  });

  if (!response.ok) {
    const errorText = await response.text().catch(() => "");
    throw new Error(
      `OpenAI Reasoning API error (HTTP ${response.status}): ${errorText.substring(0, 300)}`
    );
  }

  const json = await response.json();
  const content = json?.choices?.[0]?.message?.content || "";

  if (!content) {
    throw new Error("OpenAI returned empty response content.");
  }

  return {
    content,
    pedagogicalSummary: "Full Solution: Complete worked solution, verified answer, and exam tips.",
    isAiGenerated: true,
    modelUsed: model,
  };
}
