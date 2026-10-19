import { chromium } from 'playwright';
import path from 'path';

async function capture() {
  const artifactDir = 'C:\\Users\\USER\\.gemini\\antigravity-ide\\brain\\4163f298-ad49-4f55-ba28-6ccc0bcbe39d';
  const browser = await chromium.launch({ headless: true });

  try {
    console.log('Capturing Mobile (375x812)...');
    const mobilePage = await browser.newPage({ viewport: { width: 375, height: 812 } });
    await mobilePage.goto('http://localhost:3000/ai#workspace', { waitUntil: 'networkidle' });

    // Click the Fig. 2.26 thread to load it
    const convThread = await mobilePage.waitForSelector('[data-testid^="conv-item-"]', { timeout: 10000 });
    await convThread.click();

    await mobilePage.waitForSelector('text=Angle PQO = 35°', { timeout: 15000 });
    await mobilePage.waitForTimeout(2000);

    // Find the element containing "Angle PQO = 35°" and scroll to it
    await mobilePage.evaluate(() => {
      // Find the final answer block or the solution container
      const target = Array.from(document.querySelectorAll('*')).find(
        (el) => el.textContent && el.textContent.includes('Angle PQO = 35°') && !el.children.length
      );
      if (target) {
        target.scrollIntoView({ behavior: 'instant', block: 'center' });
      } else {
        // Fallback: scroll messages-stream container
        const stream = document.querySelector('[data-testid="messages-stream"]');
        if (stream) {
          stream.scrollTop = stream.scrollHeight;
          stream.scrollIntoView({ behavior: 'instant', block: 'center' });
        }
      }
    });
    await mobilePage.waitForTimeout(1000);

    const mobilePath = path.join(artifactDir, 'fig226_mobile_solution.png');
    await mobilePage.screenshot({ path: mobilePath });
    console.log('Captured mobile screenshot at:', mobilePath);

  } finally {
    await browser.close();
  }
}

capture().catch(err => {
  console.error('Error running capture:', err);
  process.exit(1);
});
