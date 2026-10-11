import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth/session";
import { db } from "@/lib/db";
import { z } from "zod";

export const dynamic = "force-dynamic";

const rescheduleSchema = z.object({
  newSlotDate: z.string().min(1, "New date is required"),
  newSlotTime: z.string().min(1, "New time is required"),
});

export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const session = await getSession();
    const userId = session?.id || "usr-std-001";
    const user = await db.findUserById(userId);

    if (!user) {
      return NextResponse.json({ success: false, error: "Authentication required" }, { status: 401 });
    }

    const body = await req.json();
    const parsed = rescheduleSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: "Invalid reschedule parameters", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { newSlotDate, newSlotTime } = parsed.data;

    try {
      const rescheduled = await db.rescheduleBooking({
        bookingId: id,
        newSlotDate,
        newSlotTime,
      });

      return NextResponse.json({
        success: true,
        booking: rescheduled,
        message: `Session successfully rescheduled to ${newSlotDate} at ${newSlotTime}.`,
      });
    } catch (err: any) {
      return NextResponse.json(
        {
          success: false,
          error: err.message || "Failed to reschedule session",
          conflict: true,
        },
        { status: 409 }
      );
    }
  } catch (error) {
    console.error("[RESCHEDULE_ERROR]", error);
    return NextResponse.json(
      { success: false, error: "Internal server error rescheduling booking" },
      { status: 500 }
    );
  }
}
