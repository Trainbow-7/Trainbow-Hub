import { chromium } from '@playwright/test';
import path from 'path';

const widths = [375, 768, 1024, 1280, 1536];

async function captureStage4() {
  const browser = await chromium.launch();
  for (const w of widths) {
    const context = await browser.newContext({
      viewport: { width: w, height: 900 },
      deviceScaleFactor: 1
    });
    const page = await context.newPage();
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    
    const filePath = path.resolve(process.cwd(), `stage4_screenshots/home-full-${w}px.png`);
    await page.screenshot({ path: filePath, fullPage: true });
    console.log(`Captured Stage 4 Home @ ${w}px -> ${filePath}`);

    await context.close();
  }
  await browser.close();
  console.log('Stage 4 Home verification screenshots complete!');
}

captureStage4();
