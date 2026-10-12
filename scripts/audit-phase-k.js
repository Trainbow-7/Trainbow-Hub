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

async function runPhaseKAudit() {
  console.log("=== PHASE K ACCESSIBILITY & VISUAL AUDIT (TRAINBOW HUB MUSIC) ===");

  if (!fs.existsSync(ARTIFACT_DIR)) {
    fs.mkdirSync(ARTIFACT_DIR, { recursive: true });
  }

  const browser = await chromium.launch();
  let totalViolations = 0;

  for (const vp of VIEWPORTS) {
    console.log(`\nAuditing Phase K Music Hub on ${vp.name}...`);
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
    });
    const page = await context.newPage();

    try {
      // 1. Visit /music - Tab 1: Catalogue & Discipline Tracks (MU-01, MU-02)
      console.log(`  Visiting /music (Catalogue)...`);
      await page.goto("http://localhost:3000/music", {
        waitUntil: "networkidle",
        timeout: 20000,
      });

      await page.waitForSelector("#tab-catalogue", { timeout: 10000 });
      const catalogueScreenshot = path.join(ARTIFACT_DIR, `phase_k_music_catalogue_${vp.name}.png`);
      await page.screenshot({ path: catalogueScreenshot, fullPage: true });
      console.log(`  [Screenshot saved] ${catalogueScreenshot}`);

      let axeResults = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
        .analyze();

      let seriousOrCritical = axeResults.violations.filter(
        (v) => v.impact === "serious" || v.impact === "critical"
      );
      console.log(`  [/music Catalogue on ${vp.name}] Violations: ${axeResults.violations.length} total (${seriousOrCritical.length} serious/critical)`);
      if (seriousOrCritical.length > 0) {
        totalViolations += seriousOrCritical.length;
        seriousOrCritical.forEach((v) => console.log(`    ❌ [${v.impact}] ${v.id}: ${v.description}`));
      }

      // 2. Tab 2: Vetted Music Instructors & Booking (MU-01, MU-02)
      console.log(`  Switching to Vetted Music Instructors tab...`);
      await page.locator("#tab-tutors").click();
      await page.waitForTimeout(600);

      const tutorsScreenshot = path.join(ARTIFACT_DIR, `phase_k_music_tutors_${vp.name}.png`);
      await page.screenshot({ path: tutorsScreenshot, fullPage: true });
      console.log(`  [Screenshot saved] ${tutorsScreenshot}`);

      axeResults = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
        .analyze();

      seriousOrCritical = axeResults.violations.filter(
        (v) => v.impact === "serious" || v.impact === "critical"
      );
      console.log(`  [/music Tutors on ${vp.name}] Violations: ${axeResults.violations.length} total (${seriousOrCritical.length} serious/critical)`);
      if (seriousOrCritical.length > 0) {
        totalViolations += seriousOrCritical.length;
        seriousOrCritical.forEach((v) => console.log(`    ❌ [${v.impact}] ${v.id}: ${v.description}`));
      }

      // 3. Tab 3: Licensed Repertoire & Sheet Music (MU-04)
      console.log(`  Switching to Licensed Repertoire tab...`);
      await page.locator("#tab-repertoire").click();
      await page.waitForTimeout(600);

      const repertoireScreenshot = path.join(ARTIFACT_DIR, `phase_k_music_repertoire_${vp.name}.png`);
      await page.screenshot({ path: repertoireScreenshot, fullPage: true });
      console.log(`  [Screenshot saved] ${repertoireScreenshot}`);

      axeResults = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
        .analyze();

      seriousOrCritical = axeResults.violations.filter(
        (v) => v.impact === "serious" || v.impact === "critical"
      );
      console.log(`  [/music Repertoire on ${vp.name}] Violations: ${axeResults.violations.length} total (${seriousOrCritical.length} serious/critical)`);
      if (seriousOrCritical.length > 0) {
        totalViolations += seriousOrCritical.length;
        seriousOrCritical.forEach((v) => console.log(`    ❌ [${v.impact}] ${v.id}: ${v.description}`));
      }

      // 4. Tab 4: Practice Log & Interactive Metronome (MU-03)
      console.log(`  Switching to Practice Log & Metronome tab...`);
      await page.locator("#tab-practice").click();
      await page.waitForTimeout(600);

      const practiceScreenshot = path.join(ARTIFACT_DIR, `phase_k_music_practice_${vp.name}.png`);
      await page.screenshot({ path: practiceScreenshot, fullPage: true });
      console.log(`  [Screenshot saved] ${practiceScreenshot}`);

      axeResults = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
        .analyze();

      seriousOrCritical = axeResults.violations.filter(
        (v) => v.impact === "serious" || v.impact === "critical"
      );
      console.log(`  [/music Practice on ${vp.name}] Violations: ${axeResults.violations.length} total (${seriousOrCritical.length} serious/critical)`);
      if (seriousOrCritical.length > 0) {
        totalViolations += seriousOrCritical.length;
        seriousOrCritical.forEach((v) => console.log(`    ❌ [${v.impact}] ${v.id}: ${v.description}`));
      }

    } catch (err) {
      console.error(`  Error auditing on ${vp.name}:`, err);
      totalViolations++;
    } finally {
      await context.close();
    }
  }

  await browser.close();

  console.log(`\n========================================`);
  console.log(`PHASE K ACCESSIBILITY AUDIT COMPLETE`);
  console.log(`Total Serious/Critical Violations: ${totalViolations}`);
  console.log(`========================================\n`);

  if (totalViolations > 0) {
    process.exit(1);
  }
}

runPhaseKAudit().catch((err) => {
  console.error(err);
  process.exit(1);
});
