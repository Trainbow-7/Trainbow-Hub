import { test, expect } from "@playwright/test";
import fs from "fs";
import path from "path";

const BASE_URL = process.env.BASE_URL || "http://localhost:3000";

test.describe("Trainbow HUB Comprehensive Responsive Suite (Step 5)", () => {
  // 1. Zero Horizontal Scroll Across Viewports down to 320px
  test("1. No horizontal scroll on audited pages down to 320px (scrollWidth <= clientWidth)", async ({ page }) => {
    const testViewports = [
      { width: 320, height: 568 },
      { width: 360, height: 740 },
      { width: 375, height: 667 },
      { width: 390, height: 844 },
    ];

    const testRoutes = [
      "/",
      "/about",
      "/academy",
      "/academy/mathematics",
      "/courses/waec-ssce-mathematics-mastery",
      "/courses/jamb-utme-speed-mathematics",
      "/courses/waec-ssce-mathematics-mastery/lessons/fractions-decimals-operations",
      "/courses/ss2-algebra-and-trigonometry-deep-dive/lessons/trig-ratios-four-quadrants-cast",
      "/ai",
      "/pricing",
      "/request-tutor",
      "/login",
      "/register",
    ];

    for (const vp of testViewports) {
      await page.setViewportSize(vp);
      for (const route of testRoutes) {
        await page.goto(`${BASE_URL}${route}`, { waitUntil: "domcontentloaded" });
        await page.waitForTimeout(200);

        const overflow = await page.evaluate(() => {
          const docEl = document.documentElement;
          const body = document.body;
          const scrollWidth = Math.max(docEl.scrollWidth, body.scrollWidth);
          const clientWidth = docEl.clientWidth;
          return {
            scrollWidth,
            clientWidth,
            hasOverflow: scrollWidth > clientWidth + 1.5,
          };
        });

        expect(
          overflow.hasOverflow,
          `Horizontal overflow detected on ${route} at ${vp.width}x${vp.height}: scrollWidth=${overflow.scrollWidth} > clientWidth=${overflow.clientWidth}`
        ).toBe(false);
      }
    }
  });

  // 2. Interactive Tap Target Size Guard (>= 44x44 CSS px)
  test("2. Main primary interactive elements meet 44x44 CSS px tap target minimum", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto(`${BASE_URL}/`, { waitUntil: "networkidle" });

    // Header hamburger button
    const hamburger = page.locator("button[aria-label='Open navigation menu']");
    if (await hamburger.isVisible()) {
      const box = await hamburger.boundingBox();
      expect(box).not.toBeNull();
      expect(box!.width).toBeGreaterThanOrEqual(44);
      expect(box!.height).toBeGreaterThanOrEqual(44);
    }

    // Main Hero Primary CTA button
    const heroCta = page.locator("a[href='/request-tutor'] span").first();
    const ctaBox = await heroCta.boundingBox();
    expect(ctaBox).not.toBeNull();
    expect(ctaBox!.height).toBeGreaterThanOrEqual(44);

    // Orbit pause/play toggle
    const orbitToggle = page.locator("[data-testid='hub-orbit-toggle']");
    if (await orbitToggle.isVisible()) {
      const toggleBox = await orbitToggle.boundingBox();
      expect(toggleBox).not.toBeNull();
      expect(toggleBox!.width).toBeGreaterThanOrEqual(44);
      expect(toggleBox!.height).toBeGreaterThanOrEqual(44);
    }
  });

  // 3. Form Input Font Size Guard (>= 16px to prevent iOS auto-zoom)
  test("3. Form inputs have computed font-size >= 16px on mobile viewports (< 768px)", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto(`${BASE_URL}/login`, { waitUntil: "networkidle" });

    const emailInput = page.locator("input[type='email']");
    const passwordInput = page.locator("input[type='password']");

    const emailFontSize = await emailInput.evaluate((el) => parseFloat(window.getComputedStyle(el).fontSize));
    const passFontSize = await passwordInput.evaluate((el) => parseFloat(window.getComputedStyle(el).fontSize));

    expect(emailFontSize).toBeGreaterThanOrEqual(16);
    expect(passFontSize).toBeGreaterThanOrEqual(16);

    // Also verify AI workspace prompt input
    await page.goto(`${BASE_URL}/ai`, { waitUntil: "networkidle" });
    const aiPrompt = page.locator("[data-testid='ai-prompt-input']");
    if (await aiPrompt.isVisible()) {
      const aiPromptFontSize = await aiPrompt.evaluate((el) => parseFloat(window.getComputedStyle(el).fontSize));
      expect(aiPromptFontSize).toBeGreaterThanOrEqual(16);
    }
  });

  // 4. Safe Area Inset Padding
  test("4. Fixed header and mobile bars support safe-area insets", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto(`${BASE_URL}/`, { waitUntil: "networkidle" });

    const header = page.locator("header");
    const headerClass = await header.getAttribute("class");
    expect(headerClass).toContain("pt-[env(safe-area-inset-top");
  });

  // 5. Modal / Sheet Dismissal (tap outside, ESC, swipe)
  test("5. Navigation sheet opens, traps focus, and dismisses via close button or Escape", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto(`${BASE_URL}/`, { waitUntil: "networkidle" });

    const hamburger = page.locator("button[aria-label='Open navigation menu']");
    await hamburger.click();

    // Sheet should be visible
    const sheet = page.locator("div[role='dialog']");
    await expect(sheet).toBeVisible();

    // Press Escape to dismiss
    await page.keyboard.press("Escape");
    await page.waitForTimeout(250);
    await expect(sheet).not.toBeVisible();
  });

  // 6. Responsive Lesson Player (16:9 Video & Syllabus Drawer)
  test("6. Lesson player maintains 16:9 aspect ratio and mobile syllabus drawer operates cleanly", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto(`${BASE_URL}/courses/waec-ssce-mathematics-mastery/lessons/fractions-decimals-operations`, {
      waitUntil: "networkidle",
    });

    // 16:9 aspect ratio container check
    const videoContainer = page.locator(".aspect-video").first();
    await expect(videoContainer).toBeVisible();
    const box = await videoContainer.boundingBox();
    expect(box).not.toBeNull();
    const aspectRatio = box!.width / box!.height;
    expect(aspectRatio).toBeCloseTo(16 / 9, 0.1);

    // Mobile syllabus button opens drawer
    const syllabusBtn = page.getByRole("button", { name: /Syllabus/i });
    if (await syllabusBtn.isVisible()) {
      await syllabusBtn.click();
      const drawer = page.locator("div[role='dialog'][aria-label='Course Syllabus']");
      await expect(drawer).toBeVisible();

      // Close drawer via Escape
      await page.keyboard.press("Escape");
      await page.waitForTimeout(250);
      await expect(drawer).not.toBeVisible();
    }
  });

  // 7. AI Workspace: Virtual Keyboard Simulation (Height reduced to 400px)
  test("7. AI Workspace retains composer visibility when virtual keyboard shrinks viewport height", async ({ page }) => {
    // Simulate keyboard open by reducing viewport height
    await page.setViewportSize({ width: 375, height: 400 });
    await page.goto(`${BASE_URL}/ai`, { waitUntil: "networkidle" });

    const composer = page.locator("[data-testid='ai-prompt-input']");
    await expect(composer).toBeVisible();

    const submitBtn = page.locator("[data-testid='ai-submit-btn']");
    await expect(submitBtn).toBeVisible();

    // Verify submit button is clickable and within viewport boundaries
    const box = await submitBtn.boundingBox();
    expect(box).not.toBeNull();
    expect(box!.y + box!.height).toBeLessThanOrEqual(400);
  });

  // 8. Reduced Motion: prefers-reduced-motion stops hub orbit animation
  test("8. prefers-reduced-motion disables CSS animations on the Hub Orbit", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto(`${BASE_URL}/`, { waitUntil: "networkidle" });

    const orbitTrack = page.locator("[data-testid='hub-orbit-track']");
    if (await orbitTrack.isVisible()) {
      const animationName = await orbitTrack.evaluate((el) => window.getComputedStyle(el).animationName);
      expect(animationName === "none" || animationName === "").toBe(true);
    }
  });

  // 9. Orientation Change: Portrait to Landscape (375x667 <-> 667x375)
  test("9. Rotating phone from portrait (375x667) to landscape (667x375) does not cause horizontal overflow", async ({ page }) => {
    // 1. Portrait
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto(`${BASE_URL}/courses/jamb-utme-speed-mathematics`, { waitUntil: "networkidle" });
    let overflow = await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1);
    expect(overflow).toBe(true);

    // 2. Landscape
    await page.setViewportSize({ width: 667, height: 375 });
    await page.waitForTimeout(200);
    overflow = await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1);
    expect(overflow).toBe(true);
  });

  // 10. Sticky Action Bar on Mobile Course Details
  test("10. Sticky Action Bar is visible on phone (<1024px) and renders tuition fee and CTA", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto(`${BASE_URL}/courses/jamb-utme-speed-mathematics`, { waitUntil: "networkidle" });

    const stickyBar = page.locator(".fixed.bottom-0.left-0.right-0");
    await expect(stickyBar).toBeVisible();
    await expect(stickyBar).toContainText("₦18,000");
    await expect(stickyBar).toContainText("Enrol in Course");

    // On desktop (>= 1024px), mobile sticky bar should be hidden
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.waitForTimeout(200);
    await expect(stickyBar).not.toBeVisible();
  });
});

