import { NextResponse } from "next/server";
import { requireAdminSession } from "@/lib/auth/admin";
import { db } from "@/lib/db";

export async function GET() {
  const auth = await requireAdminSession();
  if ("response" in auth) return auth.response;

  try {
    const overview = await db.getAdminOverview();
    return NextResponse.json({ success: true, overview });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Failed to fetch admin overview" },
      { status: 500 }
    );
  }
}
