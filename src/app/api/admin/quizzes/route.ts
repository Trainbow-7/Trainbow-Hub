import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth/session";
import { assessmentDb } from "@/lib/assessment/db";
import { z } from "zod";

const UpdateItemSchema = z.object({
  itemId: z.string().min(1),
  action: z.enum(["approve", "reject", "edit"]),
  updates: z.object({
    reviewStatus: z.enum(["needs_teacher_review", "teacher_approved", "rejected"]).optional(),
    prompt: z.string().optional(),
    explanation: z.string().optional(),
    hint: z.string().optional(),
    difficultyScore: z.number().min(1).max(5).optional(),
  }).optional(),
});

export async function GET(req: NextRequest) {
  try {
    const session = await getSession();
    // Allow admin access or in development mode
    if (process.env.NODE_ENV === "production" && session?.role !== "ADMIN" && session?.role !== "TUTOR") {
      return NextResponse.json({ success: false, error: "Unauthorized: Teacher or Admin role required" }, { status: 403 });
    }

    const { searchParams } = new URL(req.url);
    const courseSlug = searchParams.get("courseSlug") || undefined;
    const moduleId = searchParams.get("moduleId") || undefined;
    const lessonId = searchParams.get("lessonId") || undefined;
    const reviewStatus = searchParams.get("reviewStatus") as any || undefined;
    const reportedOnly = searchParams.get("reportedOnly") === "true";
    const search = searchParams.get("search") || undefined;

    const items = assessmentDb.listAssessmentItems({
      courseSlug,
      moduleId,
      lessonId,
      reviewStatus,
      reportedOnly,
      search,
    });

    return NextResponse.json({
      success: true,
      count: items.length,
      items,
    });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getSession();
    if (process.env.NODE_ENV === "production" && session?.role !== "ADMIN" && session?.role !== "TUTOR") {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 403 });
    }

    const body = await req.json();
    const parsed = UpdateItemSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ success: false, error: "Invalid payload", details: parsed.error.issues }, { status: 400 });
    }

    const { itemId, action, updates } = parsed.data;

    let newStatus = updates?.reviewStatus;
    if (action === "approve") newStatus = "teacher_approved";
    if (action === "reject") newStatus = "rejected";

    const updated = assessmentDb.updateAssessmentItem(itemId, {
      ...(updates || {}),
      ...(newStatus ? { reviewStatus: newStatus } : {}),
    });

    return NextResponse.json({
      success: true,
      item: updated,
    });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

