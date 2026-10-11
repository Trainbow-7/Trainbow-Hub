import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth/session";
import { db } from "@/lib/db";
import { SEED_COURSES } from "@/lib/data/seed-data";
import { z } from "zod";

const EnrollSchema = z.object({
  courseSlug: z.string().min(1),
});

export async function POST(req: NextRequest) {
  try {
    const session = await getSession();
    const userId = session?.id || "usr-std-001"; // Fall back to demo student if local guest test

    const body = await req.json();
    const validation = EnrollSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { success: false, error: "Invalid course slug" },
        { status: 400 }
      );
    }

    const { courseSlug } = validation.data;
    const course = SEED_COURSES.find((c) => c.slug === courseSlug);
    if (!course) {
      return NextResponse.json(
        { success: false, error: "Course not found" },
        { status: 404 }
      );
    }

    // Check existing or create enrollment
    let enrollment = await db.findEnrollment(userId, courseSlug);
    if (!enrollment) {
      const firstLessonId = course.syllabus[0]?.lessons[0]?.id || "l1";
      enrollment = await db.createOrUpdateEnrollment({
        userId,
        courseSlug,
        completedLessonIds: [],
        lastAccessedLessonId: firstLessonId,
        progressPercentage: 0,
      });
    }

    return NextResponse.json({
      success: true,
      enrollment,
      firstLessonId: enrollment.lastAccessedLessonId || "l1",
    });
  } catch (error) {
    console.error("Failed to enroll student:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
