import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth/session";
import { requireGuardianSession } from "@/lib/auth/guardian";
import { db } from "@/lib/db";
import { z } from "zod";

const createNoteSchema = z.object({
  bookingId: z.string().min(1, "Booking ID is required"),
  tutorSlug: z.string().min(1, "Tutor slug is required"),
  studentId: z.string().min(1, "Student ID is required"),
  subject: z.string().min(1, "Subject is required"),
  summary: z.string().min(5, "Summary must be at least 5 characters"),
  homeworkAssignment: z.string().optional(),
  strengths: z.string().optional(),
  areasForImprovement: z.string().optional(),
  sessionDate: z.string().min(1, "Session date is required"),
});

/**
 * GET /api/guardian/notes
 * Requirement PP-04: Post-lesson qualitative tutor progress notes, strengths, areas for improvement, and homework.
 */
export async function GET(request: NextRequest) {
  const auth = await requireGuardianSession();
  if ("response" in auth) return auth.response;

  const url = new URL(request.url);
  const studentId = url.searchParams.get("studentId") || undefined;

  try {
    const notes = await db.getTutorProgressNotes(auth.user.id, studentId);
    return NextResponse.json({
      success: true,
      notes,
      count: notes.length,
    });
  } catch (error: any) {
    if (error?.message === "UNAUTHORIZED_WARD_ACCESS") {
      return NextResponse.json(
        { error: "Forbidden: You are not authorized to view notes for this ward (PP-04/NDPA 2023)" },
        { status: 403 }
      );
    }
    return NextResponse.json(
      { error: error?.message || "Failed to fetch tutor progress notes" },
      { status: 500 }
    );
  }
}

/**
 * POST /api/guardian/notes
 * Tutors / Admins can publish post-lesson progress notes.
 */
export async function POST(request: NextRequest) {
  const user = await getSession();
  if (!user) {
    return NextResponse.json({ error: "Authentication required" }, { status: 401 });
  }

  if (user.role !== "TUTOR" && user.role !== "ADMIN") {
    return NextResponse.json(
      { error: "Forbidden: Only tutors or administrators can publish lesson progress notes" },
      { status: 403 }
    );
  }

  try {
    const body = await request.json();
    const parsed = createNoteSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation error", details: parsed.error.format() },
        { status: 400 }
      );
    }

    const note = await db.createTutorProgressNote(parsed.data);
    return NextResponse.json({
      success: true,
      note,
      message: "Tutor progress note recorded successfully.",
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Failed to create tutor progress note" },
      { status: 500 }
    );
  }
}
