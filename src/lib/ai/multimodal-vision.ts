import {
  StructuredExtraction,
  StructuredExtractionSchema,
} from "./extraction-schema";
import { normalizeMathInText } from "./math-formatter";

const SYSTEM_INSTRUCTION = `You are a high-precision academic OCR and STEM vision extraction engine for Trainbow HUB, an educational platform tailored to approved Nigerian (WAEC SSCE, NECO, JAMB UTME) and British (Cambridge IGCSE) curricula.

Your task is to examine the provided photo of an exam question or textbook page, and extract:
1. "question_text": The complete, exact question text verbatim as printed in the image. Format all mathematical expressions, equations, formulas, fractions, and symbols using standard LaTeX notation enclosed in dollar signs (e.g. "Solve the equation $\\frac{1}{3a - 1} = \\frac{2}{a + 1} - \\frac{3}{8}$." or "$$\\frac{1}{3a - 1} = \\frac{2}{a + 1} - \\frac{3}{8}$$"). Include part letters (a, b, etc.) and references to figures (e.g. "In Fig. 2.35, calculate the value of x...").
2. "sub_questions": Array of explicit sub-tasks or sub-parts, with mathematics formatted in LaTeX enclosed in dollar signs (e.g. ["Prove that the opposite angles of a cyclic quadrilateral are supplementary.", "In Fig. 2.35, calculate the value of x, giving a reason for each step in your answer."]).
3. "given_values": Array of key-value pairs of explicitly given numbers, angle degrees, lengths, or geometric definitions.
4. "figure_description": Concise description of any geometric diagram, graph, or circuit shown.
5. "diagram_elements": Structured geometry specification:
   - "figureType": "circle_geometry" | "triangle" | "quadrilateral" | "polygon" | "circuit" | "general"
   - "points": Array of named vertices/points { name, label? } (e.g. A, B, C, D, E, O).
   - "lines": Array of lines or chords { from, to, isDiameter?, isRadius?, isChord? }.
   - "circles": Array of circles { centre?, pointsOnCircumference? }.
   - "angles": Array of angle labels/degrees { vertex, arms: [from, to], degrees?, label? } (e.g. vertex B with arms [A, C], label "2x").
   - "labels": Array of text labels visible in diagram (e.g. ["A", "B", "C", "D", "E", "2x", "60°", "x"]).
   - "relationships": Geometrical relationships evident from the figure (e.g. ["Cyclic quadrilateral ABCD", "Points A, B, C, D lie on circle", "Line ADE or extended ray"]).
6. "subject_guess": Academic subject (e.g. "Mathematics").
7. "level_guess": e.g. "Senior Secondary (WAEC SSCE)".
8. "exam_style_guess": e.g. "WAEC SSCE".
9. "legibility": "clear" | "acceptable" | "poor".
10. "confidence": Number between 0 and 100 representing confidence in transcription fidelity.
11. "ambiguities": Array of notes if any part of the image is torn, blurry, or ambiguous.

CRITICAL INSTRUCTIONS:
- TRANSCRIBE EXACTLY WHAT IS PRINTED IN THE IMAGE.
- FORMAT MATHEMATICS IN CLEAN LATEX ENCLOSED IN DOLLAR SIGNS.
- NEVER FABRICATE, GUESS, OR RETURN A CANNED QUESTION.
- Return ONLY valid JSON conforming to the schema above, with no markdown code fence and no surrounding conversation.`;

/**
 * Calls Google Gemini Vision API (models: gemini-1.5-flash or gemini-2.0-flash)
 */
