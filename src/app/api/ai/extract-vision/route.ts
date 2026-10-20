import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth/session";
import { db } from "@/lib/db";
import {
  StructuredExtraction,
  StructuredExtractionSchema,
} from "@/lib/ai/extraction-schema";
import { renderGeometricDiagramSVG } from "@/lib/ai/figure-renderer";
import { callGeminiVision, callOpenAIVision } from "@/lib/ai/multimodal-vision";
import { checkStuckOutput } from "@/lib/ai/stuck-output-detector";
import { crossCheckDiagramWithText } from "@/lib/ai/ocr-cross-check";
import { computeSha256Hex } from "@/lib/ai/attachment-hash";
import { normalizeMathInText } from "@/lib/ai/math-formatter";

export const dynamic = "force-dynamic";

/**
 * Server-side AI Gateway Vision Extraction Pipeline
 * Extracts structured questions, constraints, and diagram specifications from student images.
 */
export async function POST(req: Request) {
  try {
    const session = await getSession();
    const userId = req.headers.get("x-user-id") || session?.id || "usr-std-001";
    const user = await db.findUserById(userId);

    if (!user) {
      return NextResponse.json(
        { success: false, error: "Authentication required" },
        { status: 401 }
      );
    }

    const body = await req.json().catch(() => ({}));
    const {
      imageBase64,
      fileName = "exam-question.jpg",
      typedPrompt = "",
      contentSha256,
    } = body;

    if (!imageBase64 && !typedPrompt) {
      return NextResponse.json(
        { success: false, error: "Image data or prompt is required for extraction" },
        { status: 400 }
      );
    }

    // Determine content hash
    const effectiveSha256 =
      contentSha256 ||
      computeSha256Hex(imageBase64 || typedPrompt || fileName);

    const isProduction = process.env.NODE_ENV === "production";
    const provider = process.env.AI_PROVIDER || "sandbox";
    const geminiKey = process.env.GEMINI_API_KEY || process.env.AI_API_KEY || "";
    const openAIKey = process.env.OPENAI_API_KEY || "";

    const apiKey =
      provider === "openai" ? openAIKey : geminiKey || openAIKey;

    const isMock =
      provider === "sandbox" ||
      !apiKey ||
      apiKey.startsWith("mock_");

    // In production, reject sandbox mock extraction completely
    if (isProduction && isMock) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Image reading is not available right now. You can type the question instead.",
        },
        { status: 503 }
      );
    }

    // If no vision provider is configured, fail honestly — NEVER fabricate a canned question
    if (isMock) {
      return NextResponse.json(
        {
          success: false,
          isMock: true,
          error:
            "Image reading is not available right now. You can type the question instead.",
        },
        { status: 503 }
      );
    }

    // Call Real Multimodal Vision Provider
    let extraction: StructuredExtraction;
    try {
      if (provider === "openai" && openAIKey) {
        extraction = await callOpenAIVision(imageBase64, openAIKey, typedPrompt);
      } else if (geminiKey) {
        extraction = await callGeminiVision(imageBase64, geminiKey, typedPrompt);
      } else if (openAIKey) {
        extraction = await callOpenAIVision(imageBase64, openAIKey, typedPrompt);
      } else {
        return NextResponse.json(
          {
            success: false,
            error:
              "Image reading is not available right now. You can type the question instead.",
          },
          { status: 503 }
        );
      }
    } catch (visionCallErr: any) {
      console.error("[MULTIMODAL_VISION_CALL_FAILED]", visionCallErr);
      return NextResponse.json(
        {
          success: false,
          error:
            "Image reading failed to read text clearly from the photo. You can type the question instead.",
        },
        { status: 502 }
      );
    }

    // Stuck-Output Detector: Block identical text across different image hashes
    const stuckCheck = checkStuckOutput(effectiveSha256, extraction.question_text);
    if (stuckCheck.isStuck) {
      console.warn("[STUCK_OUTPUT_PREVENTED]", stuckCheck.reason);
      return NextResponse.json(
        {
          success: false,
          error:
            "Vision model returned repetitive output. Please re-upload or type the question.",
        },
        { status: 422 }
      );
    }

    // Normalize mathematical notation in extracted question text and sub-questions
    extraction.question_text = normalizeMathInText(extraction.question_text);
    if (Array.isArray(extraction.sub_questions)) {
      extraction.sub_questions = extraction.sub_questions.map(normalizeMathInText);
    }

    // OCR Cross-Check: Check diagram elements against question text
    const crossCheck = crossCheckDiagramWithText(
      extraction.question_text,
      extraction.diagram_elements
    );

    // Render deterministic SVG figure if diagram elements exist
    let redrawnSvg: string | undefined;
    if (extraction.diagram_elements) {
      try {
        redrawnSvg = renderGeometricDiagramSVG(extraction.diagram_elements);
      } catch (renderErr) {
        console.warn("[FIGURE_RENDER_WARN]", renderErr);
      }
    }

    return NextResponse.json({
      success: true,
      extraction,
      redrawnSvg,
      crossCheck,
      contentSha256: effectiveSha256,
      fileName,
    });
  } catch (error) {
    console.error("[AI_VISION_EXTRACTION_ERROR]", error);
    return NextResponse.json(
      {
        success: false,
        error:
          "Image reading is not available right now. You can type the question instead.",
      },
      { status: 500 }
    );
  }
}
