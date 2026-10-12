import { test, expect } from "@playwright/test";

test.describe("Phase J: Full Parent & Guardian Oversight Portal (PP-01 to PP-05)", () => {
  test.beforeEach(async ({ page }) => {
    // Reset database to ensure clean, predictable state
    await page.request.post("/api/auth/reset");
  });

  test("1. Guardian Authentication, Multi-Child Progress & Assessment Tracking (PP-01)", async ({
    page,
  }) => {
    // Authenticate as Parent
    await page.request.post("/api/auth/login", {
      data: { email: "parent@trainbowhub.ng", password: "Trainbow2026!" },
    });

    await page.goto("/guardian");

    // Verify main portal heading and compliance badges
    await expect(page.locator("h1")).toContainText("Parent & Guardian Oversight Portal");
    await expect(page.getByText("NDPA 2023 & Child Rights Act Compliant", { exact: false })).toBeVisible();

    // Verify Chioma Adeleke ward card
    const wardCard = page.locator('[data-testid="ward-card-usr-std-001"]');
    await expect(wardCard).toBeVisible();
    await expect(wardCard.getByText("Chioma Adeleke")).toBeVisible();
    await expect(wardCard.getByText("Verified", { exact: true })).toBeVisible();

    // Verify course curriculum progress
    await expect(wardCard.getByText("11% Complete", { exact: false })).toBeVisible();
    await expect(wardCard.getByText("1 lessons finished", { exact: false })).toBeVisible();

    // Verify quiz metrics & revision focus
    await expect(wardCard.getByText("Avg: 67%", { exact: false })).toBeVisible();
    await expect(wardCard.getByText("Unknown Number Bases & Linear Formulation", { exact: false })).toBeVisible();

    // Verify daily study streak and AI quota
    await expect(wardCard.getByText("5 Days", { exact: false })).toBeVisible();
    await expect(wardCard.getByText("145 mins studied", { exact: false })).toBeVisible();
    await expect(wardCard.getByText("0 / 10", { exact: false })).toBeVisible();
  });

  test("2. Timetable & 1-Tap Guardian Observer Entry into Classroom (PP-02)", async ({
    page,
  }) => {
    // Authenticate as Parent
    await page.request.post("/api/auth/login", {
      data: { email: "parent@trainbowhub.ng", password: "Trainbow2026!" },
    });

    await page.goto("/guardian");

    // Switch to Timetable tab
    await page.locator('[data-testid="tab-guardian-timetable"]').click();

    // Verify booking entry
    const timetableItem = page.locator('[data-testid="timetable-item-bkg-seed-001"]');
    await expect(timetableItem).toBeVisible();
    await expect(timetableItem.getByText("Mathematics")).toBeVisible();
    await expect(timetableItem.getByText("Tutor: Dr. Tayo Okafor")).toBeVisible();
    await expect(timetableItem.getByText("Chioma Adeleke")).toBeVisible();

    // Verify 1-tap observer link and click it
    const observerLink = timetableItem.locator('[data-testid="guardian-observer-link"]');
    await expect(observerLink).toBeVisible();
    await observerLink.click();

    // Verify redirected to classroom with role=GUARDIAN
    await expect(page).toHaveURL(/.*\/classroom\/bkg-seed-001\?role=GUARDIAN/);

    // Verify Guardian Active Observer banner is displayed in virtual classroom
    const observerBanner = page.locator('[data-testid="guardian-observer-banner"]');
    await expect(observerBanner).toBeVisible();
    await expect(observerBanner).toContainText("Guardian Active Observer Mode");
  });

  test("3. Post-Lesson Qualitative Tutor Progress Notes & Homework (PP-04)", async ({
    page,
  }) => {
    await page.request.post("/api/auth/login", {
      data: { email: "parent@trainbowhub.ng", password: "Trainbow2026!" },
    });

    await page.goto("/guardian");

    // Switch to Tutor Notes tab
    await page.locator('[data-testid="tab-guardian-notes"]').click();

    // Verify tutor progress note
    const noteCard = page.locator('[data-testid="tutor-note-tpn-seed-001"]');
    await expect(noteCard).toBeVisible();
    await expect(noteCard.getByText("Mathematics Lesson Evaluation")).toBeVisible();
    await expect(noteCard.getByText("Chioma demonstrated strong conceptual grasp")).toBeVisible();
    await expect(noteCard.getByText("Demonstrated Strengths")).toBeVisible();
    await expect(noteCard.getByText("Target Areas for Growth")).toBeVisible();
    await expect(noteCard.getByText("WAEC 2024 Section B Questions")).toBeVisible();
  });

  test("4. Unified Paystack Receipts & Financial Ledger (PP-02)", async ({
    page,
  }) => {
    await page.request.post("/api/auth/login", {
      data: { email: "parent@trainbowhub.ng", password: "Trainbow2026!" },
    });

    await page.goto("/guardian");

    // Switch to Receipts tab
    await page.locator('[data-testid="tab-guardian-receipts"]').click();

    // Verify receipt table
    const table = page.locator('[data-testid="guardian-receipts-table"]');
    await expect(table).toBeVisible();
    await expect(table.getByText("tb_pay_seed_001")).toBeVisible();
    await expect(table.getByText("₦7,500.00", { exact: false })).toBeVisible();

    // Click View Receipt
    await page.locator('[data-testid="view-receipt-btn-tb_pay_seed_001"]').click();

    // Verify receipt modal
    await expect(page.getByText("Official Payment Receipt")).toBeVisible();
    await expect(page.getByText("Paystack Payments Nigeria", { exact: false })).toBeVisible();

    // Close modal
    await page.getByRole("button", { name: "Close Receipt" }).click();
    await expect(page.getByText("Official Payment Receipt")).not.toBeVisible();
  });

  test("5. Privacy-First Notifications & Mandatory Generic Lockscreen Previews (PP-03)", async ({
    page,
  }) => {
    await page.request.post("/api/auth/login", {
      data: { email: "parent@trainbowhub.ng", password: "Trainbow2026!" },
    });

    await page.goto("/guardian");

    // Switch to Notifications tab
    await page.locator('[data-testid="tab-guardian-notifications"]').click();

    // Verify lockscreen preview text displays generic invariant
    const previewText = page.locator('[data-testid="lockscreen-preview-text"]');
    await expect(previewText).toBeVisible();
    await expect(previewText).toContainText("Trainbow Hub: New activity update for your ward");

    // Change preferences and save
    await page.locator('[data-testid="select-digest-frequency"]').selectOption("DAILY_DIGEST");
    await page.locator('[data-testid="save-preferences-btn"]').click();

    // Verify confirmation notice
    await expect(page.locator('[data-testid="guardian-notice-banner"]')).toContainText(
      "Notification preferences saved with NDPA privacy protections active."
    );
  });

  test("6. Verified Child Linking Workflow (OTP) & Immediate Access Revocation (PP-04, PP-05)", async ({
    page,
  }) => {
    await page.request.post("/api/auth/login", {
      data: { email: "parent@trainbowhub.ng", password: "Trainbow2026!" },
    });

    await page.goto("/guardian");

    // Click Link Additional Ward
    await page.locator('[data-testid="link-ward-button"]').click();
    await expect(page.getByText("Link Student Ward")).toBeVisible();

    // Fill linking form for minor student Kelechi Eze
    await page.locator('[data-testid="input-link-student-email"]').fill("minor@trainbowhub.ng");
    await page.getByRole("button", { name: "Fill Demo OTP (202610)" }).click();
    await page.locator('[data-testid="select-link-relationship"]').selectOption("Father");
    await page.locator('[data-testid="submit-link-child-btn"]').click();

    // Verify success banner and new ward card
    await expect(page.locator('[data-testid="guardian-notice-banner"]')).toContainText("Successfully verified and linked Kelechi Eze");
    const minorCard = page.locator('[data-testid="ward-card-usr-std-minor-002"]');
    await expect(minorCard).toBeVisible();
    await expect(minorCard.getByText("Kelechi Eze")).toBeVisible();

    // Now test PP-04 Immediate Access Revocation: accept the confirm dialog
    page.on("dialog", (dialog) => dialog.accept());
    await page.locator('[data-testid="revoke-ward-btn-usr-std-minor-002"]').click();

    // Verify revocation success notice
    await expect(page.locator('[data-testid="guardian-notice-banner"]')).toContainText(
      "Guardian access revoked immediately."
    );

    // Kelechi Eze should no longer appear in the verified list!
    await expect(page.locator('[data-testid="ward-card-usr-std-minor-002"]')).not.toBeVisible();
  });
});
