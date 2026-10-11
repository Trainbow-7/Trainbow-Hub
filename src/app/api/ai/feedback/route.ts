import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth/session";
import { db, AIFeedbackRating } from "@/lib/db";

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
    const { messageId, rating, comments } = body;

    if (!messageId || !rating) {
      return NextResponse.json(
        { success: false, error: "messageId and rating are required" },
        { status: 400 }
      );
    }

    const validRatings = ["HELPFUL", "NOT_HELPFUL", "REPORT_ERROR"];
    if (!validRatings.includes(rating)) {
      return NextResponse.json(
        { success: false, error: "Invalid rating value" },
        { status: 400 }
      );
    }

    const feedback = await db.recordAIFeedback({
      messageId,
      userId: user.id,
      rating: rating as AIFeedbackRating,
      comments: typeof comments === "string" ? comments.trim() : undefined,
    });

    return NextResponse.json({
      success: true,
      feedback,
    });
  } catch (error) {
    console.error("[POST_AI_FEEDBACK_ERROR]", error);
    return NextResponse.json(
      { success: false, error: "Failed to record message feedback" },
      { status: 500 }
    );
  }
}
