import { AssessmentItem, QuestionOption, ThinkingLevel, QuestionType } from "../../src/lib/assessment/types";
import { createAssessmentItem } from "../../src/lib/assessment/builder";
import { WAEC_MATH_BANK as EXISTING_WAEC_BANK } from "../../src/lib/assessment/banks/waec-math-bank";
import { makeChoices, ItemDef, buildItem } from "./helper";

const course = "waec-ssce-mathematics-mastery";

export function getWaecBank(): AssessmentItem[] {
  const items: AssessmentItem[] = [];

  // 1. LESSON 1: Preserve existing 14 authentic Fractions & Decimals items
  for (const item of EXISTING_WAEC_BANK) {
    if (item.lessonId === "l1") {
      items.push(item);
    }
  }

  // Helper for generating standard lesson items
  function addLesson(
    modId: string,
    lesId: string,
    topicId: string,
    topicName: string,
    obj: string,
    rawQuestions: Array<{
      prompt: string;
      level: ThinkingLevel;
      type: QuestionType;
      correct: any;
      d1?: { text: string; misc: string; feed: string };
      d2?: { text: string; misc: string; feed: string };
      d3?: { text: string; misc: string; feed: string };
      explanation: string;
      unit?: string;
      steps?: string[];
    }>
  ) {
    rawQuestions.forEach((q, idx) => {
      let options: QuestionOption[] | undefined;
      if (q.type === "single_choice" || q.type === "true_false_justification") {
        options = makeChoices(
          String(q.correct),
          q.d1?.text || "None of the above", q.d1?.misc || "MISC-CALC-SLIP", q.d1?.feed || "Check intermediate steps.",
          q.d2?.text || "Undefined value", q.d2?.misc || "MISC-FORMULA-SLIP", q.d2?.feed || "Check standard formula.",
          q.d3?.text || "Zero", q.d3?.misc || "MISC-ARITH-SLIP", q.d3?.feed || "Review arithmetic."
        );
      } else if (q.type === "ordering" && q.steps) {
        options = q.steps.map((st, i) => ({ id: String.fromCharCode(65 + i), text: st }));
      }

      items.push(
        createAssessmentItem({
          id: `q_${lesId}_${idx + 1}`,
          courseSlug: course,
          moduleId: modId,
          lessonId: lesId,
          topicId,
          objectiveIndex: 0,
          objective: obj,
          thinkingLevel: q.level,
          questionType: q.type,
          prompt: q.prompt,
          options,
          correctAnswer: q.type === "ordering" ? { steps: q.steps?.map((_, i) => String.fromCharCode(65 + i)) } : q.correct,
          explanation: q.explanation,
        })
      );
    });
  }

  // =========================================================================
  // LESSON 2: Percentages & Percentage Change (l2)
  // =========================================================================
  addLesson("waec-m1", "l2", "top-waec-num-02", "Percentages", "Calculate percentage increase, decrease, and error", [
    {
      level: "understanding", type: "single_choice",
      prompt: "What does a $15\\%$ discount on an item costing \₦$8,000$ mean?",
      correct: "The price is reduced by \₦$1,200$, so the buyer pays \₦$6,800$.",
      d1: { text: "The price is reduced by \₦$150$, so the buyer pays \₦$7,850$.", misc: "MIS-PERCENT-BASE", feed: "15% means 15 per hundred, not a flat ₦150." },
      d2: { text: "The price increases by \₦$1,200$, so the buyer pays \₦$9,200$.", misc: "MIS-DISCOUNT-ADD", feed: "A discount decreases the price, not increases it." },
      d3: { text: "The buyer pays \₦$1,200$ total for the item.", misc: "MIS-PERCENT-REMAINDER", feed: "The discount is the reduction, not the final selling price." },
      explanation: "15/100 × ₦8,000 = ₦1,200 discount. Selling price = ₦8,000 - ₦1,200 = ₦6,800.",
    },
    {
      level: "understanding", type: "single_choice",
      prompt: "Express $\\frac{7}{25}$ as a percentage.",
      correct: "$28\\%$",
      d1: { text: "$14\\%$", misc: "MIS-PERCENT-MULT", feed: "Multiply by 100%: (7/25) × 100% = 28%." },
      d2: { text: "$35\\%$", misc: "MIS-ARITH-SLIP", feed: "7 × 4 = 28, not 35." },
      d3: { text: "$7\\%$", misc: "MIS-DENOM-DROP", feed: "The denominator 25 scales to 100 by factor of 4." },
      explanation: "(7/25) × 100% = 7 × 4% = 28%.",
    },
    {
      level: "understanding", type: "single_choice",
      prompt: "Which formula correctly gives the percentage error in a measurement?",
      correct: "$\\frac{|\\text{Measured} - \\text{Actual}|}{\\text{Actual}} \\times 100\\%$",
      d1: { text: "$\\frac{|\\text{Measured} - \\text{Actual}|}{\\text{Measured}} \\times 100\\%$", misc: "MIS-PERCENT-ERROR-DENOM", feed: "Percentage error must divide by the actual value, not the measured value." },
      d2: { text: "$(|\\text{Measured} - \\text{Actual}|) \\times 100\\%$", misc: "MIS-DENOM-DROP", feed: "Error must be normalized relative to the true value." },
      d3: { text: "$\\frac{\\text{Actual}}{\\text{Measured}} \\times 100\\%$", misc: "MIS-INVERTED-RATIO", feed: "This is the ratio of true to measured, not error." },
      explanation: "Percentage error = (|Measured - Actual| / Actual) × 100%.",
    },
    {
      level: "understanding", type: "true_false_justification",
      prompt: "True or False: If a quantity increases by $20\\%$ and then decreases by $20\\%$, it returns to its original value.",
      correct: "False: The $20\\%$ decrease applies to a larger base, resulting in a net decrease of $4\\%$.",
      d1: { text: "True: Adding $20\\%$ and subtracting $20\\%$ cancel each other out exactly.", misc: "MIS-PERCENT-SYMMETRY", feed: "Percentages represent proportional changes, not fixed amounts." },
      d2: { text: "False: The final value is $4\\%$ greater than the original value.", misc: "MIS-SIGN-SLIP", feed: "1.20 × 0.80 = 0.96, which is 4% less." },
      d3: { text: "True: The order of percentage changes is always commutative.", misc: "MIS-COMMUTATIVE-MISCONCEPTION", feed: "Neither order returns to the original." },
      explanation: "100 × 1.20 = 120. 120 × 0.80 = 96, a 4% net reduction.",
    },
    {
      level: "application", type: "single_choice",
      prompt: "The population of a community increased from $40,000$ to $46,000$. Calculate the percentage increase.",
      correct: "$15\\%$",
      d1: { text: "$13.04\\%$", misc: "MIS-PERCENT-NEW-BASE", feed: "Divide by the original population (40,000), not the new population (46,000)." },
      d2: { text: "$6\\%$", misc: "MIS-DIFF-ONLY", feed: "6,000 is the absolute increase; divide by 40,000 and multiply by 100%." },
      d3: { text: "$12\\%$", misc: "MIS-ARITH-SLIP", feed: "6,000 / 40,000 = 6 / 40 = 15%." },
      explanation: "Increase = 46,000 - 40,000 = 6,000. % increase = (6,000 / 40,000) × 100% = 15%.",
    },
    {
      level: "application", type: "single_choice",
      prompt: "A student measured a length as $1.25\\text{ m}$, whereas the actual length was $1.20\\text{ m}$. Calculate the percentage error to 2 decimal places.",
      correct: "$4.17\\%$",
      d1: { text: "$4.00\\%$", misc: "MIS-PERCENT-ERROR-DENOM", feed: "Divided by measured value 1.25 instead of actual value 1.20." },
      d2: { text: "$5.00\\%$", misc: "MIS-ARITH-SLIP", feed: "0.05 / 1.20 = 0.04167 = 4.17%." },
      d3: { text: "$0.04\\%$", misc: "MIS-PERCENT-FACTOR-100", feed: "Forgot to multiply by 100%." },
      explanation: "|1.25 - 1.20| / 1.20 × 100% = 0.05 / 1.20 × 100% ≈ 4.17%.",
    },
    {
      level: "application", type: "single_choice",
      prompt: "After a price reduction of $12\\%$, a solar lamp sells for \₦$22,000$. What was its original price before the discount?",
      correct: "\₦$25,000$",
      d1: { text: "\₦$24,640$", misc: "MIS-PERCENT-REVERSE", feed: "Cannot simply add 12% of 22,000. ₦22,000 is 88% of original." },
      d2: { text: "\₦$26,400$", misc: "MIS-PERCENT-MULT", feed: "Divide by 0.88: 22,000 / 0.88 = ₦25,000." },
      d3: { text: "\₦$24,000$", misc: "MIS-ARITH-SLIP", feed: "25,000 × 0.88 = 22,000." },
      explanation: "Original price = 22,000 / (1 - 0.12) = 22,000 / 0.88 = ₦25,000.",
    },
    {
      level: "application", type: "numeric_entry",
      prompt: "A shopkeeper bought an appliance for \₦$50,000$ and sold it for \₦$62,500$. Calculate the percentage profit (numeric value only in %).",
      correct: 25,
      explanation: "Profit = 62,500 - 50,000 = ₦12,500. % profit = (12,500 / 50,000) × 100% = 25%.",
    },
    {
      level: "application", type: "ordering",
      prompt: "Arrange the correct steps to calculate percentage error in a measurement:",
      correct: "A",
      steps: [
        "Record the measured value and the true (actual) value.",
        "Calculate the absolute error: |Measured - Actual|.",
        "Divide the absolute error by the actual value.",
        "Multiply the quotient by 100% to express as a percentage.",
      ],
      explanation: "Standard percentage error sequence.",
    },
    {
      level: "application", type: "symbolic_entry",
      prompt: "If a quantity $P$ is increased by $r\\%$, write an expression for the new quantity in terms of $P$ and $r$.",
      correct: "P*(1 + r/100)",
      explanation: "P + (r/100)*P = P*(1 + r/100).",
    },
    {
      level: "error_analysis", type: "single_choice",
      prompt: "A trader priced a bag at \₦$30,000$, increased it by $10\\%$, then gave a $10\\%$ discount on the new price. A student claims the price is back to \₦$30,000$. What is the error?",
      correct: "The $10\\%$ discount applies to \₦$33,000$ (giving \₦$3,300$ off), making the final price \₦$29,700$.",
      d1: { text: "The discount should have been added instead of subtracted.", misc: "MIS-ADD-INSTEAD-SUB", feed: "Discounts reduce price." },
      d2: { text: "The final price is higher because merchants always profit.", misc: "MIS-ALWAYS-PROFIT", feed: "Sequential percentage on raised base gives a net drop." },
      d3: { text: "The $10\\%$ increase was computed incorrectly.", misc: "MIS-ARITH-SLIP", feed: "10% of 30,000 is correctly 3,000." },
      explanation: "10% of ₦33,000 is ₦3,300, leading to ₦29,700.",
    },
    {
      level: "error_analysis", type: "single_choice",
      prompt: "A student calculates percentage error for a length measured as $8\\text{ cm}$ with true length $10\\text{ cm}$ as $\\frac{10 - 8}{8} \\times 100\\% = 25\\%$. What is the mistake?",
      correct: "Divided by the measured value ($8\\text{ cm}$) instead of the true value ($10\\text{ cm}$). Correct error is $20\\%$.",
      d1: { text: "The numerator should be $10 + 8 = 18$.", misc: "MIS-SUM-INSTEAD-DIFF", feed: "Error is the difference, not the sum." },
      d2: { text: "The student should have squared the difference.", misc: "MIS-SQUARE-CONFUSION", feed: "No squaring in percentage error." },
      d3: { text: "There is no error; 25% is correct.", misc: "MIS-NO-ERROR-CLAIM", feed: "The denominator must be the actual value 10." },
      explanation: "|8 - 10| / 10 × 100% = 2/10 × 100% = 20%.",
    },
    {
      level: "challenge_transfer", type: "single_choice",
      prompt: "A company's production grew by $20\\%$ in year 1, but dropped by $15\\%$ in year 2. If initial production was $150,000$ units, what was the production at the end of year 2?",
      correct: "$153,000\\text{ units}$",
      d1: { text: "$157,500\\text{ units}$", misc: "MIS-PERCENT-NET-SUM", feed: "Cannot simply do 20% - 15% = 5% of 150,000." },
      d2: { text: "$150,000\\text{ units}$", misc: "MIS-ROUNDING-GUESS", feed: "150,000 × 1.20 × 0.85 = 153,000." },
      d3: { text: "$142,500\\text{ units}$", misc: "MIS-SIGN-SLIP", feed: "1.20 × 0.85 = 1.02." },
      explanation: "150,000 × 1.20 × 0.85 = 153,000 units.",
    },
    {
      level: "challenge_transfer", type: "single_choice",
      prompt: "The sides of a rectangle are measured as $10\\text{ cm}$ and $20\\text{ cm}$, each with a possible error of $+5\\%$. What is the maximum possible percentage error in the calculated area?",
      correct: "$10.25\\%$",
      d1: { text: "$10.00\\%$", misc: "MIS-LINEAR-APPROX", feed: "Adding 5% + 5% ignores the cross-product term (1.05 × 1.05 = 1.1025)." },
      d2: { text: "$5.00\\%$", misc: "MIS-SINGLE-ERROR", feed: "Both dimensions carry error, so area error is compounded." },
      d3: { text: "$25.00\\%$", misc: "MIS-SQUARE-ERROR", feed: "5% squared is not 25%." },
      explanation: "(1.05 × 1.05 - 1) × 100% = 10.25%.",
    },
  ]);

  // =========================================================================
  // LESSON 3: Ratio & Proportional Sharing (l3)
  // =========================================================================
  addLesson("waec-m1", "l3", "top-waec-num-03", "Ratio & Sharing", "Simplify ratios and divide quantities proportionally", [
    {
      level: "understanding", type: "single_choice",
      prompt: "Express the ratio $45\\text{ minutes} : 2\\text{ hours}$ in its simplest whole-number form.",
      correct: "$3 : 8$",
      d1: { text: "$45 : 2$", misc: "MIS-UNITS-IGNORE", feed: "Convert both quantities to identical units (minutes) first: 2 hours = 120 minutes." },
      d2: { text: "$9 : 24$", misc: "MIS-NOT-LOWEST", feed: "9 : 24 can be further simplified by dividing by 3 to get 3 : 8." },
      d3: { text: "$3 : 4$", misc: "MIS-ARITH-SLIP", feed: "45/120 = 3/8, not 3/4." },
      explanation: "2 hours = 120 minutes. 45 : 120 = (45 ÷ 15) : (120 ÷ 15) = 3 : 8.",
    },
    {
      level: "understanding", type: "single_choice",
      prompt: "If $a : b = 2 : 3$ and $b : c = 4 : 5$, find the compound ratio $a : b : c$.",
      correct: "$8 : 12 : 15$",
      d1: { text: "$2 : 4 : 5$", misc: "MIS-RATIO-CHAIN-DIRECT", feed: "The middle term b must have a common multiple between 3 and 4 (LCM 12)." },
      d2: { text: "$6 : 12 : 15$", misc: "MIS-ARITH-SLIP", feed: "Multiply 2 by 4 to get 8, not 6." },
      d3: { text: "$8 : 7 : 15$", misc: "MIS-ADD-TERMS", feed: "Multiply b terms, do not add them." },
      explanation: "Multiply first ratio by 4 (8:12) and second ratio by 3 (12:15). Thus a:b:c = 8:12:15.",
    },
    {
      level: "understanding", type: "single_choice",
      prompt: "Three partners share \₦$120,000$ in the ratio $3 : 4 : 5$. How much is the largest share?",
      correct: "\₦$50,000$",
      d1: { text: "\₦$40,000$", misc: "MIS-MIDDLE-SHARE", feed: "₦40,000 is the middle share (4 parts), not the largest." },
      d2: { text: "\₦$30,000$", misc: "MIS-SMALLEST-SHARE", feed: "₦30,000 is the smallest share (3 parts)." },
      d3: { text: "\₦$60,000$", misc: "MIS-HALF-GUESS", feed: "Total parts = 3 + 4 + 5 = 12. Largest share = (5/12) × 120,000 = ₦50,000." },
      explanation: "Total parts = 3 + 4 + 5 = 12. Largest share = (5/12) × ₦120,000 = ₦50,000.",
    },
    {
      level: "understanding", type: "true_false_justification",
      prompt: "True or False: If two numbers are in the ratio $2 : 3$, increasing both by $4$ keeps their ratio as $2 : 3$.",
      correct: "False: Adding a constant changes the ratio unless both numbers were originally zero.",
      d1: { text: "True: Adding the same number to both terms preserves proportionality.", misc: "MIS-RATIO-ADD-INVARIANCE", feed: "Adding a constant alters the quotient (e.g. 2/3 becomes 6/7)." },
      d2: { text: "False: The ratio becomes 4 : 6 which is identical to 2 : 3.", misc: "MIS-ARITH-SLIP", feed: "Adding 4 to 2 gives 6, adding 4 to 3 gives 7; 6/7 ≠ 2/3." },
      d3: { text: "True: The difference between them remains constant.", misc: "MIS-DIFF-VS-RATIO", feed: "Constant difference does not mean constant ratio." },
      explanation: "Let numbers be 2 and 3. Adding 4 gives 6 and 7. 6 : 7 ≠ 2 : 3.",
    },
    {
      level: "application", type: "single_choice",
      prompt: "Share $48\\text{ kg}$ of rice between two families in the ratio $5 : 7$. How many kilograms does the family with the smaller share receive?",
      correct: "$20\\text{ kg}$",
      d1: { text: "$28\\text{ kg}$", misc: "MIS-LARGER-SHARE", feed: "28 kg is the larger share (7 parts)." },
      d2: { text: "$24\\text{ kg}$", misc: "MIS-EQUAL-SHARE", feed: "48 / 2 = 24 kg is equal sharing, not in ratio 5:7." },
      d3: { text: "$15\\text{ kg}$", misc: "MIS-ARITH-SLIP", feed: "Total parts = 5 + 7 = 12. Smaller share = (5/12) × 48 = 20 kg." },
      explanation: "Total parts = 12. 1 part = 48/12 = 4 kg. Smaller share = 5 × 4 = 20 kg.",
    },
    {
      level: "application", type: "single_choice",
      prompt: "In a school of $600$ students, the ratio of boys to girls is $7 : 5$. How many boys are enrolled?",
      correct: "$350$",
      d1: { text: "$250$", misc: "MIS-GIRLS-COUNT", feed: "250 is the number of girls (5 parts)." },
      d2: { text: "$300$", misc: "MIS-EQUAL-SPLIT", feed: "600 / 2 = 300 assumes equal split." },
      d3: { text: "$420$", misc: "MIS-PERCENT-CONFUSION", feed: "Total parts = 7 + 5 = 12. Boys = (7/12) × 600 = 350." },
      explanation: "Total parts = 12. Value per part = 600 / 12 = 50. Boys = 7 × 50 = 350.",
    },
    {
      level: "application", type: "single_choice",
      prompt: "Two angles of a triangle are in the ratio $2 : 3$. If their sum is $100^\\circ$, calculate the measure of the smaller angle.",
      correct: "$40^\\circ$",
      d1: { text: "$60^\\circ$", misc: "MIS-LARGER-ANGLE", feed: "60° is the larger angle." },
      d2: { text: "$50^\\circ$", misc: "MIS-EQUAL-SPLIT", feed: "100° / 2 = 50° is equal split." },
      d3: { text: "$20^\\circ$", misc: "MIS-ARITH-SLIP", feed: "Parts = 2 + 3 = 5. Value per part = 100° / 5 = 20°. Smaller = 2 × 20° = 40°." },
      explanation: "Parts = 2 + 3 = 5. 1 part = 100° / 5 = 20°. Smaller angle = 2 × 20° = 40°.",
    },
    {
      level: "application", type: "numeric_entry",
      prompt: "Divide \₦$90,000$ in the ratio $2 : 3 : 4$. What is the middle share (numeric value only in ₦)?",
      correct: 30000,
      explanation: "Total parts = 2 + 3 + 4 = 9. 1 part = ₦10,000. Middle share = 3 × 10,000 = ₦30,000.",
    },
    {
      level: "application", type: "ordering",
      prompt: "Arrange the correct steps to divide a total amount $T$ into the ratio $a : b : c$:",
      correct: "A",
      steps: [
        "Sum the parts of the ratio: S = a + b + c.",
        "Calculate the value of one single share: V = T / S.",
        "Multiply V by each ratio term: a×V, b×V, and c×V.",
        "Verify that the sum of the calculated shares equals T.",
      ],
      explanation: "Standard proportional division sequence.",
    },
    {
      level: "application", type: "symbolic_entry",
      prompt: "If an amount $T$ is divided in the ratio $a : b$, write an algebraic expression for the first share in terms of $a$, $b$, and $T$.",
      correct: "(a/(a + b))*T",
      explanation: "Share = (a / (a + b)) * T.",
    },
    {
      level: "error_analysis", type: "single_choice",
      prompt: "A student attempted to share \₦$50,000$ in the ratio $2 : 3$ by calculating $\\frac{2}{3} \\times 50,000$. What error did the student commit?",
      correct: "Divided by $3$ instead of the total sum of the ratio parts ($2 + 3 = 5$).",
      d1: { text: "Multiplied by 2 instead of 3.", misc: "MIS-SWAPPED-PARTS", feed: "The first share corresponds to 2 parts, but denominator must be 5." },
      d2: { text: "Should have subtracted ₦50,000 from 2/3.", misc: "MIS-SUB-CONFUSION", feed: "Proportional sharing requires multiplying total by the fraction." },
      d3: { text: "There is no error; 2/3 of 50,000 gives the first share.", misc: "MIS-RATIO-SUM-OMIT", feed: "2 : 3 means 2 out of 5 parts, not 2 out of 3." },
      explanation: "Denominator must be sum of parts: 2/(2+3) = 2/5. (2/5) × 50,000 = ₦20,000.",
    },
    {
      level: "error_analysis", type: "single_choice",
      prompt: "To simplify the ratio $0.4 : 1.2$, a student writes $4 : 12 = 1 : 4$. What was the mistake?",
      correct: "Simplified $4 : 12$ incorrectly as $1 : 4$ instead of $1 : 3$.",
      d1: { text: "Cannot multiply decimals by 10.", misc: "MIS-DECIMAL-MULT", feed: "Multiplying both sides by 10 to clear decimals is valid." },
      d2: { text: "The ratio should have been inverted.", misc: "MIS-INVERTED-RATIO", feed: "Terms must stay in original order." },
      d3: { text: "0.4 : 1.2 is already in lowest terms.", misc: "MIS-NOT-LOWEST", feed: "Decimals are not in lowest whole-number form." },
      explanation: "4/12 = 1/3, so 0.4 : 1.2 = 1 : 3.",
    },
    {
      level: "challenge_transfer", type: "single_choice",
      prompt: "A mixture contains milk and water in the ratio $5 : 2$. If $6\\text{ litres}$ of water is added, the ratio becomes $5 : 4$. Find the original quantity of milk.",
      correct: "$15\\text{ litres}$",
      d1: { text: "$10\\text{ litres}$", misc: "MIS-WATER-AMOUNT", feed: "10 litres was the original total or double the water." },
      d2: { text: "$20\\text{ litres}$", misc: "MIS-ARITH-SLIP", feed: "Let milk = 5x, water = 2x. 5x / (2x + 6) = 5/4 => 20x = 10x + 30 => x = 3. Milk = 5(3) = 15." },
      d3: { text: "$25\\text{ litres}$", misc: "MIS-MULTIPLIER-GUESS", feed: "Check: 15 / (6 + 6) = 15/12 = 5/4." },
      explanation: "Milk = 5x, water = 2x. 5x / (2x + 6) = 5/4 => 20x = 10x + 30 => 10x = 30 => x = 3. Milk = 5 × 3 = 15 litres.",
    },
    {
      level: "challenge_transfer", type: "single_choice",
      prompt: "Three positive numbers $x, y, z$ are in the ratio $1 : 2 : 3$. If $x^2 + y^2 + z^2 = 504$, find the value of $z$.",
      correct: "$18$",
      d1: { text: "$6$", misc: "MIS-X-VALUE", feed: "6 is the value of x (1 part), not z (3 parts)." },
      d2: { text: "$12$", misc: "MIS-Y-VALUE", feed: "12 is the value of y (2 parts)." },
      d3: { text: "$24$", misc: "MIS-ARITH-SLIP", feed: "x² + 4x² + 9x² = 14x² = 504 => x² = 36 => x = 6. z = 3(6) = 18." },
      explanation: "Let x = k, y = 2k, z = 3k. k² + 4k² + 9k² = 14k² = 504 => k² = 36 => k = 6. z = 3(6) = 18.",
    },
  ]);

  return items;
}
