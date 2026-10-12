import { NextResponse } from "next/server";
import { requireGuardianSession } from "@/lib/auth/guardian";
import { db } from "@/lib/db";

/**
 * GET /api/guardian/children
 * Requirement PP-01: Consolidated multi-child progress and assessment summaries.
 * Guardians view only their verified linked wards.
 */
export async function GET() {
  const auth = await requireGuardianSession();
  if ("response" in auth) return auth.response;

  try {
    const children = await db.getGuardianChildrenSummary(auth.user.id);
    return NextResponse.json({
      success: true,
      children,
      count: children.length,
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Failed to fetch linked children summary" },
      { status: 500 }
    );
  }
}
