import { ALL_COURSES } from "../src/lib/data/seed-data";
import { ALL_ASSESSMENT_ITEMS, getItemsByCourse, getItemsByLesson } from "../src/lib/assessment/banks";
import { ALL_PARAMETRIC_TEMPLATES } from "../src/lib/assessment/templates/math-templates";

export const MATH_COURSE_SLUGS = [
  "waec-ssce-mathematics-mastery",
  "jamb-utme-speed-mathematics",
  "jss3-basic-mathematics-bece-prep",
  "ss2-algebra-and-trigonometry-deep-dive",
  "primary6-quantitative-reasoning-common-entrance",
  "cambridge-igcse-extended-mathematics",
];

async function runBlueprint() {
  const args = process.argv.slice(2);
  const courseFilter = args.find((a, i) => args[i - 1] === "--course" || a.startsWith("--course="))
    ?.replace("--course=", "");
  const jsonMode = args.includes("--json");

  const mathCourses = ALL_COURSES.filter((c) =>
    MATH_COURSE_SLUGS.includes(c.slug) && (!courseFilter || c.slug === courseFilter)
  );

  if (mathCourses.length === 0) {
    console.error(`No mathematics course found matching filter: ${courseFilter || "all"}`);
    process.exit(1);
  }

  const blueprintData = mathCourses.map((course) => {
    const courseItems = getItemsByCourse(course.slug);
    const modules = (course.syllabus || []).map((mod) => {
      const lessons = (mod.lessons || []).map((lesson) => {
        const items = getItemsByLesson(course.slug, lesson.id);
        const thinkingCounts = {
          understanding: items.filter((i) => i.thinkingLevel === "understanding").length,
          application: items.filter((i) => i.thinkingLevel === "application").length,
          error_analysis: items.filter((i) => i.thinkingLevel === "error_analysis").length,
          challenge: items.filter((i) => i.thinkingLevel === "challenge" || i.thinkingLevel === "challenge_transfer").length,
        };

        const typeCounts = {
          single_choice: items.filter((i) => i.questionType === "single_choice" || (i as any).type === "single_choice").length,
          multi_select: items.filter((i) => i.questionType === "multi_select" || (i as any).type === "multi_select").length,
          numeric_entry: items.filter((i) => i.questionType === "numeric_entry" || (i as any).type === "numeric_entry").length,
          short_symbolic: items.filter((i) => i.questionType === "symbolic_entry" || (i as any).type === "short_symbolic").length,
          step_ordering: items.filter((i) => i.questionType === "ordering" || (i as any).type === "step_ordering").length,
          structured_theory: items.filter((i) => i.questionType === "structured_theory" || (i as any).type === "structured_theory").length,
        };

        return {
          lessonId: lesson.id,
          title: lesson.title,
          durationMinutes: lesson.durationMinutes,
          isFreePreview: lesson.isFreePreview,
          totalBankItems: items.length,
          targetMet: items.length >= 14,
          thinkingCounts,
          typeCounts,
        };
      });

      return {
        moduleId: mod.id,
        moduleTitle: mod.title,
        lessonCount: lessons.length,
        lessons,
      };
    });

    const courseTemplates = ALL_PARAMETRIC_TEMPLATES.filter((t) => t.courseSlug === course.slug);

    return {
      courseSlug: course.slug,
      courseTitle: course.title,
      totalModules: modules.length,
      totalLessons: modules.reduce((acc, m) => acc + m.lessonCount, 0),
      totalBankItems: courseItems.length,
      parametricTemplates: courseTemplates.length,
      modules,
    };
  });

  if (jsonMode) {
    console.log(JSON.stringify(blueprintData, null, 2));
    return;
  }

  console.log("\n================================================================================");
  console.log("TRAINBOW HUB MATHEMATICS ASSESSMENT BLUEPRINT & CURRICULUM AUDIT");
  console.log("================================================================================\n");

  let grandTotalLessons = 0;
  let grandTotalItems = 0;

  for (const c of blueprintData) {
    console.log(`\n📚 COURSE: ${c.courseTitle} (${c.courseSlug})`);
    console.log(`   Modules: ${c.totalModules} | Lessons: ${c.totalLessons} | Items Banked: ${c.totalBankItems} | Templates: ${c.parametricTemplates}`);
    console.log("   -----------------------------------------------------------------------------");

    for (const m of c.modules) {
      console.log(`   📁 Module: ${m.moduleTitle} (${m.moduleId}) [${m.lessonCount} lessons]`);
      for (const l of m.lessons) {
        const u = l.thinkingCounts.understanding;
        const a = l.thinkingCounts.application;
        const e = l.thinkingCounts.error_analysis;
        const ch = l.thinkingCounts.challenge;
        const total = l.totalBankItems || 1;
        const uPct = Math.round((u / total) * 100);
        const aPct = Math.round((a / total) * 100);
        const ePct = Math.round((e / total) * 100);
        const chPct = Math.round((ch / total) * 100);

        console.log(`      • [${l.lessonId}] "${l.title}"`);
        console.log(`        Items: ${l.totalBankItems} (≥14 Target: ${l.targetMet ? "✓ PASS" : "✗ FAIL"})`);
        console.log(`        Distribution: Understanding: ${u} (${uPct}%) | Application: ${a} (${aPct}%) | Error Analysis: ${e} (${ePct}%) | Challenge: ${ch} (${chPct}%)`);
      }
    }

    grandTotalLessons += c.totalLessons;
    grandTotalItems += c.totalBankItems;
  }

  console.log("\n================================================================================");
  console.log(`SUMMARY: 6 Courses | ${grandTotalLessons} Lessons | ${grandTotalItems} Verified Assessment Items Banked`);
  console.log("================================================================================\n");
}

runBlueprint().catch((err) => {
  console.error("Blueprint generation failed:", err);
  process.exit(1);
});
