import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth/session";
import { db } from "@/lib/db";
import { PaystackAdapter } from "@/lib/adapters/paystack";
import { SEED_TUTORS } from "@/lib/data/seed-data";
import { z } from "zod";

export const dynamic = "force-dynamic";

const initializeSchema = z.object({
  tutorSlug: z.string().min(1),
  slotDate: z.string().min(1),
  slotTime: z.string().min(1),
  subject: z.string().default("Mathematics"),
});

export async function POST(req: Request) {
  try {
    const session = await getSession();
    const userId = session?.id || "usr-std-001";
    const user = await db.findUserById(userId);

    if (!user) {
      return NextResponse.json({ success: false, error: "Authentication required" }, { status: 401 });
    }

    // Minor Safeguard Gate
    if (user.isMinor && !user.isVerified) {
      return NextResponse.json(
        {
          success: false,
          guardianConsentRequired: true,
          studentId: user.id,
          error: "Guardian consent required under NDPA 2023 Section 31",
        },
        { status: 403 }
      );
    }

    const body = await req.json();
    const parsed = initializeSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: "Invalid booking parameters", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { tutorSlug, slotDate, slotTime, subject } = parsed.data;

    // Look up tutor
    const tutor = SEED_TUTORS.find((t) => t.slug === tutorSlug);
    const tutorName = tutor?.name || "Verified Expert Tutor";
    const amountMinorUnits = tutor?.hourlyRateMinorUnits || 750000; // default ₦7,500

    const paymentReference = `tb_pay_${Date.now()}_${Math.random().toString(36).substring(7)}`;

    // Create booking record with HELD / INITIATED status
    const booking = await db.createBooking({
      studentId: user.id,
      tutorSlug,
      tutorName,
      subject,
      slotDate,
      slotTime,
      amountMinorUnits,
      currency: "NGN",
      paymentReference,
    });

    // Initialize Paystack checkout transaction
    const paystackInit = await PaystackAdapter.initialize({
      email: user.email,
      amountMinorUnits,
      reference: paymentReference,
      callbackUrl: `${process.env.APP_URL || "http://localhost:3000"}/bookings?ref=${paymentReference}`,
      metadata: {
        bookingId: booking.id,
        studentId: user.id,
        tutorSlug,
        slotDate,
        slotTime,
      },
    });

    return NextResponse.json({
      success: true,
      booking: {
        id: booking.id,
        tutorSlug: booking.tutorSlug,
        tutorName: booking.tutorName,
        slotDate: booking.slotDate,
        slotTime: booking.slotTime,
        amountMinorUnits: booking.amountMinorUnits,
        commissionMinorUnits: booking.commissionMinorUnits,
        tutorEarningsMinorUnits: booking.tutorEarningsMinorUnits,
        currency: booking.currency,
        bookingStatus: booking.bookingStatus,
        paymentStatus: booking.paymentStatus,
        paymentReference: booking.paymentReference,
      },
      paystack: {
        authorizationUrl: paystackInit.authorizationUrl,
        accessCode: paystackInit.accessCode,
        reference: paystackInit.reference,
      },
    });
  } catch (error) {
    console.error("[INIT_PAYMENT_ERROR]", error);
    return NextResponse.json(
      { success: false, error: "Internal server error initializing payment" },
      { status: 500 }
    );
  }
}
