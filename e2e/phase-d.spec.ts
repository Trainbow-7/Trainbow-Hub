import { test, expect } from "@playwright/test";

test.describe.configure({ mode: "serial" });

async function loginAsStudent(page: any) {
  await page.goto("/login");
  await page.getByRole("button", { name: "Learner (Adult)" }).click();
  await page.getByRole("button", { name: "Sign in", exact: true }).click();
  await page.waitForURL("/");
}

async function loginAsTutor(page: any) {
  await page.goto("/login");
  await page.getByRole("button", { name: "Vetted Tutor" }).click();
  await page.getByRole("button", { name: "Sign in", exact: true }).click();
  await page.waitForURL("/");
}

test.describe("Phase D: Academy & Native Learning Engine E2E", () => {
  test.beforeEach(async ({ page }) => {
    // Reset seed database state to ensure deterministic assertions
    await page.request.post("/api/auth/reset");
    await page.context().clearCookies();
  });

  test("1. Student Learning Dashboard renders streak, KPIs, hero resume, and revision recommendations", async ({
    page,
  }) => {
    // Sign in as Adult Student (Chioma Adeleke)
    await loginAsStudent(page);

    // Navigate to Dashboard
    await page.goto("/dashboard");
    await expect(page).toHaveURL("/dashboard");

    // Verify Welcome header & Streak counter
    await expect(page.locator("h1")).toContainText("Welcome back, Chioma!");
    const streakCounter = page.locator('[data-testid="streak-counter"]');
    await expect(streakCounter).toBeVisible();
    await expect(streakCounter).toContainText("Days Active");

    // Verify KPI counters
    await expect(page.locator('[data-testid="enrolled-courses-count"]')).toBeVisible();
    await expect(page.locator('[data-testid="completed-lessons-count"]')).toBeVisible();
    await expect(page.locator('[data-testid="quizzes-taken-count"]')).toBeVisible();

    // Verify Continue Learning hero card
    const resumeBtn = page.locator('[data-testid="continue-learning-btn"]');
    await expect(resumeBtn).toBeVisible();
    await expect(resumeBtn).toContainText("Resume Lesson");

    // Verify Targeted Revision Focus recommendations panel (LN-05)
    const revisionList = page.locator('[data-testid="revision-recommendations-list"]');
    await expect(revisionList).toBeVisible();
    await expect(revisionList).toContainText("Unknown Number Bases & Linear Formulation");
  });

  test("2. Interactive Lesson Player delivers video, math notes, syllabus navigation, and resources", async ({
    page,
  }) => {
    // Sign in and open lesson 1 directly
    await loginAsStudent(page);

    await page.goto("/learn/waec-ssce-mathematics-mastery/l1");
    await expect(page).toHaveURL("/learn/waec-ssce-mathematics-mastery/l1");

    // Verify Lesson Header & Title
    await expect(page.locator("h1")).toContainText("Conversion of Number Bases");

    // Verify Video Player Stage
    await expect(page.locator('button[aria-label="Play Video"]')).toBeVisible();
    await page.click('button[aria-label="Play Video"]');
    await expect(page.locator('button[aria-label="Pause Video"]')).toBeVisible();

    // Verify Theory & Notes tab content
    await expect(page.locator("text=Key Learning Objectives")).toBeVisible();
    await expect(page.locator("text=WAEC Chief Examiner Marking Invariant")).toBeVisible();
    await expect(page.locator("text=Place Value Positional Notation").first()).toBeVisible();

    // Verify Resources tab
    await page.click('[data-testid="tab-resources-btn"]');
    await expect(page.locator("text=Worksheets, Formula Cards & WAEC Past Questions")).toBeVisible();
    await expect(page.locator("text=WAEC Number Bases Past Paper Drills")).toBeVisible();
  });

  test("3. Practice Checkpoint Quiz evaluates answers, provides step-by-step math reasoning & recommendations (LN-02, LN-05)", async ({
    page,
  }) => {
    await loginAsStudent(page);

    await page.goto("/learn/waec-ssce-mathematics-mastery/l1");

    // Switch to Practice Checkpoint Quiz tab
    await page.click('[data-testid="tab-quiz-btn"]');
    await expect(page.locator("text=Lesson 1 Checkpoint: Number Bases")).toBeVisible();

    // Answer questions: q1 -> A (correct), q2 -> A (correct), q3 -> A (wrong, correct is B)
    await page.click('[data-testid="option-q1-A"]');
    await page.click('[data-testid="option-q2-A"]');
    await page.click('[data-testid="option-q3-A"]');

    // Submit Quiz
    const submitBtn = page.locator('[data-testid="submit-quiz-btn"]');
    await expect(submitBtn).toBeEnabled();
    await submitBtn.click();

    // Verify Result Banner with instant score (67%)
    const resultBanner = page.locator('[data-testid="quiz-result-banner"]');
    await expect(resultBanner).toBeVisible();
    await expect(resultBanner).toContainText("67%");
    await expect(resultBanner).toContainText("2 of 3 questions correct");

    // Verify step-by-step mathematical explanation rendered for questions
    await expect(page.locator("text=Step-by-Step Mathematical Explanation:").first()).toBeVisible();

    // Verify Targeted Revision Recommendations (LN-05)
    await expect(resultBanner).toContainText("Targeted Revision Recommendations (LN-05)");
    await expect(resultBanner).toContainText("Unknown Number Bases & Linear Formulation");
  });

  test("4. Offline Resilience preserves in-progress quiz answers during simulated network interruptions (LN-04)", async ({
    page,
  }) => {
    await loginAsStudent(page);

    await page.goto("/learn/waec-ssce-mathematics-mastery/l1");
    await page.click('[data-testid="tab-quiz-btn"]');

    // Select options
    await page.click('[data-testid="option-q1-A"]');
    await page.click('[data-testid="option-q2-A"]');

    // Activate offline simulation
    await page.click('[data-testid="simulate-offline-toggle"]');
    await expect(page.locator("text=Offline Sim Active")).toBeVisible();

    // Attempt to submit while offline
    await page.click('[data-testid="submit-quiz-btn"]');

    // Verify friendly network drop warning appears (LN-04)
    const offlineBanner = page.locator('[data-testid="offline-retry-banner"]');
    await expect(offlineBanner).toBeVisible();
    await expect(offlineBanner).toContainText("Network Connection Interrupted");

    // Deactivate offline simulation
    await page.click('[data-testid="simulate-offline-toggle"]');

    // Click Retry Submission and verify grading succeeds without lost answers
    await page.click('[data-testid="retry-quiz-submission-btn"]');
    const resultBanner = page.locator('[data-testid="quiz-result-banner"]');
    await expect(resultBanner).toBeVisible();
  });

  test("5. Lesson Completion updates course progress and advances navigation (LN-01, LN-03)", async ({
    page,
  }) => {
    await loginAsStudent(page);

    await page.goto("/learn/waec-ssce-mathematics-mastery/l1");

    // Click Mark Complete
    const completeBtn = page.locator('[data-testid="mark-complete-btn"]');
    await completeBtn.click();

    // Verify button updates or advances to next lesson
    await expect(page).toHaveURL(/\/learn\/waec-ssce-mathematics-mastery\/l2/);
  });

  test("6. Tutor Authoring Portal displays course inventory, lifecycle workflow, and live student preview (LN-06)", async ({
    page,
    isMobile,
  }) => {
    // Sign in as Dr. Tayo Okafor (Vetted Tutor)
    await loginAsTutor(page);

    // Verify Tutor Portal link in Navbar
    if (isMobile) {
      await page.getByRole("button", { name: "Open navigation menu" }).click();
      await page.click("text=Open Tutor Portal");
    } else {
      const tutorPortalLink = page.locator('[data-testid="navbar-tutor-portal-link"]');
      await expect(tutorPortalLink).toBeVisible();
      await tutorPortalLink.click();
    }
    await expect(page).toHaveURL("/dashboard/tutor");

    // Verify Authored courses list
    await expect(page.locator("h1")).toContainText("Course Authoring & Curriculum Management");
    await expect(page.locator("text=WAEC & SSCE Comprehensive Mathematics Mastery")).toBeVisible();
    await expect(page.locator("text=Live Published").first()).toBeVisible();
    await expect(page.locator("text=Further Mathematics: Calculus & 3D Vectors")).toBeVisible();
    await expect(page.locator("text=Draft in Progress").first()).toBeVisible();

    // Open Student Live Preview
    const previewBtn = page.locator('[data-testid="preview-course-btn-waec-ssce-mathematics-mastery"]');
    await previewBtn.click();
    await expect(page.locator("text=Interactive Student Preview")).toBeVisible();
    await expect(page.locator("text=Simulated HD Lesson Video")).toBeVisible();
    await page.click('button:has-text("Close Preview")');

    // Open Edit Course
    const editBtn = page.locator('[data-testid="edit-course-btn-further-mathematics-calculus-vectors"]');
    await editBtn.click();
    await expect(page.locator("text=Curriculum Editor")).toBeVisible();

    // Submit for Review
    await page.click('[data-testid="submit-review-btn"]');
    const successBanner = page.locator('[data-testid="authoring-success-banner"]');
    await expect(successBanner).toBeVisible();
    await expect(successBanner).toContainText("submitted for curriculum review");
  });

  test("7. Mobile Viewport (375px) renders Dashboard, Lesson Player, and Navigation Drawer cleanly", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 375, height: 667 });

    await loginAsStudent(page);

    // Verify mobile drawer opens and displays Dashboard link
    await page.getByRole("button", { name: "Open navigation menu" }).click();
    await expect(page.locator("text=Open My Dashboard")).toBeVisible();
    await page.click("text=Open My Dashboard");

    await expect(page).toHaveURL("/dashboard");
    await expect(page.locator("h1")).toContainText("Welcome back, Chioma!");
    await expect(page.locator('[data-testid="streak-counter"]')).toBeVisible();

    // Navigate to Lesson Player on mobile
    await page.goto("/learn/waec-ssce-mathematics-mastery/l1");
    await expect(page.locator("h1")).toContainText("Conversion of Number Bases");
    await expect(page.locator('[data-testid="mark-complete-btn"]')).toBeVisible();
  });
});
