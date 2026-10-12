import { NextResponse } from "next/server";
import { executePrivacyPurge } from "@/lib/privacy/retention";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { userId, category, requestedByRole } = body;

    if (!userId || !category) {
      return NextResponse.json(
        { error: "userId and category are required" },
        { status: 400 }
      );
    }

    const result = await executePrivacyPurge(
      userId,
      category,
      requestedByRole || "STUDENT"
    );

    return NextResponse.json({ success: true, result }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || "Failed to execute privacy purge" },
      { status: 500 }
    );
  }
}
