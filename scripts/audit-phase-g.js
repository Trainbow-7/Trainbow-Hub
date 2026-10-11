const { chromium } = require("playwright");
const { AxeBuilder } = require("@axe-core/playwright");
const fs = require("fs");
const path = require("path");

const ARTIFACT_DIR = "C:\\Users\\USER\\.gemini\\antigravity-ide\\brain\\d2d806d1-3643-4dbf-a46d-b2539f4ca135";

const VIEWPORTS = [
  { name: "desktop_1280", width: 1280, height: 800 },
  { name: "tablet_768", width: 768, height: 1024 },
  { name: "mobile_375", width: 375, height: 812 },
];

async function runPhaseGAudit() {
  console.log("=== PHASE G ACCESSIBILITY & VISUAL AUDIT ===");

  if (!fs.existsSync(ARTIFACT_DIR)) {
    fs.mkdirSync(ARTIFACT_DIR, { recursive: true });
  }

  const browser = await chromium.launch();
  let totalViolations = 0;

  for (const vp of VIEWPORTS) {
    console.log(`\nAuditing Virtual Classroom on ${vp.name}...`);
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
    });
    const page = await context.newPage();

    try {
      await page.goto("http://localhost:3000/classroom/bkg-seed-001?role=STUDENT", {
        waitUntil: "networkidle",
        timeout: 20000,
      });

      // Wait for classroom hydration
      await page.waitForSelector('[data-testid="classroom-controls"]', { timeout: 10000 });

      // Capture default view screenshot
      const defaultScreenshot = path.join(ARTIFACT_DIR, `phase_g_classroom_${vp.name}.png`);
      await page.screenshot({ path: defaultScreenshot, fullPage: true });
      console.log(`  [Screenshot saved] ${defaultScreenshot}`);

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
          console.error(`    VIOLATION [${v.impact}]: ${v.id} - ${v.description}`);
          for (const node of v.nodes) {
            console.error(`      Target: ${node.target.join(' ')}`);
            console.error(`      HTML: ${node.html}`);
            console.error(`      Failure summary: ${node.failureSummary}`);
          }
        }
      }
    } catch (err) {
      console.error(`  Error auditing ${vp.name}:`, err.message);
    } finally {
      await context.close();
    }
  }

  // Also audit Safeguarding Modal and Low-Bandwidth Mode on Desktop
  console.log("\nAuditing Safeguarding Modal & Low-Bandwidth Mode...");
  const modalContext = await browser.newContext({
    viewport: { width: 1280, height: 800 },
  });
  const modalPage = await modalContext.newPage();

  try {
    await modalPage.goto("http://localhost:3000/classroom/bkg-seed-001?role=STUDENT", {
      waitUntil: "networkidle",
    });

    // 1. Safeguarding Modal Audit
    await modalPage.locator('[data-testid="report-conduct-btn"]').click();
    await modalPage.waitForSelector('[data-testid="safeguard-modal"]', { timeout: 5000 });

    const safeguardScreenshot = path.join(ARTIFACT_DIR, `phase_g_safeguard_modal.png`);
    await modalPage.screenshot({ path: safeguardScreenshot });
    console.log(`  [Screenshot saved] ${safeguardScreenshot}`);

    const modalAxe = await new AxeBuilder({ page: modalPage })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
      .analyze();

    const modalSerious = modalAxe.violations.filter(
      (v) => v.impact === "serious" || v.impact === "critical"
    );
    console.log(
      `  [Safeguard Modal] Violations: ${modalAxe.violations.length} total (${modalSerious.length} serious/critical)`
    );
    if (modalSerious.length > 0) {
      totalViolations += modalSerious.length;
      for (const v of modalSerious) {
        console.error(`    MODAL VIOLATION [${v.impact}]: ${v.id} - ${v.description}`);
        for (const node of v.nodes) {
          console.error(`      Target: ${node.target.join(' ')}`);
          console.error(`      HTML: ${node.html}`);
          console.error(`      Failure summary: ${node.failureSummary}`);
        }
      }
    }

    // Cancel modal
    await modalPage.getByRole("button", { name: "Cancel" }).click();

    // 2. Low-Bandwidth Mode Audit
    await modalPage.locator('[data-testid="low-bandwidth-toggle"]').click();
    await modalPage.waitForSelector('[data-testid="low-bandwidth-panel"]', { timeout: 5000 });

    const lowDataScreenshot = path.join(ARTIFACT_DIR, `phase_g_low_bandwidth_mode.png`);
    await modalPage.screenshot({ path: lowDataScreenshot });
    console.log(`  [Screenshot saved] ${lowDataScreenshot}`);
  } catch (err) {
    console.error("  Error auditing modals:", err.message);
  } finally {
    await modalContext.close();
  }

  await browser.close();

  console.log(`\n=== AUDIT SUMMARY: ${totalViolations} SERIOUS/CRITICAL VIOLATIONS ===\n`);
  if (totalViolations === 0) {
    console.log("SUCCESS: 0 serious or critical accessibility violations found across all Phase G views!");
  } else {
    console.error(`FAILED: ${totalViolations} accessibility violations must be addressed.`);
    process.exit(1);
  }
}

runPhaseGAudit();
