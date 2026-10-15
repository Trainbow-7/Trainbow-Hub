import { chromium } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const widths = [375, 768, 1280];
const routes = [
  { name: 'landing', path: '/' },
  { name: 'request-tutor', path: '/request-tutor' },
  { name: 'pricing', path: '/pricing' },
];

async function capture() {
  const browser = await chromium.launch();
  const outDir = path.resolve(process.cwd(), 'stage3_screenshots');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  for (const w of widths) {
    const context = await browser.newContext({
      viewport: { width: w, height: 900 },
      deviceScaleFactor: 1
    });
    const page = await context.newPage();

    for (const r of routes) {
      const url = `http://localhost:3000${r.path}`;
      try {
        console.log(`Capturing ${r.name} at ${w}px...`);
        await page.goto(url, { waitUntil: 'networkidle', timeout: 15000 });
        const filePath = path.join(outDir, `${r.name}-${w}px.png`);
        await page.screenshot({ path: filePath, fullPage: false });
        console.log(`Saved screenshot: ${filePath}`);
      } catch (err) {
        console.error(`Failed ${r.name} at ${w}px:`, err.message);
      }
    }
    await context.close();
  }

  await browser.close();
  console.log('Stage 3 screenshots complete.');
}

capture().catch(console.error);
