import { test, expect } from "@playwright/test";

test.describe("Phase M: Production Release Gates, Disaster Recovery & Handover (ADR-014, PRD Section 8 & 9)", () => {
  test.beforeEach(async ({ page }) => {
    // Reset database to initial seed state
    await page.request.post("http://localhost:3000/api/auth/reset");
  });

  test("RG-01: Release gates overview, readiness banner, and evidence inspection", async ({ page }) => {
    await page.goto("http://localhost:3000/release-gates");

    // Page container loaded
    const container = page.locator('[data-testid="release-gates-container"]');
    await expect(container).toBeVisible();

    // Verify header title
    await expect(page.locator("h1")).toContainText("Production Release Readiness & Handover");

    // Verify readiness banner
    const banner = page.locator('[data-testid="overall-readiness-banner"]');
    await expect(banner).toBeVisible();
    await expect(banner).toContainText("Ready for Public Launch");
    await expect(banner).toContainText("8/8 Passed");

    // Verify 8 gate cards rendered
    const gateCards = page.locator('[data-testid="gate-card"]');
    await expect(gateCards.first()).toBeVisible({ timeout: 15000 });
    await expect(gateCards).toHaveCount(8);

    // Click View Evidence on first gate
    await page.getByRole("button", { name: "View Evidence" }).first().click();
    await expect(page.getByText("Verified System Evidence Payload:")).toBeVisible();

    // Re-verify all gates
    const reverifyBtn = page.locator('[data-testid="reverify-all-gates-btn"]');
    await reverifyBtn.click();
    await expect(page.getByText("All 8 Production Release Gates successfully re-verified!")).toBeVisible();
  });

  test("RG-02: Disaster recovery automated snapshots and restore verification", async ({ page }) => {
    await page.goto("http://localhost:3000/release-gates");

    // Switch to Backups tab
    await page.getByRole("button", { name: /Disaster Recovery & Automated Backups/ }).click();
    await expect(page.getByRole("heading", { name: /Disaster Recovery, Automated Backups/ })).toBeVisible();
    await expect(page.getByText("RPO Target", { exact: true })).toBeVisible();
    await expect(page.getByText("RTO Target", { exact: true })).toBeVisible();

    // Trigger instant snapshot
    const backupBtn = page.locator('[data-testid="trigger-backup-btn"]');
    await backupBtn.click();
    await expect(page.getByText(/Backup archive verified with SHA-256 checksum/)).toBeVisible();

    // Verify backups table
    const table = page.locator('[data-testid="backups-table"]');
    await expect(table).toBeVisible();
    await expect(table.locator("tbody tr")).toHaveCount(2); // Seed + newly created

    // Demonstrate restore on first row
    await page.getByRole("button", { name: "Demonstrate Restore" }).first().click();
    await expect(page.getByText(/Restore demonstration successful/)).toBeVisible();
  });

  test("RG-03: NDPA 2023 privacy retention and statutory data erasure", async ({ page }) => {
    await page.goto("http://localhost:3000/release-gates");

    // Switch to Privacy tab
    await page.getByRole("button", { name: /NDPA 2023 Privacy & Retention/ }).click();
    await expect(page.getByText("Execute NDPA 2023 Statutory Privacy Erasure")).toBeVisible();

    // Execute purge
    const purgeBtn = page.locator('[data-testid="execute-purge-btn"]');
    await purgeBtn.click();
    await expect(page.getByText(/Privacy erasure complete/)).toBeVisible();
  });

  test("RG-04: 12 Platform handover deliverables checklist verification", async ({ page }) => {
    await page.goto("http://localhost:3000/release-gates");

    // Switch to Handover tab
    await page.getByRole("button", { name: /12 Platform Handover Deliverables/ }).click();
    const checklist = page.locator('[data-testid="handover-checklist"]');
    await expect(checklist).toBeVisible();

    // Verify all 12 handover cards are rendered
    await expect(page.getByText("Source code repository")).toBeVisible();
    await expect(page.getByText("Disaster recovery & backup runbook")).toBeVisible();
    await expect(page.getByText("Staff training curriculum for platform operations")).toBeVisible();
  });
});
