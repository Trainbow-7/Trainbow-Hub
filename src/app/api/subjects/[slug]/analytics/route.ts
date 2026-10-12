import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { requireAdminSession } from "@/lib/auth/admin";

interface RouteParams {
  params: {
    slug: string;
  };
}

// GET /api/subjects/[slug]/analytics
// Admin-only per-subject operational analytics (SB-08)
export async function GET(
  request: NextRequest,
  { params }: RouteParams
) {
  const auth = await requireAdminSession();
  if ("response" in auth) return auth.response;

  try {
    const slug = params.slug.toLowerCase().trim();
    const subject = await db.getSubjectBySlug(slug);
    if (!subject) {
      return NextResponse.json(
        { error: `Subject '${slug}' not found` },
        { status: 404 }
      );
    }

    const analytics = await db.getSubjectAnalytics(slug);

    return NextResponse.json({
      success: true,
      subject: {
        name: subject.name,
        slug: subject.slug,
        status: subject.status,
        commissionRatePercent: subject.commissionRatePercent,
        pricingTierMinorUnits: subject.pricingTierMinorUnits,
        aiEnabled: subject.aiEnabled,
      },
      analytics,
    });
  } catch (error: any) {
    console.error("GET /api/subjects/[slug]/analytics error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to fetch subject analytics" },
      { status: 500 }
    );
  }
}
