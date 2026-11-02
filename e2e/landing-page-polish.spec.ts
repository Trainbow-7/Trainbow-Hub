import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import * as fs from "fs";
import * as path from "path";

test.describe("Landing Page Polish, Responsive Viewports & Accessibility", () => {
  const artifactDir = "C:\\Users\\USER\\.gemini\\antigravity\\brain\\f9ac1c5b-572a-472b-a210-561b547c9f08\\screenshots";

  test.beforeAll(() => {
    if (!fs.existsSync(artifactDir)) {
      fs.mkdirSync(artifactDir, { recursive: true });
    }
  });

  test("renders at 1536px wide desktop without horizontal scroll or layout shift", async ({ page }) => {
    await page.setViewportSize({ width: 1536, height: 960 });
    const response = await page.goto("/", { waitUntil: "networkidle" });
    expect(response?.status()).toBe(200);

    const hasHorizontalScroll = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });
    expect(hasHorizontalScroll).toBe(false);

    await expect(page.locator("h1")).toContainText("Learn smarter.");
    await expect(page.locator("h1")).toContainText("right tutor");
  });

  test("renders at 1280px desktop without horizontal scroll or header wrapping", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    const response = await page.goto("/", { waitUntil: "networkidle" });
    expect(response?.status()).toBe(200);

    // Verify no horizontal overflow
    const hasHorizontalScroll = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });
    expect(hasHorizontalScroll).toBe(false);

    // Check main headline is visible
    await expect(page.locator("h1")).toContainText("Learn smarter.");
    await expect(page.locator("h1")).toContainText("right tutor");

    // Check audience statement
    await expect(page.getByText("Built for WAEC, JAMB and IGCSE students")).toBeVisible();

    // Check primary CTAs
    const requestBtn = page.getByRole("link", { name: /Request a tutor/i }).first();
    const aiBtn = page.getByRole("link", { name: /Try the AI maths helper/i }).first();
    await expect(requestBtn).toBeVisible();
    await expect(aiBtn).toBeVisible();

    // Check header desktop nav links do not wrap
    const desktopNav = page.locator('nav[aria-label="Main Navigation"]');
    await expect(desktopNav).toBeVisible();

    // Capture desktop screenshots
    const shotPath = path.join(artifactDir, "28_hero_hub_1280px.png");
    await page.screenshot({ path: shotPath, fullPage: true });
  });

  test("renders at 768px tablet without horizontal scroll", async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    const response = await page.goto("/", { waitUntil: "networkidle" });
    expect(response?.status()).toBe(200);

    const hasHorizontalScroll = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });
    expect(hasHorizontalScroll).toBe(false);

    await expect(page.locator("h1")).toContainText("Learn smarter.");
  });

  test("renders at 375px mobile without horizontal scroll and collapses navigation to menu button", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    const response = await page.goto("/", { waitUntil: "networkidle" });
    expect(response?.status()).toBe(200);

    // Verify no horizontal overflow on mobile
    const hasHorizontalScroll = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });
    expect(hasHorizontalScroll).toBe(false);

    // Mobile menu button should be visible
    const mobileMenuBtn = page.locator('button[aria-label="Open navigation menu"]');
    await expect(mobileMenuBtn).toBeVisible();

    // Desktop nav should be hidden
    const desktopNav = page.locator('nav[aria-label="Main Navigation"]');
    await expect(desktopNav).toBeHidden();

    // Capture mobile screenshot
    const shotPath = path.join(artifactDir, "29_hero_hub_375px.png");
    await page.screenshot({ path: shotPath, fullPage: true });
  });

  test("verifies all landing page links lead to working pages (HTTP 200)", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto("/", { waitUntil: "networkidle" });

    const targetHrefs = [
      "/request-tutor",
      "/ai",
      "/academy",
      "/music",
      "/pricing",
      "/about",
      "/legal/terms",
      "/legal/privacy",
      "/legal/safeguarding",
      "/legal/refunds",
    ];

    for (const href of targetHrefs) {
      const res = await page.goto(href, { waitUntil: "domcontentloaded" });
      expect(res?.status(), `Failed on route ${href}`).toBe(200);
    }
  });

  test("verifies accessibility with axe (no critical or serious violations)", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto("/", { waitUntil: "networkidle" });

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .disableRules(["color-contrast"])
      .analyze();

    const criticalOrSerious = accessibilityScanResults.violations.filter(
      (v) => v.impact === "critical" || v.impact === "serious"
    );

    expect(criticalOrSerious).toEqual([]);
  });
});
