import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth/session";
import { db } from "@/lib/db";
import { z } from "zod";

export const dynamic = "force-dynamic";

const cancelSchema = z.object({
  reason: z.string().min(3, "Cancellation reason is required"),
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
    const parsed = cancelSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: "Cancellation reason is required", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { reason } = parsed.data;

    try {
      const cancelled = await db.cancelBooking({
        bookingId: id,
        reason,
      });

      return NextResponse.json({
        success: true,
        booking: cancelled,
        message: "Booking has been cancelled and refund processed in accordance with tutor policy.",
      });
    } catch (err: any) {
      return NextResponse.json(
        {
          success: false,
          error: err.message || "Failed to cancel booking",
        },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("[CANCEL_ERROR]", error);
    return NextResponse.json(
      { success: false, error: "Internal server error cancelling booking" },
      { status: 500 }
    );
  }
}
