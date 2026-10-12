import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminSession } from "@/lib/auth/admin";
import { db } from "@/lib/db";

const updateTutorStatusSchema = z.object({
  tutorProfileId: z.string().min(1),
  status: z.enum(["APPROVED", "PENDING_REVIEW", "SUSPENDED"]),
  notes: z.string().optional(),
});

export async function GET(req: NextRequest) {
  const auth = await requireAdminSession();
  if ("response" in auth) return auth.response;

  try {
    const { searchParams } = new URL(req.url);
    const status = searchParams.get("status") || undefined;

    const tutors = await db.listTutorsForVetting(status);
    return NextResponse.json({ success: true, tutors });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Failed to list tutors" },
      { status: 500 }
    );
  }
}

export async function PATCH(req: NextRequest) {
  const auth = await requireAdminSession();
  if ("response" in auth) return auth.response;

  try {
    const body = await req.json();
    const parsed = updateTutorStatusSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid tutor status payload", issues: parsed.error.issues },
        { status: 400 }
      );
    }

    const { tutorProfileId, status, notes } = parsed.data;
    const updated = await db.updateTutorVerification(tutorProfileId, status, auth.user.id, notes);
    return NextResponse.json({ success: true, tutor: updated });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Failed to update tutor status" },
      { status: 500 }
    );
  }
}
