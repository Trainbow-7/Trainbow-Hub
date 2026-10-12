import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { requireAdminSession } from "@/lib/auth/admin";

interface RouteParams {
  params: {
    slug: string;
  };
}

// GET /api/subjects/[slug]
// Returns full subject profile with associated courses, verified tutors, and AI availability
export async function GET(
  request: NextRequest,
  { params }: RouteParams
) {
  try {
    const slug = params.slug.toLowerCase().trim();
    const subject = await db.getSubjectBySlug(slug);

    if (!subject) {
      return NextResponse.json(
        { error: `Subject with slug '${slug}' not found` },
        { status: 404 }
      );
    }

    // 1. Fetch courses under this subject
    const allCourses = Array.from(db.authoringCourses.values());
    const courses = allCourses.filter(
      (c) => c.subjectSlug.toLowerCase() === slug || (slug === "mathematics" && c.slug === "sss3-algebra-calculus")
    );

    // 2. Fetch tutors qualified for this subject
    const qualifications = await db.listTutorSubjectQualifications({
      subjectSlug: slug,
      status: "APPROVED",
    });

    const qualifiedTutorSlugs = new Set(qualifications.map((q) => q.tutorSlug));
    const allTutors = Array.from(db.tutorProfiles.values());
    const tutors = allTutors
      .filter((t) => qualifiedTutorSlugs.has(t.slug) && t.status === "APPROVED")
      .map((t) => {
        const u = db.users.get(t.userId);
        return {
          ...t,
          fullName: u?.fullName || "Verified Tutor",
        };
      });

    return NextResponse.json({
      success: true,
      subject,
      courses,
      tutors,
      qualificationsCount: qualifications.length,
    });
  } catch (error: any) {
    console.error("GET /api/subjects/[slug] error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to fetch subject details" },
      { status: 500 }
    );
  }
}

// PATCH /api/subjects/[slug]
// Admin-only updates to subject status, commission override, pricing tier, levels (SB-01, SB-09)
export async function PATCH(
  request: NextRequest,
  { params }: RouteParams
) {
  const auth = await requireAdminSession();
  if ("response" in auth) return auth.response;
  const adminUser = auth.user;

  try {
    const slug = params.slug.toLowerCase().trim();
    const existing = await db.getSubjectBySlug(slug);
    if (!existing) {
      return NextResponse.json(
        { error: `Subject '${slug}' not found` },
        { status: 404 }
      );
    }

    const body = await request.json();
    const {
      name,
      description,
      category,
      levels,
      deliveryFormats,
      status,
      pricingTierMinorUnits,
      commissionRatePercent,
      icon,
      color,
      aiVerificationMethod,
      aiGroundingSummary,
    } = body;

    const updates: any = {};
    if (name !== undefined) updates.name = name;
    if (description !== undefined) updates.description = description;
    if (category !== undefined) updates.category = category;
    if (levels !== undefined) updates.levels = levels;
    if (deliveryFormats !== undefined) updates.deliveryFormats = deliveryFormats;
    if (status !== undefined) updates.status = status;
    if (pricingTierMinorUnits !== undefined) updates.pricingTierMinorUnits = Number(pricingTierMinorUnits);
    if (commissionRatePercent !== undefined) updates.commissionRatePercent = Number(commissionRatePercent);
    if (icon !== undefined) updates.icon = icon;
    if (color !== undefined) updates.color = color;
    if (aiVerificationMethod !== undefined) updates.aiVerificationMethod = aiVerificationMethod;
    if (aiGroundingSummary !== undefined) updates.aiGroundingSummary = aiGroundingSummary;

    const updated = await db.updateSubject(slug, updates);

    await db.logAdminAudit({
      adminId: adminUser.id,
      action: "UPDATE_SUBJECT",
      targetType: "SUBJECT",
      targetId: slug,
      beforeState: { status: existing.status, commissionRatePercent: existing.commissionRatePercent },
      afterState: updates,
    });

    return NextResponse.json({
      success: true,
      subject: updated,
    });
  } catch (error: any) {
    console.error("PATCH /api/subjects/[slug] error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to update subject" },
      { status: 400 }
    );
  }
}
