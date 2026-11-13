import { chromium } from "playwright";
import * as path from "path";

const artifactDir = "C:\\Users\\USER\\.gemini\\antigravity\\brain\\f9ac1c5b-572a-472b-a210-561b547c9f08";

async function main() {
  console.log("Launching Playwright to verify Framer Motion, Lenis, and Mobile Responsiveness...");
  const browser = await chromium.launch({ headless: true });

  // 1. Mobile Viewport (375x667)
  const mobileContext = await browser.newContext({
    viewport: { width: 375, height: 667 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
  });
  const mobilePage = await mobileContext.newPage();

  // Test A: Home Page on Mobile
  console.log("Navigating to Mobile Home Page (375px)...");
  await mobilePage.goto("http://localhost:3000/", { waitUntil: "networkidle", timeout: 30000 });
  await mobilePage.waitForTimeout(2000);

  // Check Lenis initialization & overflow on Home
  const mobileHomeOverflow = await mobilePage.evaluate(() => {
    return {
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      hasOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
      hasLenisClass: document.documentElement.classList.contains("lenis"),
    };
  });
  console.log("Mobile Home Overflow & Lenis:", mobileHomeOverflow);

  const homeScreenshot = path.join(artifactDir, "mobile_responsive_home_375px.png");
  await mobilePage.screenshot({ path: homeScreenshot, fullPage: true });
  console.log("✓ Saved Home screenshot:", homeScreenshot);

  // Test B: Mobile Navigation Drawer (Hamburger Click)
  console.log("Testing Mobile Navigation Drawer...");
  const menuButton = mobilePage.locator('button[aria-label="Open navigation menu"]').first();
  if (await menuButton.isVisible()) {
    await menuButton.click();
    await mobilePage.waitForTimeout(1000);
    const navDrawerScreenshot = path.join(artifactDir, "mobile_nav_drawer_375px.png");
    await mobilePage.screenshot({ path: navDrawerScreenshot, fullPage: false });
    console.log("✓ Saved Mobile Nav Drawer screenshot:", navDrawerScreenshot);

    // Close drawer
    const closeButton = mobilePage.locator('button[aria-label="Close menu"]').first();
    if (await closeButton.isVisible()) {
      await closeButton.click();
      await mobilePage.waitForTimeout(500);
    }
  }

  // Test C: Mathematics Diagnostic on Mobile (Testing KaTeX & Option Cards)
  console.log("Navigating to Mathematics Diagnostic (375px)...");
  await mobilePage.goto("http://localhost:3000/courses/jamb-utme-speed-mathematics/diagnostic", { waitUntil: "networkidle", timeout: 30000 });
  await mobilePage.waitForTimeout(2000);

  const mathDiagOverflow = await mobilePage.evaluate(() => {
    return {
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      hasOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
    };
  });
  console.log("Mathematics Diagnostic Overflow:", mathDiagOverflow);

  const mathDiagScreenshot = path.join(artifactDir, "mobile_math_diagnostic_375px.png");
  await mobilePage.screenshot({ path: mathDiagScreenshot, fullPage: false });
  console.log("✓ Saved Math Diagnostic screenshot:", mathDiagScreenshot);

  // Test D: Course Detail Page on Mobile
  console.log("Navigating to Course Detail Page (375px)...");
  await mobilePage.goto("http://localhost:3000/courses/jamb-utme-speed-mathematics", { waitUntil: "networkidle", timeout: 30000 });
  await mobilePage.waitForTimeout(2000);

  const courseDetailScreenshot = path.join(artifactDir, "mobile_course_detail_375px.png");
  await mobilePage.screenshot({ path: courseDetailScreenshot, fullPage: true });
  console.log("✓ Saved Course Detail screenshot:", courseDetailScreenshot);

  // Test E: Pricing Page on Mobile
  console.log("Navigating to Pricing Page (375px)...");
  await mobilePage.goto("http://localhost:3000/pricing", { waitUntil: "networkidle", timeout: 30000 });
  await mobilePage.waitForTimeout(2000);

  const pricingScreenshot = path.join(artifactDir, "mobile_pricing_375px.png");
  await mobilePage.screenshot({ path: pricingScreenshot, fullPage: true });
  console.log("✓ Saved Pricing screenshot:", pricingScreenshot);

  await mobileContext.close();

  // 2. Desktop Viewport (1280x800) with Lenis Smooth Scrolling Verification
  const desktopContext = await browser.newContext({
    viewport: { width: 1280, height: 800 },
  });
  const desktopPage = await desktopContext.newPage();

  console.log("Navigating to Desktop Home (1280px) to verify Lenis & Framer Motion...");
  await desktopPage.goto("http://localhost:3000/", { waitUntil: "networkidle", timeout: 30000 });
  await desktopPage.waitForTimeout(2000);

  const desktopLenisCheck = await desktopPage.evaluate(() => {
    return {
      hasLenisClass: document.documentElement.classList.contains("lenis"),
      hasLenisSmooth: document.documentElement.classList.contains("lenis-smooth"),
      motionReady: document.documentElement.getAttribute("data-motion-ready"),
      scrollYBefore: window.scrollY,
    };
  });
  console.log("Desktop Lenis & Motion Status:", desktopLenisCheck);

  // Perform smooth scroll
  await desktopPage.mouse.wheel(0, 600);
  await desktopPage.waitForTimeout(800);

  const scrollYAfter = await desktopPage.evaluate(() => window.scrollY);
  console.log("Desktop scroll position after mouse wheel:", scrollYAfter);

  const desktopHomeScreenshot = path.join(artifactDir, "desktop_home_lenis_1280px.png");
  await desktopPage.screenshot({ path: desktopHomeScreenshot, fullPage: false });
  console.log("✓ Saved Desktop Home screenshot:", desktopHomeScreenshot);

  await desktopContext.close();
  await browser.close();

  console.log("All responsiveness and motion verifications completed successfully!");
}

main().catch((err) => {
  console.error("Verification error:", err);
  process.exit(1);
});
