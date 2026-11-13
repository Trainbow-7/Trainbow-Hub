import { chromium } from "playwright";
import * as path from "path";
import * as fs from "fs";

const artifactDir = "C:\\Users\\USER\\.gemini\\antigravity\\brain\\f9ac1c5b-572a-472b-a210-561b547c9f08";

async function main() {
  console.log("Starting Playwright browser verification for Chemistry Academy...");
  const browser = await chromium.launch({ headless: true });

  const viewports = [
    { width: 1280, height: 800, name: "1280px" },
    { width: 375, height: 667, name: "375px" },
  ];

  for (const vp of viewports) {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 1,
    });
    const page = await context.newPage();

    // 1. Chemistry Academy Page
    console.log(`Navigating to /academy/chemistry at ${vp.name}...`);
    await page.goto("http://localhost:3000/academy/chemistry", { waitUntil: "networkidle", timeout: 30000 });
    await page.waitForTimeout(2000);
    const p1 = path.join(artifactDir, `chemistry_academy_page_${vp.name}.png`);
    await page.screenshot({ path: p1, fullPage: true });
    console.log(`✓ Saved ${p1}`);

    // 2. Course Detail Page
    console.log(`Navigating to SS 1 Course Detail at ${vp.name}...`);
    await page.goto("http://localhost:3000/courses/chemistry-ss1-matter-atomic-structure-periodic-table", { waitUntil: "networkidle", timeout: 30000 });
    await page.waitForTimeout(2000);
    const p2 = path.join(artifactDir, `chemistry_course_detail_${vp.name}.png`);
    await page.screenshot({ path: p2, fullPage: true });
    console.log(`✓ Saved ${p2}`);

    // 3. Diagnostic Page
    console.log(`Navigating to SS 1 Diagnostic at ${vp.name}...`);
    await page.goto("http://localhost:3000/courses/chemistry-ss1-matter-atomic-structure-periodic-table/diagnostic", { waitUntil: "networkidle", timeout: 30000 });
    await page.waitForTimeout(2000);
    const p3 = path.join(artifactDir, `chemistry_diagnostic_${vp.name}.png`);
    await page.screenshot({ path: p3, fullPage: true });
    console.log(`✓ Saved ${p3}`);

    // 4. Lesson Player Page (Verifying live playable video embed)
    console.log(`Navigating to Lesson Player at ${vp.name}...`);
    await page.goto("http://localhost:3000/courses/chemistry-ss1-matter-atomic-structure-periodic-table/lessons/particulate-nature-of-matter-states-and-kinetic-theory", { waitUntil: "networkidle", timeout: 30000 });
    await page.waitForTimeout(3000);
    const p4 = path.join(artifactDir, `chemistry_lesson_player_${vp.name}.png`);
    await page.screenshot({ path: p4, fullPage: false });
    console.log(`✓ Saved ${p4}`);

    // 5. Learner Needs Dashboard
    console.log(`Navigating to Learner Needs Dashboard at ${vp.name}...`);
    await page.goto("http://localhost:3000/admin/analytics/learner-needs", { waitUntil: "networkidle", timeout: 30000 });
    await page.waitForTimeout(2000);
    const p5 = path.join(artifactDir, `chemistry_learner_needs_${vp.name}.png`);
    await page.screenshot({ path: p5, fullPage: true });
    console.log(`✓ Saved ${p5}`);

    await context.close();
  }

  await browser.close();
  console.log("All screenshots captured successfully!");
}

main().catch((err) => {
  console.error("Playwright verification error:", err);
  process.exit(1);
});
