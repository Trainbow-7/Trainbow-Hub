import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth/session";
import { db } from "@/lib/db";
import { ALL_COURSES } from "@/lib/data/seed-data";
import {
  drawLessonCheckpoint,
  drawModuleTest,
  drawCourseFinalAssessment,
  sanitizeAssessmentItem,
} from "@/lib/assessment/selector";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const courseSlug = searchParams.get("courseSlug");
    const lessonId = searchParams.get("lessonId");
    const moduleId = searchParams.get("moduleId");
    const type = searchParams.get("type") || "checkpoint";
    const mode = searchParams.get("mode") || "practice";

    if (!courseSlug) {
      return NextResponse.json(
        { success: false, error: "courseSlug is required" },
        { status: 400 }
      );
    }

    const course = ALL_COURSES.find((c) => c.slug === courseSlug);
    if (!course) {
      return NextResponse.json(
        { success: false, error: `Course '${courseSlug}' not found` },
        { status: 404 }
      );
    }

    const session = await getSession();
    const userId = session?.id;

    // Check free preview or enrollment access
    let isFreePreview = false;
    let foundLesson: any = null;

    if (lessonId) {
      for (const m of course.syllabus) {
        const l = m.lessons.find((les: any) => les.id === lessonId || les.slug === lessonId);
        if (l) {
          foundLesson = l;
          isFreePreview = Boolean(l.isFreePreview);
          break;
        }
      }
    }

    // Access control: If not a free preview lesson, verify user enrollment or session
    if (!isFreePreview && lessonId) {
      if (userId) {
        const enrollment = await db.findEnrollment(userId, courseSlug);
        // If course requires paid enrollment and user has not enrolled, return locked
        if (!enrollment && course.priceMinorUnits > 0 && session?.role === "STUDENT") {
          return NextResponse.json(
            { success: false, error: "Course enrollment required to access this assessment checkpoint", isLocked: true },
            { status: 403 }
          );
        }
      }
    }

    let items: any[] = [];
    let title = "Practice Checkpoint";
    let timeLimitSeconds: number | null = null;

    if (type === "checkpoint" && lessonId) {
      title = `Checkpoint Quiz: ${foundLesson?.title || "Lesson Checkpoint"}`;
      items = drawLessonCheckpoint(foundLesson?.id || lessonId, 7);
      if (mode === "jamb_speed" || courseSlug.includes("jamb")) {
        timeLimitSeconds = items.length * 60; // 1 minute per question for JAMB speed round
      } else if (mode === "test") {
        timeLimitSeconds = items.length * 90; // 1.5 minutes per question
      }
    } else if (type === "module_test" && moduleId) {
      title = `Module Assessment Test`;
      items = drawModuleTest(moduleId, 12);
      timeLimitSeconds = mode === "test" ? 12 * 90 : null;
    } else if (type === "final_assessment") {
      title = `Course Final Comprehensive Assessment: ${course.title}`;
      items = drawCourseFinalAssessment(courseSlug, 35);
      timeLimitSeconds = mode === "test" ? 45 * 60 : null; // 45 minutes
    } else {
      return NextResponse.json(
        { success: false, error: "Invalid assessment parameters: provide lessonId for checkpoint or moduleId for module test" },
        { status: 400 }
      );
    }

    // CRITICAL SECURITY REQUIREMENT:
    // Sanitize every item to NEVER send correct answers, explanations, marking schemes, or verification evidence to the browser
    const sanitizedItems = items.map(sanitizeAssessmentItem);

    return NextResponse.json({
      success: true,
      title,
      courseSlug,
      lessonId: foundLesson?.id || lessonId,
      moduleId,
      type,
      mode,
      timeLimitSeconds,
      passPercentage: 60,
      totalQuestions: sanitizedItems.length,
      questions: sanitizedItems,
    });
  } catch (err: any) {
    console.error("Failed to draw assessment:", err);
    return NextResponse.json(
      { success: false, error: err.message || "Internal server error" },
      { status: 500 }
    );
  }
}

