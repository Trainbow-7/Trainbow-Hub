const { chromium } = require("@playwright/test");
const path = require("path");

async function capture() {
  const artifactDir = "C:\\Users\\USER\\.gemini\\antigravity-ide\\brain\\385de377-6d32-4432-9366-95a83cc26f46";
  const browser = await chromium.launch({ headless: true });

  // 1. Desktop Viewport
  const desktopContext = await browser.newContext({
    viewport: { width: 1280, height: 900 },
  });
  const page = await desktopContext.newPage();

  console.log("Navigating to http://localhost:3000...");
  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });

  // Wait for health badge
  await page.waitForSelector("text=API Healthy", { timeout: 10000 });

  // Desktop Main Page Screenshot
  const desktopPath = path.join(artifactDir, "phase0_desktop.png");
  await page.screenshot({ path: desktopPath, fullPage: true });
  console.log("Captured desktop screenshot:", desktopPath);

  // Trigger Modal
  await page.click("button:has-text('Verify Design Tokens Modal')");
  await page.waitForSelector("text=Design System & Guardrails Active");
  const modalPath = path.join(artifactDir, "phase0_modal.png");
  await page.screenshot({ path: modalPath });
  console.log("Captured modal screenshot:", modalPath);

  // Close Modal and trigger Toast
  await page.click("button:has-text('Close Modal')");
  await page.click("button:has-text('Test Notification')");
  await page.waitForSelector("text=Design System Initialized");
  const toastPath = path.join(artifactDir, "phase0_toast.png");
  await page.screenshot({ path: toastPath });
  console.log("Captured toast screenshot:", toastPath);

  await desktopContext.close();

  // 2. Mobile Viewport (Pixel 7 / Mobile View)
  const mobileContext = await browser.newContext({
    viewport: { width: 393, height: 851 },
    isMobile: true,
  });
  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto("http://localhost:3000", { waitUntil: "networkidle" });

  const mobilePath = path.join(artifactDir, "phase0_mobile.png");
  await mobilePage.screenshot({ path: mobilePath, fullPage: true });
  console.log("Captured mobile screenshot:", mobilePath);

  await mobileContext.close();
  await browser.close();
  console.log("All screenshots captured successfully!");
}

capture().catch((err) => {
  console.error("Failed to capture screenshots:", err);
  process.exit(1);
});
