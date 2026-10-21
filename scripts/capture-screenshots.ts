import { chromium } from "@playwright/test";
import * as fs from "fs";
import * as path from "path";

async function main() {
  const screenshotsDir = path.resolve(process.cwd(), "public/screenshots");
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  const browser = await chromium.launch();
  try {
    const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
    const page = await context.newPage();

    console.log("Capturing lesson page at 1280px...");
    await page.goto("http://localhost:3000/learn/waec-ssce-mathematics-mastery/l2");
    await page.waitForSelector('[data-testid="video-facade"]', { timeout: 15000 });
    await page.screenshot({ path: path.join(screenshotsDir, "lesson-desktop-1280.png") });

    console.log("Capturing lesson page at 375px...");
    await page.setViewportSize({ width: 375, height: 667 });
    await page.screenshot({ path: path.join(screenshotsDir, "lesson-mobile-375.png") });

    console.log("Capturing admin video library at 1280px...");
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto("http://localhost:3000/admin/content/videos");
    await page.waitForSelector("table", { timeout: 15000 });
    await page.screenshot({ path: path.join(screenshotsDir, "admin-desktop-1280.png") });

    console.log("Capturing admin video library at 375px...");
    await page.setViewportSize({ width: 375, height: 667 });
    await page.screenshot({ path: path.join(screenshotsDir, "admin-mobile-375.png") });

    console.log("All screenshots successfully captured in public/screenshots!");
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error("Screenshot capture failed:", err);
  process.exit(1);
});
