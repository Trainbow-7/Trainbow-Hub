import { test, expect } from "@playwright/test";

test.describe.configure({ mode: "serial" });

test.describe("Phase H: Administration, Safeguarding Triage & Financial Operations Hub (AD-01 to AD-06, PY-07 to PY-09)", () => {
  test.beforeEach(async ({ page }) => {
    // Reset seed database state to clean baseline
    await page.request.post("/api/auth/reset");
    await page.context().clearCookies();
  });

  test("1. Enforces AD-01 RBAC: guest sees sign-in portal; student gets 403 Forbidden", async ({
    page,
  }) => {
    // 1. Guest visits /admin
    await page.goto("/admin");
    await expect(page.locator("h1")).toContainText("Trainbow Administrator Sign-In", { timeout: 15000 });
    await expect(page.locator('[data-testid="admin-quick-signin-btn"]')).toBeVisible();

    // 2. Login as regular student
    await page.goto("/login");
    await page.locator('input[type="email"]').fill("student@trainbowhub.ng");
    await page.locator('input[type="password"]').fill("Trainbow2026!");
    await page.locator('button[type="submit"]').click();
    await page.waitForURL("/");

    // 3. Attempt to access /admin as student
    await page.goto("/admin");
    const forbiddenBanner = page.locator('[data-testid="admin-403-banner"]');
    await expect(forbiddenBanner).toBeVisible();
    await expect(forbiddenBanner).toContainText("403 — Administrative Privilege Required");
    await expect(forbiddenBanner).toContainText("AD-01 least-privilege standards");
  });

  test("2. Admin sign-in, WAT clock, KPI metrics, and operational alert ticker (AD-01, AD-06)", async ({
    page,
  }) => {
    await page.goto("/admin");
    await page.locator('[data-testid="admin-quick-signin-btn"]').click();

    // Verify Admin Header
    await expect(page.locator("text=Trainbow HUB Operations")).toBeVisible();
    await expect(page.locator("text=AD-01 Platform Admin")).toBeVisible();

    // WAT Clock
    const clock = page.locator('[data-testid="wat-admin-clock"]');
    await expect(clock).toBeVisible();
    await expect(clock).toContainText("WAT");

    // KPI Cards
    await expect(page.locator('[data-testid="kpi-total-users"]')).toBeVisible();
    await expect(page.locator('[data-testid="kpi-gross-volume"]')).toBeVisible();
    await expect(page.locator('[data-testid="kpi-open-incidents"]')).toBeVisible();
    await expect(page.locator('[data-testid="kpi-ai-cost"]')).toBeVisible();

    // Active alerts pill / ticker
    const alertBadge = page.locator('[data-testid="active-alerts-badge"]');
    if (await alertBadge.isVisible()) {
      await expect(alertBadge).toContainText("Alerts");
    }
  });

  test("3. Tutor vetting queue, credential inspection modal, and approval workflow (AD-02)", async ({
    page,
  }) => {
    // Sign in as admin
    await page.goto("/admin");
    await page.locator('[data-testid="admin-quick-signin-btn"]').click();

    // Navigate to Tutor Vetting tab
    await page.locator('[data-testid="tab-tutors"]').click();
    await expect(page.locator('[data-testid="tutor-vetting-table"]')).toBeVisible();

    // Locate pending tutor Amina Bello
    await expect(page.locator("text=Amina Bello")).toBeVisible();
    await expect(page.locator("text=NIN-29481729381")).toBeVisible();

    // Inspect credentials modal
    await page.locator('[data-testid="inspect-tutor-amina-bello"]').click();
    await expect(page.locator("text=Credential Inspection: Amina Bello")).toBeVisible();
    await expect(page.locator("text=Teachers Registration Council (TRCN)")).toBeVisible();

    // Approve tutor from modal
    await page.locator('[data-testid="modal-approve-tutor-btn"]').click();

    // Verify success banner and status transition to APPROVED
    await expect(page.locator("text=Tutor approved and listed in public directory")).toBeVisible();
  });

  test("4. Safeguarding incident triage with <24h SLA tracking and case resolution (AD-04, CL-04)", async ({
    page,
  }) => {
    await page.goto("/admin");
    await page.locator('[data-testid="admin-quick-signin-btn"]').click();

    // Navigate to Safeguarding tab
    await page.locator('[data-testid="tab-safeguarding"]').click();
    await expect(page.locator('[data-testid="safeguarding-queue"]')).toBeVisible();

    // Verify urgent incident SLA display
    const queue = page.locator('[data-testid="safeguarding-queue"]');
    await expect(queue.getByText("URGENT", { exact: true })).toBeVisible();
    await expect(queue.getByText(/SLA remaining/)).toBeVisible();

    // Open triage modal
    const triageBtn = page.locator('[data-testid^="triage-btn-"]').first();
    await triageBtn.click();

    // Update status to RESOLVED
    await page.locator('[data-testid="triage-status-select"]').selectOption("RESOLVED");
    await page.locator('[data-testid="triage-notes-textarea"]').fill("Actioned: Contacted guardian and resolved complaint.");
    await page.locator('[data-testid="resolve-incident-btn"]').click();

    // Verify toast confirmation
    await expect(page.locator("text=updated to RESOLVED")).toBeVisible();
  });

  test("5. Settlement reconciliation and manual tutor payout disbursement (PY-07, PY-08)", async ({
    page,
  }) => {
    await page.goto("/admin");
    await page.locator('[data-testid="admin-quick-signin-btn"]').click();

    // Navigate to Finance tab
    await page.locator('[data-testid="tab-finance"]').click();
    await expect(page.locator('[data-testid="reconciliation-panel"]')).toBeVisible();
    await expect(page.locator('[data-testid="payouts-table"]')).toBeVisible();

    // Run Daily Reconciliation
    await page.locator('[data-testid="run-reconcile-btn"]').click();
    await expect(page.locator("text=Settlement reconciliation report generated successfully")).toBeVisible();

    // Disburse Tutor Payout to Dr. Tayo Okafor
    const payoutBtn = page.locator('[data-testid="process-payout-btn-dr-tayo-okafor"]');
    if (await payoutBtn.isEnabled()) {
      await payoutBtn.click();
      await expect(page.locator("text=Disburse Payout: Dr. Tayo Okafor")).toBeVisible();

      // Enter payout amount (₦5,000)
      await page.locator('[data-testid="payout-amount-input"]').fill("500000");
      await page.locator('[data-testid="confirm-payout-btn"]').click();

      // Verify success message
      await expect(page.locator("text=successfully disbursed and debited")).toBeVisible();
    }
  });

  test("6. AI cost, tokens, user access governance, and immutable audit log (AD-01, AD-05, AD-07)", async ({
    page,
  }) => {
    await page.goto("/admin");
    await page.locator('[data-testid="admin-quick-signin-btn"]').click();

    // 1. AI Usage Tab
    await page.locator('[data-testid="tab-ai"]').click();
    await expect(page.locator('[data-testid="ai-usage-panel"]')).toBeVisible();
    await expect(page.locator("text=Total Mathematical Queries")).toBeVisible();
    await expect(page.locator("text=Prompt Tokens")).toBeVisible();

    // 2. User Access Tab (AD-01)
    await page.locator('[data-testid="tab-users"]').click();
    await expect(page.locator('[data-testid="user-management-table"]')).toBeVisible();
    await expect(page.locator("text=Chioma Adeleke")).toBeVisible();

    // 3. Immutable Audit Log Tab (AD-07)
    await page.locator('[data-testid="tab-audit"]').click();
    await expect(page.locator('[data-testid="admin-audit-log"]')).toBeVisible();
    await expect(page.locator("text=PLATFORM_INITIALIZATION")).toBeVisible();
  });
});
