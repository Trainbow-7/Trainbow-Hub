import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth/session";
import { db } from "@/lib/db";

export async function GET(req: Request) {
  try {
    let session = await getSession();
    const { searchParams } = new URL(req.url);
    const tutorSlug = searchParams.get("tutorSlug");

    // In dev mode allow test fallback if session not established
    const targetSlug = tutorSlug || session?.tutorProfileSlug || "dr-tayo-okafor";
    const profile = db.tutorProfiles.get(targetSlug);

    if (!profile) {
      return NextResponse.json({ success: false, error: "Tutor profile not found" }, { status: 404 });
    }

    const user = Array.from(db.users.values()).find((u) => u.id === profile.userId);

    return NextResponse.json({
      success: true,
      profile: {
        ...profile,
        rosterStatus: profile.rosterStatus || "AVAILABLE_NOW",
      },
      user: user
        ? {
            id: user.id,
            fullName: user.fullName,
            email: user.email,
            phoneNumber: user.phoneNumber,
          }
        : null,
    });
  } catch (error) {
    console.error("[GET_TUTOR_AVAILABILITY_ERROR]", error);
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    let session = await getSession();
    const body = await req.json();
    const { tutorSlug, rosterStatus } = body;

    const targetSlug = tutorSlug || session?.tutorProfileSlug || "dr-tayo-okafor";

    if (!rosterStatus) {
      return NextResponse.json(
        { success: false, error: "Missing rosterStatus parameter" },
        { status: 400 }
      );
    }

    const updated = await db.updateTutorRosterStatus(targetSlug, rosterStatus);

    return NextResponse.json({
      success: true,
      profile: {
        ...updated,
        rosterStatus: updated.rosterStatus,
      },
      message: `Availability updated to ${rosterStatus.replace(/_/g, " ")}.`,
    });
  } catch (error: any) {
    console.error("[POST_TUTOR_AVAILABILITY_ERROR]", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to update availability" },
      { status: 500 }
    );
  }
}
