import { NextResponse } from "next/server";
import { db } from "@/lib/db";

/**
 * GET /api/music/courses
 * Requirement MU-01, MU-05: Music courses, theory syllabus and grade modules.
 */
export async function GET() {
  try {
    const publishedCourses = await db.listAuthoringCourses({ status: "PUBLISHED" });
    const musicCourses = publishedCourses.filter(
      (c) =>
        c.subjectSlug === "music-theory" ||
        c.title.toLowerCase().includes("music") ||
        c.slug.includes("music")
    );

    return NextResponse.json({
      success: true,
      count: musicCourses.length,
      courses: musicCourses,
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Failed to retrieve music courses" },
      { status: 500 }
    );
  }
}
