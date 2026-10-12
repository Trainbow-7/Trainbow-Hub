import { NextRequest, NextResponse } from "next/server";
import { db, SubjectStatus } from "@/lib/db";
import { requireAdminSession } from "@/lib/auth/admin";
import { getSession } from "@/lib/auth/session";

// GET /api/subjects
// Public listing of active subjects; admins can query all or filter by status
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category") || undefined;
    const aiEnabledParam = searchParams.get("aiEnabled");
    const aiEnabled = aiEnabledParam !== null ? aiEnabledParam === "true" : undefined;
    const all = searchParams.get("all") === "true";
    const requestedStatus = searchParams.get("status") as SubjectStatus | undefined;

    // Check if requester is admin
    const currentUser = await getSession();
    const isAdmin = currentUser?.role === "ADMIN";

    let status: SubjectStatus | undefined = "ACTIVE";
    if (isAdmin && (all || requestedStatus)) {
      status = requestedStatus && requestedStatus !== ("ALL" as any) ? requestedStatus : undefined;
    }

    const subjects = await db.listSubjects({
      status,
      category,
      aiEnabled,
    });

    return NextResponse.json({
      success: true,
      subjects,
      count: subjects.length,
    });
  } catch (error: any) {
    console.error("GET /api/subjects error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to fetch subjects" },
      { status: 500 }
    );
  }
}

// POST /api/subjects
// Admin-only subject registration (SB-01)
export async function POST(request: NextRequest) {
  const auth = await requireAdminSession();
  if ("response" in auth) return auth.response;
  const adminUser = auth.user;

  try {
    const body = await request.json();
    const {
      name,
      slug,
      description,
      category,
      levels,
      deliveryFormats,
      pricingTierMinorUnits,
      commissionRatePercent,
      icon,
      color,
      aiVerificationMethod,
    } = body;

    if (!name || !slug || !description) {
      return NextResponse.json(
        { error: "Name, slug, and description are required" },
        { status: 400 }
      );
    }

    // Format slug
    const normalizedSlug = slug.toLowerCase().trim().replace(/[^a-z0-9-]/g, "-");

    const created = await db.createSubject({
      name,
      slug: normalizedSlug,
      description,
      category: category || "General",
      levels: levels && levels.length ? levels : ["JSS 1-3", "SSS 1-3", "WAEC/JAMB"],
      deliveryFormats: deliveryFormats && deliveryFormats.length ? deliveryFormats : ["ONE_ON_ONE_ONLINE"],
      status: "DRAFT",
      icon: icon || "BookOpen",
      color: color || "purple",
      pricingTierMinorUnits: Number(pricingTierMinorUnits) || 500000,
      commissionRatePercent: Number(commissionRatePercent) || 15.0,
      aiEnabled: false,
      aiEvaluationStatus: "NOT_STARTED",
      aiVerificationMethod: aiVerificationMethod || "FACTUAL_RETRIEVAL",
    });

    await db.logAdminAudit({
      adminId: adminUser.id,
      action: "CREATE_SUBJECT",
      targetType: "SUBJECT",
      targetId: created.slug,
      afterState: { name: created.name, slug: created.slug, status: created.status },
    });

    return NextResponse.json({
      success: true,
      subject: created,
    }, { status: 201 });
  } catch (error: any) {
    console.error("POST /api/subjects error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to create subject" },
      { status: 400 }
    );
  }
}
