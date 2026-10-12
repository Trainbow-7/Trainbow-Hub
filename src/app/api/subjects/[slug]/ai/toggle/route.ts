import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { requireAdminSession } from "@/lib/auth/admin";

interface RouteParams {
  params: {
    slug: string;
  };
}

// POST /api/subjects/[slug]/ai/toggle
// Admin toggles AI Socratic Assistant availability for a subject (SB-05, SB-06)
export async function POST(
  request: NextRequest,
  { params }: RouteParams
) {
  const auth = await requireAdminSession();
  if ("response" in auth) return auth.response;
  const adminUser = auth.user;

  try {
    const slug = params.slug.toLowerCase().trim();
    const body = await request.json();
    const { enabled } = body;

    if (typeof enabled !== "boolean") {
      return NextResponse.json(
        { error: "Field 'enabled' (boolean) is required" },
        { status: 400 }
      );
    }

    const result = await db.toggleSubjectAI(slug, enabled, adminUser.id);
    if (!result.success) {
      return NextResponse.json(
        { error: result.error || "Failed to toggle subject AI" },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      subject: result.subject,
      message: enabled
        ? `AI Socratic Assistant successfully activated for ${result.subject?.name}.`
        : `AI Socratic Assistant disabled for ${result.subject?.name}.`,
    });
  } catch (error: any) {
    console.error("POST /api/subjects/[slug]/ai/toggle error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to toggle AI status" },
      { status: 400 }
    );
  }
}
