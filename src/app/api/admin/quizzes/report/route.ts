import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth/session";
import { assessmentDb } from "@/lib/assessment/db";
import { QuestionReportSchema } from "@/lib/assessment/types";

export async function POST(req: NextRequest) {
  try {
    const session = await getSession();
    const userId = session?.id || "anonymous";

    const body = await req.json();
    const parsed = QuestionReportSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ success: false, error: "Invalid report payload", details: parsed.error.issues }, { status: 400 });
    }

    const { questionId, reason, details } = parsed.data;

    const report = assessmentDb.reportQuestion(questionId, reason, userId, details);

    return NextResponse.json({
      success: true,
      reportId: report.id,
      message: "Report submitted. Thank you for helping keep our curriculum accurate.",
    });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

