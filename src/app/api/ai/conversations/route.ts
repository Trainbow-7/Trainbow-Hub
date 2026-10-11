import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth/session";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
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

    const conversations = await db.findAIConversationsByUserId(user.id);
    return NextResponse.json({
      success: true,
      conversations,
    });
  } catch (error) {
    console.error("[GET_AI_CONVERSATIONS_ERROR]", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch conversations" },
      { status: 500 }
    );
  }
}

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
    const { title, curriculum = "WAEC_SSCE", subject = "Mathematics" } = body;

    const conversation = await db.createAIConversation({
      userId: user.id,
      title: title || "New Mathematics Discussion",
      curriculum,
      subject,
    });

    return NextResponse.json({
      success: true,
      conversation,
    });
  } catch (error) {
    console.error("[POST_AI_CONVERSATIONS_ERROR]", error);
    return NextResponse.json(
      { success: false, error: "Failed to create conversation" },
      { status: 500 }
    );
  }
}
