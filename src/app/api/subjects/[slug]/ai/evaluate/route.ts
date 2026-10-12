import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { requireAdminSession } from "@/lib/auth/admin";

interface RouteParams {
  params: {
    slug: string;
  };
}

// POST /api/subjects/[slug]/ai/evaluate
// Admin submits formal pedagogical and safety rubric evaluation (SB-06)
export async function POST(
  request: NextRequest,
  { params }: RouteParams
) {
  const auth = await requireAdminSession();
  if ("response" in auth) return auth.response;
  const adminUser = auth.user;

  try {
    const slug = params.slug.toLowerCase().trim();
    const subject = await db.getSubjectBySlug(slug);
    if (!subject) {
      return NextResponse.json(
        { error: `Subject '${slug}' not found` },
        { status: 404 }
      );
    }

    const body = await request.json();
    const {
      rubricScore,
      unsafeContentBlockedCount,
      groundingCoveragePercent,
      notes,
      signOffSignature,
    } = body;

    const score = Number(rubricScore);
    if (isNaN(score) || score < 0 || score > 100) {
      return NextResponse.json(
        { error: "Valid rubricScore between 0 and 100 is required" },
        { status: 400 }
      );
    }

    if (!signOffSignature || !signOffSignature.trim()) {
      return NextResponse.json(
        { error: "Formal evaluator signOffSignature is required for quality audit compliance" },
        { status: 400 }
      );
    }

    // Benchmark threshold: passing requires rubric score >= 80.0% and grounding >= 70.0%
    const passed = score >= 80.0 && Number(groundingCoveragePercent || 0) >= 70.0;

    const evaluation = await db.submitSubjectAIEvaluation({
      subjectSlug: slug,
      evaluatorId: adminUser.id,
      evaluatorName: adminUser.fullName,
      rubricScore: score,
      passed,
      unsafeContentBlockedCount: Number(unsafeContentBlockedCount) || 0,
      groundingCoveragePercent: Number(groundingCoveragePercent) || 0,
      notes: notes || "",
      signOffSignature: signOffSignature.trim(),
    });

    await db.logAdminAudit({
      adminId: adminUser.id,
      action: "SUBMIT_SUBJECT_AI_EVALUATION",
      targetType: "SUBJECT_AI_EVALUATION",
      targetId: evaluation.id,
      afterState: {
        subjectSlug: slug,
        rubricScore: score,
        passed,
        signOffSignature: evaluation.signOffSignature,
      },
    });

    return NextResponse.json({
      success: true,
      evaluation,
      subjectStatus: passed ? "PASSED" : "FAILED",
    }, { status: 201 });
  } catch (error: any) {
    console.error("POST /api/subjects/[slug]/ai/evaluate error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to submit evaluation" },
      { status: 400 }
    );
  }
}

// GET /api/subjects/[slug]/ai/evaluate
// List evaluations for this subject
export async function GET(
  request: NextRequest,
  { params }: RouteParams
) {
  try {
    const slug = params.slug.toLowerCase().trim();
    const evals = await db.listSubjectAIEvaluations(slug);
    return NextResponse.json({
      success: true,
      evaluations: evals,
      count: evals.length,
    });
  } catch (error: any) {
    console.error("GET /api/subjects/[slug]/ai/evaluate error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to list evaluations" },
      { status: 500 }
    );
  }
}
