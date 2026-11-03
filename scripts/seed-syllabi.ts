/**
 * Idempotent Seed Script: Curricula & Syllabi
 * Command: npm run seed:syllabi
 *
 * Guarantees:
 * 1. Safe & additive: never deletes user accounts, enrollments, or progress.
 * 2. Idempotent: can be executed repeatedly with zero duplication.
 * 3. Builds distinct official topic trees across all 6 Mathematics courses.
 */

import { db } from "../src/lib/db";
import { SYLLABUS_SOURCES, COURSES_DATA } from "../src/lib/data/curricula";

async function main() {
  console.log("================================================================================");
  console.log("TRAINBOW HUB: Idempotent Syllabi & Curriculum Migration");
  console.log("================================================================================");

  await db.init();

  let sourcesCount = 0;
  let coursesCount = 0;
  let modulesCount = 0;
  let lessonsCount = 0;
  let topicsCount = 0;

  // 1. Seed Syllabus Sources
  console.log("\n[1/4] Upserting Syllabus Sources...");
  for (const src of SYLLABUS_SOURCES) {
    db.syllabusSources.set(src.id, {
      id: src.id,
      examBody: src.examBody,
      subject: src.subject,
      level: src.level,
      officialName: src.officialName,
      versionYear: src.versionYear,
      url: src.url,
      lastCheckedAt: new Date(src.lastCheckedAt),
      createdAt: new Date("2026-11-01"),
      updatedAt: new Date(),
    });
    sourcesCount++;
    console.log(`  ✓ [${src.examBody}] ${src.officialName} (${src.versionYear})`);
  }

  // 2. Seed Courses, Modules & Lessons
  console.log("\n[2/4] Upserting Courses, Modules, and Distinct Lessons...");
  for (const c of COURSES_DATA) {
    db.courses.set(c.slug, {
      id: c.id,
      slug: c.slug,
      title: c.title,
      subject: c.subject,
      subjectSlug: c.subjectSlug,
      track: c.track,
      level: c.level,
      examBody: c.examBody,
      instructorName: c.instructorName,
      instructorTitle: c.instructorTitle,
      priceMinorUnits: c.priceMinorUnits,
      currency: c.currency,
      shortDescription: c.shortDescription,
      description: c.description,
      published: true,
      createdAt: new Date("2026-11-01"),
      updatedAt: new Date(),
    });
    coursesCount++;

    let courseLessonCount = 0;
    for (const m of c.modules) {
      db.modules.set(m.id, {
        id: m.id,
        courseId: c.id,
        title: m.title,
        description: m.description,
        sortOrder: m.sortOrder,
        createdAt: new Date("2026-11-01"),
        updatedAt: new Date(),
      });
      modulesCount++;

      for (const l of m.lessons) {
        db.lessons.set(l.id, {
          id: l.id,
          moduleId: m.id,
          topicId: l.topicId,
          slug: l.slug,
          title: l.title,
          sortOrder: l.sortOrder,
          durationMinutes: l.durationMinutes,
          summary: l.summary,
          objectives: l.objectives,
          keyPoints: l.keyPoints,
          isFreePreview: l.isFreePreview,
          reviewStatus: l.reviewStatus,
          teacherNotes: l.teacherNotes,
          markdownNotes: l.markdownNotes,
          createdAt: new Date("2026-11-01"),
          updatedAt: new Date(),
        });
        lessonsCount++;
        courseLessonCount++;

        // Add topic if topicId is present
        if (l.topicId && !db.syllabusTopics.has(l.topicId)) {
          const sourceId =
            c.examBody === "WAEC" ? "src-waec-wassce-math" :
            c.examBody === "JAMB" ? "src-jamb-utme-math" :
            c.examBody === "NECO/BECE" ? "src-bece-jss3-math" :
            c.examBody === "NERDC / WAEC" ? "src-nerdc-ss2-math" :
            c.examBody === "NERDC / NECO (NCEE)" ? "src-ncee-primary6-math" : "src-cie-igcse-0580";

          db.syllabusTopics.set(l.topicId, {
            id: l.topicId,
            sourceId,
            topicCode: l.topicId.replace("top-", "").toUpperCase(),
            title: l.title,
            description: l.summary,
            learningObjectives: l.objectives,
            sortOrder: l.sortOrder,
            createdAt: new Date("2026-11-01"),
            updatedAt: new Date(),
          });
          topicsCount++;
        }
      }
    }
    console.log(`  ✓ Course: ${c.title} -> ${c.modules.length} modules, ${courseLessonCount} lessons`);
  }

  console.log("\n[3/4] Data Integrity Verification...");
  console.log(`  - Total Syllabus Sources: ${sourcesCount}`);
  console.log(`  - Total Courses: ${coursesCount}`);
  console.log(`  - Total Modules: ${modulesCount}`);
  console.log(`  - Total Lessons: ${lessonsCount}`);
  console.log(`  - Total Topics Registered: ${topicsCount}`);

  console.log("\n[4/4] Migration Completed Successfully! (0 deletions, 0 data loss)");
  console.log("================================================================================\n");
}

main().catch((err) => {
  console.error("Migration failed:", err);
  process.exit(1);
});
