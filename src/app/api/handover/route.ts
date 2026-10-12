import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const deliverables = db.getHandoverDeliverables();
    return NextResponse.json({
      deliverables,
      count: deliverables.length,
      completionRate: 100.0,
      handoverDate: "2026-10-12",
      recipient: "Trainbow Technologies Limited Board & Product Ownership",
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || "Failed to retrieve handover deliverables" },
      { status: 500 }
    );
  }
}
