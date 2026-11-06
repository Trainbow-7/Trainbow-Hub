import { NextRequest, NextResponse } from "next/server";
import { assessmentDb } from "@/lib/assessment/db";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const courseSlug = searchParams.get("courseSlug") || undefined;

    const analytics = assessmentDb.getLearnerNeedsAnalytics(courseSlug);

    return NextResponse.json({
      success: true,
      analytics,
    });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

