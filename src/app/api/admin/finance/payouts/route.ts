import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminSession } from "@/lib/auth/admin";
import { db } from "@/lib/db";

const processPayoutSchema = z.object({
  tutorSlug: z.string().min(1),
  amountMinorUnits: z.number().int().positive(),
  notes: z.string().optional(),
});

export async function GET() {
  const auth = await requireAdminSession();
  if ("response" in auth) return auth.response;

  try {
    const balances = await db.listTutorPayoutBalances();
    const payouts = Array.from(db.tutorPayouts.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
    return NextResponse.json({ success: true, balances, payouts });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Failed to list tutor payout balances" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  const auth = await requireAdminSession();
  if ("response" in auth) return auth.response;

  try {
    const body = await req.json();
    const parsed = processPayoutSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid payout payload", issues: parsed.error.issues },
        { status: 400 }
      );
    }

    const { tutorSlug, amountMinorUnits, notes } = parsed.data;
    const result = await db.processTutorPayout(tutorSlug, amountMinorUnits, auth.user.id, notes);
    return NextResponse.json({ success: true, result });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Failed to process tutor payout" },
      { status: 500 }
    );
  }
}
