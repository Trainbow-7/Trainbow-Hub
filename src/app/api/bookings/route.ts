import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth/session";
import { db } from "@/lib/db";
import { SEED_TUTORS } from "@/lib/data/seed-data";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  try {
    const session = await getSession();
    const userId = session?.id || "usr-std-001";
    const user = await db.findUserById(userId);

    if (!user) {
      return NextResponse.json({ success: false, error: "Authentication required" }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const tutorSlugParam = searchParams.get("tutorSlug");

    let bookings: any[] = [];
    let ledgerEntries: any[] = [];

    if (user.role === "TUTOR" || tutorSlugParam) {
      const tutorSlug = tutorSlugParam || user.tutorProfileSlug || "dr-tayo-okafor";
      bookings = await db.findBookingsByTutorSlug(tutorSlug);
      ledgerEntries = await db.findLedgerEntriesByTutorSlug(tutorSlug);
    } else {
      bookings = await db.findBookingsByStudentId(user.id);
    }

    // Hydrate with tutor avatar & contact details
    const hydrated = bookings.map((b) => {
      const tutor = SEED_TUTORS.find((t) => t.slug === b.tutorSlug);
      return {
        ...b,
        tutorTitle: tutor?.title || "Lead Subject Specialist",
        tutorAvatarText: tutor?.avatarText || "TR",
        cancellationPolicy: tutor?.cancellationPolicy || "Full refund if cancelled > 24 hours prior.",
        weeklyAvailability: tutor?.weeklyAvailability || [],
      };
    });

    return NextResponse.json({
      success: true,
      role: user.role,
      bookings: hydrated,
      ledgerEntries,
    });
  } catch (error) {
    console.error("[GET_BOOKINGS_ERROR]", error);
    return NextResponse.json(
      { success: false, error: "Internal server error fetching bookings" },
      { status: 500 }
    );
  }
}
