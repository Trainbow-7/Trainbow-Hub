import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth/session";
import { db, ReportReasonType } from "@/lib/db";

export async function POST(
  req: NextRequest,
  { params }: { params: { slug: string; lessonId: string } }
) {
  try {
    const session = await getSession();
    const userId = session?.id || "usr-std-001";

    const body = await req.json();
    const { lessonVideoId, reason, details } = body;

    if (!lessonVideoId || !reason) {
      return NextResponse.json(
        { success: false, error: "Missing lessonVideoId or reason" },
        { status: 400 }
      );
    }

    const validReasons: ReportReasonType[] = [
      "BROKEN",
      "WRONG_TOPIC",
      "POOR_QUALITY",
      "INAPPROPRIATE",
      "OTHER",
    ];

    if (!validReasons.includes(reason as ReportReasonType)) {
      return NextResponse.json(
        { success: false, error: `Invalid reason. Must be one of: ${validReasons.join(", ")}` },
        { status: 400 }
      );
    }

    const report = await db.createVideoReport({
      userId,
      lessonVideoId,
      reason: reason as ReportReasonType,
      details,
    });

    return NextResponse.json({
      success: true,
      report,
      message: "Thank you for reporting. Our curriculum review team has been notified.",
    });
  } catch (error) {
    console.error("Failed to submit video report:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
