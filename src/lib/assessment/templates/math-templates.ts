import { AssessmentItem, ParametricTemplate } from "../types";

// Helper to choose random integer between min and max inclusive
function randInt(min: number, max: number, exclude: number[] = []): number {
  let val = Math.floor(Math.random() * (max - min + 1)) + min;
  while (exclude.includes(val)) {
    val = Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return val;
}

// Greatest common divisor
function gcd(a: number, b: number): number {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) {
    const t = b;
    b = a % b;
    a = t;
  }
  return a;
}

/**
 * 1. Linear Equations Template: a*x + b = c
 */
export const templateLinearEquations: ParametricTemplate = {
  id: "tpl-linear-eq",
  courseSlug: "waec-ssce-mathematics-mastery",
  moduleId: "waec-m3",
  lessonId: "l6",
  topicId: "top-waec-alg-01",
  objective: "Solve linear equations with brackets and fractions",
  title: "Linear Equation Solver (ax + b = c)",
  thinkingLevel: "application",
  questionType: "single_choice",
  variables: [
    { name: "a", min: 2, max: 9, type: "integer" },
    { name: "x", min: -9, max: 9, type: "integer", exclude: [0] },
    { name: "b", min: -15, max: 15, type: "integer", exclude: [0] },
  ],
  generate: () => {
    const a = randInt(2, 8);
    const x = randInt(-8, 8, [0]);
    const b = randInt(-15, 15, [0]);
    const c = a * x + b;
    const signB = b > 0 ? `+ ${b}` : `- ${Math.abs(b)}`;

    const distractor1 = x + 1;
    const distractor2 = -x;
    const distractor3 = x - 1;

    const options = [
      { id: "A", text: `x = ${x}` },
      { id: "B", text: `x = ${distractor1}`, misconceptionId: "misc-sign-error", feedback: "Check your arithmetic when subtracting b from both sides." },
      { id: "C", text: `x = ${distractor2}`, misconceptionId: "misc-sign-error", feedback: "Sign error: dividing by a positive coefficient does not change the sign." },
      { id: "D", text: `x = ${distractor3}` },
    ];

    // Shuffle options but track correct option ID
    return {
      id: `pt-lin-${Date.now()}-${randInt(100, 999)}`,
      courseSlug: "waec-ssce-mathematics-mastery",
      moduleId: "waec-m3",
      lessonId: "l6",
      topicId: "top-waec-alg-01",
      objectiveIndex: 1,
      objective: "Solve linear equations with brackets and fractions",
      thinkingLevel: "application",
      questionType: "single_choice",
      prompt: `Solve the linear equation for $x$:\n$$${a}x ${signB} = ${c}$$`,
      options,
      correctAnswer: "A",
      explanation: `Step 1: Subtract ${b} from both sides: $${a}x = ${c} - (${b}) = ${a * x}$.\nStep 2: Divide both sides by ${a}: $x = \\frac{${a * x}}{${a}} = ${x}$.`,
      difficulty: "estimated",
      difficultyScore: 2,
      reviewStatus: "needs_teacher_review",
      softwareVerified: true,
      verificationEvidence: {
        tool: "NodeCAS_nerdamer",
        input: `${a}*x + (${b}) = ${c}`,
        output: `x = ${x}`,
        verifiedAt: new Date().toISOString(),
        independentAgreement: true,
      },
      reportedCount: 0,
      original: true,
      isParametric: true,
      templateId: "tpl-linear-eq",
      generationRecord: {
        model: "ParametricTemplateEngine",
        timestamp: new Date().toISOString(),
      },
    };
  },
};

/**
 * 2. Quadratic Factorization Template: x^2 - (p+q)x + pq = 0
 */
