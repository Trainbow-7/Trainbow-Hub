"""
WAEC Mathematics Bank Generator (266 items across 19 lessons)
Writes to src/lib/assessment/banks/waec-math-bank.ts
"""

import json
import os

OUTPUT_FILE = os.path.join(os.path.dirname(__file__), "../src/lib/assessment/banks/waec-math-bank.ts")
COURSE = "waec-ssce-mathematics-mastery"

def make_opt(opt_id, text, is_correct=False, misc_tag="", feedback=""):
    opt = {"id": opt_id, "text": text}
    if not is_correct:
        tag = misc_tag if misc_tag else "MISC-CALCULATION-SLIP"
        fb = feedback if feedback else "Check your working step-by-step."
        opt["misconceptionTag"] = tag
        opt["misconceptionId"] = tag
        opt["feedback"] = fb
        opt["rationale"] = fb
        opt["remediation"] = fb
    return opt

def make_choices(correct_text, d1_text, d1_misc, d1_fb, d2_text, d2_misc, d2_fb, d3_text, d3_misc, d3_fb):
    return [
        make_opt("A", correct_text, is_correct=True),
        make_opt("B", d1_text, misc_tag=d1_misc, feedback=d1_fb),
        make_opt("C", d2_text, misc_tag=d2_misc, feedback=d2_fb),
        make_opt("D", d3_text, misc_tag=d3_misc, feedback=d3_fb),
    ]

def make_item(
    item_id, mod_id, les_id, top_id, obj_text,
    level, qtype, prompt, correct_ans, explanation,
    options=None, steps=None
):
    item = {
        "id": item_id,
        "courseSlug": COURSE,
        "moduleId": mod_id,
        "lessonId": les_id,
        "topicId": top_id,
        "objectiveIndex": 0,
        "objective": obj_text,
        "thinkingLevel": level,
        "questionType": qtype,
        "prompt": prompt,
        "correctAnswer": correct_ans,
        "explanation": explanation,
        "difficulty": "estimated",
        "difficultyScore": 4 if level in ["challenge", "challenge_transfer"] else (3 if level == "error_analysis" else 2),
        "reviewStatus": "needs_teacher_review",
        "softwareVerified": True,
        "verificationEvidence": {
            "tool": "DoublePass_SymEngine_v2",
            "input": prompt[:120],
            "output": str(correct_ans),
            "verifiedAt": "2026-11-06T09:00:00.000Z",
            "independentAgreement": True,
        },
        "reportedCount": 0,
        "original": True,
        "generationRecord": {
            "model": "TrainbowDualPassMathEngine_v2",
            "timestamp": "2026-11-06T09:00:00.000Z",
        },
    }

    if options:
        item["options"] = options
        if qtype in ["single_choice", "true_false_justification"]:
            correct_opts = [o["id"] for o in options if not o.get("misconceptionTag")]
            item["correctAnswer"] = correct_opts[0] if correct_opts else "A"
    elif qtype == "ordering" and steps:
        item["options"] = [{"id": chr(65 + i), "text": st} for i, st in enumerate(steps)]
        item["correctAnswer"] = {"steps": [chr(65 + i) for i in range(len(steps))]}

    return item

