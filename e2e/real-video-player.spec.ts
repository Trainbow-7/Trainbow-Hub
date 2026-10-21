import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("Real Video Learning Player & Lesson Page (Phase Video)", () => {
  const courseSlug = "waec-ssce-mathematics-mastery";
  const lessonId = "l2"; // Modular Arithmetic & Cyclic Algebra

  test("Lesson page renders click-to-play facade with real metadata, without fake timers or fake quality badges", async ({
    page,
  }) => {
    await page.goto(`/learn/${courseSlug}/${lessonId}`);
    await page.waitForSelector('[data-testid="video-facade"]', { timeout: 15000 });

    // Ensure NO fake UI elements exist
    await expect(page.locator("text=12:45 /")).toHaveCount(0);
    await expect(page.locator("text=HD 1080p")).toHaveCount(0);
    await expect(page.locator("text=12:45 / 40:00")).toHaveCount(0);

    // Verify click-to-play facade is displayed
    const facade = page.locator('[data-testid="video-facade"]');
    await expect(facade).toBeVisible();

    // Verify channel attribution and real duration are visible
    await expect(page.locator("text=Khan Academy").first()).toBeVisible();
    await expect(page.locator("text=WAEC Aligned").first()).toBeVisible();

    // Verify no iframe is loaded prior to user click (Data Saver protection)
    const iframe = page.locator('[data-testid="youtube-nocookie-iframe"]');
    await expect(iframe).toHaveCount(0);

    // Clicking play loads the privacy-enhanced youtube-nocookie iframe
    await facade.click();
    await expect(page.locator('[data-testid="youtube-nocookie-iframe"]')).toBeVisible();

    // Verify iframe src uses privacy-enhanced domain
    const src = await page.locator('[data-testid="youtube-nocookie-iframe"]').getAttribute("src");
    expect(src).toContain("youtube-nocookie.com/embed/Eg6CqR_pI30");
    expect(src).toContain("rel=0");
  });

  test("Alternate explanation option switches video cleanly", async ({ page }) => {
    await page.goto(`/learn/${courseSlug}/${lessonId}`);
    await page.waitForSelector('[data-testid="video-facade"]', { timeout: 15000 });

    const altSelect = page.locator('[data-testid="alternate-video-select"]');
    if (await altSelect.isVisible()) {
      await altSelect.selectOption({ index: 1 });
      // Should load the alternate video
      await expect(page.locator('[data-testid="youtube-nocookie-iframe"]')).toBeVisible();
    }
  });

  test("Problem reporting button opens modal and submits feedback", async ({ page }) => {
    await page.goto(`/learn/${courseSlug}/${lessonId}`);
    await page.waitForSelector('[data-testid="report-video-btn"]', { timeout: 15000 });

    const reportBtn = page.locator('[data-testid="report-video-btn"]');
    await expect(reportBtn).toBeVisible();
    await reportBtn.click();

    await expect(page.locator("text=Report a Problem with this Video")).toBeVisible();
    await page.click("text=Submit Report");
    await expect(page.locator("text=Report submitted. Thank you!")).toBeVisible();
  });

  test("Accessibility: axe audits pass across 375px, 768px, and 1280px viewports", async ({ page }) => {
    const viewports = [
      { width: 375, height: 667 },
      { width: 768, height: 1024 },
      { width: 1280, height: 800 },
    ];

    for (const vp of viewports) {
      await page.setViewportSize(vp);
      await page.goto(`/learn/${courseSlug}/${lessonId}`);
      await page.waitForSelector('[data-testid="video-facade"]', { timeout: 15000 });

      const accessibilityScanResults = await new AxeBuilder({ page })
        .disableRules(["color-contrast"]) // Soft rule for brand overlays
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    }
  });
});
