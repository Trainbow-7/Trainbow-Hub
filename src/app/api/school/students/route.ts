import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const schoolId = searchParams.get("schoolId");
    const cohortId = searchParams.get("cohortId") || undefined;

    if (!schoolId) {
      return NextResponse.json({ error: "schoolId parameter is required" }, { status: 400 });
    }

    const records = await db.listSchoolStudents(schoolId, cohortId);
    const students = records.map((r) => ({
      id: r.enrollment.id,
      studentId: r.student.id,
      studentName: r.student.fullName,
      studentEmail: r.student.email,
      gradeLevel: r.cohort?.gradeLevel || "SSS 3",
      cohortId: r.cohort?.name || r.enrollment.cohortId,
      status: r.enrollment.status,
      enrolledAt: r.enrollment.enrolledAt,
    }));

    return NextResponse.json({ students, count: students.length });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || "Failed to list school students" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { schoolId, students } = body;

    if (!schoolId || !Array.isArray(students) || students.length === 0) {
      return NextResponse.json(
        { error: "schoolId and non-empty students array are required" },
        { status: 400 }
      );
    }

    const school = await db.getSchoolById(schoolId);
    if (!school) {
      return NextResponse.json({ error: "School not found" }, { status: 404 });
    }

    const availableSeats = school.seatCapacity - school.seatsUsed;
    if (students.length > availableSeats) {
      return NextResponse.json(
        {
          error: `Insufficient seat license capacity. Requested: ${students.length}, Available: ${availableSeats}`,
          studentCapacity: school.seatCapacity,
          seatsAllocated: school.seatsUsed,
          availableSeats,
        },
        { status: 400 }
      );
    }

    // Default cohort if none specified
    const cohorts = await db.listCohortsBySchoolId(schoolId);
    const defaultCohortId = cohorts[0]?.id || "coh-seed-001";

    let totalEnrolled = 0;
    const errors: string[] = [];

    // Group students by cohortId
    const byCohort = new Map<string, Array<{ fullName: string; email: string }>>();
    for (const st of students) {
      const cId = st.cohortId || defaultCohortId;
      if (!byCohort.has(cId)) byCohort.set(cId, []);
      byCohort.get(cId)!.push({ fullName: st.fullName, email: st.email });
    }

    for (const [cohortId, cohortStudents] of byCohort.entries()) {
      const result = await db.bulkEnrollSchoolStudents(schoolId, cohortId, cohortStudents);
      totalEnrolled += result.enrolledCount;
      if (result.errors?.length) {
        errors.push(...result.errors);
      }
    }

    const updatedSchool = await db.getSchoolById(schoolId);

    return NextResponse.json(
      {
        success: true,
        enrolledCount: totalEnrolled,
        seatsAllocated: updatedSchool?.seatsUsed,
        studentCapacity: updatedSchool?.seatCapacity,
        errors,
      },
      { status: 201 }
    );
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || "Failed to bulk enroll school students" },
      { status: 500 }
    );
  }
}
