const { chromium } = require("playwright");
const { AxeBuilder } = require("@axe-core/playwright");
const fs = require("fs");
const path = require("path");

const ARTIFACT_DIR = "C:\\Users\\USER\\.gemini\\antigravity-ide\\brain\\6671fa5a-d9ca-4196-8761-316220499906";

const VIEWPORTS = [
  { name: "desktop_1280", width: 1280, height: 800 },
  { name: "tablet_768", width: 768, height: 1024 },
  { name: "mobile_375", width: 375, height: 812 },
];

const PAGES_TO_AUDIT = [
  { route: "/login", name: "phase_c_login" },
  { route: "/register", name: "phase_c_register" },
  { route: "/guardian/consent?studentId=usr-std-minor-002", name: "phase_c_guardian_consent" },
];

async function runPhaseCAudit() {
  console.log("=== PHASE C ACCESSIBILITY & VISUAL AUDIT ===");

  if (!fs.existsSync(ARTIFACT_DIR)) {
    fs.mkdirSync(ARTIFACT_DIR, { recursive: true });
  }

  const browser = await chromium.launch();
  let totalViolations = 0;
  const auditReport = [];

  for (const p of PAGES_TO_AUDIT) {
    console.log(`\nAuditing page: ${p.route} (${p.name})`);

    for (const vp of VIEWPORTS) {
      const context = await browser.newContext({
        viewport: { width: vp.width, height: vp.height },
      });
      const page = await context.newPage();

      try {
        await page.goto(`http://localhost:3000${p.route}`, {
          waitUntil: "networkidle",
          timeout: 20000,
        });

        // Capture screenshot
        const screenshotPath = path.join(ARTIFACT_DIR, `${p.name}_${vp.name}.png`);
        await page.screenshot({ path: screenshotPath, fullPage: true });
        console.log(`  [Screenshot saved] ${screenshotPath}`);

        // Run axe audit
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

        auditReport.push({
          page: p.route,
          viewport: vp.name,
          violations: seriousOrCritical.length,
          allViolations: axeResults.violations.length,
          details: seriousOrCritical,
        });
      } catch (err) {
        console.error(`  Error auditing ${p.route} on ${vp.name}:`, err.message);
      } finally {
        await context.close();
      }
    }
  }

  await browser.close();

  console.log("\n====================================");
  console.log(`Total serious/critical violations: ${totalViolations}`);
  console.log("====================================");

  if (totalViolations > 0) {
    process.exit(1);
  } else {
    console.log("SUCCESS: 0 serious or critical accessibility violations found across all Phase C routes!");
  }
}

runPhaseCAudit().catch((err) => {
  console.error("Audit script failed:", err);
  process.exit(1);
});
