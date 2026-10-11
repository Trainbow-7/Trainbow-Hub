import { describe, it, expect, beforeEach } from "vitest";
import crypto from "crypto";
import { db } from "@/lib/db";
import { PaystackAdapter, calculateCommission } from "@/lib/adapters/paystack";

describe("Phase E: 1-on-1 Lesson Booking & Paystack Integration Unit Tests", () => {
  beforeEach(async () => {
    await db.reset();
    PaystackAdapter.clearSandbox();
  });

  describe("BK-01: Slot Hold Expiration & Automatic Release", () => {
    it("creates a 10-minute hold that initially blocks conflicting holds", async () => {
      const hold = await db.createSlotHold({
        tutorSlug: "dr-tayo-okafor",
        studentId: "usr-std-001",
        slotDate: "2026-10-18",
        slotTime: "10:00 - 11:00",
        durationMinutes: 10,
      });

      expect(hold.id).toBeDefined();
      expect(hold.status).toBe("ACTIVE");
      expect(hold.tutorSlug).toBe("dr-tayo-okafor");
      expect(hold.expiresAt.getTime()).toBeGreaterThan(Date.now());

      // Attempting to hold the exact same slot while active must throw conflict
      await expect(
        db.createSlotHold({
          tutorSlug: "dr-tayo-okafor",
          studentId: "usr-std-002",
          slotDate: "2026-10-18",
          slotTime: "10:00 - 11:00",
          durationMinutes: 10,
        })
      ).rejects.toThrow(/temporarily reserved|already/);
    });

    it("automatically releases expired slot holds to allow new reservations", async () => {
      // Create an expired hold
      const expiredHold = await db.createSlotHold({
        tutorSlug: "dr-tayo-okafor",
        studentId: "usr-std-001",
        slotDate: "2026-10-18",
        slotTime: "14:00 - 15:00",
        durationMinutes: -1, // Expired 1 minute ago
      });

      expect(expiredHold.expiresAt.getTime()).toBeLessThan(Date.now());

      // New student can now hold the same slot because the prior hold expired
      const newHold = await db.createSlotHold({
        tutorSlug: "dr-tayo-okafor",
        studentId: "usr-std-002",
        slotDate: "2026-10-18",
        slotTime: "14:00 - 15:00",
        durationMinutes: 10,
      });

      expect(newHold.id).toBeDefined();
      expect(newHold.studentId).toBe("usr-std-002");
    });

    it("allows manual release of an active hold", async () => {
      const hold = await db.createSlotHold({
        tutorSlug: "dr-tayo-okafor",
        studentId: "usr-std-001",
        slotDate: "2026-10-19",
        slotTime: "11:00 - 12:00",
        durationMinutes: 10,
      });

      const released = await db.releaseSlotHold(hold.id);
      expect(released).toBe(true);

      // Now another student can immediately reserve it
      const newHold = await db.createSlotHold({
        tutorSlug: "dr-tayo-okafor",
        studentId: "usr-std-002",
        slotDate: "2026-10-19",
        slotTime: "11:00 - 12:00",
        durationMinutes: 10,
      });
      expect(newHold.id).toBeDefined();
    });
  });

  describe("BK-02: Concurrency & Slot Conflict Safety", () => {
    it("safely handles parallel reservation attempts and allows only one winner", async () => {
      const results = await Promise.allSettled([
        db.createSlotHold({
          tutorSlug: "dr-tayo-okafor",
          studentId: "usr-std-001",
          slotDate: "2026-10-20",
          slotTime: "09:00 - 10:00",
          durationMinutes: 10,
        }),
        db.createSlotHold({
          tutorSlug: "dr-tayo-okafor",
          studentId: "usr-std-002",
          slotDate: "2026-10-20",
          slotTime: "09:00 - 10:00",
          durationMinutes: 10,
        }),
      ]);

      const fulfilled = results.filter((r) => r.status === "fulfilled");
      const rejected = results.filter((r) => r.status === "rejected");

      expect(fulfilled).toHaveLength(1);
      expect(rejected).toHaveLength(1);
    });

    it("rejects booking if a confirmed session already occupies the slot", async () => {
      // Create a confirmed booking
      await db.createBooking({
        studentId: "usr-std-001",
        tutorSlug: "dr-tayo-okafor",
        tutorName: "Dr. Tayo Okafor",
        subject: "Senior Secondary Mathematics",
        slotDate: "2026-10-21",
        slotTime: "15:00 - 16:00",
        amountMinorUnits: 1500000,
        commissionMinorUnits: 225000,
        tutorEarningsMinorUnits: 1275000,
        currency: "NGN",
        bookingStatus: "CONFIRMED",
        paymentStatus: "VERIFIED",
      });

      // Attempting to hold this confirmed slot must fail
      await expect(
        db.createSlotHold({
          tutorSlug: "dr-tayo-okafor",
          studentId: "usr-std-002",
          slotDate: "2026-10-21",
          slotTime: "15:00 - 16:00",
          durationMinutes: 10,
        })
      ).rejects.toThrow(/already booked|already held/);
    });
  });

  describe("NDPA 2023 Minor Safeguard Verification Gate", () => {
    it("identifies minor students requiring parental consent", async () => {
      // Find seeded minor student
      const minor = await db.findUserByEmail("minor@trainbowhub.ng");
      expect(minor).toBeDefined();
      expect(minor?.isMinor).toBe(true);
      expect(minor?.isVerified).toBe(false);

      // Initially guardianship is in PENDING_OTP status
      const guardianship = await db.findGuardianshipByStudentId(minor!.id);
      expect(guardianship?.status).toBe("PENDING_OTP");

      // Verify guardian consent approval
      await db.updateGuardianship(guardianship!.id, { status: "VERIFIED" });
      const updated = await db.findGuardianshipByStudentId(minor!.id);
      expect(updated?.status).toBe("VERIFIED");
    });

    it("blocks minor booking if parental consent is missing or unverified", async () => {
      // Create an unverified minor user
      const unverifiedMinor = await db.createUser({
        email: "unverified-minor@trainbow.ng",
        passwordHash: "hash",
        fullName: "Amaka Eze (Minor)",
        role: "STUDENT",
        isMinor: true,
        isVerified: false,
      });

      // Check guardianship - none exists
      const guardianship = await db.findGuardianshipByStudentId(unverifiedMinor.id);
      expect(guardianship).toBeFalsy();

      // Guard condition matches API route logic
      const isConsentVerified = unverifiedMinor.isMinor
        ? Boolean(guardianship && guardianship.status === "VERIFIED")
        : true;

      expect(isConsentVerified).toBe(false);
    });
  });

  describe("PY-01 & PY-05: Platform Commission Calculation & Ledger Economics", () => {
    it("calculates exactly 15% platform commission and 85% tutor net earnings", () => {
      const calculation = calculateCommission(1500000); // ₦15,000

      expect(calculation.grossAmountMinorUnits).toBe(1500000);
      expect(calculation.commissionRate).toBe(0.15);
      expect(calculation.commissionMinorUnits).toBe(225000); // ₦2,250
      expect(calculation.tutorEarningsMinorUnits).toBe(1275000); // ₦12,750
      expect(
        calculation.commissionMinorUnits + calculation.tutorEarningsMinorUnits
      ).toBe(calculation.grossAmountMinorUnits);
    });

    it("correctly handles various fee tiers with precise kobo rounding", () => {
      const tier1 = calculateCommission(750000); // ₦7,500
      expect(tier1.commissionMinorUnits).toBe(112500); // ₦1,125
      expect(tier1.tutorEarningsMinorUnits).toBe(637500); // ₦6,375

      const tier2 = calculateCommission(2000000); // ₦20,000
      expect(tier2.commissionMinorUnits).toBe(300000); // ₦3,000
      expect(tier2.tutorEarningsMinorUnits).toBe(1700000); // ₦17,000
    });
  });

  describe("PY-02: Paystack HMAC-SHA512 Webhook Signature Verification", () => {
    const secret = "trainbow_paystack_sandbox_secret_key_2026";

    it("verifies authentic HMAC-SHA512 signature using timing-safe comparison", () => {
      const payload = JSON.stringify({
        event: "charge.success",
        data: {
          reference: "trx-verify-test-01",
          amount: 1500000,
          status: "success",
        },
      });

      const validSignature = crypto
        .createHmac("sha512", secret)
        .update(payload)
        .digest("hex");

      const isValid = PaystackAdapter.verifyWebhookSignature(validSignature, payload);
      expect(isValid).toBe(true);
    });

    it("rejects tampered payloads and forged signatures", () => {
      const originalPayload = JSON.stringify({ event: "charge.success", amount: 1500000 });
      const tamperedPayload = JSON.stringify({ event: "charge.success", amount: 15000 });

      const validSignature = crypto
        .createHmac("sha512", secret)
        .update(originalPayload)
        .digest("hex");

      // Verify tampered payload with original signature
      const isTamperedValid = PaystackAdapter.verifyWebhookSignature(validSignature, tamperedPayload);
      expect(isTamperedValid).toBe(false);

      // Verify forged signature
      const isForgedValid = PaystackAdapter.verifyWebhookSignature("deadbeef123456", originalPayload);
      expect(isForgedValid).toBe(false);

      // Verify null/undefined signature
      expect(PaystackAdapter.verifyWebhookSignature(null, originalPayload)).toBe(false);
      expect(PaystackAdapter.verifyWebhookSignature(undefined, originalPayload)).toBe(false);
    });
  });

  describe("BK-03 & BK-04 & PY-03: Server-Verified Payment Confirmation & Webhook Idempotency", () => {
    it("confirms a booking on verified payment and creates immutable ledger records", async () => {
      const booking = await db.createBooking({
        studentId: "usr-std-001",
        tutorSlug: "dr-tayo-okafor",
        tutorName: "Dr. Tayo Okafor",
        subject: "Senior Secondary Mathematics",
        slotDate: "2026-10-22",
        slotTime: "11:00 - 12:00",
        amountMinorUnits: 1500000,
        commissionMinorUnits: 225000,
        tutorEarningsMinorUnits: 1275000,
        currency: "NGN",
        bookingStatus: "HELD",
        paymentStatus: "INITIATED",
        paymentReference: "pstk_ref_test_001",
      });

      const initialLedger = await db.findLedgerEntriesByTutorSlug("dr-tayo-okafor");
      const initialLedgerCount = initialLedger.length;

      // Confirm with payment
      const confirmation = await db.confirmBookingWithPayment({
        bookingId: booking.id,
        paymentReference: "pstk_ref_test_001",
        channel: "card",
        paystackResponse: { status: "success", gateway_response: "Approved" },
      });

      expect(confirmation.booking.bookingStatus).toBe("CONFIRMED");
      expect(confirmation.booking.paymentStatus).toBe("VERIFIED");
      expect(confirmation.isReplay).toBe(false);

      // Check updated ledger entries
      const updatedLedger = await db.findLedgerEntriesByTutorSlug("dr-tayo-okafor");
      expect(updatedLedger.length).toBe(initialLedgerCount + 2); // 1 credit + 1 commission debit

      const creditEntry = updatedLedger.find(
        (l) => l.bookingId === booking.id && l.type === "BOOKING_CREDIT"
      );
      const commissionEntry = updatedLedger.find(
        (l) => l.bookingId === booking.id && l.type === "COMMISSION_DEBIT"
      );

      expect(creditEntry).toBeDefined();
      expect(creditEntry?.amountMinorUnits).toBe(1500000);
      expect(commissionEntry).toBeDefined();
      expect(commissionEntry?.amountMinorUnits).toBe(225000);
    });

    it("idempotently handles duplicate webhook/verification replays without duplicating ledger records (BK-04)", async () => {
      const booking = await db.createBooking({
        studentId: "usr-std-001",
        tutorSlug: "dr-tayo-okafor",
        tutorName: "Dr. Tayo Okafor",
        subject: "Senior Secondary Mathematics",
        slotDate: "2026-10-23",
        slotTime: "14:00 - 15:00",
        amountMinorUnits: 1500000,
        commissionMinorUnits: 225000,
        tutorEarningsMinorUnits: 1275000,
        currency: "NGN",
        bookingStatus: "HELD",
        paymentStatus: "INITIATED",
        paymentReference: "pstk_ref_idempotent_01",
      });

      // First confirmation call
      const firstResult = await db.confirmBookingWithPayment({
        bookingId: booking.id,
        paymentReference: "pstk_ref_idempotent_01",
        channel: "card",
      });
      expect(firstResult.isReplay).toBe(false);

      const ledgerAfterFirst = await db.findLedgerEntriesByTutorSlug("dr-tayo-okafor");
      const ledgerCountAfterFirst = ledgerAfterFirst.length;

      // Duplicate replay (e.g. repeated Paystack webhook)
      const secondResult = await db.confirmBookingWithPayment({
        bookingId: booking.id,
        paymentReference: "pstk_ref_idempotent_01",
        channel: "card",
      });

      expect(secondResult.isReplay).toBe(true);
      expect(secondResult.booking.bookingStatus).toBe("CONFIRMED");

      // Ledger count must remain identical
      const ledgerAfterSecond = await db.findLedgerEntriesByTutorSlug("dr-tayo-okafor");
      expect(ledgerAfterSecond.length).toBe(ledgerCountAfterFirst);
    });
  });

  describe("BK-06: Reschedule Conflict Validation & Slot Preservation", () => {
    it("successfully reschedules an existing booking to an open slot", async () => {
      const booking = await db.createBooking({
        studentId: "usr-std-001",
        tutorSlug: "dr-tayo-okafor",
        tutorName: "Dr. Tayo Okafor",
        subject: "Senior Secondary Mathematics",
        slotDate: "2026-10-24",
        slotTime: "10:00 - 11:00",
        amountMinorUnits: 1500000,
        commissionMinorUnits: 225000,
        tutorEarningsMinorUnits: 1275000,
        currency: "NGN",
        bookingStatus: "CONFIRMED",
        paymentStatus: "VERIFIED",
      });

      const rescheduled = await db.rescheduleBooking(
        booking.id,
        "2026-10-25",
        "16:00 - 17:00"
      );

      expect(rescheduled.slotDate).toBe("2026-10-25");
      expect(rescheduled.slotTime).toBe("16:00 - 17:00");
      expect(rescheduled.rescheduledFromId).toBe("2026-10-24 10:00 - 11:00");
    });

    it("rejects reschedule attempt if target slot is already held or booked", async () => {
      // Create first booking
      const booking1 = await db.createBooking({
        studentId: "usr-std-001",
        tutorSlug: "dr-tayo-okafor",
        tutorName: "Dr. Tayo Okafor",
        subject: "Senior Secondary Mathematics",
        slotDate: "2026-10-26",
        slotTime: "10:00 - 11:00",
        amountMinorUnits: 1500000,
        commissionMinorUnits: 225000,
        tutorEarningsMinorUnits: 1275000,
        currency: "NGN",
        bookingStatus: "CONFIRMED",
        paymentStatus: "VERIFIED",
      });

      // Create second booking on another slot
      const booking2 = await db.createBooking({
        studentId: "usr-std-002",
        tutorSlug: "dr-tayo-okafor",
        tutorName: "Dr. Tayo Okafor",
        subject: "Senior Secondary Mathematics",
        slotDate: "2026-10-26",
        slotTime: "11:00 - 12:00",
        amountMinorUnits: 1500000,
        commissionMinorUnits: 225000,
        tutorEarningsMinorUnits: 1275000,
        currency: "NGN",
        bookingStatus: "CONFIRMED",
        paymentStatus: "VERIFIED",
      });

      // Attempting to reschedule booking2 to booking1's slot must fail
      await expect(
        db.rescheduleBooking(booking2.id, "2026-10-26", "10:00 - 11:00")
      ).rejects.toThrow(/already booked|temporarily reserved/);
    });
  });

  describe("BK-07 & PY-04: Cancellation & Refund Ledger Audit Trail", () => {
    it("cancels a confirmed session and records a refund debit in the financial ledger", async () => {
      const booking = await db.createBooking({
        studentId: "usr-std-001",
        tutorSlug: "dr-tayo-okafor",
        tutorName: "Dr. Tayo Okafor",
        subject: "Senior Secondary Mathematics",
        slotDate: "2026-10-27",
        slotTime: "12:00 - 13:00",
        amountMinorUnits: 1500000,
        commissionMinorUnits: 225000,
        tutorEarningsMinorUnits: 1275000,
        currency: "NGN",
        bookingStatus: "CONFIRMED",
        paymentStatus: "VERIFIED",
        paymentReference: "pstk_cancel_test_01",
      });

      const initialLedger = await db.findLedgerEntriesByTutorSlug("dr-tayo-okafor");
      const initialCount = initialLedger.length;

      const cancelled = await db.cancelBooking(
        booking.id,
        "Student scheduled school exam clash (>24h notice)"
      );

      expect(cancelled.bookingStatus).toBe("CANCELLED");
      expect(cancelled.cancellationReason).toContain("school exam clash");

      // Verify refund debit record created
      const updatedLedger = await db.findLedgerEntriesByTutorSlug("dr-tayo-okafor");
      expect(updatedLedger.length).toBe(initialCount + 1);

      const refundEntry = updatedLedger.find(
        (l) => l.bookingId === booking.id && l.type === "REFUND_DEBIT"
      );
      expect(refundEntry).toBeDefined();
      expect(refundEntry?.amountMinorUnits).toBe(cancelled.tutorEarningsMinorUnits);
      expect(refundEntry?.description).toContain("Refund reversal");
    });
  });
});
