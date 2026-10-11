import { NextResponse } from "next/server";
import { PaystackAdapter } from "@/lib/adapters/paystack";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const reference = searchParams.get("reference");
  const amount = searchParams.get("amount");

  if (!reference) {
    return NextResponse.redirect(new URL("/tutors", req.url));
  }

  // Pre-approve reference in sandbox store
  PaystackAdapter.setSandboxTransaction(reference, {
    success: true,
    amountMinorUnits: amount ? parseInt(amount, 10) : 750000,
    status: "success",
  });

  return NextResponse.redirect(new URL(`/bookings?ref=${reference}&status=success`, req.url));
}
