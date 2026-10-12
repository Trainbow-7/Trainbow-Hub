import { NextResponse } from "next/server";
import { requireGuardianSession } from "@/lib/auth/guardian";
import { db } from "@/lib/db";

/**
 * GET /api/guardian/financials
 * Requirement PP-02: Unified Paystack receipts and payment transactions for linked wards.
 */
export async function GET() {
  const auth = await requireGuardianSession();
  if ("response" in auth) return auth.response;

  try {
    const transactions = await db.getGuardianFinancialHistory(auth.user.id);
    return NextResponse.json({
      success: true,
      transactions,
      count: transactions.length,
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Failed to fetch financial transactions" },
      { status: 500 }
    );
  }
}
