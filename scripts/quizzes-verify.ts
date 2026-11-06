import { ALL_ASSESSMENT_ITEMS } from "../src/lib/assessment/banks";
import { ALL_PARAMETRIC_TEMPLATES } from "../src/lib/assessment/templates/math-templates";
import { verifyAssessmentItem, verifyParametricTemplate } from "../src/lib/assessment/verifier";

async function runVerify() {
  const startTime = Date.now();
  const args = process.argv.slice(2);
  const verbose = args.includes("--verbose");
  const failFast = args.includes("--exit-on-error");

  console.log("\n================================================================================");
  console.log("TRAINBOW HUB MATHEMATICS ASSESSMENT VERIFICATION SUITE");
  console.log("================================================================================\n");

  console.log(`Auditing ${ALL_ASSESSMENT_ITEMS.length} Static Assessment Items...`);

  let itemPassCount = 0;
  let itemFailCount = 0;
  const itemFailures: Array<{ id: string; error: string }> = [];

  for (const item of ALL_ASSESSMENT_ITEMS) {
    const res = verifyAssessmentItem(item);
    if (res.isValid) {
      itemPassCount++;
      if (verbose) {
        console.log(`  ✓ [PASS] ${item.id} (${item.courseSlug} / ${item.lessonId})`);
      }
    } else {
      itemFailCount++;
      itemFailures.push({ id: item.id, error: res.errors.join("; ") });
      console.error(`  ✗ [FAIL] ${item.id}: ${res.errors.join("; ")}`);
      if (failFast) {
        process.exit(1);
      }
    }
  }

  console.log(`\nAuditing ${ALL_PARAMETRIC_TEMPLATES.length} Parametric Question Templates (50 variants each)...`);

  let templatePassCount = 0;
  let templateFailCount = 0;
  let totalVariantsTested = 0;

  for (const template of ALL_PARAMETRIC_TEMPLATES) {
    const tRes = verifyParametricTemplate(template, 50);
    totalVariantsTested += tRes.variantsTested;
    if (tRes.isValid) {
      templatePassCount++;
      console.log(`  ✓ [PASS] ${template.id} (${template.title}): ${tRes.variantsTested}/${tRes.variantsTested} variants passed, 0 collisions`);
    } else {
      templateFailCount++;
      console.error(`  ✗ [FAIL] ${template.id}: ${tRes.errors.join("; ")}`);
      if (failFast) {
        process.exit(1);
      }
    }
  }

  const durationMs = Date.now() - startTime;

  console.log("\n================================================================================");
  console.log("VERIFICATION AUDIT RESULTS");
  console.log("================================================================================");
  console.log(`Total Static Items Audited:     ${ALL_ASSESSMENT_ITEMS.length}`);
  console.log(`Static Items Passed:            ${itemPassCount} (${((itemPassCount / ALL_ASSESSMENT_ITEMS.length) * 100).toFixed(1)}%)`);
  console.log(`Static Items Failed:            ${itemFailCount}`);
  console.log(`Parametric Templates Audited:   ${ALL_PARAMETRIC_TEMPLATES.length}`);
  console.log(`Parametric Variants Tested:     ${totalVariantsTested}`);
  console.log(`Parametric Templates Passed:    ${templatePassCount} / ${ALL_PARAMETRIC_TEMPLATES.length}`);
  console.log(`Parametric Templates Failed:    ${templateFailCount}`);
  console.log(`Execution Duration:             ${durationMs}ms`);
  console.log("================================================================================\n");

  if (itemFailCount > 0 || templateFailCount > 0) {
    console.error(`❌ Verification completed with failures.`);
    process.exit(1);
  } else {
    console.log(`✅ 100% OF ALL MATHEMATICS ASSESSMENT CONTENT SOFTWARE-VERIFIED.`);
    process.exit(0);
  }
}

runVerify().catch((err) => {
  console.error("Verification script error:", err);
  process.exit(1);
});
