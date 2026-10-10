import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";
import { verifyPassword } from "@/lib/auth/password";
import { setSessionCookie, SessionUser } from "@/lib/auth/session";

export const dynamic = "force-dynamic";

const loginSchema = z.object({
  email: z.string().trim().email("Please provide a valid email address"),
  password: z.string().min(1, "Password is required"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = loginSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Validation error",
          details: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { email, password } = parsed.data;

    // Look up user
    const user = await db.findUserByEmail(email);
    if (!user) {
      return NextResponse.json(
        { error: "Invalid email or password combination. Please verify your credentials." },
        { status: 401 }
      );
    }

    // Verify password via constant-time scrypt comparison
    const isValid = await verifyPassword(password, user.passwordHash);
    if (!isValid) {
      return NextResponse.json(
        { error: "Invalid email or password combination. Please verify your credentials." },
        { status: 401 }
      );
    }

    // If tutor, retrieve tutor profile slug
    let tutorProfileSlug: string | undefined;
    if (user.role === "TUTOR") {
      const profile = await db.findTutorProfileByUserId(user.id);
      tutorProfileSlug = profile?.slug;
    }

    // Construct session user
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

    // If minor, check if guardianship consent is still pending
    let pendingGuardianConsent = false;
    if (user.isMinor && !user.isVerified) {
      const guardianship = await db.findGuardianshipByStudentId(user.id);
      if (guardianship && guardianship.status === "PENDING_OTP") {
        pendingGuardianConsent = true;
      }
    }

    return NextResponse.json({
      success: true,
      user: sessionUser,
      pendingGuardianConsent,
    });
  } catch (error) {
    console.error("[LOGIN_ERROR]", error);
    return NextResponse.json(
      { error: "Internal server error occurred during login" },
      { status: 500 }
    );
  }
}
