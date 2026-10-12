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

async function runPhaseMAudit() {
  console.log("=== PHASE M ACCESSIBILITY & VISUAL AUDIT (RELEASE GATES, DISASTER RECOVERY & HANDOVER) ===");

  if (!fs.existsSync(ARTIFACT_DIR)) {
    fs.mkdirSync(ARTIFACT_DIR, { recursive: true });
  }

  const browser = await chromium.launch();
  let totalViolations = 0;

  for (const vp of VIEWPORTS) {
    console.log(`\nAuditing Phase M Release Gates & Handover Portal on ${vp.name}...`);
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
    });
    const page = await context.newPage();

    try {
      // 1. Visit /release-gates - 8 Production Release Gates (RG-01)
      console.log(`  Visiting /release-gates (8 Production Gates)...`);
      await page.goto("http://localhost:3000/release-gates", {
        waitUntil: "networkidle",
        timeout: 20000,
      });

      await page.waitForSelector('[data-testid="release-gates-container"]', { timeout: 10000 });
      const gatesScreenshot = path.join(ARTIFACT_DIR, `phase_m_release_gates_${vp.name}.png`);
      await page.screenshot({ path: gatesScreenshot, fullPage: true });
      console.log(`  [Screenshot saved] ${gatesScreenshot}`);

      let axeResults = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
        .analyze();

      let seriousOrCritical = axeResults.violations.filter(
        (v) => v.impact === "serious" || v.impact === "critical"
      );
      console.log(`  [/release-gates Gates on ${vp.name}] Violations: ${axeResults.violations.length} total (${seriousOrCritical.length} serious/critical)`);
      if (seriousOrCritical.length > 0) {
        totalViolations += seriousOrCritical.length;
        seriousOrCritical.forEach((v) => {
          console.log(`    ❌ [${v.impact}] ${v.id}: ${v.description}`);
          v.nodes.forEach((n) => console.log(`       Target: ${n.target.join(", ")} | HTML: ${n.html.slice(0, 100)}`));
        });
      }

      // 2. Tab 2: Disaster Recovery & Automated Backups (RG-02)
      console.log(`  Testing Tab 2: Disaster Recovery & Automated Backups...`);
      await page.getByRole("button", { name: /Disaster Recovery & Automated Backups/ }).click();
      await page.waitForTimeout(600);

      const drScreenshot = path.join(ARTIFACT_DIR, `phase_m_disaster_recovery_${vp.name}.png`);
      await page.screenshot({ path: drScreenshot, fullPage: true });
      console.log(`  [Screenshot saved] ${drScreenshot}`);

      axeResults = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
        .analyze();

      seriousOrCritical = axeResults.violations.filter(
        (v) => v.impact === "serious" || v.impact === "critical"
      );
      console.log(`  [Disaster Recovery on ${vp.name}] Violations: ${axeResults.violations.length} total (${seriousOrCritical.length} serious/critical)`);
      if (seriousOrCritical.length > 0) {
        totalViolations += seriousOrCritical.length;
        seriousOrCritical.forEach((v) => {
          console.log(`    ❌ [${v.impact}] ${v.id}: ${v.description}`);
        });
      }

      // 3. Tab 3: NDPA 2023 Statutory Privacy & Retention Matrix (RG-03)
      console.log(`  Testing Tab 3: NDPA 2023 Privacy & Retention...`);
      await page.getByRole("button", { name: /NDPA 2023 Privacy & Retention/ }).click();
      await page.waitForTimeout(600);

      const privacyScreenshot = path.join(ARTIFACT_DIR, `phase_m_ndpa_privacy_${vp.name}.png`);
      await page.screenshot({ path: privacyScreenshot, fullPage: true });
      console.log(`  [Screenshot saved] ${privacyScreenshot}`);

      axeResults = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
        .analyze();

      seriousOrCritical = axeResults.violations.filter(
        (v) => v.impact === "serious" || v.impact === "critical"
      );
      console.log(`  [NDPA Privacy on ${vp.name}] Violations: ${axeResults.violations.length} total (${seriousOrCritical.length} serious/critical)`);
      if (seriousOrCritical.length > 0) {
        totalViolations += seriousOrCritical.length;
        seriousOrCritical.forEach((v) => {
          console.log(`    ❌ [${v.impact}] ${v.id}: ${v.description}`);
          v.nodes.forEach((n) => console.log(`       Target: ${n.target.join(", ")} | HTML: ${n.html.slice(0, 100)}`));
        });
      }

      // 4. Tab 4: 12 Platform Handover Deliverables (RG-04)
      console.log(`  Testing Tab 4: 12 Platform Handover Deliverables...`);
      await page.getByRole("button", { name: /12 Platform Handover Deliverables/ }).click();
      await page.waitForTimeout(600);

      const handoverScreenshot = path.join(ARTIFACT_DIR, `phase_m_handover_${vp.name}.png`);
      await page.screenshot({ path: handoverScreenshot, fullPage: true });
      console.log(`  [Screenshot saved] ${handoverScreenshot}`);

      axeResults = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
        .analyze();

      seriousOrCritical = axeResults.violations.filter(
        (v) => v.impact === "serious" || v.impact === "critical"
      );
      console.log(`  [Handover Deliverables on ${vp.name}] Violations: ${axeResults.violations.length} total (${seriousOrCritical.length} serious/critical)`);
      if (seriousOrCritical.length > 0) {
        totalViolations += seriousOrCritical.length;
        seriousOrCritical.forEach((v) => {
          console.log(`    ❌ [${v.impact}] ${v.id}: ${v.description}`);
          v.nodes.forEach((n) => console.log(`       Target: ${n.target.join(", ")} | HTML: ${n.html.slice(0, 100)}`));
        });
      }

    } catch (err) {
      console.error(`  Error auditing on ${vp.name}:`, err);
      totalViolations++;
    } finally {
      await context.close();
    }
  }

  await browser.close();

  console.log("\n========================================================");
  if (totalViolations === 0) {
    console.log("✅ ALL VIEWPORTS PASSED ACCESSIBILITY AUDIT (0 Serious/Critical Violations)");
  } else {
    console.log(`❌ AUDIT FAILED WITH ${totalViolations} SERIOUS/CRITICAL VIOLATIONS`);
    process.exit(1);
  }
}

runPhaseMAudit().catch((err) => {
  console.error("Fatal audit error:", err);
  process.exit(1);
});
