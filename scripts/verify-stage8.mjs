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

const OUT_DIR = path.resolve(process.cwd(), "stage8_screenshots");

async function run() {
  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
  }

  const browser = await chromium.launch();

  for (const bp of BREAKPOINTS) {
    const page = await browser.newPage({
      viewport: { width: bp.width, height: bp.height },
    });

    console.log(`Capturing /bookings at ${bp.name}px...`);
    await page.goto("http://localhost:3000/bookings", { waitUntil: "networkidle" });
    await page.screenshot({
      path: path.join(OUT_DIR, `bookings_${bp.name}.png`),
      fullPage: true,
    });

    // Capture tutor booking modal flow
    console.log(`Capturing tutor booking modal at ${bp.name}px...`);
    await page.goto("http://localhost:3000/tutors/adebayo-tutors", { waitUntil: "networkidle" });
    const bookModalBtn = page.getByTestId("open-booking-modal-btn");
    if (await bookModalBtn.isVisible()) {
      await bookModalBtn.click();
      await page.waitForTimeout(300);
      await page.screenshot({
        path: path.join(OUT_DIR, `booking_modal_slot_${bp.name}.png`),
        fullPage: false,
      });

      // Click reserve slot hold
      const reserveBtn = page.getByTestId("reserve-slot-hold-btn");
      if (await reserveBtn.isVisible()) {
        await reserveBtn.click();
        await page.waitForTimeout(600);
        await page.screenshot({
          path: path.join(OUT_DIR, `booking_modal_hold_${bp.name}.png`),
          fullPage: false,
        });
      }
    }

    await page.close();
  }

  await browser.close();
  console.log("Stage 8 screenshot verification complete!");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
