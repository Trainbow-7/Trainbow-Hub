from .common import make_opt, make_choices, make_item

COURSE = "waec-ssce-mathematics-mastery"

def get_waec_items():
    items = []

    def add(mod_id, les_id, top_id, obj_text, qs):
        for idx, q in enumerate(qs):
            item_id = f"q{idx+1}" if (les_id == "l1" and idx < 3) else f"q_{les_id}_{idx+1}"
            opts = None
            steps = None
            if q["type"] in ["single_choice", "true_false_justification"]:
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

    # Import existing l1, l2, l3
    from .waec_gen import generate_waec
    items.extend(generate_waec())

    # Lessons l4 through l19
    # -------------------------------------------------------------------------
    # l4: Profit, Loss & Percentage Margins
    # -------------------------------------------------------------------------
    add("waec-m2", "l4", "top-waec-comm-01", "Calculate profit, loss, and percentage margins", [
        {"level": "understanding", "type": "single_choice", "prompt": "Which expression correctly defines the percentage profit on an item?", "correct": "$\\frac{\\text{Selling Price} - \\text{Cost Price}}{\\text{Cost Price}} \\times 100\\%$",
         "d1": ("$\\frac{\\text{Selling Price} - \\text{Cost Price}}{\\text{Selling Price}} \\times 100\\%$", "MIS-MARGIN-CONFUSION", "Percentage profit is based on Cost Price; dividing by Selling Price gives margin."),
         "d2": ("$(\\text{Selling Price} - \\text{Cost Price}) \\times 100\\%$", "MIS-DENOM-DROP", "Profit must be divided by Cost Price."),
         "d3": ("$\\frac{\\text{Cost Price}}{\\text{Selling Price}} \\times 100\\%$", "MIS-RATIO-CONFUSION", "This is the ratio of cost to selling price."),
         "explanation": "Percentage profit = (Profit / Cost Price) × 100%."},
        {"level": "understanding", "type": "single_choice", "prompt": "A trader bought a phone for \₦$40,000$ and sold it for \₦$48,000$. What was the percentage profit?", "correct": "$20\\%$",
         "d1": ("$16.67\\%$", "MIS-MARGIN-CONFUSION", "Divided by selling price ₦48,000 instead of cost price ₦40,000."),
         "d2": ("$8\\%$", "MIS-DIFF-ONLY", "₦8,000 is the profit, percentage is 8,000/40,000 × 100% = 20%."),
         "d3": ("$25\\%$", "MIS-ARITH-SLIP", "8/40 = 1/5 = 20%."),
         "explanation": "Profit = 48,000 - 40,000 = ₦8,000. % profit = (8,000 / 40,000) × 100% = 20%."},
        {"level": "understanding", "type": "single_choice", "prompt": "A shoe costing \₦$15,000$ was sold at a $10\\%$ loss. What was the selling price?", "correct": "\₦$13,500$",
         "d1": ("\₦$16,500$", "MIS-ADD-LOSS", "A loss decreases the selling price below cost price."),
         "d2": ("\₦$14,000$", "MIS-ARITH-SLIP", "10% of 15,000 is 1,500. 15,000 - 1,500 = ₦13,500."),
         "d3": ("\₦$1,500$", "MIS-LOSS-ONLY", "₦1,500 is the loss amount, not the selling price."),
         "explanation": "Loss = 0.10 × 15,000 = ₦1,500. Selling price = 15,000 - 1,500 = ₦13,500."},
        {"level": "understanding", "type": "true_false_justification", "prompt": "True or False: If an article is sold at a $25\\%$ profit, the Selling Price is $125\\%$ of the Cost Price.", "correct": "True: Selling Price = Cost Price + Profit = 100% + 25% = 125% of Cost Price.",
         "d1": ("False: Selling price is always 100% and profit is deducted.", "MIS-PERCENT-CONFUSION", "Selling price exceeds cost price when there is a profit."),
         "d2": ("False: The profit applies only to the markup above 125%.", "MIS-MARKUP-CONFUSION", "125% of CP equals SP directly."),
         "d3": ("True: But only if there is no value-added tax.", "MIS-TAX-CONFUSION", "The relationship SP = 1.25 CP holds by definition."),
         "explanation": "SP = CP × (1 + 0.25) = 1.25 CP = 125% of CP."},
        {"level": "application", "type": "single_choice", "prompt": "An article was sold for \₦$36,000$ at a profit of $20\\%$. Find the original Cost Price.", "correct": "\₦$30,000$",
         "d1": ("\₦$28,800$", "MIS-PERCENT-REVERSE", "Cannot simply subtract 20% of 36,000; ₦36,000 represents 120% of CP."),
         "d2": ("\₦$32,000$", "MIS-ARITH-SLIP", "36,000 / 1.20 = ₦30,000."),
         "d3": ("\₦$43,200$", "MIS-ADD-INSTEAD-DIV", "Cost price must be lower than selling price when there is profit."),
         "explanation": "CP = SP / 1.20 = 36,000 / 1.20 = ₦30,000."},
        {"level": "application", "type": "single_choice", "prompt": "A merchant bought $50\\text{ kg}$ of sugar for \₦$25,000$ and retailed it at \₦$600\\text{ per kg}$. What was the total profit?", "correct": "\₦$5,000$",
         "d1": ("\₦$30,000$", "MIS-TOTAL-REVENUE", "₦30,000 is total revenue, not profit."),
         "d2": ("\₦$6,000$", "MIS-ARITH-SLIP", "50 × 600 = 30,000; 30,000 - 25,000 = ₦5,000."),
         "d3": ("\₦$4,000$", "MIS-SUB-SLIP", "Check 30,000 - 25,000 = ₦5,000."),
         "explanation": "Total sales = 50 × 600 = ₦30,000. Profit = 30,000 - 25,000 = ₦5,000."},
        {"level": "application", "type": "single_choice", "prompt": "A television is marked at \₦$80,000$. A customer negotiates a $10\\%$ discount and an additional $5\\%$ cash rebate on the discounted price. How much does the customer pay?", "correct": "\₦$68,400$",
         "d1": ("\₦$68,000$", "MIS-PERCENT-SUM", "Cannot simply add 10% + 5% = 15% of 80,000 = 68,000."),
         "d2": ("\₦$72,000$", "MIS-FIRST-DISCOUNT", "₦72,000 is the price after 10% discount before cash rebate."),
         "d3": ("\₦$64,000$", "MIS-ARITH-SLIP", "80,000 × 0.90 × 0.95 = ₦68,400."),
         "explanation": "After 10%: 80,000 × 0.90 = 72,000. After 5%: 72,000 × 0.95 = ₦68,400."},
        {"level": "application", "type": "numeric_entry", "prompt": "If a generator is bought for \₦$120,000$ and sold for \₦$150,000$, calculate the percentage profit (numeric value in %).", "correct": 25,
         "explanation": "Profit = 30,000. % profit = (30,000 / 120,000) × 100% = 25%."},
        {"level": "application", "type": "ordering", "prompt": "Arrange the steps to find the Cost Price given Selling Price $SP$ and Profit percentage $r\\%$:", "correct": "A",
         "steps": ["Express Selling Price as a percentage of Cost Price: (100 + r)%.", "Write the equation: SP = CP × (100 + r) / 100.", "Divide Selling Price by (1 + r/100).", "Verify that CP + (r% of CP) equals SP."], "explanation": "Standard Cost Price recovery procedure."},
        {"level": "application", "type": "symbolic_entry", "prompt": "Write a formula for Cost Price $CP$ in terms of Selling Price $SP$ and percentage loss $L\\%$.", "correct": "SP/(1 - L/100)",
         "explanation": "SP = CP * (1 - L/100) => CP = SP / (1 - L/100)."},
        {"level": "error_analysis", "type": "single_choice", "prompt": "A student calculates percentage profit as $\\frac{60,000 - 50,000}{60,000} \\times 100\\% = 16.67\\%$. What error was committed?", "correct": "Divided by Selling Price ($60,000$) instead of Cost Price ($50,000$). Correct profit is $20\\%$.",
         "d1": ("Subtracted in the wrong order.", "MIS-ORDER-SUB", "60,000 - 50,000 correctly gives ₦10,000 profit."),
         "d2": ("Forgot to multiply by 100%.", "MIS-FACTOR-100", "The expression includes × 100%."),
         "d3": ("There is no error; 16.67% is correct profit.", "MIS-NO-ERROR-CLAIM", "16.67% is the profit margin, not profit on cost."),
         "explanation": "Percentage profit must always divide by the cost price: 10,000 / 50,000 × 100% = 20%."},
        {"level": "error_analysis", "type": "single_choice", "prompt": "A trader applies two successive discounts of $20\\%$ and $10\\%$. A student claims this is equivalent to a single discount of $30\\%$. Why is this claim wrong?", "correct": "The second discount applies to a reduced price, making the total effective discount $28\\%$, not $30\\%$.",
         "d1": ("The effective discount is 32% because discounts compound upwards.", "MIS-COMPOUND-ADD", "Successive discounts compound downwards."),
         "d2": ("The second discount should be multiplied: 20 × 10 = 200%.", "MIS-ARITH-MULT", "Discounts are not multiplied directly."),
         "d3": ("The claim is correct for all purchases above ₦100,000.", "MIS-THRESHOLD-CONFUSION", "Mathematical percentage laws hold regardless of total amount."),
         "explanation": "0.80 × 0.90 = 0.72 => effective discount is 100% - 72% = 28%."},
        {"level": "challenge_transfer", "type": "single_choice", "prompt": "A dealer sold two cars for \₦$2,400,000$ each. On the first car, he made a $20\\%$ profit; on the second car, he made a $20\\%$ loss. What was his overall financial outcome on both transactions combined?", "correct": "A net loss of \₦$200,000$",
         "d1": ("He broke even with zero gain or loss.", "MIS-ZERO-SUM-SLIP", "Equal percentage profit and loss on the same selling price always yields an overall net loss."),
         "d2": ("A net profit of ₦100,000", "MIS-PROFIT-BIAS", "The loss on the second car exceeds the gain on the first car."),
         "d3": ("A net loss of ₦400,000", "MIS-DOUBLE-LOSS", "Overall loss is exactly ₦200,000."),
         "explanation": "Car 1 CP = 2.4M / 1.2 = 2.0M (gain 400k). Car 2 CP = 2.4M / 0.8 = 3.0M (loss 600k). Total CP = 5.0M, Total SP = 4.8M. Net loss = ₦200,000."},
        {"level": "challenge_transfer", "type": "single_choice", "prompt": "A grocer mixes two grades of tea costing \₦$1,200\\text{ per kg}$ and \₦$1,500\\text{ per kg}$ in the ratio $2 : 1$. At what price per kg must the grocer sell the blend to make a $20\\%$ profit?", "correct": "\₦$1,560\\text{ per kg}$",
         "d1": ("\₦$1,440\\text{ per kg}$", "MIS-CP-ONLY", "₦1,300 is cost price of 1kg mixture, 1.20 × 1,300 = ₦1,560."),
         "d2": ("\₦$1,620\\text{ per kg}$", "MIS-ARITH-SLIP", "Cost of 3kg = 2(1,200) + 1,500 = 3,900 => CP/kg = 1,300. SP = 1.20 × 1,300 = 1,560."),
         "d3": ("\₦$1,500\\text{ per kg}$", "MIS-AVERAGE-GUESS", "Weighted cost is ₦1,300, not ₦1,350."),
         "explanation": "Cost of 3 kg = 2(1,200) + 1,500 = ₦3,900 => CP per kg = ₦1,300. Selling price = 1,300 × 1.20 = ₦1,560."},
    ])

    # -------------------------------------------------------------------------
    # l5: Simple & Compound Interest Calculations
    # -------------------------------------------------------------------------
    add("waec-m2", "l5", "top-waec-comm-02", "Calculate simple and compound interest and depreciation", [
        {"level": "understanding", "type": "single_choice", "prompt": "Which formula correctly gives the Simple Interest $I$ earned on a principal $P$ at rate $R\\%$ per annum for $T$ years?", "correct": "$I = \\frac{P \\times R \\times T}{100}$",
         "d1": ("$I = P \\times (1 + \\frac{R}{100})^T$", "MIS-COMPOUND-CONFUSION", "This is the formula for compound amount, not simple interest."),
         "d2": ("$I = \\frac{P \\times R}{100 \\times T}$", "MIS-TIME-DIVIDE", "Time T must be in the numerator multiplied by P and R."),
         "d3": ("$I = \\frac{100}{P \\times R \\times T}$", "MIS-INVERTED-FORMULA", "Incorrect reciprocal."),
         "explanation": "Simple Interest formula is I = (P * R * T) / 100."},
        {"level": "understanding", "type": "single_choice", "prompt": "Find the simple interest on \₦$50,000$ invested at $6\\%$ per annum for $3$ years.", "correct": "\₦$9,000$",
         "d1": ("\₦$3,000$", "MIS-ONE-YEAR", "₦3,000 is interest for 1 year; multiply by 3 years to get ₦9,000."),
         "d2": ("\₦$59,000$", "MIS-TOTAL-AMOUNT", "₦59,000 is the total amount (P + I), not the interest alone."),
         "d3": ("\₦$18,000$", "MIS-DOUBLE-SLIP", "50,000 × 6 × 3 / 100 = ₦9,000."),
         "explanation": "I = (50,000 × 6 × 3) / 100 = ₦9,000."},
        {"level": "understanding", "type": "single_choice", "prompt": "What is the key difference between Simple Interest and Compound Interest?", "correct": "In compound interest, interest earned is added to principal so future interest is earned on interest.",
         "d1": ("Simple interest is paid monthly while compound interest is paid annually.", "MIS-FREQUENCY-CONFUSION", "Both can have any compounding frequency."),
         "d2": ("Compound interest uses a lower rate than simple interest.", "MIS-RATE-CONFUSION", "Rates can be identical."),
         "d3": ("Simple interest yields more money than compound interest over long periods.", "MIS-GROWTH-CONFUSION", "Compound interest grows exponentially and exceeds simple interest."),
         "explanation": "Compound interest earns interest on previous accumulated interest."},
        {"level": "understanding", "type": "true_false_justification", "prompt": "True or False: A machine that depreciates at $10\\%$ per annum loses the exact same monetary value every year.", "correct": "False: Since the asset value decreases each year, $10\\%$ of the remaining value is smaller each subsequent year.",
         "d1": ("True: 10% is constant, so the monetary loss is identical.", "MIS-PERCENT-LINEAR", "10% applies to a declining book value."),
         "d2": ("False: The monetary depreciation increases every year.", "MIS-TREND-INVERSION", "Depreciation decreases as book value drops."),
         "d3": ("True: But only for the first five years of operation.", "MIS-ARBITRARY-RULE", "Reducing balance depreciation declines continuously."),
         "explanation": "Reducing-balance depreciation applies to diminishing book value: year 1 loss > year 2 loss."},
        {"level": "application", "type": "single_choice", "prompt": "Calculate the compound amount on \₦$100,000$ invested at $10\\%$ per annum compound interest for $2$ years.", "correct": "\₦$121,000$",
         "d1": ("\₦$120,000$", "MIS-SIMPLE-CONFUSION", "₦120,000 is simple interest amount; compound interest adds interest on year 1 interest."),
         "d2": ("\₦$21,000$", "MIS-INTEREST-ONLY", "₦21,000 is the compound interest, the amount is P + CI = ₦121,000."),
         "d3": ("\₦$110,000$", "MIS-ONE-YEAR", "₦110,000 is the amount after only 1 year."),
         "explanation": "A = 100,000 × (1.10)² = 100,000 × 1.21 = ₦121,000."},
        {"level": "application", "type": "single_choice", "prompt": "At what rate per annum will \₦$40,000$ yield \₦$12,000$ simple interest in $5$ years?", "correct": "$6\\%$",
         "d1": ("$5\\%$", "MIS-ARITH-SLIP", "R = (100 × 12,000) / (40,000 × 5) = 1,200,000 / 200,000 = 6%."),
         "d2": ("$8\\%$", "MIS-RATE-GUESS", "Check 40,000 × 0.06 × 5 = 12,000."),
         "d3": ("$3\\%$", "MIS-HALF-SLIP", "R = 6%, not 3%."),
         "explanation": "R = (100 × I) / (P × T) = (100 × 12,000) / (40,000 × 5) = 6%."},
        {"level": "application", "type": "single_choice", "prompt": "A generator originally valued at \₦$200,000$ depreciates at $10\\%$ per annum. Calculate its book value after $2$ years.", "correct": "\₦$162,000$",
         "d1": ("\₦$160,000$", "MIS-SIMPLE-DEPRECIATION", "Straight-line 20% gives 160,000; reducing-balance gives 200,000 × (0.9)² = ₦162,000."),
         "d2": ("\₦$180,000$", "MIS-ONE-YEAR", "₦180,000 is value after 1 year."),
         "d3": ("\₦$38,000$", "MIS-DEPRECIATION-TOTAL", "₦38,000 is total depreciation; value remaining is ₦162,000."),
         "explanation": "Value = 200,000 × (1 - 0.10)² = 200,000 × 0.81 = ₦162,000."},
        {"level": "application", "type": "numeric_entry", "prompt": "Calculate the simple interest on \₦$25,000$ at $8\\%$ per annum for $2$ years (numeric value in ₦).", "correct": 4000,
         "explanation": "I = (25,000 × 8 × 2) / 100 = ₦4,000."},
        {"level": "application", "type": "ordering", "prompt": "Arrange the steps to calculate compound interest over $2$ years without using a formula:", "correct": "A",
         "steps": ["Calculate Year 1 interest: I1 = P × R / 100.", "Add I1 to original principal: P2 = P + I1.", "Calculate Year 2 interest: I2 = P2 × R / 100.", "Add I1 and I2 to obtain total compound interest."], "explanation": "Step-by-step compound interest method."},
        {"level": "application", "type": "symbolic_entry", "prompt": "Write the formula for the total compound amount $A$ on principal $P$ at $r\\%$ per annum for $n$ years.", "correct": "P*(1 + r/100)^n",
         "explanation": "A = P * (1 + r/100)^n."},
        {"level": "error_analysis", "type": "single_choice", "prompt": "A student was asked to find the simple interest on \₦$60,000$ for $8\\text{ months}$ at $5\\%$ per annum. The student computed $\\frac{60,000 \\times 5 \\times 8}{100} = 24,000$. What was the mistake?", "correct": "Substituted $8$ years instead of converting months to years ($8/12 = 2/3\\text{ years}$).",
         "d1": ("Divided by 100 instead of 12.", "MIS-FORMULA-CONFUSION", "Dividing by 100 is standard; the time unit was wrong."),
         "d2": ("Used 5% instead of 0.05.", "MIS-PERCENT-DOUBLE-DIVIDE", "Rate 5 over 100 already converts percentage."),
         "d3": ("Multiplied principal and rate incorrectly.", "MIS-ARITH-SLIP", "60,000 × 5 = 300,000 was correct."),
         "explanation": "Time must be in years: T = 8/12 = 2/3 years. Correct I = (60,000 × 5 × 2/3)/100 = ₦2,000."},
        {"level": "error_analysis", "type": "single_choice", "prompt": "To find compound interest on \₦$80,000$ at $10\\%$ for 2 years, a student calculated $I = \\frac{80,000 \\times 10 \\times 2}{100} = 16,000$. Why is this incomplete?", "correct": "Used the simple interest formula, neglecting the interest earned on Year 1 interest (\₦$800$).",
         "d1": ("The rate should have been squared to 100%.", "MIS-RATE-SQUARE", "Rate is not squared."),
         "d2": ("Should have divided by 200.", "MIS-DIVISOR-CONFUSION", "Standard divisor is 100."),
         "d3": ("There is no mistake; CI and SI are identical for 2 years.", "MIS-EQUIVALENCE-SLIP", "CI and SI are identical only for the first year."),
         "explanation": "Year 1 interest is ₦8,000. Year 2 interest is 10% of ₦88,000 = ₦8,800. Total CI = ₦16,800."},
        {"level": "challenge_transfer", "type": "single_choice", "prompt": "What is the difference between Compound Interest and Simple Interest on \₦$80,000$ for $2$ years at $5\\%$ per annum?", "correct": "\₦$200$",
         "d1": ("\₦$400$", "MIS-DOUBLE-DIFF", "Difference is P × (R/100)² = 80,000 × 0.0025 = ₦200."),
         "d2": ("\₦$100$", "MIS-HALF-DIFF", "SI = ₦8,000; CI = 80,000(1.05)² - 80,000 = 88,200 - 80,000 = ₦8,200. Diff = ₦200."),
         "d3": ("\₦$0$", "MIS-NO-DIFF", "Difference between CI and SI over 2 years is non-zero."),
         "explanation": "Difference = P(R/100)² = 80,000 × (5/100)² = 80,000 × 0.0025 = ₦200."},
        {"level": "challenge_transfer", "type": "single_choice", "prompt": "In how many years will an investment double itself at $12.5\\%$ simple interest per annum?", "correct": "$8\\text{ years}$",
         "d1": ("$6\\text{ years}$", "MIS-ARITH-SLIP", "To double, I = P. T = (100 × P) / (P × 12.5) = 100 / 12.5 = 8 years."),
         "d2": ("$10\\text{ years}$", "MIS-ROUGH-GUESS", "12.5 × 8 = 100%."),
         "d3": ("$12\\text{ years}$", "MIS-RATE-CONFUSION", "8 years is exact."),
         "explanation": "For investment to double, I = P. P = (P × 12.5 × T)/100 => T = 100 / 12.5 = 8 years."},
    ])

    return items
