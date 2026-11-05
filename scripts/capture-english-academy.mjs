import { chromium } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const widths = [375, 1280];
const routes = [
  { name: 'english-academy-subject', path: '/academy/english-language' },
  { name: 'english-course-detail', path: '/courses/waec-neco-ssce-english-mastery' },
  { name: 'english-diagnostic', path: '/courses/waec-neco-ssce-english-mastery/diagnostic' },
  { name: 'english-lesson-view', path: '/courses/waec-neco-ssce-english-mastery/lessons/waec-continuous-writing-marking-scheme' },
  { name: 'admin-learner-needs', path: '/admin/analytics/learner-needs' },
];

async function capture() {
  const browser = await chromium.launch();
  const outDir = path.resolve(process.cwd(), 'screenshots');
  const artifactDir = 'C:\\Users\\USER\\.gemini\\antigravity\\brain\\f9ac1c5b-572a-472b-a210-561b547c9f08\\screenshots';

  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }
  if (!fs.existsSync(artifactDir)) {
    fs.mkdirSync(artifactDir, { recursive: true });
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
        await page.goto(url, { waitUntil: 'networkidle', timeout: 20000 });
        const fileName = `${r.name}_${w}px.png`;
        const filePath = path.join(outDir, fileName);
        await page.screenshot({ path: filePath, fullPage: false });

        // Copy to artifact directory
        const artifactPath = path.join(artifactDir, fileName);
        fs.copyFileSync(filePath, artifactPath);
        console.log(`Saved screenshot: ${filePath} & ${artifactPath}`);
      } catch (err) {
        console.error(`Failed ${r.name} at ${w}px:`, err.message);
      }
    }
    await context.close();
  }

  await browser.close();
  console.log('English Academy screenshot capture complete.');
}

capture().catch(console.error);

