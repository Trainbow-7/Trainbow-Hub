import { chromium } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const widths = [375, 768, 1024, 1280, 1536];
const routes = [
  { name: 'home', path: '/' },
  { name: 'tutors', path: '/tutors' },
  { name: 'tutors-detail', path: '/tutors/adebayo-tutors' },
  { name: 'academy', path: '/academy' },
  { name: 'subjects', path: '/subjects' },
  { name: 'ai', path: '/ai' },
  { name: 'music', path: '/music' },
  { name: 'pricing', path: '/pricing' },
  { name: 'about', path: '/about' },
  { name: 'faq', path: '/faq' },
  { name: 'login', path: '/login' },
  { name: 'register', path: '/register' },
  { name: 'dashboard-student', path: '/dashboard' },
  { name: 'dashboard-parent', path: '/guardian' },
  { name: 'dashboard-tutor', path: '/become-a-tutor' },
  { name: 'dashboard-admin', path: '/admin' },
  { name: 'classroom', path: '/classroom' },
  { name: 'bookings', path: '/bookings' }
];

async function capture() {
  const browser = await chromium.launch();
  const outDir = path.resolve(process.cwd(), 'audit_screenshots');
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
      try {
        const url = `http://localhost:3000${r.path}`;
        await page.goto(url, { waitUntil: 'networkidle', timeout: 15000 });
        const filePath = path.join(outDir, `${r.name}-${w}px.png`);
        await page.screenshot({ path: filePath, fullPage: true });
        console.log(`Captured ${r.name} @ ${w}px -> ${filePath}`);
      } catch (err) {
        console.error(`Error on ${r.name} @ ${w}px:`, err.message);
      }
    }
    await context.close();
  }

  await browser.close();
  console.log('Finished capturing audit screenshots!');
}

capture();
