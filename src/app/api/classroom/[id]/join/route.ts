import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { z } from "zod";

const joinSchema = z.object({
  sessionId: z.string().min(1),
  userId: z.string().min(1),
  role: z.enum(["STUDENT", "TUTOR", "GUARDIAN"]),
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

    if (booking.bookingStatus === "CANCELLED") {
      return NextResponse.json(
        { error: "Cannot join a cancelled session" },
        { status: 410 }
      );
    }

    const body = await request.json();
    const parsed = joinSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid attendance parameters", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    // CL-03: Attendance recorded against the booking (Join time saved)
    const attendance = await db.recordAttendanceJoin({
      sessionId: parsed.data.sessionId,
      bookingId,
      userId: parsed.data.userId,
      role: parsed.data.role,
    });

    return NextResponse.json({
      success: true,
      attendanceId: attendance.id,
      joinedAt: attendance.joinedAt,
      role: attendance.role,
    });
  } catch (error: any) {
    console.error("Error recording attendance join:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
