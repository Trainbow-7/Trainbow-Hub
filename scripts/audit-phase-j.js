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

async function runPhaseJAudit() {
  console.log("=== PHASE J ACCESSIBILITY & VISUAL AUDIT (PARENT & GUARDIAN PORTAL) ===");

  if (!fs.existsSync(ARTIFACT_DIR)) {
    fs.mkdirSync(ARTIFACT_DIR, { recursive: true });
  }

  const browser = await chromium.launch();
  let totalViolations = 0;

  for (const vp of VIEWPORTS) {
    console.log(`\nAuditing Phase J views on ${vp.name}...`);
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
    });
    const page = await context.newPage();

    try {
      // 1. Authenticate as Parent
      console.log(`  Authenticating as Parent (Chief Emeka Eze)...`);
      await page.request.post("http://localhost:3000/api/auth/reset");
      await page.request.post("http://localhost:3000/api/auth/login", {
        data: { email: "parent@trainbowhub.ng", password: "Trainbow2026!" },
      });

      // 2. Audit /guardian - Tab 1: Linked Wards & Progress (PP-01)
      console.log(`  Visiting /guardian (Linked Wards)...`);
      await page.goto("http://localhost:3000/guardian", {
        waitUntil: "networkidle",
        timeout: 20000,
      });

      await page.waitForSelector('[data-testid="ward-card-usr-std-001"]', { timeout: 10000 });
      const overviewScreenshot = path.join(ARTIFACT_DIR, `phase_j_guardian_overview_${vp.name}.png`);
      await page.screenshot({ path: overviewScreenshot, fullPage: true });
      console.log(`  [Screenshot saved] ${overviewScreenshot}`);

      let axeResults = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
        .analyze();

      let seriousOrCritical = axeResults.violations.filter(
        (v) => v.impact === "serious" || v.impact === "critical"
      );
      console.log(`  [/guardian Overview on ${vp.name}] Violations: ${axeResults.violations.length} total (${seriousOrCritical.length} serious/critical)`);
      if (seriousOrCritical.length > 0) {
        totalViolations += seriousOrCritical.length;
        seriousOrCritical.forEach((v) => console.log(`    ❌ [${v.impact}] ${v.id}: ${v.description}`));
      }

      // 3. Audit /guardian - Tab 2: Timetable & Observer Entry (PP-02)
      console.log(`  Switching to Timetable & Live Observer tab...`);
      await page.locator('[data-testid="tab-guardian-timetable"]').click();
      await page.waitForSelector('[data-testid="timetable-item-bkg-seed-001"]', { timeout: 5000 });

      const timetableScreenshot = path.join(ARTIFACT_DIR, `phase_j_guardian_timetable_${vp.name}.png`);
      await page.screenshot({ path: timetableScreenshot, fullPage: true });
      console.log(`  [Screenshot saved] ${timetableScreenshot}`);

      let timetableAxe = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
        .analyze();

      let timetableSerious = timetableAxe.violations.filter(
        (v) => v.impact === "serious" || v.impact === "critical"
      );
      console.log(`  [/guardian Timetable on ${vp.name}] Violations: ${timetableAxe.violations.length} total (${timetableSerious.length} serious/critical)`);
      if (timetableSerious.length > 0) {
        totalViolations += timetableSerious.length;
        timetableSerious.forEach((v) => {
          console.log(`    ❌ [${v.impact}] ${v.id}: ${v.description}`);
          v.nodes.forEach((n) => console.log(`       Node:`, n.target, n.html));
        });
      }

      // 4. Audit /guardian - Tab 3: Tutor Notes & Homework (PP-04)
      console.log(`  Switching to Tutor Notes tab...`);
      await page.locator('[data-testid="tab-guardian-notes"]').click();
      await page.waitForSelector('[data-testid="tutor-note-tpn-seed-001"]', { timeout: 5000 });

      const notesScreenshot = path.join(ARTIFACT_DIR, `phase_j_guardian_notes_${vp.name}.png`);
      await page.screenshot({ path: notesScreenshot, fullPage: true });
      console.log(`  [Screenshot saved] ${notesScreenshot}`);

      let notesAxe = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
        .analyze();

      let notesSerious = notesAxe.violations.filter(
        (v) => v.impact === "serious" || v.impact === "critical"
      );
      console.log(`  [/guardian Notes on ${vp.name}] Violations: ${notesAxe.violations.length} total (${notesSerious.length} serious/critical)`);
      if (notesSerious.length > 0) {
        totalViolations += notesSerious.length;
        notesSerious.forEach((v) => console.log(`    ❌ [${v.impact}] ${v.id}: ${v.description}`));
      }
    } catch (err) {
      console.error(`  Error during audit on ${vp.name}:`, err);
      totalViolations++;
    } finally {
      await context.close();
    }
  }

  await browser.close();

  console.log("\n=======================================================");
  if (totalViolations === 0) {
    console.log("✅ AUDIT PASSED: 0 serious or critical accessibility violations found across all viewports!");
    process.exit(0);
  } else {
    console.error(`❌ AUDIT FAILED: ${totalViolations} serious or critical accessibility violations detected.`);
    process.exit(1);
  }
}

runPhaseJAudit();
