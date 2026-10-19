import { chromium } from 'playwright';
import path from 'path';

async function capture() {
  const artifactDir = 'C:\\Users\\USER\\.gemini\\antigravity-ide\\brain\\4163f298-ad49-4f55-ba28-6ccc0bcbe39d';
  const browser = await chromium.launch({ headless: true });

  try {
    const question = 'In Fig. 2.26, P, Q, R, S are points on a circle centre O. QP is produced to X. If angle XPS = 77 degrees and angle PSO = 68 degrees, find angle PQO';

    // Desktop
    console.log('Capturing Desktop (1280x900)...');
    const desktopPage = await browser.newPage({ viewport: { width: 1280, height: 900 } });
    await desktopPage.goto('http://localhost:3000/ai', { waitUntil: 'networkidle' });

    // Ensure New Problem is clicked if needed
    const newProbBtn = await desktopPage.$('[data-testid="new-conversation-btn"]');
    if (newProbBtn) await newProbBtn.click();

    await desktopPage.waitForFunction(() => {
      const el = document.querySelector('[data-testid="ai-prompt-input"]');
      return el && !el.disabled;
    });

    await desktopPage.fill('[data-testid="ai-prompt-input"]', question);
    await desktopPage.click('[data-testid="ai-submit-btn"]');

    await desktopPage.waitForSelector('text=Angle PQO = 35°', { timeout: 30000 });
    await desktopPage.waitForTimeout(2000);

    // Scroll stream so that the verified card, steps and final answer are clearly framed
    await desktopPage.evaluate(() => {
      const stream = document.querySelector('[data-testid="messages-stream"]');
      if (stream) stream.scrollTop = stream.scrollHeight;
      window.scrollTo(0, 320);
    });
    await desktopPage.waitForTimeout(1000);

    const desktopPath = path.join(artifactDir, 'fig226_desktop_solution.png');
    await desktopPage.screenshot({ path: desktopPath });
    console.log('Captured desktop screenshot:', desktopPath);

    // Mobile
    console.log('Capturing Mobile (375x812)...');
    const mobileContext = await browser.newContext({ viewport: { width: 375, height: 812 } });
    const mobilePage = await mobileContext.newPage();
    await mobilePage.goto('http://localhost:3000/ai', { waitUntil: 'networkidle' });

    await mobilePage.waitForFunction(() => {
      const el = document.querySelector('[data-testid="ai-prompt-input"]');
      return el && !el.disabled;
    });

    await mobilePage.fill('[data-testid="ai-prompt-input"]', question);
    await mobilePage.click('[data-testid="ai-submit-btn"]');

    await mobilePage.waitForSelector('text=Angle PQO = 35°', { timeout: 30000 });
    await mobilePage.waitForTimeout(2000);

    // Scroll down directly to the final answer on mobile
    await mobilePage.evaluate(() => {
      const stream = document.querySelector('[data-testid="messages-stream"]');
      if (stream) stream.scrollTop = stream.scrollHeight;
      const el = Array.from(document.querySelectorAll('*')).find(e => e.textContent && e.textContent.includes('Angle PQO = 35°'));
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
    });
    await mobilePage.waitForTimeout(1000);

    const mobilePath = path.join(artifactDir, 'fig226_mobile_solution.png');
    await mobilePage.screenshot({ path: mobilePath });
    console.log('Captured mobile screenshot:', mobilePath);

  } finally {
    await browser.close();
  }
}

capture().catch(err => {
  console.error('Error running capture:', err);
  process.exit(1);
});
