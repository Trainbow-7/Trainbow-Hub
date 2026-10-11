import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth/session";
import { db } from "@/lib/db";

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
      conversationId,
      messageId,
      tutorSlug = "dr-tayo-okafor",
      problemSnippet,
      studentAttempt,
      suggestedTopic = "Mathematics Clarification",
    } = body;

    if (!conversationId || !messageId || !problemSnippet) {
      return NextResponse.json(
        { success: false, error: "conversationId, messageId, and problemSnippet are required" },
        { status: 400 }
      );
    }

    const escalation = await db.createAIEscalation({
      conversationId,
      messageId,
      studentId: user.id,
      tutorSlug,
      problemSnippet,
      studentAttempt,
      suggestedTopic,
    });

    // Generate seamless booking redirection URL (AI-10)
    const bookingParams = new URLSearchParams({
      escalationId: escalation.id,
      topic: suggestedTopic,
      source: "socratic_ai_escalation",
    });

    const bookingUrl = `/tutors/${tutorSlug}?${bookingParams.toString()}`;

    return NextResponse.json({
      success: true,
      escalation,
      tutorSlug,
      tutorName: escalation.tutorName,
      bookingUrl,
      message: `Seamlessly escalated to ${escalation.tutorName}. Your question context and attempts have been attached.`,
    });
  } catch (error) {
    console.error("[POST_AI_ESCALATE_ERROR]", error);
    return NextResponse.json(
      { success: false, error: "Failed to escalate question to human tutor" },
      { status: 500 }
    );
  }
}
