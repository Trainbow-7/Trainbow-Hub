import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth/session";
import { db } from "@/lib/db";

/**
 * GET /api/music/practice-logs
 * Requirement MU-03: Music practice logs and progress notes.
 * Learners and guardians view student practice entries with tempo, pieces, and minutes.
 */
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const session = await getSession();

    const studentId = searchParams.get("studentId") || session?.id || "usr-std-001";
    const logs = await db.getStudentPracticeLogs(studentId);

    return NextResponse.json({
      success: true,
      studentId,
      count: logs.length,
      logs,
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Failed to retrieve student practice logs" },
      { status: 500 }
    );
  }
}

/**
 * POST /api/music/practice-logs
 * Requirement MU-03: Create new music rehearsal entry with tempo BPM and pieces.
 */
export async function POST(request: Request) {
  try {
    const session = await getSession();
    const body = await request.json();

    const {
      studentId: requestedStudentId,
      instrument,
      durationMinutes,
      piecesPracticed,
      tempoBpm,
      notes,
      practicedAt,
    } = body;

    const studentId = requestedStudentId || session?.id || "usr-std-001";

    if (!instrument || !piecesPracticed || !durationMinutes) {
      return NextResponse.json(
        { error: "Instrument, duration in minutes, and pieces practiced are required." },
        { status: 400 }
      );
    }

    const minutes = Number(durationMinutes);
    if (isNaN(minutes) || minutes <= 0) {
      return NextResponse.json(
        { error: "Duration must be a positive number of minutes." },
        { status: 400 }
      );
    }

    const created = await db.createMusicPracticeLog({
      studentId,
      instrument: instrument.trim(),
      durationMinutes: minutes,
      piecesPracticed: piecesPracticed.trim(),
      tempoBpm: tempoBpm ? Number(tempoBpm) : undefined,
      notes: notes ? notes.trim() : undefined,
      practicedAt: practicedAt ? new Date(practicedAt) : new Date(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Practice session logged successfully.",
        log: created,
      },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Failed to log practice session" },
      { status: 500 }
    );
  }
}
