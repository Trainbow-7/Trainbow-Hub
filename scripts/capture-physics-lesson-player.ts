import { chromium } from "playwright";
import path from "path";

async function main() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await context.newPage();

  const url = "http://localhost:3000/courses/physics-ss1-measurement-motion-forces/lessons/fundamental-derived-quantities-si-units";
  console.log(`Navigating to ${url}...`);

  await page.goto(url, { waitUntil: "networkidle" });
  await page.waitForTimeout(2000);

  const artifactDir = "C:\\Users\\USER\\.gemini\\antigravity\\brain\\f9ac1c5b-572a-472b-a210-561b547c9f08";
  const outputPath = path.join(artifactDir, "physics_live_video_lesson_player.png");

  await page.screenshot({ path: outputPath, fullPage: false });
  console.log(`Screenshot saved to ${outputPath}`);

  // Also check if "Video Lesson in Production" text is anywhere on the page
  const content = await page.content();
  const hasInProduction = content.includes("Video Lesson in Production");
  console.log(`Contains 'Video Lesson in Production': ${hasInProduction}`);

  // Check if LessonVideoPlayer or YouTube thumbnail is visible
  const hasThumbnail = content.includes("8rZRYPoerPw") || content.includes("i.ytimg.com/vi/8rZRYPoerPw");
  console.log(`Contains video thumbnail or videoId: ${hasThumbnail}`);

  await browser.close();
}

main().catch(console.error);

