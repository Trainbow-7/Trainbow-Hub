import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth/session";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  try {
    const session = await getSession();
    const userId = session?.id || "usr-std-001";

    const requests = await db.listTutorRequestsForUser(userId);
    return NextResponse.json({ success: true, requests });
  } catch (error) {
    console.error("[GET_TUTOR_REQUESTS_ERROR]", error);
    return NextResponse.json(
      { success: false, error: "Internal server error fetching tutor requests" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const session = await getSession();
    const body = await req.json();

    const studentId = session?.id || body.studentId || "usr-std-001";
    const user = await db.findUserById(studentId);

    if (user?.isMinor) {
      // Check verified guardian consent
      const guardianships = Array.from(db.guardianships.values());
      const verified = guardianships.some(
        (g) => g.studentId === studentId && g.status === "VERIFIED"
      );
      if (!verified) {
        return NextResponse.json(
          {
            success: false,
            error: "Under-18 learners require verified parent/guardian consent prior to tutor request submission (NDPA 2023 Section 31).",
            requiresConsent: true,
            studentId,
          },
          { status: 403 }
        );
      }
    }

    const tutorRequest = await db.createTutorRequest({
      studentId,
      subject: body.subject || "Mathematics",
      level: body.level || "Senior Secondary (SS2)",
      examGoal: body.examGoal,
      topicsNeedingHelp: body.topicsNeedingHelp || "General Curriculum Support",
      preferredDays: body.preferredDays || ["Monday", "Wednesday"],
      preferredTimes: body.preferredTimes || ["16:00 - 18:00"],
      timezone: body.timezone || "Africa/Lagos",
      lessonFormat: body.lessonFormat || "ONLINE",
      locationState: body.locationState,
      locationArea: body.locationArea,
      language: body.language || "English",
      budgetRangeMin: body.budgetRangeMin,
      budgetRangeMax: body.budgetRangeMax,
      urgency: body.urgency || "THIS_WEEK",
      extraNotes: body.extraNotes,
    });

    return NextResponse.json({ success: true, request: tutorRequest });
  } catch (error: any) {
    console.error("[POST_TUTOR_REQUEST_ERROR]", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to submit tutor request" },
      { status: 400 }
    );
  }
}
