import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth/session";
import { db } from "@/lib/db";

/**
 * GET /api/music/overview
 * Requirements MU-01 to MU-05:
 * Returns consolidated music statistics, licensed repertoire counts,
 * recent practice sessions, and featured instructors.
 */
export async function GET() {
  try {
    const session = await getSession();
    const studentId = session?.id || "usr-std-001";
    const overview = await db.getMusicOverview(studentId);

    return NextResponse.json({
      success: true,
      data: overview,
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Failed to retrieve music overview" },
      { status: 500 }
    );
  }
}
