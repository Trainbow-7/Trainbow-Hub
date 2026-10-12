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

async function runPhaseIAudit() {
  console.log("=== PHASE I ACCESSIBILITY & VISUAL AUDIT ===");

  if (!fs.existsSync(ARTIFACT_DIR)) {
    fs.mkdirSync(ARTIFACT_DIR, { recursive: true });
  }

  const browser = await chromium.launch();
  let totalViolations = 0;

  for (const vp of VIEWPORTS) {
    console.log(`\nAuditing Phase I views on ${vp.name}...`);
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
    });
    const page = await context.newPage();

    try {
      // 1. Audit /subjects (Public Explorer)
      console.log(`  Visiting /subjects...`);
      await page.goto("http://localhost:3000/subjects", {
        waitUntil: "networkidle",
        timeout: 20000,
      });

      await page.waitForSelector('[data-testid="subjects-catalog-grid"]', { timeout: 10000 });
      const explorerScreenshot = path.join(ARTIFACT_DIR, `phase_i_subjects_explorer_${vp.name}.png`);
      await page.screenshot({ path: explorerScreenshot, fullPage: true });
      console.log(`  [Screenshot saved] ${explorerScreenshot}`);

      let axeResults = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
        .analyze();

      let seriousOrCritical = axeResults.violations.filter(
        (v) => v.impact === "serious" || v.impact === "critical"
      );
      console.log(`  [/subjects on ${vp.name}] Violations: ${axeResults.violations.length} total (${seriousOrCritical.length} serious/critical)`);
      if (seriousOrCritical.length > 0) {
        totalViolations += seriousOrCritical.length;
        seriousOrCritical.forEach((v) => console.log(`    ❌ [${v.impact}] ${v.id}: ${v.description}`));
      }

      // 2. Audit /subjects/mathematics (Subject Detail with Active AI Launcher)
      console.log(`  Visiting /subjects/mathematics...`);
      await page.goto("http://localhost:3000/subjects/mathematics", {
        waitUntil: "networkidle",
        timeout: 20000,
      });

      await page.waitForSelector('[data-testid="subject-ai-launcher"]', { timeout: 10000 });
      const detailScreenshot = path.join(ARTIFACT_DIR, `phase_i_subject_detail_math_${vp.name}.png`);
      await page.screenshot({ path: detailScreenshot, fullPage: true });
      console.log(`  [Screenshot saved] ${detailScreenshot}`);

      axeResults = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
        .analyze();

      seriousOrCritical = axeResults.violations.filter(
        (v) => v.impact === "serious" || v.impact === "critical"
      );
      console.log(`  [/subjects/mathematics on ${vp.name}] Violations: ${axeResults.violations.length} total (${seriousOrCritical.length} serious/critical)`);
      if (seriousOrCritical.length > 0) {
        totalViolations += seriousOrCritical.length;
        seriousOrCritical.forEach((v) => console.log(`    ❌ [${v.impact}] ${v.id}: ${v.description}`));
      }

      // 3. Audit /admin (Subjects tab)
      console.log(`  Visiting /admin Subjects tab...`);
      await page.goto("http://localhost:3000/admin", {
        waitUntil: "networkidle",
        timeout: 20000,
      });

      const quickBtn = page.locator('[data-testid="admin-quick-signin-btn"]');
      if (await quickBtn.isVisible({ timeout: 2000 }).catch(() => false)) {
        await quickBtn.click();
        await page.waitForSelector('[data-testid="wat-admin-clock"]', { timeout: 10000 });
      }

      await page.locator('[data-testid="tab-subjects"]').click();
      await page.waitForSelector('[data-testid="subjects-table"]', { timeout: 10000 });

      const adminScreenshot = path.join(ARTIFACT_DIR, `phase_i_admin_subjects_${vp.name}.png`);
      await page.screenshot({ path: adminScreenshot, fullPage: true });
      console.log(`  [Screenshot saved] ${adminScreenshot}`);

      axeResults = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
        .analyze();

      seriousOrCritical = axeResults.violations.filter(
        (v) => v.impact === "serious" || v.impact === "critical"
      );
      console.log(`  [/admin subjects tab on ${vp.name}] Violations: ${axeResults.violations.length} total (${seriousOrCritical.length} serious/critical)`);
      if (seriousOrCritical.length > 0) {
        totalViolations += seriousOrCritical.length;
        seriousOrCritical.forEach((v) => console.log(`    ❌ [${v.impact}] ${v.id}: ${v.description}`));
      }

    } catch (err) {
      console.error(`  Error auditing ${vp.name}:`, err.message);
    } finally {
      await context.close();
    }
  }

  await browser.close();

  console.log(`\n========================================`);
  console.log(`Phase I Audit Completed with ${totalViolations} serious/critical violations.`);
  if (totalViolations > 0) {
    process.exit(1);
  }
}

runPhaseIAudit().catch((err) => {
  console.error("Fatal audit error:", err);
  process.exit(1);
});