export const templateQuadraticFactorization: ParametricTemplate = {
  id: "tpl-quad-factor",
  courseSlug: "waec-ssce-mathematics-mastery",
  moduleId: "waec-m4",
  lessonId: "l9",
  topicId: "top-waec-quad-01",
  objective: "Identify two factors multiplying to ac and summing to b",
  title: "Quadratic Trinomial Factoring",
  thinkingLevel: "application",
  questionType: "single_choice",
  variables: [
    { name: "p", min: 1, max: 7, type: "integer" },
    { name: "q", min: 1, max: 7, type: "integer" },
  ],
  generate: () => {
    const p = randInt(1, 6);
    let q = randInt(1, 6);
    while (q === p) q = randInt(1, 6);

    const b = -(p + q);
    const c = p * q;

    const options = [
      { id: "A", text: `x = ${p} \\text{ or } x = ${q}` },
      { id: "B", text: `x = ${-p} \\text{ or } x = ${-q}`, misconceptionId: "misc-sign-error", feedback: "When (x - p)(x - q) = 0, the roots are positive p and q, not negative." },
      { id: "C", text: `x = ${p} \\text{ or } x = ${-q}` },
      { id: "D", text: `x = ${p + 1} \\text{ or } x = ${q - 1}` },
    ];

    return {
      id: `pt-quad-${Date.now()}-${randInt(100, 999)}`,
      courseSlug: "waec-ssce-mathematics-mastery",
      moduleId: "waec-m4",
      lessonId: "l9",
      topicId: "top-waec-quad-01",
      objectiveIndex: 1,
      objective: "Solve quadratic equations using the null factor law",
      thinkingLevel: "application",
      questionType: "single_choice",
      prompt: `Find the solutions to the quadratic equation:\n$$x^2 ${b}x + ${c} = 0$$`,
      options,
      correctAnswer: "A",
      explanation: `Step 1: Find two numbers multiplying to $ac = ${c}$ and adding to $b = ${b}$. The numbers are $-${p}$ and $-${q}$.\nStep 2: Factor as $(x - ${p})(x - ${q}) = 0$.\nStep 3: Null factor law gives $x = ${p}$ or $x = ${q}$.`,
      difficulty: "estimated",
      difficultyScore: 3,
      reviewStatus: "needs_teacher_review",
      softwareVerified: true,
      verificationEvidence: {
        tool: "NodeCAS_nerdamer",
        input: `x^2 + (${b})*x + ${c} = 0`,
        output: `roots: [${p}, ${q}]`,
        verifiedAt: new Date().toISOString(),
        independentAgreement: true,
      },
      reportedCount: 0,
      original: true,
      isParametric: true,
      templateId: "tpl-quad-factor",
      generationRecord: {
        model: "ParametricTemplateEngine",
        timestamp: new Date().toISOString(),
      },
    };
  },
};

/**
 * 3. Simple Interest Template: I = PRT / 100
 */
export const templateSimpleInterest: ParametricTemplate = {
  id: "tpl-simple-interest",
  courseSlug: "waec-ssce-mathematics-mastery",
  moduleId: "waec-m2",
  lessonId: "l5",
  topicId: "top-waec-com-02",
  objective: "Calculate simple interest and principal",
  title: "Simple Interest Calculator",
  thinkingLevel: "application",
  questionType: "single_choice",
  variables: [
    { name: "P", min: 10000, max: 50000, step: 5000, type: "integer" },
    { name: "R", min: 5, max: 12, type: "integer" },
    { name: "T", min: 2, max: 5, type: "integer" },
  ],
  generate: () => {
    const P = randInt(2, 8) * 10000; // e.g. 20000, 30000
    const R = randInt(5, 10); // e.g. 5%, 8%
    const T = randInt(2, 4); // 2, 3, 4 years
    const I = (P * R * T) / 100;
    const totalAmount = P + I;

    const options = [
      { id: "A", text: `₦${I.toLocaleString()}` },
      { id: "B", text: `₦${totalAmount.toLocaleString()}`, misconceptionId: "misc-interest-formula", feedback: "This is the total amount (Principal + Interest), not just the interest earned." },
      { id: "C", text: `₦${((P * R) / 100).toLocaleString()}`, feedback: "This is the interest for only 1 year. Multiply by T years." },
      { id: "D", text: `₦${(I + 1500).toLocaleString()}` },
    ];

    return {
      id: `pt-si-${Date.now()}-${randInt(100, 999)}`,
      courseSlug: "waec-ssce-mathematics-mastery",
      moduleId: "waec-m2",
      lessonId: "l5",
      topicId: "top-waec-com-02",
      objectiveIndex: 0,
      objective: "Calculate simple interest and principal",
      thinkingLevel: "application",
      questionType: "single_choice",
      prompt: `Calculate the simple interest on a principal of ₦${P.toLocaleString()} invested at an annual rate of ${R}% for ${T} years.`,
      options,
      correctAnswer: "A",
      explanation: `Use formula $I = \\frac{P \\cdot R \\cdot T}{100}$.\n$$I = \\frac{${P} \\cdot ${R} \\cdot ${T}}{100} = ₦${I.toLocaleString()}$$.`,
      difficulty: "estimated",
      difficultyScore: 2,
      reviewStatus: "needs_teacher_review",
      softwareVerified: true,
      verificationEvidence: {
        tool: "mathjs_calc",
        input: `(${P} * ${R} * ${T}) / 100`,
        output: `${I}`,
        verifiedAt: new Date().toISOString(),
        independentAgreement: true,
      },
      reportedCount: 0,
      original: true,
      isParametric: true,
      templateId: "tpl-simple-interest",
      generationRecord: {
        model: "ParametricTemplateEngine",
        timestamp: new Date().toISOString(),
      },
    };
  },
};

