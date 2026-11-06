from .common import make_opt, make_choices, make_item

COURSE = "waec-ssce-mathematics-mastery"

def generate_waec():
    items = []

    def add(mod_id, les_id, top_id, obj_text, qs):
        for idx, q in enumerate(qs):
            item_id = f"q{idx+1}" if (les_id == "l1" and idx < 3) else f"q_{les_id}_{idx+1}"
            opts = None
            steps = None
            if q["type"] in ["single_choice", "true_false_justification"]:
                if les_id == "l1" and idx == 2:
                    # q3 in l1 has correctAnswer: 'B' for backward compatibility
                    opts = [
                        make_opt("A", q["d1"][0], misc_tag=q["d1"][1], feedback=q["d1"][2]),
                        make_opt("B", str(q["correct"]), is_correct=True),
                        make_opt("C", q["d2"][0], misc_tag=q["d2"][1], feedback=q["d2"][2]),
                        make_opt("D", q["d3"][0], misc_tag=q["d3"][1], feedback=q["d3"][2]),
                    ]
                else:
                    opts = make_choices(
                        str(q["correct"]),
                        q["d1"][0], q["d1"][1], q["d1"][2],
                        q["d2"][0], q["d2"][1], q["d2"][2],
                        q["d3"][0], q["d3"][1], q["d3"][2],
                    )
            elif q["type"] == "ordering":
                steps = q["steps"]

            items.append(make_item(
                item_id, COURSE, mod_id, les_id, top_id, 0, obj_text,
                q["level"], q["type"], q["prompt"], q["correct"], q["explanation"],
                options=opts, steps=steps
            ))

    # -------------------------------------------------------------------------
    # l1: Fractions & Decimals Operations
    # -------------------------------------------------------------------------
    add("waec-m1", "l1", "top-waec-num-01", "Perform four operations on fractions and decimals", [
        {"level": "application", "type": "single_choice", "prompt": "Simplify: $$\\frac{2}{3} + \\frac{1}{4} - \\frac{1}{6}$$", "correct": "\\frac{3}{4}",
         "d1": ("\\frac{2}{11}", "MIS-DENOM-ADD", "Denominators cannot be added directly."), "d2": ("\\frac{5}{12}", "MIS-ARITH-SLIP", "Check LCM numerator calculation."), "d3": ("\\frac{1}{2}", "MIS-NOT-LOWEST", "9/12 simplifies to 3/4."), "explanation": "LCM of 3, 4, 6 is 12: 8/12 + 3/12 - 2/12 = 9/12 = 3/4."},
        {"level": "application", "type": "single_choice", "prompt": "Express $0.375$ as a common fraction in its lowest terms.", "correct": "\\frac{3}{8}",
         "d1": ("\\frac{375}{100}", "MIS-DECIMAL-PLACE", "Three decimal places require denominator 1000."), "d2": ("\\frac{3}{5}", "MIS-ROUNDING-SLIP", "0.375 is 3/8, not 3/5."), "d3": ("\\frac{7}{20}", "MIS-ARITH-SLIP", "375/1000 divides by 125 to give 3/8."), "explanation": "0.375 = 375/1000 = 3/8."},
        {"level": "application", "type": "single_choice", "prompt": "Evaluate: $$15 - 3 \\times (4 - 2) + 6 \\div 2$$", "correct": "12",
         "d1": ("15", "MIS-ORDER-OPS", "Do multiplication before subtraction in BODMAS."), "d2": ("18", "MIS-SIGN-SLIP", "Check signs: 15 - 6 + 3 = 12."), "d3": ("9", "MIS-ARITH-SLIP", "Review intermediate arithmetic."), "explanation": "BODMAS: 15 - 6 + 3 = 12."},
        {"level": "understanding", "type": "single_choice", "prompt": "Why must fractions have a common denominator when adding, but not when multiplying?", "correct": "Addition combines parts of equal unit size, whereas multiplication scales the whole quantity.",
         "d1": ("Multiplication can only occur when denominators are different.", "MIS-MULT-CONFUSION", "Identical denominators can also be multiplied."), "d2": ("Finding common denominators is just a convention.", "MIS-DENOM-ADD", "It is mathematically essential for addition."), "d3": ("Denominators cancel each other out in multiplication.", "MIS-CANCEL-CONFUSION", "Denominators multiply together."), "explanation": "Common denominators establish an equal partition unit."},
        {"level": "understanding", "type": "single_choice", "prompt": "Which of the following is equivalent to dividing by $\\frac{3}{5}$?", "correct": "Multiplying by $\\frac{5}{3}$",
         "d1": ("Multiplying by $\\frac{3}{5}$", "MIS-INVERT-FAIL", "Must invert divisor to multiply."), "d2": ("Dividing by $\\frac{5}{3}$", "MIS-RECIPROCAL-FAIL", "Dividing by reciprocal is multiplying by original."), "d3": ("Subtracting $\\frac{3}{5}$", "MIS-OPERATION-SWAP", "Different operations."), "explanation": "Dividing by a/b is multiplying by b/a."},
        {"level": "understanding", "type": "true_false_justification", "prompt": "True or False: Every terminating decimal can be expressed as a fraction whose denominator is a power of 10.", "correct": "True: A decimal with n digits after the point can be written as an integer over $10^n$.",
         "d1": ("False: Only decimals ending in 0 or 5 can be written over 10^n.", "MIS-FACTOR-CONFUSION", "Any terminating decimal works."), "d2": ("False: Odd numbers of decimal digits cannot be expressed over 10^n.", "MIS-PARITY-CONFUSION", "Parity has no effect on powers of 10."), "d3": ("True: But only if irreducible.", "MIS-REDUCTION-CONFUSION", "Representation holds before reduction."), "explanation": "Integer / 10^n represents any n-place terminating decimal."},
        {"level": "application", "type": "single_choice", "prompt": "Evaluate: $$\\frac{3}{4} - \\frac{1}{2} \\times \\frac{2}{3} + \\frac{1}{6}$$", "correct": "\\frac{7}{12}",
         "d1": ("\\frac{1}{3}", "MIS-ORDER-OPS", "Do multiplication first."), "d2": ("\\frac{5}{12}", "MIS-ARITH-SLIP", "Check 9/12 - 4/12 + 2/12 = 7/12."), "d3": ("\\frac{1}{2}", "MIS-ROUNDING-SLIP", "7/12 is not 1/2."), "explanation": "1/2 × 2/3 = 1/3; 3/4 - 1/3 + 1/6 = 7/12."},
        {"level": "application", "type": "numeric_entry", "prompt": "Calculate the decimal value of: $$\\frac{5}{8} + 0.125$$", "correct": 0.75,
         "explanation": "5/8 = 0.625; 0.625 + 0.125 = 0.75."},
        {"level": "application", "type": "ordering", "prompt": "Arrange the steps to divide $\\frac{2}{3} \\div \\frac{4}{9}$:", "correct": "A",
         "steps": ["Keep the first fraction 2/3 unchanged.", "Change the division symbol to multiplication.", "Invert the divisor to its reciprocal 9/4.", "Multiply and simplify: (2 × 9) / (3 × 4) = 18/12 = 3/2."], "explanation": "Standard fraction division procedure."},
        {"level": "application", "type": "symbolic_entry", "prompt": "Simplify the algebraic fraction: $$\\frac{x}{2} + \\frac{x}{3}$$", "correct": "5x/6",
         "explanation": "3x/6 + 2x/6 = 5x/6."},
        {"level": "error_analysis", "type": "single_choice", "prompt": "A student wrote: $$\\frac{2}{5} + \\frac{3}{10} = \\frac{2+3}{5+10} = \\frac{5}{15} = \\frac{1}{3}$$ What error did the student commit?", "correct": "Added numerators and denominators directly instead of converting to a common denominator of 10.",
         "d1": ("Simplified 5/15 incorrectly to 1/3.", "MIS-REDUCE-SLIP", "5/15 is 1/3, the error was addition."), "d2": ("Multiplied instead of adding.", "MIS-OPERATION-SWAP", "Added across denominators."), "d3": ("Forgot to invert the second fraction.", "MIS-INVERT-CONFUSION", "Inverting applies only to division."), "explanation": "4/10 + 3/10 = 7/10."},
        {"level": "error_analysis", "type": "single_choice", "prompt": "In evaluating $$\\frac{3}{4} \\div \\frac{1}{2}$$, a student wrote $$\\frac{3}{4} \\times \\frac{1}{2} = \\frac{3}{8}$$. What was the mistake?", "correct": "Failed to invert the divisor $\\frac{1}{2}$ to $\\frac{2}{1}$ when changing division to multiplication.",
         "d1": ("Inverted the first fraction instead of the second.", "MIS-FIRST-INVERT", "The first fraction remained 3/4."), "d2": ("Multiplied numerators incorrectly.", "MIS-ARITH-SLIP", "3 × 1 = 3 is correct arithmetic."), "d3": ("Found a common denominator instead of multiplying.", "MIS-COMMON-DENOM", "No common denominator was computed."), "explanation": "3/4 × 2/1 = 6/4 = 3/2."},
        {"level": "challenge_transfer", "type": "single_choice", "prompt": "Evaluate: $$\\left(2\\frac{1}{3} - 1\\frac{3}{4}\\right) \\div 1\\frac{1}{6}$$", "correct": "\\frac{1}{2}",
         "d1": ("\\frac{7}{12}", "MIS-DIVIDE-OMIT", "7/12 is the bracket difference before dividing by 7/6."), "d2": ("\\frac{2}{3}", "MIS-RECIPROCAL-SLIP", "(7/12) ÷ (7/6) = (7/12) × (6/7) = 1/2."), "d3": ("\\frac{1}{4}", "MIS-ARITH-SLIP", "Check 6/12 = 1/2."), "explanation": "7/12 ÷ 7/6 = 7/12 × 6/7 = 1/2."},
        {"level": "challenge_transfer", "type": "single_choice", "prompt": "A container is $\\frac{2}{5}$ full of kerosene. When $21\\text{ litres}$ is added, it becomes $\\frac{3}{4}$ full. What is the capacity of the container?", "correct": "$60\\text{ litres}$",
         "d1": ("$50\\text{ litres}$", "MIS-ROUGH-GUESS", "Check 3/4 - 2/5 = 7/20 of capacity = 21 litres."), "d2": ("$70\\text{ litres}$", "MIS-ARITH-SLIP", "21 / (7/20) = 21 × (20/7) = 60 litres."), "d3": ("$42\\text{ litres}$", "MIS-DOUBLE-SLIP", "Capacity = 60 litres, not 42 litres."), "explanation": "7/20 of C = 21 litres => C = 21 × (20/7) = 60 litres."},
    ])

    # -------------------------------------------------------------------------
    # l2: Percentages & Percentage Change
    # -------------------------------------------------------------------------
    add("waec-m1", "l2", "top-waec-num-02", "Calculate percentage increase, decrease, and error", [
        {"level": "understanding", "type": "single_choice", "prompt": "What does a $15\\%$ discount on an item costing \₦$8,000$ mean?", "correct": "The price is reduced by \₦$1,200$, so the customer pays \₦$6,800$.",
         "d1": ("The price is reduced by \₦$150$, so the customer pays \₦$7,850$.", "MIS-PERCENT-BASE", "15% means 15 per hundred, not ₦150."), "d2": ("The price increases by \₦$1,200$, so the customer pays \₦$9,200$.", "MIS-DISCOUNT-ADD", "Discount reduces price."), "d3": ("The customer pays \₦$1,200$ total.", "MIS-PERCENT-REMAINDER", "Discount is the reduction, not final price."), "explanation": "15% of ₦8,000 = ₦1,200. Price = ₦8,000 - ₦1,200 = ₦6,800."},
        {"level": "understanding", "type": "single_choice", "prompt": "Express $\\frac{7}{25}$ as a percentage.", "correct": "$28\\%$",
         "d1": ("$14\\%$", "MIS-PERCENT-MULT", "Multiply by 100%: (7/25) × 100% = 28%."), "d2": ("$35\\%$", "MIS-ARITH-SLIP", "7 × 4 = 28, not 35."), "d3": ("$7\\%$", "MIS-DENOM-DROP", "Denominator 25 scales to 100 by factor 4."), "explanation": "(7/25) × 100% = 28%."},
        {"level": "understanding", "type": "single_choice", "prompt": "Which formula correctly gives the percentage error in a measurement?", "correct": "$\\frac{|\\text{Measured} - \\text{Actual}|}{\\text{Actual}} \\times 100\\%$",
         "d1": ("$\\frac{|\\text{Measured} - \\text{Actual}|}{\\text{Measured}} \\times 100\\%$", "MIS-PERCENT-ERROR-DENOM", "Must divide by actual value."), "d2": ("$(|\\text{Measured} - \\text{Actual}|) \\times 100\\%$", "MIS-DENOM-DROP", "Must normalize relative to actual value."), "d3": ("$\\frac{\\text{Actual}}{\\text{Measured}} \\times 100\\%$", "MIS-INVERTED-RATIO", "This is ratio of true to measured."), "explanation": "Percentage error = (|Measured - Actual| / Actual) × 100%."},
        {"level": "understanding", "type": "true_false_justification", "prompt": "True or False: If a quantity increases by $20\\%$ and then decreases by $20\\%$, it returns to its original value.", "correct": "False: The $20\\%$ decrease applies to a larger base, resulting in a net decrease of $4\\%$.",
         "d1": ("True: Adding 20% and subtracting 20% cancel out exactly.", "MIS-PERCENT-SYMMETRY", "Percentages represent proportional changes."), "d2": ("False: The final value is 4% greater than original.", "MIS-SIGN-SLIP", "1.20 × 0.80 = 0.96, which is 4% less."), "d3": ("True: The order of percentage changes is commutative.", "MIS-COMMUTATIVE-MISCONCEPTION", "Neither order returns to 1.0."), "explanation": "100 × 1.20 × 0.80 = 96 (4% less)."},
        {"level": "application", "type": "single_choice", "prompt": "The population of a community increased from $40,000$ to $46,000$. Calculate the percentage increase.", "correct": "$15\\%$",
         "d1": ("$13.04\\%$", "MIS-PERCENT-NEW-BASE", "Divide by original population 40,000, not 46,000."), "d2": ("$6\\%$", "MIS-DIFF-ONLY", "6,000 is absolute increase; divide by 40,000 and multiply by 100%."), "d3": ("$12\\%$", "MIS-ARITH-SLIP", "6,000 / 40,000 = 15%."), "explanation": "6,000 / 40,000 × 100% = 15%."},
        {"level": "application", "type": "single_choice", "prompt": "A student measured a length as $1.25\\text{ m}$, whereas the actual length was $1.20\\text{ m}$. Calculate the percentage error to 2 decimal places.", "correct": "$4.17\\%$",
         "d1": ("$4.00\\%$", "MIS-PERCENT-ERROR-DENOM", "Divided by measured value 1.25 instead of 1.20."), "d2": ("$5.00\\%$", "MIS-ARITH-SLIP", "0.05 / 1.20 = 4.17%."), "d3": ("$0.04\\%$", "MIS-PERCENT-FACTOR-100", "Forgot to multiply by 100%."), "explanation": "0.05 / 1.20 × 100% = 4.17%."},
        {"level": "application", "type": "single_choice", "prompt": "After a price reduction of $12\\%$, a solar lamp sells for \₦$22,000$. What was its original price before the discount?", "correct": "\₦$25,000$",
         "d1": ("\₦$24,640$", "MIS-PERCENT-REVERSE", "₦22,000 represents 88% of original."), "d2": ("\₦$26,400$", "MIS-PERCENT-MULT", "22,000 / 0.88 = ₦25,000."), "d3": ("\₦$24,000$", "MIS-ARITH-SLIP", "Check 25,000 × 0.88 = 22,000."), "explanation": "22,000 / 0.88 = ₦25,000."},
        {"level": "application", "type": "numeric_entry", "prompt": "A shopkeeper bought an appliance for \₦$50,000$ and sold it for \₦$62,500$. Calculate the percentage profit (numeric value only in %).", "correct": 25,
         "explanation": "Profit = 12,500 / 50,000 × 100% = 25%."},
        {"level": "application", "type": "ordering", "prompt": "Arrange the steps to calculate percentage error in a measurement:", "correct": "A",
         "steps": ["Record the measured value and the true (actual) value.", "Calculate the absolute error: |Measured - Actual|.", "Divide the absolute error by the actual value.", "Multiply the quotient by 100% to express as a percentage."], "explanation": "Standard percentage error sequence."},
        {"level": "application", "type": "symbolic_entry", "prompt": "If an initial price $P$ is increased by $r\\%$, write an expression for the new price in terms of $P$ and $r$.", "correct": "P*(1 + r/100)",
         "explanation": "P + (r/100)*P = P*(1 + r/100)."},
        {"level": "error_analysis", "type": "single_choice", "prompt": "A trader priced a bag at \₦$30,000$, increased it by $10\\%$, then gave a $10\\%$ discount on the new price. A student claims the price is back to \₦$30,000$. What is the error?", "correct": "The $10\\%$ discount applies to \₦$33,000$ (giving \₦$3,300$ off), making the final price \₦$29,700$.",
         "d1": ("The discount should have been added instead of subtracted.", "MIS-ADD-INSTEAD-SUB", "Discounts reduce price."), "d2": ("The final price is higher because merchants always profit.", "MIS-ALWAYS-PROFIT", "Sequential percentage on raised base gives a net drop."), "d3": ("The 10% increase was computed incorrectly.", "MIS-ARITH-SLIP", "10% of 30,000 is 3,000."), "explanation": "10% of ₦33,000 is ₦3,300 => ₦29,700."},
        {"level": "error_analysis", "type": "single_choice", "prompt": "A student calculates percentage error for a length measured as $8\\text{ cm}$ with true length $10\\text{ cm}$ as $\\frac{10 - 8}{8} \\times 100\\% = 25\\%$. What is the mistake?", "correct": "Divided by the measured value ($8\\text{ cm}$) instead of the true value ($10\\text{ cm}$). Correct error is $20\\%$.",
         "d1": ("The numerator should be 10 + 8 = 18.", "MIS-SUM-INSTEAD-DIFF", "Error is difference, not sum."), "d2": ("The student should have squared the difference.", "MIS-SQUARE-CONFUSION", "No squaring in percentage error."), "d3": ("There is no error; 25% is correct.", "MIS-NO-ERROR-CLAIM", "Denominator must be actual value 10."), "explanation": "|8 - 10| / 10 × 100% = 20%."},
        {"level": "challenge_transfer", "type": "single_choice", "prompt": "A company's production grew by $20\\%$ in year 1, but dropped by $15\\%$ in year 2. If initial production was $150,000$ units, what was the production at the end of year 2?", "correct": "$153,000\\text{ units}$",
         "d1": ("$157,500\\text{ units}$", "MIS-PERCENT-NET-SUM", "Cannot simply do 20% - 15% = 5% of 150,000."), "d2": ("$150,000\\text{ units}$", "MIS-ROUNDING-GUESS", "150,000 × 1.20 × 0.85 = 153,000."), "d3": ("$142,500\\text{ units}$", "MIS-SIGN-SLIP", "1.20 × 0.85 = 1.02."), "explanation": "150,000 × 1.20 × 0.85 = 153,000 units."},
        {"level": "challenge_transfer", "type": "single_choice", "prompt": "The sides of a rectangle are measured as $10\\text{ cm}$ and $20\\text{ cm}$, each with a possible error of $+5\\%$. What is the maximum possible percentage error in the calculated area?", "correct": "$10.25\\%$",
         "d1": ("$10.00\\%$", "MIS-LINEAR-APPROX", "Adding 5% + 5% ignores the cross-product term (1.05 × 1.05 = 1.1025)."), "d2": ("$5.00\\%$", "MIS-SINGLE-ERROR", "Both dimensions carry error, so area error is compounded."), "d3": ("$25.00\\%$", "MIS-SQUARE-ERROR", "5% squared is not 25%."), "explanation": "(1.05 × 1.05 - 1) × 100% = 10.25%."},
    ])

    # -------------------------------------------------------------------------
    # l3: Ratio & Proportional Sharing
    # -------------------------------------------------------------------------
    add("waec-m1", "l3", "top-waec-num-03", "Simplify ratios and divide quantities proportionally", [
        {"level": "understanding", "type": "single_choice", "prompt": "Express the ratio $45\\text{ minutes} : 2\\text{ hours}$ in its simplest whole-number form.", "correct": "$3 : 8$",
         "d1": ("$45 : 2$", "MIS-UNITS-IGNORE", "Convert both quantities to minutes: 2 hours = 120 minutes."), "d2": ("$9 : 24$", "MIS-NOT-LOWEST", "9 : 24 can be further divided by 3 to get 3 : 8."), "d3": ("$3 : 4$", "MIS-ARITH-SLIP", "45/120 = 3/8, not 3/4."), "explanation": "45 : 120 = 3 : 8."},
        {"level": "understanding", "type": "single_choice", "prompt": "If $a : b = 2 : 3$ and $b : c = 4 : 5$, find the compound ratio $a : b : c$.", "correct": "$8 : 12 : 15$",
         "d1": ("$2 : 4 : 5$", "MIS-RATIO-CHAIN-DIRECT", "Middle term b must have LCM between 3 and 4 (12)."), "d2": ("$6 : 12 : 15$", "MIS-ARITH-SLIP", "Multiply 2 by 4 to get 8, not 6."), "d3": ("$8 : 7 : 15$", "MIS-ADD-TERMS", "Multiply b terms, do not add."), "explanation": "Multiply first by 4 (8:12) and second by 3 (12:15) => 8:12:15."},
        {"level": "understanding", "type": "single_choice", "prompt": "Three partners share \₦$120,000$ in the ratio $3 : 4 : 5$. How much is the largest share?", "correct": "\₦$50,000$",
         "d1": ("\₦$40,000$", "MIS-MIDDLE-SHARE", "₦40,000 is the middle share (4 parts)."), "d2": ("\₦$30,000$", "MIS-SMALLEST-SHARE", "₦30,000 is the smallest share (3 parts)."), "d3": ("\₦$60,000$", "MIS-HALF-GUESS", "Total parts = 3 + 4 + 5 = 12. Largest = (5/12) × 120,000 = ₦50,000."), "explanation": "5/12 × ₦120,000 = ₦50,000."},
        {"level": "understanding", "type": "true_false_justification", "prompt": "True or False: If two numbers are in the ratio $2 : 3$, increasing both by $4$ keeps their ratio as $2 : 3$.", "correct": "False: Adding a constant changes the ratio unless both numbers were originally zero.",
         "d1": ("True: Adding the same number preserves proportionality.", "MIS-RATIO-ADD-INVARIANCE", "Adding a constant alters the quotient (e.g. 2/3 becomes 6/7)."), "d2": ("False: The ratio becomes 4 : 6 which is identical to 2 : 3.", "MIS-ARITH-SLIP", "2+4=6, 3+4=7; 6/7 ≠ 2/3."), "d3": ("True: The difference between them remains constant.", "MIS-DIFF-VS-RATIO", "Constant difference does not mean constant ratio."), "explanation": "2+4=6, 3+4=7. 6:7 ≠ 2:3."},
        {"level": "application", "type": "single_choice", "prompt": "Share $48\\text{ kg}$ of rice between two families in the ratio $5 : 7$. How many kilograms does the family with the smaller share receive?", "correct": "$20\\text{ kg}$",
         "d1": ("$28\\text{ kg}$", "MIS-LARGER-SHARE", "28 kg is the larger share (7 parts)."), "d2": ("$24\\text{ kg}$", "MIS-EQUAL-SHARE", "48 / 2 = 24 kg is equal sharing."), "d3": ("$15\\text{ kg}$", "MIS-ARITH-SLIP", "Total parts = 12. Smaller = (5/12) × 48 = 20 kg."), "explanation": "5/12 × 48 kg = 20 kg."},
        {"level": "application", "type": "single_choice", "prompt": "In a school of $600$ students, the ratio of boys to girls is $7 : 5$. How many boys are enrolled?", "correct": "$350$",
         "d1": ("$250$", "MIS-GIRLS-COUNT", "250 is the number of girls (5 parts)."), "d2": ("$300$", "MIS-EQUAL-SPLIT", "600 / 2 = 300 assumes equal split."), "d3": ("$420$", "MIS-PERCENT-CONFUSION", "Total parts = 12. Boys = (7/12) × 600 = 350."), "explanation": "7/12 × 600 = 350 boys."},
        {"level": "application", "type": "single_choice", "prompt": "Two angles of a triangle are in the ratio $2 : 3$. If their sum is $100^\\circ$, calculate the measure of the smaller angle.", "correct": "$40^\\circ$",
         "d1": ("$60^\\circ$", "MIS-LARGER-ANGLE", "60° is the larger angle."), "d2": ("$50^\\circ$", "MIS-EQUAL-SPLIT", "100° / 2 = 50° is equal split."), "d3": ("$20^\\circ$", "MIS-ARITH-SLIP", "1 part = 100° / 5 = 20°. Smaller = 2 × 20° = 40°."), "explanation": "2/5 × 100° = 40°."},
        {"level": "application", "type": "numeric_entry", "prompt": "Divide \₦$90,000$ in the ratio $2 : 3 : 4$. What is the middle share (numeric value only in ₦)?", "correct": 30000,
         "explanation": "Total parts = 9. 1 part = ₦10,000. Middle = 3 × 10,000 = ₦30,000."},
        {"level": "application", "type": "ordering", "prompt": "Arrange the steps to divide a total amount $T$ into the ratio $a : b : c$:", "correct": "A",
         "steps": ["Sum the parts of the ratio: S = a + b + c.", "Calculate the value of one single share: V = T / S.", "Multiply V by each ratio term: a×V, b×V, and c×V.", "Verify that the sum of the calculated shares equals T."], "explanation": "Standard proportional division sequence."},
        {"level": "application", "type": "symbolic_entry", "prompt": "If an amount $T$ is divided in the ratio $a : b$, write an algebraic expression for the first share in terms of $a$, $b$, and $T$.", "correct": "(a/(a + b))*T",
         "explanation": "Share = (a / (a + b)) * T."},
        {"level": "error_analysis", "type": "single_choice", "prompt": "A student attempted to share \₦$50,000$ in the ratio $2 : 3$ by calculating $\\frac{2}{3} \\times 50,000$. What error did the student commit?", "correct": "Divided by $3$ instead of the total sum of the ratio parts ($2 + 3 = 5$).",
         "d1": ("Multiplied by 2 instead of 3.", "MIS-SWAPPED-PARTS", "The first share has 2 parts, but denominator must be 5."), "d2": ("Should have subtracted ₦50,000 from 2/3.", "MIS-SUB-CONFUSION", "Proportional sharing requires multiplying total by fraction."), "d3": ("There is no error; 2/3 of 50,000 gives the first share.", "MIS-RATIO-SUM-OMIT", "2 : 3 means 2 out of 5 parts."), "explanation": "Denominator must be 2 + 3 = 5: (2/5) × 50,000 = ₦20,000."},
        {"level": "error_analysis", "type": "single_choice", "prompt": "To simplify the ratio $0.4 : 1.2$, a student writes $4 : 12 = 1 : 4$. What was the mistake?", "correct": "Simplified $4 : 12$ incorrectly as $1 : 4$ instead of $1 : 3$.",
         "d1": ("Cannot multiply decimals by 10.", "MIS-DECIMAL-MULT", "Multiplying both sides by 10 is valid."), "d2": ("The ratio should have been inverted.", "MIS-INVERTED-RATIO", "Terms must stay in original order."), "d3": ("0.4 : 1.2 is already in lowest terms.", "MIS-NOT-LOWEST", "Decimals are not in whole-number form."), "explanation": "4/12 = 1/3, so 0.4 : 1.2 = 1 : 3."},
        {"level": "challenge_transfer", "type": "single_choice", "prompt": "A mixture contains milk and water in the ratio $5 : 2$. If $6\\text{ litres}$ of water is added, the ratio becomes $5 : 4$. Find the original quantity of milk.", "correct": "$15\\text{ litres}$",
         "d1": ("$10\\text{ litres}$", "MIS-WATER-AMOUNT", "10 litres was double the water."), "d2": ("$20\\text{ litres}$", "MIS-ARITH-SLIP", "5x / (2x + 6) = 5/4 => x = 3 => milk = 15."), "d3": ("$25\\text{ litres}$", "MIS-MULTIPLIER-GUESS", "Check: 15 / (6 + 6) = 15/12 = 5/4."), "explanation": "5x / (2x + 6) = 5/4 => 20x = 10x + 30 => x = 3. Milk = 5(3) = 15 litres."},
        {"level": "challenge_transfer", "type": "single_choice", "prompt": "Three positive numbers $x, y, z$ are in the ratio $1 : 2 : 3$. If $x^2 + y^2 + z^2 = 504$, find the value of $z$.", "correct": "$18$",
         "d1": ("$6$", "MIS-X-VALUE", "6 is the value of x (1 part), not z (3 parts)."), "d2": ("$12$", "MIS-Y-VALUE", "12 is the value of y (2 parts)."), "d3": ("$24$", "MIS-ARITH-SLIP", "x² + 4x² + 9x² = 14x² = 504 => x = 6 => z = 18."), "explanation": "14k² = 504 => k² = 36 => k = 6. z = 3(6) = 18."},
    ])

    return items
