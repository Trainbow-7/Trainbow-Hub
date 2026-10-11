import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth/session";
import { db } from "@/lib/db";
import { z } from "zod";

const AuthoringCourseSchema = z.object({
  title: z.string().min(3),
  slug: z.string().min(3),
  subjectSlug: z.string().min(2),
  level: z.string().min(2),
  status: z.enum(["DRAFT", "IN_REVIEW", "PUBLISHED"]).default("DRAFT"),
  version: z.number().optional(),
  changelog: z.string().optional(),
  priceMinorUnits: z.number().default(0),
  shortDescription: z.string().min(10),
  fullDescription: z.string().min(20),
  syllabus: z.array(z.any()).default([]),
});

export async function GET() {
  try {
    const session = await getSession();
    // Use tutor user or default demo tutor
    const authorId = session?.id || "usr-tut-004";

    const courses = await db.findAuthoringCoursesByAuthorId(authorId);
    return NextResponse.json({
      success: true,
      courses,
    });
  } catch (error) {
    console.error("Failed to load authoring courses:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getSession();
    const authorId = session?.id || "usr-tut-004";

    const body = await req.json();
    const validation = AuthoringCourseSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { success: false, error: "Validation failed", details: validation.error.flatten() },
        { status: 400 }
      );
    }

    const data = validation.data;
    const existing = await db.findAuthoringCourseBySlug(data.slug);

    // If publishing from draft/review, increment version number
    let nextVersion = data.version || (existing ? existing.version : 1);
    if (data.status === "PUBLISHED" && existing && existing.status !== "PUBLISHED") {
      nextVersion = existing.version + 1;
    }

    const course = await db.createOrUpdateAuthoringCourse({
      authorId,
      ...data,
      version: nextVersion,
    });

    return NextResponse.json({
      success: true,
      course,
    });
  } catch (error) {
    console.error("Failed to save authoring course:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
