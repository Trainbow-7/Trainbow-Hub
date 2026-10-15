import { chromium } from '@playwright/test';
import path from 'path';

const widths = [375, 768, 1024, 1280, 1536];

async function captureStage3() {
  const browser = await chromium.launch();
  for (const w of widths) {
    const context = await browser.newContext({
      viewport: { width: w, height: 800 },
      deviceScaleFactor: 1
    });
    const page = await context.newPage();
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    
    // Screenshot header area
    const headerPath = path.resolve(process.cwd(), `stage3_screenshots/header-${w}px.png`);
    await page.screenshot({ path: headerPath, clip: { x: 0, y: 0, width: w, height: 160 } });
    console.log(`Captured header @ ${w}px -> ${headerPath}`);

    if (w < 1024) {
      // open mobile menu and take screenshot
      await page.getByRole("button", { name: "Open navigation menu" }).click();
      await page.waitForTimeout(300);
      const menuPath = path.resolve(process.cwd(), `stage3_screenshots/mobile-sheet-${w}px.png`);
      await page.screenshot({ path: menuPath });
      console.log(`Captured mobile sheet @ ${w}px -> ${menuPath}`);
      await page.getByRole("button", { name: "Close menu" }).click();
    } else {
      // open utility popover
      await page.getByRole("button", { name: "Settings, language, and regional preferences" }).click();
      await page.waitForTimeout(300);
      const popoverPath = path.resolve(process.cwd(), `stage3_screenshots/utility-popover-${w}px.png`);
      await page.screenshot({ path: popoverPath, clip: { x: w - 380, y: 0, width: 380, height: 420 } });
      console.log(`Captured utility popover @ ${w}px -> ${popoverPath}`);
    }
    await context.close();
  }
  await browser.close();
  console.log('Stage 3 verification screenshots complete!');
}

captureStage3();
