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
    } = body;

    if (!prompt || typeof prompt !== "string" || prompt.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Prompt is required" },
        { status: 400 }
      );
    }

    const cleanPrompt = prompt.trim();

    // AI-08: Content Moderation & Pedagogical Safeguards
    const moderation = moderatePrompt(cleanPrompt);
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

    // AI-11, AI-12: Privacy-compliant conversation thread management
    let conversation;
    if (incomingConvId) {
      conversation = await db.findAIConversationById(incomingConvId, user.id);
    }

    if (!conversation) {
      const title = cleanPrompt.length > 45 ? `${cleanPrompt.slice(0, 42)}...` : cleanPrompt;
      conversation = await db.createAIConversation({
        userId: user.id,
        title,
        curriculum,
        subject,
      });
    }

    // Record student message
    const userMessage = await db.createAIMessage({
      conversationId: conversation.id,
      role: "USER",
      content: cleanPrompt,
      hintLevel: hintLevel as AIHintLevel,
    });

    // AI-01, AI-02, AI-03, AI-04: Socratic AI & Programmatic Math Verification
    const socraticResult = await generateSocraticResponse({
      prompt: cleanPrompt,
      hintLevel: hintLevel as AIHintLevel,
      curriculum,
      subject,
    });

    // Record AI assistant response
    const aiMessage = await db.createAIMessage({
      conversationId: conversation.id,
      role: "ASSISTANT",
      content: socraticResult.content,
      hintLevel: socraticResult.hintLevel,
      verification: socraticResult.verification,
      pedagogicalSummary: socraticResult.pedagogicalSummary,
    });

    return NextResponse.json({
      success: true,
      moderated: false,
      conversationId: conversation.id,
      conversationTitle: conversation.title,
      curriculum: conversation.curriculum,
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
