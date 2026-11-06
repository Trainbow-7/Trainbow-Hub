import { chromium } from "@playwright/test";
import * as fs from "fs";
import * as path from "path";

async function main() {
  const screenshotsDir = path.resolve(process.cwd(), "public/screenshots/quizzes");
  const brainDir = path.resolve(
    process.env.LOCALAPPDATA || "C:/Users/USER/AppData/Local",
    "../.gemini/antigravity/brain/f9ac1c5b-572a-472b-a210-561b547c9f08/screenshots"
  );

  for (const d of [screenshotsDir, brainDir]) {
    if (!fs.existsSync(d)) {
      try {
        fs.mkdirSync(d, { recursive: true });
      } catch {
        // ignore
      }
    }
  }

  const saveShot = async (page: any, name: string) => {
    const file1 = path.join(screenshotsDir, name);
    await page.screenshot({ path: file1 });
    console.log(`  ✓ Saved: ${file1}`);
    try {
      const file2 = path.join(brainDir, name);
      fs.copyFileSync(file1, file2);
    } catch {
      // ignore
    }
  };

  const browser = await chromium.launch();
  try {
    const context = await browser.newContext({ viewport: { width: 1280, height: 850 } });
    const page = await context.newPage();

    // 1. Checkpoint Assessment Player on WAEC Lesson 1
    console.log("Navigating to WAEC Lesson 1 (1280px)...");
    await page.goto("http://localhost:3000/courses/waec-ssce-mathematics-mastery/lessons/fractions-decimals-operations", {
      waitUntil: "networkidle",
      timeout: 25000,
    });
    // Click Quiz tab
    const quizTab = page.locator("button:has-text('Practice Quiz'), button:has-text('Quiz')").first();
    if (await quizTab.isVisible()) {
      await quizTab.click();
      await page.waitForTimeout(1000);
    }
    await saveShot(page, "waec-lesson-quiz-desktop-1280.png");

    console.log("Capturing WAEC Lesson Quiz on Mobile (375px)...");
    await page.setViewportSize({ width: 375, height: 750 });
    await page.waitForTimeout(500);
    await saveShot(page, "waec-lesson-quiz-mobile-375.png");

    // 2. JAMB Speed Mode Player
    console.log("Navigating to JAMB UTME Lesson 1 (1280px)...");
    await page.setViewportSize({ width: 1280, height: 850 });
    await page.goto("http://localhost:3000/courses/jamb-utme-speed-mathematics/lessons/number-bases-operations", {
      waitUntil: "networkidle",
      timeout: 25000,
    });
    const jambQuizTab = page.locator("button:has-text('Practice Quiz'), button:has-text('Quiz')").first();
    if (await jambQuizTab.isVisible()) {
      await jambQuizTab.click();
      await page.waitForTimeout(1000);
    }
    await saveShot(page, "jamb-speed-quiz-desktop-1280.png");

    console.log("Capturing JAMB Speed Quiz on Mobile (375px)...");
    await page.setViewportSize({ width: 375, height: 750 });
    await page.waitForTimeout(500);
    await saveShot(page, "jamb-speed-quiz-mobile-375.png");

    // 3. Admin Quiz Quality & Review Queue
    console.log("Navigating to Admin Quiz Quality Review (1280px)...");
    await page.setViewportSize({ width: 1280, height: 850 });
    await page.goto("http://localhost:3000/admin/quizzes", {
      waitUntil: "networkidle",
      timeout: 25000,
    });
    await page.waitForTimeout(1000);
    await saveShot(page, "admin-quizzes-queue-desktop-1280.png");

    // Switch to Coverage Tab
    const covTab = page.locator("button:has-text('Curriculum Coverage')").first();
    if (await covTab.isVisible()) {
      await covTab.click();
      await page.waitForTimeout(800);
      await saveShot(page, "admin-quizzes-coverage-desktop-1280.png");
    }

    console.log("Capturing Admin Quizzes on Mobile (375px)...");
    await page.setViewportSize({ width: 375, height: 750 });
    await page.waitForTimeout(500);
    await saveShot(page, "admin-quizzes-coverage-mobile-375.png");

    console.log("\n✅ All assessment screenshots successfully captured!");
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error("Screenshot capture failed:", err);
  process.exit(1);
});

