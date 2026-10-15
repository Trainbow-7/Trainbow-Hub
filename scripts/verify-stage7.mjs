import { chromium } from "playwright";
import fs from "fs";
import path from "path";

const BREAKPOINTS = [
  { name: "375", width: 375, height: 812 },
  { name: "768", width: 768, height: 1024 },
  { name: "1024", width: 1024, height: 768 },
  { name: "1280", width: 1280, height: 800 },
  { name: "1536", width: 1536, height: 900 },
];

const PAGES = [
  { name: "login", path: "/login" },
  { name: "register", path: "/register" },
  { name: "dashboard_student", path: "/dashboard" },
  { name: "guardian_portal", path: "/guardian" },
  { name: "dashboard_tutor", path: "/dashboard/tutor" },
];

const OUT_DIR = path.resolve(process.cwd(), "stage7_screenshots");

async function run() {
  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
  }

  const browser = await chromium.launch();

  for (const pageInfo of PAGES) {
    for (const bp of BREAKPOINTS) {
      const page = await browser.newPage({
        viewport: { width: bp.width, height: bp.height },
      });

      console.log(`Capturing ${pageInfo.path} at ${bp.name}px...`);
      await page.goto(`http://localhost:3000${pageInfo.path}`, { waitUntil: "networkidle" });
      await page.screenshot({
        path: path.join(OUT_DIR, `${pageInfo.name}_${bp.name}.png`),
        fullPage: true,
      });

      await page.close();
    }
  }

  await browser.close();
  console.log("Stage 7 screenshot verification complete!");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
