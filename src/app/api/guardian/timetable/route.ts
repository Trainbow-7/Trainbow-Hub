import { NextResponse } from "next/server";
import { requireGuardianSession } from "@/lib/auth/guardian";
import { db } from "@/lib/db";

/**
 * GET /api/guardian/timetable
 * Requirement PP-02: Unified timetable, attendance logs, and 1-tap guardian observer entry.
 */
export async function GET() {
  const auth = await requireGuardianSession();
  if ("response" in auth) return auth.response;

  try {
    const timetable = await db.getGuardianTimetable(auth.user.id);
    return NextResponse.json({
      success: true,
      timetable,
      count: timetable.length,
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Failed to fetch timetable" },
      { status: 500 }
    );
  }
}
