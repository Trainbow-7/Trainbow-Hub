import { NextRequest, NextResponse } from "next/server";
import { requireGuardianSession } from "@/lib/auth/guardian";
import { db } from "@/lib/db";
import { z } from "zod";

const updatePrefSchema = z.object({
  emailAlerts: z.boolean().optional(),
  smsAlerts: z.boolean().optional(),
  whatsappAlerts: z.boolean().optional(),
  digestFrequency: z.enum(["REALTIME", "DAILY_DIGEST", "WEEKLY_SUMMARY"]).optional(),
});

/**
 * GET /api/guardian/notifications
 * Requirement PP-03: Privacy-first notification preferences with mandatory generic lockscreen previews.
 */
export async function GET() {
  const auth = await requireGuardianSession();
  if ("response" in auth) return auth.response;

  try {
    const preferences = await db.getGuardianNotificationPreferences(auth.user.id);
    return NextResponse.json({
      success: true,
      preferences,
      // PP-03 NDPA 2023 Compliance demonstration text
      lockscreenPreviewSample: "Trainbow Hub: New activity update for your ward",
      ndpaComplianceNote: "Under NDPA 2023 Section 31, lockscreen push notifications never expose child names, specific test scores, or private lesson details.",
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Failed to fetch notification preferences" },
      { status: 500 }
    );
  }
}

/**
 * PUT /api/guardian/notifications
 * Updates guardian notification delivery channels and digest frequency.
 */
export async function PUT(request: NextRequest) {
  const auth = await requireGuardianSession();
  if ("response" in auth) return auth.response;

  try {
    const body = await request.json();
    const parsed = updatePrefSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation error", details: parsed.error.format() },
        { status: 400 }
      );
    }

    const updated = await db.updateGuardianNotificationPreferences(auth.user.id, parsed.data);
    return NextResponse.json({
      success: true,
      preferences: updated,
      message: "Notification preferences updated successfully with privacy protections active.",
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Failed to update notification preferences" },
      { status: 500 }
    );
  }
}
