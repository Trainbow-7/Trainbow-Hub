import { chromium } from "playwright";
import fs from "fs";
import path from "path";

const OUT_DIR = path.resolve(process.cwd(), "public", "screenshots");

async function capture() {
  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
  }

  const browser = await chromium.launch({ headless: true });

  // 1. Desktop 1280px
  const pageDesktop = await browser.newPage({
    viewport: { width: 1280, height: 850 },
  });
  console.log("Navigating to http://localhost:3000/ai at 1280px...");
  await pageDesktop.goto("http://localhost:3000/ai", { waitUntil: "networkidle" });
  await pageDesktop.waitForTimeout(1000);
  const desktopPath = path.join(OUT_DIR, "chat_desktop_1280px.png");
  await pageDesktop.screenshot({ path: desktopPath, fullPage: false });
  console.log(`Saved desktop screenshot: ${desktopPath}`);
  await pageDesktop.close();

  // 2. Mobile 375px
  const pageMobile = await browser.newPage({
    viewport: { width: 375, height: 812 },
  });
  console.log("Navigating to http://localhost:3000/ai at 375px...");
  await pageMobile.goto("http://localhost:3000/ai", { waitUntil: "networkidle" });
  await pageMobile.waitForTimeout(1000);
  const mobilePath = path.join(OUT_DIR, "chat_mobile_375px.png");
  await pageMobile.screenshot({ path: mobilePath, fullPage: false });
  console.log(`Saved mobile screenshot: ${mobilePath}`);
  await pageMobile.close();

  await browser.close();
  console.log("All screenshots captured successfully.");
}

capture().catch((err) => {
  console.error("Capture failed:", err);
  process.exit(1);
});
