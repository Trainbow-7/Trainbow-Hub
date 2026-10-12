import { NextRequest, NextResponse } from "next/server";
import { requireGuardianSession } from "@/lib/auth/guardian";
import { db } from "@/lib/db";
import { z } from "zod";

const linkChildSchema = z.object({
  studentEmail: z.string().email("Valid student email is required"),
  otpCode: z.string().min(6, "6-digit verification code is required"),
  relationship: z.string().min(2, "Relationship is required").default("Legal Guardian"),
});

const revokeAccessSchema = z.object({
  studentId: z.string().min(1, "Student ID is required"),
  reason: z.string().optional(),
});

/**
 * POST /api/guardian/access
 * Requirement PP-05: Verified child linking workflow via OTP.
 * Students cannot unilaterally grant guardian access without verified guardian consent.
 */
export async function POST(request: NextRequest) {
  const auth = await requireGuardianSession();
  if ("response" in auth) return auth.response;

  try {
    const body = await request.json();
    const parsed = linkChildSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation error", details: parsed.error.format() },
        { status: 400 }
      );
    }

    const result = await db.verifyAndLinkChild(
      auth.user.id,
      parsed.data.studentEmail,
      parsed.data.otpCode,
      parsed.data.relationship
    );

    if (!result.success) {
      return NextResponse.json({ error: result.message }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      message: result.message,
      guardianship: result.guardianship,
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Failed to link ward" },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/guardian/access
 * Requirement PP-04: Immediate guardian access revocation taking effect instantly with audit logging.
 */
export async function DELETE(request: NextRequest) {
  const auth = await requireGuardianSession();
  if ("response" in auth) return auth.response;

  try {
    const body = await request.json();
    const parsed = revokeAccessSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation error", details: parsed.error.format() },
        { status: 400 }
      );
    }

    const revoked = await db.revokeGuardianAccess(
      auth.user.id,
      parsed.data.studentId,
      parsed.data.reason
    );

    if (!revoked) {
      return NextResponse.json(
        { error: "Active guardianship link not found for this ward" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Guardian access revoked immediately. Linked ward records are shielded per NDPA 2023.",
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Failed to revoke guardian access" },
      { status: 500 }
    );
  }
}
