import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth/session";
import { db } from "@/lib/db";
import { AssessmentSubmissionSchema } from "@/lib/assessment/types";
import { gradeAssessment } from "@/lib/assessment/grading";
import { assessmentDb } from "@/lib/assessment/db";
import { ALL_ASSESSMENT_ITEMS } from "@/lib/assessment/banks";

export async function POST(req: NextRequest) {
  try {
    const session = await getSession();
    const userId = session?.id || "usr-std-001"; // Fallback demo student for development/testing

    const body = await req.json();
    const parsed = AssessmentSubmissionSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: "Invalid submission payload", details: parsed.error.issues },
        { status: 400 }
      );
    }

    const { courseSlug, lessonId, mode, answers, timeSpentSeconds } = parsed.data;

    // Load full assessment items corresponding to submitted question IDs
    const submittedQuestionIds = Object.keys(answers);
    const itemMap = new Map<string, any>();
    for (const item of ALL_ASSESSMENT_ITEMS) {
      itemMap.set(item.id, item);
    }

    const fullItems = submittedQuestionIds
      .map((qId) => itemMap.get(qId) || assessmentDb.getAssessmentItem(qId))
      .filter(Boolean);

    if (fullItems.length === 0) {
      return NextResponse.json(
        { success: false, error: "No matching valid questions found in bank for submitted answers" },
        { status: 400 }
      );
    }

    // Grade server-side
    const grading = gradeAssessment(fullItems, {
      courseSlug,
      lessonId,
      mode,
      answers,
      timeSpentSeconds,
    });

    // Record attempt in assessment DB
    const attempt = assessmentDb.createAssessmentAttempt({
      userId,
      courseSlug,
      lessonId,
      mode,
      grading,
    });

    // Also persist in primary DB repository for backwards compatibility
    await db.createQuizAttempt({
      userId,
      courseSlug,
      lessonId,
      score: grading.score,
      totalQuestions: grading.totalQuestions,
      correctCount: grading.correctCount,
      answers: answers as Record<string, string>,
      recommendedTopics: grading.recommendedLessons.map((r) => r.title),
    });

    return NextResponse.json({
      success: true,
      attemptId: attempt.id,
      grading,
    });
  } catch (err: any) {
    console.error("Failed to submit assessment:", err);
    return NextResponse.json(
      { success: false, error: err.message || "Internal server error" },
      { status: 500 }
    );
  }
}

