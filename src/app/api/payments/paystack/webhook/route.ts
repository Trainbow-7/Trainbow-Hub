import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { PaystackAdapter } from "@/lib/adapters/paystack";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const rawBody = await req.text();
    const signature = req.headers.get("x-paystack-signature");

    // Verify HMAC-SHA512 signature under PRD PY-02
    const isValidSignature = PaystackAdapter.verifyWebhookSignature(signature, rawBody);
    if (!isValidSignature) {
      console.warn("[PAYSTACK_WEBHOOK] Rejected webhook with invalid signature");
      return NextResponse.json({ error: "Invalid webhook signature" }, { status: 401 });
    }

    let payload: any;
    try {
      payload = JSON.parse(rawBody);
    } catch {
      return NextResponse.json({ error: "Invalid JSON payload" }, { status: 400 });
    }

    // Only process charge.success events
    if (payload.event === "charge.success" && payload.data) {
      const reference = payload.data.reference;
      const booking = await db.findBookingByReference(reference);

      if (booking) {
        // Idempotently confirm booking and write ledger entries (BK-04, PY-03, PY-04)
        await db.confirmBookingWithPayment({
          bookingId: booking.id,
          paymentReference: reference,
          channel: payload.data.channel || "card",
          paystackResponse: payload.data,
          idempotencyKey: `idemp_webhook_${reference}`,
        });
      }
    }

    return NextResponse.json({ status: "success", received: true });
  } catch (error) {
    console.error("[PAYSTACK_WEBHOOK_ERROR]", error);
    return NextResponse.json(
      { error: "Internal server error processing webhook" },
      { status: 500 }
    );
  }
}
