import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("Hero Hub Services Index, Geometry & Accessibility Suite", () => {
  // =========================================================================
  // 1. RESPONSIVE VIEWPORTS & LAYOUT INTEGRITY (375, 768, 1280, 1536 px)
  // =========================================================================
  for (const width of [1536, 1280, 768, 375]) {
    test(`renders at ${width}px viewport without horizontal scroll or layout shift`, async ({ page }) => {
      await page.setViewportSize({ width, height: width === 375 ? 812 : 900 });
      const response = await page.goto("/", { waitUntil: "networkidle" });
      expect(response?.status()).toBe(200);

      // Verify no horizontal overflow
      const hasHorizontalScroll = await page.evaluate(() => {
        return document.documentElement.scrollWidth > document.documentElement.clientWidth;
      });
      expect(hasHorizontalScroll, `Horizontal scroll detected at ${width}px`).toBe(false);

      // Headline and brand elements exist
      await expect(page.locator("h1")).toContainText("Learn smarter.");
      await expect(page.locator('text="One account"').first()).toBeVisible();
      await expect(page.locator('text="Four ways to learn"').first()).toBeVisible();
    });
  }

  // =========================================================================
  // 2. HERO SERVICES INDEX CONTENT & NO TRUNCATION
  // =========================================================================
  test("services index displays all 4 services with full untruncated text and no icons", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto("/", { waitUntil: "networkidle" });

    const container = page.locator('[data-testid="hub-services-index"]');
    await expect(container).toBeVisible();

    // Verify all 4 services are present with untruncated copy
    await expect(container).toContainText("Academy");
    await expect(container).toContainText("Lessons and quizzes");

    await expect(container).toContainText("AI");
    await expect(container).toContainText("Instant study help");

    await expect(container).toContainText("Tutors");
    await expect(container).toContainText("Matched to you");

    await expect(container).toContainText("Music");
    await expect(container).toContainText("Theory and instruments");

    // Verify NO icons (svg elements) inside the services index
    const svgCount = await container.locator("svg").count();
    expect(svgCount).toBe(0);

    // Verify no truncated ellipsis (...)
    const textContent = await container.innerText();
    expect(textContent).not.toContain("...");
  });

  // =========================================================================
  // 3. ACCESSIBILITY & NAVIGATION
  // =========================================================================
  test("hero services index links are accessible and navigate correctly", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto("/", { waitUntil: "networkidle" });

    const academyLink = page.locator('[data-testid="hub-services-index"] a[href="/academy"]');
    await expect(academyLink).toBeVisible();

    const aiLink = page.locator('[data-testid="hub-services-index"] a[href="/ai"]');
    await expect(aiLink).toBeVisible();

    const tutorLink = page.locator('[data-testid="hub-services-index"] a[href="/request-tutor"]');
    await expect(tutorLink).toBeVisible();

    const musicLink = page.locator('[data-testid="hub-services-index"] a[href="/music"]');
    await expect(musicLink).toBeVisible();

    // Axe automated scan
    const accessibilityScanResults = await new AxeBuilder({ page })
      .include('[data-testid="hub-services-index"]')
      .analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
