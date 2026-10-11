import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth/session";
import { db } from "@/lib/db";
import { SEED_COURSES } from "@/lib/data/seed-data";
import { getLessonById } from "@/lib/data/academy-content";

export async function GET() {
  try {
    const session = await getSession();
    // Use logged in user ID, or fall back to demo student for previewing
    const userId = session?.id || "usr-std-001";

    const user = await db.findUserById(userId);
    const enrollments = await db.findEnrollmentsByUserId(userId);
    const studyStats = await db.getStudyStats(userId);
    const quizAttempts = await db.findQuizAttemptsByUserId(userId);

    // Hydrate enrollments with course metadata
    const hydratedEnrollments = enrollments.map((enr) => {
      const course = SEED_COURSES.find((c) => c.slug === enr.courseSlug);
      const lastLesson = enr.lastAccessedLessonId ? getLessonById(enr.lastAccessedLessonId) : null;
      return {
        ...enr,
        courseTitle: course?.title || enr.courseSlug,
        subjectName: course?.subjectName || "Mathematics",
        level: course?.level || "Senior Secondary",
        instructorName: course?.instructorName || "Trainbow Master Instructor",
        totalLessons: course?.lessonCount || 10,
        completedCount: enr.completedLessonIds.length,
        lastAccessedLessonTitle: lastLesson?.title || "Lesson 1",
        priceMinorUnits: course?.priceMinorUnits || 0,
      };
    });

    // Extract all unique revision topics from recent quiz attempts
    const revisionTopicsSet = new Set<string>();
    quizAttempts.forEach((qa) => {
      qa.recommendedTopics.forEach((topic) => revisionTopicsSet.add(topic));
    });

    // Find primary "Continue Learning" course
    let continueLearning = null;
    if (hydratedEnrollments.length > 0) {
      const active = hydratedEnrollments[0];
      continueLearning = {
        courseSlug: active.courseSlug,
        courseTitle: active.courseTitle,
        level: active.level,
        progressPercentage: active.progressPercentage,
        nextLessonId: active.lastAccessedLessonId || "l1",
        nextLessonTitle: active.lastAccessedLessonTitle,
      };
    } else {
      // Default recommendation
      const defaultCourse = SEED_COURSES[0];
      continueLearning = {
        courseSlug: defaultCourse.slug,
        courseTitle: defaultCourse.title,
        level: defaultCourse.level,
        progressPercentage: 0,
        nextLessonId: "l1",
        nextLessonTitle: "Conversion of Number Bases (Fractions & Decimals)",
      };
    }

    return NextResponse.json({
      success: true,
      user: user
        ? {
            id: user.id,
            fullName: user.fullName,
            email: user.email,
            role: user.role,
            isMinor: user.isMinor,
            isVerified: user.isVerified,
          }
        : null,
      studyStats: {
        streakDays: studyStats.streakDays,
        totalMinutesStudied: studyStats.totalMinutesStudied,
        lessonsCompleted: studyStats.lessonsCompleted,
        lastActiveDate: studyStats.lastActiveDate,
      },
      enrollments: hydratedEnrollments,
      continueLearning,
      recentQuizAttempts: quizAttempts.slice(0, 5),
      revisionTopics: Array.from(revisionTopicsSet),
    });
  } catch (error) {
    console.error("Failed to load academy dashboard:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
