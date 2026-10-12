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

async function runPhaseLAudit() {
  console.log("=== PHASE L ACCESSIBILITY & VISUAL AUDIT (SCHOOL ADMINISTRATION & PWA) ===");

  if (!fs.existsSync(ARTIFACT_DIR)) {
    fs.mkdirSync(ARTIFACT_DIR, { recursive: true });
  }

  const browser = await chromium.launch();
  let totalViolations = 0;

  for (const vp of VIEWPORTS) {
    console.log(`\nAuditing Phase L School Administration Portal on ${vp.name}...`);
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
    });
    const page = await context.newPage();

    try {
      // 1. Visit /school - Overview & Cohorts (SC-01, SC-03)
      console.log(`  Visiting /school (Overview & Cohorts)...`);
      await page.goto("http://localhost:3000/school", {
        waitUntil: "networkidle",
        timeout: 20000,
      });

      await page.waitForSelector('[data-testid="school-page-container"]', { timeout: 10000 });
      const overviewScreenshot = path.join(ARTIFACT_DIR, `phase_l_school_overview_${vp.name}.png`);
      await page.screenshot({ path: overviewScreenshot, fullPage: true });
      console.log(`  [Screenshot saved] ${overviewScreenshot}`);

      let axeResults = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
        .analyze();

      let seriousOrCritical = axeResults.violations.filter(
        (v) => v.impact === "serious" || v.impact === "critical"
      );
      console.log(`  [/school Overview on ${vp.name}] Violations: ${axeResults.violations.length} total (${seriousOrCritical.length} serious/critical)`);
      if (seriousOrCritical.length > 0) {
        totalViolations += seriousOrCritical.length;
        seriousOrCritical.forEach((v) => {
          console.log(`    ❌ [${v.impact}] ${v.id}: ${v.description}`);
          v.nodes.forEach((n) => console.log(`       Target: ${n.target.join(", ")} | HTML: ${n.html.slice(0, 100)}`));
        });
      }

      // 2. Tab 2: Students Roster Table (SC-02)
      console.log(`  Switching to Enrolled Students Roster tab...`);
      await page.getByRole("button", { name: /Enrolled Students Roster/ }).click();
      await page.waitForTimeout(600);
      await page.waitForSelector('[data-testid="student-roster-table"]', { timeout: 10000 });

      const studentsScreenshot = path.join(ARTIFACT_DIR, `phase_l_school_students_${vp.name}.png`);
      await page.screenshot({ path: studentsScreenshot, fullPage: true });
      console.log(`  [Screenshot saved] ${studentsScreenshot}`);

      axeResults = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
        .analyze();

      seriousOrCritical = axeResults.violations.filter(
        (v) => v.impact === "serious" || v.impact === "critical"
      );
      console.log(`  [/school Students Roster on ${vp.name}] Violations: ${axeResults.violations.length} total (${seriousOrCritical.length} serious/critical)`);
      if (seriousOrCritical.length > 0) {
        totalViolations += seriousOrCritical.length;
        seriousOrCritical.forEach((v) => console.log(`    ❌ [${v.impact}] ${v.id}: ${v.description}`));
      }

      // 3. Tab 3: Regional Multilingual Localization (SC-04, ADR-013)
      console.log(`  Switching to Multilingual Localization tab...`);
      await page.getByRole("button", { name: /Multilingual Localization/ }).click();
      await page.waitForTimeout(600);

      const multilingualScreenshot = path.join(ARTIFACT_DIR, `phase_l_school_multilingual_${vp.name}.png`);
      await page.screenshot({ path: multilingualScreenshot, fullPage: true });
      console.log(`  [Screenshot saved] ${multilingualScreenshot}`);

      axeResults = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
        .analyze();

      seriousOrCritical = axeResults.violations.filter(
        (v) => v.impact === "serious" || v.impact === "critical"
      );
      console.log(`  [/school Multilingual on ${vp.name}] Violations: ${axeResults.violations.length} total (${seriousOrCritical.length} serious/critical)`);
      if (seriousOrCritical.length > 0) {
        totalViolations += seriousOrCritical.length;
        seriousOrCritical.forEach((v) => {
          console.log(`    ❌ [${v.impact}] ${v.id}: ${v.description}`);
          v.nodes.forEach((n) => console.log(`       Target: ${n.target.join(", ")} | HTML: ${n.html.slice(0, 100)}`));
        });
      }

      // 4. Tab 4: Low-Bandwidth & Offline PWA (SC-05)
      console.log(`  Switching to Low-Bandwidth & Offline PWA tab...`);
      await page.getByRole("button", { name: /Low-Bandwidth & Offline PWA/ }).click();
      await page.waitForTimeout(600);

      const offlineScreenshot = path.join(ARTIFACT_DIR, `phase_l_school_offline_${vp.name}.png`);
      await page.screenshot({ path: offlineScreenshot, fullPage: true });
      console.log(`  [Screenshot saved] ${offlineScreenshot}`);

      axeResults = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
        .analyze();

      seriousOrCritical = axeResults.violations.filter(
        (v) => v.impact === "serious" || v.impact === "critical"
      );
      console.log(`  [/school Offline PWA on ${vp.name}] Violations: ${axeResults.violations.length} total (${seriousOrCritical.length} serious/critical)`);
      if (seriousOrCritical.length > 0) {
        totalViolations += seriousOrCritical.length;
        seriousOrCritical.forEach((v) => {
          console.log(`    ❌ [${v.impact}] ${v.id}: ${v.description}`);
          v.nodes.forEach((n) => console.log(`       Target: ${n.target.join(", ")} | HTML: ${n.html.slice(0, 100)}`));
        });
      }
    } catch (err) {
      console.error(`  Error during audit on ${vp.name}:`, err);
      totalViolations++;
    } finally {
      await context.close();
    }
  }

  await browser.close();

  console.log(`\n======================================================`);
  if (totalViolations === 0) {
    console.log("✅ PHASE L AUDIT PASSED: 0 serious/critical accessibility violations across all viewports!");
    process.exit(0);
  } else {
    console.error(`❌ PHASE L AUDIT FAILED: ${totalViolations} serious/critical violations detected.`);
    process.exit(1);
  }
}

runPhaseLAudit();
