import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth/session";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  const sessionUser = await getSession();

  if (!sessionUser) {
    return NextResponse.json({ user: null });
  }

  // Refresh user record from database in case verified state changed
  const user = await db.findUserById(sessionUser.id);
  if (!user) {
    return NextResponse.json({ user: null });
  }

  // If user is a minor, fetch guardianship record
  let guardianship = null;
  if (user.isMinor) {
    guardianship = await db.findGuardianshipByStudentId(user.id);
  }

  // If user is a parent, fetch wards
  let wards = null;
  if (user.role === "PARENT") {
    const parentGuardianships = await db.findGuardianshipsByGuardianId(user.id);
    wards = await Promise.all(
      parentGuardianships.map(async (g) => {
        const student = await db.findUserById(g.studentId);
        return {
          guardianshipId: g.id,
          studentId: g.studentId,
          studentName: student?.fullName ?? "Ward",
          relationship: g.relationship,
          status: g.status,
          consentGivenAt: g.consentGivenAt,
        };
      })
    );
  }

  return NextResponse.json({
    user: {
      id: user.id,
      email: user.email,
      fullName: user.fullName,
      role: user.role,
      isMinor: user.isMinor,
      isVerified: user.isVerified,
      phoneNumber: user.phoneNumber,
      dateOfBirth: user.dateOfBirth,
      tutorProfileSlug: sessionUser.tutorProfileSlug,
    },
    guardianship: guardianship
      ? {
          id: guardianship.id,
          status: guardianship.status,
          relationship: guardianship.relationship,
          guardianPhone: guardianship.guardianPhone,
          guardianEmail: guardianship.guardianEmail,
          consentGivenAt: guardianship.consentGivenAt,
          otpExpiresAt: guardianship.otpExpiresAt,
        }
      : null,
    wards,
  });
}
