import { listAllPhysicsLessons } from "../src/lib/data/physics-curriculum";

const allLessons = listAllPhysicsLessons();
console.log(`Checking ${allLessons.length} physics lessons in curriculum registry:`);

let withVideo = 0;
let withoutVideo = 0;

for (const { courseSlug, lesson } of allLessons) {
  if (lesson.videoId) {
    withVideo++;
    console.log(`✓ [${withVideo}/${allLessons.length}] ${courseSlug} / ${lesson.slug} -> videoId: ${lesson.videoId}`);
  } else {
    withoutVideo++;
    console.log(`✗ NO VIDEO: ${courseSlug} / ${lesson.slug}`);
  }
}

console.log(`\nResult: ${withVideo} with videoId, ${withoutVideo} without videoId.`);
if (withoutVideo > 0) {
  process.exit(1);
}
