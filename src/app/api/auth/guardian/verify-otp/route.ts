import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";
import { getSession, setSessionCookie, SessionUser } from "@/lib/auth/session";

export const dynamic = "force-dynamic";

const verifyOtpSchema = z.object({
  studentId: z.string().optional(),
  guardianshipId: z.string().optional(),
  otpCode: z.string().trim().length(6, "Verification code must be exactly 6 digits"),
  agreedToSafeguards: z.boolean().default(true),
});

export async function POST(req: Request) {
  try {
    const session = await getSession();
    const body = await req.json();
    const parsed = verifyOtpSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation error", details: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { studentId: reqStudentId, guardianshipId: reqGuardianshipId, otpCode, agreedToSafeguards } = parsed.data;

    if (!agreedToSafeguards) {
      return NextResponse.json(
        { error: "Guardian agreement to the Child Safeguarding Policy and NDPA 2023 consent terms is mandatory." },
        { status: 400 }
      );
    }

    const studentId = reqStudentId || (session?.isMinor ? session.id : undefined);

    let guardianship = reqGuardianshipId
      ? await db.guardianships.get(reqGuardianshipId)
      : null;

    if (!guardianship && studentId) {
      guardianship = await db.findGuardianshipByStudentId(studentId);
    }

    if (!guardianship) {
      return NextResponse.json(
        { error: "No pending guardianship record found for verification" },
        { status: 404 }
      );
    }

    // Check brute-force attempts
    if (guardianship.otpAttempts >= 5) {
      return NextResponse.json(
        {
          error:
            "Maximum verification attempts exceeded. Please request a new passcode to safeguard this account.",
        },
        { status: 429 }
      );
    }

    // Check expiration
    if (new Date() > new Date(guardianship.otpExpiresAt)) {
      return NextResponse.json(
        { error: "Verification passcode has expired. Please request a new one." },
        { status: 410 }
      );
    }

    // Verify OTP code
    if (guardianship.otpCode !== otpCode.trim()) {
      await db.updateGuardianship(guardianship.id, {
        otpAttempts: guardianship.otpAttempts + 1,
      });

      return NextResponse.json(
        {
          error: "Incorrect verification passcode. Please verify the 6 digits and try again.",
          remainingAttempts: 5 - (guardianship.otpAttempts + 1),
        },
        { status: 400 }
      );
    }

    // Code matches! Record statutory consent under NDPA 2023 Section 31
    const consentTime = new Date();
    const clientIp = req.headers.get("x-forwarded-for") || "127.0.0.1";
    const userAgent = req.headers.get("user-agent") || "unknown";

    const auditLog = JSON.stringify({
      statute: "Nigeria Data Protection Act 2023 Section 31",
      event: "GUARDIAN_CONSENT_VERIFIED",
      timestamp: consentTime.toISOString(),
      studentId: guardianship.studentId,
      guardianEmail: guardianship.guardianEmail,
      guardianPhone: guardianship.guardianPhone,
      relationship: guardianship.relationship,
      ipAddress: clientIp,
      userAgent,
    });

    // Update guardianship record
    await db.updateGuardianship(guardianship.id, {
      status: "VERIFIED",
      consentGivenAt: consentTime,
      consentAuditLog: auditLog,
    });

    // Update student user to verified
    const updatedStudent = await db.updateUser(guardianship.studentId, {
      isVerified: true,
    });

    // If currently signed in as this student, refresh their session cookie
    if (session && session.id === guardianship.studentId && updatedStudent) {
      const refreshedSession: SessionUser = {
        ...session,
        isVerified: true,
      };
      await setSessionCookie(refreshedSession);
    }

    return NextResponse.json({
      success: true,
      message:
        "Guardian consent verified successfully under NDPA 2023 Section 31. Academic bookings and online tutoring are now authorized.",
      studentId: guardianship.studentId,
      verifiedAt: consentTime.toISOString(),
    });
  } catch (error) {
    console.error("[GUARDIAN_VERIFY_ERROR]", error);
    return NextResponse.json(
      { error: "Internal server error occurred while verifying passcode" },
      { status: 500 }
    );
  }
}
