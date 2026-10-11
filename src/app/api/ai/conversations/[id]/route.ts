import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth/session";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
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

    const conversation = await db.findAIConversationById(params.id, user.id);
    if (!conversation) {
      return NextResponse.json(
        { success: false, error: "Conversation not found" },
        { status: 404 }
      );
    }

    const messages = await db.findAIMessagesByConversationId(conversation.id);

    return NextResponse.json({
      success: true,
      conversation,
      messages,
    });
  } catch (error) {
    console.error("[GET_AI_CONVERSATION_ERROR]", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch conversation" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
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

    const deleted = await db.deleteAIConversation(params.id, user.id);
    if (!deleted) {
      return NextResponse.json(
        { success: false, error: "Conversation not found or unauthorized" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Conversation deleted successfully",
    });
  } catch (error) {
    console.error("[DELETE_AI_CONVERSATION_ERROR]", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete conversation" },
      { status: 500 }
    );
  }
}