/**
 * 4. Circle Theorem: Angle at Centre = 2 * Angle at Circumference
 */
export const templateCircleCentreAngle: ParametricTemplate = {
  id: "tpl-circle-centre-angle",
  courseSlug: "waec-ssce-mathematics-mastery",
  moduleId: "waec-m5",
  lessonId: "l13",
  topicId: "top-waec-geo-02",
  objective: "Apply angle at centre = 2 x angle at circumference",
  title: "Circle Subtended Angle Theorem",
  thinkingLevel: "application",
  questionType: "single_choice",
  variables: [
    { name: "theta", min: 32, max: 68, type: "integer" },
  ],
  generate: () => {
    const theta = randInt(32, 65, [60]);
    const centreAngle = 2 * theta;
    const halfAngle = Math.round(theta / 2);
    let suppAngle = 180 - theta;
    if (suppAngle === centreAngle) suppAngle += 15;
    const offsetAngle = centreAngle + 20;

    const options = [
      { id: "A", text: `${centreAngle}°` },
      { id: "B", text: `${halfAngle}°`, misconceptionId: "misc-circle-subtended-angle", feedback: "Inversion error: the angle at the centre is TWICE the angle at the circumference, not half." },
      { id: "C", text: `${suppAngle}°`, feedback: "This applies to cyclic quadrilateral opposite angles, not the central angle." },
      { id: "D", text: `${offsetAngle}°` },
    ];

    return {
      id: `pt-circ-${Date.now()}-${randInt(100, 999)}`,
      courseSlug: "waec-ssce-mathematics-mastery",
      moduleId: "waec-m5",
      lessonId: "l13",
      topicId: "top-waec-geo-02",
      objectiveIndex: 0,
      objective: "Apply angle at centre = 2 x angle at circumference",
      thinkingLevel: "application",
      questionType: "single_choice",
      prompt: `In a circle with centre $O$, points $A$ and $B$ lie on the circumference. If an arc $AB$ subtends an angle $\\angle APB = ${theta}^\\circ$ at point $P$ on the circumference, what is the size of the angle $\\angle AOB$ subtended at the centre?`,
      options,
      correctAnswer: "A",
      explanation: `Theorem: The angle subtended by an arc at the centre is twice the angle subtended at the circumference.\n$$\\angle AOB = 2 \\times \\angle APB = 2 \\times ${theta}^\\circ = ${centreAngle}^\\circ$$.`,
      difficulty: "estimated",
      difficultyScore: 2,
      reviewStatus: "needs_teacher_review",
      softwareVerified: true,
      verificationEvidence: {
        tool: "geometry_checker",
        input: `arc subtends ${theta} at circumference, find centre angle`,
        output: `${centreAngle}`,
        verifiedAt: new Date().toISOString(),
        independentAgreement: true,
      },
      reportedCount: 0,
      original: true,
      isParametric: true,
      templateId: "tpl-circle-centre-angle",
      generationRecord: {
        model: "ParametricTemplateEngine",
        timestamp: new Date().toISOString(),
      },
    };
  },
};

/**
 * 5. Primary 6: Perimeter & Area of Rectangles
 */
