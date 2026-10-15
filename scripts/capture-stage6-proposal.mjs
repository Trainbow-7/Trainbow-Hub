import { chromium } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const VIEWPORTS = [
  { name: '375', width: 375, height: 812 },
  { name: '768', width: 768, height: 1024 },
  { name: '1280', width: 1280, height: 900 },
];

const OUT_DIR = path.resolve('stage6_proposal_screenshots');
if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

async function run() {
  const browser = await chromium.launch({ headless: true });
  
  for (const vp of VIEWPORTS) {
    const page = await browser.newPage({
      viewport: { width: vp.width, height: vp.height },
    });
    
    // Visit proposal review page for TR-644782
    const url = 'http://localhost:3000/request-tutor/TR-644782';
    console.log(`Navigating to ${url} at ${vp.width}px...`);
    await page.goto(url, { waitUntil: 'networkidle' });
    
    // Give time for animations / client fetch
    await page.waitForTimeout(2000);
    
    const screenshotPath = path.join(OUT_DIR, `proposal_${vp.name}.png`);
    await page.screenshot({ path: screenshotPath, fullPage: true });
    console.log(`Saved screenshot: ${screenshotPath}`);
    await page.close();
  }

  await browser.close();
  console.log('Stage 6 proposal review screenshots captured successfully!');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
