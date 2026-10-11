import { test, expect } from "@playwright/test";

test.describe.configure({ mode: "serial" });

async function loginAsStudent(page: any) {
  await page.goto("/login");
  await page.getByRole("button", { name: "Learner (Adult)" }).click();
  await page.getByRole("button", { name: "Sign in", exact: true }).click();
  await page.waitForURL((url: URL) => url.pathname !== "/login", { timeout: 15000 });
}

async function loginAsTutor(page: any) {
  await page.goto("/login");
  await page.getByRole("button", { name: "Vetted Tutor" }).click();
  await page.getByRole("button", { name: "Sign in", exact: true }).click();
  await page.waitForURL((url: URL) => url.pathname !== "/login", { timeout: 15000 });
}

test.describe("Phase E: 1-on-1 Lesson Booking & Paystack Integration E2E", () => {
  test.beforeEach(async ({ page }) => {
    // Reset seed database state for deterministic E2E assertions
    await page.request.post("/api/auth/reset");
    await page.context().clearCookies();
  });

  test("1. Slot Hold Creation, 10-Minute Countdown Timer & Paystack Checkout (BK-01, BK-03)", async ({
    page,
  }) => {
    await loginAsStudent(page);

    // Navigate to Dr. Tayo Okafor's Tutor Profile
    await page.goto("/tutors/dr-tayo-okafor");
    await expect(page).toHaveURL("/tutors/dr-tayo-okafor");

    // Verify Tutor Profile elements & Hourly Rate
    await expect(page.locator("h1")).toContainText("Dr. Tayo Okafor");
    await expect(page.locator("body")).toContainText("₦7,500");

    // Open Booking Flow Modal
    const bookBtn = page.locator('[data-testid="open-booking-modal-btn"]');
    await expect(bookBtn).toBeVisible();
    await bookBtn.click();

    // Verify Booking Modal is visible
    await expect(page.locator("#booking-modal-title")).toBeVisible();
    await expect(page.locator("#booking-modal-title")).toContainText("Dr. Tayo Okafor");

    // Click Reserve Slot to trigger 10-minute hold (BK-01)
    const holdBtn = page.locator('[data-testid="reserve-slot-hold-btn"]');
    await expect(holdBtn).toBeVisible();
    await holdBtn.click();

    // Verify 10-minute hold countdown timer (BK-01)
    const holdTimer = page.locator('[data-testid="slot-hold-timer"]').first();
    await expect(holdTimer).toBeVisible();

    // Proceed to Paystack Checkout Stage
    const paystackBtn = page.locator('[data-testid="paystack-checkout-btn"]');
    await expect(paystackBtn).toBeVisible();
    await paystackBtn.click();

    // Simulate Paystack verified payment confirmation (BK-03, PY-01)
    const completePaymentBtn = page.locator('[data-testid="simulate-paystack-success-btn"]');
    await expect(completePaymentBtn).toBeVisible();
    await completePaymentBtn.click();

    // Verify Instant Booking Confirmation Screen
    const confirmationScreen = page.locator('[data-testid="booking-confirmation-screen"]');
    await expect(confirmationScreen).toBeVisible({ timeout: 15000 });
    await expect(confirmationScreen).toContainText("Lesson Confirmed!");
    await expect(confirmationScreen).toContainText("Dr. Tayo Okafor");

    // Click CTA to navigate to bookings hub
    const viewBookingsLink = page.getByRole("link", { name: "View My Bookings Dashboard" });
    await expect(viewBookingsLink).toBeVisible();
    await viewBookingsLink.click();
    await expect(page).toHaveURL("/bookings");
  });

  test("2. Student Booking Management Hub: Upcoming sessions, Join Classroom CTA, Reschedule & Cancel (BK-05, BK-06, BK-07)", async ({
    page,
  }) => {
    await loginAsStudent(page);

    // Complete booking flow first
    await page.goto("/tutors/dr-tayo-okafor");
    await page.locator('[data-testid="open-booking-modal-btn"]').click();
    await page.locator('[data-testid="reserve-slot-hold-btn"]').click();
    await page.locator('[data-testid="paystack-checkout-btn"]').click();
    await page.locator('[data-testid="simulate-paystack-success-btn"]').click();
    await expect(page.locator('[data-testid="booking-confirmation-screen"]')).toBeVisible({ timeout: 15000 });

    // Navigate to Bookings Hub
    await page.goto("/bookings");
    await expect(page).toHaveURL("/bookings");

    // Verify Heading
    await expect(page.locator("h1")).toContainText("My Scheduled Lessons");

    // Verify Active Upcoming Booking card
    const upcomingList = page.locator('[data-testid="upcoming-bookings-list"]');
    await expect(upcomingList).toBeVisible();
    await expect(upcomingList).toContainText("Dr. Tayo Okafor");
    await expect(upcomingList).toContainText("Confirmed ✓");

    // Verify Join Classroom CTA exists
    const joinBtn = page.locator('[data-testid^="join-classroom-btn-"]').first();
    await expect(joinBtn).toBeVisible();
    await expect(joinBtn).toContainText("Join Virtual Classroom");

    // Test Reschedule Workflow (BK-06)
    const rescheduleOpenBtn = page.locator('[data-testid^="reschedule-btn-"]').first();
    await expect(rescheduleOpenBtn).toBeVisible();
    await rescheduleOpenBtn.click();

    // Verify Reschedule Modal
    await expect(page.locator("#reschedule-modal-title")).toBeVisible();

    // Select distinct new slot date for rescheduling
    const dateInput = page.locator('[data-testid="reschedule-date-input"]');
    await dateInput.fill("2026-10-30");

    // Confirm Reschedule
    const confirmRescheduleBtn = page.locator('[data-testid="confirm-reschedule-btn"]');
    await expect(confirmRescheduleBtn).toBeVisible();
    await confirmRescheduleBtn.click();

    // Verify Reschedule Modal closes and session remains active
    await expect(page.locator("#reschedule-modal-title")).not.toBeVisible({ timeout: 10000 });
    await expect(upcomingList).toContainText("Dr. Tayo Okafor");

    // Test Cancellation Workflow (BK-07)
    const cancelOpenBtn = page.locator('[data-testid^="cancel-btn-"]').first();
    await expect(cancelOpenBtn).toBeVisible();
    await cancelOpenBtn.click();

    // Verify Cancel Modal
    const cancelModal = page.locator('[data-testid="cancel-booking-modal"]');
    await expect(cancelModal).toBeVisible();

    // Enter cancellation reason & Confirm
    const reasonInput = page.locator('[data-testid="cancel-reason-input"]');
    await reasonInput.fill("Student school examination clash (>24h notice)");

    const confirmCancelBtn = page.locator('[data-testid="confirm-cancel-btn"]');
    await expect(confirmCancelBtn).toBeVisible();
    await confirmCancelBtn.click();

    // Verify Cancel Modal closes
    await expect(cancelModal).not.toBeVisible();

    // Switch to Cancelled Tab & verify presence
    const cancelledTab = page.locator('[data-testid="tab-cancelled-bookings"]');
    await cancelledTab.click();
    await expect(page.locator("body")).toContainText("Cancelled (Refund Processed)");
  });

  test("3. Tutor Dashboard: 1-on-1 Bookings, Virtual Classroom Launch & Escrow Ledger (PY-04, PY-05)", async ({
    page,
  }) => {
    // 1. Create a confirmed student booking first
    await loginAsStudent(page);
    await page.goto("/tutors/dr-tayo-okafor");
    await page.locator('[data-testid="open-booking-modal-btn"]').click();
    await page.locator('[data-testid="reserve-slot-hold-btn"]').click();
    await page.locator('[data-testid="paystack-checkout-btn"]').click();
    await page.locator('[data-testid="simulate-paystack-success-btn"]').click();
    await expect(page.locator('[data-testid="booking-confirmation-screen"]')).toBeVisible({ timeout: 15000 });

    // 2. Log in as Vetted Tutor (Dr. Tayo Okafor)
    await loginAsTutor(page);

    // Navigate to Tutor Portal
    await page.goto("/dashboard/tutor");
    await expect(page).toHaveURL("/dashboard/tutor");

    // Verify Phase E Bookings & Ledger section
    const ledgerSection = page.locator('[data-testid="tutor-bookings-ledger-section"]');
    await expect(ledgerSection).toBeVisible();
    await expect(ledgerSection).toContainText("1-on-1 Student Bookings & Financial Ledger");

    // Verify Financial Metric KPI cards (PY-05)
    await expect(page.locator('[data-testid="tutor-gross-volume"]')).toBeVisible();
    await expect(page.locator('[data-testid="tutor-platform-fee"]')).toBeVisible();
    await expect(page.locator('[data-testid="tutor-net-earnings"]')).toBeVisible();

    // Verify Active student session row exists with launch classroom button
    const classroomBtn = page.locator('[data-testid^="tutor-launch-classroom-"]').first();
    await expect(classroomBtn).toBeVisible();
    await expect(classroomBtn).toContainText("Launch Classroom");

    // Verify Escrow Financial Ledger table (PY-04)
    const ledgerTable = page.locator('[data-testid="tutor-financial-ledger-table"]');
    await expect(ledgerTable).toBeVisible();
    await expect(ledgerTable).toContainText("BOOKING_CREDIT");
    await expect(ledgerTable).toContainText("COMMISSION_DEBIT");
  });
});