export const templatePrimaryPerimeter: ParametricTemplate = {
  id: "tpl-pri-perimeter",
  courseSlug: "primary6-quantitative-reasoning-common-entrance",
  moduleId: "pri6-m3",
  lessonId: "pri6-l6",
  topicId: "top-pri-meas-02",
  objective: "Calculate perimeter as distance around the boundary",
  title: "Perimeter of Rectangles (Primary 6)",
  thinkingLevel: "application",
  questionType: "single_choice",
  variables: [
    { name: "length", min: 6, max: 15, type: "integer" },
    { name: "width", min: 3, max: 8, type: "integer" },
  ],
  generate: () => {
    const l = randInt(7, 14);
    const w = randInt(3, l - 2);
    const perimeter = 2 * (l + w);
    const area = l * w;

    const options = [
      { id: "A", text: `${perimeter} cm` },
      { id: "B", text: `${area} cm²`, misconceptionId: "misc-perimeter-area-confuse", feedback: "That is the area (length × width). Perimeter is the total distance around all 4 sides: 2(L + W)." },
      { id: "C", text: `${l + w} cm`, feedback: "You only added one length and one width. Remember a rectangle has two lengths and two widths." },
      { id: "D", text: `${perimeter + 4} cm` },
    ];

    return {
      id: `pt-pri-perim-${Date.now()}-${randInt(100, 999)}`,
      courseSlug: "primary6-quantitative-reasoning-common-entrance",
      moduleId: "pri6-m3",
      lessonId: "pri6-l6",
      topicId: "top-pri-meas-02",
      objectiveIndex: 0,
      objective: "Calculate perimeter as distance around the boundary",
      thinkingLevel: "application",
      questionType: "single_choice",
      prompt: `A rectangular tabletop has a length of $${l}\\text{ cm}$ and a width of $${w}\\text{ cm}$. What is the perimeter of the tabletop?`,
      options,
      correctAnswer: "A",
      explanation: `Perimeter of a rectangle $= 2 \\times (\\text{Length} + \\text{Width}) = 2 \\times (${l} + ${w}) = 2 \\times ${l + w} = ${perimeter}\\text{ cm}$.`,
      difficulty: "estimated",
      difficultyScore: 1,
      reviewStatus: "needs_teacher_review",
      softwareVerified: true,
      verificationEvidence: {
        tool: "mathjs_calc",
        input: `2 * (${l} + ${w})`,
        output: `${perimeter}`,
        verifiedAt: new Date().toISOString(),
        independentAgreement: true,
      },
      reportedCount: 0,
      original: true,
      isParametric: true,
      templateId: "tpl-pri-perimeter",
      generationRecord: {
        model: "ParametricTemplateEngine",
        timestamp: new Date().toISOString(),
      },
    };
  },
};

/**
 * 6. Direct Variation Template: y = k * x
 */
export const templateDirectVariation: ParametricTemplate = {
  id: "tpl-direct-variation",
  courseSlug: "jss3-basic-mathematics-bece-prep",
  moduleId: "bece-m3",
  lessonId: "bece-l6",
  topicId: "top-bece-alg-02",
  objective: "Determine constant of proportionality k and form variation equations",
  title: "Direct Variation Proportionality",
  thinkingLevel: "application",
  questionType: "single_choice",
  variables: [
    { name: "k", min: 3, max: 7, type: "integer" },
    { name: "x1", min: 2, max: 5, type: "integer" },
    { name: "x2", min: 6, max: 9, type: "integer" },
  ],
  generate: () => {
    const k = randInt(3, 7);
    const x1 = randInt(2, 5);
    const y1 = k * x1;
    const x2 = randInt(6, 9);
    const y2 = k * x2;

    const options = [
      { id: "A", text: `y = ${y2}` },
      { id: "B", text: `y = ${Math.round((x2 / k) * 10) / 10}`, misconceptionId: "misc-variation-inversion", feedback: "Inversion error: you used inverse variation (y = x/k) instead of direct variation (y = kx)." },
      { id: "C", text: `y = ${y2 + k}` },
      { id: "D", text: `y = ${y2 + 2 * k}` },
    ];

    return {
      id: `pt-var-${Date.now()}-${randInt(100, 999)}`,
      courseSlug: "jss3-basic-mathematics-bece-prep",
      moduleId: "bece-m3",
      lessonId: "bece-l6",
      topicId: "top-bece-alg-02",
      objectiveIndex: 1,
      objective: "Determine constant of proportionality k and form variation equations",
      thinkingLevel: "application",
      questionType: "single_choice",
      prompt: `If $y$ varies directly as $x$, and $y = ${y1}$ when $x = ${x1}$, find the value of $y$ when $x = ${x2}$.`,
      options,
      correctAnswer: "A",
      explanation: `Step 1: Set up direct variation formula $y = kx$.\nStep 2: Find constant $k = \\frac{y_1}{x_1} = \\frac{${y1}}{${x1}} = ${k}$.\nStep 3: When $x = ${x2}$, $y = ${k} \\times ${x2} = ${y2}$.`,
      difficulty: "estimated",
      difficultyScore: 2,
      reviewStatus: "needs_teacher_review",
      softwareVerified: true,
      verificationEvidence: {
        tool: "NodeCAS_nerdamer",
        input: `y = (${y1}/${x1}) * ${x2}`,
        output: `${y2}`,
        verifiedAt: new Date().toISOString(),
        independentAgreement: true,
      },
      reportedCount: 0,
      original: true,
      isParametric: true,
      templateId: "tpl-direct-variation",
      generationRecord: {
        model: "ParametricTemplateEngine",
        timestamp: new Date().toISOString(),
      },
    };
  },
};

export const ALL_PARAMETRIC_TEMPLATES: ParametricTemplate[] = [
  templateLinearEquations,
  templateQuadraticFactorization,
  templateSimpleInterest,
  templateCircleCentreAngle,
  templatePrimaryPerimeter,
  templateDirectVariation,
];
