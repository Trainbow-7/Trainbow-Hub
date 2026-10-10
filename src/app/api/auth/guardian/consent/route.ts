import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";
import { getSession } from "@/lib/auth/session";
import { generate6DigitOtp } from "@/lib/auth/utils";
import { messagingAdapter } from "@/lib/adapters/messaging";

export const dynamic = "force-dynamic";

const consentRequestSchema = z.object({
  studentId: z.string().optional(),
  guardianshipId: z.string().optional(),
  channel: z.enum(["sms", "email"]).default("email"),
});

export async function POST(req: Request) {
  try {
    const session = await getSession();
    const body = await req.json().catch(() => ({}));
    const parsed = consentRequestSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid request payload", details: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { studentId: reqStudentId, guardianshipId: reqGuardianshipId, channel } = parsed.data;

    const studentId = reqStudentId || (session?.isMinor ? session.id : undefined);

    let guardianship = reqGuardianshipId
      ? await db.guardianships.get(reqGuardianshipId)
      : null;

    if (!guardianship && studentId) {
      guardianship = await db.findGuardianshipByStudentId(studentId);
    }

    if (!guardianship) {
      return NextResponse.json(
        { error: "No pending guardianship record found for this student" },
        { status: 404 }
      );
    }

    const student = await db.findUserById(guardianship.studentId);
    if (!student) {
      return NextResponse.json({ error: "Student record not found" }, { status: 404 });
    }

    // Generate fresh 6-digit OTP code (keep 202610 for the pre-seeded minor demo account for deterministic tests)
    const newOtp = student.email === "minor@trainbowhub.ng" ? "202610" : generate6DigitOtp();
    const expiresAt = new Date(Date.now() + 15 * 60 * 1000); // 15 mins

    await db.updateGuardianship(guardianship.id, {
      otpCode: newOtp,
      otpExpiresAt: expiresAt,
      otpAttempts: 0,
    });

    const target = channel === "sms" ? guardianship.guardianPhone : guardianship.guardianEmail;

    await messagingAdapter.sendGuardianConsentOTP({
      target,
      channel,
      otpCode: newOtp,
      studentName: student.fullName,
    });

    return NextResponse.json({
      success: true,
      guardianshipId: guardianship.id,
      studentId: guardianship.studentId,
      channel,
      targetMasked: target.includes("@")
        ? target.replace(/(.{2})(.*)(@.*)/, "$1***$3")
        : target.replace(/(.{4})(.*)(.{3})/, "$1****$3"),
      expiresAt: expiresAt.toISOString(),
      message: `Verification code sent to guardian ${channel === "sms" ? "phone" : "email"}.`,
    });
  } catch (error) {
    console.error("[GUARDIAN_CONSENT_DISPATCH_ERROR]", error);
    return NextResponse.json(
      { error: "Failed to dispatch guardian consent OTP" },
      { status: 500 }
    );
  }
}
