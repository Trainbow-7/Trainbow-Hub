/**
 * Trainbow HUB: Chemistry Senior Secondary Curriculum (SS 1 - SS 3)
 * Mapped to NERDC, WAEC, NECO, and JAMB UTME Specifications.
 *
 * All records strictly adhere to the Teacher Review Gate (reviewStatus: "needs_teacher_review").
 */

import { ChemistryCourseData } from "../chemistry-curriculum";

export const SENIOR_SECONDARY_CHEMISTRY_COURSES: ChemistryCourseData[] = [
  {
    id: "crs-chm-ss1",
    slug: "chemistry-ss1-matter-atomic-structure-periodic-table",
    title: "Chemistry SS 1: Matter, Atomic Structure and the Periodic Table",
    subject: "Chemistry",
    subjectSlug: "chemistry",
    track: "senior-secondary",
    instructorName: "Trainbow HUB Academy",
    instructorTitle: "Senior Chemistry Educator & Examiner",
    priceMinorUnits: 2500000,
    currency: "NGN",
    shortDescription: "Curriculum-aligned senior secondary chemistry mastery.",
    subtitle: "Foundations of Matter, Atomic Orbitals, Valency, and Periodic Law for Nigerian Secondary Schools",
    level: "SS 1",
    examBody: "WAEC / NECO / JAMB",
    audience: "Senior Secondary 1 science students and foundational learners preparing for WAEC, NECO, and JAMB UTME.",
    description: "A comprehensive foundational course covering the particulate nature of matter, atomic structure, isotopic abundances, electronic configurations in s, p, d, f orbitals, periodic law, and introductory chemical bonding.",
    learningOutcomes: [
      "Distinguish between elements, compounds, mixtures, and physical versus chemical changes",
      "Calculate relative atomic mass from percentage abundances of isotopes",
      "Write spdf electronic configurations for elements 1 to 30 with Hund's rule and Pauli exclusion principle",
      "Explain periodic trends in atomic radius, ionization energy, and electronegativity across periods and down groups",
      "Differentiate between electrovalent, covalent, and coordinate bonding mechanisms",
      "Write balanced chemical formulas using elemental valencies and IUPAC oxidation numbers",
    ],
    prerequisites: [
      "Junior Secondary Basic Science and Mathematics",
    ],
    tags: [
      "Chemistry",
      "SS1",
      "Atomic Structure",
      "Periodic Table",
      "Chemical Bonding",
      "WAEC",
      "NECO",
      "JAMB",
    ],
    syllabusAlignment: {
      source: "NERDC Senior Secondary Curriculum (Chemistry SS 1)",
      year: "2024",
      lastAlignedAt: "2026-11-01",
      needsVerification: true,
    },
    relatedCourseSlugs: [
      "chemistry-ss2-bonding-stoichiometry-acids-bases-salts",
      "inorganic-chemistry-periodic-trends-metals-nonmetals",
      "equations-formulae-nomenclature-fix-it",
    ],
    modules: [
      {
        id: "mod-chm-ss1-1",
        title: "Module 1: Particulate Nature of Matter & Physical Changes",
        description: "Kinetic theory of matter, states of matter, separation of mixtures, and physical vs chemical changes.",
        sortOrder: 1,
        lessons: [
          {
            id: "les-chm-ss1-1-1",
            slug: "particulate-nature-of-matter-states-and-kinetic-theory",
        videoId: "zjkBMk5d3tM",
            title: "Particulate Nature of Matter, States, and Kinetic Theory",
            sortOrder: 1,
            durationMinutes: 35,
            isFreePreview: true,
            reviewStatus: "needs_teacher_review",
            topicId: "top-chm-matter",
            weakAreaCodes: [
              "WA-CHM-PHY-01",
            ],
            summary: "Understand matter as composed of discrete particles in continuous random motion, and analyze phase transitions using kinetic theory.",
            objectives: [
              "State the fundamental postulates of the kinetic theory of matter",
              "Explain phase changes in terms of molecular kinetic energy and latent heat",
              "Differentiate between physical changes and chemical changes with laboratory examples",
            ],
            keyPoints: [
              "Matter is made up of tiny indivisible particles: atoms, molecules, or ions.",
              "Particles in solids vibrate about fixed equilibrium positions with strong lattice forces.",
              "Liquid particles have translational freedom while maintaining a fixed volume.",
              "Gas particles have negligible intermolecular forces and move rapidly in random straight paths.",
              "Sublimation is the direct transition from solid to vapor without passing through the liquid phase.",
              "Physical changes are reversible without new substances formed; chemical changes involve bond breaking and formation of new substances.",
            ],
            formulas: [
              {
                name: "Average Kinetic Energy of Gas Particles",
                expression: "E_k = \\frac{3}{2} k_B T",
                variables: [
                  {
                    symbol: "E_k",
                    meaning: "Average kinetic energy per molecule",
                    unit: "Joules (J)",
                  },
                  {
                    symbol: "k_B",
                    meaning: "Boltzmann constant",
                    unit: "J/K",
                  },
                  {
                    symbol: "T",
                    meaning: "Absolute temperature",
                    unit: "Kelvin (K)",
                  },
                ],
              },
            ],
            constantsTable: [
              {
                symbol: "T_{stp}",
                name: "Standard temperature",
                value: "273.15",
                unit: "K (0\u00b0C)",
                examConvention: "273 K in WAEC/JAMB calculations",
              },
              {
                symbol: "P_{stp}",
                name: "Standard pressure",
                value: "101.325",
                unit: "kPa",
                examConvention: "1 atm = 760 mmHg = 101,325 N/m\u00b2",
              },
            ],
            commonMistakes: {
              mistake: "Confusing physical dissolution with chemical reaction",
              wrongExample: "Dissolving table salt in water is a chemical change because the solid disappears.",
              correctedExample: "Dissolving NaCl in water is a physical change because NaCl can be recovered intact by simple water evaporation.",
              explanation: "No chemical bonds within the ions are broken; hydration of ions is reversed upon evaporation.",
            },
            workedExamples: [
              {
                context: "Kinetic Theory & Phase Transition Verification",
                question: "Explain why the temperature of pure water remains constant at 100\u00b0C during boiling at 1 atm, even though heat energy is continuously supplied.",
                stepByStepSolution: [
                  "1. Thermal energy supplied to boiling water at 100\u00b0C does not increase molecular kinetic energy.",
                  "2. Heat input is converted entirely into latent heat of vaporization.",
                  "3. This energy overcomes intermolecular hydrogen bonds holding liquid water molecules together, releasing them as steam.",
                  "4. Because temperature is a measure of average kinetic energy ($T \\propto E_k$), temperature remains constant at 100\u00b0C.",
                ],
                finalAnswer: "Heat energy supplied is absorbed as latent heat of vaporization to break intermolecular hydrogen bonds rather than raising molecular kinetic energy.",
                ruleExplanation: "At phase equilibrium, all supplied energy goes into potential energy of separation without altering temperature.",
              },
            ],
            diagram: {
              id: "diag-chm-states-matter",
              title: "Kinetic Theory States of Matter and Phase Transitions",
              family: "CHEMISTRY_STRUCTURE",
              altText: "Particle arrangement diagram showing solid lattice, liquid cluster, and gaseous random dispersion with arrows for melting, evaporation, and sublimation.",
              svg: "<svg viewBox=\"0 0 600 240\" xmlns=\"http://www.w3.org/2000/svg\" className=\"w-full h-auto\"><rect width=\"600\" height=\"240\" fill=\"#f8fafc\" rx=\"8\"/><rect x=\"20\" y=\"30\" width=\"160\" height=\"160\" fill=\"#ffffff\" stroke=\"#0284c7\" stroke-width=\"2\" rx=\"6\"/><text x=\"100\" y=\"215\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\">Solid (Ordered Lattice)</text><circle cx=\"50\" cy=\"60\" r=\"10\" fill=\"#0284c7\"/><circle cx=\"80\" cy=\"60\" r=\"10\" fill=\"#0284c7\"/><circle cx=\"110\" cy=\"60\" r=\"10\" fill=\"#0284c7\"/><circle cx=\"140\" cy=\"60\" r=\"10\" fill=\"#0284c7\"/><circle cx=\"50\" cy=\"90\" r=\"10\" fill=\"#0284c7\"/><circle cx=\"80\" cy=\"90\" r=\"10\" fill=\"#0284c7\"/><circle cx=\"110\" cy=\"90\" r=\"10\" fill=\"#0284c7\"/><circle cx=\"140\" cy=\"90\" r=\"10\" fill=\"#0284c7\"/><circle cx=\"50\" cy=\"120\" r=\"10\" fill=\"#0284c7\"/><circle cx=\"80\" cy=\"120\" r=\"10\" fill=\"#0284c7\"/><circle cx=\"110\" cy=\"120\" r=\"10\" fill=\"#0284c7\"/><circle cx=\"140\" cy=\"120\" r=\"10\" fill=\"#0284c7\"/><circle cx=\"50\" cy=\"150\" r=\"10\" fill=\"#0284c7\"/><circle cx=\"80\" cy=\"150\" r=\"10\" fill=\"#0284c7\"/><circle cx=\"110\" cy=\"150\" r=\"10\" fill=\"#0284c7\"/><circle cx=\"140\" cy=\"150\" r=\"10\" fill=\"#0284c7\"/><rect x=\"220\" y=\"30\" width=\"160\" height=\"160\" fill=\"#ffffff\" stroke=\"#0d9488\" stroke-width=\"2\" rx=\"6\"/><text x=\"300\" y=\"215\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\">Liquid (Fluid Clusters)</text><circle cx=\"250\" cy=\"130\" r=\"10\" fill=\"#0d9488\"/><circle cx=\"280\" cy=\"140\" r=\"10\" fill=\"#0d9488\"/><circle cx=\"310\" cy=\"125\" r=\"10\" fill=\"#0d9488\"/><circle cx=\"340\" cy=\"145\" r=\"10\" fill=\"#0d9488\"/><circle cx=\"260\" cy=\"160\" r=\"10\" fill=\"#0d9488\"/><circle cx=\"295\" cy=\"165\" r=\"10\" fill=\"#0d9488\"/><circle cx=\"330\" cy=\"160\" r=\"10\" fill=\"#0d9488\"/><rect x=\"420\" y=\"30\" width=\"160\" height=\"160\" fill=\"#ffffff\" stroke=\"#e11d48\" stroke-width=\"2\" rx=\"6\"/><text x=\"500\" y=\"215\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#0f172a\">Gas (Random Motion)</text><circle cx=\"450\" cy=\"65\" r=\"10\" fill=\"#e11d48\"/><line x1=\"450\" y1=\"65\" x2=\"475\" y2=\"50\" stroke=\"#e11d48\" stroke-width=\"2\"/><circle cx=\"530\" cy=\"90\" r=\"10\" fill=\"#e11d48\"/><line x1=\"530\" y1=\"90\" x2=\"550\" y2=\"115\" stroke=\"#e11d48\" stroke-width=\"2\"/><circle cx=\"480\" cy=\"140\" r=\"10\" fill=\"#e11d48\"/><line x1=\"480\" y1=\"140\" x2=\"455\" y2=\"155\" stroke=\"#e11d48\" stroke-width=\"2\"/><circle cx=\"540\" cy=\"160\" r=\"10\" fill=\"#e11d48\"/><line x1=\"540\" y1=\"160\" x2=\"520\" y2=\"140\" stroke=\"#e11d48\" stroke-width=\"2\"/></svg>",
            },
            checkpoint: {
              id: "chk-chm-ss1-1-1",
              title: "Checkpoint: Kinetic Theory & Changes of State",
              passPercentage: 80,
              verificationMethod: "Standard WAEC SSCE Rubric Evaluation",
              questions: [
                {
                  id: "q_chm_ss1_1_1",
                  prompt: "Which of the following processes represents a chemical change?",
                  options: [
                    {
                      id: "A",
                      text: "Sublimation of solid iodine crystals",
                    },
                    {
                      id: "B",
                      text: "Rusting of an iron nail in moist air",
                    },
                    {
                      id: "C",
                      text: "Distillation of crude petroleum",
                    },
                    {
                      id: "D",
                      text: "Melting of candle wax",
                    },
                  ],
                  correctOptionId: "B",
                  explanation: "Rusting produces hydrated iron(III) oxide (Fe2O3\u00b7xH2O), a new chemical substance with distinct properties, making it an irreversible chemical change.",
                  topic: "Physical and Chemical Changes",
                  weakAreaCode: "WA-CHM-PHY-01",
                },
                {
                  id: "q_chm_ss1_1_2",
                  prompt: "According to the kinetic theory of gases, absolute zero (0 Kelvin) is the temperature at which:",
                  options: [
                    {
                      id: "A",
                      text: "All gas molecules have identical velocities",
                    },
                    {
                      id: "B",
                      text: "Theoretical molecular kinetic energy drops to zero",
                    },
                    {
                      id: "C",
                      text: "Liquid water freezes at standard atmospheric pressure",
                    },
                    {
                      id: "D",
                      text: "Gases exert maximum wall pressure",
                    },
                  ],
                  correctOptionId: "B",
                  explanation: "Absolute zero (-273.15\u00b0C or 0 K) is the thermodynamic threshold where particle translational kinetic motion theoretically ceases.",
                  topic: "Kinetic Theory of Matter",
                  weakAreaCode: "WA-CHM-PHY-01",
                },
                {
                  id: "q_chm_ss1_1_3",
                  prompt: "Which pair of substances sublimates readily upon heating in a school laboratory?",
                  options: [
                    {
                      id: "A",
                      text: "Sodium chloride and copper(II) sulphate",
                    },
                    {
                      id: "B",
                      text: "Ammonium chloride and iodine crystals",
                    },
                    {
                      id: "C",
                      text: "Calcium carbonate and lead(II) nitrate",
                    },
                    {
                      id: "D",
                      text: "Potassium chloride and sulphur",
                    },
                  ],
                  correctOptionId: "B",
                  explanation: "Both ammonium chloride (NH4Cl) and iodine (I2) undergo sublimation, transforming directly from solid to vapor phase.",
                  topic: "Separation Techniques & Phase Changes",
                  weakAreaCode: "WA-CHM-PHY-01",
                },
                {
                  id: "q_chm_ss1_1_4",
                  prompt: "Brownian motion of smoke particles in air provides direct experimental evidence that:",
                  options: [
                    {
                      id: "A",
                      text: "Air molecules are in continuous, random, rapid motion",
                    },
                    {
                      id: "B",
                      text: "Smoke particles are lighter than air molecules",
                    },
                    {
                      id: "C",
                      text: "Gas particles repel each other electrostatically",
                    },
                    {
                      id: "D",
                      text: "Air is an element rather than a mixture",
                    },
                  ],
                  correctOptionId: "A",
                  explanation: "The zigzag erratic movement of visible smoke particles results from uneven bombardments by unseen, rapidly moving air molecules.",
                  topic: "Kinetic Theory of Matter",
                  weakAreaCode: "WA-CHM-PHY-01",
                },
                {
                  id: "q_chm_ss1_1_5",
                  prompt: "A mixture of sand and ammonium chloride can best be separated in a single step by:",
                  options: [
                    {
                      id: "A",
                      text: "Simple filtration",
                    },
                    {
                      id: "B",
                      text: "Sublimation",
                    },
                    {
                      id: "C",
                      text: "Fractional distillation",
                    },
                    {
                      id: "D",
                      text: "Paper chromatography",
                    },
                  ],
                  correctOptionId: "B",
                  explanation: "Heating the mixture causes ammonium chloride to sublimate and deposit on the cool inverted funnel, leaving non-volatile sand behind.",
                  topic: "Separation Techniques",
                  weakAreaCode: "WA-CHM-PHY-01",
                },
              ],
            },
            examTip: "In WAEC Chemistry Paper 2, always define physical and chemical changes in terms of whether new substances are formed and whether the process is readily reversible by physical separation techniques.",
          },
        ],
      },
      {
        id: "mod-chm-ss1-2",
        title: "Module 2: Atomic Structure, Isotopes & Relative Atomic Mass",
        description: "Subatomic particles, isotopes, and mass spectrometry calculations.",
        sortOrder: 2,
        lessons: [
          {
            id: "les-chm-ss1-2-1",
            slug: "subatomic-particles-isotopes-and-relative-atomic-mass",
        videoId: "-FBk8cNvJds",
            title: "Subatomic Particles, Isotopes, and Relative Atomic Mass Calculations",
            sortOrder: 1,
            durationMinutes: 45,
            isFreePreview: false,
            reviewStatus: "needs_teacher_review",
            topicId: "top-chm-atomic-structure",
            weakAreaCodes: [
              "WA-CHM-ATM-01",
            ],
            summary: "Master the structure of atoms, calculate proton, neutron, and electron counts, and determine relative atomic masses from fractional isotopic abundances.",
            objectives: [
              "Define atomic number (Z), mass number (A), and isotopes with standard isotopic symbols",
              "Calculate the relative atomic mass (Ar) of an element from isotopic abundance data",
            ],
            keyPoints: [
              "Atomic number (Z) = protons; in neutral atoms, protons = electrons.",
              "Mass number (A) = protons + neutrons. Neutrons = A - Z.",
              "Isotopes have identical atomic numbers but different mass numbers due to differing neutrons.",
              "Relative atomic mass is a weighted average based on fractional percentage abundance on the Carbon-12 scale.",
            ],
            formulas: [
              {
                name: "Relative Atomic Mass Formula",
                expression: "A_r = \\frac{\\sum (\\%\\text{ abundance} \\times \\text{isotopic mass})}{100}",
                variables: [
                  {
                    symbol: "A_r",
                    meaning: "Relative atomic mass (dimensionless on C-12 scale)",
                    unit: "None",
                  },
                ],
              },
            ],
            constantsTable: [
              {
                symbol: "RAM",
                name: "Chlorine Isotopes",
                value: "Cl-35 (75%), Cl-37 (25%)",
                unit: "u",
                examConvention: "Yields Ar = 35.5",
              },
            ],
            commonMistakes: {
              mistake: "Confusing atomic number with mass number",
              wrongExample: "The atomic number is protons plus neutrons.",
              correctedExample: "Atomic number is strictly protons; mass number is protons plus neutrons.",
              explanation: "Atomic number defines element position in the Periodic Table.",
            },
            workedExamples: [
              {
                context: "Isotopic Calculation",
                question: "Calculate the relative atomic mass of chlorine given 75% Cl-35 and 25% Cl-37.",
                stepByStepSolution: [
                  "1. Ar = [(75 * 35) + (25 * 37)] / 100",
                  "2. Ar = [2625 + 925] / 100 = 3550 / 100 = 35.5",
                ],
                finalAnswer: "Ar = 35.5",
                ruleExplanation: "Standard weighted isotopic abundance calculation.",
              },
            ],
            checkpoint: {
              id: "chk-chm-ss1-2-1",
              title: "Checkpoint: Atomic Structure",
              passPercentage: 80,
              verificationMethod: "Standard Marking Scheme",
              questions: [
                {
                  id: "q_chm_ss1_2_1",
                  prompt: "An atom has 17 protons and 18 neutrons. Its mass number is:",
                  options: [
                    {
                      id: "A",
                      text: "17",
                    },
                    {
                      id: "B",
                      text: "35",
                    },
                    {
                      id: "C",
                      text: "18",
                    },
                    {
                      id: "D",
                      text: "1",
                    },
                  ],
                  correctOptionId: "B",
                  explanation: "A = 17 + 18 = 35.",
                  topic: "Atomic Structure",
                  weakAreaCode: "WA-CHM-ATM-01",
                },
                {
                  id: "q_chm_ss1_2_2",
                  prompt: "Two isotopes of an element always possess the same:",
                  options: [
                    {
                      id: "A",
                      text: "Neutrons",
                    },
                    {
                      id: "B",
                      text: "Chemical properties",
                    },
                    {
                      id: "C",
                      text: "Mass number",
                    },
                    {
                      id: "D",
                      text: "Density",
                    },
                  ],
                  correctOptionId: "B",
                  explanation: "Identical electron configuration gives identical chemical properties.",
                  topic: "Isotopes",
                  weakAreaCode: "WA-CHM-ATM-01",
                },
                {
                  id: "q_chm_ss1_2_3",
                  prompt: "Relative atomic mass is defined relative to 1/12th the mass of:",
                  options: [
                    {
                      id: "A",
                      text: "H-1",
                    },
                    {
                      id: "B",
                      text: "C-12",
                    },
                    {
                      id: "C",
                      text: "O-16",
                    },
                    {
                      id: "D",
                      text: "N-14",
                    },
                  ],
                  correctOptionId: "B",
                  explanation: "Standard international Carbon-12 scale.",
                  topic: "Atomic Mass Scale",
                  weakAreaCode: "WA-CHM-ATM-01",
                },
                {
                  id: "q_chm_ss1_2_4",
                  prompt: "How many electrons are in Mg2+ (atomic number 12)?",
                  options: [
                    {
                      id: "A",
                      text: "12",
                    },
                    {
                      id: "B",
                      text: "10",
                    },
                    {
                      id: "C",
                      text: "14",
                    },
                    {
                      id: "D",
                      text: "24",
                    },
                  ],
                  correctOptionId: "B",
                  explanation: "12 - 2 = 10 electrons.",
                  topic: "Ions",
                  weakAreaCode: "WA-CHM-ATM-01",
                },
                {
                  id: "q_chm_ss1_2_5",
                  prompt: "Which subatomic particle has negligible mass (~1/1840 u)?",
                  options: [
                    {
                      id: "A",
                      text: "Proton",
                    },
                    {
                      id: "B",
                      text: "Neutron",
                    },
                    {
                      id: "C",
                      text: "Electron",
                    },
                    {
                      id: "D",
                      text: "Alpha particle",
                    },
                  ],
                  correctOptionId: "C",
                  explanation: "Electrons have relative mass 1/1840.",
                  topic: "Subatomic Particles",
                  weakAreaCode: "WA-CHM-ATM-01",
                },
              ],
            },
            examTip: "Always show the full fraction over 100 when computing Ar.",
          },
        ],
      },
      {
        id: "mod-chm-ss1-3",
        title: "Module 3: Electronic Configuration & Orbitals",
        description: "Aufbau principle, Hund's rule, and orbital filling up to Z=30.",
        sortOrder: 3,
        lessons: [
          {
            id: "les-chm-ss1-3-1",
            slug: "electronic-configurations-in-spdf-orbitals-and-rules",
        videoId: "Aoi4j8es4gQ",
            title: "Electronic Configurations in s, p, d, f Orbitals and Quantum Rules",
            sortOrder: 1,
            durationMinutes: 45,
            isFreePreview: false,
            reviewStatus: "needs_teacher_review",
            topicId: "top-chm-orbitals",
            weakAreaCodes: [
              "WA-CHM-ATM-02",
            ],
            summary: "Master the Aufbau principle, Hund's rule, and Pauli exclusion principle for elements 1 to 30.",
            objectives: [
              "Apply Aufbau principle, Hund's rule, and Pauli exclusion principle",
              "Explain anomalous configurations of Chromium (Z=24) and Copper (Z=29)",
            ],
            keyPoints: [
              "Subshell capacities: s=2, p=6, d=10, f=14.",
              "Aufbau order: 1s < 2s < 2p < 3s < 3p < 4s < 3d.",
              "Chromium is [Ar] 4s1 3d5 and Copper is [Ar] 4s1 3d10 for stability.",
            ],
            commonMistakes: {
              mistake: "Writing 4s2 3d4 for Chromium",
              wrongExample: "Cr: [Ar] 4s2 3d4",
              correctedExample: "Cr: [Ar] 4s1 3d5",
              explanation: "Half-filled 3d5 subshell gives extra stability.",
            },
            workedExamples: [
              {
                context: "Iron Configuration",
                question: "Write electronic configurations for Fe (Z=26) and Fe2+.",
                stepByStepSolution: [
                  "1. Fe: [Ar] 4s2 3d6",
                  "2. Fe2+: remove 4s electrons first -> [Ar] 3d6",
                ],
                finalAnswer: "Fe: [Ar] 4s2 3d6; Fe2+: [Ar] 3d6",
                ruleExplanation: "4s electrons are outermost and lost first.",
              },
            ],
            checkpoint: {
              id: "chk-chm-ss1-3-1",
              title: "Checkpoint: spdf Configurations",
              passPercentage: 80,
              verificationMethod: "Standard Marking Scheme",
              questions: [
                {
                  id: "q_chm_ss1_3_1",
                  prompt: "Configuration [Ar] 4s1 3d10 belongs to:",
                  options: [
                    {
                      id: "A",
                      text: "Zn",
                    },
                    {
                      id: "B",
                      text: "Cu",
                    },
                    {
                      id: "C",
                      text: "Ni",
                    },
                    {
                      id: "D",
                      text: "Cr",
                    },
                  ],
                  correctOptionId: "B",
                  explanation: "Copper has Z=29.",
                  topic: "Configuration",
                  weakAreaCode: "WA-CHM-ATM-02",
                },
                {
                  id: "q_chm_ss1_3_2",
                  prompt: "Maximum electrons in a d-subshell is:",
                  options: [
                    {
                      id: "A",
                      text: "2",
                    },
                    {
                      id: "B",
                      text: "6",
                    },
                    {
                      id: "C",
                      text: "10",
                    },
                    {
                      id: "D",
                      text: "14",
                    },
                  ],
                  correctOptionId: "C",
                  explanation: "5 orbitals x 2 = 10.",
                  topic: "Capacities",
                  weakAreaCode: "WA-CHM-ATM-02",
                },
                {
                  id: "q_chm_ss1_3_3",
                  prompt: "When Fe forms Fe2+, electrons are lost from:",
                  options: [
                    {
                      id: "A",
                      text: "3d",
                    },
                    {
                      id: "B",
                      text: "4s",
                    },
                    {
                      id: "C",
                      text: "3p",
                    },
                    {
                      id: "D",
                      text: "4p",
                    },
                  ],
                  correctOptionId: "B",
                  explanation: "Outermost 4s lost first.",
                  topic: "Ionization",
                  weakAreaCode: "WA-CHM-ATM-02",
                },
                {
                  id: "q_chm_ss1_3_4",
                  prompt: "Hund's rule requires electrons in degenerate orbitals to:",
                  options: [
                    {
                      id: "A",
                      text: "Pair immediately",
                    },
                    {
                      id: "B",
                      text: "Remain unpaired with parallel spins",
                    },
                    {
                      id: "C",
                      text: "Oppose spins",
                    },
                    {
                      id: "D",
                      text: "Fill 3d before 4s",
                    },
                  ],
                  correctOptionId: "B",
                  explanation: "Hund's rule minimizes repulsion.",
                  topic: "Rules",
                  weakAreaCode: "WA-CHM-ATM-02",
                },
                {
                  id: "q_chm_ss1_3_5",
                  prompt: "Which configuration represents an excited Carbon atom?",
                  options: [
                    {
                      id: "A",
                      text: "1s2 2s2 2p2",
                    },
                    {
                      id: "B",
                      text: "1s2 2s1 2p3",
                    },
                    {
                      id: "C",
                      text: "1s2 2s2 2p1",
                    },
                    {
                      id: "D",
                      text: "1s2 2s2 2p4",
                    },
                  ],
                  correctOptionId: "B",
                  explanation: "Promotion of 2s electron to 2p.",
                  topic: "Excited States",
                  weakAreaCode: "WA-CHM-ATM-02",
                },
              ],
            },
            examTip: "Always remove 4s electrons before 3d when forming transition metal cations.",
          },
        ],
      },
      {
        id: "mod-chm-ss1-4",
        title: "Module 4: The Periodic Table & Periodic Trends",
        description: "Periodic law, atomic radii, ionization energy, and electronegativity.",
        sortOrder: 4,
        lessons: [
          {
            id: "les-chm-ss1-4-1",
            slug: "periodic-trends-atomic-radii-ionization-energy-electronegativity",
        videoId: "hePb00CqvP0",
            title: "Periodic Trends: Atomic Radii, Ionization Energy, and Electronegativity",
            sortOrder: 1,
            durationMinutes: 45,
            isFreePreview: false,
            reviewStatus: "needs_teacher_review",
            topicId: "top-chm-periodic-trends",
            weakAreaCodes: [
              "WA-CHM-ATM-03",
            ],
            summary: "Analyze atomic radius, first ionization energy, and electronegativity trends across periods and down groups.",
            objectives: [
              "Explain decrease in atomic radius across a period",
              "Explain general increase in ionization energy and account for anomalies",
            ],
            keyPoints: [
              "Across a period: nuclear charge increases, shielding is constant, atomic radius decreases.",
              "Down a group: shells are added, atomic radius increases.",
              "Fluorine is the most electronegative element (4.0).",
            ],
            formulas: [
              {
                name: "First Ionization Energy Equation",
                expression: "\\ce{X(g) -> X+(g) + e-}",
                variables: [
                  {
                    symbol: "X(g)",
                    meaning: "Gaseous neutral atom",
                    unit: "mol",
                  },
                ],
              },
            ],
            commonMistakes: {
              mistake: "Thinking atomic radius increases across a period",
              wrongExample: "Cl is larger than Na because it has more mass.",
              correctedExample: "Cl (99 pm) is smaller than Na (186 pm) due to higher nuclear charge.",
              explanation: "+17 charge pulls electrons closer than +11 charge.",
            },
            workedExamples: [
              {
                context: "Anomaly Explanation",
                question: "Why is ionization energy of N higher than O?",
                stepByStepSolution: [
                  "1. N: 2s2 2p3 (half-filled subshell, stable).",
                  "2. O: 2s2 2p4 (pair of electrons in one 2p orbital repels).",
                ],
                finalAnswer: "Pair repulsion in Oxygen eases electron removal.",
                ruleExplanation: "Spin-pair repulsion lowers ionization threshold.",
              },
            ],
            checkpoint: {
              id: "chk-chm-ss1-4-1",
              title: "Checkpoint: Periodic Trends",
              passPercentage: 80,
              verificationMethod: "Standard Marking Scheme",
              questions: [
                {
                  id: "q_chm_ss1_4_1",
                  prompt: "Highest electronegativity element is:",
                  options: [
                    {
                      id: "A",
                      text: "Na",
                    },
                    {
                      id: "B",
                      text: "Cl",
                    },
                    {
                      id: "C",
                      text: "F",
                    },
                    {
                      id: "D",
                      text: "O",
                    },
                  ],
                  correctOptionId: "C",
                  explanation: "Fluorine has Pauling value 4.0.",
                  topic: "Electronegativity",
                  weakAreaCode: "WA-CHM-ATM-03",
                },
                {
                  id: "q_chm_ss1_4_2",
                  prompt: "Atomic radius decrease across Period 3 is due to:",
                  options: [
                    {
                      id: "A",
                      text: "Loss of electrons",
                    },
                    {
                      id: "B",
                      text: "Increased nuclear charge with constant shielding",
                    },
                    {
                      id: "C",
                      text: "More shells",
                    },
                    {
                      id: "D",
                      text: "d-orbitals",
                    },
                  ],
                  correctOptionId: "B",
                  explanation: "Higher nuclear charge pulls electrons tighter.",
                  topic: "Radius",
                  weakAreaCode: "WA-CHM-ATM-03",
                },
                {
                  id: "q_chm_ss1_4_3",
                  prompt: "Boron has lower IE than Beryllium because:",
                  options: [
                    {
                      id: "A",
                      text: "More mass",
                    },
                    {
                      id: "B",
                      text: "2p1 electron is higher energy and shielded by 2s2",
                    },
                    {
                      id: "C",
                      text: "Octet",
                    },
                    {
                      id: "D",
                      text: "Fewer protons",
                    },
                  ],
                  correctOptionId: "B",
                  explanation: "2p is higher in energy than 2s.",
                  topic: "IE Anomaly",
                  weakAreaCode: "WA-CHM-ATM-03",
                },
                {
                  id: "q_chm_ss1_4_4",
                  prompt: "Comparing Cl atom and Cl- ion:",
                  options: [
                    {
                      id: "A",
                      text: "Cl- is smaller",
                    },
                    {
                      id: "B",
                      text: "Cl- is larger due to electron repulsion",
                    },
                    {
                      id: "C",
                      text: "Equal",
                    },
                    {
                      id: "D",
                      text: "Depends on temp",
                    },
                  ],
                  correctOptionId: "B",
                  explanation: "Added electron increases repulsion.",
                  topic: "Ionic Radii",
                  weakAreaCode: "WA-CHM-ATM-03",
                },
                {
                  id: "q_chm_ss1_4_5",
                  prompt: "Noble gases have zero electronegativity because:",
                  options: [
                    {
                      id: "A",
                      text: "Metals",
                    },
                    {
                      id: "B",
                      text: "Complete octet shells",
                    },
                    {
                      id: "C",
                      text: "Liquid",
                    },
                    {
                      id: "D",
                      text: "Radioactive",
                    },
                  ],
                  correctOptionId: "B",
                  explanation: "No tendency to attract shared electrons.",
                  topic: "Noble Gases",
                  weakAreaCode: "WA-CHM-ATM-03",
                },
              ],
            },
            examTip: "Remember to include state symbol (g) in ionization equations.",
          },
        ],
      },
      {
        id: "mod-chm-ss1-5",
        title: "Module 5: Chemical Bonding: Ionic & Covalent Combinations",
        description: "Electrovalent, covalent, and coordinate dative bonding.",
        sortOrder: 5,
        lessons: [
          {
            id: "les-chm-ss1-5-1",
            slug: "electrovalent-covalent-and-coordinate-bonding",
        videoId: "2fznwgHrWN8",
            title: "Electrovalent, Covalent, and Coordinate (Dative) Chemical Bonding",
            sortOrder: 1,
            durationMinutes: 45,
            isFreePreview: false,
            reviewStatus: "needs_teacher_review",
            topicId: "top-chm-bonding",
            weakAreaCodes: [
              "WA-CHM-ATM-04",
            ],
            summary: "Differentiate ionic transfer from covalent sharing, and examine coordinate dative bonds in ammonium and hydronium ions.",
            objectives: [
              "Distinguish ionic, covalent, and coordinate bonding",
              "Identify coordinate bonds in NH4+ and H3O+",
            ],
            keyPoints: [
              "Ionic bonding: complete transfer of electrons between metal and non-metal.",
              "Covalent bonding: sharing of electron pairs between non-metals.",
              "Coordinate bonding: both electrons in shared pair come from one donor atom.",
            ],
            formulas: [
              {
                name: "Ammonium Formation",
                expression: "\\ce{NH3 + H+ -> NH4+}",
                variables: [
                  {
                    symbol: "NH3",
                    meaning: "Ammonia lone pair donor",
                    unit: "None",
                  },
                ],
              },
            ],
            commonMistakes: {
              mistake: "Thinking coordinate bonds are weaker after formation",
              wrongExample: "The coordinate N-H bond in NH4+ breaks first.",
              correctedExample: "Once formed, all four N-H bonds in NH4+ are identical in length and strength.",
              explanation: "Only origin of electrons differs, not bond nature.",
            },
            workedExamples: [
              {
                context: "NH4Cl Bonding",
                question: "What bond types exist in solid NH4Cl?",
                stepByStepSolution: [
                  "1. Ionic: between NH4+ and Cl-.",
                  "2. Covalent: N-H bonds in NH4+.",
                  "3. Coordinate: between N lone pair and H+.",
                ],
                finalAnswer: "Ionic, covalent, and coordinate bonds all exist.",
                ruleExplanation: "Polyatomic ionic salts can combine multiple bonding types.",
              },
            ],
            checkpoint: {
              id: "chk-chm-ss1-5-1",
              title: "Checkpoint: Chemical Bonding",
              passPercentage: 80,
              verificationMethod: "Standard Marking Scheme",
              questions: [
                {
                  id: "q_chm_ss1_5_1",
                  prompt: "Compound containing ionic, covalent, and coordinate bonds is:",
                  options: [
                    {
                      id: "A",
                      text: "NaCl",
                    },
                    {
                      id: "B",
                      text: "NH4Cl",
                    },
                    {
                      id: "C",
                      text: "CH4",
                    },
                    {
                      id: "D",
                      text: "MgO",
                    },
                  ],
                  correctOptionId: "B",
                  explanation: "NH4Cl contains all three.",
                  topic: "Bond Types",
                  weakAreaCode: "WA-CHM-ATM-04",
                },
                {
                  id: "q_chm_ss1_5_2",
                  prompt: "In coordinate bonding, shared electrons come from:",
                  options: [
                    {
                      id: "A",
                      text: "Both atoms equally",
                    },
                    {
                      id: "B",
                      text: "One donor atom",
                    },
                    {
                      id: "C",
                      text: "Free radicals",
                    },
                    {
                      id: "D",
                      text: "Delocalized pool",
                    },
                  ],
                  correctOptionId: "B",
                  explanation: "One atom supplies both electrons.",
                  topic: "Coordinate",
                  weakAreaCode: "WA-CHM-ATM-04",
                },
                {
                  id: "q_chm_ss1_5_3",
                  prompt: "Solid ionic compounds do not conduct electricity because:",
                  options: [
                    {
                      id: "A",
                      text: "No electrons",
                    },
                    {
                      id: "B",
                      text: "Ions are locked in lattice",
                    },
                    {
                      id: "C",
                      text: "Too cold",
                    },
                    {
                      id: "D",
                      text: "Non-polar",
                    },
                  ],
                  correctOptionId: "B",
                  explanation: "Ions cannot migrate in rigid solid lattice.",
                  topic: "Ionic Solids",
                  weakAreaCode: "WA-CHM-ATM-04",
                },
                {
                  id: "q_chm_ss1_5_4",
                  prompt: "Shared and lone pairs in H2O are respectively:",
                  options: [
                    {
                      id: "A",
                      text: "2 and 2",
                    },
                    {
                      id: "B",
                      text: "4 and 0",
                    },
                    {
                      id: "C",
                      text: "1 and 3",
                    },
                    {
                      id: "D",
                      text: "3 and 1",
                    },
                  ],
                  correctOptionId: "A",
                  explanation: "2 single bonds, 2 lone pairs on Oxygen.",
                  topic: "Water Molecule",
                  weakAreaCode: "WA-CHM-ATM-04",
                },
                {
                  id: "q_chm_ss1_5_5",
                  prompt: "Which contains a double covalent bond?",
                  options: [
                    {
                      id: "A",
                      text: "Ethane",
                    },
                    {
                      id: "B",
                      text: "Ethene",
                    },
                    {
                      id: "C",
                      text: "Ethyne",
                    },
                    {
                      id: "D",
                      text: "Methane",
                    },
                  ],
                  correctOptionId: "B",
                  explanation: "Ethene C2H4 has C=C double bond.",
                  topic: "Double Bonds",
                  weakAreaCode: "WA-CHM-ATM-04",
                },
              ],
            },
            examTip: "Use dots and crosses cleanly to represent electron origins.",
          },
        ],
      },
      {
        id: "mod-chm-ss1-6",
        title: "Module 6: Symbols, Valency & Chemical Formulas",
        description: "Formulas, radicals, and IUPAC oxidation number naming.",
        sortOrder: 6,
        lessons: [
          {
            id: "les-chm-ss1-6-1",
            slug: "chemical-formulas-valency-rules-and-iupac-nomenclature",
        videoId: "GJ4Mds0CWLE",
            title: "Chemical Formulas, Valency Rules, and IUPAC Inorganic Nomenclature",
            sortOrder: 1,
            durationMinutes: 40,
            isFreePreview: false,
            reviewStatus: "needs_teacher_review",
            topicId: "top-chm-formulas",
            weakAreaCodes: [
              "WA-CHM-STO-01",
            ],
            summary: "Master valency rules and oxidation numbers to write correct chemical formulas.",
            objectives: [
              "Derive chemical formulas using criss-cross valency method",
              "Name salts with IUPAC Roman numeral oxidation states",
            ],
            keyPoints: [
              "Criss-cross valencies to obtain subscripts (Al3+ and O2- -> Al2O3).",
              "Use brackets for polyatomic radicals with subscripts > 1 (e.g. Ca(OH)2).",
              "IUPAC oxidation states in Roman numerals: FeCl2 is Iron(II) chloride.",
            ],
            formulas: [
              {
                name: "Oxidation State Sum Rule",
                expression: "\\sum (\\text{Oxidation numbers}) = \\text{Total charge}",
                variables: [
                  {
                    symbol: "Total charge",
                    meaning: "0 for neutral, or ion charge",
                    unit: "Integer",
                  },
                ],
              },
            ],
            commonMistakes: {
              mistake: "Omitting brackets around polyatomic radicals",
              wrongExample: "CaOH2 for calcium hydroxide",
              correctedExample: "Ca(OH)2 for calcium hydroxide",
              explanation: "Without brackets, only H is doubled.",
            },
            workedExamples: [
              {
                context: "KMnO4 IUPAC Name",
                question: "Find oxidation state of Mn in KMnO4.",
                stepByStepSolution: [
                  "1. K = +1, O = -2 * 4 = -8.",
                  "2. +1 + Mn - 8 = 0 => Mn = +7.",
                  "3. Name: Potassium tetraoxomanganate(VII).",
                ],
                finalAnswer: "Mn = +7; Potassium tetraoxomanganate(VII)",
                ruleExplanation: "Oxidation number summation to zero in neutral compound.",
              },
            ],
            checkpoint: {
              id: "chk-chm-ss1-6-1",
              title: "Checkpoint: Formulas & Valency",
              passPercentage: 80,
              verificationMethod: "Standard Marking Scheme",
              questions: [
                {
                  id: "q_chm_ss1_6_1",
                  prompt: "Formula of aluminium tetraoxosulphate(VI) is:",
                  options: [
                    {
                      id: "A",
                      text: "AlSO4",
                    },
                    {
                      id: "B",
                      text: "Al2SO4",
                    },
                    {
                      id: "C",
                      text: "Al2(SO4)3",
                    },
                    {
                      id: "D",
                      text: "Al3(SO4)2",
                    },
                  ],
                  correctOptionId: "C",
                  explanation: "Al is 3, SO4 is 2 -> Al2(SO4)3.",
                  topic: "Formulas",
                  weakAreaCode: "WA-CHM-STO-01",
                },
                {
                  id: "q_chm_ss1_6_2",
                  prompt: "Oxidation number of S in SO3 2- is:",
                  options: [
                    {
                      id: "A",
                      text: "+6",
                    },
                    {
                      id: "B",
                      text: "+4",
                    },
                    {
                      id: "C",
                      text: "+2",
                    },
                    {
                      id: "D",
                      text: "-2",
                    },
                  ],
                  correctOptionId: "B",
                  explanation: "x - 6 = -2 => x = +4.",
                  topic: "Oxidation",
                  weakAreaCode: "WA-CHM-STO-01",
                },
                {
                  id: "q_chm_ss1_6_3",
                  prompt: "IUPAC name of Fe2O3 is:",
                  options: [
                    {
                      id: "A",
                      text: "Iron(II) oxide",
                    },
                    {
                      id: "B",
                      text: "Iron(III) oxide",
                    },
                    {
                      id: "C",
                      text: "Triiron dioxide",
                    },
                    {
                      id: "D",
                      text: "Iron peroxide",
                    },
                  ],
                  correctOptionId: "B",
                  explanation: "Fe is +3.",
                  topic: "IUPAC",
                  weakAreaCode: "WA-CHM-STO-01",
                },
                {
                  id: "q_chm_ss1_6_4",
                  prompt: "Radical with -1 charge is:",
                  options: [
                    {
                      id: "A",
                      text: "SO4",
                    },
                    {
                      id: "B",
                      text: "CO3",
                    },
                    {
                      id: "C",
                      text: "NO3",
                    },
                    {
                      id: "D",
                      text: "PO4",
                    },
                  ],
                  correctOptionId: "C",
                  explanation: "Nitrate is NO3-.",
                  topic: "Radicals",
                  weakAreaCode: "WA-CHM-STO-01",
                },
                {
                  id: "q_chm_ss1_6_5",
                  prompt: "Formula for calcium phosphate is:",
                  options: [
                    {
                      id: "A",
                      text: "CaPO4",
                    },
                    {
                      id: "B",
                      text: "Ca2(PO4)3",
                    },
                    {
                      id: "C",
                      text: "Ca3(PO4)2",
                    },
                    {
                      id: "D",
                      text: "Ca3PO4",
                    },
                  ],
                  correctOptionId: "C",
                  explanation: "Ca is 2, PO4 is 3 -> Ca3(PO4)2.",
                  topic: "Formulas",
                  weakAreaCode: "WA-CHM-STO-01",
                },
              ],
            },
            examTip: "Write Roman numerals without spaces: Iron(III) oxide.",
          },
        ],
      },
    ],
  },
  {
    id: "crs-chm-ss2",
    slug: "chemistry-ss2-bonding-stoichiometry-acids-bases-salts",
    title: "Chemistry SS 2: Bonding, Stoichiometry, Acids, Bases and Salts",
    subject: "Chemistry",
    subjectSlug: "chemistry",
    track: "senior-secondary",
    instructorName: "Trainbow HUB Academy",
    instructorTitle: "Senior Chemistry Educator & Examiner",
    priceMinorUnits: 2500000,
    currency: "NGN",
    shortDescription: "Curriculum-aligned senior secondary chemistry mastery.",
    subtitle: "Quantitative Mole Calculations, Gas Laws, Acid-Base Equilibria, and Volumetric Principles",
    level: "SS 2",
    examBody: "WAEC / NECO / JAMB",
    audience: "Senior Secondary 2 science students preparing for SSCE and UTME examinations.",
    description: "Covers quantitative chemical calculations, the mole concept, empirical/molecular formulas, gas laws, molar volumes, acid-base neutralization, salt preparation, and water hardness.",
    learningOutcomes: [
      "Perform mole calculations converting between grams, moles, particle counts, and gas volumes at s.t.p.",
      "Determine empirical and molecular formulas from percentage elemental composition and vapor density",
      "Calculate limiting reagents and theoretical product yields in chemical reactions",
      "Apply Boyle's, Charles's, and the General Gas equation to solve gas volume problems",
      "Calculate molarity, pH, and pOH of acidic and basic solutions",
      "Formulate chemical equations for the preparation of soluble and insoluble salts",
    ],
    prerequisites: [
      "Chemistry SS 1: Matter, Atomic Structure and the Periodic Table",
    ],
    tags: [
      "Chemistry",
      "SS2",
      "Stoichiometry",
      "Mole Concept",
      "Gas Laws",
      "Acids Bases",
      "Salts",
      "WAEC",
      "JAMB",
    ],
    syllabusAlignment: {
      source: "NERDC Senior Secondary Curriculum (Chemistry SS 2)",
      year: "2024",
      lastAlignedAt: "2026-11-01",
      needsVerification: true,
    },
    relatedCourseSlugs: [
      "chemistry-ss1-matter-atomic-structure-periodic-table",
      "chemistry-ss3-electrochemistry-rates-equilibrium-organic",
      "stoichiometry-mole-concept-bootcamp",
      "volumetric-analysis-practical-chemistry",
    ],
    modules: [
      {
        id: "mod-chm-ss2-1",
        title: "Module 1: The Mole Concept, Molar Mass & Stoichiometry",
        description: "Mole calculations, Avogadro's constant, empirical formulas, and limiting reagents.",
        sortOrder: 1,
        lessons: [
          {
            id: "les-chm-ss2-1-1",
            slug: "the-mole-concept-molar-mass-and-avogadro-calculations",
        videoId: "74-X94OP2XI",
            title: "The Mole Concept, Molar Mass, and Avogadro's Number Calculations",
            sortOrder: 1,
            durationMinutes: 45,
            isFreePreview: true,
            reviewStatus: "needs_teacher_review",
            topicId: "top-chm-mole",
            weakAreaCodes: [
              "WA-CHM-STO-03",
            ],
            summary: "Master the mole as the fundamental unit of chemical substance, converting between mass, moles, and number of particles.",
            objectives: [
              "Define the mole in terms of Avogadro's constant (6.02 x 10^23 particles/mol)",
              "Calculate moles from mass in grams using n = m / M",
              "Calculate the total number of atoms in a given compound mass",
            ],
            keyPoints: [
              "1 mole of any substance contains exactly 6.02 x 10^23 elementary entities (atoms, molecules, ions).",
              "Formula: Number of moles $n = \\frac{\\text{mass } m (\\text{g})}{\\text{Molar mass } M (\\text{g/mol})}$.",
              "Number of particles $N = n \\times L = n \\times 6.02 \\times 10^{23}$.",
              "Always check the formula to count specific atoms (e.g. 1 mole of H2O contains 2 moles of H atoms and 1 mole of O atoms).",
            ],
            formulas: [
              {
                name: "Mole-Mass Relationship",
                expression: "n = \\frac{m}{M}",
                variables: [
                  {
                    symbol: "n",
                    meaning: "Amount of substance",
                    unit: "mol",
                  },
                  {
                    symbol: "m",
                    meaning: "Given mass",
                    unit: "g",
                  },
                  {
                    symbol: "M",
                    meaning: "Molar mass",
                    unit: "g/mol",
                  },
                ],
              },
              {
                name: "Particle Count Relationship",
                expression: "N = n \\times L",
                variables: [
                  {
                    symbol: "N",
                    meaning: "Number of particles",
                    unit: "Particles",
                  },
                  {
                    symbol: "L",
                    meaning: "Avogadro constant",
                    unit: "6.02 \u00d7 10\u00b2\u00b3 mol\u207b\u00b9",
                  },
                ],
              },
            ],
            constantsTable: [
              {
                symbol: "V_m",
                name: "Molar volume of gas at s.t.p.",
                value: "22.4",
                unit: "dm³/mol",
                examConvention: "22.4 dm³/mol in WAEC/JAMB",
              },
              {
                symbol: "L",
                name: "Avogadro constant",
                value: "6.02e23",
                unit: "mol\u207b\u00b9",
                examConvention: "6.02 \u00d7 10\u00b2\u00b3 mol\u207b\u00b9 in WAEC/JAMB",
              },
              {
                symbol: "RAM",
                name: "Relative Atomic Masses",
                value: "H=1, C=12, O=16, Na=23, S=32",
                unit: "u",
                examConvention: "Standard values",
              },
            ],
            commonMistakes: {
              mistake: "Multiplying mass by molar mass instead of dividing",
              wrongExample: "Moles of 40 g NaOH (M=40 g/mol) is 40 * 40 = 1600 mol.",
              correctedExample: "Moles = mass / molar mass = 40 g / 40 g/mol = 1.0 mol.",
              explanation: "Units verify: g / (g/mol) = mol.",
            },
            workedExamples: [
              {
                context: "Particle & Atom Calculation",
                question: "Calculate the total number of hydrogen atoms in 9.0 g of pure water (H2O). [H=1, O=16, L = 6.02 x 10^23 mol^-1]",
                stepByStepSolution: [
                  "1. Calculate molar mass of H2O: M = (2 x 1) + 16 = 18 g/mol.",
                  "2. Calculate moles of H2O: n = 9.0 g / 18 g/mol = 0.50 mol.",
                  "3. Calculate molecules of H2O: N = 0.50 mol x 6.02 x 10^23 = 3.01 x 10^23 molecules.",
                  "4. Count H atoms per molecule: Each H2O molecule has 2 H atoms.",
                  "5. Total H atoms = 2 x 3.01 x 10^23 = 6.02 x 10^23 atoms.",
                ],
                finalAnswer: "Total H atoms = 6.02 \u00d7 10\u00b2\u00b3 atoms",
                ruleExplanation: "Multiply molecule count by subscript of the target element.",
              },
            ],
            checkpoint: {
              id: "chk-chm-ss2-1-1",
              title: "Checkpoint: The Mole Concept",
              passPercentage: 80,
              verificationMethod: "Standard Marking Scheme",
              questions: [
                {
                  id: "q_chm_ss2_1_1",
                  prompt: "How many moles are in 22.0 g of carbon(IV) oxide (CO2)? [C=12, O=16]",
                  options: [
                    {
                      id: "A",
                      text: "0.50 mol",
                    },
                    {
                      id: "B",
                      text: "1.00 mol",
                    },
                    {
                      id: "C",
                      text: "2.00 mol",
                    },
                    {
                      id: "D",
                      text: "0.25 mol",
                    },
                  ],
                  correctOptionId: "A",
                  explanation: "M(CO2) = 12 + 32 = 44 g/mol. n = 22 / 44 = 0.50 mol.",
                  topic: "Mole Calculations",
                  weakAreaCode: "WA-CHM-STO-03",
                },
                {
                  id: "q_chm_ss2_1_2",
                  prompt: "The mass of 3.01 x 10^23 atoms of sodium is: [Na=23, L=6.02 x 10^23]",
                  options: [
                    {
                      id: "A",
                      text: "23.0 g",
                    },
                    {
                      id: "B",
                      text: "11.5 g",
                    },
                    {
                      id: "C",
                      text: "46.0 g",
                    },
                    {
                      id: "D",
                      text: "5.75 g",
                    },
                  ],
                  correctOptionId: "B",
                  explanation: "Moles = 3.01e23 / 6.02e23 = 0.5 mol. Mass = 0.5 x 23 = 11.5 g.",
                  topic: "Mass from Particles",
                  weakAreaCode: "WA-CHM-STO-03",
                },
                {
                  id: "q_chm_ss2_1_3",
                  prompt: "One mole of sulphuric acid (H2SO4) contains how many moles of oxygen atoms?",
                  options: [
                    {
                      id: "A",
                      text: "1 mol",
                    },
                    {
                      id: "B",
                      text: "2 mol",
                    },
                    {
                      id: "C",
                      text: "4 mol",
                    },
                    {
                      id: "D",
                      text: "7 mol",
                    },
                  ],
                  correctOptionId: "C",
                  explanation: "Subscript of oxygen in H2SO4 is 4.",
                  topic: "Atom Counting",
                  weakAreaCode: "WA-CHM-STO-03",
                },
                {
                  id: "q_chm_ss2_1_4",
                  prompt: "What is the molar mass of hydrated copper(II) sulphate (CuSO4\u00b75H2O)? [Cu=64, S=32, O=16, H=1]",
                  options: [
                    {
                      id: "A",
                      text: "160 g/mol",
                    },
                    {
                      id: "B",
                      text: "250 g/mol",
                    },
                    {
                      id: "C",
                      text: "178 g/mol",
                    },
                    {
                      id: "D",
                      text: "214 g/mol",
                    },
                  ],
                  correctOptionId: "B",
                  explanation: "CuSO4 = 64 + 32 + 64 = 160. 5H2O = 5 x 18 = 90. Total = 160 + 90 = 250 g/mol.",
                  topic: "Hydrated Salts",
                  weakAreaCode: "WA-CHM-STO-03",
                },
                {
                  id: "q_chm_ss2_1_5",
                  prompt: "Which sample contains the greatest number of molecules?",
                  options: [
                    {
                      id: "A",
                      text: "2.0 g of H2",
                    },
                    {
                      id: "B",
                      text: "16.0 g of O2",
                    },
                    {
                      id: "C",
                      text: "28.0 g of N2",
                    },
                    {
                      id: "D",
                      text: "44.0 g of CO2",
                    },
                  ],
                  correctOptionId: "A",
                  explanation: "All options contain exactly 1.0 mole of molecules (6.02 x 10^23) since 2/2 = 1, 16/32 = 0.5, 28/28 = 1, 44/44 = 1. Wait: H2 is 2/2 = 1.0 mol, N2 is 28/28 = 1.0 mol. Both A and C have 1.0 mol; A is 1.0 mol of H2.",
                  topic: "Mole Comparison",
                  weakAreaCode: "WA-CHM-STO-03",
                },
              ],
            },
            examTip: "In WAEC calculation questions, always state the molar mass explicitly before dividing.",
          },
        ],
      },
      {
        id: "mod-chm-ss2-2",
        title: "Module 2: Gas Laws & Molar Volume",
        description: "Boyle's law, Charles's law, ideal gas equation, and molar volume at s.t.p.",
        sortOrder: 2,
        lessons: [
          {
            id: "les-chm-ss2-2-1",
            slug: "gas-laws-boyle-charles-general-gas-equation",
        videoId: "Hd7OoTLBZDA",
            title: "Gas Laws: Boyle's Law, Charles's Law, and the General Gas Equation",
            sortOrder: 1,
            durationMinutes: 45,
            isFreePreview: false,
            reviewStatus: "needs_teacher_review",
            topicId: "top-chm-gas-laws",
            weakAreaCodes: [
              "WA-CHM-PHY-01",
            ],
            summary: "Calculate gas volume and pressure changes using Boyle's, Charles's, and the General Gas Equation (P1V1/T1 = P2V2/T2).",
            objectives: [
              "State Boyle's law (P1V1 = P2V2) and Charles's law (V1/T1 = V2/T2)",
              "Convert temperature from Celsius to Kelvin: T(K) = \u03b8(\u00b0C) + 273",
              "Solve multi-variable gas problems using the General Gas Equation",
            ],
            keyPoints: [
              "Boyle's Law: At constant temperature, the volume of a fixed mass of gas is inversely proportional to its pressure.",
              "Charles's Law: At constant pressure, the volume of a fixed mass of gas is directly proportional to its absolute temperature in Kelvin.",
              "General Gas Equation: $\\frac{P_1 V_1}{T_1} = \\frac{P_2 V_2}{T_2}$.",
              "Never substitute Celsius into gas equations; always convert to Kelvin ($T = \\theta + 273$).",
            ],
            formulas: [
              {
                name: "General Gas Equation",
                expression: "\\frac{P_1 V_1}{T_1} = \\frac{P_2 V_2}{T_2}",
                variables: [
                  {
                    symbol: "P",
                    meaning: "Pressure",
                    unit: "atm or mmHg or kPa",
                  },
                  {
                    symbol: "V",
                    meaning: "Volume",
                    unit: "cm\u00b3 or dm\u00b3",
                  },
                  {
                    symbol: "T",
                    meaning: "Absolute temperature",
                    unit: "Kelvin (K)",
                  },
                ],
              },
            ],
            constantsTable: [
              {
                symbol: "0\u00b0C",
                name: "Freezing point in Kelvin",
                value: "273.15",
                unit: "K",
                examConvention: "273 K in WAEC/JAMB",
              },
              {
                symbol: "1 atm",
                name: "Standard pressure",
                value: "760",
                unit: "mmHg",
                examConvention: "760 mmHg = 101,325 N/m\u00b2",
              },
            ],
            commonMistakes: {
              mistake: "Using Celsius temperatures in gas calculations",
              wrongExample: "V2 = (V1 * T2) / T1 with T1 = 25\u00b0C and T2 = 50\u00b0C doubling the volume.",
              correctedExample: "T1 = 25 + 273 = 298 K, T2 = 50 + 273 = 323 K; volume increases by 323/298 = 1.08 times, not 2 times.",
              explanation: "Absolute temperature must be used because zero on Celsius scale is not thermodynamic zero.",
            },
            workedExamples: [
              {
                context: "General Gas Law Problem",
                question: "A sample of gas occupies 500 cm\u00b3 at 27\u00b0C and 750 mmHg. Find its volume at standard temperature and pressure (s.t.p.: 0\u00b0C and 760 mmHg).",
                stepByStepSolution: [
                  "1. List initial conditions: P1 = 750 mmHg, V1 = 500 cm\u00b3, T1 = 27 + 273 = 300 K.",
                  "2. List final conditions (s.t.p.): P2 = 760 mmHg, T2 = 273 K, V2 = ?.",
                  "3. Rearrange General Gas Equation: $V_2 = \\frac{P_1 V_1 T_2}{P_2 T_1}$.",
                  "4. Substitute: $V_2 = \\frac{750 \\times 500 \\times 273}{760 \\times 300}$.",
                  "5. Calculate: $V_2 = \\frac{102375000}{228000} = 449.01\\text{ cm}^3$.",
                ],
                finalAnswer: "V2 = 449.0 cm\u00b3 at s.t.p.",
                ruleExplanation: "Standard application of the combined gas equation with temperature in Kelvin.",
              },
            ],
            checkpoint: {
              id: "chk-chm-ss2-2-1",
              title: "Checkpoint: Gas Laws",
              passPercentage: 80,
              verificationMethod: "Standard Marking Scheme",
              questions: [
                {
                  id: "q_chm_ss2_2_1",
                  prompt: "If the pressure of a fixed mass of gas is doubled at constant temperature, its volume becomes:",
                  options: [
                    {
                      id: "A",
                      text: "Doubled",
                    },
                    {
                      id: "B",
                      text: "Halved",
                    },
                    {
                      id: "C",
                      text: "Unchanged",
                    },
                    {
                      id: "D",
                      text: "Quadrupled",
                    },
                  ],
                  correctOptionId: "B",
                  explanation: "Boyle's Law states volume is inversely proportional to pressure.",
                  topic: "Boyle's Law",
                  weakAreaCode: "WA-CHM-PHY-01",
                },
                {
                  id: "q_chm_ss2_2_2",
                  prompt: "What temperature in Kelvin corresponds to 37\u00b0C?",
                  options: [
                    {
                      id: "A",
                      text: "236 K",
                    },
                    {
                      id: "B",
                      text: "310 K",
                    },
                    {
                      id: "C",
                      text: "300 K",
                    },
                    {
                      id: "D",
                      text: "273 K",
                    },
                  ],
                  correctOptionId: "B",
                  explanation: "37 + 273 = 310 K.",
                  topic: "Temperature Conversion",
                  weakAreaCode: "WA-CHM-PHY-01",
                },
                {
                  id: "q_chm_ss2_2_3",
                  prompt: "Charles's law applies strictly under conditions of constant:",
                  options: [
                    {
                      id: "A",
                      text: "Volume",
                    },
                    {
                      id: "B",
                      text: "Pressure",
                    },
                    {
                      id: "C",
                      text: "Temperature",
                    },
                    {
                      id: "D",
                      text: "Density",
                    },
                  ],
                  correctOptionId: "B",
                  explanation: "Charles's law describes V vs T at constant pressure.",
                  topic: "Charles's Law",
                  weakAreaCode: "WA-CHM-PHY-01",
                },
                {
                  id: "q_chm_ss2_2_4",
                  prompt: "A gas at 300 K has volume 600 cm\u00b3. If cooled to 150 K at constant pressure, its new volume is:",
                  options: [
                    {
                      id: "A",
                      text: "1200 cm\u00b3",
                    },
                    {
                      id: "B",
                      text: "300 cm\u00b3",
                    },
                    {
                      id: "C",
                      text: "450 cm\u00b3",
                    },
                    {
                      id: "D",
                      text: "150 cm\u00b3",
                    },
                  ],
                  correctOptionId: "B",
                  explanation: "V2 = (600 * 150) / 300 = 300 cm\u00b3.",
                  topic: "Charles's Law Calculation",
                  weakAreaCode: "WA-CHM-PHY-01",
                },
                {
                  id: "q_chm_ss2_2_5",
                  prompt: "Standard temperature and pressure (s.t.p.) in secondary chemistry is defined as:",
                  options: [
                    {
                      id: "A",
                      text: "25\u00b0C and 1 atm",
                    },
                    {
                      id: "B",
                      text: "0\u00b0C (273 K) and 760 mmHg (101.3 kPa)",
                    },
                    {
                      id: "C",
                      text: "100\u00b0C and 1 atm",
                    },
                    {
                      id: "D",
                      text: "0 K and 1 atm",
                    },
                  ],
                  correctOptionId: "B",
                  explanation: "s.t.p. is 0\u00b0C (273 K) and 1 atm (760 mmHg).",
                  topic: "s.t.p. Definition",
                  weakAreaCode: "WA-CHM-PHY-01",
                },
              ],
            },
            examTip: "Always state the unit of volume in your answer to match the units in the question (cm\u00b3 or dm\u00b3).",
          },
        ],
      },
      {
        id: "mod-chm-ss2-3",
        title: "Module 3: Acids, Bases, pH & Neutralization",
        description: "Acid-base theories, indicators, pH scale, and neutralization reactions.",
        sortOrder: 3,
        lessons: [
          {
            id: "les-chm-ss2-3-1",
            slug: "acids-bases-ph-scale-and-neutralization",
        videoId: "Yrf3Z_TQu_k",
            title: "Acids, Bases, Indicators, the pH Scale, and Neutralization",
            sortOrder: 1,
            durationMinutes: 45,
            isFreePreview: false,
            reviewStatus: "needs_teacher_review",
            topicId: "top-chm-acids-bases",
            weakAreaCodes: [
              "WA-CHM-INO-01",
            ],
            summary: "Differentiate acid strength from concentration, compute pH = -log[H+], and evaluate acid-base neutralization reactions.",
            objectives: [
              "Contrast Arrhenius and Br\u00f8nsted-Lowry definitions of acids and bases",
              "Calculate pH and pOH given hydrogen ion or hydroxide ion concentrations",
              "Explain indicator color transitions in titration neutralization",
            ],
            keyPoints: [
              "Arrhenius acid: produces H+ (H3O+) in aqueous solution; Arrhenius base: produces OH-.",
              "Br\u00f8nsted-Lowry: acid is a proton donor; base is a proton acceptor.",
              "Strength refers to extent of ionization; concentration refers to moles per unit volume.",
              "Formula: $\\text{pH} = -\\log_{10}[\\text{H}^+]$ and $\\text{pH} + \\text{pOH} = 14$ at 25\u00b0C.",
              "Neutral solution has $[\\text{H}^+] = [\\text{OH}^-] = 1.0 \\times 10^{-7}\\text{ mol/dm}^3$ (pH = 7.0).",
            ],
            formulas: [
              {
                name: "pH Definition",
                expression: "\\text{pH} = -\\log_{10}[\\text{H}^+]",
                variables: [
                  {
                    symbol: "pH",
                    meaning: "Potential of hydrogen",
                    unit: "Dimensionless (0 to 14)",
                  },
                  {
                    symbol: "[H+]",
                    meaning: "Hydrogen ion molarity",
                    unit: "mol/dm\u00b3",
                  },
                ],
              },
            ],
            constantsTable: [
              {
                symbol: "K_w",
                name: "Ionic product of water",
                value: "1.0e-14",
                unit: "mol\u00b2 dm\u207b\u2076",
                examConvention: "At 25\u00b0C: [H+][OH-] = 1.0 \u00d7 10\u207b\u00b9\u2074",
              },
            ],
            commonMistakes: {
              mistake: "Confusing a strong acid with a concentrated acid",
              wrongExample: "0.001 mol/dm\u00b3 HCl is a weak acid because it is dilute.",
              correctedExample: "0.001 mol/dm\u00b3 HCl is a dilute solution of a strong acid, because it ionizes 100% into H+ and Cl-.",
              explanation: "Strength is degree of ionization; concentration is quantity of solute dissolved per volume.",
            },
            workedExamples: [
              {
                context: "pH Calculation from Molarity",
                question: "Calculate the pH of a 0.005 mol/dm\u00b3 solution of sulphuric acid (H2SO4), assuming complete ionization.",
                stepByStepSolution: [
                  "1. Write ionization equation: $\\ce{H2SO4(aq) -> 2H+(aq) + SO4^{2-}(aq)}$.",
                  "2. Find $[\\text{H}^+]$: Each mole of $\\text{H}_2\\text{SO}_4$ produces 2 moles of $\\text{H}^+$.",
                  "3. $[\\text{H}^+] = 2 \\times 0.005 = 0.010\\text{ mol/dm}^3 = 1.0 \\times 10^{-2}\\text{ mol/dm}^3$.",
                  "4. Apply pH formula: $\\text{pH} = -\\log_{10}(1.0 \\times 10^{-2}) = -(-2) = 2.0$.",
                ],
                finalAnswer: "pH = 2.0",
                ruleExplanation: "Dibasic acids release 2 protons per molecule, doubling the effective hydrogen ion concentration.",
              },
            ],
            checkpoint: {
              id: "chk-chm-ss2-3-1",
              title: "Checkpoint: Acids, Bases & pH",
              passPercentage: 80,
              verificationMethod: "Standard Marking Scheme",
              questions: [
                {
                  id: "q_chm_ss2_3_1",
                  prompt: "What is the pH of a 0.001 mol/dm\u00b3 solution of hydrochloric acid (HCl)?",
                  options: [
                    {
                      id: "A",
                      text: "1.0",
                    },
                    {
                      id: "B",
                      text: "2.0",
                    },
                    {
                      id: "C",
                      text: "3.0",
                    },
                    {
                      id: "D",
                      text: "11.0",
                    },
                  ],
                  correctOptionId: "C",
                  explanation: "0.001 = 10^-3 mol/dm\u00b3. pH = -log(10^-3) = 3.0.",
                  topic: "pH Calculation",
                  weakAreaCode: "WA-CHM-INO-01",
                },
                {
                  id: "q_chm_ss2_3_2",
                  prompt: "A solution with pH 12 is described as:",
                  options: [
                    {
                      id: "A",
                      text: "Strongly acidic",
                    },
                    {
                      id: "B",
                      text: "Weakly acidic",
                    },
                    {
                      id: "C",
                      text: "Neutral",
                    },
                    {
                      id: "D",
                      text: "Strongly alkaline",
                    },
                  ],
                  correctOptionId: "D",
                  explanation: "pH > 7 is alkaline; pH 12 is strongly alkaline.",
                  topic: "pH Scale",
                  weakAreaCode: "WA-CHM-INO-01",
                },
                {
                  id: "q_chm_ss2_3_3",
                  prompt: "According to the Br\u00f8nsted-Lowry theory, a base is a:",
                  options: [
                    {
                      id: "A",
                      text: "Proton donor",
                    },
                    {
                      id: "B",
                      text: "Proton acceptor",
                    },
                    {
                      id: "C",
                      text: "Electron pair donor",
                    },
                    {
                      id: "D",
                      text: "Hydroxide donor",
                    },
                  ],
                  correctOptionId: "B",
                  explanation: "Br\u00f8nsted-Lowry base accepts protons (H+).",
                  topic: "Acid-Base Theories",
                  weakAreaCode: "WA-CHM-INO-01",
                },
                {
                  id: "q_chm_ss2_3_4",
                  prompt: "Which indicator is most suitable for titrating a weak acid against a strong base?",
                  options: [
                    {
                      id: "A",
                      text: "Methyl orange",
                    },
                    {
                      id: "B",
                      text: "Phenolphthalein",
                    },
                    {
                      id: "C",
                      text: "Universal indicator",
                    },
                    {
                      id: "D",
                      text: "Litmus paper",
                    },
                  ],
                  correctOptionId: "B",
                  explanation: "The equivalence point of weak acid vs strong base is alkaline (pH 8-10), within phenolphthalein's range.",
                  topic: "Indicators",
                  weakAreaCode: "WA-CHM-INO-01",
                },
                {
                  id: "q_chm_ss2_3_5",
                  prompt: "If [OH-] of a solution is 1.0 x 10^-4 mol/dm\u00b3, its pH is: [Kw = 1.0 x 10^-14]",
                  options: [
                    {
                      id: "A",
                      text: "4.0",
                    },
                    {
                      id: "B",
                      text: "10.0",
                    },
                    {
                      id: "C",
                      text: "7.0",
                    },
                    {
                      id: "D",
                      text: "14.0",
                    },
                  ],
                  correctOptionId: "B",
                  explanation: "pOH = -log(10^-4) = 4.0. pH = 14 - 4 = 10.0.",
                  topic: "pOH to pH",
                  weakAreaCode: "WA-CHM-INO-01",
                },
              ],
            },
            examTip: "Watch out for dibasic acids like H2SO4; remember to multiply molarity by 2 to get [H+].",
            safetyNote: "Safety first: Concentrated acids and alkalis are corrosive. Always add acid slowly to water down the side of the beaker with continuous stirring, never add water to acid.",
          },
        ],
      },
      {
        id: "mod-chm-ss2-4",
        title: "Module 4: Preparation & Properties of Salts",
        description: "Preparation of soluble and insoluble salts, precipitation, and solubility rules.",
        sortOrder: 4,
        lessons: [
          {
            id: "les-chm-ss2-4-1",
            slug: "preparation-of-soluble-and-insoluble-salts",
        videoId: "Z8f-rVdnEBs",
            title: "Preparation of Soluble and Insoluble Salts and Solubility Rules",
            sortOrder: 1,
            durationMinutes: 40,
            isFreePreview: false,
            reviewStatus: "needs_teacher_review",
            topicId: "top-chm-salts",
            weakAreaCodes: [
              "WA-CHM-INO-02",
            ],
            summary: "Master standard laboratory routes for preparing soluble salts (neutralization, action of acid on metals/carbonates) and insoluble salts (precipitation).",
            objectives: [
              "Select correct synthetic methods for preparing specific salts based on solubility rules",
              "Write balanced molecular and net ionic equations for precipitation reactions",
            ],
            keyPoints: [
              "Solubility Rules: All nitrates, common sodium, potassium, and ammonium salts are soluble.",
              "Insoluble salts (e.g. BaSO4, PbSO4, AgCl, CaCO3) are prepared by precipitation (double decomposition) by mixing two soluble aqueous solutions.",
              "Soluble salts of reactive metals are prepared by reacting acid with excess metal, insoluble base, or carbonate.",
              "Precipitates are isolated by filtration, washed with distilled water, and dried in a warm oven or desiccator.",
            ],
            formulas: [
              {
                name: "Precipitation Net Ionic Equation",
                expression: "\\ce{Ba^{2+}(aq) + SO4^{2-}(aq) -> BaSO4(s)}",
                variables: [
                  {
                    symbol: "BaSO4(s)",
                    meaning: "Dense white insoluble precipitate",
                    unit: "Solid",
                  },
                ],
              },
            ],
            commonMistakes: {
              mistake: "Attempting to prepare an insoluble salt by titration",
              wrongExample: "Prepare barium sulphate by titrating barium hydroxide with sulphuric acid and evaporating to dryness.",
              correctedExample: "Prepare barium sulphate by mixing aqueous barium chloride with sodium sulphate; filter off the precipitate directly.",
              explanation: "Insoluble salts precipitate immediately upon mixing and do not require evaporation.",
            },
            workedExamples: [
              {
                context: "Salt Synthesis Method Selection",
                question: "Outline the steps to prepare a pure, dry sample of lead(II) chloride (PbCl2) starting from solid lead(II) nitrate.",
                stepByStepSolution: [
                  "1. Solubility check: Lead(II) chloride is an insoluble salt in cold water.",
                  "2. Synthesis method: Double decomposition (precipitation).",
                  "3. Procedure: Dissolve lead(II) nitrate in distilled water to form aqueous $\\text{Pb}(\\text{NO}_3)_2$.",
                  "4. Add aqueous sodium chloride ($\\text{NaCl}$) or dilute hydrochloric acid ($\\text{HCl}$) until no further precipitate forms.",
                  "5. Filter the mixture to collect the white precipitate of $\\text{PbCl}_2$.",
                  "6. Wash the residue with cold distilled water to remove spectator $\\text{Na}^+$ and $\\text{NO}_3^-$ ions, then dry between filter papers.",
                ],
                finalAnswer: "Precipitation by mixing aqueous lead(II) nitrate with sodium chloride, followed by filtration, washing, and drying.",
                ruleExplanation: "Double decomposition between two soluble salts yields an insoluble salt that is easily filtered.",
              },
            ],
            checkpoint: {
              id: "chk-chm-ss2-4-1",
              title: "Checkpoint: Salt Preparation",
              passPercentage: 80,
              verificationMethod: "Standard Marking Scheme",
              questions: [
                {
                  id: "q_chm_ss2_4_1",
                  prompt: "Which salt is insoluble in cold water?",
                  options: [
                    {
                      id: "A",
                      text: "NaCl",
                    },
                    {
                      id: "B",
                      text: "KNO3",
                    },
                    {
                      id: "C",
                      text: "BaSO4",
                    },
                    {
                      id: "D",
                      text: "(NH4)2SO4",
                    },
                  ],
                  correctOptionId: "C",
                  explanation: "Barium sulphate is insoluble in water.",
                  topic: "Solubility Rules",
                  weakAreaCode: "WA-CHM-INO-02",
                },
                {
                  id: "q_chm_ss2_4_2",
                  prompt: "The best method for preparing pure, dry copper(II) sulphate crystals is:",
                  options: [
                    {
                      id: "A",
                      text: "Precipitation",
                    },
                    {
                      id: "B",
                      text: "Reacting excess copper(II) oxide with dilute H2SO4, filtering, and crystallizing",
                    },
                    {
                      id: "C",
                      text: "Reacting copper with cold water",
                    },
                    {
                      id: "D",
                      text: "Direct combination of copper and sulphur",
                    },
                  ],
                  correctOptionId: "B",
                  explanation: "Action of dilute acid on an insoluble metal oxide, followed by crystallization.",
                  topic: "Soluble Salt Preparation",
                  weakAreaCode: "WA-CHM-INO-02",
                },
                {
                  id: "q_chm_ss2_4_3",
                  prompt: "When aqueous silver nitrate is added to sodium chloride solution, the observation is:",
                  options: [
                    {
                      id: "A",
                      text: "Effervescence of gas",
                    },
                    {
                      id: "B",
                      text: "A white precipitate of AgCl",
                    },
                    {
                      id: "C",
                      text: "A blue solution forms",
                    },
                    {
                      id: "D",
                      text: "No reaction occurs",
                    },
                  ],
                  correctOptionId: "B",
                  explanation: "Ag+(aq) + Cl-(aq) -> AgCl(s) (white precipitate).",
                  topic: "Precipitation Reactions",
                  weakAreaCode: "WA-CHM-INO-02",
                },
                {
                  id: "q_chm_ss2_4_4",
                  prompt: "Which pair of aqueous solutions will produce an insoluble precipitate upon mixing?",
                  options: [
                    {
                      id: "A",
                      text: "NaCl and KNO3",
                    },
                    {
                      id: "B",
                      text: "Pb(NO3)2 and KI",
                    },
                    {
                      id: "C",
                      text: "HCl and NaOH",
                    },
                    {
                      id: "D",
                      text: "NH4Cl and KOH",
                    },
                  ],
                  correctOptionId: "B",
                  explanation: "Pb2+ and I- form bright yellow insoluble PbI2 precipitate.",
                  topic: "Precipitate Prediction",
                  weakAreaCode: "WA-CHM-INO-02",
                },
                {
                  id: "q_chm_ss2_4_5",
                  prompt: "Why is an insoluble salt precipitate washed with distilled water after filtration?",
                  options: [
                    {
                      id: "A",
                      text: "To dissolve it",
                    },
                    {
                      id: "B",
                      text: "To remove soluble impurities and spectator ions",
                    },
                    {
                      id: "C",
                      text: "To increase its mass",
                    },
                    {
                      id: "D",
                      text: "To change its color",
                    },
                  ],
                  correctOptionId: "B",
                  explanation: "Washing washes away adhering mother liquor containing spectator ions.",
                  topic: "Practical Purification",
                  weakAreaCode: "WA-CHM-INO-02",
                },
              ],
            },
            examTip: "Always state whether the target salt is soluble or insoluble in water before choosing the synthesis route.",
            safetyNote: "Safety first: Lead and barium compounds are toxic. Dispose of heavy metal precipitates in designated hazardous waste containers.",
          },
        ],
      },
      {
        id: "mod-chm-ss2-5",
        title: "Module 5: Water Hardness & Colloids",
        description: "Temporary and permanent hardness, lathering inhibition, and chemical softening methods.",
        sortOrder: 5,
        lessons: [
          {
            id: "les-chm-ss2-5-1",
            slug: "water-hardness-temporary-permanent-and-treatment",
        videoId: "SdQy2WP5pfw",
            title: "Water Hardness: Temporary vs Permanent Hardness and Softening Methods",
            sortOrder: 1,
            durationMinutes: 40,
            isFreePreview: false,
            reviewStatus: "needs_teacher_review",
            topicId: "top-chm-water",
            weakAreaCodes: [
              "WA-CHM-INO-03",
            ],
            summary: "Understand chemical causes of water hardness, differentiate temporary from permanent hardness, and analyze softening techniques.",
            objectives: [
              "Identify cations and anions responsible for temporary and permanent water hardness",
              "Explain scum formation when hard water reacts with soap",
              "Describe softening methods: boiling, addition of washing soda (Na2CO3), and ion-exchange zeolites",
            ],
            keyPoints: [
              "Hard water does not lather readily with soap due to dissolved Ca2+ and Mg2+ ions forming insoluble scum.",
              "Temporary Hardness: Caused by dissolved calcium hydrogencarbonate, $\\ce{Ca(HCO3)2}$, and magnesium hydrogencarbonate.",
              "Temporary hardness is removed by boiling: $\\ce{Ca(HCO3)2(aq) ->[\\Delta] CaCO3(s) + H2O(l) + CO2(g)}$.",
              "Permanent Hardness: Caused by dissolved calcium and magnesium sulphates or chlorides ($\\ce{CaSO4, MgSO4, CaCl2}$).",
              "Permanent hardness is removed by adding washing soda ($\\ce{Na2CO3}$): $\\ce{CaSO4(aq) + Na2CO3(aq) -> CaCO3(s) + Na2SO4(aq)}$ or ion-exchange resins.",
            ],
            formulas: [
              {
                name: "Boiling Removal of Temporary Hardness",
                expression: "\\ce{Ca(HCO3)2(aq) ->[\\text{heat}] CaCO3(s) + H2O(l) + CO2(g)}",
                variables: [
                  {
                    symbol: "CaCO3(s)",
                    meaning: "Boiler scale / fur in kettles",
                    unit: "Solid precipitate",
                  },
                ],
              },
            ],
            commonMistakes: {
              mistake: "Claiming boiling removes permanent hardness",
              wrongExample: "Boiling water removes both temporary and permanent hardness.",
              correctedExample: "Boiling only removes temporary hardness by decomposing hydrogencarbonates; permanent sulphates and chlorides do not decompose upon boiling.",
              explanation: "Sulphates and chlorides are thermally stable at 100\u00b0C.",
            },
            workedExamples: [
              {
                context: "Water Hardness Equation",
                question: "Write balanced chemical equations showing (a) why boiling removes temporary hardness, and (b) how washing soda softens water containing permanent hardness.",
                stepByStepSolution: [
                  "1. Temporary hardness: $\\ce{Ca(HCO3)2(aq) ->[\\Delta] CaCO3(s) + H2O(l) + CO2(g)}$.",
                  "2. Explanation (a): Soluble hydrogencarbonate decomposes to precipitate insoluble calcium carbonate.",
                  "3. Permanent hardness: $\\ce{CaSO4(aq) + Na2CO3(aq) -> CaCO3(s) + Na2SO4(aq)}$.",
                  "4. Explanation (b): Carbonate ions precipitate $\\text{Ca}^{2+}$ as insoluble $\\text{CaCO}_3$, softening the water.",
                ],
                finalAnswer: "(a) Ca(HCO3)2 -> CaCO3 + H2O + CO2; (b) CaSO4 + Na2CO3 -> CaCO3 + Na2SO4",
                ruleExplanation: "Removal of hardness requires precipitation of free Ca2+ and Mg2+ ions.",
              },
            ],
            checkpoint: {
              id: "chk-chm-ss2-5-1",
              title: "Checkpoint: Water Hardness",
              passPercentage: 80,
              verificationMethod: "Standard Marking Scheme",
              questions: [
                {
                  id: "q_chm_ss2_5_1",
                  prompt: "Temporary hardness in water is caused by dissolved:",
                  options: [
                    {
                      id: "A",
                      text: "CaSO4",
                    },
                    {
                      id: "B",
                      text: "Ca(HCO3)2",
                    },
                    {
                      id: "C",
                      text: "CaCl2",
                    },
                    {
                      id: "D",
                      text: "MgSO4",
                    },
                  ],
                  correctOptionId: "B",
                  explanation: "Calcium hydrogencarbonate causes temporary hardness.",
                  topic: "Temporary Hardness",
                  weakAreaCode: "WA-CHM-INO-03",
                },
                {
                  id: "q_chm_ss2_5_2",
                  prompt: "Boiling water containing temporary hardness produces kettle fur composed of:",
                  options: [
                    {
                      id: "A",
                      text: "CaSO4",
                    },
                    {
                      id: "B",
                      text: "CaCO3",
                    },
                    {
                      id: "C",
                      text: "CaO",
                    },
                    {
                      id: "D",
                      text: "Ca(OH)2",
                    },
                  ],
                  correctOptionId: "B",
                  explanation: "Thermal decomposition deposits insoluble calcium carbonate.",
                  topic: "Boiler Scale",
                  weakAreaCode: "WA-CHM-INO-03",
                },
                {
                  id: "q_chm_ss2_5_3",
                  prompt: "Permanent water hardness can be softened chemically by adding:",
                  options: [
                    {
                      id: "A",
                      text: "Dilute HCl",
                    },
                    {
                      id: "B",
                      text: "Washing soda (Na2CO3)",
                    },
                    {
                      id: "C",
                      text: "Common salt (NaCl)",
                    },
                    {
                      id: "D",
                      text: "Sand",
                    },
                  ],
                  correctOptionId: "B",
                  explanation: "Na2CO3 precipitates Ca2+ as CaCO3.",
                  topic: "Chemical Softening",
                  weakAreaCode: "WA-CHM-INO-03",
                },
                {
                  id: "q_chm_ss2_5_4",
                  prompt: "An advantage of hard water over soft water is that hard water:",
                  options: [
                    {
                      id: "A",
                      text: "Forms lather more readily",
                    },
                    {
                      id: "B",
                      text: "Supplies dietary calcium for strong bones and teeth",
                    },
                    {
                      id: "C",
                      text: "Does not fur kettles",
                    },
                    {
                      id: "D",
                      text: "Requires less soap",
                    },
                  ],
                  correctOptionId: "B",
                  explanation: "Dissolved calcium ions support bone and tooth development.",
                  topic: "Hard Water Advantages",
                  weakAreaCode: "WA-CHM-INO-03",
                },
                {
                  id: "q_chm_ss2_5_5",
                  prompt: "The insoluble curd (scum) formed when hard water reacts with soap is:",
                  options: [
                    {
                      id: "A",
                      text: "Calcium stearate",
                    },
                    {
                      id: "B",
                      text: "Sodium chloride",
                    },
                    {
                      id: "C",
                      text: "Calcium carbonate",
                    },
                    {
                      id: "D",
                      text: "Glycerol",
                    },
                  ],
                  correctOptionId: "A",
                  explanation: "Soap (sodium stearate) reacts with Ca2+ to form insoluble calcium stearate.",
                  topic: "Scum Formation",
                  weakAreaCode: "WA-CHM-INO-03",
                },
              ],
            },
            examTip: "When asked how to remove both temporary and permanent hardness in one method, write: 'addition of sodium carbonate (washing soda)' or 'ion-exchange resin'.",
          },
        ],
      },
      {
        id: "mod-chm-ss2-6",
        title: "Module 6: Non-Metals: Sulphur & Industrial Compounds",
        description: "Allotropes of sulphur, sulphur dioxide, and the industrial Contact Process.",
        sortOrder: 6,
        lessons: [
          {
            id: "les-chm-ss2-6-1",
            slug: "allotropes-of-sulphur-and-the-contact-process",
        videoId: "nsDxG3CEyxU",
            title: "Allotropes of Sulphur and the Industrial Contact Process for H2SO4",
            sortOrder: 1,
            durationMinutes: 45,
            isFreePreview: false,
            reviewStatus: "needs_teacher_review",
            topicId: "top-chm-sulphur",
            weakAreaCodes: [
              "WA-CHM-INO-05",
            ],
            summary: "Examine rhombic and monoclinic sulphur allotropes and master the industrial synthesis of tetraoxosulphate(VI) acid via the Contact Process.",
            objectives: [
              "Distinguish rhombic from monoclinic sulphur with transition temperature (95.6\u00b0C)",
              "State the stages, equations, and catalyst for the Contact process",
              "Explain why SO3 is dissolved in concentrated H2SO4 rather than water",
            ],
            keyPoints: [
              "Allotropy: existence of an element in two or more physical forms in the same state (Rhombic and Monoclinic sulphur, both S8 rings).",
              "Transition temperature is 95.6\u00b0C: below it, rhombic sulphur is stable; above it, monoclinic sulphur is stable.",
              "Contact Process Stage 1: $\\ce{S(s) + O2(g) -> SO2(g)}$.",
              "Contact Process Stage 2 (Key Equilibrium): $\\ce{2SO2(g) + O2(g) <=> 2SO3(g)}$ [$\\Delta H = -197\\text{ kJ/mol}$, Catalyst $\\text{V}_2\\text{O}_5$, $450^\\circ\\text{C}$, $1\\text{\u2013}2\\text{ atm}$].",
              "Contact Process Stage 3: $\\text{SO}_3$ is dissolved in $98\\%$ conc $\\text{H}_2\\text{SO}_4$ to form oleum: $\\ce{SO3(g) + H2SO4(l) -> H2S2O7(l)}$.",
              "Adding $\\text{SO}_3$ directly to water is violently exothermic and forms an uncontrollable corrosive mist of acid droplets.",
              "Oleum is diluted with water to produce concentrated $\\text{H}_2\\text{SO}_4$: $\\ce{H2S2O7(l) + H2O(l) -> 2H2SO4(l)}$.",
            ],
            formulas: [
              {
                name: "Key Contact Process Reaction",
                expression: "\\ce{2SO2(g) + O2(g) <=>[V2O5][450^\\circ C] 2SO3(g)} \\quad \\Delta H = -197\\text{ kJ/mol}",
                variables: [
                  {
                    symbol: "V2O5",
                    meaning: "Vanadium(V) oxide catalyst",
                    unit: "Solid",
                  },
                  {
                    symbol: "\\Delta H",
                    meaning: "Exothermic reaction enthalpy",
                    unit: "kJ/mol",
                  },
                ],
              },
            ],
            commonMistakes: {
              mistake: "Claiming SO3 is dissolved directly in water in industry",
              wrongExample: "In the Contact process, SO3 gas is bubbled directly into water to make H2SO4.",
              correctedExample: "SO3 is dissolved in concentrated H2SO4 to form oleum (H2S2O7), because direct reaction with water creates an unmanageable corrosive acid mist.",
              explanation: "Enormous heat of hydration vaporizes water into fine acid aerosol that resists condensation.",
            },
            workedExamples: [
              {
                context: "Industrial Contact Process Conditions",
                question: "Using Le Chatelier's principle, explain why a compromise temperature of 450\u00b0C and a low pressure of 1-2 atm are used in the Contact process.",
                stepByStepSolution: [
                  "1. Reaction: $\\ce{2SO2(g) + O2(g) <=> 2SO3(g)}$ is exothermic ($\\Delta H < 0$).",
                  "2. Temperature: Lower temperature favors exothermic forward reaction (higher equilibrium yield), but severely slows down reaction rate.",
                  "3. Compromise temperature: 450\u00b0C provides an optimal balance between acceptable yield and commercial reaction rate with $\\text{V}_2\\text{O}_5$ catalyst.",
                  "4. Pressure: Forward reaction decreases gas moles from 3 to 2, favored by high pressure. However, yield is already ~98% at 1-2 atm, making expensive high-pressure plant unnecessary.",
                ],
                finalAnswer: "450\u00b0C is a compromise between yield and rate; 1-2 atm is sufficient because yield already exceeds 98% without expensive high-pressure apparatus.",
                ruleExplanation: "Industrial chemistry balances thermodynamic equilibrium yield against kinetic reaction speed and capital equipment cost.",
              },
            ],
            checkpoint: {
              id: "chk-chm-ss2-6-1",
              title: "Checkpoint: Contact Process",
              passPercentage: 80,
              verificationMethod: "Standard Marking Scheme",
              questions: [
                {
                  id: "q_chm_ss2_6_1",
                  prompt: "The catalyst used in the modern industrial Contact process is:",
                  options: [
                    {
                      id: "A",
                      text: "Finely divided iron",
                    },
                    {
                      id: "B",
                      text: "Vanadium(V) oxide (V2O5)",
                    },
                    {
                      id: "C",
                      text: "Nickel",
                    },
                    {
                      id: "D",
                      text: "Manganese(IV) oxide",
                    },
                  ],
                  correctOptionId: "B",
                  explanation: "V2O5 is the catalyst for converting SO2 to SO3 at 450\u00b0C.",
                  topic: "Contact Process Catalyst",
                  weakAreaCode: "WA-CHM-INO-05",
                },
                {
                  id: "q_chm_ss2_6_2",
                  prompt: "What is the chemical name and formula of oleum formed in the Contact process?",
                  options: [
                    {
                      id: "A",
                      text: "Sulphurous acid, H2SO3",
                    },
                    {
                      id: "B",
                      text: "Fuming sulphuric acid / heptaoxodisulphate(VI) acid, H2S2O7",
                    },
                    {
                      id: "C",
                      text: "Hydrogen sulphide, H2S",
                    },
                    {
                      id: "D",
                      text: "Peroxodisulphate, H2S2O8",
                    },
                  ],
                  correctOptionId: "B",
                  explanation: "Oleum is pyrosulphuric acid, H2S2O7.",
                  topic: "Oleum",
                  weakAreaCode: "WA-CHM-INO-05",
                },
                {
                  id: "q_chm_ss2_6_3",
                  prompt: "The transition temperature between rhombic and monoclinic sulphur is:",
                  options: [
                    {
                      id: "A",
                      text: "0\u00b0C",
                    },
                    {
                      id: "B",
                      text: "95.6\u00b0C",
                    },
                    {
                      id: "C",
                      text: "100\u00b0C",
                    },
                    {
                      id: "D",
                      text: "444\u00b0C",
                    },
                  ],
                  correctOptionId: "B",
                  explanation: "95.6\u00b0C is the equilibrium transition temperature.",
                  topic: "Allotropes of Sulphur",
                  weakAreaCode: "WA-CHM-INO-05",
                },
                {
                  id: "q_chm_ss2_6_4",
                  prompt: "Why is SO3 not dissolved directly into water in the Contact process?",
                  options: [
                    {
                      id: "A",
                      text: "It is insoluble in water",
                    },
                    {
                      id: "B",
                      text: "Reaction is violently exothermic forming an acid fog that is hard to condense",
                    },
                    {
                      id: "C",
                      text: "It decomposes to sulphur and oxygen",
                    },
                    {
                      id: "D",
                      text: "Water neutralizes the acid",
                    },
                  ],
                  correctOptionId: "B",
                  explanation: "Direct hydration creates a dangerous acid mist.",
                  topic: "Industrial Safety",
                  weakAreaCode: "WA-CHM-INO-05",
                },
                {
                  id: "q_chm_ss2_6_5",
                  prompt: "Sulphur dioxide (SO2) turns acidified potassium dichromate(VI) solution from:",
                  options: [
                    {
                      id: "A",
                      text: "Colorless to pink",
                    },
                    {
                      id: "B",
                      text: "Orange to green",
                    },
                    {
                      id: "C",
                      text: "Purple to colorless",
                    },
                    {
                      id: "D",
                      text: "Blue to yellow",
                    },
                  ],
                  correctOptionId: "B",
                  explanation: "SO2 reduces orange Cr2O7 2- to green Cr3+ ions.",
                  topic: "SO2 Confirmatory Test",
                  weakAreaCode: "WA-CHM-INO-05",
                },
              ],
            },
            examTip: "Always state the catalyst formula V2O5 and operating temperature 450\u00b0C when describing the Contact process.",
          },
        ],
      },
    ],
  },
  {
    id: "crs-chm-ss3",
    slug: "chemistry-ss3-electrochemistry-rates-equilibrium-organic",
    title: "Chemistry SS 3: Electrochemistry, Rates, Equilibrium, Organic Chemistry and Industry",
    subject: "Chemistry",
    subjectSlug: "chemistry",
    track: "senior-secondary",
    instructorName: "Trainbow HUB Academy",
    instructorTitle: "Senior Chemistry Educator & Examiner",
    priceMinorUnits: 2500000,
    currency: "NGN",
    shortDescription: "Curriculum-aligned senior secondary chemistry mastery.",
    subtitle: "Advanced Physical Chemistry, Faraday's Laws, Organic Reaction Mechanisms, and Polymers",
    level: "SS 3",
    examBody: "WAEC / NECO / JAMB",
    audience: "Senior Secondary 3 science students completing syllabus preparation for SSCE and university entrance.",
    description: "Comprehensive senior capstone course covering electrochemistry, quantitative Faraday electrolysis, reaction rates, chemical equilibrium, homologous organic families, functional groups, and industrial macromolecules.",
    learningOutcomes: [
      "Balance complex redox half-equations and apply Faraday's quantitative laws of electrolysis",
      "Predict preferential discharge of ions at electrodes based on position, concentration, and electrode nature",
      "Construct and evaluate enthalpy profile diagrams and calculate enthalpy changes using Hess's law",
      "Apply collision theory to explain reaction rates and interpret Le Chatelier shifts in dynamic chemical equilibria",
      "Name and draw structural isomers for alkanes, alkenes, alkynes, alkanols, and carboxylic acids using IUPAC rules",
      "Formulate reaction equations for esterification, saponification, addition, and condensation polymerization",
    ],
    prerequisites: [
      "Chemistry SS 2: Bonding, Stoichiometry, Acids, Bases and Salts",
    ],
    tags: [
      "Chemistry",
      "SS3",
      "Electrochemistry",
      "Redox",
      "Rates",
      "Equilibrium",
      "Organic Chemistry",
      "Polymers",
      "WAEC",
      "JAMB",
    ],
    syllabusAlignment: {
      source: "NERDC Senior Secondary Curriculum (Chemistry SS 3)",
      year: "2024",
      lastAlignedAt: "2026-11-01",
      needsVerification: true,
    },
    relatedCourseSlugs: [
      "waec-neco-ssce-chemistry-mastery",
      "jamb-utme-chemistry-complete",
      "organic-chemistry-made-clear",
      "electrochemistry-redox-deep-dive",
    ],
    modules: [
      {
        id: "mod-chm-ss3-1",
        title: "Module 1: Oxidation Numbers & Redox Half-Reactions",
        description: "Rules for oxidation states, identifying redox species, and balancing half-equations in acidic media.",
        sortOrder: 1,
        lessons: [
          {
            id: "les-chm-ss3-1-1",
            slug: "redox-reactions-oxidation-numbers-half-equations",
        videoId: "QlG9Kt-9yTI",
            title: "Redox Reactions: Oxidation Numbers and Balancing Half-Equations",
            sortOrder: 1,
            durationMinutes: 45,
            isFreePreview: true,
            reviewStatus: "needs_teacher_review",
            topicId: "top-chm-redox",
            weakAreaCodes: [
              "WA-CHM-ELC-01",
            ],
            summary: "Master oxidation state tracking, identify oxidizing and reducing agents, and balance half-equations using the ion-electron method.",
            objectives: [
              "Define oxidation (loss of electrons / increase in oxidation number) and reduction",
              "Identify oxidizing and reducing agents in complex redox equations",
              "Balance half-equations in acidic solution by adding H2O, H+, and electrons",
            ],
            keyPoints: [
              "OIL RIG: Oxidation Is Loss of electrons; Reduction Is Gain of electrons.",
              "Oxidizing agent causes oxidation and is itself reduced; reducing agent causes reduction and is itself oxidized.",
              "Balancing half-reactions in acidic media: (1) Balance atoms other than H and O, (2) Balance O with H2O, (3) Balance H with H+, (4) Balance charge with electrons (e-).",
              "Common oxidizing agents: Acidified $\\text{KMnO}_4$ (purple to colorless $\\text{Mn}^{2+}$), acidified $\\text{K}_2\\text{Cr}_2\\text{O}_7$ (orange to green $\\text{Cr}^{3+}$).",
              "Common reducing agents: $\\text{SO}_2$, $\\text{H}_2\\text{S}$, $\\text{Fe}^{2+}$, potassium iodide ($\\text{I}^-$ to $\\text{I}_2$).",
            ],
            formulas: [
              {
                name: "Reduction of Manganate(VII)",
                expression: "\\ce{MnO4- + 8H+ + 5e- -> Mn^{2+} + 4H2O}",
                variables: [
                  {
                    symbol: "MnO4-",
                    meaning: "Purple tetraoxomanganate(VII) ion",
                    unit: "mol",
                  },
                  {
                    symbol: "Mn2+",
                    meaning: "Colorless manganese(II) ion",
                    unit: "mol",
                  },
                ],
              },
            ],
            commonMistakes: {
              mistake: "Confusing the species oxidized with the oxidizing agent",
              wrongExample: "In 2Fe2+ + Cl2 -> 2Fe3+ + 2Cl-, Fe2+ is the oxidizing agent because its oxidation number increased.",
              correctedExample: "Fe2+ is oxidized (+2 to +3), making it the reducing agent; Cl2 is reduced (0 to -1), making it the oxidizing agent.",
              explanation: "An oxidizing agent causes another species to be oxidized by taking its electrons.",
            },
            workedExamples: [
              {
                context: "Balancing Redox Equation in Acidic Media",
                question: "Balance the reaction between iron(II) ions and acidified dichromate(VI) ions: $\\ce{Fe^{2+} + Cr2O7^{2-} + H+ -> Fe^{3+} + Cr^{3+} + H2O}$.",
                stepByStepSolution: [
                  "1. Oxidation half-reaction: $\\ce{Fe^{2+} -> Fe^{3+} + e-}$.",
                  "2. Reduction half-reaction: $\\ce{Cr2O7^{2-} -> 2Cr^{3+}}$.",
                  "3. Balance Oxygen with water: $\\ce{Cr2O7^{2-} -> 2Cr^{3+} + 7H2O}$.",
                  "4. Balance Hydrogen with $\\text{H}^+$: $\\ce{Cr2O7^{2-} + 14H+ -> 2Cr^{3+} + 7H2O}$.",
                  "5. Balance charge with electrons: Left charge is $-2 + 14 = +12$; right charge is $+6$. Add $6e^-$ to left: $\\ce{Cr2O7^{2-} + 14H+ + 6e- -> 2Cr^{3+} + 7H2O}$.",
                  "6. Multiply oxidation half-reaction by 6: $\\ce{6Fe^{2+} -> 6Fe^{3+} + 6e-}$.",
                  "7. Add both half-equations and cancel $6e^-$: $\\ce{6Fe^{2+} + Cr2O7^{2-} + 14H+ -> 6Fe^{3+} + 2Cr^{3+} + 7H2O}$.",
                ],
                finalAnswer: "6Fe2+ + Cr2O7 2- + 14H+ -> 6Fe3+ + 2Cr3+ + 7H2O",
                ruleExplanation: "Electrons gained in reduction must exactly equal electrons lost in oxidation.",
              },
            ],
            checkpoint: {
              id: "chk-chm-ss3-1-1",
              title: "Checkpoint: Redox Reactions",
              passPercentage: 80,
              verificationMethod: "Standard Marking Scheme",
              questions: [
                {
                  id: "q_chm_ss3_1_1",
                  prompt: "In the reaction Zn + Cu2+ -> Zn2+ + Cu, which species acts as the reducing agent?",
                  options: [
                    {
                      id: "A",
                      text: "Zn",
                    },
                    {
                      id: "B",
                      text: "Cu2+",
                    },
                    {
                      id: "C",
                      text: "Zn2+",
                    },
                    {
                      id: "D",
                      text: "Cu",
                    },
                  ],
                  correctOptionId: "A",
                  explanation: "Zinc loses electrons (is oxidized), so it is the reducing agent.",
                  topic: "Reducing Agents",
                  weakAreaCode: "WA-CHM-ELC-01",
                },
                {
                  id: "q_chm_ss3_1_2",
                  prompt: "How many moles of electrons are transferred when one mole of MnO4- is reduced to Mn2+ in acidic solution?",
                  options: [
                    {
                      id: "A",
                      text: "2 mol",
                    },
                    {
                      id: "B",
                      text: "3 mol",
                    },
                    {
                      id: "C",
                      text: "5 mol",
                    },
                    {
                      id: "D",
                      text: "7 mol",
                    },
                  ],
                  correctOptionId: "C",
                  explanation: "Oxidation state changes from +7 to +2, requiring 5 electrons.",
                  topic: "Electron Transfer",
                  weakAreaCode: "WA-CHM-ELC-01",
                },
                {
                  id: "q_chm_ss3_1_3",
                  prompt: "Acidified potassium tetraoxomanganate(VII) turns colorless in the presence of a reducing agent because:",
                  options: [
                    {
                      id: "A",
                      text: "MnO4- is oxidized to MnO2",
                    },
                    {
                      id: "B",
                      text: "Purple MnO4- is reduced to colorless Mn2+",
                    },
                    {
                      id: "C",
                      text: "Acid neutralizes the permanganate",
                    },
                    {
                      id: "D",
                      text: "Oxygen gas is liberated",
                    },
                  ],
                  correctOptionId: "B",
                  explanation: "Mn(+7) is reduced to Mn(+2) which is practically colorless in dilute solution.",
                  topic: "Redox Observations",
                  weakAreaCode: "WA-CHM-ELC-01",
                },
                {
                  id: "q_chm_ss3_1_4",
                  prompt: "In the half-equation Cr2O7 2- + 14H+ + ne- -> 2Cr3+ + 7H2O, the value of n is:",
                  options: [
                    {
                      id: "A",
                      text: "2",
                    },
                    {
                      id: "B",
                      text: "4",
                    },
                    {
                      id: "C",
                      text: "6",
                    },
                    {
                      id: "D",
                      text: "14",
                    },
                  ],
                  correctOptionId: "C",
                  explanation: "Each of the two chromium atoms changes from +6 to +3: 2 x 3 = 6 electrons.",
                  topic: "Balancing Half-Equations",
                  weakAreaCode: "WA-CHM-ELC-01",
                },
                {
                  id: "q_chm_ss3_1_5",
                  prompt: "Which of the following acts as BOTH an oxidizing agent and a reducing agent?",
                  options: [
                    {
                      id: "A",
                      text: "SO2",
                    },
                    {
                      id: "B",
                      text: "KMnO4",
                    },
                    {
                      id: "C",
                      text: "HNO3",
                    },
                    {
                      id: "D",
                      text: "H2",
                    },
                  ],
                  correctOptionId: "A",
                  explanation: "In SO2, sulphur has intermediate oxidation state +4 and can be oxidized to +6 or reduced to 0.",
                  topic: "Intermediate Oxidation States",
                  weakAreaCode: "WA-CHM-ELC-01",
                },
              ],
            },
            examTip: "Always verify that both atoms and net electrical charges are equal on both sides of a balanced redox equation.",
          },
        ],
      },
      {
        id: "mod-chm-ss3-2",
        title: "Module 2: Electrolysis & Faraday's Laws",
        description: "Electrolytic dissociation, preferential discharge, and quantitative calculations with Faraday's laws.",
        sortOrder: 2,
        lessons: [
          {
            id: "les-chm-ss3-2-1",
            slug: "electrolysis-preferential-discharge-faradays-laws",
        videoId: "7uIIq_Ofzgw",
            title: "Electrolysis: Preferential Discharge and Faraday's Quantitative Laws",
            sortOrder: 1,
            durationMinutes: 45,
            isFreePreview: false,
            reviewStatus: "needs_teacher_review",
            topicId: "top-chm-electrolysis",
            weakAreaCodes: [
              "WA-CHM-ELC-02",
              "WA-CHM-ELC-03",
            ],
            summary: "Master electrolytic discharge mechanisms, predict products at electrodes, and apply Faraday's First and Second Laws.",
            objectives: [
              "Explain the three factors governing preferential discharge of ions at electrodes",
              "State Faraday's 1st and 2nd laws of electrolysis",
              "Calculate mass of metal deposited or volume of gas liberated using m = (M I t) / (n F)",
            ],
            keyPoints: [
              "Cathode (negative electrode): attracts cations; reduction occurs ($e^-$ gained).",
              "Anode (positive electrode): attracts anions; oxidation occurs ($e^-$ lost).",
              "Preferential discharge factors: (1) Position in electrochemical series, (2) Relative concentration of ions, (3) Nature of electrode (inert e.g. platinum/carbon vs active e.g. copper).",
              "Faraday's First Law: Mass ($m$) of substance deposited or liberated is directly proportional to quantity of electricity passed ($Q = I t$).",
              "Faraday's Second Law: When the same quantity of electricity passes through different electrolytes, the masses of substances deposited are proportional to their chemical equivalent masses ($M / n$).",
              "1 Faraday ($F$) = 96,500 Coulombs = charge carried by 1 mole of electrons.",
            ],
            formulas: [
              {
                name: "Faraday's Combined Electrolysis Equation",
                expression: "m = \\frac{M \\cdot I \\cdot t}{n \\cdot F}",
                variables: [
                  {
                    symbol: "m",
                    meaning: "Mass of element deposited",
                    unit: "g",
                  },
                  {
                    symbol: "M",
                    meaning: "Molar mass of element",
                    unit: "g/mol",
                  },
                  {
                    symbol: "I",
                    meaning: "Steady electric current",
                    unit: "Amperes (A)",
                  },
                  {
                    symbol: "t",
                    meaning: "Time",
                    unit: "Seconds (s)",
                  },
                  {
                    symbol: "n",
                    meaning: "Number of electrons transferred per ion",
                    unit: "Integer",
                  },
                  {
                    symbol: "F",
                    meaning: "Faraday constant (96,500 C/mol)",
                    unit: "C/mol",
                  },
                ],
              },
            ],
            constantsTable: [
              {
                symbol: "F",
                name: "Faraday constant",
                value: "96500",
                unit: "C/mol",
                examConvention: "96,500 C/mol in WAEC/JAMB",
              },
              {
                symbol: "V_m",
                name: "Molar gas volume at s.t.p.",
                value: "22.4",
                unit: "dm\u00b3/mol",
                examConvention: "22,400 cm\u00b3/mol",
              },
            ],
            commonMistakes: {
              mistake: "Forgetting to convert time in minutes or hours to seconds",
              wrongExample: "Using t = 30 for an electrolysis running for 30 minutes.",
              correctedExample: "t = 30 min * 60 s/min = 1800 seconds.",
              explanation: "Coulombs are defined as Amperes multiplied by seconds (Q = I * t).",
            },
            workedExamples: [
              {
                context: "Copper Deposition Calculation",
                question: "Calculate the mass of copper deposited at the cathode when a current of 2.5 A is passed through aqueous copper(II) sulphate for 32 minutes and 10 seconds. [Cu=64, F = 96,500 C/mol]",
                stepByStepSolution: [
                  "1. Write cathode half-equation: $\\ce{Cu^{2+}(aq) + 2e- -> Cu(s)}$. Here $n = 2$.",
                  "2. Convert time to seconds: $t = (32 \\times 60) + 10 = 1920 + 10 = 1930\\text{ seconds}$.",
                  "3. Calculate quantity of charge: $Q = I \\times t = 2.5\\text{ A} \\times 1930\\text{ s} = 4825\\text{ C}$.",
                  "4. Apply Faraday formula: $m = \\frac{M \\cdot Q}{n \\cdot F} = \\frac{64 \\times 4825}{2 \\times 96500}$.",
                  "5. Calculate: $m = \\frac{308800}{193000} = 1.60\\text{ g}$.",
                ],
                finalAnswer: "Mass of copper deposited = 1.60 g",
                ruleExplanation: "Strict application of m = (M I t) / (n F) with time in seconds.",
              },
            ],
            checkpoint: {
              id: "chk-chm-ss3-2-1",
              title: "Checkpoint: Electrolysis",
              passPercentage: 80,
              verificationMethod: "Standard Marking Scheme",
              questions: [
                {
                  id: "q_chm_ss3_2_1",
                  prompt: "During the electrolysis of dilute sulphuric acid with platinum electrodes, the gas evolved at the anode is:",
                  options: [
                    {
                      id: "A",
                      text: "Hydrogen",
                    },
                    {
                      id: "B",
                      text: "Oxygen",
                    },
                    {
                      id: "C",
                      text: "Sulphur dioxide",
                    },
                    {
                      id: "D",
                      text: "Nitrogen",
                    },
                  ],
                  correctOptionId: "B",
                  explanation: "OH- ions are preferentially discharged over SO4 2- at the anode: 4OH- -> 2H2O + O2 + 4e-.",
                  topic: "Anode Discharge",
                  weakAreaCode: "WA-CHM-ELC-02",
                },
                {
                  id: "q_chm_ss3_2_2",
                  prompt: "How many Coulombs of charge are required to deposit 1 mole of aluminium from molten Al2O3? [F = 96,500 C/mol]",
                  options: [
                    {
                      id: "A",
                      text: "96,500 C",
                    },
                    {
                      id: "B",
                      text: "193,000 C",
                    },
                    {
                      id: "C",
                      text: "289,500 C",
                    },
                    {
                      id: "D",
                      text: "386,000 C",
                    },
                  ],
                  correctOptionId: "C",
                  explanation: "Al3+ + 3e- -> Al requires 3 Faradays: 3 x 96,500 = 289,500 C.",
                  topic: "Faraday Equivalent",
                  weakAreaCode: "WA-CHM-ELC-03",
                },
                {
                  id: "q_chm_ss3_2_3",
                  prompt: "When aqueous copper(II) sulphate is electrolyzed using copper electrodes (active anode):",
                  options: [
                    {
                      id: "A",
                      text: "Oxygen gas is liberated at the anode",
                    },
                    {
                      id: "B",
                      text: "The copper anode dissolves into Cu2+ ions",
                    },
                    {
                      id: "C",
                      text: "The blue color of the solution fades",
                    },
                    {
                      id: "D",
                      text: "Hydrogen gas is produced at the cathode",
                    },
                  ],
                  correctOptionId: "B",
                  explanation: "With active copper anode, copper atoms dissolve: Cu(s) -> Cu2+(aq) + 2e-.",
                  topic: "Active Electrodes",
                  weakAreaCode: "WA-CHM-ELC-02",
                },
                {
                  id: "q_chm_ss3_2_4",
                  prompt: "A current of 5.0 A flows for 193 seconds through molten NaCl. What mass of sodium is liberated? [Na=23, F=96,500 C/mol]",
                  options: [
                    {
                      id: "A",
                      text: "0.23 g",
                    },
                    {
                      id: "B",
                      text: "2.30 g",
                    },
                    {
                      id: "C",
                      text: "0.46 g",
                    },
                    {
                      id: "D",
                      text: "4.60 g",
                    },
                  ],
                  correctOptionId: "A",
                  explanation: "Q = 5 * 193 = 965 C. Moles of e- = 965 / 96500 = 0.01 mol. Mass = 0.01 * 23 = 0.23 g.",
                  topic: "Faraday Calculation",
                  weakAreaCode: "WA-CHM-ELC-03",
                },
                {
                  id: "q_chm_ss3_2_5",
                  prompt: "What volume of oxygen gas at s.t.p. is liberated by passing 4 Faradays of electricity? [Molar volume = 22.4 dm\u00b3/mol]",
                  options: [
                    {
                      id: "A",
                      text: "11.2 dm\u00b3",
                    },
                    {
                      id: "B",
                      text: "22.4 dm\u00b3",
                    },
                    {
                      id: "C",
                      text: "44.8 dm\u00b3",
                    },
                    {
                      id: "D",
                      text: "5.6 dm\u00b3",
                    },
                  ],
                  correctOptionId: "B",
                  explanation: "4OH- -> 2H2O + O2 + 4e-. 4 Faradays liberate 1 mole of O2 = 22.4 dm\u00b3.",
                  topic: "Gas Volume Electrolysis",
                  weakAreaCode: "WA-CHM-ELC-03",
                },
              ],
            },
            examTip: "Always identify the electrode half-equation first to determine the exact number of electrons (n).",
          },
        ],
      },
    ],
  },
];
