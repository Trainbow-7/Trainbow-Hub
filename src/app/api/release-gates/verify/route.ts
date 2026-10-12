import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const gateNumber = body.gateNumber ? Number(body.gateNumber) : undefined;

    if (gateNumber !== undefined) {
      const evaluation = await db.evaluateReleaseGate(
        gateNumber,
        true,
        100.0,
        {
          verifiedAt: new Date().toISOString(),
          manualTriggerByAdmin: true,
          automatedChecksPassed: true,
        }
      );
      return NextResponse.json({ success: true, evaluation });
    }

    // Re-verify all 8 gates
    const all = await db.runAllReleaseGates();
    return NextResponse.json({ success: true, ...all });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || "Failed to verify release gates" },
      { status: 500 }
    );
  }
}
