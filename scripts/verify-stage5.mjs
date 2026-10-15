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

const OUT_DIR = path.resolve(process.cwd(), "stage5_screenshots");

async function run() {
  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
  }

  const browser = await chromium.launch();

  for (const bp of BREAKPOINTS) {
    const page = await browser.newPage({
      viewport: { width: bp.width, height: bp.height },
    });

    console.log(`Capturing /tutors at ${bp.name}px...`);
    await page.goto("http://localhost:3000/tutors", { waitUntil: "networkidle" });
    await page.screenshot({
      path: path.join(OUT_DIR, `tutors_${bp.name}.png`),
      fullPage: true,
    });

    // Also capture tutor detail page
    console.log(`Capturing /tutors/adebayo-tutors at ${bp.name}px...`);
    await page.goto("http://localhost:3000/tutors/adebayo-tutors", { waitUntil: "networkidle" });
    await page.screenshot({
      path: path.join(OUT_DIR, `tutor_detail_${bp.name}.png`),
      fullPage: true,
    });

    // If mobile, capture open filter sheet
    if (bp.width <= 768) {
      console.log(`Capturing mobile filter sheet at ${bp.name}px...`);
      await page.goto("http://localhost:3000/tutors", { waitUntil: "networkidle" });
      const filterBtn = page.getByRole("button", { name: /filters/i });
      if (await filterBtn.isVisible()) {
        await filterBtn.click();
        await page.waitForTimeout(300);
        await page.screenshot({
          path: path.join(OUT_DIR, `tutors_filter_sheet_${bp.name}.png`),
          fullPage: false,
        });
      }
    }

    await page.close();
  }

  await browser.close();
  console.log("Stage 5 screenshot verification complete!");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
