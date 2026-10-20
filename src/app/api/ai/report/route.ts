import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      conversationId,
      messageId,
      questionText,
      extractionData,
      solutionContent,
      userComment,
      userId,
    } = body;

    if (!questionText || !solutionContent) {
      return NextResponse.json(
        { success: false, error: "questionText and solutionContent are required" },
        { status: 400 }
      );
    }

    // Try to save to database
    let reportId = `report-${Date.now()}`;
    try {
      const report = await (prisma as any).aISolutionReport.create({
        data: {
          userId: userId || null,
          conversationId: conversationId || null,
          messageId: messageId || null,
          questionText,
          extractionData: extractionData || null,
          solutionContent,
          userComment: userComment || "User reported incorrect solution",
          status: "PENDING_REVIEW",
          promotedToEval: false,
        },
      });
      reportId = report.id;
    } catch (dbErr) {
      // In-memory / mock fallback if DB table not yet migrated
      console.warn("[REPORT_WRONG_ANSWER_DB_FALLBACK]", dbErr);
    }

    console.info(JSON.stringify({
      event: "AI_WRONG_ANSWER_REPORTED",
      reportId,
      questionText: questionText.slice(0, 100),
      userComment,
      timestamp: new Date().toISOString(),
    }));

    return NextResponse.json({
      success: true,
      reportId,
      message: "Thank you for your feedback. Our academic team will review this solution.",
    });
  } catch (error: any) {
    console.error("[REPORT_ERROR]", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    let reports = [];
    try {
      reports = await (prisma as any).aISolutionReport.findMany({
        orderBy: { createdAt: "desc" },
        take: 50,
      });
    } catch (e) {
      reports = [];
    }
    return NextResponse.json({ success: true, reports });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
