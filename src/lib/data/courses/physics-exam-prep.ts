/**
 * Trainbow HUB: Physics Examination Preparation Series
 * 1. WAEC & NECO SSCE Physics Mastery
 * 2. JAMB UTME Physics Complete
 */

import { PhysicsCourseData } from "../physics-curriculum";

export const EXAM_PREP_PHYSICS_COURSES: PhysicsCourseData[] = [
  // ==========================================================================
  // COURSE 4: WAEC and NECO SSCE Physics Mastery
  // ==========================================================================
  {
    id: "crs-phy-waec",
    slug: "waec-neco-ssce-physics-mastery",
    title: "WAEC and NECO SSCE Physics Mastery",
    subtitle: "Complete syllabus coverage, structured theory problem-solving, ray tracing, circuit analysis, and practical Paper 3 techniques",
    subject: "Physics",
    subjectSlug: "physics",
    track: "exam-mastery",
    level: "WAEC Prep",
    examBody: "WAEC & NECO",
    instructorName: "Trainbow HUB Academy",
    instructorTitle: "Senior Physics Examiner & Chief Consultant",
    priceMinorUnits: 4000000,
    currency: "NGN",
    shortDescription: "Master WAEC and NECO Paper 1 (Objective), Paper 2 (Theory), and Paper 3 (Practical) with step-by-step examiner marking rubrics.",
    description: "Prepare thoroughly for straight distinctions in WASSCE and NECO Senior Secondary Certificate Examinations. This comprehensive masterclass covers multi-step numerical calculations, optical ray construction with directional arrows, electrical circuit calculations, experimental graph plotting, error analysis, and examiner-vetted answering techniques.",
    learningOutcomes: [
      "Master step-by-step method and accuracy marks across WAEC Paper 2 structured theory sections",
      "Construct accurate ray diagrams for mirrors, prisms, and lenses with required optical arrows",
      "Plot experimental data on standard WAEC scales and deduce gradients and physical intercepts accurately",
      "Solve advanced multi-step mechanics, thermodynamics, and electricity numerical problems without unit slips",
      "Avoid the top 20 candidate mistakes highlighted in recent WAEC Chief Examiners' Reports",
    ],
    prerequisites: ["Completion of SS 1 - SS 3 Physics syllabus"],
    tags: ["WAEC", "NECO", "WASSCE", "SSCE", "Physics Mastery", "Theory", "Practical", "Distinction"],
    syllabusAlignment: {
      source: "WAEC WASSCE Physics Regulations & Syllabus (2024-2026)",
      year: "2024",
      lastAlignedAt: "2026-11-01",
      needsVerification: true,
    },
    relatedCourseSlugs: [
      "jamb-utme-physics-complete",
      "graphs-diagrams-practical-physics",
      "physics-numericals-bootcamp",
    ],
    modules: [
      {
        id: "mod-phy-waec-1",
        title: "Module 1: Advanced Mechanics & Projectiles for WASSCE",
        description: "Projectile trajectories, inclined plane friction, and momentum conservation.",
        sortOrder: 1,
        lessons: [
          {
            id: "les-phy-waec-1-1",
            slug: "projectile-motion-time-of-flight-range-calculations",
            videoId: "r32wJJhjfZ4",
            title: "Projectile Motion: Time of Flight, Maximum Height and Range for WAEC",
            sortOrder: 1,
            durationMinutes: 50,
            isFreePreview: true,
            reviewStatus: "needs_teacher_review",
            topicId: "top-phy-projectiles",
            weakAreaCodes: ["WA-PHY-MCH-05"],
            summary: "Derive and apply projectile kinematic relations for oblique launch angles in West African examinations.",
            objectives: [
              "Resolve initial launch velocity into $u_x = u\\cos\\theta$ and $u_y = u\\sin\\theta$",
              "Derive formulas for time of flight $T$, maximum height $H$, and horizontal range $R$",
              "Solve multi-step trajectory problems and apply the $45^\\circ$ maximum range condition",
            ],
            keyPoints: [
              "Horizontal motion is uniform ($a_x = 0$): $x = (u \\cos \\theta)t$.",
              "Vertical motion is uniformly accelerated ($a_y = -g$): $v_y = u \\sin \\theta - gt$.",
              "Time to reach maximum height: $t = \\frac{u \\sin \\theta}{g}$.",
              "Total Time of Flight: $T = \\frac{2u \\sin \\theta}{g}$.",
              "Maximum Height: $H = \\frac{u^2 \\sin^2 \\theta}{2g}$.",
              "Horizontal Range: $R = \\frac{u^2 \\sin 2\\theta}{g}$. Maximum range occurs at launch angle $\\theta = 45^\\circ$.",
            ],
            formulas: [
              {
                name: "Total Time of Flight",
                expression: "T = \\frac{2u \\sin \\theta}{g}",
                variables: [
                  { symbol: "T", meaning: "Time of flight", unit: "s" },
                  { symbol: "u", meaning: "Initial projection speed", unit: "m/s" },
                  { symbol: "\\theta", meaning: "Angle of projection to horizontal", unit: "degrees" },
                  { symbol: "g", meaning: "Acceleration due to gravity (9.8 or 10)", unit: "m/s²" },
                ],
              },
              {
                name: "Maximum Range",
                expression: "R_{\\max} = \\frac{u^2}{g} \\quad (\\text{at } \\theta = 45^\\circ)",
                variables: [
                  { symbol: "R_{\\max}", meaning: "Maximum horizontal range", unit: "m" },
                  { symbol: "u", meaning: "Projection speed", unit: "m/s" },
                  { symbol: "g", meaning: "Acceleration due to gravity", unit: "m/s²" },
                ],
              },
            ],
            constantsTable: [
              {
                symbol: "g",
                name: "Acceleration due to gravity",
                value: "9.8 or 10.0",
                unit: "m/s²",
                examConvention: "WAEC specifies g = 9.8 or 10.0 m/s² on front cover; follow paper instruction strictly.",
              },
            ],
            commonMistakes: {
              mistake: "Using $\\sin 2\\theta$ instead of $\\sin^2 \\theta$ when calculating maximum height $H$.",
              wrongExample: "Writing $H = \\frac{u^2 \\sin 2\\theta}{2g}$.",
              correctedExample: "Maximum height is $H = \\frac{u^2 \\sin^2 \\theta}{2g} = \\frac{(u \\sin \\theta)^2}{2g}$. Range is $R = \\frac{u^2 \\sin 2\\theta}{g}$.",
              explanation: "Height depends on the square of the vertical component $(u_y)^2$; range depends on the product $2 u_x u_y / g$.",
            },
            workedExamples: [
              {
                context: "WASSCE Projectile numerical problem",
                question: "A football is kicked with a velocity of $40\\text{ m/s}$ at an angle of $30^\\circ$ to the horizontal. Taking $g = 10\\text{ m/s}^2$, calculate: (i) time of flight, (ii) maximum height reached, (iii) horizontal range.",
                stepByStepSolution: [
                  "1. Time of flight: $T = \\frac{2u \\sin \\theta}{g} = \\frac{2(40) \\sin 30^\\circ}{10} = \\frac{80(0.5)}{10} = 4.0\\text{ s}$.",
                  "2. Maximum height: $H = \\frac{u^2 \\sin^2 \\theta}{2g} = \\frac{(40)^2 (0.5)^2}{2(10)} = \\frac{1600 \\times 0.25}{20} = \\frac{400}{20} = 20.0\\text{ m}$.",
                  "3. Horizontal range: $R = \\frac{u^2 \\sin 2\\theta}{g} = \\frac{1600 \\sin 60^\\circ}{10} = 160 \\times 0.866 = 138.56\\text{ m}$.",
                ],
                finalAnswer: "Time of flight = $4.0\\text{ s}$; Maximum height = $20.0\\text{ m}$; Range = $138.6\\text{ m}$.",
                ruleExplanation: "WAEC awards separate method marks for the formula, substitution, and final answer with correct SI units.",
              },
            ],
            checkpoint: {
              id: "chk-phy-waec-1-1",
              title: "Checkpoint: Projectile Mechanics",
              passPercentage: 60,
              verificationMethod: "REASONING_DUAL_PASS_VERIFIED",
              questions: [
                {
                  id: "q_phy_waec_1_1_1",
                  prompt: "At the highest point of a projectile's trajectory, which statement is strictly true?",
                  options: [
                    { id: "A", text: "Both velocity and acceleration are zero" },
                    { id: "B", text: "Vertical velocity is zero, but horizontal velocity and acceleration are non-zero" },
                    { id: "C", text: "Horizontal velocity is zero, but vertical velocity is maximum" },
                    { id: "D", text: "Acceleration acts in the direction of motion" },
                  ],
                  correctOptionId: "B",
                  explanation: "At the peak, $v_y = 0$, but the object continues to travel horizontally at $u_x = u\\cos\\theta$ and acceleration is downwards ($g$).",
                  topic: "Peak Trajectory State",
                  weakAreaCode: "WA-PHY-MCH-05",
                },
                {
                  id: "q_phy_waec_1_1_2",
                  prompt: "A projectile launched at speed $u$ achieves maximum horizontal range when projected at what angle to the horizontal?",
                  options: [
                    { id: "A", text: "$30^\\circ$" },
                    { id: "B", text: "$45^\\circ$" },
                    { id: "C", text: "$60^\\circ$" },
                    { id: "D", text: "$90^\\circ$" },
                  ],
                  correctOptionId: "B",
                  explanation: "Range $R = \\frac{u^2 \\sin 2\\theta}{g}$ is maximized when $\\sin 2\\theta = 1 \\implies 2\\theta = 90^\\circ \\implies \\theta = 45^\\circ$.",
                  topic: "Maximum Range Angle",
                  weakAreaCode: "WA-PHY-MCH-05",
                },
                {
                  id: "q_phy_waec_1_1_3",
                  prompt: "A stone is thrown horizontally from the top of a cliff of height $45\\text{ m}$ with speed $20\\text{ m/s}$. How long does it take to hit the ground? ($g = 10\\text{ m/s}^2$).",
                  options: [
                    { id: "A", text: "$2.0\\text{ s}$" },
                    { id: "B", text: "$3.0\\text{ s}$" },
                    { id: "C", text: "$4.5\\text{ s}$" },
                    { id: "D", text: "$9.0\\text{ s}$" },
                  ],
                  correctOptionId: "B",
                  explanation: "Vertical motion: $h = \\frac{1}{2}gt^2 \\implies 45 = \\frac{1}{2}(10)t^2 \\implies 5t^2 = 45 \\implies t^2 = 9 \\implies t = 3.0\\text{ s}$.",
                  topic: "Horizontal Projection Flight Time",
                  weakAreaCode: "WA-PHY-MCH-05",
                },
                {
                  id: "q_phy_waec_1_1_4",
                  prompt: "Two projectiles launched at the same initial speed $u$ at complementary angles $\\theta_1$ and $\\theta_2$ (where $\\theta_1 + \\theta_2 = 90^\\circ$) will have:",
                  options: [
                    { id: "A", text: "The same maximum height" },
                    { id: "B", text: "The same time of flight" },
                    { id: "C", text: "The same horizontal range" },
                    { id: "D", text: "The same vertical acceleration" },
                  ],
                  correctOptionId: "C",
                  explanation: "Since $\\sin 2(90^\\circ - \\theta) = \\sin(180^\\circ - 2\\theta) = \\sin 2\\theta$, complementary angles produce identical horizontal ranges.",
                  topic: "Complementary Projection Angles",
                  weakAreaCode: "WA-PHY-MCH-05",
                },
                {
                  id: "q_phy_waec_1_1_5",
                  prompt: "If air resistance is neglected, the path of a projectile in a uniform gravitational field is a:",
                  options: [
                    { id: "A", text: "Circle" },
                    { id: "B", text: "Straight line" },
                    { id: "C", text: "Parabola" },
                    { id: "D", text: "Hyperbola" },
                  ],
                  correctOptionId: "C",
                  explanation: "Eliminating $t$ between $x = (u\\cos\\theta)t$ and $y = (u\\sin\\theta)t - \\frac{1}{2}gt^2$ yields the quadratic curve $y = x\\tan\\theta - \\frac{g x^2}{2u^2\\cos^2\\theta}$ (a parabola).",
                  topic: "Trajectory Geometry",
                  weakAreaCode: "WA-PHY-MCH-05",
                },
              ],
            },
            examTip: "In WAEC theory questions, always state the value of $g$ you are using. If the question front page specifies $g = 9.8\\text{ m/s}^2$, using $10\\text{ m/s}^2$ without indication will cost accuracy marks.",
          },
        ],
      },
    ],
  },

  // ==========================================================================
  // COURSE 5: JAMB UTME Physics Complete
  // ==========================================================================
  {
    id: "crs-phy-jamb",
    slug: "jamb-utme-physics-complete",
    title: "JAMB UTME Physics Complete",
    subtitle: "High-speed CBT problem solving, rapid option elimination, dimensional shortcuts, and syllabus mastery for 90+ score targets",
    subject: "Physics",
    subjectSlug: "physics",
    track: "utme-mastery",
    level: "JAMB UTME Prep",
    examBody: "JAMB",
    instructorName: "Trainbow HUB Academy",
    instructorTitle: "Senior Physics Examiner & Chief Consultant",
    priceMinorUnits: 3000000,
    currency: "NGN",
    shortDescription: "Techniques, short-cuts, dimensional analysis, and timed CBT practice for high scores in JAMB UTME Physics.",
    description: "Designed specifically for the computer-based testing (CBT) environment of the Joint Admissions and Matriculation Board (JAMB). Master fast mental calculation shortcuts, parity and extreme-value elimination, proportional reasoning, and error traps across Mechanics, Waves, Electricity, and Modern Physics.",
    learningOutcomes: [
      "Solve multiple-choice Physics calculations in under 45 seconds using proportional scaling and dimensional analysis",
      "Eliminate wrong distractors rapidly using sign conventions, unit checks, and physical impossibility limits",
      "Master high-yield JAMB question types in current electricity, optics, radioactivity, and thermal physics",
      "Navigate timed CBT drills with strategic pacing to target 90+ in UTME Physics",
    ],
    prerequisites: ["Senior Secondary Physics knowledge"],
    tags: ["JAMB", "UTME", "CBT", "Speed", "Shortcuts", "Physics", "Strategy"],
    syllabusAlignment: {
      source: "JAMB UTME Physics Syllabus (IBASS 2024-2026)",
      year: "2024",
      lastAlignedAt: "2026-11-01",
      needsVerification: true,
    },
    relatedCourseSlugs: [
      "waec-neco-ssce-physics-mastery",
      "physics-numericals-bootcamp",
    ],
    modules: [
      {
        id: "mod-phy-jamb-1",
        title: "Module 1: CBT Speed Tactics & Mechanics Shortcuts",
        description: "Pacing strategies, proportional reasoning, and fast formula deductions for UTME.",
        sortOrder: 1,
        lessons: [
          {
            id: "les-phy-jamb-1-1",
            slug: "cbt-time-management-proportional-reasoning",
            videoId: "FbvsBnk2Btw",
            title: "JAMB CBT Time Management and Proportional Scaling in Physics",
            sortOrder: 1,
            durationMinutes: 40,
            isFreePreview: true,
            reviewStatus: "needs_teacher_review",
            topicId: "top-phy-jamb-speed",
            weakAreaCodes: ["WA-PHY-MCH-01", "WA-PHY-MCH-07"],
            summary: "Learn how to solve UTME questions in under 30 seconds by tracking proportional relationships ($v^2$, $1/r^2$, $T^2 \\propto l$) instead of calculating lengthy arithmetic.",
            objectives: [
              "Allocate optimal time across 40 JAMB Physics CBT questions",
              "Apply proportional scaling rules ($y \\propto x^n$) to find changes without re-computing constants",
              "Use extreme-value testing and dimensional checking to eliminate 2 distractors instantly",
            ],
            keyPoints: [
              "JAMB gives 40 Physics questions in roughly 35-40 minutes; target 45 seconds per question.",
              "If kinetic energy $E_k = \\frac{1}{2}mv^2$ and speed doubles, $E_k$ increases by $2^2 = 4$ times.",
              "If the distance between charges doubles, electrostatic force $F \\propto 1/r^2$ becomes $1/4$ of original.",
              "If length of a simple pendulum quadruples, its period $T \\propto \\sqrt{l}$ doubles ($T' = \\sqrt{4} T = 2T$).",
              "Always check dimensions and units of options first: options with wrong units can be discarded in 3 seconds.",
            ],
            formulas: [
              {
                name: "Proportional Scaling Relation",
                expression: "\\frac{Y_2}{Y_1} = \\left(\\frac{X_2}{X_1}\\right)^n",
                variables: [
                  { symbol: "Y_1, Y_2", meaning: "Initial and final dependent quantities", unit: "depends on quantity" },
                  { symbol: "X_1, X_2", meaning: "Initial and final independent variables", unit: "depends on quantity" },
                  { symbol: "n", meaning: "Power of proportionality (e.g. 2 for v², -2 for 1/r²)", unit: "dimensionless" },
                ],
              },
            ],
            commonMistakes: {
              mistake: "Plugging in all constants ($G$, $\\pi$, $m_1$, $m_2$) when only the ratio of change is asked.",
              wrongExample: "Calculating $F_1 = \\frac{(6.67\\times 10^{-11})(5)(10)}{(0.2)^2}$ and then $F_2$ when distance is doubled.",
              correctedExample: "Recognize inverse square law: if $r$ is doubled, force is simply multiplied by $\\frac{1}{2^2} = \\frac{1}{4}$.",
              explanation: "Ratios cancel all universal constants, eliminating 90% of calculation time in CBT.",
            },
            workedExamples: [
              {
                context: "JAMB Proportional reasoning shortcut",
                question: "The period of oscillation of a simple pendulum is $2.0\\text{ s}$. If its length is increased by $300\\%$ (to four times its original length), what is its new period?",
                stepByStepSolution: [
                  "Recall period formula: $T = 2\\pi \\sqrt{\\frac{l}{g}} \\implies T \\propto \\sqrt{l}$.",
                  "New length is $l' = l + 3l = 4l$.",
                  "Ratio: $\\frac{T'}{T} = \\sqrt{\\frac{l'}{l}} = \\sqrt{4} = 2$.",
                  "New period: $T' = 2 \\times T = 2 \\times 2.0\\text{ s} = 4.0\\text{ s}$.",
                ],
                finalAnswer: "$4.0\\text{ s}$",
                ruleExplanation: "Zero calculations of $\\pi$ or $g$ were needed; ratio scaling solved the problem in 15 seconds.",
              },
            ],
            checkpoint: {
              id: "chk-phy-jamb-1-1",
              title: "Checkpoint: UTME Scaling Shortcuts",
              passPercentage: 60,
              verificationMethod: "REASONING_DUAL_PASS_VERIFIED",
              questions: [
                {
                  id: "q_phy_jamb_1_1_1",
                  prompt: "If the speed of a moving car is tripled, by what factor does its kinetic energy increase?",
                  options: [
                    { id: "A", text: "$3$" },
                    { id: "B", text: "$6$" },
                    { id: "C", text: "$9$" },
                    { id: "D", text: "$27$" },
                  ],
                  correctOptionId: "C",
                  explanation: "$E_k \\propto v^2$. If $v$ triples, $E_k$ increases by $3^2 = 9$ times.",
                  topic: "Kinetic Energy Scaling",
                  weakAreaCode: "WA-PHY-MCH-07",
                },
                {
                  id: "q_phy_jamb_1_1_2",
                  prompt: "The distance between two point charges is halved. The electrostatic force between them:",
                  options: [
                    { id: "A", text: "Is halved" },
                    { id: "B", text: "Doubles" },
                    { id: "C", text: "Quadruples (increases 4 times)" },
                    { id: "D", text: "Remains unchanged" },
                  ],
                  correctOptionId: "C",
                  explanation: "Coulomb's law states $F \\propto 1/r^2$. If $r$ becomes $r/2$, $F$ becomes $1/(1/2)^2 = 4$ times larger.",
                  topic: "Inverse Square Scaling",
                  weakAreaCode: "WA-PHY-ELC-01",
                },
                {
                  id: "q_phy_jamb_1_1_3",
                  prompt: "A wire of resistance $12\\text{ }\\Omega$ is stretched uniformly to double its original length while keeping its volume constant. Its new resistance is:",
                  options: [
                    { id: "A", text: "$6\\text{ }\\Omega$" },
                    { id: "B", text: "$24\\text{ }\\Omega$" },
                    { id: "C", text: "$48\\text{ }\\Omega$" },
                    { id: "D", text: "$12\\text{ }\\Omega$" },
                  ],
                  correctOptionId: "C",
                  explanation: "When stretched to double length ($L' = 2L$), cross-sectional area halves ($A' = A/2$). $R' = \\rho \\frac{L'}{A'} = \\rho \\frac{2L}{A/2} = 4R = 4(12) = 48\\text{ }\\Omega$.",
                  topic: "Wire Stretching Resistance",
                  weakAreaCode: "WA-PHY-ELC-02",
                },
                {
                  id: "q_phy_jamb_1_1_4",
                  prompt: "In a circuit, if the voltage across a constant resistor is doubled, the power dissipated:",
                  options: [
                    { id: "A", text: "Is halved" },
                    { id: "B", text: "Doubles" },
                    { id: "C", text: "Quadruples" },
                    { id: "D", text: "Increases eightfold" },
                  ],
                  correctOptionId: "C",
                  explanation: "$P = V^2 / R$. If $V$ doubles, $P$ increases by $2^2 = 4$ times.",
                  topic: "Power-Voltage Scaling",
                  weakAreaCode: "WA-PHY-ELC-04",
                },
                {
                  id: "q_phy_jamb_1_1_5",
                  prompt: "The pressure of an ideal gas at constant volume is doubled. Its absolute temperature:",
                  options: [
                    { id: "A", text: "Is halved" },
                    { id: "B", text: "Doubles" },
                    { id: "C", text: "Quadruples" },
                    { id: "D", text: "Remains constant" },
                  ],
                  correctOptionId: "B",
                  explanation: "Pressure Law: $P \\propto T$ at constant volume. Doubling pressure doubles absolute temperature.",
                  topic: "Pressure Law Proportionality",
                  weakAreaCode: "WA-PHY-THM-04",
                },
              ],
            },
            examTip: "In JAMB, look for questions asking 'by what factor does X change?'. Never substitute real values for constants; solve directly using proportions in under 20 seconds.",
          },
        ],
      },
    ],
  },
];
