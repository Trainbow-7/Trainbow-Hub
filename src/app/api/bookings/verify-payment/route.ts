import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { PaystackAdapter } from "@/lib/adapters/paystack";
import { z } from "zod";

export const dynamic = "force-dynamic";

const verifySchema = z.object({
  reference: z.string().min(1, "Payment reference is required"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = verifySchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: "Payment reference is required" },
        { status: 400 }
      );
    }

    const { reference } = parsed.data;

    // Server-side verification with Paystack API under BK-03 & PY-02
    const verifyResult = await PaystackAdapter.verify(reference);
    if (!verifyResult.success || verifyResult.status !== "success") {
      return NextResponse.json(
        {
          success: false,
          error: "Payment verification failed with provider",
          status: verifyResult.status,
          gatewayResponse: verifyResult.gatewayResponse,
        },
        { status: 402 }
      );
    }

    // Look up booking by reference
    const booking = await db.findBookingByReference(reference);
    if (!booking) {
      return NextResponse.json(
        { success: false, error: `No booking found for payment reference ${reference}` },
        { status: 404 }
      );
    }

    // Confirm booking and write immutable ledger entries idempotently (BK-04, PY-03, PY-04, PY-05)
    const { booking: confirmedBooking, transaction, isReplay } = await db.confirmBookingWithPayment({
      bookingId: booking.id,
      paymentReference: reference,
      channel: verifyResult.channel,
      paystackResponse: verifyResult,
      idempotencyKey: `idemp_${reference}`,
    });

    return NextResponse.json({
      success: true,
      isReplay,
      booking: {
        id: confirmedBooking.id,
        studentId: confirmedBooking.studentId,
        tutorSlug: confirmedBooking.tutorSlug,
        tutorName: confirmedBooking.tutorName,
        subject: confirmedBooking.subject,
        slotDate: confirmedBooking.slotDate,
        slotTime: confirmedBooking.slotTime,
        amountMinorUnits: confirmedBooking.amountMinorUnits,
        commissionMinorUnits: confirmedBooking.commissionMinorUnits,
        tutorEarningsMinorUnits: confirmedBooking.tutorEarningsMinorUnits,
        currency: confirmedBooking.currency,
        bookingStatus: confirmedBooking.bookingStatus,
        paymentStatus: confirmedBooking.paymentStatus,
        paymentReference: confirmedBooking.paymentReference,
        meetingLink: confirmedBooking.meetingLink,
        updatedAt: confirmedBooking.updatedAt.toISOString(),
      },
      transaction: {
        id: transaction.id,
        reference: transaction.reference,
        amountMinorUnits: transaction.amountMinorUnits,
        status: transaction.status,
        verifiedAt: transaction.verifiedAt?.toISOString(),
      },
    });
  } catch (error: any) {
    console.error("[VERIFY_PAYMENT_ERROR]", error);
    return NextResponse.json(
      { success: false, error: error.message || "Internal server error verifying payment" },
      { status: 500 }
    );
  }
}