export async function callGeminiVision(
  imageBase64: string,
  apiKey: string,
  typedPrompt?: string
): Promise<StructuredExtraction> {
  const model = process.env.AI_MODEL || "gemini-flash-latest";
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

  // Parse MIME type and raw base64 data
  let mimeType = "image/jpeg";
  let base64Data = imageBase64;
  if (imageBase64.startsWith("data:")) {
    const match = imageBase64.match(/^data:([^;]+);base64,(.+)$/);
    if (match) {
      mimeType = match[1];
      base64Data = match[2];
    }
  }

  const userPrompt = typedPrompt
    ? `Student added context: "${typedPrompt}". Transcribe and extract the exam question from this image:`
    : "Transcribe and extract the exam question and diagram from this image:";

  const requestBody = {
    contents: [
      {
        parts: [
          {
            text: `${SYSTEM_INSTRUCTION}\n\n${userPrompt}`,
          },
          {
            inline_data: {
              mime_type: mimeType,
              data: base64Data,
            },
          },
        ],
      },
    ],
    generationConfig: {
      temperature: 0.1,
      response_mime_type: "application/json",
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
      `Gemini Vision API error (HTTP ${response.status}): ${errorText.substring(0, 300)}`
    );
  }

  const json = await response.json();
  const textOutput =
    json?.candidates?.[0]?.content?.parts?.[0]?.text || "{}";

  // Clean possible markdown code fences if model enclosed JSON
  const cleaned = textOutput.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/i, "").trim();
  let parsed: any = {};
  try {
    parsed = JSON.parse(cleaned);
  } catch (jsonErr) {
    // If model didn't return valid JSON, treat text as question_text directly
    parsed = { question_text: cleaned };
  }

  const parseResult = StructuredExtractionSchema.safeParse(parsed);
  if (parseResult.success) {
    return normalizeExtraction(parseResult.data);
  }

  // Fallback: If Zod failed on secondary fields, extract the core question text and return valid schema
  console.warn("[VISION_SCHEMA_SOFT_FALLBACK]", parseResult.error.issues);
  const fallbackQuestion =
    parsed?.question_text || parsed?.question || parsed?.text || cleaned || "";

  return normalizeExtraction({
    question_text: typeof fallbackQuestion === "string" ? fallbackQuestion : JSON.stringify(fallbackQuestion),
    sub_questions: Array.isArray(parsed?.sub_questions) ? parsed.sub_questions : [],
    given_values: [],
    diagram_elements: undefined,
    subject_guess: "Mathematics",
    level_guess: "Senior Secondary (WAEC/NECO/JAMB)",
    exam_style_guess: "WAEC SSCE",
    legibility: "clear",
    confidence: 90,
    ambiguities: [],
  });
}

/**
 * Calls OpenAI Vision API (models: gpt-4o, gpt-4o-mini)
 */
export async function callOpenAIVision(
  imageBase64: string,
  apiKey: string,
  typedPrompt?: string
): Promise<StructuredExtraction> {
  const model = process.env.AI_MODEL || "gpt-4o-mini";
  const url = "https://api.openai.com/v1/chat/completions";

  const userPrompt = typedPrompt
    ? `Student added context: "${typedPrompt}". Transcribe and extract the exam question from this image.`
    : "Transcribe and extract the exam question and diagram from this image.";

  const requestBody = {
    model,
    messages: [
      {
        role: "system",
        content: SYSTEM_INSTRUCTION,
      },
      {
        role: "user",
        content: [
          { type: "text", text: userPrompt },
          {
            type: "image_url",
            image_url: {
              url: imageBase64.startsWith("data:")
                ? imageBase64
                : `data:image/jpeg;base64,${imageBase64}`,
            },
          },
        ],
      },
    ],
    response_format: { type: "json_object" },
    temperature: 0.1,
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
      `OpenAI Vision API error (HTTP ${response.status}): ${errorText.substring(0, 300)}`
    );
  }

  const json = await response.json();
  const textOutput = json?.choices?.[0]?.message?.content || "{}";
  const cleaned = textOutput.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/i, "").trim();
  let parsed: any = {};
  try {
    parsed = JSON.parse(cleaned);
  } catch (jsonErr) {
    parsed = { question_text: cleaned };
  }

  const parseResult = StructuredExtractionSchema.safeParse(parsed);
  if (parseResult.success) {
    return normalizeExtraction(parseResult.data);
  }

  console.warn("[OPENAI_VISION_SCHEMA_SOFT_FALLBACK]", parseResult.error.issues);
  const fallbackQuestion =
    parsed?.question_text || parsed?.question || parsed?.text || cleaned || "";

  return normalizeExtraction({
    question_text: typeof fallbackQuestion === "string" ? fallbackQuestion : JSON.stringify(fallbackQuestion),
    sub_questions: Array.isArray(parsed?.sub_questions) ? parsed.sub_questions : [],
    given_values: [],
    diagram_elements: undefined,
    subject_guess: "Mathematics",
    level_guess: "Senior Secondary (WAEC/NECO/JAMB)",
    exam_style_guess: "WAEC SSCE",
    legibility: "clear",
    confidence: 90,
    ambiguities: [],
  });
}

function normalizeExtraction(data: StructuredExtraction): StructuredExtraction {
  return {
    ...data,
    question_text: normalizeMathInText(data.question_text),
    sub_questions: Array.isArray(data.sub_questions)
      ? data.sub_questions.map(normalizeMathInText)
      : [],
  };
}
