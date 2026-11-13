# -*- coding: utf-8 -*-
"""
Generates src/lib/data/courses/chemistry-exam-prep.ts
Courses 4 and 5
"""

import os
import json

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
COURSES_DIR = os.path.join(ROOT_DIR, "src", "lib", "data", "courses")

def to_ts(val, indent=0):
    sp = " " * indent
    if isinstance(val, dict):
        items = []
        for k, v in val.items():
            key = k if k.isidentifier() else json.dumps(k)
            items.append(f"{sp}  {key}: {to_ts(v, indent + 2)},\n")
        return "{\n" + "".join(items) + f"{sp}}}"
    elif isinstance(val, list):
        if not val:
            return "[]"
        items = [f"{sp}  {to_ts(x, indent + 2)},\n" for x in val]
        return "[\n" + "".join(items) + f"{sp}]"
    elif isinstance(val, str):
        return json.dumps(val)
    elif isinstance(val, bool):
        return "true" if val else "false"
    elif val is None:
        return "null"
    elif isinstance(val, (int, float)):
        return str(val)
    return json.dumps(val)

COURSES = [
    # COURSE 4: WAEC & NECO SSCE
    {
        "id": "crs-chm-waec",
        "slug": "waec-neco-ssce-chemistry-mastery",
        "title": "WAEC and NECO SSCE Chemistry Mastery",
        "subtitle": "Theory Derivations, Quantitative Problem Solving, and Practical Examination Mastery",
        "level": "WAEC & NECO SSCE Prep",
        "examBody": "WAEC / NECO",
        "audience": "Senior secondary candidates sitting for May/June WASSCE or NECO SSCE Chemistry papers.",
        "description": "Targeted exam-mastery course covering high-weight WAEC Paper 2 theory essay structures and Paper 3 practical chemistry volumetric and qualitative analysis.",
        "learningOutcomes": [
            "Structure step-by-step chemical calculation solutions according to WAEC marking schemes",
            "Master volumetric analysis recording, meniscus reading, concordant averaging, and molar concentration calculations",
            "Perform systematic qualitative cation, anion, and gas confirmatory tests with standard exam observations",
            "Apply Faraday's laws to solve industrial electrolytic deposition questions",
            "Construct clear enthalpy profiles and predict equilibrium shifts using Le Chatelier's principle",
            "Formulate organic synthesis equations and identify functional groups with chemical tests",
        ],
        "prerequisites": ["Senior Secondary Chemistry (SS 1 - SS 3)"],
        "tags": ["Chemistry", "WAEC", "NECO", "SSCE", "Volumetric Analysis", "Qualitative Analysis", "Past Questions"],
        "syllabusAlignment": {
            "source": "WAEC Regulations and Syllabuses for Chemistry (2024-2026)",
            "year": "2024",
            "lastAlignedAt": "2026-11-01",
            "needsVerification": True,
        },
        "relatedCourseSlugs": [
            "chemistry-ss3-electrochemistry-rates-equilibrium-organic",
            "volumetric-analysis-practical-chemistry",
            "stoichiometry-mole-concept-bootcamp",
        ],
        "modules": [
            {
                "id": "mod-chm-waec-1",
                "title": "Module 1: WAEC Stoichiometry & Quantitative Mastery",
                "description": "Multi-step stoichiometry calculations, limiting reagents, and percentage purity.",
                "sortOrder": 1,
                "lessons": [
                    {
                        "id": "les-chm-waec-1-1",
                        "slug": "waec-stoichiometric-mole-calculations-and-yields",
                        "title": "WAEC Stoichiometric Calculations: Limiting Reagents and Percentage Yield",
                        "sortOrder": 1,
                        "durationMinutes": 45,
                        "isFreePreview": True,
                        "reviewStatus": "needs_teacher_review",
                        "topicId": "top-chm-stoichiometry",
                        "weakAreaCodes": ["WA-CHM-STO-05"],
                        "summary": "Master multi-step WAEC Paper 2 calculation problems identifying limiting reagents and computing percentage yields.",
                        "objectives": [
                            "Determine limiting reagents from initial masses of reactants",
                            "Calculate theoretical yield and percentage yield of products",
                            "Format mathematical working systematically to earn full method marks",
                        ],
                        "keyPoints": [
                            "The limiting reagent is completely consumed first and dictates the maximum product yield.",
                            "Percentage Yield = (Actual Yield / Theoretical Yield) x 100%.",
                            "State the balanced chemical equation with correct stoichiometric ratios before substituting values.",
                        ],
                        "formulas": [
                            {
                                "name": "Percentage Yield Formula",
                                "expression": "\\text{Percentage Yield} = \\frac{\\text{Actual Experimental Mass}}{\\text{Theoretical Calculated Mass}} \\times 100\\%",
                                "variables": [{"symbol": "Yield", "meaning": "Yield efficiency ratio", "unit": "%"}],
                            },
                        ],
                        "constantsTable": [
                            {"symbol": "RAM", "name": "Relative Atomic Masses", "value": "Ca=40, C=12, O=16, H=1, Cl=35.5", "unit": "u", "examConvention": "WAEC standard data table"},
                        ],
                        "commonMistakes": {
                            "mistake": "Using the excess reagent to calculate product yield",
                            "wrongExample": "Calculating yield from 10 g CaCO3 and excess HCl without checking which is in excess.",
                            "correctedExample": "Identify the limiting reactant first; product yield is determined strictly by the moles of limiting reagent.",
                            "explanation": "Once the limiting reagent is exhausted, no further product can form.",
                        },
                        "workedExamples": [
                            {
                                "context": "Limiting Reagent Calculation",
                                "question": "10.0 g of calcium carbonate is reacted with 7.30 g of hydrochloric acid according to: CaCO3(s) + 2HCl(aq) -> CaCl2(aq) + H2O(l) + CO2(g). Determine (a) the limiting reagent, and (b) the mass of CO2 gas produced at s.t.p. [Ca=40, C=12, O=16, H=1, Cl=35.5]",
                                "stepByStepSolution": [
                                    "1. Calculate molar masses: M(CaCO3) = 40 + 12 + 48 = 100 g/mol; M(HCl) = 1 + 35.5 = 36.5 g/mol.",
                                    "2. Calculate initial moles: n(CaCO3) = 10.0 / 100 = 0.100 mol; n(HCl) = 7.30 / 36.5 = 0.200 mol.",
                                    "3. Examine mole ratio: Balanced equation requires 1 mol CaCO3 to 2 mol HCl.",
                                    "4. 0.100 mol CaCO3 requires 0.100 x 2 = 0.200 mol HCl. Both are present in exact stoichiometric proportion (neither is in excess).",
                                    "5. Moles of CO2 produced = 0.100 mol.",
                                    "6. Mass of CO2 = 0.100 mol x 44.0 g/mol = 4.40 g.",
                                ],
                                "finalAnswer": "Reagents are in exact 1:2 stoichiometric balance; mass of CO2 produced = 4.40 g.",
                                "ruleExplanation": "Exact stoichiometric proportion yields complete consumption of both reactants.",
                            },
                        ],
                        "checkpoint": {
                            "id": "chk-chm-waec-1-1",
                            "title": "Checkpoint: WAEC Stoichiometry",
                            "passPercentage": 80,
                            "verificationMethod": "Standard WAEC Marking Scheme",
                            "questions": [
                                {
                                    "id": "q_chm_waec_1_1",
                                    "prompt": "In the reaction 2H2 + O2 -> 2H2O, if 4.0 g of H2 reacts with 16.0 g of O2, the limiting reagent is: [H=1, O=16]",
                                    "options": [{"id": "A", "text": "H2"}, {"id": "B", "text": "O2"}, {"id": "C", "text": "Neither (exact ratio)"}, {"id": "D", "text": "Water"}],
                                    "correctOptionId": "B",
                                    "explanation": "n(H2) = 4/2 = 2 mol; n(O2) = 16/32 = 0.5 mol. 0.5 mol O2 needs 1 mol H2; H2 is in excess, so O2 is limiting.",
                                    "topic": "Limiting Reagent",
                                    "weakAreaCode": "WA-CHM-STO-05",
                                },
                                {
                                    "id": "q_chm_waec_1_2",
                                    "prompt": "If theoretical yield of aspirin is 5.0 g and 4.0 g is experimentally obtained, the percentage yield is:",
                                    "options": [{"id": "A", "text": "80%"}, {"id": "B", "text": "20%"}, {"id": "C", "text": "125%"}, {"id": "D", "text": "90%"}],
                                    "correctOptionId": "A",
                                    "explanation": "(4.0 / 5.0) * 100% = 80%.",
                                    "topic": "Percentage Yield",
                                    "weakAreaCode": "WA-CHM-STO-05",
                                },
                                {
                                    "id": "q_chm_waec_1_3",
                                    "prompt": "What mass of magnesium oxide is formed when 2.4 g of magnesium burns in excess oxygen? [Mg=24, O=16]",
                                    "options": [{"id": "A", "text": "2.4 g"}, {"id": "B", "text": "4.0 g"}, {"id": "C", "text": "5.6 g"}, {"id": "D", "text": "3.2 g"}],
                                    "correctOptionId": "B",
                                    "explanation": "n(Mg) = 2.4/24 = 0.1 mol. Produces 0.1 mol MgO = 0.1 * 40 = 4.0 g.",
                                    "topic": "Mass-Mass Calculation",
                                    "weakAreaCode": "WA-CHM-STO-05",
                                },
                                {
                                    "id": "q_chm_waec_1_4",
                                    "prompt": "In an industrial synthesis, actual yield is almost always lower than theoretical yield due to:",
                                    "options": [{"id": "A", "text": "Incomplete reaction and purification losses"}, {"id": "B", "text": "Avogadro's constant fluctuation"}, {"id": "C", "text": "Temperature rising to absolute zero"}, {"id": "D", "text": "Conservation of mass violation"}],
                                    "correctOptionId": "A",
                                    "explanation": "Side reactions, mechanical transfer losses, and equilibrium limitations lower practical yields.",
                                    "topic": "Practical Losses",
                                    "weakAreaCode": "WA-CHM-STO-05",
                                },
                                {
                                    "id": "q_chm_waec_1_5",
                                    "prompt": "The volume of CO2 at s.t.p. produced by completely decomposing 10.0 g of CaCO3 is: [CaCO3=100, Vm=22.4 dm³]",
                                    "options": [{"id": "A", "text": "2.24 dm³"}, {"id": "B", "text": "22.4 dm³"}, {"id": "C", "text": "1.12 dm³"}, {"id": "D", "text": "4.48 dm³"}],
                                    "correctOptionId": "A",
                                    "explanation": "0.100 mol CaCO3 -> 0.100 mol CO2 = 0.100 * 22.4 = 2.24 dm³.",
                                    "topic": "Molar Volume Stoichiometry",
                                    "weakAreaCode": "WA-CHM-STO-05",
                                },
                            ],
                        },
                        "examTip": "Always state the formula units (g, mol, dm³) at each calculation step in WAEC Paper 2.",
                    },
                ],
            },
        ],
    },
    # COURSE 5: JAMB UTME
    {
        "id": "crs-chm-jamb",
        "slug": "jamb-utme-chemistry-complete",
        "title": "JAMB UTME Chemistry Complete",
        "subtitle": "Computer-Based Speed Drills, Proportional Reasoning, and High-Yield Question Strategies",
        "level": "JAMB UTME Prep",
        "examBody": "JAMB UTME",
        "audience": "University tertiary matriculation candidates preparing for the computer-based JAMB UTME Chemistry paper.",
        "description": "Intensive question-solving and rapid-elimination bootcamp aligned strictly with the JAMB IBASS chemistry syllabus specification.",
        "learningOutcomes": [
            "Solve multiple-choice chemical calculation questions in under 60 seconds each using rapid proportional reasoning",
            "Deduce electronic configurations and quantum number sets rapidly for transition and representative elements",
            "Predict equilibrium shifts and solubility product (Ksp) precipitation thresholds",
            "Eliminate distractor options using parity, oxidation state balance, and stoichiometric ratio checks",
        ],
        "prerequisites": ["Senior Secondary Chemistry (SS 1 - SS 3)"],
        "tags": ["Chemistry", "JAMB", "UTME", "CBT", "Speed Drills", "Past Questions"],
        "syllabusAlignment": {
            "source": "JAMB Interactive Brochure and Syllabus System (IBASS 2024-2026)",
            "year": "2024",
            "lastAlignedAt": "2026-11-01",
            "needsVerification": True,
        },
        "relatedCourseSlugs": [
            "waec-neco-ssce-chemistry-mastery",
            "stoichiometry-mole-concept-bootcamp",
            "organic-chemistry-made-clear",
        ],
        "modules": [
            {
                "id": "mod-chm-jamb-1",
                "title": "Module 1: Speed Stoichiometry & Molar Rapid Calculations",
                "description": "Rapid mole calculations, gas volume shortcuts, and eliminating distractors in CBT format.",
                "sortOrder": 1,
                "lessons": [
                    {
                        "id": "les-chm-jamb-1-1",
                        "slug": "jamb-rapid-mole-concept-and-gas-volume-shortcuts",
                        "title": "JAMB UTME Rapid Mole Concept and Gas Volume Shortcuts",
                        "sortOrder": 1,
                        "durationMinutes": 40,
                        "isFreePreview": True,
                        "reviewStatus": "needs_teacher_review",
                        "topicId": "top-chm-jamb-speed",
                        "weakAreaCodes": ["WA-CHM-STO-06"],
                        "summary": "Master speed problem-solving techniques for JAMB Chemistry questions involving mole ratios and molar volumes.",
                        "objectives": [
                            "Solve gas volume conversion questions in under 45 seconds using ratio shortcuts",
                            "Eliminate implausible option choices by magnitude estimation",
                        ],
                        "keyPoints": [
                            "At s.t.p., mole ratio equals gas volume ratio directly (Avogadro's Law).",
                            "No need to convert to grams first if calculating volume-to-volume for gases.",
                            "Molar volume at s.t.p. is 22.4 dm³ (22,400 cm³).",
                        ],
                        "formulas": [
                            {
                                "name": "Avogadro Gas Volume Ratio Shortcut",
                                "expression": "\\frac{V_1}{V_2} = \\frac{n_1}{n_2}",
                                "variables": [{"symbol": "V", "meaning": "Gas volume at constant T and P", "unit": "dm³ or cm³"}],
                            },
                        ],
                        "commonMistakes": {
                            "mistake": "Unnecessarily converting gas volumes into grams in multiple-choice questions",
                            "wrongExample": "Converting 50 cm³ CO to grams to find O2 required in 2CO + O2 -> 2CO2.",
                            "correctedExample": "Volume ratio CO : O2 is 2 : 1 directly. 50 cm³ CO requires 25 cm³ O2 in 5 seconds.",
                            "explanation": "Gay-Lussac's law allows direct volume-to-volume calculation for gaseous reactants at identical T and P.",
                        },
                        "workedExamples": [
                            {
                                "context": "Gay-Lussac Speed Solution",
                                "question": "What volume of oxygen at s.t.p. is required for complete combustion of 40 cm³ of methane (CH4)?",
                                "stepByStepSolution": [
                                    "1. Balanced equation: $\\ce{CH4(g) + 2O2(g) -> CO2(g) + 2H2O(g)}$.",
                                    "2. Mole ratio $\\text{CH}_4 : \\text{O}_2 = 1 : 2$.",
                                    "3. By Gay-Lussac's Law, volume ratio is also $1 : 2$.",
                                    "4. Volume of $\\text{O}_2 = 2 \\times 40\\text{ cm}^3 = 80\\text{ cm}^3$.",
                                ],
                                "finalAnswer": "80 cm³ of O2",
                                "ruleExplanation": "Gay-Lussac law of combining volumes enables direct ratio solving without calculating mass.",
                            },
                        ],
                        "checkpoint": {
                            "id": "chk-chm-jamb-1-1",
                            "title": "Checkpoint: JAMB Speed Stoichiometry",
                            "passPercentage": 80,
                            "verificationMethod": "CBT Standard Scoring",
                            "questions": [
                                {
                                    "id": "q_chm_jamb_1_1",
                                    "prompt": "What volume of oxygen is needed to burn 30 cm³ of carbon(II) oxide according to 2CO + O2 -> 2CO2?",
                                    "options": [{"id": "A", "text": "15 cm³"}, {"id": "B", "text": "30 cm³"}, {"id": "C", "text": "60 cm³"}, {"id": "D", "text": "45 cm³"}],
                                    "correctOptionId": "A",
                                    "explanation": "Volume ratio is 2 : 1. 30 / 2 = 15 cm³.",
                                    "topic": "Gay-Lussac Law",
                                    "weakAreaCode": "WA-CHM-STO-06",
                                },
                                {
                                    "id": "q_chm_jamb_1_2",
                                    "prompt": "At s.t.p., 0.25 moles of nitrogen gas occupies what volume?",
                                    "options": [{"id": "A", "text": "5.6 dm³"}, {"id": "B", "text": "11.2 dm³"}, {"id": "C", "text": "22.4 dm³"}, {"id": "D", "text": "44.8 dm³"}],
                                    "correctOptionId": "A",
                                    "explanation": "0.25 * 22.4 = 5.6 dm³.",
                                    "topic": "Molar Volume",
                                    "weakAreaCode": "WA-CHM-STO-06",
                                },
                                {
                                    "id": "q_chm_jamb_1_3",
                                    "prompt": "How many moles of gas are contained in 1120 cm³ at s.t.p.?",
                                    "options": [{"id": "A", "text": "0.05 mol"}, {"id": "B", "text": "0.50 mol"}, {"id": "C", "text": "0.02 mol"}, {"id": "D", "text": "0.10 mol"}],
                                    "correctOptionId": "A",
                                    "explanation": "1120 / 22400 = 0.05 mol.",
                                    "topic": "Gas Moles",
                                    "weakAreaCode": "WA-CHM-STO-06",
                                },
                                {
                                    "id": "q_chm_jamb_1_4",
                                    "prompt": "In the reaction N2(g) + 3H2(g) -> 2NH3(g), total volume contraction when 20 cm³ of N2 reacts completely is:",
                                    "options": [{"id": "A", "text": "20 cm³"}, {"id": "B", "text": "40 cm³"}, {"id": "C", "text": "60 cm³"}, {"id": "D", "text": "80 cm³"}],
                                    "correctOptionId": "B",
                                    "explanation": "Reactants: 20 N2 + 60 H2 = 80 cm³. Product: 40 cm³ NH3. Contraction = 80 - 40 = 40 cm³.",
                                    "topic": "Volume Contraction",
                                    "weakAreaCode": "WA-CHM-STO-06",
                                },
                                {
                                    "id": "q_chm_jamb_1_5",
                                    "prompt": "Which law states that equal volumes of all gases at identical temperature and pressure contain equal numbers of molecules?",
                                    "options": [{"id": "A", "text": "Boyle's law"}, {"id": "B", "text": "Avogadro's law"}, {"id": "C", "text": "Graham's law"}, {"id": "D", "text": "Charles's law"}],
                                    "correctOptionId": "B",
                                    "explanation": "Avogadro's hypothesis directly connects gas volume to molecule count.",
                                    "topic": "Avogadro's Law",
                                    "weakAreaCode": "WA-CHM-STO-06",
                                },
                            ],
                        },
                        "examTip": "In JAMB CBT, check whether the reaction involves only gases; if so, work directly in volume units.",
                    },
                ],
            },
        ],
    },
]

filepath = os.path.join(COURSES_DIR, "chemistry-exam-prep.ts")
header = """/**
 * Trainbow HUB: Chemistry Exam Preparation Curriculum (WAEC & JAMB)
 * Mapped to official examination specifications.
 *
 * All records strictly adhere to the Teacher Review Gate (reviewStatus: "needs_teacher_review").
 */

import { ChemistryCourseData } from "../chemistry-curriculum";

"""
ts_code = f"export const EXAM_PREP_CHEMISTRY_COURSES: ChemistryCourseData[] = {to_ts(COURSES, 0)};\n"
with open(filepath, "w", encoding="utf-8") as f:
    f.write(header + ts_code)
print(f"✓ Wrote chemistry-exam-prep.ts with {len(COURSES)} courses.")
