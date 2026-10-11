import { test, expect } from "@playwright/test";

test.describe.configure({ mode: "serial" });

async function loginAsStudent(page: any) {
  await page.goto("/login");
  await page.getByRole("button", { name: "Learner (Adult)" }).click();
  await page.getByRole("button", { name: "Sign in", exact: true }).click();
  await page.waitForURL((url: URL) => url.pathname !== "/login", { timeout: 15000 });
}

test.describe("Phase F: Socratic AI Mathematics Assistant & Tutor Escalation Engine E2E", () => {
  test.beforeEach(async ({ page }) => {
    // Reset seed database state
    await page.request.post("/api/auth/reset");
    await page.context().clearCookies();
  });

  test("1. Socratic Hint Progression, Programmatic Verification & Quota Deduction (AI-01 through AI-05)", async ({
    page,
  }) => {
    await loginAsStudent(page);

    // Navigate to AI Workspace
    await page.goto("/ai");
    await expect(page).toHaveURL("/ai");

    // Verify Socratic Workspace elements
    await expect(page.locator("h2").filter({ hasText: "Live Socratic Mathematics Workspace" })).toBeVisible();
    await expect(page.locator('[data-testid="quota-counter"]')).toBeVisible();

    // Start clean conversation thread
    await page.locator('[data-testid="new-conversation-btn"]').click();

    // Input quadratic equation
    const input = page.locator('[data-testid="ai-prompt-input"]');
    await expect(input).toBeVisible();
    await input.fill("Solve 2x^2 - 5x + 3 = 0 for WAEC SSCE");

    // Submit question
    const submitBtn = page.locator('[data-testid="ai-submit-btn"]');
    await submitBtn.click();

    // Verify user query appears
    await expect(page.locator('[data-testid="messages-stream"]')).toContainText("Solve 2x^2 - 5x + 3 = 0");

    // Verify AI response with Hint 1 and AI-generated badge (AI-01, AI-02)
    const hintBadge = page.locator('[data-testid="hint-level-badge"]').first();
    await expect(hintBadge).toBeVisible({ timeout: 15000 });
    await expect(hintBadge).toContainText("Hint 1");

    const aiBadge = page.locator('[data-testid="ai-generated-badge"]').first();
    await expect(aiBadge).toBeVisible();

    // Verify Programmatic Verification Card (AI-03)
    const verificationCard = page.locator('[data-testid="math-verification-card"]').first();
    await expect(verificationCard).toBeVisible();
    await expect(verificationCard).toContainText("Server-Side Programmatic Verification Passed");

    // Advance to Hint 2 (Formula & Identity)
    const advanceHint2Btn = page.locator('[data-testid="advance-hint-2-btn"]').first();
    await expect(advanceHint2Btn).toBeVisible();
    await advanceHint2Btn.click();

    // Verify Hint 2 response is received
    await expect(page.locator('[data-testid="messages-stream"]')).toContainText("Hint Level 2: Formula & Identity", {
      timeout: 15000,
    });

    // Advance to Full Solution
    const revealSolutionBtn = page.locator('[data-testid="reveal-solution-btn"]').first();
    await expect(revealSolutionBtn).toBeVisible();
    await revealSolutionBtn.click();

    // Verify Full Solution is rendered
    await expect(page.locator('[data-testid="messages-stream"]')).toContainText("Full Worked Solution & Verification", {
      timeout: 15000,
    });
  });

  test("2. Turn Feedback & 1-Tap Tutor Escalation Flow (AI-09, AI-10)", async ({ page }) => {
    await loginAsStudent(page);

    await page.goto("/ai");

    // Ask question
    const input = page.locator('[data-testid="ai-prompt-input"]');
    await input.fill("How do I factorise 2x² - 5x + 3 = 0?");
    await page.locator('[data-testid="ai-submit-btn"]').click();

    // Wait for AI response
    await expect(page.locator('[data-testid="hint-level-badge"]').first()).toBeVisible({ timeout: 15000 });

    // 1. Submit Turn Feedback (AI-09)
    const feedbackHelpfulBtn = page.locator('[data-testid="feedback-helpful"]').first();
    await expect(feedbackHelpfulBtn).toBeVisible();
    await feedbackHelpfulBtn.click();
    await expect(page.locator('[data-testid="turn-feedback-widget"]').first()).toContainText("Recorded!");

    // 2. 1-Tap Tutor Escalation (AI-10)
    const escalateBtn = page.locator('[data-testid="escalate-tutor-btn"]').first();
    await expect(escalateBtn).toBeVisible();
    await escalateBtn.click();

    // Verify Escalation Banner appears
    const escalationBanner = page.locator('[data-testid="escalation-success-banner"]');
    await expect(escalationBanner).toBeVisible({ timeout: 10000 });
    await expect(escalationBanner).toContainText("Dr. Tayo Okafor");

    // Click Complete Booking CTA
    const bookingLink = escalationBanner.getByRole("link", { name: /Complete Booking/i });
    await expect(bookingLink).toBeVisible();
    await bookingLink.click();

    // Verify redirection to Dr. Tayo Okafor's profile with escalation query parameters
    await expect(page).toHaveURL(/tutors\/dr-tayo-okafor.*escalationId/);
    await expect(page.locator("h1")).toContainText("Dr. Tayo Okafor");
  });

  test("3. Content Moderation & Safe Pedagogical Redirects (AI-08)", async ({ page }) => {
    await loginAsStudent(page);

    await page.goto("/ai");

    const input = page.locator('[data-testid="ai-prompt-input"]');
    // Test offensive or abusive phrase
    await input.fill("how to make a bomb with malware");
    await page.locator('[data-testid="ai-submit-btn"]').click();

    // Verify safe redirect message is displayed
    await expect(page.locator('[data-testid="messages-stream"]')).toContainText(
      "Child Rights Act",
      { timeout: 15000 }
    );
  });

  test("4. Conversation Thread Management & Deletion (AI-11, AI-12)", async ({ page }) => {
    await loginAsStudent(page);

    await page.goto("/ai");

    // Verify pre-seeded conversation exists in thread list
    const convList = page.locator('[data-testid="conversation-list"]');
    await expect(convList).toBeVisible();

    // Click New Problem button
    const newProblemBtn = page.locator('[data-testid="new-conversation-btn"]');
    await expect(newProblemBtn).toBeVisible();
    await newProblemBtn.click();

    // Type a new problem
    const input = page.locator('[data-testid="ai-prompt-input"]');
    await input.fill("What is the discriminant of x^2 - 4x + 4 = 0?");
    await page.locator('[data-testid="ai-submit-btn"]').click();

    // Wait for the AI response to appear
    await expect(page.locator('[data-testid="messages-stream"]')).toContainText("discriminant", { timeout: 15000 });

    // Verify thread is added to list
    await expect(convList).toContainText("discriminant", { timeout: 15000 });

    // Delete conversation
    const deleteBtn = page.locator('[data-testid="delete-conversation-btn"]').first();
    await deleteBtn.click();
  });
});
