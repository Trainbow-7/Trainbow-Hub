"""
WAEC Mathematics Part 2: Lessons l13 to l19 (7 lessons x 14 items = 98 items)
"""

from scripts.authentic_generators.common import make_opt, make_choices, make_item

COURSE = "waec-ssce-mathematics-mastery"

def get_waec_part2_items():
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

    # --- l13: Circle Theorems: Subtended Angles & Cyclic Quads ---
    add("waec-m5", "l13", "top-waec-geom-02", "Apply circle theorems on subtended angles and cyclic quadrilaterals", [
        {"level": "understanding", "type": "single_choice", "prompt": "In a circle with centre $O$, an arc subtends an angle of $130^\\circ$ at the centre. What angle does it subtend at the circumference?", "correct": "$65^\\circ$",
         "d1": ("$130^\\circ$", "MIS-EQUAL-ANGLE", "Angle at centre is twice angle at circumference, not equal."), "d2": ("$260^\\circ$", "MIS-DOUBLE-WRONG-WAY", "Angle at circumference is half, not double."), "d3": ("$50^\\circ$", "MIS-SUPPLEMENTARY", "Supplementary applies to cyclic quads, not centre-circumference."), "explanation": "Angle at circumference = 130° / 2 = 65°."},
        {"level": "understanding", "type": "single_choice", "prompt": "What is the angle subtended by a diameter at any point on the circumference of a circle?", "correct": "$90^\\circ$ (Right angle)",
         "d1": ("$180^\\circ$", "MIS-CENTRE-ANGLE", "180° is the angle at the centre subtended by a diameter."), "d2": ("$45^\\circ$", "MIS-HALF-SLIP", "Half of 180° is 90°, not 45°."), "d3": ("$60^\\circ$", "MIS-EQUILATERAL-GUESS", "Angle in a semicircle is always 90°."), "explanation": "Thales' theorem: Angle in a semicircle is 90°."},
        {"level": "understanding", "type": "single_choice", "prompt": "In a cyclic quadrilateral $ABCD$, what is the sum of opposite interior angles $\\angle A + \\angle C$?", "correct": "$180^\\circ$",
         "d1": ("$360^\\circ$", "MIS-TOTAL-SUM", "360° is the sum of all 4 angles."), "d2": ("$90^\\circ$", "MIS-COMPLEMENTARY", "Opposite angles are supplementary (180°)."), "d3": ("$270^\\circ$", "MIS-ARITH-SLIP", "Opposite angles sum to 180°."), "explanation": "Opposite angles of a cyclic quadrilateral are supplementary (sum to 180°)."},
        {"level": "understanding", "type": "true_false_justification", "prompt": "True or False: Angles subtended by the same arc in the same segment of a circle are equal.", "correct": "True: Both angles are half the angle subtended by the same arc at the centre.",
         "d1": ("False: They are equal only if they lie on opposite sides of the chord.", "MIS-SEGMENT-CONFUSION", "Angles in opposite segments are supplementary."), "d2": ("False: Their sum is 180°.", "MIS-SUPPLEMENTARY", "Angles in the same segment are equal."), "d3": ("True: But only if the chord is a diameter.", "MIS-RESTRICTION", "Holds for any chord."), "explanation": "Angles in the same segment of a circle are equal."},
        {"level": "application", "type": "single_choice", "prompt": "In cyclic quadrilateral $ABCD$, $\\angle B = 104^\\circ$. What is the measure of the opposite angle $\\angle D$?", "correct": "$76^\\circ$",
         "d1": ("$104^\\circ$", "MIS-EQUAL-SLIP", "Opposite angles sum to 180°, they are not equal unless 90°."), "d2": ("$86^\\circ$", "MIS-ARITH-SLIP", "180° - 104° = 76°."), "d3": ("$90^\\circ$", "MIS-RIGHT-ANGLE-GUESS", "180° - 104° = 76°."), "explanation": "Opposite angles sum to 180°: ∠D = 180° - 104° = 76°."},
        {"level": "application", "type": "single_choice", "prompt": "$A, B, C$ are points on a circle with centre $O$. If $\\angle ABC = 55^\\circ$, calculate the reflex angle $\\angle AOC$.", "correct": "$250^\\circ$",
         "d1": ("$110^\\circ$", "MIS-OBTUSE-ANGLE", "110° is the non-reflex angle AOC; reflex angle = 360° - 110° = 250°."), "d2": ("$220^\\circ$", "MIS-DOUBLE-SLIP", "360° - 110° = 250°."), "d3": ("$125^\\circ$", "MIS-SUPPLEMENTARY", "Reflex angle is 250°."), "explanation": "Angle AOC (minor) = 2 × 55° = 110°. Reflex angle AOC = 360° - 110° = 250°."},
        {"level": "application", "type": "single_choice", "prompt": "A tangent $PT$ touches a circle at $T$. If $O$ is the centre, what is the angle between radius $OT$ and tangent $PT$?", "correct": "$90^\\circ$",
         "d1": ("$45^\\circ$", "MIS-HALF-ANGLE", "A tangent is strictly perpendicular to the radius at the point of contact."), "d2": ("$60^\\circ$", "MIS-TRIANGLE-GUESS", "Tangent-radius angle is always 90°."), "d3": ("$180^\\circ$", "MIS-LINE-CONFUSION", "Angle between tangent and radius is 90°."), "explanation": "The radius to a tangent at the point of contact is perpendicular (90°)."},
        {"level": "application", "type": "numeric_entry", "prompt": "In cyclic quad $PQRS$, opposite angles are $\\angle P = 2x + 10^\\circ$ and $\\angle R = 3x - 5^\\circ$. Find $x$.", "correct": 35,
         "explanation": "(2x + 10) + (3x - 5) = 180 => 5x + 5 = 180 => 5x = 175 => x = 35."},
        {"level": "application", "type": "ordering", "prompt": "Arrange the steps to prove that opposite angles of a cyclic quadrilateral sum to $180^\\circ$:", "correct": "A",
         "steps": ["Join opposite vertices to the centre O to form angles at the centre.", "Use the theorem: angle at centre = 2 × angle at circumference.", "Recognize that the two angles at the centre form a full turn (360°).", "Divide 360° by 2 to conclude that opposite angles sum to 180°."], "explanation": "Geometric proof using central angles."},
        {"level": "application", "type": "symbolic_entry", "prompt": "If the angle subtended at the circumference is $\\theta$, write the expression for the angle at the centre.", "correct": "2*theta",
         "explanation": "Central angle = 2 * theta."},
        {"level": "error_analysis", "type": "single_choice", "prompt": "A student stated that adjacent angles in a cyclic quadrilateral are supplementary. What is the misconception?", "correct": "Confused cyclic quadrilaterals (opposite angles supplementary) with parallelograms (adjacent angles supplementary).",
         "d1": ("All 4 angles must be equal to 90°.", "MIS-RECTANGLE-CONFUSION", "Cyclic quads can have any shape if vertices lie on circle."), "d2": ("Adjacent angles sum to 360°.", "MIS-TOTAL-CONFUSION", "Sum of all 4 is 360°."), "d3": ("There is no error.", "MIS-NO-ERROR-CLAIM", "Opposite angles sum to 180°, not adjacent."), "explanation": "Opposite angles sum to 180° in a cyclic quad, not adjacent angles."},
        {"level": "error_analysis", "type": "single_choice", "prompt": "A student applied the angle at centre theorem $2\\theta$ to an angle whose vertex was inside the circle but not at the centre. Why is this invalid?", "correct": "The theorem requires the vertex to be the exact geometrical centre of the circle.",
         "d1": ("The vertex must be on the circumference.", "MIS-LOCATION-CONFUSION", "Circumference angle is θ, centre angle is 2θ."), "d2": ("The angle must be a right angle.", "MIS-RIGHT-ANGLE", "Theorem holds for all angles if vertex is at centre."), "d3": ("There is no error.", "MIS-NO-ERROR-CLAIM", "Center location is strictly required."), "explanation": "The theorem holds only when the vertex is the circle centre."},
        {"level": "challenge_transfer", "type": "single_choice", "prompt": "$TA$ is a tangent to a circle at $A$, and $AB$ is a chord. If $\\angle TAB = 62^\\circ$, find the angle in the alternate segment subtended by chord $AB$.", "correct": "$62^\\circ$",
         "d1": ("$118^\\circ$", "MIS-SUPPLEMENTARY", "Alternate Segment Theorem states the angles are equal, not supplementary."), "d2": ("$28^\\circ$", "MIS-COMPLEMENTARY", "Angle in alternate segment equals angle between tangent and chord."), "d3": ("$31^\\circ$", "MIS-HALF-SLIP", "Angle is 62°."), "explanation": "Alternate Segment Theorem: Angle between tangent and chord equals angle in alternate segment = 62°."},
        {"level": "challenge_transfer", "type": "single_choice", "prompt": "In cyclic quad $ABCD$, side $AB$ is extended to $E$. If $\\angle CBE = 78^\\circ$, find the interior opposite angle $\\angle ADC$.", "correct": "$78^\\circ$",
         "d1": ("$102^\\circ$", "MIS-SUPPLEMENTARY", "Exterior angle of cyclic quad equals interior opposite angle directly."), "d2": ("$156^\\circ$", "MIS-DOUBLE-SLIP", "Angles are equal: ∠ADC = ∠CBE = 78°."), "d3": ("$90^\\circ$", "MIS-RIGHT-ANGLE-GUESS", "∠ADC = 78°."), "explanation": "The exterior angle of a cyclic quadrilateral equals the interior opposite angle: ∠ADC = 78°."},
    ])

    # --- l14: Right-Angled Trigonometry (SOHCAHTOA) ---
    add("waec-m6", "l14", "top-waec-trig-01", "Apply trigonometric ratios (SOHCAHTOA) in right-angled triangles", [
        {"level": "understanding", "type": "single_choice", "prompt": "In a right-angled triangle, which ratio defines $\\cos \\theta$?", "correct": "$\\frac{\\text{Adjacent}}{\\text{Hypotenuse}}$",
         "d1": ("$\\frac{\\text{Opposite}}{\\text{Hypotenuse}}$", "MIS-SINE-CONFUSION", "Opposite/Hypotenuse is sine."), "d2": ("$\\frac{\\text{Opposite}}{\\text{Adjacent}}$", "MIS-TANGENT-CONFUSION", "Opposite/Adjacent is tangent."), "d3": ("$\\frac{\\text{Hypotenuse}}{\\text{Adjacent}}$", "MIS-SECANT-CONFUSION", "Hypotenuse/Adjacent is secant."), "explanation": "SOHCAHTOA: cos θ = Adjacent / Hypotenuse."},
        {"level": "understanding", "type": "single_choice", "prompt": "If $\\sin \\theta = \\frac{3}{5}$ and $\\theta$ is acute, what is the value of $\\cos \\theta$?", "correct": "$\\frac{4}{5}$",
         "d1": ("$\\frac{2}{5}$", "MIS-ARITH-SLIP", "cos θ = √(1 - 9/25) = √(16/25) = 4/5."), "d2": ("$\\frac{3}{4}$", "MIS-TANGENT-SLIP", "3/4 is tan θ, not cos θ."), "d3": ("$\\frac{5}{3}$", "MIS-RECIPROCAL-SLIP", "cos θ <= 1."), "explanation": "By Pythagoras: Adjacent = √(5² - 3²) = 4 => cos θ = 4/5."},
        {"level": "understanding", "type": "single_choice", "prompt": "What is the exact value of $\\sin 30^\\circ + \\cos 60^\\circ$?", "correct": "$1$",
         "d1": ("$\\frac{\\sqrt{3}}{2}$", "MIS-COS-SLIP", "sin 30° = 1/2, cos 60° = 1/2. Sum = 1."), "d2": ("$\\frac{1}{2}$", "MIS-SINGLE-VAL", "1/2 + 1/2 = 1."), "d3": ("$\\sqrt{3}$", "MIS-TAN-SLIP", "sin 30° + cos 60° = 0.5 + 0.5 = 1."), "explanation": "sin 30° = 1/2 and cos 60° = 1/2 => 1/2 + 1/2 = 1."},
        {"level": "understanding", "type": "true_false_justification", "prompt": "True or False: For any acute angle $\\theta$, $\\sin^2 \\theta + \\cos^2 \\theta = 1$.", "correct": "True: Derived directly from the Pythagorean theorem $a^2 + b^2 = c^2$ divided by $c^2$.",
         "d1": ("False: Holds only when θ = 45°.", "MIS-RESTRICTION", "Holds for all real angles."), "d2": ("False: The sum equals tan² θ.", "MIS-IDENTITY-CONFUSION", "sin² θ + cos² θ = 1 is the fundamental identity."), "d3": ("True: But only if hypotenuse is 1.", "MIS-SCALE-RESTRICTION", "Ratios are scale invariant."), "explanation": "(Opp/Hyp)² + (Adj/Hyp)² = (Opp² + Adj²) / Hyp² = Hyp² / Hyp² = 1."},
        {"level": "application", "type": "single_choice", "prompt": "A ladder $10\\text{ m}$ long leans against a vertical wall, making an angle of $60^\\circ$ with the ground. How high up the wall does it reach?", "correct": "$5\\sqrt{3}\\text{ m} \\approx 8.66\\text{ m}$",
         "d1": ("$5\\text{ m}$", "MIS-COS-SLIP", "5 m is the distance from the base: 10 cos 60° = 5 m."), "d2": ("$10\\text{ m}$", "MIS-HYPOTENUSE-SLIP", "Height cannot equal hypotenuse."), "d3": ("$7.5\\text{ m}$", "MIS-ROUGH-GUESS", "Height = 10 sin 60° = 5√3 m."), "explanation": "Height = 10 × sin 60° = 10 × (√3/2) = 5√3 ≈ 8.66 m."},
        {"level": "application", "type": "single_choice", "prompt": "A right triangle has a base of $8\\text{ cm}$ and hypotenuse of $17\\text{ cm}$. Find its perpendicular height.", "correct": "$15\\text{ cm}$",
         "d1": ("$13\\text{ cm}$", "MIS-ARITH-SLIP", "h = √(17² - 8²) = √(289 - 64) = √225 = 15 cm."), "d2": ("$9\\text{ cm}$", "MIS-SUB-SLIP", "17 - 8 = 9 is NOT Pythagoras."), "d3": ("$12\\text{ cm}$", "MIS-PYTHAG-TRIPLE", "8-15-17 is the Pythagorean triple."), "explanation": "Height = √(17² - 8²) = √(289 - 64) = √225 = 15 cm."},
        {"level": "application", "type": "single_choice", "prompt": "Find the acute angle $\\theta$ such that $\\tan \\theta = 1$.", "correct": "$45^\\circ$",
         "d1": ("$30^\\circ$", "MIS-SPECIAL-ANGLE", "tan 30° = 1/√3."), "d2": ("$60^\\circ$", "MIS-SPECIAL-ANGLE", "tan 60° = √3."), "d3": ("$90^\\circ$", "MIS-UNDEFINED-SLIP", "tan 90° is undefined."), "explanation": "tan 45° = 1."},
        {"level": "application", "type": "numeric_entry", "prompt": "Calculate the value of $2 \\cos 60^\\circ$.", "correct": 1,
         "explanation": "cos 60° = 0.5 => 2 × 0.5 = 1."},
        {"level": "application", "type": "ordering", "prompt": "Arrange the steps to find an unknown angle $\\theta$ in a right triangle given opposite and adjacent sides:", "correct": "A",
         "steps": ["Identify opposite side and adjacent side relative to θ.", "Write the tangent ratio: tan θ = Opposite / Adjacent.", "Compute the quotient: Opposite / Adjacent.", "Take the inverse tangent: θ = arctan(quotient)."], "explanation": "Standard inverse trig procedure."},
        {"level": "application", "type": "symbolic_entry", "prompt": "Write the fundamental trigonometric identity in terms of $\\sin(\\theta)$ and $\\cos(\\theta)$.", "correct": "sin(theta)^2 + cos(theta)^2 = 1",
         "explanation": "sin²(θ) + cos²(θ) = 1."},
        {"level": "error_analysis", "type": "single_choice", "prompt": "A student calculated $\\cos \\theta = \\frac{13}{12}$ for a triangle. Why is this answer impossible?", "correct": "The hypotenuse is the longest side, so $\\cos \\theta = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}}$ cannot exceed $1$.",
         "d1": ("cos θ must always be negative.", "MIS-SIGN-CONFUSION", "Acute angle cos is positive in (0, 1]."), "d2": ("cos θ must be an integer.", "MIS-INTEGER-CONFUSION", "Ratios are typically fractions."), "d3": ("There is no error.", "MIS-NO-ERROR-CLAIM", "|cos θ| <= 1 for all real angles."), "explanation": "Hypotenuse > Adjacent in any real right triangle, so cos θ <= 1."},
        {"level": "error_analysis", "type": "single_choice", "prompt": "To find height $h$ with base $10$ and angle $30^\\circ$, a student used $\\sin 30^\\circ = \\frac{h}{10}$. What was the mistake?", "correct": "Used sine (Opposite/Hypotenuse) instead of tangent (Opposite/Adjacent); $10$ was the base, not hypotenuse.",
         "d1": ("Used 30° instead of 60°.", "MIS-ANGLE-SWAP", "The angle was given as 30°."), "d2": ("Multiplied instead of dividing.", "MIS-OP-CONFUSION", "The trigonometric ratio choice was wrong."), "d3": ("There is no error.", "MIS-NO-ERROR-CLAIM", "tan 30° = h / 10 should be used."), "explanation": "Base is adjacent to 30°, so tan 30° = h / 10 => h = 10 tan 30°."},
        {"level": "challenge_transfer", "type": "single_choice", "prompt": "From a point on horizontal ground $20\\text{ m}$ from the base of a vertical tower, the angle of elevation of the top is $30^\\circ$. Find the height of the tower.", "correct": "$\\frac{20\\sqrt{3}}{3}\\text{ m} \\approx 11.55\\text{ m}$",
         "d1": ("$10\\text{ m}$", "MIS-SIN-SLIP", "20 sin 30° = 10 m, but ground distance is adjacent (use tan)."), "d2": ("$20\\sqrt{3}\\text{ m}$", "MIS-RECIPROCAL-SLIP", "20 / tan 30° = 20√3, should multiply by tan 30°."), "d3": ("$15\\text{ m}$", "MIS-ROUGH-GUESS", "Height = 20 tan 30° = 20/√3 = 20√3 / 3 m."), "explanation": "tan 30° = h / 20 => h = 20 × (1/√3) = 20√3 / 3 ≈ 11.55 m."},
        {"level": "challenge_transfer", "type": "single_choice", "prompt": "A flagpole stands on top of a building $15\\text{ m}$ high. From a point on the ground, the angle of elevation of the bottom of the pole is $30^\\circ$ and the top of the pole is $45^\\circ$. Find the length of the flagpole.", "correct": "$15(\\sqrt{3} - 1)\\text{ m} \\approx 10.98\\text{ m}$",
         "d1": ("$15\\text{ m}$", "MIS-BUILDING-COPY", "Flagpole height is total height minus building height."), "d2": ("$5\\sqrt{3}\\text{ m}$", "MIS-ARITH-SLIP", "Ground distance = 15 / tan 30° = 15√3. Total height = 15√3 tan 45° = 15√3. Pole = 15(√3 - 1)."), "d3": ("$12\\text{ m}$", "MIS-ROUGH-GUESS", "15(1.732 - 1) = 15 × 0.732 ≈ 10.98 m."), "explanation": "Distance d = 15 / tan 30° = 15√3. Total height H = d tan 45° = 15√3. Pole = 15√3 - 15 = 15(√3 - 1) m."},
    ])

    # --- l15: Sine & Cosine Rules for Scalene Triangles ---
    add("waec-m6", "l15", "top-waec-trig-02", "Apply the Sine and Cosine rules to solve scalene triangles", [
        {"level": "understanding", "type": "single_choice", "prompt": "Which formula expresses the Sine Rule for any triangle $ABC$?", "correct": "$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$",
         "d1": ("$a \\sin A = b \\sin B = c \\sin C$", "MIS-MULT-CONFUSION", "Sides are divided by sines, not multiplied."), "d2": ("$\\frac{a}{\\cos A} = \\frac{b}{\\cos B}$", "MIS-COS-CONFUSION", "The rule uses sines, not cosines."), "d3": ("$a^2 + b^2 = c^2$", "MIS-PYTHAG-CONFUSION", "Pythagoras applies only to right-angled triangles."), "explanation": "Sine rule: a / sin A = b / sin B = c / sin C."},
        {"level": "understanding", "type": "single_choice", "prompt": "Which formula correctly gives side $a$ using the Cosine Rule?", "correct": "$a^2 = b^2 + c^2 - 2bc \\cos A$",
         "d1": ("$a^2 = b^2 + c^2 + 2bc \\cos A$", "MIS-SIGN-SLIP", "The formula has -2bc cos A, not +."), "d2": ("$a^2 = b^2 + c^2 - bc \\cos A$", "MIS-FACTOR-2-OMIT", "The coefficient is 2bc, not bc."), "d3": ("$a = b + c - 2bc \\cos A$", "MIS-SQUARE-OMIT", "Sides must be squared."), "explanation": "Cosine rule: a² = b² + c² - 2bc cos A."},
        {"level": "understanding", "type": "single_choice", "prompt": "What formula gives the area of a triangle with sides $a$ and $b$ and included angle $C$?", "correct": "$\\frac{1}{2}ab \\sin C$",
         "d1": ("$ab \\sin C$", "MIS-HALF-OMIT", "Must multiply by 1/2."), "d2": ("$\\frac{1}{2}ab \\cos C$", "MIS-COS-CONFUSION", "Area uses sine of included angle."), "d3": ("$\\frac{1}{2}(a + b) \\sin C$", "MIS-SUM-INSTEAD-MULT", "Sides must be multiplied (ab)."), "explanation": "Area = (1/2) ab sin C."},
        {"level": "understanding", "type": "true_false_justification", "prompt": "True or False: The Cosine Rule can be used to find any angle of a triangle when all three sides are known.", "correct": "True: $\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}$ solves for angle $A$ uniquely since $0^\\circ < A < 180^\\circ$.",
         "d1": ("False: At least one angle must be known.", "MIS-RULE-SELECTION", "SSS information uniquely determines angles via cosine rule."), "d2": ("False: Holds only for acute triangles.", "MIS-OBTUSE-RESTRICTION", "Cosine handles obtuse angles naturally (cos > 90° is negative)."), "d3": ("True: But only if the perimeter is an even integer.", "MIS-ARBITRARY-RULE", "Valid for all valid triangle side lengths."), "explanation": "cos A = (b² + c² - a²) / (2bc) solves SSS triangles."},
        {"level": "application", "type": "single_choice", "prompt": "In $\\triangle ABC$, $a = 6\\text{ cm}, b = 8\\text{ cm},$ and $\\angle C = 30^\\circ$. Calculate the area of the triangle.", "correct": "$12\\text{ cm}^2$",
         "d1": ("$24\\text{ cm}^2$", "MIS-HALF-OMIT", "Forgot 1/2: 6 × 8 × 0.5 = 24, with 1/2 gives 12 cm²."), "d2": ("$16\\text{ cm}^2$", "MIS-ARITH-SLIP", "(1/2)(6)(8) sin 30° = 24 × 0.5 = 12 cm²."), "d3": ("$48\\text{ cm}^2$", "MIS-SIN-OMIT", "Forgot sin 30°."), "explanation": "Area = (1/2) × 6 × 8 × sin 30° = 24 × 0.5 = 12 cm²."},
        {"level": "application", "type": "single_choice", "prompt": "In $\\triangle ABC$, $b = 5\\text{ cm}, c = 7\\text{ cm},$ and $\\angle A = 60^\\circ$. Calculate side $a$.", "correct": "$\\sqrt{39}\\text{ cm} \\approx 6.24\\text{ cm}$",
         "d1": ("$\\sqrt{74}\\text{ cm}$", "MIS-COS-TERM-OMIT", "5² + 7² = 74; forgot -2bc cos A = -35."), "d2": ("$6\\text{ cm}$", "MIS-ROUGH-GUESS", "a² = 25 + 49 - 2(5)(7)(0.5) = 74 - 35 = 39 => a = √39 cm."), "d3": ("$\\sqrt{109}\\text{ cm}$", "MIS-SIGN-SLIP", "Subtracted instead of added in cosine rule."), "explanation": "a² = 5² + 7² - 2(5)(7) cos 60° = 25 + 49 - 35 = 39 => a = √39 ≈ 6.24 cm."},
        {"level": "application", "type": "single_choice", "prompt": "In $\\triangle ABC$, $a = 10\\text{ cm}, \\angle A = 30^\\circ,$ and $\\angle B = 45^\\circ$. Calculate side $b$.", "correct": "$10\\sqrt{2}\\text{ cm} \\approx 14.14\\text{ cm}$",
         "d1": ("$10\\text{ cm}$", "MIS-EQUAL-SLIP", "b = a sin B / sin A = 10(√2/2) / (1/2) = 10√2 cm."), "d2": ("$20\\text{ cm}$", "MIS-SCALE-SLIP", "10√2 ≈ 14.14 cm."), "d3": ("$5\\sqrt{2}\\text{ cm}$", "MIS-HALF-SLIP", "Dividing by 1/2 multiplies by 2: (5√2) × 2 = 10√2."), "explanation": "b / sin 45° = 10 / sin 30° => b = 10 × (√2/2) / (1/2) = 10√2 ≈ 14.14 cm."},
        {"level": "application", "type": "numeric_entry", "prompt": "Calculate the area of a triangle with sides $10\\text{ cm}$ and $12\\text{ cm}$ enclosing an angle of $30^\\circ$ (in $\\text{cm}^2$).", "correct": 30,
         "explanation": "Area = (1/2) × 10 × 12 × sin 30° = 60 × 0.5 = 30 cm²."},
        {"level": "application", "type": "ordering", "prompt": "Arrange the steps to find side $a$ given two sides $b, c$ and included angle $A$:", "correct": "A",
         "steps": ["Identify that two sides and included angle (SAS) requires the Cosine Rule.", "State formula: a² = b² + c² - 2bc cos A.", "Substitute values and evaluate the right-hand side.", "Take the positive square root to determine side length a."], "explanation": "Standard SAS Cosine Rule sequence."},
        {"level": "application", "type": "symbolic_entry", "prompt": "Write the formula for $\\cos A$ in terms of sides $a, b,$ and $c$.", "correct": "(b^2 + c^2 - a^2)/(2*b*c)",
         "explanation": "cos A = (b² + c² - a²) / (2bc)."},
        {"level": "error_analysis", "type": "single_choice", "prompt": "To calculate side $a$ with $b=4, c=5, A=60^\\circ$, a student computed $a^2 = 4^2 + 5^2 - 4(5)\\cos 60^\\circ$. What was the error?", "correct": "Omitted the coefficient $2$ in the formula $-2bc \\cos A$ (wrote $-bc \\cos A$).",
         "d1": ("Subtracted instead of adding 4² + 5².", "MIS-SIGN-SLIP", "4² + 5² = 41 was correct."), "d2": ("cos 60° should be √3/2.", "MIS-COS-VALUE", "cos 60° is 1/2."), "d3": ("There is no error.", "MIS-NO-ERROR-CLAIM", "The formula strictly requires -2bc cos A."), "explanation": "The term is -2bc cos A = -2(4)(5)(0.5) = -20. The student wrote -10."},
        {"level": "error_analysis", "type": "single_choice", "prompt": "A student attempts to use the Sine Rule to solve a triangle with known sides $a=7, b=8, c=9$ without any angles. Why is this impossible?", "correct": "The Sine Rule $\\frac{a}{\\sin A} = \\frac{b}{\\sin B}$ requires at least one known angle to set up an equation.",
         "d1": ("The Sine Rule works only for right triangles.", "MIS-RIGHT-RESTRICTION", "Sine rule works for all triangles, but needs an angle-side pair."), "d2": ("Three sides form an invalid triangle.", "MIS-TRIANGLE-INEQ", "7 + 8 > 9 is a valid triangle."), "d3": ("There is no error.", "MIS-NO-ERROR-CLAIM", "SSS requires the Cosine Rule first."), "explanation": "SSS configuration requires the Cosine Rule first to find an angle."},
        {"level": "challenge_transfer", "type": "single_choice", "prompt": "A triangle has sides $5\\text{ cm}, 6\\text{ cm},$ and $7\\text{ cm}$. Find the cosine of the largest angle.", "correct": "$\\frac{1}{5} = 0.2$",
         "d1": ("$\\frac{19}{35}$", "MIS-ANGLE-SWAP", "Largest angle is opposite longest side (7 cm): cos C = (5² + 6² - 7²) / (2 × 5 × 6) = 12 / 60 = 1/5."), "d2": ("$\\frac{29}{35}$", "MIS-ARITH-SLIP", "25 + 36 - 49 = 12. 2(5)(6) = 60 => 12/60 = 1/5."), "d3": ("$\\frac{2}{3}$", "MIS-ROUGH-GUESS", "cos C = 1/5 = 0.2."), "explanation": "Longest side is 7 cm. cos C = (5² + 6² - 7²) / (2 × 5 × 6) = (25 + 36 - 49) / 60 = 12 / 60 = 1/5 = 0.2."},
        {"level": "challenge_transfer", "type": "single_choice", "prompt": "Two ships leave port at the same time. Ship A sails on bearing $040^\\circ$ at $15\\text{ km/h}$, and Ship B sails on bearing $100^\\circ$ at $20\\text{ km/h}$. How far apart are they after $2\\text{ hours}$?", "correct": "$10\\sqrt{13}\\text{ km} \\approx 36.06\\text{ km}$",
         "d1": ("$35\\text{ km}$", "MIS-LINEAR-DIFF", "Cannot simply subtract distances: 40 - 30 = 10."), "d2": ("$50\\text{ km}$", "MIS-PYTHAG-ASSUMPTION", "Angle between them is 100° - 40° = 60°, not 90°."), "d3": ("$25\\text{ km}$", "MIS-ARITH-SLIP", "d² = 30² + 40² - 2(30)(40) cos 60° = 900 + 1600 - 1200 = 1300 => d = 10√13 ≈ 36.06 km."), "explanation": "Distances are 30 km and 40 km. Angle = 100° - 40° = 60°. d² = 30² + 40² - 2(30)(40) cos 60° = 2500 - 1200 = 1300 => d = √1300 = 10√13 ≈ 36.06 km."},
    ])

    return items
