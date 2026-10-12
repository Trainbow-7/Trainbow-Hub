import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminSession } from "@/lib/auth/admin";
import { db } from "@/lib/db";

const disputeResolutionSchema = z.object({
  bookingId: z.string().min(1),
  decision: z.enum(["REFUND_FULL", "REFUND_PARTIAL", "REJECT_DISPUTE"]),
  refundAmountMinorUnits: z.number().int().positive().optional(),
  notes: z.string().min(3),
});

export async function GET(req: NextRequest) {
  const auth = await requireAdminSession();
  if ("response" in auth) return auth.response;

  try {
    const { searchParams } = new URL(req.url);
    const status = searchParams.get("status") || undefined;

    const bookings = await db.listBookingsAdmin(status);
    return NextResponse.json({ success: true, bookings });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Failed to list bookings" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  const auth = await requireAdminSession();
  if ("response" in auth) return auth.response;

  try {
    const body = await req.json();
    const parsed = disputeResolutionSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid dispute resolution payload", issues: parsed.error.issues },
        { status: 400 }
      );
    }

    const { bookingId, decision, refundAmountMinorUnits, notes } = parsed.data;
    const result = await db.resolveBookingDispute(bookingId, {
      decision,
      refundAmountMinorUnits,
      adminId: auth.user.id,
      notes,
    });

    return NextResponse.json({ success: true, result });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Failed to resolve booking dispute" },
      { status: 500 }
    );
  }
}
