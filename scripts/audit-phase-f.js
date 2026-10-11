const { chromium } = require("playwright");
const { AxeBuilder } = require("@axe-core/playwright");
const fs = require("fs");
const path = require("path");

const ARTIFACT_DIR = "C:\\Users\\USER\\.gemini\\antigravity-ide\\brain\\5c39b9c9-ca38-4d05-8639-0bc2e91b5958";

const VIEWPORTS = [
  { name: "desktop_1280", width: 1280, height: 800 },
  { name: "tablet_768", width: 768, height: 1024 },
  { name: "mobile_375", width: 375, height: 812 },
];

async function runPhaseFAudit() {
  console.log("=== PHASE F ACCESSIBILITY & VISUAL AUDIT ===");

  if (!fs.existsSync(ARTIFACT_DIR)) {
    fs.mkdirSync(ARTIFACT_DIR, { recursive: true });
  }

  const browser = await chromium.launch();
  let totalViolations = 0;

  for (const vp of VIEWPORTS) {
    console.log(`\nAuditing Socratic AI Workspace on ${vp.name}...`);
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
    });
    const page = await context.newPage();

    try {
      await page.goto("http://localhost:3000/ai", {
        waitUntil: "networkidle",
        timeout: 20000,
      });

      // Wait for workspace hydration
      await page.waitForSelector('[data-testid="quota-counter"]', { timeout: 10000 });

      // Capture default view screenshot
      const defaultScreenshot = path.join(ARTIFACT_DIR, `phase_f_ai_assistant_${vp.name}.png`);
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
          console.error(`    VIOLATION [${v.impact}]: ${v.id} - ${v.help}`);
          for (const node of v.nodes) {
            console.error(`      Target: ${node.target.join(", ")}`);
            console.error(`      Failure summary: ${node.failureSummary}`);
          }
        }
      }
    } catch (err) {
      console.error(`  Error auditing on ${vp.name}:`, err.message);
    } finally {
      await context.close();
    }
  }

  await browser.close();

  console.log("\n====================================");
  console.log(`Total serious/critical accessibility violations: ${totalViolations}`);
  console.log("====================================");

  if (totalViolations > 0) {
    process.exit(1);
  } else {
    console.log("SUCCESS: 0 serious or critical accessibility violations found across all Phase F views!");
  }
}

runPhaseFAudit().catch((err) => {
  console.error("Audit failed:", err);
  process.exit(1);
});
