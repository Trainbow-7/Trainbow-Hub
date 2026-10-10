import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";
import { hashPassword } from "@/lib/auth/password";
import { setSessionCookie, SessionUser } from "@/lib/auth/session";
import { isMinorFromDob, generate6DigitOtp } from "@/lib/auth/utils";
import { messagingAdapter } from "@/lib/adapters/messaging";

export const dynamic = "force-dynamic";

const registerSchema = z.object({
  fullName: z.string().trim().min(2, "Full name must be at least 2 characters"),
  email: z.string().trim().email("Please provide a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  phoneNumber: z.string().trim().optional(),
  role: z.enum(["STUDENT", "PARENT", "TUTOR"]).default("STUDENT"),
  dateOfBirth: z.string().optional(),
  // Minor safeguard fields (NDPA 2023)
  guardianName: z.string().trim().optional(),
  guardianEmail: z.string().trim().email().optional().or(z.literal("")),
  guardianPhone: z.string().trim().optional(),
  guardianRelationship: z.string().trim().optional(),
  // Tutor fields
  title: z.string().trim().optional(),
  bio: z.string().trim().optional(),
  hourlyRateMinorUnits: z.number().optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = registerSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Validation error",
          details: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const {
      fullName,
      email,
      password,
      phoneNumber,
      role,
      dateOfBirth,
      guardianName,
      guardianEmail,
      guardianPhone,
      guardianRelationship,
      title,
      bio,
      hourlyRateMinorUnits,
    } = parsed.data;

    // Check if email already registered
    const existing = await db.findUserByEmail(email);
    if (existing) {
      return NextResponse.json(
        { error: "An account with this email address already exists. Please log in." },
        { status: 409 }
      );
    }

    // Determine minor status under NDPA 2023 Section 31
    const isMinor = role === "STUDENT" && !!dateOfBirth && isMinorFromDob(dateOfBirth);

    // If minor, require guardian details
    if (isMinor) {
      if (!guardianEmail && !guardianPhone) {
        return NextResponse.json(
          {
            error: "Minor safeguard requirement",
            details: {
              guardianContact: [
                "Under NDPA 2023, learners under 18 require a parent or guardian's email or phone number for verification.",
              ],
            },
          },
          { status: 400 }
        );
      }
    }

    // Adult students and parents are verified directly; minors and tutors require validation/vetting
    const isVerified = role === "STUDENT" ? !isMinor : role === "PARENT";

    // Hash password securely via scrypt
    const passwordHash = await hashPassword(password);

    // Create user record
    const user = await db.createUser({
      email,
      fullName,
      passwordHash,
      phoneNumber: phoneNumber || undefined,
      role,
      dateOfBirth: dateOfBirth || undefined,
      isMinor,
      isVerified,
    });

    let guardianshipId: string | undefined;

    // Minor consent flow
    if (isMinor) {
      const otpCode = generate6DigitOtp();
      const guardianTargetEmail = guardianEmail || `${email}.guardian@trainbowhub.ng`;
      const guardianTargetPhone = guardianPhone || phoneNumber || "+2348000000000";

      const guardianship = await db.createGuardianship({
        studentId: user.id,
        guardianId: "pending-guardian-account",
        relationship: guardianRelationship || "Parent / Legal Guardian",
        status: "PENDING_OTP",
        guardianPhone: guardianTargetPhone,
        guardianEmail: guardianTargetEmail,
        otpCode,
        otpExpiresAt: new Date(Date.now() + 15 * 60 * 1000), // 15 minutes
        otpAttempts: 0,
      });

      guardianshipId = guardianship.id;

      // Dispatch OTP via messaging adapter (SMS or Email)
      await messagingAdapter.sendGuardianConsentOTP({
        target: guardianEmail ? guardianEmail : guardianTargetPhone,
        channel: guardianEmail ? "email" : "sms",
        otpCode,
        studentName: fullName,
      });
    }

    // If tutor, create profile
    let tutorProfileSlug: string | undefined;
    if (role === "TUTOR") {
      const slug = fullName
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

      const profile = await db.createTutorProfile({
        userId: user.id,
        slug: `${slug}-${user.id.slice(-4)}`,
        title: title || "Mathematics & Academic Tutor",
        bio: bio || "Experienced educator dedicated to student excellence.",
        teachingApproach: "First principles reasoning and Socratic method.",
        hourlyRateMinorUnits: hourlyRateMinorUnits || 600000, // ₦6,000 default
        currency: "NGN",
        rating: 5.0,
        completedLessons: 0,
        ninVerified: false,
        backgroundChecked: false,
        trcnCertified: false,
        status: "PENDING_REVIEW",
      });
      tutorProfileSlug = profile.slug;
    }

    // Construct session payload
    const sessionUser: SessionUser = {
      id: user.id,
      email: user.email,
      fullName: user.fullName,
      role: user.role,
      isMinor: user.isMinor,
      isVerified: user.isVerified,
      tutorProfileSlug,
    };

    // Set HTTP-only session cookie
    await setSessionCookie(sessionUser);

    return NextResponse.json(
      {
        success: true,
        user: sessionUser,
        requiresGuardianConsent: isMinor,
        guardianshipId,
        message: isMinor
          ? "Account registered. Guardian verification OTP sent per NDPA 2023 safeguards."
          : "Account created successfully.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[REGISTER_ERROR]", error);
    return NextResponse.json(
      { error: "Internal server error occurred during registration" },
      { status: 500 }
    );
  }
}
