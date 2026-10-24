import { chromium } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const VIEWPORTS = [
  { name: '390', width: 390, height: 844 },
  { name: '768', width: 768, height: 1024 },
  { name: '1024', width: 1024, height: 800 },
  { name: '1440', width: 1440, height: 900 },
];

const OUT_DIR = path.resolve('hero_screenshots');
if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

async function run() {
  const browser = await chromium.launch({ headless: true });
  
  for (const vp of VIEWPORTS) {
    const page = await browser.newPage({
      viewport: { width: vp.width, height: vp.height },
    });
    
    const url = 'http://localhost:3000/';
    console.log(`Navigating to ${url} at ${vp.width}px...`);
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(1500);
    
    const screenshotPath = path.join(OUT_DIR, `hero_${vp.name}px.png`);
    await page.screenshot({ path: screenshotPath, fullPage: false });
    console.log(`Saved screenshot: ${screenshotPath}`);
    await page.close();
  }

  await browser.close();
  console.log('Hero screenshots at 390px, 768px, and 1440px captured successfully!');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
