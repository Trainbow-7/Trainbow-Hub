import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminSession } from "@/lib/auth/admin";
import { db } from "@/lib/db";

const updateAlertSchema = z.object({
  alertId: z.string().min(1),
  status: z.enum(["ACTIVE", "ACKNOWLEDGED", "RESOLVED"]),
});

export async function GET(req: NextRequest) {
  const auth = await requireAdminSession();
  if ("response" in auth) return auth.response;

  try {
    const { searchParams } = new URL(req.url);
    const status = searchParams.get("status") || undefined;

    const alerts = await db.listOperationalAlerts(status);
    return NextResponse.json({ success: true, alerts });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Failed to list operational alerts" },
      { status: 500 }
    );
  }
}

export async function PATCH(req: NextRequest) {
  const auth = await requireAdminSession();
  if ("response" in auth) return auth.response;

  try {
    const body = await req.json();
    const parsed = updateAlertSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid alert update payload", issues: parsed.error.issues },
        { status: 400 }
      );
    }

    const { alertId, status } = parsed.data;
    const updated = await db.updateOperationalAlertStatus(alertId, status, auth.user.id);
    return NextResponse.json({ success: true, alert: updated });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Failed to update alert" },
      { status: 500 }
    );
  }
}
