import { chromium } from "playwright";
import path from "path";

async function main() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await context.newPage();

  const testUrls = [
    {
      url: "http://localhost:3000/courses/physics-ss2-energy-heat-waves-light/lessons/thermal-expansion-linear-superficial-cubic",
      file: "physics_ss2_video_player.png",
      titleSnippet: "THERMAL EXPANSION",
    },
    {
      url: "http://localhost:3000/courses/waec-neco-ssce-physics-mastery/lessons/projectile-motion-time-of-flight-range-calculations",
      file: "physics_waec_video_player.png",
      titleSnippet: "PROJECTILE MOTION",
    },
  ];

  const artifactDir = "C:\\Users\\USER\\.gemini\antigravity\\brain\\f9ac1c5b-572a-472b-a210-561b547c9f08";

  for (const item of testUrls) {
    console.log(`Navigating to ${item.url}...`);
    await page.goto(item.url, { waitUntil: "networkidle" });
    await page.waitForTimeout(1500);

    const content = await page.content();
    const hasInProduction = content.includes("Video Lesson in Production");
    const hasTitle = content.includes(item.titleSnippet);

    console.log(`URL: ${item.url}`);
    console.log(`  - Has 'Video Lesson in Production': ${hasInProduction}`);
    console.log(`  - Has Video Title '${item.titleSnippet}': ${hasTitle}`);

    const outputPath = path.join(artifactDir, item.file);
    await page.screenshot({ path: outputPath, fullPage: false });
    console.log(`  - Saved screenshot to ${outputPath}`);
  }

  await browser.close();
}

main().catch(console.error);

