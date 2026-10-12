import { test, expect } from "@playwright/test";

test.describe("Phase L: Institutional School Administration, Multilingual & Low-Bandwidth PWA (SC-01 to SC-05, ADR-013)", () => {
  test.beforeEach(async ({ page }) => {
    // Reset database to initial seed state
    await page.request.post("http://localhost:3000/api/auth/reset");
  });

  test("SC-01 & SC-03: School overview, cohort registry, and institutional license seat meter", async ({ page }) => {
    await page.goto("http://localhost:3000/school");

    // Page container loaded
    const container = page.locator('[data-testid="school-page-container"]');
    await expect(container).toBeVisible();

    // Verify institutional title and badge
    await expect(page.locator("h1")).toContainText(/School Administration Hub|Ilé Ìṣàkóso/);

    // Verify license seat meter
    const seatMeter = page.locator('[data-testid="license-seat-meter"]');
    await expect(seatMeter).toBeVisible();
    await expect(seatMeter).toContainText("500");

    // Verify cohort cards rendered
    const cohorts = page.locator('[data-testid="cohort-card"]');
    await expect(cohorts.first()).toBeVisible();
    await expect(page.getByText("SSS 3 Gold - WAEC Sciences")).toBeVisible();

    // Switch institution to Corona Secondary School
    const selector = page.locator('[data-testid="school-selector"]');
    await selector.selectOption("sch-seed-002");
    await expect(page.getByText("CSS-2026")).toBeVisible();
  });

  test("SC-02: Bulk student roster onboarding and seat allocation", async ({ page }) => {
    await page.goto("http://localhost:3000/school");

    // Open bulk enrollment modal
    const openBtn = page.locator('[data-testid="open-bulk-enroll-modal"]');
    await openBtn.click();

    // Verify modal is open
    const textarea = page.locator('[data-testid="bulk-enroll-textarea"]');
    await expect(textarea).toBeVisible();

    // Input new students
    await textarea.fill("Ayo Fayemi, ayo.f@kcl.ng, SSS 3, coh-seed-001\nNkechi Obi, nkechi.o@kcl.ng, SSS 3, coh-seed-001");

    // Submit
    const submitBtn = page.locator('[data-testid="submit-bulk-enroll-button"]');
    await submitBtn.click();

    // Check success feedback
    await expect(page.getByText(/Successfully enrolled 2 students/)).toBeVisible();

    // Switch to Students tab and verify roster
    await page.getByRole("button", { name: /Enrolled Students Roster/ }).click();
    const table = page.locator('[data-testid="student-roster-table"]');
    await expect(table).toBeVisible();
    await expect(table).toContainText("Ayo Fayemi");
    await expect(table).toContainText("Nkechi Obi");
  });

  test("SC-04: Regional multilingual localization across 5 languages", async ({ page }) => {
    await page.goto("http://localhost:3000/school");

    // Switch to Multilingual tab
    await page.getByRole("button", { name: /Multilingual Localization/ }).click();
    await expect(page.getByText("5-Language Regional Localization Engine")).toBeVisible();

    // Switch to Yoruba via selector
    const localeSelect = page.locator('[data-testid="locale-preview-select"]');
    await localeSelect.selectOption("yo");

    // Header updates to Yoruba
    await expect(page.locator("h1")).toContainText("Ilé Ìṣàkóso Àwọn Ilé-Ẹ̀kọ́");

    // Switch to Nigerian Pidgin
    await localeSelect.selectOption("pcm");
    await expect(page.locator("h1")).toContainText("School Admin Centre");
  });

  test("SC-05: Offline quiz attempt queuing and cloud synchronization", async ({ page }) => {
    await page.goto("http://localhost:3000/school");

    // Switch to Offline PWA tab
    await page.getByRole("button", { name: /Low-Bandwidth & Offline PWA/ }).click();
    await expect(page.getByText("Resilient Progressive Web App")).toBeVisible();

    // Simulate offline quiz attempt
    const simBtn = page.locator('[data-testid="simulate-offline-quiz-btn"]');
    await simBtn.click();

    // Should indicate at least 1 queued attempt
    await expect(page.getByText(/1 Queued/)).toBeVisible();

    // Click Sync Now
    const syncBtn = page.locator('[data-testid="sync-offline-btn"]');
    await syncBtn.click();

    // Sync status completed message
    await expect(page.getByText(/Sync completed/)).toBeVisible();
  });
});