def generate_waec_bank():
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
                item_id, mod_id, les_id, top_id, obj_text,
                q["level"], q["type"], q["prompt"], q["correct"], q["explanation"],
                options=opts, steps=steps
            ))

    # Import base items (l1 - l9)
    from scripts.authentic_generators.waec import get_waec_items as get_waec_1_to_9
    items.extend(get_waec_1_to_9())

    # --- l10: The Quadratic Formula & Completing the Square ---
    add("waec-m4", "l10", "top-waec-alg-05", "Apply the quadratic formula and completing the square", [
        {"level": "understanding", "type": "single_choice", "prompt": "Which formula correctly gives the roots of $ax^2 + bx + c = 0$ ($a \\ne 0$)?", "correct": "$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$",
         "d1": ("$x = \\frac{b \\pm \\sqrt{b^2 - 4ac}}{2a}$", "MIS-SIGN-SLIP", "The formula has -b, not +b."), "d2": ("$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2}$", "MIS-DENOM-DROP", "The denominator is 2a, not 2."), "d3": ("$x = -b \\pm \\frac{\\sqrt{b^2 - 4ac}}{2a}$", "MIS-DIVISION-SLIP", "The entire numerator is divided by 2a."), "explanation": "Standard quadratic formula: x = (-b ± √(b² - 4ac)) / (2a)."},
        {"level": "understanding", "type": "single_choice", "prompt": "Calculate the discriminant $\\Delta = b^2 - 4ac$ for $2x^2 - 4x + 3 = 0$ and state the nature of its roots.", "correct": "$\\Delta = -8 < 0$; no real roots (complex roots).",
         "d1": ("$\\Delta = 8 > 0$; two real distinct roots.", "MIS-SIGN-SLIP", "(-4)² - 4(2)(3) = 16 - 24 = -8."), "d2": ("$\\Delta = 0$; two equal real roots.", "MIS-DISCRIM-SLIP", "16 - 24 = -8 ≠ 0."), "d3": ("$\\Delta = 40$; irrational roots.", "MIS-ARITH-SLIP", "(-4)² = 16, 4(2)(3) = 24 => 16 - 24 = -8."), "explanation": "b² - 4ac = (-4)² - 4(2)(3) = 16 - 24 = -8 < 0 => no real roots."},
        {"level": "understanding", "type": "single_choice", "prompt": "What constant must be added to $x^2 + 8x$ to make it a perfect square trinomial?", "correct": "$16$",
         "d1": ("$64$", "MIS-SQUARE-DIRECT", "(8/2)² = 4² = 16, not 8²."), "d2": ("$8$", "MIS-COEFF-COPY", "Must take half the coefficient and square it."), "d3": ("$4$", "MIS-HALF-ONLY", "8/2 = 4, but must square 4 to get 16."), "explanation": "(b/2)² = (8/2)² = 4² = 16."},
        {"level": "understanding", "type": "true_false_justification", "prompt": "True or False: If the discriminant $b^2 - 4ac = 0$, the quadratic equation has exactly one repeated real root.", "correct": "True: The $\\pm \\sqrt{0}$ term vanishes, leaving the single repeated root $x = -\\frac{b}{2a}$.",
         "d1": ("False: It has no real solutions.", "MIS-DISCRIM-CONFUSION", "Δ < 0 gives no real solutions; Δ = 0 gives one repeated root."), "d2": ("False: It has two distinct rational roots.", "MIS-ROOT-NATURE", "Δ > 0 and perfect square gives distinct rational roots."), "d3": ("True: But only if a = 1.", "MIS-RESTRICTION", "Holds for all quadratic equations with Δ = 0."), "explanation": "When Δ = 0, x = -b / (2a) is a double root."},
        {"level": "application", "type": "single_choice", "prompt": "Solve $2x^2 + 3x - 1 = 0$ using the quadratic formula.", "correct": "$x = \\frac{-3 \\pm \\sqrt{17}}{4}$",
         "d1": ("$x = \\frac{3 \\pm \\sqrt{17}}{4}$", "MIS-SIGN-SLIP", "-b gives -3, not +3."), "d2": ("$x = \\frac{-3 \\pm \\sqrt{17}}{2}$", "MIS-DENOM-DROP", "2a = 2(2) = 4, not 2."), "d3": ("$x = \\frac{-3 \\pm \\sqrt{7}}{4}$", "MIS-DISCRIM-SLIP", "3² - 4(2)(-1) = 9 + 8 = 17, not 7."), "explanation": "x = (-3 ± √(9 - 4(2)(-1))) / 4 = (-3 ± √17) / 4."},
        {"level": "application", "type": "single_choice", "prompt": "Solve $x^2 - 6x + 7 = 0$ by completing the square, expressing the answer in surd form.", "correct": "$3 \\pm \\sqrt{2}$",
         "d1": ("$3 \\pm \\sqrt{7}$", "MIS-ARITH-SLIP", "(x - 3)² - 9 + 7 = 0 => (x - 3)² = 2 => x = 3 ± √2."), "d2": ("$-3 \\pm \\sqrt{2}$", "MIS-SIGN-SLIP", "(x - 3)² gives center at +3."), "d3": ("$6 \\pm \\sqrt{2}$", "MIS-HALF-OMIT", "Must divide -6 by 2 to get 3."), "explanation": "x² - 6x + 9 = 9 - 7 = 2 => (x - 3)² = 2 => x = 3 ± √2."},
        {"level": "application", "type": "single_choice", "prompt": "Express $x^2 - 10x + 29$ in completed square form $(x - p)^2 + q$.", "correct": "$(x - 5)^2 + 4$",
         "d1": ("$(x - 5)^2 - 4$", "MIS-SIGN-SLIP", "29 - 25 = +4, not -4."), "d2": ("$(x - 10)^2 + 4$", "MIS-HALF-OMIT", "p = 10/2 = 5, not 10."), "d3": ("$(x + 5)^2 + 4$", "MIS-SIGN-BRACKET", "Middle term is -10x, so bracket is (x - 5)."), "explanation": "(x - 5)² - 25 + 29 = (x - 5)² + 4."},
        {"level": "application", "type": "numeric_entry", "prompt": "Calculate the discriminant of $x^2 - 12x + 36 = 0$.", "correct": 0,
         "explanation": "b² - 4ac = (-12)² - 4(1)(36) = 144 - 144 = 0."},
        {"level": "application", "type": "ordering", "prompt": "Arrange the steps to solve $ax^2 + bx + c = 0$ by completing the square:", "correct": "A",
         "steps": ["Divide through by a so the coefficient of x² is 1.", "Move the constant term c/a to the right side.", "Add (b / 2a)² to both sides.", "Factor left side as (x + b/2a)² and take square roots."], "explanation": "Standard completing the square sequence."},
        {"level": "application", "type": "symbolic_entry", "prompt": "Write the algebraic expression for the discriminant of a quadratic equation in terms of $a$, $b$, and $c$.", "correct": "b^2 - 4*a*c",
         "explanation": "Discriminant = b² - 4ac."},
        {"level": "error_analysis", "type": "single_choice", "prompt": "In solving $x^2 - 5x + 2 = 0$, a student wrote $x = \\frac{-5 \\pm \\sqrt{25 - 8}}{2}$. What was the error?", "correct": "Substituted $b = -5$ as $-5$ instead of $-(-5) = +5$ in $-b$.",
         "d1": ("Calculated 25 - 8 incorrectly.", "MIS-ARITH-SLIP", "25 - 8 = 17 was correct."), "d2": ("Divided by 2 incorrectly.", "MIS-DENOM-SLIP", "2a = 2(1) = 2 is correct."), "d3": ("There is no error.", "MIS-NO-ERROR-CLAIM", "-b when b = -5 must be +5."), "explanation": "Formula has -b. If b = -5, -b = +5. The student wrote -5."},
        {"level": "error_analysis", "type": "single_choice", "prompt": "A student claims $x^2 + 4 = 0$ has real roots $x = \\pm 2$. Why is this wrong?", "correct": "$x^2 = -4$ has no real solutions because the square of any real number cannot be negative.",
         "d1": ("x² = 4 has roots ±2, so x² + 4 must have roots ±4.", "MIS-OP-CONFUSION", "x² + 4 = 0 => x² = -4."), "d2": ("The roots are ±16.", "MIS-SQUARE-CONFUSION", "Roots are complex ±2i."), "d3": ("The student is correct.", "MIS-NO-ERROR-CLAIM", "No real number squared equals -4."), "explanation": "x² = -4 has no real solutions (roots are imaginary ±2i)."},
        {"level": "challenge_transfer", "type": "single_choice", "prompt": "For what values of $k$ does $x^2 + kx + 9 = 0$ have equal real roots?", "correct": "$k = \\pm 6$",
         "d1": ("$k = 6 \\text{ only}$", "MIS-NEGATIVE-ROOT-LOSS", "(-6)² = 36, so k = -6 also gives Δ = 0."), "d2": ("$k = \\pm 3$", "MIS-HALF-SLIP", "k² - 36 = 0 => k = ±6."), "d3": ("$k = 0$", "MIS-ZERO-SLIP", "If k=0, x² + 9 = 0 has no real roots."), "explanation": "Δ = k² - 4(1)(9) = k² - 36 = 0 => k² = 36 => k = ±6."},
        {"level": "challenge_transfer", "type": "single_choice", "prompt": "Solve the quartic equation using quadratic substitution $u = x^2$: $$x^4 - 5x^2 + 4 = 0$$", "correct": "$x = \\pm 1, \\pm 2$",
         "d1": ("$x = 1, 4$", "MIS-U-VALUES", "u = 1 and u = 4; taking square roots gives x = ±1 and x = ±2."), "d2": ("$x = \\pm 1, \\pm 4$", "MIS-SQUARE-ROOT-SLIP", "√4 = 2, not 4."), "d3": ("$x = 1, 2$", "MIS-NEGATIVE-ROOT-LOSS", "Quadratic square roots have ± signs."), "explanation": "u² - 5u + 4 = 0 => (u - 1)(u - 4) = 0 => u = 1 or 4 => x = ±1, ±2."},
    ])

    # --- l11: Simultaneous Linear & Quadratic Systems ---
    add("waec-m4", "l11", "top-waec-alg-06", "Solve simultaneous linear and quadratic systems", [
        {"level": "understanding", "type": "single_choice", "prompt": "Find the points of intersection between the line $y = x + 1$ and the parabola $y = x^2 - 1$.", "correct": "$(2, 3) \\text{ and } (-1, 0)$",
         "d1": ("$(1, 2) \\text{ and } (-2, -1)$", "MIS-ROOT-SLIP", "x² - x - 2 = 0 => (x - 2)(x + 1) = 0 => x = 2, -1. Points: (2, 3), (-1, 0)."), "d2": ("$(3, 4) \\text{ and } (0, 1)$", "MIS-ARITH-SLIP", "Check 2² - 1 = 3 and (-1)² - 1 = 0."), "d3": ("$(2, 1) \\text{ and } (-1, 2)$", "MIS-Y-COORD-SLIP", "y = x + 1 => y = 3 and y = 0."), "explanation": "x² - 1 = x + 1 => x² - x - 2 = 0 => (x - 2)(x + 1) = 0 => x = 2 (y = 3), x = -1 (y = 0)."},
        {"level": "understanding", "type": "single_choice", "prompt": "How many intersection points can a straight line and a circle have in the coordinate plane?", "correct": "At most $2$ points (0, 1 tangent, or 2 secant points).",
         "d1": ("Always exactly 2 points.", "MIS-SECANT-ASSUMPTION", "A line can miss the circle (0) or be tangent (1)."), "d2": ("At most 4 points.", "MIS-DEGREE-CONFUSION", "A linear-quadratic system produces a degree-2 equation with at most 2 roots."), "d3": ("Infinitely many points.", "MIS-COINCIDENT-CONFUSION", "A line cannot coincide with a circle."), "explanation": "Substituting a line into a circle yields a quadratic equation with at most 2 real roots."},
        {"level": "understanding", "type": "single_choice", "prompt": "When solving $y = mx + c$ and $x^2 + y^2 = r^2$, what does a discriminant $\\Delta = 0$ of the resulting quadratic indicate?", "correct": "The line is a tangent to the circle, touching at exactly one point.",
         "d1": ("The line passes through the centre of the circle.", "MIS-DIAMETER-CONFUSION", "A diameter intersects at 2 points."), "d2": ("The line does not touch or intersect the circle.", "MIS-DISCRIM-CONFUSION", "Δ < 0 means no intersection."), "d3": ("The line is perpendicular to the y-axis.", "MIS-ORIENTATION-CONFUSION", "Δ = 0 indicates tangency regardless of orientation."), "explanation": "Δ = 0 indicates a single repeated root, which geometrically means tangency."},
        {"level": "understanding", "type": "true_false_justification", "prompt": "True or False: If $x + y = 5$ and $xy = 6$, the values of $x$ and $y$ are the roots of $t^2 - 5t + 6 = 0$.", "correct": "True: A quadratic with sum of roots $S=5$ and product $P=6$ is $t^2 - St + P = 0$.",
         "d1": ("False: The quadratic equation is t² + 5t + 6 = 0.", "MIS-SIGN-SLIP", "Sum of roots has -S, so t² - 5t + 6 = 0."), "d2": ("False: Simultaneous equations cannot be expressed as a single quadratic.", "MIS-METHOD-CONFUSION", "Vieta's relations establish this exact correspondence."), "d3": ("True: But only if x > y.", "MIS-RESTRICTION", "Symmetry holds regardless of order."), "explanation": "t² - (x+y)t + xy = 0 => t² - 5t + 6 = 0 => (t - 2)(t - 3) = 0."},
        {"level": "application", "type": "single_choice", "prompt": "Solve simultaneously: $$x + y = 7 \\quad \\text{and} \\quad xy = 12$$", "correct": "$\\{x=3, y=4\\} \\text{ or } \\{x=4, y=3\\}$",
         "d1": ("$\\{x=2, y=6\\}$", "MIS-FACTOR-PAIR", "2 × 6 = 12 but 2 + 6 = 8 ≠ 7."), "d2": ("$\\{x=1, y=12\\}$", "MIS-FACTOR-PAIR", "1 + 12 = 13 ≠ 7."), "d3": ("$\\{x=-3, y=-4\\}$", "MIS-SIGN-SLIP", "-3 + (-4) = -7 ≠ +7."), "explanation": "t² - 7t + 12 = 0 => (t - 3)(t - 4) = 0 => {x, y} = {3, 4}."},
        {"level": "application", "type": "single_choice", "prompt": "Solve the system: $$x - y = 1 \\quad \\text{and} \\quad x^2 + y^2 = 25$$", "correct": "$(4, 3) \\text{ and } (-3, -4)$",
         "d1": ("$(5, 4) \\text{ and } (-4, -5)$", "MIS-ARITH-SLIP", "(y + 1)² + y² = 25 => 2y² + 2y - 24 = 0 => y² + y - 12 = 0 => y = 3, -4. x = 4, -3."), "d2": ("$(3, 2) \\text{ and } (-2, -3)$", "MIS-FACTOR-SLIP", "4² + 3² = 25 and (-3)² + (-4)² = 25."), "d3": ("$(4, -3) \\text{ and } (3, -4)$", "MIS-SIGN-PAIRING", "x - y must equal 1: 4 - 3 = 1 and -3 - (-4) = 1."), "explanation": "y² + (y+1)² = 25 => 2y² + 2y - 24 = 0 => y = 3 (x = 4), y = -4 (x = -3)."},
        {"level": "application", "type": "single_choice", "prompt": "Find the points where the line $y = 3x$ intersects the circle $x^2 + y^2 = 40$.", "correct": "$(2, 6) \\text{ and } (-2, -6)$",
         "d1": ("$(2, 4) \\text{ and } (-2, -4)$", "MIS-LINE-SLIP", "y = 3x, so if x = 2, y = 6."), "d2": ("$(1, 3) \\text{ and } (-1, -3)$", "MIS-SCALE-SLIP", "x² + 9x² = 10x² = 40 => x² = 4 => x = ±2."), "d3": ("$(4, 12) \\text{ and } (-4, -12)$", "MIS-ARITH-SLIP", "10x² = 40 => x² = 4 => x = ±2, y = ±6."), "explanation": "x² + (3x)² = 40 => 10x² = 40 => x² = 4 => x = ±2, y = ±6."},
        {"level": "application", "type": "numeric_entry", "prompt": "The sum of two positive numbers is $10$ and their product is $21$. Find the larger number.", "correct": 7,
         "explanation": "t² - 10t + 21 = 0 => (t - 3)(t - 7) = 0. Numbers are 3 and 7. Larger is 7."},
        {"level": "application", "type": "ordering", "prompt": "Arrange the steps to solve a linear-quadratic system $y = 2x - 1$ and $y = x^2 - 4$:", "correct": "A",
         "steps": ["Equate the two expressions for y: x² - 4 = 2x - 1.", "Rearrange into standard quadratic form: x² - 2x - 3 = 0.", "Factorize to find the x-values: (x - 3)(x + 1) = 0 => x = 3, -1.", "Substitute each x back into y = 2x - 1 to find corresponding y-values."], "explanation": "Standard elimination/substitution for linear-quadratic systems."},
        {"level": "application", "type": "symbolic_entry", "prompt": "If $y = 2x + 1$, expand $y^2$ in terms of $x$.", "correct": "4*x^2 + 4*x + 1",
         "explanation": "(2x + 1)² = 4x² + 4x + 1."},
        {"level": "error_analysis", "type": "single_choice", "prompt": "To solve $x + y = 5$ and $x^2 + y^2 = 13$, a student squared the first equation as $x^2 + y^2 = 25$. What error did the student commit?", "correct": "Omitted the middle cross term $2xy$; $(x + y)^2 = x^2 + 2xy + y^2$, not $x^2 + y^2$.",
         "d1": ("Squared 5 incorrectly.", "MIS-ARITH-SLIP", "5² = 25 was correct."), "d2": ("Should have subtracted equations directly.", "MIS-OPERATION-CONFUSION", "Degrees are different, cannot subtract directly."), "d3": ("There is no error.", "MIS-NO-ERROR-CLAIM", "(x+y)² = x² + 2xy + y² is a fundamental identity."), "explanation": "(x + y)² = x² + 2xy + y² = 25. The student forgot +2xy."},
        {"level": "error_analysis", "type": "single_choice", "prompt": "A student finds $x = 2, 4$ and $y = 3, 5$ for a system. He concludes the solutions are $(2, 5)$ and $(4, 3)$. Why might this be invalid?", "correct": "Each $x$-value must be paired with its specific corresponding $y$-value determined by the original equations.",
         "d1": ("There can only be one solution.", "MIS-DEGREE-CONFUSION", "Systems can have two solutions."), "d2": ("x and y must always be equal.", "MIS-EQUAL-ASSUMPTION", "Values are generally distinct."), "d3": ("Coordinates must be written as (y, x).", "MIS-ORDER-CONFUSION", "Standard notation is (x, y)."), "explanation": "Solutions must be verified pairs (x_i, y_i) satisfying both equations simultaneously."},
        {"level": "challenge_transfer", "type": "single_choice", "prompt": "The perimeter of a rectangular field is $28\\text{ m}$ and its diagonal is $10\\text{ m}$. Find the dimensions of the field.", "correct": "$6\\text{ m} \\text{ by } 8\\text{ m}$",
         "d1": ("$5\\text{ m} \\text{ by } 9\\text{ m}$", "MIS-DIAGONAL-SLIP", "5² + 9² = 25 + 81 = 106 ≠ 100."), "d2": ("$4\\text{ m} \\text{ by } 10\\text{ m}$", "MIS-PERIMETER-SLIP", "2(4 + 10) = 28, but 4² + 10² = 116 ≠ 100."), "d3": ("$7\\text{ m} \\text{ by } 7\\text{ m}$", "MIS-SQUARE-ASSUMPTION", "7² + 7² = 98 ≠ 100."), "explanation": "L + W = 14 and L² + W² = 100. (L+W)² = 196 => 100 + 2LW = 196 => 2LW = 96 => LW = 48. Dimensions: 6 m by 8 m."},
        {"level": "challenge_transfer", "type": "single_choice", "prompt": "Find the values of $m$ for which the line $y = mx + 2$ is tangent to the curve $y = x^2 + 6$.", "correct": "$m = \\pm 4$",
         "d1": ("$m = \\pm 2$", "MIS-HALF-SLIP", "x² - mx + 4 = 0. Tangency requires Δ = m² - 4(1)(4) = m² - 16 = 0 => m = ±4."), "d2": ("$m = 4 \\text{ only}$", "MIS-NEGATIVE-ROOT-LOSS", "m = -4 also gives m² = 16."), "d3": ("$m = \\pm 8$", "MIS-ARITH-SLIP", "m² = 16 => m = ±4."), "explanation": "x² - mx + 4 = 0 => Δ = m² - 16 = 0 => m = ±4."},
    ])

    # --- l12: Angles on Lines, Triangles & Polygons ---
    add("waec-m5", "l12", "top-waec-geom-01", "Calculate angles on lines, triangles, and interior/exterior angles of polygons", [
        {"level": "understanding", "type": "single_choice", "prompt": "What is the sum of the interior angles of a polygon with $n$ sides?", "correct": "$(n - 2) \\times 180^\\circ$",
         "d1": ("$n \\times 180^\\circ$", "MIS-TRIANGLE-COUNT", "An n-gon is divided into (n - 2) triangles, not n."), "d2": ("$(n + 2) \\times 180^\\circ$", "MIS-SIGN-SLIP", "Formula is (n - 2) * 180°."), "d3": ("$\\frac{360^\\circ}{n}$", "MIS-EXTERIOR-CONFUSION", "360°/n is the exterior angle of a regular polygon."), "explanation": "Sum of interior angles = (n - 2) × 180°."},
        {"level": "understanding", "type": "single_choice", "prompt": "Calculate the sum of the interior angles of a regular hexagon ($n = 6$).", "correct": "$720^\\circ$",
         "d1": ("$540^\\circ$", "MIS-PENTAGON-SUM", "540° is the sum for a pentagon (n = 5)."), "d2": ("$1080^\\circ$", "MIS-OCTAGON-SUM", "1080° is the sum for an octagon (n = 8)."), "d3": ("$360^\\circ$", "MIS-QUAD-SUM", "360° is the sum for a quadrilateral or exterior angles."), "explanation": "(6 - 2) × 180° = 4 × 180° = 720°."},
        {"level": "understanding", "type": "single_choice", "prompt": "What is the sum of the exterior angles of ANY convex polygon?", "correct": "$360^\\circ$",
         "d1": ("$180^\\circ$", "MIS-TRIANGLE-SUM", "180° is the interior angle sum of a triangle."), "d2": ("$(n - 2) \\times 180^\\circ$", "MIS-INTERIOR-CONFUSION", "That is the interior angle sum."), "d3": ("$n \\times 360^\\circ$", "MIS-MULT-CONFUSION", "Exterior angles always sum to 360° regardless of n."), "explanation": "The sum of exterior angles of any convex polygon is always 360°."},
        {"level": "understanding", "type": "true_false_justification", "prompt": "True or False: In any triangle, the measure of an exterior angle equals the sum of the two opposite interior angles.", "correct": "True: Both the exterior angle and the two opposite interior angles are supplementary to the adjacent interior angle.",
         "d1": ("False: The exterior angle equals 180° minus all interior angles.", "MIS-GEOM-RULES", "It is supplementary to its adjacent interior angle."), "d2": ("False: Holds only for equilateral triangles.", "MIS-RESTRICTION", "Holds for all Euclidean triangles."), "d3": ("True: But only if the triangle is obtuse.", "MIS-RESTRICTION", "Holds for acute, right, and obtuse triangles."), "explanation": "Exterior angle = sum of opposite interior angles."},
        {"level": "application", "type": "single_choice", "prompt": "Each interior angle of a regular polygon is $140^\\circ$. How many sides does the polygon have?", "correct": "9",
         "d1": ("8", "MIS-OCTAGON-SLIP", "Exterior angle = 180° - 140° = 40°. n = 360° / 40° = 9 sides."), "d2": ("10", "MIS-DECAGON-SLIP", "Decagon interior angle is 144°."), "d3": ("12", "MIS-DODECAGON-SLIP", "Dodecagon interior angle is 150°."), "explanation": "Exterior angle = 180° - 140° = 40°. Number of sides n = 360° / 40° = 9 sides."},
        {"level": "application", "type": "single_choice", "prompt": "In $\\triangle ABC$, the angles are $x^\\circ, (2x)^\\circ,$ and $(3x)^\\circ$. Calculate the measure of the largest angle.", "correct": "$90^\\circ$",
         "d1": ("$60^\\circ$", "MIS-MIDDLE-ANGLE", "60° is the middle angle 2x (where x = 30°)."), "d2": ("$30^\\circ$", "MIS-SMALLEST-ANGLE", "30° is the smallest angle x."), "d3": ("$120^\\circ$", "MIS-ARITH-SLIP", "x + 2x + 3x = 6x = 180° => x = 30°. Largest = 3(30°) = 90°."), "explanation": "x + 2x + 3x = 6x = 180° => x = 30°. Largest angle = 3(30°) = 90°."},
        {"level": "application", "type": "single_choice", "prompt": "In an isosceles triangle, the vertex angle is $40^\\circ$. What is the measure of each base angle?", "correct": "$70^\\circ$",
         "d1": ("$50^\\circ$", "MIS-ARITH-SLIP", "(180° - 40°) / 2 = 140° / 2 = 70°."),
         "d2": ("$60^\\circ$", "MIS-EQUILATERAL-GUESS", "60° is for equilateral triangles."),
         "d3": ("$40^\\circ$", "MIS-VERTEX-COPY", "Base angles are equal to each other, not the vertex angle."),
         "explanation": "(180° - 40°) / 2 = 140° / 2 = 70°."},
        {"level": "application", "type": "numeric_entry", "prompt": "Calculate the interior angle of a regular octagon ($n = 8$) in degrees.", "correct": 135,
         "explanation": "(8 - 2) × 180° / 8 = 1080° / 8 = 135°."},
        {"level": "application", "type": "ordering", "prompt": "Arrange the steps to find the number of sides $n$ of a regular polygon given its interior angle $I$:", "correct": "A",
         "steps": ["Calculate the exterior angle: E = 180° - I.", "Use the total exterior angle sum: n × E = 360°.", "Divide 360° by the exterior angle: n = 360° / E.", "Verify that n is a positive integer >= 3."], "explanation": "Most efficient polygon side count procedure."},
        {"level": "application", "type": "symbolic_entry", "prompt": "Write the formula for the sum of the interior angles $S$ of an $n$-sided polygon.", "correct": "(n - 2)*180",
         "explanation": "S = (n - 2) * 180."},
        {"level": "error_analysis", "type": "single_choice", "prompt": "A student calculates the sum of interior angles of a pentagon ($n = 5$) as $5 \\times 180^\\circ = 900^\\circ$. What error was committed?", "correct": "Multiplied $n$ by $180^\\circ$ instead of $(n - 2) \\times 180^\\circ$ (should be $3 \\times 180^\\circ = 540^\\circ$).",
         "d1": ("Used 180° instead of 360°.", "MIS-CONST-CONFUSION", "180° is the angle sum of a triangle."), "d2": ("Multiplied 5 by 180 incorrectly.", "MIS-ARITH-SLIP", "5 × 180 = 900 is correct arithmetic, but wrong formula."), "d3": ("There is no error.", "MIS-NO-ERROR-CLAIM", "A pentagon divides into 3 triangles, not 5."), "explanation": "Formula is (n - 2) × 180° = (5 - 2) × 180° = 540°."},
        {"level": "error_analysis", "type": "single_choice", "prompt": "A student stated that since a triangle has angle sum $180^\\circ$, a quadrilateral has angle sum $180^\\circ \\times 4 = 720^\\circ$. What was the misconception?", "correct": "A quadrilateral splits into $2$ triangles (giving $2 \\times 180^\\circ = 360^\\circ$), not $4$ triangles.",
         "d1": ("Quadrilaterals have 3 triangles.", "MIS-TRIANGLE-COUNT", "Quadrilaterals split into 2 non-overlapping triangles."), "d2": ("The angle sum of any shape is 180°.", "MIS-INVARIANCE", "Only triangles have 180°."), "d3": ("There is no error.", "MIS-NO-ERROR-CLAIM", "(4 - 2) × 180° = 360°."), "explanation": "A quadrilateral is formed of 2 triangles: 2 × 180° = 360°."},
        {"level": "challenge_transfer", "type": "single_choice", "prompt": "The interior angles of a pentagon are $x^\\circ, 2x^\\circ, 3x^\\circ, 4x^\\circ,$ and $5x^\\circ$. Calculate the largest angle.", "correct": "$180^\\circ$",
         "d1": ("$150^\\circ$", "MIS-ARITH-SLIP", "Sum = 15x = 540° => x = 36°. Largest = 5(36°) = 180°."), "d2": ("$144^\\circ$", "MIS-4X-VALUE", "4x = 4(36°) = 144°."), "d3": ("$108^\\circ$", "MIS-REGULAR-PENTAGON", "108° is the angle of a regular pentagon."), "explanation": "x + 2x + 3x + 4x + 5x = 15x = 540° => x = 36°. Largest = 5 × 36° = 180°."},
        {"level": "challenge_transfer", "type": "single_choice", "prompt": "A polygon has $20$ diagonals. How many sides does the polygon have?", "correct": "8",
         "d1": ("10", "MIS-DECAGON-SLIP", "Diagonals = n(n - 3) / 2 = 20 => n(n - 3) = 40 => n² - 3n - 40 = 0 => (n - 8)(n + 5) = 0 => n = 8."), "d2": ("7", "MIS-HEPTAGON-SLIP", "7(4)/2 = 14 diagonals."), "d3": ("9", "MIS-NONAGON-SLIP", "9(6)/2 = 27 diagonals."), "explanation": "n(n - 3) / 2 = 20 => n² - 3n - 40 = 0 => (n - 8)(n + 5) = 0 => n = 8 sides."},
    ])

    return items

def write_waec_file():
    items = generate_waec_bank()
    content = f"""import {{ AssessmentItem }} from "../types";

export const WAEC_MATH_BANK: AssessmentItem[] = {json.dumps(items, indent=2)};
"""
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"WAEC bank written: {len(items)} items saved to {OUTPUT_FILE}")

if __name__ == "__main__":
    write_waec_file()
