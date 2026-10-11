import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { z } from "zod";

const completeSchema = z.object({
  tutorSlug: z.string().min(1),
});

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const bookingId = params.id;
    const booking = await db.findBookingById(bookingId);

    if (!booking) {
      return NextResponse.json({ error: "Booking not found" }, { status: 404 });
    }

    const body = await request.json();
    const parsed = completeSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid completion data", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const result = await db.completeSessionAndBooking(bookingId, parsed.data.tutorSlug);

    return NextResponse.json({
      success: true,
      message: "Lesson marked as COMPLETED. Review form unlocked and earnings settlement finalized.",
      booking: {
        ...result.booking,
        status: result.booking.bookingStatus,
      },
      session: result.session,
    });
  } catch (error: any) {
    console.error("Error completing session:", error);
    return NextResponse.json({ error: error.message || "Internal server error" }, { status: 500 });
  }
}
