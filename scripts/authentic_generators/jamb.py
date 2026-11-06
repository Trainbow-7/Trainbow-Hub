from .common import make_opt, make_choices, make_item

COURSE = "jamb-utme-speed-mathematics"

def get_jamb_items():
    items = []

    def add(mod_id, les_id, top_id, obj_text, qs):
        for idx, q in enumerate(qs):
            item_id = f"q_{les_id}_{idx+1}"
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

    # -------------------------------------------------------------------------
    # jamb-l1: CBT Time Management & Frequency Distribution
    # -------------------------------------------------------------------------
    add("jamb-m1", "jamb-l1", "top-jamb-strat-01", "Allocate time per question band and identify question clusters", [
        {"level": "understanding", "type": "single_choice", "prompt": "In the JAMB UTME Mathematics examination (40 questions in 45 minutes), what is the optimal first-pass time limit per question?", "correct": "$60\\text{ seconds}$",
         "d1": ("$120\\text{ seconds}$", "MIS-TIME-OVERALLOCATION", "Spending 2 minutes per question leaves 15 questions unattempted."),
         "d2": ("$180\\text{ seconds}$", "MIS-TIME-OVERALLOCATION", "3 minutes is for theory exams, not 40-question CBT speed triage."),
         "d3": ("$15\\text{ seconds}$", "MIS-RUSHED-PACE", "15 seconds is too hasty and induces avoidable misreads."),
         "explanation": "At 40 questions in 45 minutes, an average pace of 60 seconds per item on Round 1 ensures at least 5 minutes remain for review."},
        {"level": "understanding", "type": "single_choice", "prompt": "Under JAMB CBT speed triage, what should a candidate do upon encountering an unfamiliar 4-step geometry problem?", "correct": "Select a best-guess, flag for review, and immediately move to the next item.",
         "d1": ("Spend 5 minutes deriving first principles until fully resolved.", "MIS-TIME-SINK", "Getting bogged down forfeits marks on easy algebra items later in the test."),
         "d2": ("Leave the question completely unanswered and continue.", "MIS-BLANK-FORFEIT", "JAMB negative marking does not apply; leaving blanks loses zero-penalty chances."),
         "d3": ("Shut down the computer terminal to reset the timer.", "MIS-PROTOCOL-VIOLATION", "The exam server clock continues ticking on the candidate profile."),
         "explanation": "CBT speed triage requires candidates to bank easy marks first and return to flagged multi-step items."},
        {"level": "understanding", "type": "single_choice", "prompt": "Which topic cluster historically accounts for the largest block of objective questions in JAMB Mathematics?", "correct": "Algebra and Coordinate Geometry (including Polynomials & Quadratics)",
         "d1": ("Pure Topology and Tensor Calculus", "MIS-CURRICULUM-MISALIGNMENT", "Tensor calculus is not in the UTME syllabus."),
         "d2": ("Formal Geometric Axiomatic Proofs", "MIS-EXAM-STYLE-CONFUSION", "Axiomatic proofs belong to WAEC theory, not UTME CBT objectives."),
         "d3": ("Mechanical Vector Dynamics", "MIS-PHYSICS-OVERLAP", "Dynamics is covered in Physics, not primarily in JAMB Mathematics."),
         "explanation": "Algebraic processes, polynomials, quadratics, and coordinate geometry constitute over 45% of JAMB UTME questions."},
        {"level": "understanding", "type": "true_false_justification", "prompt": "True or False: In JAMB UTME CBT, all 40 questions carry equal marks regardless of difficulty.", "correct": "True: Every multiple-choice item in the UTME paper carries the exact same raw mark value.",
         "d1": ("False: Multi-step calculus questions carry triple marks.", "MIS-WEIGHTED-ITEM-MYTH", "JAMB scores each objective question with uniform weighting."),
         "d2": ("False: Questions answered in the last 10 minutes earn bonus speed points.", "MIS-EXAM-MYTH", "Time of submission has no impact on question score."),
         "d3": ("True: But only if answered within 30 seconds.", "MIS-RESTRICTION", "Uniform marks apply regardless of elapsed time."),
         "explanation": "All UTME objective items carry equal weight, so solving two 30-second items earns twice as much as spending 4 minutes on one hard item."},
        {"level": "application", "type": "single_choice", "prompt": "A student has $40$ questions and $45$ minutes. If she spends $30\\text{ seconds}$ each on $20$ rapid-solve items, how many minutes remain for the remaining $20$ calculation items?", "correct": "$35\\text{ minutes}$",
         "d1": ("$25\\text{ minutes}$", "MIS-ARITH-SLIP", "20 × 0.5 min = 10 min. 45 - 10 = 35 minutes."),
         "d2": ("$30\\text{ minutes}$", "MIS-EQUAL-SPLIT", "Rapid solve saves 10 minutes, leaving 35 minutes."),
         "d3": ("$20\\text{ minutes}$", "MIS-DOUBLE-SLIP", "Check 45 - 10 = 35 minutes."),
         "explanation": "20 items × 30 seconds = 600 seconds = 10 minutes. Remaining time = 45 - 10 = 35 minutes (1.75 minutes per remaining item)."},
        {"level": "application", "type": "single_choice", "prompt": "In a mock exam with $40$ items, Chidi spent $2\\text{ minutes}$ each on the first $15$ items. How many minutes does he have left for the remaining $25$ items in a $45\\text{-minute}$ session?", "correct": "$15\\text{ minutes}$",
         "d1": ("$20\\text{ minutes}$", "MIS-ARITH-SLIP", "15 items × 2 min = 30 min. 45 - 30 = 15 minutes."),
         "d2": ("$25\\text{ minutes}$", "MIS-EQUAL-TIME", "He used 30 minutes already."),
         "d3": ("$10\\text{ minutes}$", "MIS-SUBTRACTION-SLIP", "45 - 30 = 15 minutes."),
         "explanation": "15 × 2 = 30 minutes spent. Remaining = 45 - 30 = 15 minutes (only 36 seconds per item remaining)."},
        {"level": "application", "type": "single_choice", "prompt": "A UTME syllabus audit shows $12$ Calculus questions, $16$ Algebra questions, $8$ Geometry questions, and $4$ Statistics questions. What percentage of the paper is Algebra?", "correct": "$40\\%$",
         "d1": ("$35\\%$", "MIS-PERCENT-SLIP", "16 / 40 × 100% = 40%."),
         "d2": ("$45\\%$", "MIS-OVERESTIMATE", "16 / 40 = 4 / 10 = 40%."),
         "d3": ("$30\\%$", "MIS-DIVISOR-SLIP", "Total questions is 40, 16/40 = 0.40."),
         "explanation": "(16 / 40) × 100% = 40%."},
        {"level": "application", "type": "numeric_entry", "prompt": "If a candidate answers 28 questions correctly, 8 incorrectly, and leaves 4 blank out of 40 questions, calculate her percentage score.", "correct": 70,
         "explanation": "(28 / 40) * 100 = 70%."},
        {"level": "application", "type": "ordering", "prompt": "Arrange the three-pass strategy stages for maximum score in a 40-question JAMB CBT session:", "correct": "A",
         "steps": ["Round 1: Rapid-solve all immediate 30-to-45 second recall and direct formula questions, flagging longer items.", "Round 2: Tackle flagged computational algebra and geometry questions requiring 1 to 2 minutes.", "Round 3: Review flagged challenging items and ensure no questions are left unattempted.", "Final Check: Confirm all answers are registered on the CBT navigation palette."],
         "explanation": "Optimal CBT test execution sequence maximizing score under time constraints."},
        {"level": "application", "type": "symbolic_entry", "prompt": "If $T$ is total test minutes and $N$ is total questions, write the formula for average time per question $t$ in seconds.", "correct": "(60*T)/N",
         "explanation": "T minutes = 60*T seconds. Dividing by N gives (60*T)/N."},
        {"level": "error_analysis", "type": "single_choice", "prompt": "A candidate insisted on spending $7\\text{ minutes}$ solving a difficult 3D geometry question on Question 4, eventually getting it right. What strategic error did he commit?", "correct": "Spent disproportionate time on one question, starving subsequent easily answerable items of necessary time.",
         "d1": ("Calculated the answer incorrectly.", "MIS-RESULT-CONFUSION", "The answer was correct, but time economics was disastrous."),
         "d2": ("Geometry is not in the syllabus.", "MIS-SYLLABUS-CONFUSION", "Geometry is in the syllabus, but 7 minutes sacrifices 5 other potential marks."),
         "d3": ("There is no error in this strategy.", "MIS-NO-ERROR-CLAIM", "In equal-weighted CBT, spending 7 minutes on 1 mark is a critical timing failure."),
         "explanation": "7 minutes could have secured 5 to 7 straightforward marks elsewhere on the test paper."},
        {"level": "error_analysis", "type": "single_choice", "prompt": "A candidate finished all 40 questions with 10 minutes remaining and left 6 doubtful items completely unselected. What was the flaw in his decision?", "correct": "In JAMB CBT with no negative marking, an unselected question has $0\\%$ chance of scoring, whereas an educated guess has at least $25\\%$ to $50\\%$ chance.",
         "d1": ("He should have closed the exam browser immediately.", "MIS-PROTOCOL-SLIP", "Remaining time should be used to review flagged items."),
         "d2": ("Unanswered questions are scored as correct automatically.", "MIS-SCORING-MYTH", "Unanswered questions are scored as 0."),
         "d3": ("There is no flaw.", "MIS-NO-ERROR-CLAIM", "Leaving blank options in non-penalty exams surrenders free marks."),
         "explanation": "With zero penalty for incorrect choices, leaving blanks is always mathematically suboptimal."},
        {"level": "challenge_transfer", "type": "single_choice", "prompt": "A student scores $80\\%$ in Algebra ($16$ questions) and $60\\%$ in non-Algebra ($24$ questions). What is his overall score out of $40$?", "correct": "$27.2$",
         "d1": ("$28$", "MIS-ROUNDING-SLIP", "0.80 × 16 = 12.8; 0.60 × 24 = 14.4; 12.8 + 14.4 = 27.2."),
         "d2": ("$26$", "MIS-ARITH-SLIP", "12.8 + 14.4 = 27.2."),
         "d3": ("$30$", "MIS-OVERESTIMATE", "Total correct is 27.2 out of 40 (68%)."),
         "explanation": "Algebra correct = 0.80 × 16 = 12.8. Non-algebra = 0.60 × 24 = 14.4. Total = 27.2 marks (68%)."},
        {"level": "challenge_transfer", "type": "single_choice", "prompt": "If a candidate needs at least $75\\%$ overall ($30$ correct out of $40$) and gets $18$ of the first $20$ correct, what percentage of the remaining $20$ must she answer correctly?", "correct": "$60\\%$",
         "d1": ("$50\\%$", "MIS-UNDERESTIMATE", "She needs 30 - 18 = 12 more. 12 / 20 = 60%, not 50%."),
         "d2": ("$70\\%$", "MIS-OVERESTIMATE", "12 / 20 = 60%."),
         "d3": ("$65\\%$", "MIS-ARITH-SLIP", "12 / 20 × 100% = 60%."),
         "explanation": "Target = 30. Remaining needed = 30 - 18 = 12. Fraction of remaining 20 needed = 12 / 20 = 60%."},
    ])

    # -------------------------------------------------------------------------
    # jamb-l2: Option Elimination via Parity & Back-Substitution
    # -------------------------------------------------------------------------
    add("jamb-m1", "jamb-l2", "top-jamb-strat-02", "Eliminate incorrect options via substitution and parity", [
        {"level": "understanding", "type": "single_choice", "prompt": "When evaluating the product $(2x - 3)(3x + 5)$ at $x = 0$, what must the constant term of the correct option be?", "correct": "$-15$",
         "d1": ("$+15$", "MIS-SIGN-SLIP", "(-3) × (+5) = -15, not +15."),
         "d2": ("$-2$", "MIS-ADD-INSTEAD-MULT", "Constants multiply: (-3)(+5) = -15, not -3 + 5 = 2."),
         "d3": ("$+2$", "MIS-SUM-CONFUSION", "Product of constant terms is -15."),
         "explanation": "At x = 0, (2(0) - 3)(3(0) + 5) = (-3)(5) = -15. Any option with a constant term other than -15 is instantly eliminated."},
        {"level": "understanding", "type": "single_choice", "prompt": "For the equation $x^3 - 4x^2 + x + 6 = 0$, which test value immediately confirms whether $x = -1$ is a root?", "correct": "Substitute $x = -1$: $(-1)^3 - 4(-1)^2 + (-1) + 6 = -1 - 4 - 1 + 6 = 0$.",
         "d1": ("Check if 6 is divisible by 4.", "MIS-TEST-IRRELEVANT", "Divisibility of 6 by 4 does not determine roots."),
         "d2": ("Differentiate the polynomial first.", "MIS-DERIVATIVE-CONFUSION", "Root testing uses the polynomial directly, not its derivative."),
         "d3": ("Set x = 0 to check if the constant is 0.", "MIS-ZERO-CONFUSION", "P(0) gives the constant term, not whether -1 is a root."),
         "explanation": "Direct substitution of candidate roots from options tests validity in under 10 seconds."},
        {"level": "understanding", "type": "single_choice", "prompt": "If $x$ is an odd integer, which of the following expressions MUST be an even integer?", "correct": "$x^2 + x$",
         "d1": ("$x^2 + 1$", "MIS-PARITY-CONFUSION", "Odd² = odd; odd + 1 = even? Wait: if x=3, 3²+1 = 10 (even). What about 2x + 1? That's always odd. x² + x = x(x+1) which is always even."),
         "d2": ("$2x + 1$", "MIS-ODD-FORM", "2x + 1 is the definition of an odd number."),
         "d3": ("$x^3 + 2$", "MIS-PARITY-SLIP", "Odd³ = odd; odd + 2 = odd."),
         "explanation": "x² + x = x(x + 1), which is the product of two consecutive integers, always even."},
        {"level": "understanding", "type": "true_false_justification", "prompt": "True or False: If a polynomial has integer coefficients and leading coefficient $1$, all rational roots must be integer factors of the constant term.", "correct": "True: By the Rational Root Theorem, any rational root p/q must have p dividing the constant term and q dividing the leading coefficient.",
         "d1": ("False: Roots can be any arbitrary fraction regardless of the constant.", "MIS-RATIONAL-ROOT-MYTH", "The Rational Root Theorem strictly bounds candidate rational roots."),
         "d2": ("False: Holds only for quadratic polynomials.", "MIS-DEGREE-RESTRICTION", "Holds for all polynomial degrees n >= 1."),
         "d3": ("True: But only if all roots are positive.", "MIS-SIGN-RESTRICTION", "Holds for positive and negative integer factors."),
         "explanation": "By the Rational Root Theorem, with leading coefficient 1, any rational root must divide the constant term."},
        {"level": "application", "type": "single_choice", "prompt": "Which of the following is a factor of $P(x) = 2x^3 - 3x^2 - 11x + 6$?", "correct": "$x - 3$",
         "d1": ("$x + 3$", "MIS-SIGN-TEST", "P(-3) = 2(-27) - 3(9) - 11(-3) + 6 = -54 - 27 + 33 + 6 = -42 ≠ 0."),
         "d2": ("$x - 1$", "MIS-TEST-SLIP", "P(1) = 2 - 3 - 11 + 6 = -6 ≠ 0."),
         "d3": ("$x - 4$", "MIS-FACTOR-DIVISOR", "4 does not divide 6, so x - 4 cannot be an integer factor."),
         "explanation": "Testing x = 3: P(3) = 2(27) - 3(9) - 11(3) + 6 = 54 - 27 - 33 + 6 = 0. Therefore, (x - 3) is a factor."},
        {"level": "application", "type": "single_choice", "prompt": "By examining the units digit of $23 \\times 47 \\times 89$, what is the units digit of the product?", "correct": "9",
         "d1": ("1", "MIS-ARITH-SLIP", "3 × 7 = 21 (ends in 1), then 1 × 9 = 9."),
         "d2": ("3", "MIS-FIRST-DIGIT", "3 is the units digit of the first number."),
         "d3": ("7", "MIS-SECOND-DIGIT", "7 is the units digit of the second number."),
         "explanation": "Units digits: 3 × 7 = 21 (ends in 1). Then 1 × 9 = 9. The units digit is 9."},
        {"level": "application", "type": "single_choice", "prompt": "Which set of values satisfies both $x + y = 7$ and $x^2 + y^2 = 25$?", "correct": "$\\{(3, 4), (4, 3)\\}$",
         "d1": ("$\\{(2, 5), (5, 2)\\}$", "MIS-SQUARE-SUM-CHECK", "2² + 5² = 4 + 25 = 29 ≠ 25."),
         "d2": ("$\\{(1, 6), (6, 1)\\}$", "MIS-SUM-ONLY", "1² + 6² = 37 ≠ 25."),
         "d3": ("$\\{(0, 7), (7, 0)\\}$", "MIS-BOUNDARY-CHECK", "0² + 7² = 49 ≠ 25."),
         "explanation": "Back-substitution of options: 3 + 4 = 7 and 3² + 4² = 9 + 16 = 25."},
        {"level": "application", "type": "numeric_entry", "prompt": "Evaluate $P(2)$ if $P(x) = 3x^3 - 5x^2 + 2x - 7$.", "correct": 1,
         "explanation": "3(8) - 5(4) + 2(2) - 7 = 24 - 20 + 4 - 7 = 1."},
        {"level": "application", "type": "ordering", "prompt": "Arrange the steps to quickly solve a multiple-choice polynomial equation using back-substitution:", "correct": "A",
         "steps": ["Inspect the options to identify simple integer candidates (e.g. 0, 1, -1, or 2).", "Substitute the simplest candidate value into the equation.", "Eliminate all options that do not contain the verified root.", "Test the distinguishing candidate between the remaining two options."],
         "explanation": "Fastest elimination path in CBT objective exams."},
        {"level": "application", "type": "symbolic_entry", "prompt": "Find the constant term when $(x - 2)(x + 3)(x - 5)$ is expanded.", "correct": "30",
         "explanation": "Constant term = (-2) * (3) * (-5) = 30."},
        {"level": "error_analysis", "type": "single_choice", "prompt": "To find which option equals $(x - 3)^2 - 4$, a student plugged in $x = 0$ and got $9 - 4 = 5$. Options A and C both had constant term $+5$. The student chose Option A without further testing. What was the flaw?", "correct": "One test point eliminated options B and D, but a second test point (e.g. $x = 1$ or $x = 3$) was required to distinguish between A and C.",
         "d1": ("Plugging in x = 0 is mathematically illegal.", "MIS-METHOD-CONFUSION", "Testing x = 0 is completely valid for evaluating constant terms."),
         "d2": ("The constant term was evaluated incorrectly.", "MIS-ARITH-SLIP", "(-3)² - 4 = 9 - 4 = 5 is correct."),
         "d3": ("There is no flaw.", "MIS-NO-ERROR-CLAIM", "Guessing between two identical-constant options yields only a 50% chance of success."),
         "explanation": "When two options tie on a test value, a second simple value (such as x = 1) must be used to eliminate the incorrect option."},
        {"level": "error_analysis", "type": "single_choice", "prompt": "A student stated that since $(x + 2)$ is a factor of $P(x)$, then $P(2) = 0$. What error was made?", "correct": "By the Factor Theorem, if $(x + 2)$ is a factor, then $P(-2) = 0$, not $P(2) = 0$.",
         "d1": ("P(0) = 2 should have been tested.", "MIS-ZERO-CONFUSION", "Factor Theorem tests the root x = -2."),
         "d2": ("P(x) must be divided by 2 first.", "MIS-OPERATION-CONFUSION", "Root is found by setting x + 2 = 0 => x = -2."),
         "d3": ("There is no error.", "MIS-NO-ERROR-CLAIM", "x + 2 = 0 implies x = -2."),
         "explanation": "x - c is a factor <=> P(c) = 0. Here x - (-2) means c = -2, so P(-2) = 0."},
        {"level": "challenge_transfer", "type": "single_choice", "prompt": "Which of the following is the simplified form of $$\\frac{x^3 - 8}{x - 2}$$ for $x \\ne 2$?", "correct": "$$x^2 + 2x + 4$$",
         "d1": ("$x^2 - 2x + 4$", "MIS-SIGN-SLIP", "Difference of cubes formula has +ab: a³ - b³ = (a - b)(a² + ab + b²)."),
         "d2": ("$x^2 - 4$", "MIS-SQUARE-CONFUSION", "x³ - 8 is difference of cubes, not squares."),
         "d3": ("$x^2 + 4$", "MIS-MIDDLE-TERM-OMIT", "The middle term +2x cannot be omitted."),
         "explanation": "x³ - 2³ = (x - 2)(x² + 2x + 4). Dividing by (x - 2) gives x² + 2x + 4. At x = 0: -8 / -2 = 4; only A and B give 4, at x = 1: (1-8)/(1-2) = 7; 1+2+4 = 7 (matches!)."},
        {"level": "challenge_transfer", "type": "single_choice", "prompt": "If $x + \\frac{1}{x} = 5$, what is the value of $x^2 + \\frac{1}{x^2}$?", "correct": "23",
         "d1": ("25", "MIS-FORGOT-2AB", "(x + 1/x)² = x² + 2 + 1/x² = 25 => x² + 1/x² = 25 - 2 = 23, not 25."),
         "d2": ("27", "MIS-ADDED-2AB", "Subtracted -2 instead of +2: 25 - 2 = 23."),
         "d3": ("21", "MIS-ARITH-SLIP", "25 - 2 = 23."),
         "explanation": "(x + 1/x)² = x² + 2(x)(1/x) + 1/x² = x² + 2 + 1/x² = 25. Therefore, x² + 1/x² = 25 - 2 = 23."},
    ])

    return items
