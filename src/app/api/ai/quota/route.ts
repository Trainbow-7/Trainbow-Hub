import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth/session";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  try {
    const session = await getSession();
    const userId = req.headers.get("x-user-id") || session?.id || "usr-std-001";
    const user = await db.findUserById(userId);

    if (!user) {
      return NextResponse.json(
        { success: false, error: "Authentication required" },
        { status: 401 }
      );
    }

    const quota = await db.getOrCreateUserQuota(user.id, user.role);

    return NextResponse.json({
      success: true,
      quota: {
        userId: user.id,
        role: user.role,
        queryCount: quota.queryCount,
        remaining: Math.max(0, quota.maxQuota - quota.queryCount),
        maxQuota: quota.maxQuota,
        resetAt: quota.resetAt,
      },
    });
  } catch (error) {
    console.error("[GET_AI_QUOTA_ERROR]", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch AI quota" },
      { status: 500 }
    );
  }
}
