import { chromium } from "@playwright/test";
import * as path from "path";
import * as fs from "fs";

const ARTIFACT_DIR = "C:/Users/USER/.gemini/antigravity/brain/f9ac1c5b-572a-472b-a210-561b547c9f08";

async function main() {
  console.log("Starting visual verification capture...");
  const browser = await chromium.launch();

  // Desktop (1280px)
  const desktopContext = await browser.newContext({
    viewport: { width: 1280, height: 900 },
    deviceScaleFactor: 1,
  });
  const desktopPage = await desktopContext.newPage();

  // Mobile (375px)
  const mobileContext = await browser.newContext({
    viewport: { width: 375, height: 812 },
    deviceScaleFactor: 1,
    isMobile: true,
  });
  const mobilePage = await mobileContext.newPage();

  const pagesToCapture = [
    {
      name: "physics_academy_page",
      url: "http://localhost:3000/academy/physics",
    },
    {
      name: "physics_course_detail",
      url: "http://localhost:3000/courses/physics-ss1-measurement-motion-forces",
    },
    {
      name: "physics_diagnostic",
      url: "http://localhost:3000/courses/physics-ss1-measurement-motion-forces/diagnostic",
    },
    {
      name: "physics_lesson_player",
      url: "http://localhost:3000/courses/physics-ss1-measurement-motion-forces/lessons/fundamental-derived-quantities-si-units",
    },
    {
      name: "physics_learner_needs",
      url: "http://localhost:3000/admin/analytics/learner-needs",
    },
  ];

  for (const item of pagesToCapture) {
    console.log(`Navigating to ${item.name} (${item.url})...`);
    try {
      // Desktop
      await desktopPage.goto(item.url, { waitUntil: "networkidle", timeout: 25000 });
      await desktopPage.waitForTimeout(1000);
      const desktopFile = path.join(ARTIFACT_DIR, `${item.name}_1280px.png`);
      await desktopPage.screenshot({ path: desktopFile, fullPage: false });
      console.log(`Saved: ${desktopFile}`);

      // Mobile
      await mobilePage.goto(item.url, { waitUntil: "networkidle", timeout: 25000 });
      await mobilePage.waitForTimeout(1000);
      const mobileFile = path.join(ARTIFACT_DIR, `${item.name}_375px.png`);
      await mobilePage.screenshot({ path: mobileFile, fullPage: false });
      console.log(`Saved: ${mobileFile}`);
    } catch (err: any) {
      console.error(`Error capturing ${item.name}:`, err.message);
    }
  }

  // Also do diagnostic interaction to get the results page screenshot
  try {
    console.log("Navigating to diagnostic and completing to capture results view...");
    await desktopPage.goto("http://localhost:3000/courses/physics-ss1-measurement-motion-forces/diagnostic", {
      waitUntil: "networkidle",
      timeout: 25000,
    });
    await desktopPage.waitForTimeout(1000);

    // Answer all 12 questions by clicking option A on each question container
    const questionContainers = await desktopPage.$$(".rounded-xl.border.border-neutral-slate-200.bg-white.p-5");
    console.log(`Found ${questionContainers.length} question blocks.`);
    for (const container of questionContainers) {
      const btn = await container.$("button");
      if (btn) {
        await btn.click();
        await desktopPage.waitForTimeout(100);
      }
    }

    await desktopPage.waitForTimeout(1000);
    const submitBtn = await desktopPage.$("button:has-text('Submit Diagnostic Assessment')");
    if (submitBtn) {
      console.log("Submitting diagnostic assessment...");
      await submitBtn.click();
      await desktopPage.waitForTimeout(2000);
      const resultsFile = path.join(ARTIFACT_DIR, "physics_diagnostic_results_1280px.png");
      await desktopPage.screenshot({ path: resultsFile, fullPage: false });
      console.log(`Saved: ${resultsFile}`);
    }
  } catch (err: any) {
    console.error("Error capturing diagnostic results:", err.message);
  }

  await browser.close();
  console.log("Visual capture completed.");
}

main().catch(console.error);
