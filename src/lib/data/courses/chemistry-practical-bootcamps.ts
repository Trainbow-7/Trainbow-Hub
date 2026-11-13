/**
 * Trainbow HUB: Chemistry Practical & Stoichiometry Bootcamps
 * Grounded in WAEC Paper 3 Practical Regulations & Curriculum Specifications.
 *
 * All records strictly adhere to the Teacher Review Gate (reviewStatus: "needs_teacher_review").
 */

import { ChemistryCourseData } from "../chemistry-curriculum";

export const PRACTICAL_BOOTCAMP_CHEMISTRY_COURSES: ChemistryCourseData[] = [
  {
    id: "crs-chm-stoich-bootcamp",
    slug: "stoichiometry-mole-concept-bootcamp",
    title: "Stoichiometry and Mole Concept Bootcamp",
    subject: "Chemistry",
    subjectSlug: "chemistry",
    track: "practical-bootcamp",
    instructorName: "Trainbow HUB Academy",
    instructorTitle: "Senior Chemistry Educator & Examiner",
    priceMinorUnits: 2000000,
    currency: "NGN",
    shortDescription: "Curriculum-aligned senior secondary chemistry mastery.",
    subtitle: "Intensive Numerical Drills on Moles, Mass Conversions, Gas Volumes, and Limiting Reactants",
    level: "Senior Secondary (SS 1-3)",
    examBody: "WAEC / NECO / JAMB",
    audience: "Students struggling with chemical arithmetic, unit conversions, and quantitative exam questions.",
    description: "A dedicated skills workshop designed to eliminate math anxiety in chemistry through structured, unit-checked calculation drills.",
    learningOutcomes: [
      "Convert seamlessly between mass in grams, chemical amount in moles, and particle counts",
      "Derive empirical and molecular formulas with precision from percentage composition",
      "Apply stoichiometry ratios from balanced equations to compute theoretical yields",
      "Calculate solution concentrations in g/dm\u00b3 and mol/dm\u00b3 and apply the dilution law",
    ],
    prerequisites: [
      "Basic algebra and junior secondary science",
    ],
    tags: [
      "Chemistry",
      "Stoichiometry",
      "Mole Concept",
      "Calculations",
      "Bootcamp",
      "WAEC",
      "JAMB",
    ],
    syllabusAlignment: {
      source: "NERDC & WAEC Chemistry Regulations (2024-2026)",
      year: "2024",
      lastAlignedAt: "2026-11-01",
      needsVerification: true,
    },
    relatedCourseSlugs: [
      "chemistry-ss2-bonding-stoichiometry-acids-bases-salts",
      "volumetric-analysis-practical-chemistry",
      "waec-neco-ssce-chemistry-mastery",
    ],
    modules: [
      {
        id: "mod-chm-bootcamp-1",
        title: "Module 1: Foundations: Molar Mass & Gram-to-Mole Conversions",
        description: "Systematic calculation of molar masses and unit-checked gram-to-mole conversions.",
        sortOrder: 1,
        lessons: [
          {
            id: "les-chm-bootcamp-1-1",
            slug: "molar-mass-and-gram-mole-conversions-bootcamp",
        videoId: "74-X94OP2XI",
            title: "Molar Mass Calculations and Gram-to-Mole Conversion Drills",
            sortOrder: 1,
            durationMinutes: 45,
            isFreePreview: true,
            reviewStatus: "needs_teacher_review",
            topicId: "top-chm-molar-mass-bootcamp",
            weakAreaCodes: [
              "WA-CHM-STO-03",
            ],
            summary: "Master compound molar mass summation and unit-checked conversions between mass and moles.",
            objectives: [
              "Sum atomic masses accurately for binary, ternary, and hydrated compounds",
              "Convert between mass in grams and moles without formula inversion errors",
            ],
            keyPoints: [
              "Molar mass is the mass in grams of one mole of a substance ($M$ in g/mol).",
              "Number of moles: $n = m / M$. Given mass: $m = n \\times M$.",
              "For hydrated salts, include the water of crystallization ($5 \\times 18 = 90$ for $\\text{CuSO}_4\\cdot 5\\text{H}_2\\text{O}$).",
            ],
            formulas: [
              {
                name: "Basic Mole Formula",
                expression: "n = \\frac{m}{M}",
                variables: [
                  {
                    symbol: "n",
                    meaning: "Moles",
                    unit: "mol",
                  },
                  {
                    symbol: "m",
                    meaning: "Mass",
                    unit: "g",
                  },
                  {
                    symbol: "M",
                    meaning: "Molar mass",
                    unit: "g/mol",
                  },
                ],
              },
            ],
            constantsTable: [
              {
                symbol: "RAM",
                name: "Atomic Masses",
                value: "H=1, C=12, N=14, O=16, Na=23, S=32, Cl=35.5, Ca=40",
                unit: "u",
                examConvention: "Official constants",
              },
            ],
            commonMistakes: {
              mistake: "Neglecting subscripts when summing molar masses",
              wrongExample: "Molar mass of Al2(SO4)3 calculated as 27 + 32 + 16 = 75 g/mol.",
              correctedExample: "Al2(SO4)3 = (2 x 27) + 3 x [32 + (4 x 16)] = 54 + 3 x [96] = 54 + 288 = 342 g/mol.",
              explanation: "Distribute subscripts outside brackets across all internal elements.",
            },
            workedExamples: [
              {
                context: "Hydrated Salt Molar Mass",
                question: "Calculate the mass in grams of 0.20 moles of hydrated sodium carbonate (Na2CO3\u00b710H2O). [Na=23, C=12, O=16, H=1]",
                stepByStepSolution: [
                  "1. Compute anhydrous Na2CO3: (2 x 23) + 12 + (3 x 16) = 46 + 12 + 48 = 106 g/mol.",
                  "2. Compute 10H2O: 10 x [(2 x 1) + 16] = 10 x 18 = 180 g/mol.",
                  "3. Total molar mass M = 106 + 180 = 286 g/mol.",
                  "4. Mass m = n x M = 0.20 mol x 286 g/mol = 57.2 g.",
                ],
                finalAnswer: "Mass = 57.2 g",
                ruleExplanation: "Multiply moles by total molar mass including crystal water.",
              },
            ],
            checkpoint: {
              id: "chk-chm-bootcamp-1-1",
              title: "Checkpoint: Molar Mass Drills",
              passPercentage: 80,
              verificationMethod: "Standard Marking Scheme",
              questions: [
                {
                  id: "q_chm_bootcamp_1_1",
                  prompt: "The molar mass of ammonium sulphate, (NH4)2SO4, is: [N=14, H=1, S=32, O=16]",
                  options: [
                    {
                      id: "A",
                      text: "114 g/mol",
                    },
                    {
                      id: "B",
                      text: "132 g/mol",
                    },
                    {
                      id: "C",
                      text: "126 g/mol",
                    },
                    {
                      id: "D",
                      text: "148 g/mol",
                    },
                  ],
                  correctOptionId: "B",
                  explanation: "2 x (14 + 4) + 32 + 64 = 36 + 96 = 132 g/mol.",
                  topic: "Molar Mass Summation",
                  weakAreaCode: "WA-CHM-STO-03",
                },
                {
                  id: "q_chm_bootcamp_1_2",
                  prompt: "How many moles are in 14.2 g of sodium sulphate (Na2SO4)? [Na=23, S=32, O=16]",
                  options: [
                    {
                      id: "A",
                      text: "0.10 mol",
                    },
                    {
                      id: "B",
                      text: "0.20 mol",
                    },
                    {
                      id: "C",
                      text: "1.00 mol",
                    },
                    {
                      id: "D",
                      text: "0.05 mol",
                    },
                  ],
                  correctOptionId: "A",
                  explanation: "M = 46 + 32 + 64 = 142 g/mol. n = 14.2 / 142 = 0.10 mol.",
                  topic: "Mass to Moles",
                  weakAreaCode: "WA-CHM-STO-03",
                },
                {
                  id: "q_chm_bootcamp_1_3",
                  prompt: "What is the mass of 0.50 moles of calcium carbonate (CaCO3)? [Ca=40, C=12, O=16]",
                  options: [
                    {
                      id: "A",
                      text: "50.0 g",
                    },
                    {
                      id: "B",
                      text: "100.0 g",
                    },
                    {
                      id: "C",
                      text: "25.0 g",
                    },
                    {
                      id: "D",
                      text: "75.0 g",
                    },
                  ],
                  correctOptionId: "A",
                  explanation: "M = 40 + 12 + 48 = 100 g/mol. m = 0.50 * 100 = 50.0 g.",
                  topic: "Moles to Mass",
                  weakAreaCode: "WA-CHM-STO-03",
                },
                {
                  id: "q_chm_bootcamp_1_4",
                  prompt: "The percentage by mass of water in CuSO4\u00b75H2O is approximately: [Cu=64, S=32, O=16, H=1]",
                  options: [
                    {
                      id: "A",
                      text: "36.0%",
                    },
                    {
                      id: "B",
                      text: "25.0%",
                    },
                    {
                      id: "C",
                      text: "56.0%",
                    },
                    {
                      id: "D",
                      text: "18.0%",
                    },
                  ],
                  correctOptionId: "A",
                  explanation: "(90 / 250) * 100% = 36.0%.",
                  topic: "Water of Crystallization",
                  weakAreaCode: "WA-CHM-STO-04",
                },
                {
                  id: "q_chm_bootcamp_1_5",
                  prompt: "How many moles of chloride ions are present in 0.25 moles of CaCl2?",
                  options: [
                    {
                      id: "A",
                      text: "0.25 mol",
                    },
                    {
                      id: "B",
                      text: "0.50 mol",
                    },
                    {
                      id: "C",
                      text: "0.75 mol",
                    },
                    {
                      id: "D",
                      text: "1.00 mol",
                    },
                  ],
                  correctOptionId: "B",
                  explanation: "CaCl2 -> Ca2+ + 2Cl-. 0.25 mol CaCl2 * 2 = 0.50 mol Cl-.",
                  topic: "Ion Moles",
                  weakAreaCode: "WA-CHM-STO-03",
                },
              ],
            },
            examTip: "Write out the molar mass calculation line by line so examiners can award partial method marks.",
          },
        ],
      },
    ],
  },
  {
    id: "crs-chm-volumetric-practical",
    slug: "volumetric-analysis-practical-chemistry",
    title: "Volumetric Analysis and Practical Chemistry",
    subject: "Chemistry",
    subjectSlug: "chemistry",
    track: "practical-bootcamp",
    instructorName: "Trainbow HUB Academy",
    instructorTitle: "Senior Chemistry Educator & Examiner",
    priceMinorUnits: 2000000,
    currency: "NGN",
    shortDescription: "Curriculum-aligned senior secondary chemistry mastery.",
    subtitle: "Titration Technique, Burette Accuracy, Concordancy, and Qualitative Analysis for Paper 3",
    level: "Senior Secondary (SS 2-3 / WAEC Prep)",
    examBody: "WAEC / NECO",
    audience: "Secondary students preparing for WAEC Paper 3 Practical Chemistry and NECO practicals.",
    description: "Comprehensive practical laboratory masterclass covering burette calibration, meniscus reading, concordant averaging, titration calculations (CAVA/CBVB), and qualitative cation/anion tests.",
    learningOutcomes: [
      "Read burettes accurately to 2 decimal places with the final digit 0 or 5",
      "Calculate average titre using concordant values within \u00b10.20 cm\u00b3",
      "Apply CA VA / CB VB = nA / nB to determine unknown solution molarities and mass concentrations in g/dm\u00b3",
      "Identify cations (Fe2+, Fe3+, Cu2+, Zn2+, Al3+, Pb2+, Ca2+, NH4+) and anions using standard bench reagents",
      "State vital laboratory safety precautions and apparatus handling rules",
    ],
    prerequisites: [
      "Senior Secondary Chemistry (SS 1 - SS 2)",
    ],
    tags: [
      "Chemistry",
      "Volumetric Analysis",
      "Titration",
      "Qualitative Analysis",
      "Practical",
      "WAEC Paper 3",
    ],
    syllabusAlignment: {
      source: "WAEC Chemistry Syllabus (Paper 3 Practical Regulations 2024-2026)",
      year: "2024",
      lastAlignedAt: "2026-11-01",
      needsVerification: true,
    },
    relatedCourseSlugs: [
      "waec-neco-ssce-chemistry-mastery",
      "stoichiometry-mole-concept-bootcamp",
      "acids-bases-salts-ph",
    ],
    modules: [
      {
        id: "mod-chm-volumetric-1",
        title: "Module 1: Volumetric Apparatus & Measurement Precision",
        description: "Burette handling, pipette filling, reading the bottom meniscus, and recording to 2 decimal places.",
        sortOrder: 1,
        lessons: [
          {
            id: "les-chm-volumetric-1-1",
            slug: "burette-pipette-handling-and-meniscus-reading",
        videoId: "RnTC7WqpoGM",
            title: "Burette and Pipette Technique: Meniscus Reading and Titration Precision",
            sortOrder: 1,
            durationMinutes: 45,
            isFreePreview: true,
            reviewStatus: "needs_teacher_review",
            topicId: "top-chm-titration-technique",
            weakAreaCodes: [
              "WA-CHM-PRC-01",
            ],
            summary: "Master physical volumetric apparatus operation: pipette filling, eliminating burette air bubbles, bottom meniscus reading, and recording 2 decimal places.",
            objectives: [
              "Read the bottom of the curved meniscus at eye level for colorless solutions",
              "Record all burette readings to 2 decimal places ending in .00 or .05",
              "State essential pre-titration apparatus rinsing rules",
            ],
            keyPoints: [
              "Burette must be rinsed with distilled water, then with the acid solution to be placed in it.",
              "Pipette must be rinsed with distilled water, then with the alkaline solution to be measured.",
              "Conical flask must be rinsed ONLY with distilled water (never with acid or alkali).",
              "Remove the funnel from the burette before taking the initial reading.",
              "Ensure the burette tip is filled with liquid and free from trapped air bubbles.",
              "Read the bottom of the meniscus at eye level to prevent parallax error.",
              "All readings must be recorded in table format to 2 decimal places (e.g. 24.30 cm\u00b3, not 24.3 cm\u00b3).",
            ],
            commonMistakes: {
              mistake: "Rinsing the conical titration flask with the alkaline solution",
              wrongExample: "Rinsing the conical flask with base before pipetting the 25.0 cm\u00b3 aliquot.",
              correctedExample: "Rinse the conical flask only with distilled water; never rinse it with acid or alkali.",
              explanation: "Rinsing with alkali adds extra unmeasured moles of base, causing a falsely high acid titre.",
            },
            workedExamples: [
              {
                context: "WAEC Titration Table Concordancy",
                question: "A student recorded three titration titres: 24.30 cm\u00b3, 24.35 cm\u00b3, and 24.80 cm\u00b3. Determine the concordant titres and calculate the average titre according to WAEC rubric.",
                stepByStepSolution: [
                  "1. WAEC concordancy rule: Titres must agree within $\\pm 0.20\\text{ cm}^3$ of each other.",
                  "2. Compare titres: $|24.30 - 24.35| = 0.05\\text{ cm}^3$ (concordant).",
                  "3. Compare with third titre: $|24.80 - 24.30| = 0.50\\text{ cm}^3$ (non-concordant, reject).",
                  "4. Average only concordant values: $\\text{Average Titre} = \\frac{24.30 + 24.35}{2} = \\frac{48.65}{2} = 24.325\\text{ cm}^3 \\approx 24.33\\text{ cm}^3$.",
                ],
                finalAnswer: "Concordant titres: 24.30 cm\u00b3 and 24.35 cm\u00b3; Average titre = 24.33 cm\u00b3.",
                ruleExplanation: "Non-concordant titres must be rejected; averaging non-concordant values loses presentation marks.",
              },
            ],
            checkpoint: {
              id: "chk-chm-volumetric-1-1",
              title: "Checkpoint: Titration Technique",
              passPercentage: 80,
              verificationMethod: "Standard WAEC Paper 3 Rubric",
              questions: [
                {
                  id: "q_chm_vol_1_1",
                  prompt: "Before starting a titration, the conical flask should be rinsed with:",
                  options: [
                    {
                      id: "A",
                      text: "The acid to be added",
                    },
                    {
                      id: "B",
                      text: "The base pipetted into it",
                    },
                    {
                      id: "C",
                      text: "Distilled water only",
                    },
                    {
                      id: "D",
                      text: "Soap solution",
                    },
                  ],
                  correctOptionId: "C",
                  explanation: "Rinsing with acid or base introduces unmeasured moles; distilled water does not alter solute moles.",
                  topic: "Apparatus Rinsing",
                  weakAreaCode: "WA-CHM-PRC-01",
                },
                {
                  id: "q_chm_vol_1_2",
                  prompt: "According to WAEC marking schemes, burette readings must be recorded to:",
                  options: [
                    {
                      id: "A",
                      text: "1 decimal place",
                    },
                    {
                      id: "B",
                      text: "2 decimal places ending in 0 or 5",
                    },
                    {
                      id: "C",
                      text: "Nearest whole number",
                    },
                    {
                      id: "D",
                      text: "3 decimal places",
                    },
                  ],
                  correctOptionId: "B",
                  explanation: "Standard WAEC precision is 2 decimal places with the second digit as 0 or 5.",
                  topic: "Recording Precision",
                  weakAreaCode: "WA-CHM-PRC-01",
                },
                {
                  id: "q_chm_vol_1_3",
                  prompt: "Which pair of titres is concordant under WAEC examination guidelines?",
                  options: [
                    {
                      id: "A",
                      text: "23.40 cm\u00b3 and 23.90 cm\u00b3",
                    },
                    {
                      id: "B",
                      text: "24.10 cm\u00b3 and 24.25 cm\u00b3",
                    },
                    {
                      id: "C",
                      text: "21.00 cm\u00b3 and 21.50 cm\u00b3",
                    },
                    {
                      id: "D",
                      text: "25.20 cm\u00b3 and 24.80 cm\u00b3",
                    },
                  ],
                  correctOptionId: "B",
                  explanation: "Difference |24.10 - 24.25| = 0.15 cm\u00b3, which is within the \u00b10.20 cm\u00b3 threshold.",
                  topic: "Concordancy",
                  weakAreaCode: "WA-CHM-PRC-01",
                },
                {
                  id: "q_chm_vol_1_4",
                  prompt: "When reading a burette containing a colorless solution, the correct procedure is to read the:",
                  options: [
                    {
                      id: "A",
                      text: "Top of the meniscus",
                    },
                    {
                      id: "B",
                      text: "Bottom of the curved meniscus at eye level",
                    },
                    {
                      id: "C",
                      text: "Middle of the liquid column",
                    },
                    {
                      id: "D",
                      text: "Highest point touching the glass",
                    },
                  ],
                  correctOptionId: "B",
                  explanation: "The bottom of the curved meniscus viewed horizontally at eye level eliminates parallax error.",
                  topic: "Meniscus Reading",
                  weakAreaCode: "WA-CHM-PRC-01",
                },
                {
                  id: "q_chm_vol_1_5",
                  prompt: "Why must the funnel be removed from the top of the burette before beginning the titration?",
                  options: [
                    {
                      id: "A",
                      text: "To prevent droplets from dripping in and causing volume errors",
                    },
                    {
                      id: "B",
                      text: "To allow atmospheric air to exit",
                    },
                    {
                      id: "C",
                      text: "To prevent acid from evaporating",
                    },
                    {
                      id: "D",
                      text: "To reduce apparatus weight",
                    },
                  ],
                  correctOptionId: "A",
                  explanation: "Residual liquid in the funnel can drip during titration, altering the initial or final burette reading.",
                  topic: "Titration Precautions",
                  weakAreaCode: "WA-CHM-PRC-01",
                },
              ],
            },
            examTip: "Never discard your rough titre; record it clearly in your table and average only the concordant 1st, 2nd, or 3rd titres.",
            safetyNote: "Safety first: Never suck chemicals into a pipette using your mouth; always use a pipette filler bulb. Wear safety goggles to protect eyes against splashes.",
          },
        ],
      },
    ],
  },
];
