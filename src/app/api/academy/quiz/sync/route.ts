import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { id, quizId, studentId, score, totalQuestions, completedAt } = body;

    if (!quizId || !studentId) {
      return NextResponse.json(
        { error: "quizId and studentId are required for sync" },
        { status: 400 }
      );
    }

    // Persist as a quiz attempt in DB
    const attempt = db.createQuizAttempt({
      quizId,
      userId: studentId,
      score: typeof score === "number" ? score : 0,
      totalQuestions: typeof totalQuestions === "number" ? totalQuestions : 10,
      passed: typeof score === "number" && typeof totalQuestions === "number" ? score / totalQuestions >= 0.7 : true,
      timeSpentSeconds: 120,
    });

    return NextResponse.json({
      success: true,
      syncedId: id,
      serverAttemptId: attempt.id,
      timestamp: new Date().toISOString(),
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || "Failed to sync offline attempt" },
      { status: 500 }
    );
  }
}
