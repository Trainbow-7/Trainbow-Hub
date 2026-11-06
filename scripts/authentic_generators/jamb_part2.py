from .common import make_opt, make_choices, make_item

COURSE = "jamb-utme-speed-mathematics"

def get_jamb_part2_items():
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
    # jamb-l3: Surd Rationalization & Conjugate Multiplication
    # -------------------------------------------------------------------------
    add("jamb-m2", "jamb-l3", "top-jamb-surds-01", "Rationalize binomial surd denominators and simplify compound surds", [
        {"level": "understanding", "type": "single_choice", "prompt": "What is the conjugate of the binomial surd $3 - \\sqrt{5}$?", "correct": "$3 + \\sqrt{5}$",
         "d1": ("$-3 - \\sqrt{5}$", "MIS-DOUBLE-NEGATION", "Only change the sign connecting the terms, not the first term."),
         "d2": ("$\\sqrt{5} - 3$", "MIS-ORDER-SWAP", "Changing order without sign reversal does not form the conjugate."),
         "d3": ("$3 - 5$", "MIS-ROOT-DROP", "The surd radical must be retained."),
         "explanation": "The conjugate of a - sqrt(b) is a + sqrt(b)."},
        {"level": "understanding", "type": "single_choice", "prompt": "Simplify: $$\\sqrt{75} - \\sqrt{12}$$", "correct": "$$3\\sqrt{3}$$",
         "d1": ("$\\sqrt{63}$", "MIS-SUBTRACT-RADICANDS", "Cannot subtract radicands directly: sqrt(a) - sqrt(b) ≠ sqrt(a - b)."),
         "d2": ("$7\\sqrt{3}$", "MIS-ADD-COEFF", "5sqrt(3) - 2sqrt(3) = 3sqrt(3), not 7sqrt(3)."),
         "d3": ("$2\\sqrt{3}$", "MIS-ARITH-SLIP", "5 - 2 = 3."),
         "explanation": "sqrt(75) = 5sqrt(3), sqrt(12) = 2sqrt(3). 5sqrt(3) - 2sqrt(3) = 3sqrt(3)."},
        {"level": "understanding", "type": "single_choice", "prompt": "Evaluate the product: $$(2 + \\sqrt{3})(2 - \\sqrt{3})$$", "correct": "1",
         "d1": ("$7$", "MIS-ADD-SQUARES", "Difference of squares is a² - b² = 4 - 3 = 1, not 4 + 3 = 7."),
         "d2": ("$4 - 2\\sqrt{3}$", "MIS-CROSS-TERMS", "Cross terms +2sqrt(3) and -2sqrt(3) cancel to 0."),
         "d3": ("$-1$", "MIS-SIGN-SLIP", "4 - 3 = +1."),
         "explanation": "Difference of squares: 2² - (sqrt(3))² = 4 - 3 = 1."},
        {"level": "understanding", "type": "true_false_justification", "prompt": "True or False: For all positive numbers $a$ and $b$, $\\sqrt{a + b} = \\sqrt{a} + \\sqrt{b}$.", "correct": "False: The square root function does not distribute over addition (e.g. $\\sqrt{9 + 16} = 5 \\ne 3 + 4 = 7$).",
         "d1": ("True: Radicals distribute over all arithmetic operations.", "MIS-RADICAL-LINEARITY", "Radicals distribute over multiplication and division, NEVER over addition."),
         "d2": ("True: But only when a and b are perfect squares.", "MIS-SPECIAL-CASE-MYTH", "sqrt(9+16) = 5 ≠ 7 even for squares."),
         "d3": ("False: Holds only when a = b.", "MIS-RESTRICTION", "Holds only if a = 0 or b = 0."),
         "explanation": "sqrt(a + b) ≠ sqrt(a) + sqrt(b). Counterexample: sqrt(9+16) = 5 ≠ 3 + 4 = 7."},
        {"level": "application", "type": "single_choice", "prompt": "Rationalize the denominator of: $$\\frac{2}{\\sqrt{5} - 1}$$", "correct": "$$\\frac{\\sqrt{5} + 1}{2}$$",
         "d1": ("$\\sqrt{5} + 1$", "MIS-FORGOT-DENOM", "Denominator is (sqrt(5))² - 1² = 5 - 1 = 4. 2/4 = 1/2."),
         "d2": ("$\\frac{\\sqrt{5} - 1}{2}$", "MIS-SIGN-SLIP", "Must multiply by conjugate sqrt(5) + 1."),
         "d3": ("$\\frac{2\\sqrt{5} + 2}{5}$", "MIS-DIFF-SQUARES", "5 - 1 = 4, not 5."),
         "explanation": "Multiply numerator and denominator by (sqrt(5) + 1): 2(sqrt(5) + 1) / (5 - 1) = 2(sqrt(5) + 1)/4 = (sqrt(5) + 1)/2."},
        {"level": "application", "type": "single_choice", "prompt": "Simplify: $$\\frac{\\sqrt{3}}{\\sqrt{3} + \\sqrt{2}}$$", "correct": "$$3 - \\sqrt{6}$$",
         "d1": ("$3 + \\sqrt{6}$", "MIS-SIGN-SLIP", "Conjugate is sqrt(3) - sqrt(2). sqrt(3)(sqrt(3) - sqrt(2)) = 3 - sqrt(6)."),
         "d2": ("$\\frac{3 - \\sqrt{6}}{5}$", "MIS-DENOM-SUM", "(sqrt(3))² - (sqrt(2))² = 3 - 2 = 1, not 5."),
         "d3": ("$1 - \\sqrt{2}$", "MIS-CANCELLATION-ERROR", "Cannot cancel sqrt(3) across terms."),
         "explanation": "Multiply by (sqrt(3) - sqrt(2)): sqrt(3)(sqrt(3) - sqrt(2)) / (3 - 2) = 3 - sqrt(6)."},
        {"level": "application", "type": "single_choice", "prompt": "Express $\\sqrt{48} + \\sqrt{108} - \\sqrt{27}$ in the form $k\\sqrt{3}$.", "correct": "$$7\\sqrt{3}$$",
         "d1": ("$9\\sqrt{3}$", "MIS-ARITH-SLIP", "4 + 6 - 3 = 7, not 9."),
         "d2": ("$5\\sqrt{3}$", "MIS-SUBTRACT-SLIP", "4 + 6 - 3 = 7."),
         "d3": ("$\\sqrt{129}$", "MIS-RADICAND-ADD", "Cannot add under square roots."),
         "explanation": "sqrt(48) = 4sqrt(3), sqrt(108) = 6sqrt(3), sqrt(27) = 3sqrt(3). (4 + 6 - 3)sqrt(3) = 7sqrt(3)."},
        {"level": "application", "type": "numeric_entry", "prompt": "If $\\frac{6}{\\sqrt{3}} = k\\sqrt{3}$, find the integer $k$.", "correct": 2,
         "explanation": "6 / sqrt(3) = 6sqrt(3) / 3 = 2sqrt(3) => k = 2."},
        {"level": "application", "type": "ordering", "prompt": "Arrange the steps to rationalize the denominator of $$\\frac{5}{2 + \\sqrt{3}}$$:", "correct": "A",
         "steps": ["Identify the conjugate of the denominator, which is 2 - sqrt(3).", "Multiply numerator and denominator by (2 - sqrt(3)).", "Expand the denominator using difference of squares: 2² - (sqrt(3))² = 4 - 3 = 1.", "Distribute the numerator: 5(2 - sqrt(3)) = 10 - 5sqrt(3)."],
         "explanation": "Standard procedure for rationalizing binomial surds."},
        {"level": "application", "type": "symbolic_entry", "prompt": "Expand and simplify: $(1 + \\sqrt{2})^2$. Express in form $a + b\\sqrt{2}$.", "correct": "3 + 2*sqrt(2)",
         "explanation": "1 + 2sqrt(2) + 2 = 3 + 2sqrt(2)."},
        {"level": "error_analysis", "type": "single_choice", "prompt": "A student wrote: $$\\frac{1}{\\sqrt{2} + \\sqrt{3}} = \\frac{1}{\\sqrt{2}} + \\frac{1}{\\sqrt{3}} = \\frac{\\sqrt{2}}{2} + \\frac{\\sqrt{3}}{3}$$ What error was made?", "correct": "Split a single denominator over addition, which violates fraction addition rules.",
         "d1": ("Rationalized 1/sqrt(2) incorrectly.", "MIS-RATIONALIZE-SLIP", "1/sqrt(2) = sqrt(2)/2 is correct arithmetic in isolation."),
         "d2": ("Forgot to square both sides.", "MIS-METHOD-CONFUSION", "This is an expression, not an equation."),
         "d3": ("There is no error.", "MIS-NO-ERROR-CLAIM", "1/(a+b) ≠ 1/a + 1/b."),
         "explanation": "1/(a+b) cannot be split into 1/a + 1/b. The correct method is multiplying by (sqrt(3) - sqrt(2))."},
        {"level": "error_analysis", "type": "single_choice", "prompt": "In simplifying $\\sqrt{50}$, a student wrote: $\\sqrt{50} = \\sqrt{5 \\times 10} = 5\\sqrt{10}$. What error occurred?", "correct": "Extracted $5$ from the square root without it being a perfect square ($25$).",
         "d1": ("50 has no square root factors.", "MIS-FACTOR-IGNORANCE", "25 is a factor of 50."),
         "d2": ("5 × 10 does not equal 50.", "MIS-ARITH-SLIP", "5 × 10 = 50 is correct."),
         "d3": ("There is no error.", "MIS-NO-ERROR-CLAIM", "sqrt(50) = sqrt(25 × 2) = 5sqrt(2), not 5sqrt(10)."),
         "explanation": "Only perfect squares can be pulled out: sqrt(50) = sqrt(25 × 2) = 5sqrt(2)."},
        {"level": "challenge_transfer", "type": "single_choice", "prompt": "If $x = \\sqrt{3} + \\sqrt{2}$, find the value of $x + \\frac{1}{x}$.", "correct": "$$2\\sqrt{3}$$",
         "d1": ("$2\\sqrt{2}$", "MIS-VARIABLE-SWAP", "1/x = sqrt(3) - sqrt(2). (sqrt(3) + sqrt(2)) + (sqrt(3) - sqrt(2)) = 2sqrt(3)."),
         "d2": ("$\\sqrt{6}$", "MIS-MULT-CONFUSION", "x * (1/x) = 1."),
         "d3": ("$4$", "MIS-ARITH-SLIP", "Sum is 2sqrt(3)."),
         "explanation": "1/x = (sqrt(3) - sqrt(2)) / (3 - 2) = sqrt(3) - sqrt(2). Then x + 1/x = (sqrt(3)+sqrt(2)) + (sqrt(3)-sqrt(2)) = 2sqrt(3)."},
        {"level": "challenge_transfer", "type": "single_choice", "prompt": "Solve for positive $x$: $$\\sqrt{x + 5} - \\sqrt{x} = 1$$", "correct": "4",
         "d1": ("9", "MIS-ARITH-SLIP", "sqrt(9+5) - sqrt(9) = sqrt(14) - 3 ≠ 1."),
         "d2": ("1", "MIS-TEST-SLIP", "sqrt(6) - 1 ≠ 1."),
         "d3": ("16", "MIS-TEST-SLIP", "sqrt(21) - 4 ≠ 1."),
         "explanation": "sqrt(x + 5) = 1 + sqrt(x). Squaring: x + 5 = 1 + 2sqrt(x) + x => 4 = 2sqrt(x) => sqrt(x) = 2 => x = 4."},
    ])

    # -------------------------------------------------------------------------
    # jamb-l4: Logarithmic Identities & Base Transformations
    # -------------------------------------------------------------------------
    add("jamb-m2", "jamb-l4", "top-jamb-logs-01", "Apply logarithmic identities and base change formulas", [
        {"level": "understanding", "type": "single_choice", "prompt": "Evaluate: $$\\log_2 32$$", "correct": "5",
         "d1": ("4", "MIS-POWER-SLIP", "2⁴ = 16, 2⁵ = 32."),
         "d2": ("16", "MIS-DIVIDE-BASE", "32 / 2 = 16; logarithm is the power, not division."),
         "d3": ("6", "MIS-POWER-SLIP", "2⁶ = 64."),
         "explanation": "2^5 = 32, so log2(32) = 5."},
        {"level": "understanding", "type": "single_choice", "prompt": "Which expression is equivalent to $\\log_a x + \\log_a y$?", "correct": "$$\\log_a(xy)$$",
         "d1": ("$\\log_a(x + y)$", "MIS-LOG-ADD-CONFUSION", "log(x) + log(y) = log(xy), never log(x + y)."),
         "d2": ("$(\\log_a x)(\\log_a y)$", "MIS-LOG-MULT-CONFUSION", "Logarithms do not multiply when added."),
         "d3": ("$\\log_a\\left(\\frac{x}{y}\\right)$", "MIS-LOG-SUB-CONFUSION", "Division corresponds to subtraction of logs."),
         "explanation": "Logarithm product rule: log_a(x) + log_a(y) = log_a(xy)."},
        {"level": "understanding", "type": "single_choice", "prompt": "What is the value of $\\log_b 1$ for any valid base $b > 0, b \\ne 1$?", "correct": "0",
         "d1": ("1", "MIS-LOG-BASE-EQUAL", "log_b(b) = 1, but log_b(1) = 0."),
         "d2": ("b", "MIS-BASE-COPY", "b^0 = 1, so log_b(1) = 0."),
         "d3": ("\\text{Undefined}", "MIS-DOMAIN-SLIP", "log_b(1) is well-defined and equals 0."),
         "explanation": "Since b^0 = 1 for any non-zero b, log_b(1) = 0."},
        {"level": "understanding", "type": "true_false_justification", "prompt": "True or False: The base change formula states that $\\log_b a = \\frac{\\log_c a}{\\log_c b}$.", "correct": "True: A logarithm in base $b$ can be computed using any arbitrary base $c > 0, c \\ne 1$ via the quotient $\\frac{\\log_c a}{\\log_c b}$.",
         "d1": ("False: The denominator should be log_c a.", "MIS-RECIPROCAL-SWAP", "log_b a has a in numerator and b in denominator."),
         "d2": ("False: Base changes are only valid for base 10.", "MIS-BASE-RESTRICTION", "Valid for any common or natural base c."),
         "d3": ("True: But only if a > b.", "MIS-RESTRICTION", "Holds for all positive a, b with b ≠ 1."),
         "explanation": "Standard base change formula: log_b(a) = log_c(a) / log_c(b)."},
        {"level": "application", "type": "single_choice", "prompt": "Solve for $x$: $$\\log_{10}(2x + 1) = 2$$", "correct": "49.5",
         "d1": ("50", "MIS-ARITH-SLIP", "10² = 100 => 2x + 1 = 100 => 2x = 99 => x = 49.5."),
         "d2": ("9.5", "MIS-BASE-SLIP", "Used base e or 10 wrongly."),
         "d3": ("4.5", "MIS-POWER-SLIP", "10² = 100, not 10."),
         "explanation": "2x + 1 = 10^2 = 100 => 2x = 99 => x = 49.5."},
        {"level": "application", "type": "single_choice", "prompt": "Evaluate: $$\\log_3 81 - \\log_3 9$$", "correct": "2",
         "d1": ("4", "MIS-FIRST-TERM-ONLY", "log3(81) = 4, but must subtract log3(9) = 2: 4 - 2 = 2."),
         "d2": ("9", "MIS-DIVISION-SLIP", "81 / 9 = 9, log3(9) = 2, not 9."),
         "d3": ("3", "MIS-BASE-GUESS", "4 - 2 = 2."),
         "explanation": "log3(81/9) = log3(9) = 2."},
        {"level": "application", "type": "single_choice", "prompt": "If $\\log_{10} 2 = 0.3010$ and $\\log_{10} 3 = 0.4771$, calculate $\\log_{10} 6$.", "correct": "0.7781",
         "d1": ("0.1436", "MIS-MULT-LOGS", "Multiplied decimals instead of adding: 0.3010 + 0.4771 = 0.7781."),
         "d2": ("0.6020", "MIS-DOUBLE-LOG2", "2 * log(2) = log(4) = 0.6020."),
         "d3": ("0.9542", "MIS-DOUBLE-LOG3", "2 * log(3) = log(9) = 0.9542."),
         "explanation": "log10(6) = log10(2 × 3) = log10(2) + log10(3) = 0.3010 + 0.4771 = 0.7781."},
        {"level": "application", "type": "numeric_entry", "prompt": "Find the value of $x$ satisfying: $\\log_2(x) = 6$.", "correct": 64,
         "explanation": "x = 2^6 = 64."},
        {"level": "application", "type": "ordering", "prompt": "Arrange the steps to solve the logarithmic equation $\\log_2(x) + \\log_2(x - 2) = 3$:", "correct": "A",
         "steps": ["Apply the product rule: log2(x(x - 2)) = 3.", "Convert to exponential form: x(x - 2) = 2³ = 8.", "Form the quadratic equation: x² - 2x - 8 = 0.", "Factor and discard invalid negative argument: (x - 4)(x + 2) = 0 => x = 4."],
         "explanation": "Standard procedure for solving logarithmic equations with domain checks."},
        {"level": "application", "type": "symbolic_entry", "prompt": "Express $\\log_a\\left(\\frac{x^2}{y}\\right)$ in terms of $\\log_a x$ and $\\log_a y$.", "correct": "2*log(x) - log(y)",
         "explanation": "log(x^2 / y) = log(x^2) - log(y) = 2*log(x) - log(y)."},
        {"level": "error_analysis", "type": "single_choice", "prompt": "A student solved $\\log(x) + \\log(x - 3) = 1$ in base $10$ and found roots $x = 5$ and $x = -2$. He concluded both are valid solutions. What was the error?", "correct": "Failed to discard $x = -2$, which produces undefined logarithms of negative numbers ($\\log(-2)$ is undefined).",
         "d1": ("5 is not a valid root.", "MIS-ROOT-VALIDITY", "log(5) + log(2) = log(10) = 1, so 5 is valid."),
         "d2": ("Should have subtracted logarithms instead of adding.", "MIS-OPERATION-CONFUSION", "Addition rule was applied correctly."),
         "d3": ("There is no error.", "MIS-NO-ERROR-CLAIM", "Logarithm arguments must be strictly positive: x > 0 and x - 3 > 0 => x > 3."),
         "explanation": "Logarithms are only defined for positive real numbers. x = -2 must be rejected."},
        {"level": "error_analysis", "type": "single_choice", "prompt": "A student simplified $\\frac{\\log 8}{\\log 2}$ by canceling $\\log$ to get $\\frac{8}{2} = 4$. What was the misconception?", "correct": "Treated '$\\log$' as an algebraic factor that can be canceled (the correct evaluation is $\\frac{\\log 2^3}{\\log 2} = \\frac{3\\log 2}{\\log 2} = 3$).",
         "d1": ("8 / 2 = 4 is incorrect division.", "MIS-ARITH-SLIP", "8/2 = 4 is correct arithmetic, but log is a function, not a factor."),
         "d2": ("Should have subtracted logs instead: log(8) - log(2).", "MIS-OPERATION-CONFUSION", "Quotient of logs is not log of quotient."),
         "d3": ("There is no error.", "MIS-NO-ERROR-CLAIM", "log(8) / log(2) = 3log(2) / log(2) = 3, not 4."),
         "explanation": "log is an operator/function, not a variable. log(8)/log(2) = log(2³)/log(2) = 3."},
        {"level": "challenge_transfer", "type": "single_choice", "prompt": "If $\\log_a b = 2$ and $\\log_b c = 3$, find the value of $\\log_a c$.", "correct": "6",
         "d1": ("5", "MIS-ADD-EXPONENTS", "By the chain rule of logarithms, log_a(c) = log_a(b) × log_b(c) = 2 × 3 = 6, not 2 + 3 = 5."),
         "d2": ("1.5", "MIS-DIVIDE-LOGS", "Multiplied, not divided: 2 * 3 = 6."),
         "d3": ("8", "MIS-POWER-SLIP", "2^3 = 8 is not the identity."),
         "explanation": "Chain rule of logarithms: log_a(c) = log_a(b) * log_b(c) = 2 * 3 = 6."},
        {"level": "challenge_transfer", "type": "single_choice", "prompt": "Solve for $x$: $$\\log_2(x) + \\log_4(x) = 3$$", "correct": "4",
         "d1": ("8", "MIS-ARITH-SLIP", "log4(x) = log2(x)/2. log2(x) + 0.5 log2(x) = 1.5 log2(x) = 3 => log2(x) = 2 => x = 4."),
         "d2": ("2", "MIS-TEST-SLIP", "log2(2) + log4(2) = 1 + 0.5 = 1.5 ≠ 3."),
         "d3": ("16", "MIS-OVERESTIMATE", "log2(16) + log4(16) = 4 + 2 = 6 ≠ 3."),
         "explanation": "Change base 4 to base 2: log4(x) = log2(x)/log2(4) = (1/2)log2(x). (3/2)log2(x) = 3 => log2(x) = 2 => x = 2^2 = 4."},
    ])

    return items
