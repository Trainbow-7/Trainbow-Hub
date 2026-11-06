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

    # Import existing l1, l2, l3, l4, l5 from waec.py
    from .waec import get_waec_items as get_waec_base
    items.extend(get_waec_base())

    # Now add lessons l6 through l19
    # -------------------------------------------------------------------------
    # l6: Linear Equations & Word Problems
    # -------------------------------------------------------------------------
    add("waec-m3", "l6", "top-waec-alg-01", "Solve linear equations in one variable and word problems", [
        {"level": "understanding", "type": "single_choice", "prompt": "Solve for $x$: $$3(2x - 5) = 21$$", "correct": "6",
         "d1": ("5", "MIS-ARITH-SLIP", "6x - 15 = 21 => 6x = 36 => x = 6."), "d2": ("4", "MIS-SIGN-SLIP", "Check 21 + 15 = 36."), "d3": ("7", "MIS-DISTRIB-FAIL", "Must distribute 3 to both terms inside parentheses."), "explanation": "6x - 15 = 21 => 6x = 36 => x = 6."},
        {"level": "understanding", "type": "single_choice", "prompt": "Solve for $y$: $$\\frac{y + 3}{4} = \\frac{y - 1}{2}$$", "correct": "5",
         "d1": ("3", "MIS-CROSS-MULT", "Cross-multiply: 2(y + 3) = 4(y - 1) => 2y + 6 = 4y - 4 => 2y = 10 => y = 5."), "d2": ("4", "MIS-ARITH-SLIP", "Check 2y = 10."), "d3": ("7", "MIS-SIGN-SLIP", "6 + 4 = 10."), "explanation": "2(y + 3) = 4(y - 1) => 2y + 6 = 4y - 4 => 2y = 10 => y = 5."},
        {"level": "understanding", "type": "single_choice", "prompt": "Which operation clears the fraction from $$\\frac{2x - 1}{3} = 5$$ in a single step?", "correct": "Multiply both sides of the equation by $3$.",
         "d1": ("Subtract 1 from both sides.", "MIS-ORDER-OPS", "Cannot subtract numerator terms before clearing denominator."), "d2": ("Divide both sides by 2.", "MIS-DIVIDE-EARLY", "Dividing by 2 complicates fractions."), "d3": ("Add 3 to both sides.", "MIS-INVERSE-OP", "Multiplication is the inverse of division by 3."), "explanation": "Multiplying both sides by 3 gives 2x - 1 = 15."},
        {"level": "understanding", "type": "true_false_justification", "prompt": "True or False: If $a(x + b) = c$, then $x = \\frac{c - ab}{a}$.", "correct": "True: Expanding gives $ax + ab = c \\implies ax = c - ab \\implies x = \\frac{c - ab}{a}$.",
         "d1": ("False: The correct solution is x = c/a - b.", "MIS-EQUIV-CONFUSION", "c/a - b is identical to (c - ab)/a."), "d2": ("False: b cannot be subtracted from c.", "MIS-ALGEBRA-RULES", "ab is a term and can be subtracted."), "d3": ("True: But only when a is a positive integer.", "MIS-RESTRICTION", "Holds for all non-zero real numbers a."), "explanation": "ax + ab = c => ax = c - ab => x = (c - ab)/a."},
        {"level": "application", "type": "single_choice", "prompt": "The sum of three consecutive odd integers is $57$. Find the largest integer.", "correct": "21",
         "d1": ("19", "MIS-MIDDLE-TERM", "19 is the middle integer (x = 17, x+2 = 19, x+4 = 21)."), "d2": ("17", "MIS-SMALLEST-TERM", "17 is the smallest integer."), "d3": ("23", "MIS-ARITH-SLIP", "17 + 19 + 21 = 57. Largest is 21."), "explanation": "Let numbers be n, n+2, n+4. 3n + 6 = 57 => 3n = 51 => n = 17. Largest = 21."},
        {"level": "application", "type": "single_choice", "prompt": "A mother is currently $4$ times as old as her daughter. In $6$ years, she will be $3$ times as old as her daughter. How old is the daughter now?", "correct": "12\\text{ years}",
         "d1": ("10\\text{ years}", "MIS-ARITH-SLIP", "4d + 6 = 3(d + 6) => 4d + 6 = 3d + 18 => d = 12."), "d2": ("14\\text{ years}", "MIS-EQUATION-SETUP", "Check: 4(12)=48. In 6 yrs: 54 and 18; 54 = 3(18)."), "d3": ("8\\text{ years}", "MIS-SCALE-SLIP", "d = 12 years."), "explanation": "M = 4D. M + 6 = 3(D + 6) => 4D + 6 = 3D + 18 => D = 12 years."},
        {"level": "application", "type": "single_choice", "prompt": "The perimeter of a rectangle is $54\\text{ cm}$. If the length is $3\\text{ cm}$ longer than twice the width, calculate the width.", "correct": "8\\text{ cm}",
         "d1": ("10\\text{ cm}", "MIS-ARITH-SLIP", "2(L + W) = 54 => L + W = 27. (2W + 3) + W = 27 => 3W = 24 => W = 8."), "d2": ("19\\text{ cm}", "MIS-LENGTH-VALUE", "19 cm is the length, not width."), "d3": ("6\\text{ cm}", "MIS-FORMULA-SLIP", "Check 2(19 + 8) = 2(27) = 54 cm."), "explanation": "2(2W + 3 + W) = 54 => 6W + 6 = 54 => 6W = 48 => W = 8 cm."},
        {"level": "application", "type": "numeric_entry", "prompt": "Solve for $x$: $$5x - 7 = 3x + 15$$", "correct": 11,
         "explanation": "5x - 3x = 15 + 7 => 2x = 22 => x = 11."},
        {"level": "application", "type": "ordering", "prompt": "Arrange the steps to solve the linear equation $\\frac{x}{2} + 3 = \\frac{x}{3} + 5$:", "correct": "A",
         "steps": ["Multiply every term on both sides by the LCM of 2 and 3, which is 6.", "Simplify to obtain: 3x + 18 = 2x + 30.", "Collect like terms: 3x - 2x = 30 - 18.", "State the solution: x = 12."], "explanation": "Standard procedure for clearing fractional linear equations."},
        {"level": "application", "type": "symbolic_entry", "prompt": "Solve for $x$ in terms of $a$ and $b$: $$ax - b = 0$$ (where $a \\ne 0$).", "correct": "b/a",
         "explanation": "ax = b => x = b/a."},
        {"level": "error_analysis", "type": "single_choice", "prompt": "A student solved $2(3x - 4) = 20$ as follows:\nStep 1: $6x - 4 = 20$\nStep 2: $6x = 24$\nStep 3: $x = 4$\nWhat mistake occurred?", "correct": "In Step 1: Failed to distribute the multiplier $2$ to $-4$ (should be $6x - 8 = 20$).",
         "d1": ("In Step 2: Added 4 instead of subtracting 4.", "MIS-SIGN-SLIP", "Adding 4 to 20 was correct if line 1 had -4."), "d2": ("In Step 3: Divided 24 by 6 incorrectly.", "MIS-ARITH-SLIP", "24 / 6 = 4 is correct division."), "d3": ("There is no mistake; x = 4 is the exact solution.", "MIS-NO-ERROR-CLAIM", "Testing x=4: 2(3(4)-4) = 2(8) = 16 ≠ 20."), "explanation": "2*(3x - 4) = 6x - 8, so Step 1 had a distribution error."},
        {"level": "error_analysis", "type": "single_choice", "prompt": "In solving $$\\frac{x+2}{3} = 4$$, a student subtracted $2$ from both sides first to get $$\\frac{x}{3} = 2$$. What was the error?", "correct": "The numerator $+2$ is inside the grouping divided by $3$; both sides must be multiplied by $3$ before subtracting $2$.",
         "d1": ("Should have added 2 instead of subtracting.", "MIS-SIGN-CONFUSION", "The whole numerator is divided by 3."), "d2": ("Should have divided 4 by 3.", "MIS-OPERATION-CONFUSION", "Must multiply by 3."), "d3": ("There is no error.", "MIS-NO-ERROR-CLAIM", "Subtracting 2 from (x+2)/3 is invalid algebra."), "explanation": "Must multiply by 3 first: x + 2 = 12 => x = 10."},
        {"level": "challenge_transfer", "type": "single_choice", "prompt": "A man invested a total of \₦$500,000$ in two schemes. Scheme A pays $6\\%$ per annum and Scheme B pays $8\\%$ per annum. If his total annual interest is \₦$36,000$, how much was invested in Scheme B?", "correct": "\₦$300,000$",
         "d1": ("\₦$200,000$", "MIS-SCHEME-A", "₦200,000 was invested in Scheme A (0.06 × 200,000 = 12,000)."), "d2": ("\₦$250,000$", "MIS-EQUAL-SPLIT", "0.07 × 500,000 = 35,000 ≠ 36,000."), "d3": ("\₦$350,000$", "MIS-ARITH-SLIP", "0.06(500,000 - x) + 0.08x = 36,000 => 30,000 + 0.02x = 36,000 => x = 300,000."), "explanation": "0.06(500k - x) + 0.08x = 36k => 30k + 0.02x = 36k => 0.02x = 6k => x = ₦300,000."},
        {"level": "challenge_transfer", "type": "single_choice", "prompt": "A train travels at speed $v\\text{ km/h}$ for $3\\text{ hours}$ and at $(v + 20)\\text{ km/h}$ for $2\\text{ hours}$. If total distance is $390\\text{ km}$, find $v$.", "correct": "70\\text{ km/h}",
         "d1": ("60\\text{ km/h}", "MIS-ARITH-SLIP", "3v + 2(v + 20) = 390 => 5v + 40 = 390 => 5v = 350 => v = 70."), "d2": ("80\\text{ km/h}", "MIS-SPEED-GUESS", "Check: 3(70) + 2(90) = 210 + 180 = 390 km."), "d3": ("65\\text{ km/h}", "MIS-AVERAGE-SLIP", "v = 70 km/h."), "explanation": "3v + 2v + 40 = 390 => 5v = 350 => v = 70 km/h."},
    ])

    return items
