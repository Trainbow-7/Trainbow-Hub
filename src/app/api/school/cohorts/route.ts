import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const schoolId = searchParams.get("schoolId");

    if (!schoolId) {
      return NextResponse.json({ error: "schoolId parameter is required" }, { status: 400 });
    }

    const cohorts = await db.listCohortsBySchoolId(schoolId);
    return NextResponse.json({ cohorts });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || "Failed to list school cohorts" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { schoolId, name, gradeLevel, academicTerm } = body;

    if (!schoolId || !name || !gradeLevel) {
      return NextResponse.json(
        { error: "schoolId, name, and gradeLevel are required" },
        { status: 400 }
      );
    }

    const school = await db.getSchoolById(schoolId);
    if (!school) {
      return NextResponse.json({ error: "School not found" }, { status: 404 });
    }

    const cohort = await db.createSchoolCohort({
      schoolId,
      name,
      gradeLevel,
      academicYear: academicTerm || "2026/2027",
      studentCount: 0,
    });

    return NextResponse.json({ cohort }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || "Failed to create school cohort" },
      { status: 500 }
    );
  }
}
