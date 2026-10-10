const { chromium } = require("@playwright/test");
const { AxeBuilder } = require("@axe-core/playwright");
const path = require("path");
const fs = require("fs");

async function runAudit() {
  const artifactDir = "C:\\Users\\USER\\.gemini\\antigravity-ide\\brain\\6671fa5a-d9ca-4196-8761-316220499906";
  if (!fs.existsSync(artifactDir)) {
    fs.mkdirSync(artifactDir, { recursive: true });
  }

  const browser = await chromium.launch({ headless: true });
  console.log("=== Starting Phase B Verification & Accessibility Audit ===");

  const targetRoutes = [
    { name: "home", url: "http://localhost:3000" },
    { name: "academy", url: "http://localhost:3000/academy" },
    { name: "course_detail", url: "http://localhost:3000/courses/waec-ssce-mathematics-mastery" },
    { name: "ai", url: "http://localhost:3000/ai" },
    { name: "tutors", url: "http://localhost:3000/tutors" },
    { name: "tutor_profile", url: "http://localhost:3000/tutors/dr-tayo-okafor" },
    { name: "pricing", url: "http://localhost:3000/pricing" },
    { name: "safeguarding", url: "http://localhost:3000/legal/safeguarding" },
  ];

  let totalViolations = 0;

  // 1. Desktop 1280px Audits
  console.log("\n--- Auditing Desktop 1280px ---");
  const desktopContext = await browser.newContext({
    viewport: { width: 1280, height: 900 },
  });
  const desktopPage = await desktopContext.newPage();

  for (const route of targetRoutes) {
    console.log(`Navigating to ${route.url}...`);
    await desktopPage.goto(route.url, { waitUntil: "networkidle" });
    const screenshotPath = path.join(artifactDir, `phase_b_${route.name}_1280.png`);
    await desktopPage.screenshot({ path: screenshotPath, fullPage: true });
    console.log(`Saved screenshot: phase_b_${route.name}_1280.png`);

    const axeRes = await new AxeBuilder({ page: desktopPage }).analyze();
    const seriousOrCritical = axeRes.violations.filter(v => v.impact === "serious" || v.impact === "critical");
    console.log(`Axe check [${route.name}]: ${axeRes.violations.length} total, ${seriousOrCritical.length} serious/critical`);
    if (seriousOrCritical.length > 0) {
      console.error(`VIOLATIONS on ${route.name}:`, JSON.stringify(seriousOrCritical.map(v => ({ id: v.id, help: v.help })), null, 2));
      totalViolations += seriousOrCritical.length;
    }
  }
  await desktopContext.close();

  // 2. Tablet 768px Audits
  console.log("\n--- Auditing Tablet 768px ---");
  const tabletContext = await browser.newContext({
    viewport: { width: 768, height: 1024 },
  });
  const tabletPage = await tabletContext.newPage();
  for (const route of [targetRoutes[0], targetRoutes[4], targetRoutes[6]]) {
    await tabletPage.goto(route.url, { waitUntil: "networkidle" });
    const screenshotPath = path.join(artifactDir, `phase_b_${route.name}_768.png`);
    await tabletPage.screenshot({ path: screenshotPath, fullPage: true });
    console.log(`Saved screenshot: phase_b_${route.name}_768.png`);
  }
  await tabletContext.close();

  // 3. Mobile 375px Audits
  console.log("\n--- Auditing Mobile 375px ---");
  const mobileContext = await browser.newContext({
    viewport: { width: 375, height: 812 },
    isMobile: true,
  });
  const mobilePage = await mobileContext.newPage();
  for (const route of [targetRoutes[0], targetRoutes[1], targetRoutes[4], targetRoutes[5], targetRoutes[7]]) {
    await mobilePage.goto(route.url, { waitUntil: "networkidle" });
    const screenshotPath = path.join(artifactDir, `phase_b_${route.name}_375.png`);
    await mobilePage.screenshot({ path: screenshotPath, fullPage: true });
    console.log(`Saved screenshot: phase_b_${route.name}_375.png`);

    const axeRes = await new AxeBuilder({ page: mobilePage }).analyze();
    const seriousOrCritical = axeRes.violations.filter(v => v.impact === "serious" || v.impact === "critical");
    if (seriousOrCritical.length > 0) {
      console.error(`Mobile VIOLATIONS on ${route.name}:`, JSON.stringify(seriousOrCritical.map(v => ({ id: v.id, help: v.help })), null, 2));
      totalViolations += seriousOrCritical.length;
    }
  }
  await mobileContext.close();

  await browser.close();

  console.log("\n=== Phase B Verification Audit Complete ===");
  if (totalViolations > 0) {
    console.error(`FAIL: ${totalViolations} serious or critical accessibility violations detected.`);
    process.exit(1);
  } else {
    console.log("SUCCESS: 0 serious or critical accessibility violations detected across all routes & viewports!");
  }
}

runAudit().catch(err => {
  console.error("Audit script failed:", err);
  process.exit(1);
});
