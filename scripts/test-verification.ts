import { ALL_ASSESSMENT_ITEMS } from "../src/lib/assessment/banks";
import { ALL_PARAMETRIC_TEMPLATES } from "../src/lib/assessment/templates/math-templates";
import { verifyAssessmentItem, verifyParametricTemplate } from "../src/lib/assessment/verifier";

function main() {
  console.log("Total items in bank:", ALL_ASSESSMENT_ITEMS.length);
  let failCount = 0;
  for (const item of ALL_ASSESSMENT_ITEMS) {
    const res = verifyAssessmentItem(item);
    if (!res.isValid) {
      failCount++;
      console.error(`Item ${item.id} failed:`, res.errors);
    }
  }
  console.log(`Verification completed. Passes: ${ALL_ASSESSMENT_ITEMS.length - failCount}, Failures: ${failCount}`);

  console.log("\nTesting Parametric Templates (50 variants each):");
  for (const tpl of ALL_PARAMETRIC_TEMPLATES) {
    const tRes = verifyParametricTemplate(tpl, 50);
    console.log(`Template ${tpl.id} (${tpl.title}): ${tRes.variantsTested} variants, failures: ${tRes.failureCount}`);
    if (!tRes.isValid) {
      failCount += tRes.failureCount;
      console.error(`Template ${tpl.id} errors:`, tRes.errors);
    }
  }

  if (failCount > 0) {
    process.exit(1);
  }
}

main();
