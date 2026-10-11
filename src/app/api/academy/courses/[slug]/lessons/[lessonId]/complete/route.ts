import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth/session";
import { completeLessonForUser } from "@/lib/academy/engine";

export async function POST(
  req: NextRequest,
  { params }: { params: { slug: string; lessonId: string } }
) {
  try {
    const { slug, lessonId } = params;
    const session = await getSession();
    const userId = session?.id || "usr-std-001";

    const result = await completeLessonForUser(userId, slug, lessonId);

    return NextResponse.json({
      success: true,
      enrollment: result.enrollment,
      studyStats: result.studyStats,
      nextLessonId: result.nextLessonId,
    });
  } catch (error) {
    console.error("Failed to complete lesson:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
