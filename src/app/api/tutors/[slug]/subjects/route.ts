import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { requireAdminSession } from "@/lib/auth/admin";
import { getSession } from "@/lib/auth/session";

interface RouteParams {
  params: {
    slug: string;
  };
}

// GET /api/tutors/[slug]/subjects
// View qualifications for a tutor
export async function GET(
  request: NextRequest,
  { params }: RouteParams
) {
  try {
    const tutorSlug = params.slug.toLowerCase().trim();
    const qualifications = await db.listTutorSubjectQualifications({ tutorSlug });

    return NextResponse.json({
      success: true,
      qualifications,
      count: qualifications.length,
    });
  } catch (error: any) {
    console.error("GET /api/tutors/[slug]/subjects error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to fetch tutor qualifications" },
      { status: 500 }
    );
  }
}

// POST /api/tutors/[slug]/subjects
// Admin verifies / approves tutor for subject OR tutor submits qualification (SB-03)
export async function POST(
  request: NextRequest,
  { params }: RouteParams
) {
  try {
    const currentUser = await getSession();
    if (!currentUser) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const tutorSlug = params.slug.toLowerCase().trim();
    const body = await request.json();
    const {
      qualificationId,
      subjectSlug,
      levels,
      credentialEvidenceUrl,
      credentialType,
      status, // "APPROVED" | "REJECTED" | "PENDING"
    } = body;

    // If updating/verifying status, admin privileges are required
    if (status && status !== "PENDING") {
      const auth = await requireAdminSession();
      if ("response" in auth) return auth.response;
      const adminUser = auth.user;

      if (qualificationId) {
        const verified = await db.verifyTutorSubjectQualification(qualificationId, status, adminUser.id);
        if (!verified) {
          return NextResponse.json({ error: "Qualification not found" }, { status: 404 });
        }
        return NextResponse.json({ success: true, qualification: verified });
      }
    }

    // Tutor or Admin registering a qualification
    if (!subjectSlug || !credentialEvidenceUrl) {
      return NextResponse.json(
        { error: "subjectSlug and credentialEvidenceUrl are required" },
        { status: 400 }
      );
    }

    const subject = await db.getSubjectBySlug(subjectSlug);
    if (!subject) {
      return NextResponse.json(
        { error: `Subject '${subjectSlug}' does not exist` },
        { status: 400 }
      );
    }

    const initialStatus = currentUser.role === "ADMIN" && status ? status : "PENDING";

    const record = await db.upsertTutorSubjectQualification({
      tutorSlug,
      subjectSlug: subject.slug,
      levels: levels && levels.length ? levels : ["JSS 1-3", "SSS 1-3"],
      credentialEvidenceUrl,
      credentialType: credentialType || "UNIVERSITY_DEGREE",
      status: initialStatus,
      verifiedByAdminId: initialStatus === "APPROVED" ? currentUser.id : undefined,
      verifiedAt: initialStatus === "APPROVED" ? new Date() : undefined,
    });

    return NextResponse.json({
      success: true,
      qualification: record,
    }, { status: 201 });
  } catch (error: any) {
    console.error("POST /api/tutors/[slug]/subjects error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to upsert qualification" },
      { status: 400 }
    );
  }
}
