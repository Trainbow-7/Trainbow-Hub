const { chromium } = require("playwright");
const { AxeBuilder } = require("@axe-core/playwright");
const fs = require("fs");
const path = require("path");

const ARTIFACT_DIR = "C:\\Users\\USER\\.gemini\\antigravity-ide\\brain\\4edc796b-afe7-41bd-bb90-9303f1dad3f3";

const VIEWPORTS = [
  { name: "desktop_1280", width: 1280, height: 800 },
  { name: "tablet_768", width: 768, height: 1024 },
  { name: "mobile_375", width: 375, height: 812 },
];

async function runPhaseHAudit() {
  console.log("=== PHASE H ACCESSIBILITY & VISUAL AUDIT ===");

  if (!fs.existsSync(ARTIFACT_DIR)) {
    fs.mkdirSync(ARTIFACT_DIR, { recursive: true });
  }

  const browser = await chromium.launch();
  let totalViolations = 0;

  for (const vp of VIEWPORTS) {
    console.log(`\nAuditing Admin Portal on ${vp.name}...`);
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
    });
    const page = await context.newPage();

    try {
      // Navigate to /admin
      await page.goto("http://localhost:3000/admin", {
        waitUntil: "networkidle",
        timeout: 20000,
      });

      // Sign in as admin via 1-tap quick sign-in if unauthenticated
      const quickBtn = page.locator('[data-testid="admin-quick-signin-btn"]');
      if (await quickBtn.isVisible({ timeout: 2000 }).catch(() => false)) {
        await quickBtn.click();
        await page.waitForSelector('[data-testid="wat-admin-clock"]', { timeout: 10000 });
      }

      // Wait for Admin Portal hydration
      await page.waitForSelector('[data-testid="wat-admin-clock"]', { timeout: 10000 });

      // 1. Capture Overview Tab Screenshot
      const overviewScreenshot = path.join(ARTIFACT_DIR, `phase_h_admin_overview_${vp.name}.png`);
      await page.screenshot({ path: overviewScreenshot, fullPage: true });
      console.log(`  [Screenshot saved] ${overviewScreenshot}`);

      // 2. Open Tutor Vetting Tab & screenshot
      await page.locator('[data-testid="tab-tutors"]').click();
      await page.waitForSelector('[data-testid="tutor-vetting-table"]', { timeout: 5000 });
      const tutorsScreenshot = path.join(ARTIFACT_DIR, `phase_h_admin_tutors_${vp.name}.png`);
      await page.screenshot({ path: tutorsScreenshot, fullPage: true });
      console.log(`  [Screenshot saved] ${tutorsScreenshot}`);

      // 3. Open Safeguarding Tab & screenshot
      await page.locator('[data-testid="tab-safeguarding"]').click();
      await page.waitForSelector('[data-testid="safeguarding-queue"]', { timeout: 5000 });
      const safeScreenshot = path.join(ARTIFACT_DIR, `phase_h_admin_safeguarding_${vp.name}.png`);
      await page.screenshot({ path: safeScreenshot, fullPage: true });
      console.log(`  [Screenshot saved] ${safeScreenshot}`);

      // Run axe accessibility audit on the page
      const axeResults = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
        .analyze();

      const seriousOrCritical = axeResults.violations.filter(
        (v) => v.impact === "serious" || v.impact === "critical"
      );

      console.log(
        `  [${vp.name}] Violations: ${axeResults.violations.length} total (${seriousOrCritical.length} serious/critical)`
      );

      if (seriousOrCritical.length > 0) {
        totalViolations += seriousOrCritical.length;
        for (const v of seriousOrCritical) {
          console.log(`    ❌ [${v.impact}] ${v.id}: ${v.description}`);
          for (const node of v.nodes.slice(0, 2)) {
            console.log(`       Target: ${node.target.join(", ")}`);
          }
        }
      }
    } catch (err) {
      console.error(`  Error auditing ${vp.name}:`, err.message);
    } finally {
      await context.close();
    }
  }

  await browser.close();

  console.log(`\n========================================`);
  console.log(`Phase H Audit Completed with ${totalViolations} serious/critical violations.`);
  if (totalViolations > 0) {
    process.exit(1);
  }
}

runPhaseHAudit().catch((err) => {
  console.error("Fatal audit error:", err);
  process.exit(1);
});
