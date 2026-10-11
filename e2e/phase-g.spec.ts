import { test, expect } from "@playwright/test";

test.describe.configure({ mode: "serial" });

test.describe("Phase G: Online Virtual Classroom & Safeguarding Engine E2E (CL-01 through CL-06)", () => {
  test.beforeEach(async ({ page }) => {
    // Reset seed database state to clean baseline
    await page.request.post("/api/auth/reset");
    await page.context().clearCookies();
  });

  test("1. Student joins classroom, verifies WebRTC stage, WAT clock, and NDPA privacy badge (CL-01, CL-06)", async ({
    page,
  }) => {
    await page.goto("/classroom/bkg-seed-001?role=STUDENT");

    // Header and Room title verification
    await expect(page.locator("h1")).toContainText("Mathematics with Dr. Tayo Okafor");
    await expect(page.locator('[data-testid="session-status-badge"]')).toBeVisible();

    // CL-01: WAT timezone clock presence
    await expect(page.locator('[data-testid="wat-clock"]')).toBeVisible();
    await expect(page.locator('[data-testid="wat-clock"]')).toContainText("WAT");

    // CL-06: Strict Child Safeguard Invariant - Recording Disabled Badge
    const recordingBadge = page.locator('[data-testid="recording-disabled-badge"]');
    await expect(recordingBadge).toBeVisible();
    await expect(recordingBadge).toContainText("Recording: Disabled");
    await expect(recordingBadge).toContainText("Child Privacy Protected");

    // Video Stage & Feeds
    await expect(page.locator("text=Dr. Tayo Okafor (Verified Tutor)")).toBeVisible();
    await expect(page.locator('[data-testid="student-pip-feed"]')).toBeVisible();

    // Controls bar verification
    const controls = page.locator('[data-testid="classroom-controls"]');
    await expect(controls).toBeVisible();
    await expect(page.locator('[data-testid="mic-toggle-btn"]')).toBeVisible();
    await expect(page.locator('[data-testid="cam-toggle-btn"]')).toBeVisible();
    await expect(page.locator('[data-testid="share-screen-btn"]')).toBeVisible();
    await expect(page.locator('[data-testid="low-bandwidth-toggle"]')).toBeVisible();
    await expect(page.locator('[data-testid="report-conduct-btn"]')).toBeVisible();
  });

  test("2. Network resilience and 1-tap low-bandwidth 2G/3G audio mode (CL-05)", async ({
    page,
  }) => {
    await page.goto("/classroom/bkg-seed-001?role=STUDENT");

    // Activate low bandwidth mode
    const lowDataBtn = page.locator('[data-testid="low-bandwidth-toggle"]');
    await lowDataBtn.click();

    // Verify low bandwidth mode panel
    await expect(page.locator('[data-testid="low-bandwidth-panel"]')).toBeVisible();
    await expect(page.locator("text=Optimised Audio & Whiteboard Mode Active")).toBeVisible();
    await expect(page.locator('[data-testid="low-bandwidth-active-pill"]')).toBeVisible();

    // Open Helpline Fallback modal
    await page.locator('[data-testid="fallback-help-btn"]').click();
    const fallbackModal = page.locator('[data-testid="fallback-modal"]');
    await expect(fallbackModal).toBeVisible();
    await expect(fallbackModal).toContainText("+234 1 800 TRAINBOW");
    await expect(fallbackModal).toContainText("support@trainbowhub.ng");

    // Close modal
    await page.locator('[data-testid="close-fallback-btn"]').click({ force: true });
    await expect(fallbackModal).not.toBeVisible();
  });

  test("3. In-session emergency safeguarding conduct report flow (CL-04)", async ({
    page,
  }) => {
    await page.goto("/classroom/bkg-seed-001?role=STUDENT");

    // Click Report Conduct CTA
    await page.locator('[data-testid="report-conduct-btn"]').click({ force: true });

    const safeguardModal = page.locator('[data-testid="safeguard-modal"]');
    await expect(safeguardModal).toBeVisible();
    await expect(safeguardModal).toContainText("Emergency Safeguarding & Conduct Report");

    // Select Severity & Category
    await page.locator('[data-testid="safeguard-severity-select"]').selectOption("URGENT");
    await page.locator('[data-testid="safeguard-category-select"]').selectOption("SAFETY_CONCERN");

    // Fill description
    await page
      .locator('[data-testid="safeguard-description-input"]')
      .fill("Test emergency report: audio dropped and unexpected third party detected.");

    // Submit report
    await page.locator('[data-testid="safeguard-submit-btn"]').click({ force: true });

    // Verify success banner and triage commitment (< 24h)
    const successBanner = page.locator('[data-testid="safeguard-success-banner"]');
    await expect(successBanner).toBeVisible();
    await expect(successBanner).toContainText("Report Successfully Dispatched");
    await expect(successBanner).toContainText("Grace Danladi");
  });

  test("4. Tutor marks lesson complete and student submits post-session rating", async ({
    page,
  }) => {
    // 1. Tutor view
    await page.goto("/classroom/bkg-seed-001?role=TUTOR");
    const completeBtn = page.locator('[data-testid="complete-lesson-btn"]');
    await expect(completeBtn).toBeVisible();

    // Accept dialog confirmation
    page.once("dialog", async (dialog) => {
      await dialog.accept();
    });
    await completeBtn.click({ force: true });

    // 2. Verify status badge updates
    await expect(page.locator('[data-testid="session-status-badge"]')).toContainText("COMPLETED");

    // 3. Review modal is automatically presented upon lesson completion
    const reviewModal = page.locator('[data-testid="review-modal"]');
    await expect(reviewModal).toBeVisible();
    await page.locator('[data-testid="rating-star-5"]').click({ force: true });
    await page
      .locator('[data-testid="review-comment-input"]')
      .fill("Dr. Tayo was exceptionally clear in demonstrating quadratic discriminant proofs. Highly recommended!");

    await page.locator('[data-testid="submit-review-btn"]').click({ force: true });

    // 5. Verify review confirmation
    await expect(page.locator('[data-testid="review-success-banner"]')).toBeVisible();
  });

  test("5. Session access revoked upon booking cancellation (CL-02)", async ({
    page,
  }) => {
    // Cancel the seed booking via API (BK-07, CL-02)
    const cancelRes = await page.request.post("/api/bookings/bkg-seed-001/cancel", {
      data: {
        reason: "Scheduling conflict under NDPA policy",
      },
    });
    expect(cancelRes.ok()).toBeTruthy();

    // Attempt to access cancelled session
    await page.goto("/classroom/bkg-seed-001?role=STUDENT");

    // Verify revoked banner
    const revokedBanner = page.locator('[data-testid="session-revoked-banner"]');
    await expect(revokedBanner).toBeVisible();
    await expect(page.locator('[data-testid="revoked-error-message"]')).toContainText("Session access revoked");
    await expect(page.getByRole("button", { name: "Return to Bookings Hub" })).toBeVisible();
  });
});
