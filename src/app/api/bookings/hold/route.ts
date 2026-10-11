import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth/session";
import { db } from "@/lib/db";
import { z } from "zod";

export const dynamic = "force-dynamic";

const holdSchema = z.object({
  tutorSlug: z.string().min(1, "Tutor identifier is required"),
  slotDate: z.string().min(1, "Slot date is required"),
  slotTime: z.string().min(1, "Slot time is required"),
});

export async function POST(req: Request) {
  try {
    const session = await getSession();
    // Default to demo student if not logged in for frictionless previews
    const userId = session?.id || "usr-std-001";
    const user = await db.findUserById(userId);

    if (!user) {
      return NextResponse.json({ success: false, error: "Authentication required" }, { status: 401 });
    }

    // Minor Safeguard Gate under NDPA 2023 Section 31 & PRD BK-03
    if (user.isMinor && !user.isVerified) {
      const guardianship = await db.findGuardianshipByStudentId(user.id);
      if (!guardianship || guardianship.status !== "VERIFIED") {
        return NextResponse.json(
          {
            success: false,
            guardianConsentRequired: true,
            studentId: user.id,
            error: "Parent/Guardian consent required under NDPA 2023 Section 31 before scheduling tutoring sessions.",
          },
          { status: 403 }
        );
      }
    }

    const body = await req.json();
    const parsed = holdSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: "Invalid booking slot parameters", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { tutorSlug, slotDate, slotTime } = parsed.data;

    try {
      const hold = await db.createSlotHold({
        tutorSlug,
        studentId: user.id,
        slotDate,
        slotTime,
        durationMinutes: 10, // 10 minutes hold (BK-01)
      });

      return NextResponse.json({
        success: true,
        hold: {
          id: hold.id,
          tutorSlug: hold.tutorSlug,
          slotDate: hold.slotDate,
          slotTime: hold.slotTime,
          expiresAt: hold.expiresAt.toISOString(),
          remainingSeconds: Math.max(0, Math.ceil((hold.expiresAt.getTime() - Date.now()) / 1000)),
        },
      });
    } catch (err: any) {
      return NextResponse.json(
        {
          success: false,
          error: err.message || "Failed to reserve slot hold",
          conflict: true,
        },
        { status: 409 }
      );
    }
  } catch (error) {
    console.error("[SLOT_HOLD_ERROR]", error);
    return NextResponse.json(
      { success: false, error: "Internal server error reserving slot hold" },
      { status: 500 }
    );
  }
}
