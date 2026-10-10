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

  console.log("--- Starting Phase A Verification Audit ---");

  // 1. Desktop (1280px)
  console.log("Auditing Desktop Viewport (1280px)...");
  const desktopContext = await browser.newContext({
    viewport: { width: 1280, height: 900 },
  });
  const desktopPage = await desktopContext.newPage();
  await desktopPage.goto("http://localhost:3000", { waitUntil: "networkidle" });
  
  const desktopScreenshot = path.join(artifactDir, "phase_a_desktop_1280.png");
  await desktopPage.screenshot({ path: desktopScreenshot, fullPage: true });
  console.log("Desktop screenshot saved:", desktopScreenshot);

  // Run axe on Desktop
  const axeResultsDesktop = await new AxeBuilder({ page: desktopPage }).analyze();
  console.log(`Desktop Axe Violations: ${axeResultsDesktop.violations.length}`);
  if (axeResultsDesktop.violations.length > 0) {
    console.log("Violations:", JSON.stringify(axeResultsDesktop.violations.map(v => ({ id: v.id, impact: v.impact, description: v.description })), null, 2));
  }

  // 2. Tablet (768px)
  console.log("Auditing Tablet Viewport (768px)...");
  const tabletContext = await browser.newContext({
    viewport: { width: 768, height: 1024 },
  });
  const tabletPage = await tabletContext.newPage();
  await tabletPage.goto("http://localhost:3000", { waitUntil: "networkidle" });
  
  const tabletScreenshot = path.join(artifactDir, "phase_a_tablet_768.png");
  await tabletPage.screenshot({ path: tabletScreenshot, fullPage: true });
  console.log("Tablet screenshot saved:", tabletScreenshot);

  // 3. Mobile (375px)
  console.log("Auditing Mobile Viewport (375px)...");
  const mobileContext = await browser.newContext({
    viewport: { width: 375, height: 812 },
    isMobile: true,
  });
  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto("http://localhost:3000", { waitUntil: "networkidle" });
  
  const mobileScreenshot = path.join(artifactDir, "phase_a_mobile_375.png");
  await mobilePage.screenshot({ path: mobileScreenshot, fullPage: true });
  console.log("Mobile screenshot saved:", mobileScreenshot);

  // Test Mobile Hamburger Menu Sheet
  console.log("Testing Mobile Navigation Sheet...");
  const menuButton = mobilePage.getByRole("button", { name: "Open navigation menu" });
  await menuButton.click();
  await mobilePage.waitForSelector("text=Currency & Locale");
  const menuScreenshot = path.join(artifactDir, "phase_a_mobile_menu.png");
  await mobilePage.screenshot({ path: menuScreenshot });
  console.log("Mobile Menu screenshot saved:", menuScreenshot);

  // Run axe on Mobile Menu Sheet
  const axeResultsMobile = await new AxeBuilder({ page: mobilePage }).analyze();
  console.log(`Mobile Axe Violations: ${axeResultsMobile.violations.length}`);

  // 4. Dev Design System Route (/dev/design-system)
  console.log("Auditing Relocated Dev Showcase (/dev/design-system)...");
  const devPage = await desktopContext.newPage();
  await devPage.goto("http://localhost:3000/dev/design-system", { waitUntil: "networkidle" });
  const devScreenshot = path.join(artifactDir, "phase_a_dev_design_system.png");
  await devPage.screenshot({ path: devScreenshot, fullPage: true });
  console.log("Dev Showcase screenshot saved:", devScreenshot);

  await desktopContext.close();
  await tabletContext.close();
  await mobileContext.close();
  await browser.close();

  console.log("--- Phase A Verification Complete ---");
}

runAudit().catch((err) => {
  console.error("Audit failed:", err);
  process.exit(1);
});
