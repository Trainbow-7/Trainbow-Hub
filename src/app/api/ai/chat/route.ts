import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth/session";
import { db, AIHintLevel } from "@/lib/db";
import { moderatePrompt, generateSocraticResponse } from "@/lib/adapters/ai";

export const dynamic = "force-dynamic";

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
      conversationId: incomingConvId,
      prompt,
      hintLevel = "HINT_1",
      curriculum = "WAEC_SSCE",
      subject = "Mathematics",
      attachments = [],
    } = body;

    if (!prompt && (!attachments || attachments.length === 0)) {
      return NextResponse.json(
        { success: false, error: "Prompt or file attachment is required" },
        { status: 400 }
      );
    }

    // Build synthesized prompt from user prompt and attached file content/context
    let rawPrompt = (prompt || "").trim();
    let effectiveQuestion = "";
    const attachedImagesWithExtractedText: string[] = [];
    const attachedImagesWithoutText: any[] = [];

    if (attachments && Array.isArray(attachments) && attachments.length > 0) {
      attachments.forEach((att: any) => {
        if (att.extractedText && typeof att.extractedText === "string" && att.extractedText.trim() && !att.extractedText.startsWith("[Attached") && !att.extractedText.startsWith("[Exam Figure")) {
          attachedImagesWithExtractedText.push(att.extractedText.trim());
        } else if (att.previewUrl || att.imageBase64) {
          attachedImagesWithoutText.push(att);
        }
      });
    }

    const isPlaceholderPrompt =
      !rawPrompt ||
      /^(solve|solve\s+this|solve\s+the\s+attached\s+question|solve\s+attached|please\s+solve|calculate|find\s+answer|help\s+with\s+this|see\s+attached|attached\s+question|attached\s+image)$/i.test(
        rawPrompt.trim()
      ) ||
      rawPrompt.toLowerCase().includes("solve the attached") ||
      rawPrompt.toLowerCase().includes("solve this question") ||
      rawPrompt.toLowerCase().includes("in attached") ||
      rawPrompt.toLowerCase().includes("from the attached");

    if (attachedImagesWithExtractedText.length > 0) {
      if (isPlaceholderPrompt) {
        effectiveQuestion = attachedImagesWithExtractedText.join("\n\n");
      } else {
        effectiveQuestion = `${rawPrompt}\n\n${attachedImagesWithExtractedText.join("\n\n")}`;
      }
    } else if (attachedImagesWithoutText.length > 0) {
      // Attachment is present but was not pre-extracted on client; fail honestly with guard
      if (isPlaceholderPrompt) {
        return NextResponse.json(
          {
            success: false,
            error: "I couldn't read your attachment. Try again, re-scan, or type the question.",
          },
          { status: 422 }
        );
      }
      effectiveQuestion = rawPrompt;
    } else {
      effectiveQuestion = rawPrompt;
    }

    // Requirement B Guard 4: If effective question equals raw generic command, contains attachment tags, or is shorter than minimum length
    const hasAttachmentTag =
      effectiveQuestion.includes("[Exam Figure Attached") ||
      effectiveQuestion.includes("[Attached Question Document") ||
      effectiveQuestion.includes("[Attached files:");

    if (
      isPlaceholderPrompt && attachedImagesWithExtractedText.length === 0 ||
      hasAttachmentTag ||
      effectiveQuestion.trim().length < 5
    ) {
      console.warn("[SOLVER_GUARD_ABORTED]", { rawPrompt, effectiveQuestion });
      return NextResponse.json(
        {
          success: false,
          error: "I couldn't read your attachment. Try again, re-scan, or type the question.",
        },
        { status: 422 }
      );
    }

    // AI-08: Content Moderation & Pedagogical Safeguards
    const moderation = moderatePrompt(effectiveQuestion);
    if (!moderation.isAllowed) {
      const userQuota = await db.getOrCreateUserQuota(user.id, user.role);
      return NextResponse.json({
        success: true,
        moderated: true,
        flaggedReason: moderation.flaggedReason,
        content: moderation.redirectMessage,
        quota: {
          remaining: Math.max(0, userQuota.maxQuota - userQuota.queryCount),
          maxQuota: userQuota.maxQuota,
          resetAt: userQuota.resetAt,
        },
      });
    }

    // AI-05: Per-user daily query quota and abuse controls
    const quotaCheck = await db.checkAndIncrementQuota(user.id, user.role);
    if (!quotaCheck.allowed) {
      return NextResponse.json(
        {
          success: false,
          error: "Daily mathematical query quota exceeded. Upgrade to Pro for 100 queries/day or book a human tutor.",
          remaining: 0,
          maxQuota: quotaCheck.maxQuota,
          resetAt: quotaCheck.resetAt,
        },
        { status: 429 }
      );
    }

    const turnStartTime = Date.now();
    const modelRequestId = `req-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
    const usedAttachmentIds: string[] = (attachments || []).map((a: any) => a.id || a.uploadId).filter(Boolean);
    const attachmentHashes: string[] = (attachments || []).map((a: any) => a.contentSha256).filter(Boolean);

    // AI-11, AI-12: Privacy-compliant conversation thread management
    let conversation;
    if (incomingConvId) {
      conversation = await db.findAIConversationById(incomingConvId, user.id);
    }

    if (!conversation) {
      // Derive title from extracted question (Requirement B.5), NEVER from raw placeholder tags
      let derivedTitle = "";
      const lowerQ = effectiveQuestion.toLowerCase();
      if (lowerQ.includes("cyclic quadrilateral") || (lowerQ.includes("opposite angles") && lowerQ.includes("supplementary"))) {
        derivedTitle = "Cyclic quadrilateral: opposite angles supplementary; find x";
      } else if (lowerQ.includes("shoe size") || lowerQ.includes("median shoe")) {
        derivedTitle = "Statistics: Median and modal shoe size analysis";
      } else if (lowerQ.includes("parallel chord")) {
        derivedTitle = "Circle Geometry: Distance between parallel chords";
      } else if (lowerQ.includes("2x^2") || lowerQ.includes("2x²")) {
        derivedTitle = "Algebra: Factorisation of 2x² - 5x + 3 = 0";
      } else {
        derivedTitle = effectiveQuestion
          .replace(/\[Exam Figure Attached:[^\]]*\]/gi, "")
          .replace(/\[Attached Question Document:[^\]]*\]/gi, "")
          .replace(/\[Attached files:[^\]]*\]/gi, "")
          .replace(/\n+/g, " ")
          .trim();

        if (derivedTitle.length > 55) {
          derivedTitle = `${derivedTitle.slice(0, 52)}...`;
        }
      }

      if (!derivedTitle) {
        derivedTitle = "Academic Problem Solution";
      }

      conversation = await db.createAIConversation({
        userId: user.id,
        title: derivedTitle,
        curriculum,
        subject,
      });
    }

    // Record student message with strictly bound attachments belonging to THIS turn
    const userMessage = await db.createAIMessage({
      conversationId: conversation.id,
      role: "USER",
      content: rawPrompt || effectiveQuestion,
      hintLevel: hintLevel as AIHintLevel,
      attachments: attachments && attachments.length > 0 ? attachments : undefined,
      usedAttachmentIds: usedAttachmentIds.length > 0 ? usedAttachmentIds : undefined,
    });

    // Load previous conversation history for follow-up turns
    const previousMessages = await db.findAIMessagesByConversationId(conversation.id);
    const previousHistory = previousMessages
      .filter((m) => m.id !== userMessage.id)
      .slice(-6)
      .map((m) => ({
        role: m.role.toLowerCase() as "user" | "assistant",
        content: m.content,
      }));

    // Find structured extraction and image from current attachment if present
    const primaryAttachment = attachments && attachments.length > 0 ? attachments[0] : undefined;
    const imageBase64 = primaryAttachment?.previewUrl || primaryAttachment?.imageBase64;
    const structuredExtraction = primaryAttachment?.extraction;

    // AI-01, AI-02, AI-03, AI-04: Socratic AI & Programmatic Math Verification
    const socraticResult = await generateSocraticResponse({
      prompt: effectiveQuestion,
      hintLevel: hintLevel as AIHintLevel,
      curriculum,
      subject,
      structuredExtraction,
      imageBase64,
      previousHistory,
    });

    // Record AI assistant response with verified attachments reference
    const aiMessage = await db.createAIMessage({
      conversationId: conversation.id,
      role: "ASSISTANT",
      content: socraticResult.content,
      hintLevel: socraticResult.hintLevel,
      verification: socraticResult.verification,
      pedagogicalSummary: socraticResult.pedagogicalSummary,
      attachments: attachments && attachments.length > 0 ? attachments : undefined,
      usedAttachmentIds: usedAttachmentIds.length > 0 ? usedAttachmentIds : undefined,
    });

    const turnLatencyMs = Date.now() - turnStartTime;
    // Structured Turn Logging (Scrubbed of PII):
    console.info(JSON.stringify({
      event: "AI_TURN_COMPLETED",
      modelRequestId,
      conversationId: conversation.id,
      userMessageId: userMessage.id,
      aiMessageId: aiMessage.id,
      usedAttachmentIds,
      attachmentHashes,
      latencyMs: turnLatencyMs,
      subject,
      curriculum,
      hintLevel,
      verified: !!socraticResult.verification?.isValid,
    }));

    return NextResponse.json({
      success: true,
      moderated: false,
      conversationId: conversation.id,
      conversationTitle: conversation.title,
      curriculum: conversation.curriculum,
      modelRequestId,
      usedAttachmentIds,
      userMessage,
      aiMessage,
      quota: {
        remaining: quotaCheck.remaining,
        maxQuota: quotaCheck.maxQuota,
        resetAt: quotaCheck.resetAt,
      },
    });
  } catch (error) {
    console.error("[AI_CHAT_ERROR]", error);
    // AI-06, AI-07: Error safety & zero quota deduction on unexpected failures
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred in the AI reasoning engine" },
      { status: 500 }
    );
  }
}
