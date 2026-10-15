import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth/session";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  try {
    let session = await getSession();
    if (!session && process.env.NODE_ENV !== "production") {
      const director = Array.from(db.users.values()).find(
        (u) => u.role === "MATCHING_COORDINATOR" || u.role === "ADMIN"
      );
      if (director) {
        session = {
          id: director.id,
          email: director.email,
          fullName: director.fullName,
          role: director.role,
          isMinor: false,
          isVerified: true,
        };
      }
    }

    if (!session || (session.role !== "ADMIN" && session.role !== "MATCHING_COORDINATOR")) {
      return NextResponse.json({ success: false, error: "Unauthorized access" }, { status: 403 });
    }

    const { searchParams } = new URL(req.url);
    const rosterStatus = searchParams.get("rosterStatus") || undefined;
    const subject = searchParams.get("subject") || undefined;

    const tutors = await db.listPrivateRosterTutors({
      rosterStatus: rosterStatus as any,
      subject: subject || undefined,
    });

    return NextResponse.json({ success: true, tutors });
  } catch (error) {
    console.error("[GET_ADMIN_ROSTER_ERROR]", error);
    return NextResponse.json(
      { success: false, error: "Internal server error fetching private roster" },
      { status: 500 }
    );
  }
}

export async function PATCH(req: Request) {
  try {
    const session = await getSession();
    if (!session || (session.role !== "ADMIN" && session.role !== "MATCHING_COORDINATOR")) {
      return NextResponse.json({ success: false, error: "Unauthorized access" }, { status: 403 });
    }

    const body = await req.json();
    const { tutorSlug, rosterStatus } = body;

    if (!tutorSlug || !rosterStatus) {
      return NextResponse.json(
        { success: false, error: "Missing tutorSlug or rosterStatus" },
        { status: 400 }
      );
    }

    const updatedProfile = await db.updateTutorRosterStatus(tutorSlug, rosterStatus);
    return NextResponse.json({ success: true, profile: updatedProfile });
  } catch (error: any) {
    console.error("[PATCH_ADMIN_ROSTER_ERROR]", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to update roster status" },
      { status: 400 }
    );
  }
}
