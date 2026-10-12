import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminSession } from "@/lib/auth/admin";
import { db } from "@/lib/db";

const runReconciliationSchema = z.object({
  dateStr: z.string().optional(),
});

export async function GET() {
  const auth = await requireAdminSession();
  if ("response" in auth) return auth.response;

  try {
    const reports = await db.listReconciliationReports();
    return NextResponse.json({ success: true, reports });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Failed to list reconciliation reports" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  const auth = await requireAdminSession();
  if ("response" in auth) return auth.response;

  try {
    const body = await req.json().catch(() => ({}));
    const parsed = runReconciliationSchema.safeParse(body);
    const dateStr = parsed.success ? parsed.data.dateStr : undefined;

    const report = await db.runDailyReconciliation(dateStr, auth.user.id);
    return NextResponse.json({ success: true, report });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Failed to execute settlement reconciliation" },
      { status: 500 }
    );
  }
}
