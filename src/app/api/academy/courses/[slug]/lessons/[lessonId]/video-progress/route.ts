import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth/session";
import { db } from "@/lib/db";
import { completeLessonForUser } from "@/lib/academy/engine";

export async function POST(
  req: NextRequest,
  { params }: { params: { slug: string; lessonId: string } }
) {
  try {
    const { slug, lessonId } = params;
    const session = await getSession();
    const userId = session?.id || "usr-std-001";

    const body = await req.json();
    const { videoId, positionSeconds, percentWatched } = body;

    if (!videoId || typeof positionSeconds !== "number" || typeof percentWatched !== "number") {
      return NextResponse.json(
        { success: false, error: "Missing videoId, positionSeconds, or percentWatched" },
        { status: 400 }
      );
    }

    const progress = await db.saveVideoProgress({
      userId,
      lessonId,
      videoId,
      positionSeconds,
      percentWatched,
    });

    // Auto-mark lesson complete at >= 90% watched
    let lessonCompleted = false;
    let updatedEnrollment = null;

    if (percentWatched >= 90) {
      const result = await completeLessonForUser(userId, slug, lessonId);
      lessonCompleted = true;
      updatedEnrollment = result.enrollment;
    }

    return NextResponse.json({
      success: true,
      progress,
      lessonCompleted,
      updatedEnrollment,
    });
  } catch (error) {
    console.error("Failed to update video progress:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
