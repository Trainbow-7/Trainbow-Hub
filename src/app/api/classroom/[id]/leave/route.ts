import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { z } from "zod";

const leaveSchema = z.object({
  attendanceId: z.string().min(1),
});

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const parsed = leaveSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid attendance parameters", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    // CL-03: Attendance recorded against the booking (Leave time and duration saved)
    const updated = await db.recordAttendanceLeave(parsed.data.attendanceId);
    if (!updated) {
      return NextResponse.json({ error: "Attendance record not found" }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      attendanceId: updated.id,
      leftAt: updated.leftAt,
      durationSeconds: updated.durationSeconds,
      status: updated.status,
    });
  } catch (error: any) {
    console.error("Error recording attendance leave:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
