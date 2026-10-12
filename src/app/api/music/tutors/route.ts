import { NextResponse } from "next/server";
import { db } from "@/lib/db";

/**
 * GET /api/music/tutors
 * Requirement MU-01: Vetted music instructor profiles for instruments, voice, and theory.
 */
export async function GET() {
  try {
    const tutors = await db.listMusicTutors();

    return NextResponse.json({
      success: true,
      count: tutors.length,
      tutors: tutors.map(({ tutor, profile }) => ({
        id: tutor.id,
        fullName: tutor.fullName,
        email: tutor.email,
        slug: profile.slug,
        title: profile.title,
        bio: profile.bio,
        teachingApproach: profile.teachingApproach,
        hourlyRateMinorUnits: profile.hourlyRateMinorUnits,
        currency: profile.currency,
        rating: profile.rating,
        completedLessons: profile.completedLessons,
        ninVerified: profile.ninVerified,
        trcnCertified: profile.trcnCertified,
        status: profile.status,
      })),
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Failed to retrieve music instructors" },
      { status: 500 }
    );
  }
}
