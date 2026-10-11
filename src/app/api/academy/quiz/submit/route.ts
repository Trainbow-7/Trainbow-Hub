import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth/session";
import { db } from "@/lib/db";
import { gradeQuizAttempt } from "@/lib/academy/engine";
import { z } from "zod";

const QuizSubmitSchema = z.object({
  courseSlug: z.string().min(1),
  lessonId: z.string().min(1),
  answers: z.record(z.string()),
});

export async function POST(req: NextRequest) {
  try {
    const session = await getSession();
    const userId = session?.id || "usr-std-001";

    const body = await req.json();
    const validation = QuizSubmitSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { success: false, error: "Invalid quiz submission payload" },
        { status: 400 }
      );
    }

    const { courseSlug, lessonId, answers } = validation.data;
    const grading = gradeQuizAttempt(lessonId, answers);

    // Save quiz attempt in database
    const attempt = await db.createQuizAttempt({
      userId,
      courseSlug,
      lessonId,
      score: grading.score,
      totalQuestions: grading.totalQuestions,
      correctCount: grading.correctCount,
      answers,
      recommendedTopics: grading.recommendedTopics,
    });

    return NextResponse.json({
      success: true,
      attemptId: attempt.id,
      grading,
    });
  } catch (error: any) {
    console.error("Failed to submit quiz attempt:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}
