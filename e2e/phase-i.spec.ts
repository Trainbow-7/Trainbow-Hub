import { test, expect } from "@playwright/test";

test.describe("Phase I: Multi-Subject Registry, Dynamic Curriculum & AI Subject Governance (SB-01 to SB-09)", () => {
  test.beforeEach(async ({ page }) => {
    // Reset database to ensure predictable state
    await page.request.post("/api/auth/reset");
  });

  test("1. Public Multi-Subject Explorer: active subjects, category filtering, and AI badges (SB-01, SB-04, SB-05)", async ({
    page,
  }) => {
    await page.goto("/subjects");

    // Verify main heading
    await expect(page.locator("h1")).toContainText("Explore All Subjects");

    // Verify active subjects are present in grid
    const grid = page.locator('[data-testid="subjects-catalog-grid"]');
    await expect(grid).toBeVisible();
    await expect(grid.locator('[data-testid="subject-card-mathematics"]')).toBeVisible();
    await expect(grid.locator('[data-testid="subject-card-english-language"]')).toBeVisible();
    await expect(grid.locator('[data-testid="subject-card-physics"]')).toBeVisible();
    await expect(grid.locator('[data-testid="subject-card-chemistry"]')).toBeVisible();

    // Verify DRAFT subjects are hidden from public catalogue (SB-01)
    await expect(grid.locator('[data-testid="subject-card-biology"]')).not.toBeVisible();

    // Verify AI badges (SB-05)
    await expect(grid.locator('[data-testid="ai-badge-active-mathematics"]')).toBeVisible();
    await expect(grid.locator('[data-testid="ai-badge-eval-english-language"]')).toBeVisible();

    // Filter by category: Languages
    await page.getByRole("button", { name: "Languages" }).click();
    await expect(grid.locator('[data-testid="subject-card-english-language"]')).toBeVisible();
    await expect(grid.locator('[data-testid="subject-card-mathematics"]')).not.toBeVisible();

    // Reset filter
    await page.getByRole("button", { name: "All Categories" }).click();
    await expect(grid.locator('[data-testid="subject-card-mathematics"]')).toBeVisible();
  });

  test("2. Subject Detail Page with Active Socratic AI Launcher (SB-04, SB-05)", async ({
    page,
  }) => {
    await page.goto("/subjects/mathematics");

    // Verify subject details
    await expect(page.locator('[data-testid="subject-detail-title"]')).toContainText("Mathematics");
    await expect(page.getByText("WAEC/JAMB", { exact: false })).toBeVisible();

    // Verify Active Socratic AI launcher banner
    const launcher = page.locator('[data-testid="subject-ai-launcher"]');
    await expect(launcher).toBeVisible();
    await expect(launcher.getByText("Launch Socratic AI Assistant")).toBeVisible();

    // Verify approved tutors and courses for Mathematics
    await expect(page.locator('[data-testid="subject-tutors-list"]')).toBeVisible();
    await expect(page.locator('[data-testid="subject-tutor-card-dr-tayo-okafor"]')).toBeVisible();
    await expect(page.locator('[data-testid="subject-courses-list"]')).toBeVisible();
  });

  test("3. Subject Detail Page with In-Evaluation AI Gate Notice (SB-05, SB-06)", async ({
    page,
  }) => {
    await page.goto("/subjects/english-language");

    await expect(page.locator('[data-testid="subject-detail-title"]')).toContainText("English Language");

    // Verify AI pending quality evaluation notice (SB-05)
    const pendingNotice = page.locator('[data-testid="subject-ai-pending-notice"]');
    await expect(pendingNotice).toBeVisible();
    await expect(pendingNotice.getByText("Academic Quality Gate Active (SB-06)")).toBeVisible();
  });

  test("4. Admin Subjects Registry, New Subject Creation & Pre-Release AI Evaluation Gate (SB-01, SB-06, SB-07)", async ({
    page,
  }) => {
    await page.goto("/admin");
    await page.locator('[data-testid="admin-quick-signin-btn"]').click();

    // Open Subjects & AI Gates Tab
    await page.locator('[data-testid="tab-subjects"]').click();
    await expect(page.locator('[data-testid="subjects-table"]')).toBeVisible();

    // Verify seeded subjects appear in table
    const table = page.locator('[data-testid="subjects-table"]');
    await expect(table.locator('[data-testid="subject-row-mathematics"]')).toBeVisible();
    await expect(table.locator('[data-testid="subject-row-english-language"]')).toBeVisible();

    // 1. Register a New Subject (SB-01)
    await page.locator('[data-testid="add-subject-btn"]').click();
    await expect(page.locator('[data-testid="add-subject-modal"]')).toBeVisible();

    await page.locator("#new-sub-name").fill("Further Mathematics");
    await page.locator("#new-sub-slug").fill("further-mathematics");
    await page.locator("#new-sub-desc").fill("Advanced pure mathematics, vectors and mechanics for SSS candidates.");
    await page.getByRole("button", { name: "Create Subject" }).click();

    await expect(page.locator("text=registered successfully in DRAFT status")).toBeVisible();

    // 2. Pre-Release AI Safety Gate Enforcement (SB-06)
    // English Language evaluation scored 78.0% (<80%). Attempting to activate should be blocked
    await page.locator('[data-testid="toggle-ai-btn-english-language"]').click();
    await expect(page.locator("text=Pre-release safety and pedagogical evaluation has not passed")).toBeVisible();

    // 3. Perform Formal Evaluation to Unlock Gate (SB-06)
    await page.locator('[data-testid="eval-subject-btn-english-language"]').click();
    await expect(page.locator('[data-testid="ai-eval-modal"]')).toBeVisible();

    // Fill passing rubric benchmark (88.5%)
    await page.locator('[data-testid="eval-rubric-score-input"]').fill("88.5");
    await page.locator('[data-testid="eval-signature-input"]').fill("Admin Lead Evaluator Grace Danladi");
    await page.locator('[data-testid="submit-eval-btn"]').click();

    await expect(page.locator("text=Evaluation PASSED (88.5%). AI gate unlocked")).toBeVisible();

    // Now Activate AI toggle should succeed
    await page.locator('[data-testid="toggle-ai-btn-english-language"]').click();
    await expect(page.locator("text=AI Socratic Assistant successfully activated")).toBeVisible();
  });

  test("5. Multi-Subject Tutor Qualifications Queue & Approval Workflow (SB-03)", async ({
    page,
  }) => {
    await page.goto("/admin");
    await page.locator('[data-testid="admin-quick-signin-btn"]').click();

    // Navigate to Subjects Tab
    await page.locator('[data-testid="tab-subjects"]').click();

    // Verify Tutor Qualifications Table
    const qualTable = page.locator('[data-testid="tutor-subject-qualifications-table"]');
    await expect(qualTable).toBeVisible();
    await expect(qualTable.getByText("dr-tayo-okafor").first()).toBeVisible();
  });
});
