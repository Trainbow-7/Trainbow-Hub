import { NextResponse } from "next/server";
import { requireAdminSession } from "@/lib/auth/admin";
import { db } from "@/lib/db";

export async function GET() {
  const auth = await requireAdminSession();
  if ("response" in auth) return auth.response;

  try {
    const analytics = await db.getAIUsageAdminAnalytics();
    return NextResponse.json({ success: true, analytics });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Failed to fetch AI usage analytics" },
      { status: 500 }
    );
  }
}
