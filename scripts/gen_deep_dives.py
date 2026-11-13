# -*- coding: utf-8 -*-
"""
Generates src/lib/data/courses/chemistry-deep-dives.ts
Courses 8, 9, 10, 11, 12
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
    # COURSE 8: ORGANIC CHEMISTRY MADE CLEAR
    {
        "id": "crs-chm-organic-clear",
        "slug": "organic-chemistry-made-clear",
        "title": "Organic Chemistry Made Clear",
        "subtitle": "Carbon Tetravalency, IUPAC Nomenclature, Reaction Pathways, and Macromolecules",
        "level": "Senior Secondary (SS 2-3 / WAEC Prep)",
        "examBody": "WAEC / NECO / JAMB",
        "audience": "Secondary students and exam candidates aiming to master organic functional groups, isomerism, and synthesis.",
        "description": "Comprehensive visual guide to organic chemistry covering carbon hybridization, IUPAC rules, alkanes, alkenes, alkynes, benzene, alkanols, alkanoic acids, esters, and polymers.",
        "learningOutcomes": [
            "Draw and name structural isomers of aliphatic hydrocarbons up to eight carbons",
            "Differentiate substitution, addition, elimination, and condensation reactions with equations",
            "Explain tests for unsaturation using bromine water and acidified potassium permanganate",
            "Formulate equations for esterification, saponification, and polymer synthesis",
        ],
        "prerequisites": ["Chemistry SS 1: Matter, Atomic Structure and the Periodic Table"],
        "tags": ["Chemistry", "Organic Chemistry", "Hydrocarbons", "IUPAC", "Isomerism", "Polymers", "WAEC", "JAMB"],
        "syllabusAlignment": {
            "source": "NERDC & WAEC Chemistry Regulations (2024-2026)",
            "year": "2024",
            "lastAlignedAt": "2026-11-01",
            "needsVerification": True,
        },
        "relatedCourseSlugs": [
            "chemistry-ss3-electrochemistry-rates-equilibrium-organic",
            "waec-neco-ssce-chemistry-mastery",
            "equations-formulae-nomenclature-fix-it",
        ],
        "modules": [
            {
                "id": "mod-chm-org-1",
                "title": "Module 1: Hybridization & Carbon Tetravalency",
                "description": "Orbital hybridization (sp3, sp2, sp), sigma and pi bonds, and tetrahedral carbon geometry.",
                "sortOrder": 1,
                "lessons": [
                    {
                        "id": "les-chm-org-1-1",
                        "slug": "carbon-tetravalency-sp3-sp2-sp-hybridization",
                        "title": "Carbon Tetravalency, Hybridization (sp³, sp², sp), and Molecular Geometry",
                        "sortOrder": 1,
                        "durationMinutes": 45,
                        "isFreePreview": True,
                        "reviewStatus": "needs_teacher_review",
                        "topicId": "top-chm-hybridization",
                        "weakAreaCodes": ["WA-CHM-ORG-01"],
                        "summary": "Master carbon's unique ability to form four strong covalent bonds through sp³, sp², and sp orbital hybridization.",
                        "objectives": [
                            "Explain carbon tetravalency by electron promotion from 2s to 2p",
                            "Differentiate sp3 (tetrahedral, 109.5°), sp2 (trigonal planar, 120°), and sp (linear, 180°) hybridization",
                            "Contrast sigma (σ) and pi (π) bonds in multiple carbon-carbon linkages",
                        ],
                        "keyPoints": [
                            "Ground-state carbon has configuration 1s2 2s2 2p2; promotion of one 2s electron yields excited 1s2 2s1 2px1 2py1 2pz1.",
                            "sp³ hybridization: mixing one s and three p orbitals gives 4 equivalent tetrahedral orbitals with bond angle 109.5° (e.g. methane, ethane).",
                            "sp² hybridization: mixing one s and two p orbitals gives 3 coplanar orbitals (120°) and leaves one unhybridized p-orbital forming a pi (π) bond (e.g. ethene).",
                            "sp hybridization: mixing one s and one p orbital gives 2 linear orbitals (180°) and two unhybridized p-orbitals forming two pi bonds (e.g. ethyne).",
                            "Sigma bonds result from end-to-end orbital overlap; pi bonds result from sideways overlap of parallel unhybridized p-orbitals.",
                        ],
                        "commonMistakes": {
                            "mistake": "Drawing pentavalent carbon atoms in organic structures",
                            "wrongExample": "Drawing a carbon with five single bonds in branched alkanes.",
                            "correctedExample": "Carbon strictly forms four covalent bonds (an octet of valence electrons) in all stable neutral organic molecules.",
                            "explanation": "Second-row elements lack d-orbitals to expand their valence shell beyond 8 electrons.",
                        },
                        "workedExamples": [
                            {
                                "context": "Sigma and Pi Bond Count",
                                "question": "Determine the number of sigma (σ) and pi (π) bonds in a molecule of ethyne (C2H2, H-C≡C-H).",
                                "stepByStepSolution": [
                                    "1. Draw Lewis structure: $\\text{H}-\\text{C}\\equiv\\text{C}-\\text{H}$.",
                                    "2. Count $\\text{C}-\\text{H}$ bonds: Two single covalent bonds, each is $1\\sigma$ bond $\\rightarrow 2\\sigma$ bonds.",
                                    "3. Analyze triple bond $\\text{C}\\equiv\\text{C}$: A triple bond consists of $1\\sigma$ bond and $2\\pi$ bonds.",
                                    "4. Total sigma bonds = $2 + 1 = 3\\sigma$ bonds.",
                                    "5. Total pi bonds = $2\\pi$ bonds.",
                                ],
                                "finalAnswer": "3 sigma (σ) bonds and 2 pi (π) bonds.",
                                "ruleExplanation": "Every single bond is σ; a double bond is 1σ + 1π; a triple bond is 1σ + 2π.",
                            },
                        ],
                        "checkpoint": {
                            "id": "chk-chm-org-1-1",
                            "title": "Checkpoint: Hybridization",
                            "passPercentage": 80,
                            "verificationMethod": "Standard Marking Scheme",
                            "questions": [
                                {
                                    "id": "q_chm_org_1_1",
                                    "prompt": "The hybridization of the carbon atoms in ethene (C2H4) is:",
                                    "options": [{"id": "A", "text": "sp³"}, {"id": "B", "text": "sp²"}, {"id": "C", "text": "sp"}, {"id": "D", "text": "dsp²"}],
                                    "correctOptionId": "B",
                                    "explanation": "Double-bonded carbon in ethene adopts sp² trigonal planar geometry (120°).",
                                    "topic": "Hybridization",
                                    "weakAreaCode": "WA-CHM-ORG-01",
                                },
                                {
                                    "id": "q_chm_org_1_2",
                                    "prompt": "What is the H-C-H bond angle in methane (CH4)?",
                                    "options": [{"id": "A", "text": "90°"}, {"id": "B", "text": "109.5°"}, {"id": "C", "text": "120°"}, {"id": "D", "text": "180°"}],
                                    "correctOptionId": "B",
                                    "explanation": "Methane has regular tetrahedral geometry with 109.5° angles.",
                                    "topic": "Bond Angles",
                                    "weakAreaCode": "WA-CHM-ORG-01",
                                },
                                {
                                    "id": "q_chm_org_1_3",
                                    "prompt": "How many pi (π) bonds are present in a molecule of ethyne (H-C≡C-H)?",
                                    "options": [{"id": "A", "text": "1"}, {"id": "B", "text": "2"}, {"id": "C", "text": "3"}, {"id": "D", "text": "0"}],
                                    "correctOptionId": "B",
                                    "explanation": "A triple bond contains 1 sigma and 2 pi bonds.",
                                    "topic": "Pi Bonds",
                                    "weakAreaCode": "WA-CHM-ORG-01",
                                },
                                {
                                    "id": "q_chm_org_1_4",
                                    "prompt": "Carbon is tetravalent primarily because:",
                                    "options": [{"id": "A", "text": "It has 4 inner core electrons"}, {"id": "B", "text": "One 2s electron is promoted to 2p yielding 4 unpaired electrons"}, {"id": "C", "text": "It is an alkali metal"}, {"id": "D", "text": "It forms ionic bonds with halogens"}],
                                    "correctOptionId": "B",
                                    "explanation": "Promotion from 2s to 2p provides four half-filled orbitals for bonding.",
                                    "topic": "Tetravalency",
                                    "weakAreaCode": "WA-CHM-ORG-01",
                                },
                                {
                                    "id": "q_chm_org_1_5",
                                    "prompt": "A carbon-carbon double bond (C=C) is stronger than a single bond (C-C) but chemically more reactive because:",
                                    "options": [{"id": "A", "text": "Sigma bonds are weaker than pi bonds"}, {"id": "B", "text": "The pi bond has sideways electron density exposed to electrophilic attack"}, {"id": "C", "text": "Double bonds have longer bond length"}, {"id": "D", "text": "Double bonds are ionic"}],
                                    "correctOptionId": "B",
                                    "explanation": "Sideways overlap in pi bonds makes pi electrons readily accessible to electrophilic reagents.",
                                    "topic": "C=C Reactivity",
                                    "weakAreaCode": "WA-CHM-ORG-02",
                                },
                            ],
                        },
                        "examTip": "When asked for the geometry around double-bonded carbon atoms, state 'trigonal planar with bond angle approximately 120°'.",
                    },
                ],
            },
        ],
    },
    # COURSE 9: INORGANIC CHEMISTRY
    {
        "id": "crs-chm-inorganic",
        "slug": "inorganic-chemistry-periodic-trends-metals-nonmetals",
        "title": "Inorganic Chemistry: Periodic Trends, Metals, Non-metals and Compounds",
        "subtitle": "Transition Metal Chemistry, Industrial Extraction of Iron and Aluminium, and Non-Metal Synthesis",
        "level": "Senior Secondary (SS 1-3)",
        "examBody": "WAEC / NECO / JAMB",
        "audience": "Secondary science students requiring deep grounding in descriptive inorganic chemistry.",
        "description": "Covers alkali/alkaline earth metals, transition metal complexation, blast furnace metallurgy of iron, Hall-Héroult aluminium extraction, Haber ammonia synthesis, and halogen chemistry.",
        "learningOutcomes": [
            "Explain characteristic properties of transition metals (variable oxidation, colored ions, complexation, catalysis)",
            "Formulate balanced chemical equations for blast furnace extraction of iron and limestone flux action",
            "Explain electrolytic extraction of aluminium from bauxite and state the energy-saving role of cryolite",
            "Detail the Haber process for ammonia and Contact process for sulphuric acid with equilibrium trade-offs",
        ],
        "prerequisites": ["Chemistry SS 1: Matter, Atomic Structure and the Periodic Table"],
        "tags": ["Chemistry", "Inorganic", "Metals", "Extraction", "Blast Furnace", "Aluminium", "Haber Process", "WAEC"],
        "syllabusAlignment": {
            "source": "NERDC & WAEC Chemistry Regulations (2024-2026)",
            "year": "2024",
            "lastAlignedAt": "2026-11-01",
            "needsVerification": True,
        },
        "relatedCourseSlugs": [
            "chemistry-ss1-matter-atomic-structure-periodic-table",
            "chemistry-ss3-electrochemistry-rates-equilibrium-organic",
            "equations-formulae-nomenclature-fix-it",
        ],
        "modules": [
            {
                "id": "mod-chm-ino-1",
                "title": "Module 1: Group 1 & Group 2 Metals",
                "description": "Alkali and alkaline earth metal periodic trends, reactivity with water, and flame test identification.",
                "sortOrder": 1,
                "lessons": [
                    {
                        "id": "les-chm-ino-1-1",
                        "slug": "alkali-and-alkaline-earth-metals-trends",
                        "title": "Alkali and Alkaline Earth Metals: Periodic Trends and Flame Tests",
                        "sortOrder": 1,
                        "durationMinutes": 40,
                        "isFreePreview": True,
                        "reviewStatus": "needs_teacher_review",
                        "topicId": "top-chm-metals-s-block",
                        "weakAreaCodes": ["WA-CHM-ATM-03"],
                        "summary": "Compare Group 1 (alkali) and Group 2 (alkaline earth) metals, their water reactivity, and characteristic flame test colors.",
                        "objectives": [
                            "Explain why alkali metals are stored under paraffin oil",
                            "Compare reactivity of Na, K, Mg, and Ca with cold water and steam",
                            "Identify metal cations using platinum wire flame test emissions",
                        ],
                        "keyPoints": [
                            "Group 1 metals have single valence electron (ns1) with low first ionization energy; stored under paraffin to prevent reaction with atmospheric moisture and oxygen.",
                            "Water reactivity increases down Group 1: K reacts violently with lilac flame; Na melts into a silvery ball with yellow flame.",
                            "Flame test colors: Sodium = Persistent golden yellow; Potassium = Lilac; Calcium = Brick red; Copper = Blue-green; Barium = Apple green.",
                        ],
                        "formulas": [
                            {
                                "name": "Alkali Metal Reaction with Water",
                                "expression": "\\ce{2Na(s) + 2H2O(l) -> 2NaOH(aq) + H2(g)}",
                                "variables": [{"symbol": "H2(g)", "meaning": "Flammable hydrogen gas", "unit": "Gas"}],
                            },
                        ],
                        "commonMistakes": {
                            "mistake": "Using contaminated wire in flame tests",
                            "wrongExample": "Using the same nichrome wire without cleaning in concentrated HCl.",
                            "correctedExample": "Dip wire in concentrated HCl and heat until no flame color shows before testing unknown salt.",
                            "explanation": "Traces of ubiquitous sodium impart an intense yellow flame that masks other metal emissions.",
                        },
                        "workedExamples": [
                            {
                                "context": "Metal Reactivity Comparison",
                                "question": "Write balanced chemical equations for the reaction of (a) Sodium with cold water, and (b) Magnesium with steam.",
                                "stepByStepSolution": [
                                    "1. Sodium with cold water: $\\ce{2Na(s) + 2H2O(l) -> 2NaOH(aq) + H2(g)}$. Yields alkaline sodium hydroxide solution and hydrogen.",
                                    "2. Magnesium with steam: $\\ce{Mg(s) + H2O(g) -> MgO(s) + H2(g)}$. Yields solid white magnesium oxide powder and hydrogen gas.",
                                    "3. Note difference: Cold water yields the metal hydroxide; hot steam yields the metal oxide.",
                                ],
                                "finalAnswer": "(a) 2Na + 2H2O -> 2NaOH + H2; (b) Mg + H2O(g) -> MgO + H2",
                                "ruleExplanation": "Steam oxidizes magnesium to solid oxide; cold water reacts slowly to form hydroxide.",
                            },
                        ],
                        "checkpoint": {
                            "id": "chk-chm-ino-1-1",
                            "title": "Checkpoint: s-Block Metals",
                            "passPercentage": 80,
                            "verificationMethod": "Standard Marking Scheme",
                            "questions": [
                                {
                                    "id": "q_chm_ino_1_1",
                                    "prompt": "Alkali metals are stored under liquid paraffin because they:",
                                    "options": [{"id": "A", "text": "Are radioactive"}, {"id": "B", "text": "React vigorously with moisture and oxygen in air"}, {"id": "C", "text": "Sublimate at room temperature"}, {"id": "D", "text": "Are soluble in oil"}],
                                    "correctOptionId": "B",
                                    "explanation": "Group 1 metals rapidly oxidize and react with air moisture; paraffin excludes air.",
                                    "topic": "Alkali Metal Storage",
                                    "weakAreaCode": "WA-CHM-ATM-03",
                                },
                                {
                                    "id": "q_chm_ino_1_2",
                                    "prompt": "What characteristic flame color is produced by potassium salts?",
                                    "options": [{"id": "A", "text": "Golden yellow"}, {"id": "B", "text": "Lilac"}, {"id": "C", "text": "Brick red"}, {"id": "D", "text": "Apple green"}],
                                    "correctOptionId": "B",
                                    "explanation": "Potassium produces a characteristic lilac flame.",
                                    "topic": "Flame Tests",
                                    "weakAreaCode": "WA-CHM-ATM-03",
                                },
                                {
                                    "id": "q_chm_ino_1_3",
                                    "prompt": "The product formed when magnesium ribbon burns vigorously in steam is:",
                                    "options": [{"id": "A", "text": "Mg(OH)2"}, {"id": "B", "text": "MgO"}, {"id": "C", "text": "MgH2"}, {"id": "D", "text": "MgCO3"}],
                                    "correctOptionId": "B",
                                    "explanation": "Mg + H2O(steam) -> MgO + H2.",
                                    "topic": "Reaction with Steam",
                                    "weakAreaCode": "WA-CHM-ATM-03",
                                },
                                {
                                    "id": "q_chm_ino_1_4",
                                    "prompt": "Which of the following metals exhibits the highest electropositivity and chemical reactivity?",
                                    "options": [{"id": "A", "text": "Lithium"}, {"id": "B", "text": "Sodium"}, {"id": "C", "text": "Potassium"}, {"id": "D", "text": "Magnesium"}],
                                    "correctOptionId": "C",
                                    "explanation": "Reactivity increases down Group 1; Potassium has the lowest ionization energy of the group.",
                                    "topic": "Reactivity Trends",
                                    "weakAreaCode": "WA-CHM-ATM-03",
                                },
                                {
                                    "id": "q_chm_ino_1_5",
                                    "prompt": "Before performing a flame test, the wire should be cleaned with concentrated:",
                                    "options": [{"id": "A", "text": "Sulphuric acid"}, {"id": "B", "text": "Hydrochloric acid"}, {"id": "C", "text": "Nitric acid"}, {"id": "D", "text": "Acetic acid"}],
                                    "correctOptionId": "B",
                                    "explanation": "HCl converts metal impurities into volatile chlorides that burn off cleanly.",
                                    "topic": "Flame Test Procedure",
                                    "weakAreaCode": "WA-CHM-ATM-03",
                                },
                            ],
                        },
                        "examTip": "In WAEC practical questions, distinguish clearly between calcium (brick red) and potassium (lilac) flame emissions.",
                        "safetyNote": "Safety first: Alkali metals react violently with water, generating flammable hydrogen that can ignite. Use only small rice-grain sized pieces behind a safety screen.",
                    },
                ],
            },
        ],
    },
    # COURSE 10: ACIDS, BASES, SALTS AND PH
    {
        "id": "crs-chm-acids-salts-ph",
        "slug": "acids-bases-salts-ph",
        "title": "Acids, Bases, Salts and pH",
        "subtitle": "Theories of Acidity, Weak Electrolyte Ionization, Logarithmic pH/pOH, and Buffer Action",
        "level": "Senior Secondary (SS 1-3)",
        "examBody": "WAEC / NECO / JAMB",
        "audience": "Students seeking rigorous conceptual mastery of aqueous ionic equilibria, pH scales, and salt hydrolysis.",
        "description": "Comprehensive dive into Arrhenius, Brønsted-Lowry, and Lewis acid-base models, weak acid dissociation constants, logarithmic pH/pOH calculations, and buffer mechanisms.",
        "learningOutcomes": [
            "Evaluate acid-base reactions according to Arrhenius, Brønsted-Lowry, and Lewis frameworks",
            "Calculate [H+], [OH-], pH, and pOH for strong and weak monoprotic/diprotic systems",
            "Explain buffer solutions and how they resist pH changes upon addition of small amounts of acid or base",
            "Predict whether salt solutions will be acidic, basic, or neutral based on salt hydrolysis",
        ],
        "prerequisites": ["Chemistry SS 1: Matter, Atomic Structure and the Periodic Table"],
        "tags": ["Chemistry", "Acids", "Bases", "pH", "pOH", "Salts", "Hydrolysis", "Buffers", "WAEC", "JAMB"],
        "syllabusAlignment": {
            "source": "NERDC & WAEC Chemistry Regulations (2024-2026)",
            "year": "2024",
            "lastAlignedAt": "2026-11-01",
            "needsVerification": True,
        },
        "relatedCourseSlugs": [
            "chemistry-ss2-bonding-stoichiometry-acids-bases-salts",
            "volumetric-analysis-practical-chemistry",
            "waec-neco-ssce-chemistry-mastery",
        ],
        "modules": [
            {
                "id": "mod-chm-ac-1",
                "title": "Module 1: Arrhenius, Brønsted-Lowry & Lewis Acid-Base Theories",
                "description": "Comparing the three major historical models of acids and bases with conjugate pairs.",
                "sortOrder": 1,
                "lessons": [
                    {
                        "id": "les-chm-ac-1-1",
                        "slug": "acid-base-theories-arrhenius-bronsted-lewis",
                        "title": "Acid-Base Theories: Arrhenius, Brønsted-Lowry, and Lewis Models",
                        "sortOrder": 1,
                        "durationMinutes": 45,
                        "isFreePreview": True,
                        "reviewStatus": "needs_teacher_review",
                        "topicId": "top-chm-acid-base-theories",
                        "weakAreaCodes": ["WA-CHM-INO-01"],
                        "summary": "Master the evolution of acid-base concepts: proton transfer, conjugate acid-base pairs, and Lewis electron-pair donation.",
                        "objectives": [
                            "Compare Arrhenius, Brønsted-Lowry, and Lewis definitions",
                            "Identify conjugate acid-base pairs in reversible equilibrium equations",
                            "Classify Lewis acids (electron pair acceptors) and Lewis bases (electron pair donors)",
                        ],
                        "keyPoints": [
                            "Arrhenius: Acid produces H+ in water; Base produces OH- in water.",
                            "Brønsted-Lowry: Acid is a proton (H+) donor; Base is a proton acceptor.",
                            "Conjugate acid-base pairs differ by exactly one proton: $\\ce{NH3 + H2O <=> NH4+ + OH-}$.",
                            "Lewis theory: Acid is an electron pair acceptor (e.g. BF3, AlCl3, H+); Base is an electron pair donor (e.g. :NH3, H2O:).",
                        ],
                        "formulas": [
                            {
                                "name": "Brønsted Conjugate Relationship",
                                "expression": "\\ce{Acid + Base <=> Conjugate\\ Base + Conjugate\\ Acid}",
                                "variables": [{"symbol": "H+", "meaning": "Transferred proton", "unit": "mol"}],
                            },
                        ],
                        "commonMistakes": {
                            "mistake": "Thinking Lewis acids must contain hydrogen atoms",
                            "wrongExample": "BF3 cannot be an acid because it has no hydrogen atom to donate.",
                            "correctedExample": "BF3 is a powerful Lewis acid because Boron has an incomplete sextet and accepts an electron pair from a Lewis base.",
                            "explanation": "Lewis acidity is defined by electron pair acceptance, not proton donation.",
                        },
                        "workedExamples": [
                            {
                                "context": "Conjugate Pair Identification",
                                "question": "In the reaction $\\ce{CH3COOH + H2O <=> CH3COO- + H3O+}$, identify the conjugate acid-base pairs.",
                                "stepByStepSolution": [
                                    "1. Examine CH3COOH: Donates a proton to become CH3COO-. CH3COOH is the acid; CH3COO- is its conjugate base.",
                                    "2. Examine H2O: Accepts a proton to become H3O+. H2O is the base; H3O+ is its conjugate acid.",
                                    "3. Pair 1: CH3COOH / CH3COO-.",
                                    "4. Pair 2: H3O+ / H2O.",
                                ],
                                "finalAnswer": "Conjugate pairs: (CH3COOH, CH3COO-) and (H3O+, H2O)",
                                "ruleExplanation": "A conjugate base is formed when an acid loses one proton; a conjugate acid is formed when a base gains one proton.",
                            },
                        ],
                        "checkpoint": {
                            "id": "chk-chm-ac-1-1",
                            "title": "Checkpoint: Acid-Base Theories",
                            "passPercentage": 80,
                            "verificationMethod": "Standard Marking Scheme",
                            "questions": [
                                {
                                    "id": "q_chm_ac_1_1",
                                    "prompt": "According to the Lewis theory, which of the following is a Lewis acid?",
                                    "options": [{"id": "A", "text": "NH3"}, {"id": "B", "text": "BF3"}, {"id": "C", "text": "H2O"}, {"id": "D", "text": "OH-"}],
                                    "correctOptionId": "B",
                                    "explanation": "BF3 has an empty orbital on Boron that accepts an electron pair.",
                                    "topic": "Lewis Acids",
                                    "weakAreaCode": "WA-CHM-INO-01",
                                },
                                {
                                    "id": "q_chm_ac_1_2",
                                    "prompt": "What is the conjugate base of the hydrogencarbonate ion (HCO3-)?",
                                    "options": [{"id": "A", "text": "H2CO3"}, {"id": "B", "text": "CO3 2-"}, {"id": "C", "text": "CO2"}, {"id": "D", "text": "OH-"}],
                                    "correctOptionId": "B",
                                    "explanation": "Removing one proton from HCO3- yields CO3 2-.",
                                    "topic": "Conjugate Bases",
                                    "weakAreaCode": "WA-CHM-INO-01",
                                },
                                {
                                    "id": "q_chm_ac_1_3",
                                    "prompt": "A substance that can act as both a Brønsted acid and a Brønsted base is termed:",
                                    "options": [{"id": "A", "text": "Amphiprotic"}, {"id": "B", "text": "Aprotic"}, {"id": "C", "text": "Neutral"}, {"id": "D", "text": "Polybasic"}],
                                    "correctOptionId": "A",
                                    "explanation": "Water is amphiprotic because it can donate or accept a proton.",
                                    "topic": "Amphiprotic Substances",
                                    "weakAreaCode": "WA-CHM-INO-01",
                                },
                                {
                                    "id": "q_chm_ac_1_4",
                                    "prompt": "The conjugate acid of ammonia (NH3) is:",
                                    "options": [{"id": "A", "text": "NH2-"}, {"id": "B", "text": "NH4+"}, {"id": "C", "text": "N2"}, {"id": "D", "text": "NH2OH"}],
                                    "correctOptionId": "B",
                                    "explanation": "Adding a proton to NH3 produces the ammonium ion, NH4+.",
                                    "topic": "Conjugate Acids",
                                    "weakAreaCode": "WA-CHM-INO-01",
                                },
                                {
                                    "id": "q_chm_ac_1_5",
                                    "prompt": "Which acid-base model does NOT require an aqueous solvent?",
                                    "options": [{"id": "A", "text": "Arrhenius model"}, {"id": "B", "text": "Lewis model"}, {"id": "C", "text": "Both Arrhenius and Lewis"}, {"id": "D", "text": "None"}],
                                    "correctOptionId": "B",
                                    "explanation": "Lewis theory operates in gas phase or non-aqueous media without solvent dependency.",
                                    "topic": "Theory Comparison",
                                    "weakAreaCode": "WA-CHM-INO-01",
                                },
                            ],
                        },
                        "examTip": "Always verify that conjugate acid-base pairs differ by exactly one H+ and one unit of charge.",
                    },
                ],
            },
        ],
    },
    # COURSE 11: ELECTROCHEMISTRY AND REDOX
    {
        "id": "crs-chm-electrochem-redox",
        "slug": "electrochemistry-redox-deep-dive",
        "title": "Electrochemistry and Redox",
        "subtitle": "Electrode Potentials, Galvanic Cells, Selective Electrolysis, and Quantitative Faraday Laws",
        "level": "Senior Secondary (SS 2-3)",
        "examBody": "WAEC / NECO / JAMB",
        "audience": "Senior students requiring advanced problem-solving mastery in galvanic cell potentials and industrial electrolysis.",
        "description": "Deep-dive course covering oxidation numbers, half-equation balancing, galvanic vs electrolytic cells, standard electrode potentials (E°), and quantitative Faraday calculations.",
        "learningOutcomes": [
            "Assign oxidation numbers and balance complex half-equations in acidic and basic solutions",
            "Calculate standard cell electromotive force ($E^\\circ_{\\text{cell}}$) and predict reaction spontaneity",
            "Determine products of selective electrolytic discharge for molten and aqueous electrolytes",
            "Perform quantitative Faraday electrolysis calculations for mass, volume, and coulombs",
        ],
        "prerequisites": ["Chemistry SS 2: Bonding, Stoichiometry, Acids, Bases and Salts"],
        "tags": ["Chemistry", "Electrochemistry", "Redox", "Galvanic Cells", "Faraday Laws", "Electrolysis", "WAEC", "JAMB"],
        "syllabusAlignment": {
            "source": "NERDC & WAEC Chemistry Regulations (2024-2026)",
            "year": "2024",
            "lastAlignedAt": "2026-11-01",
            "needsVerification": True,
        },
        "relatedCourseSlugs": [
            "chemistry-ss3-electrochemistry-rates-equilibrium-organic",
            "waec-neco-ssce-chemistry-mastery",
            "equations-formulae-nomenclature-fix-it",
        ],
        "modules": [
            {
                "id": "mod-chm-el-1",
                "title": "Module 1: Oxidation Numbers & Rules of Assignment",
                "description": "Rules for oxidation states, redox identification, and tracking electron transfers.",
                "sortOrder": 1,
                "lessons": [
                    {
                        "id": "les-chm-el-1-1",
                        "slug": "systematic-oxidation-number-rules-and-tracking",
                        "title": "Systematic Oxidation Number Rules and Electron Transfer Tracking",
                        "sortOrder": 1,
                        "durationMinutes": 45,
                        "isFreePreview": True,
                        "reviewStatus": "needs_teacher_review",
                        "topicId": "top-chm-oxidation-rules",
                        "weakAreaCodes": ["WA-CHM-ELC-01"],
                        "summary": "Master oxidation number calculation rules to identify oxidizing and reducing agents in chemical reactions.",
                        "objectives": [
                            "Apply IUPAC rules to assign oxidation numbers to elements in neutral molecules and polyatomic ions",
                            "Deduce whether a reaction is a redox process from oxidation state changes",
                        ],
                        "keyPoints": [
                            "Free uncombined elements always have oxidation number = 0 (e.g. Na, O2, P4, S8).",
                            "Group 1 metals are always +1; Group 2 metals are always +2; Fluorine is always -1.",
                            "Oxygen is -2 in most compounds (except peroxides where it is -1, and OF2 where it is +2).",
                            "Hydrogen is +1 with non-metals and -1 in metal hydrides (e.g. NaH).",
                            "Sum of oxidation numbers in a neutral compound = 0; in a polyatomic ion, it equals the overall charge.",
                        ],
                        "formulas": [
                            {
                                "name": "Oxidation Number Invariant",
                                "expression": "\\sum \\text{O.N.} = \\text{Charge of species}",
                                "variables": [{"symbol": "O.N.", "meaning": "Oxidation number of atom", "unit": "Integer"}],
                            },
                        ],
                        "commonMistakes": {
                            "mistake": "Assuming hydrogen is always +1",
                            "wrongExample": "Hydrogen in sodium hydride (NaH) has oxidation state +1.",
                            "correctedExample": "In metal hydrides like NaH and CaH2, hydrogen has oxidation state -1.",
                            "explanation": "Sodium is more electropositive than hydrogen (+1), forcing hydrogen to be the hydride anion (-1).",
                        },
                        "workedExamples": [
                            {
                                "context": "Chromium Oxidation Number",
                                "question": "Determine the oxidation state of chromium in the dichromate ion, Cr2O7 2-.",
                                "stepByStepSolution": [
                                    "1. Let oxidation number of Cr = x.",
                                    "2. Oxygen has oxidation state -2.",
                                    "3. Total charge of ion is -2.",
                                    "4. Set up equation: 2(x) + 7(-2) = -2.",
                                    "5. 2x - 14 = -2 => 2x = 12 => x = +6.",
                                ],
                                "finalAnswer": "Oxidation state of Cr = +6",
                                "ruleExplanation": "Dichromate is heptaoxodichromate(VI).",
                            },
                        ],
                        "checkpoint": {
                            "id": "chk-chm-el-1-1",
                            "title": "Checkpoint: Oxidation Numbers",
                            "passPercentage": 80,
                            "verificationMethod": "Standard Marking Scheme",
                            "questions": [
                                {
                                    "id": "q_chm_el_1_1",
                                    "prompt": "What is the oxidation number of sulphur in sodium thiosulphate, Na2S2O3?",
                                    "options": [{"id": "A", "text": "+2"}, {"id": "B", "text": "+4"}, {"id": "C", "text": "+6"}, {"id": "D", "text": "-2"}],
                                    "correctOptionId": "A",
                                    "explanation": "2(+1) + 2x + 3(-2) = 0 => 2 + 2x - 6 = 0 => 2x = 4 => x = +2.",
                                    "topic": "Oxidation Number",
                                    "weakAreaCode": "WA-CHM-ELC-01",
                                },
                                {
                                    "id": "q_chm_el_1_2",
                                    "prompt": "The oxidation number of oxygen in hydrogen peroxide (H2O2) is:",
                                    "options": [{"id": "A", "text": "-2"}, {"id": "B", "text": "-1"}, {"id": "C", "text": "0"}, {"id": "D", "text": "+1"}],
                                    "correctOptionId": "B",
                                    "explanation": "In peroxides, oxygen carries a -1 oxidation state.",
                                    "topic": "Peroxides",
                                    "weakAreaCode": "WA-CHM-ELC-01",
                                },
                                {
                                    "id": "q_chm_el_1_3",
                                    "prompt": "Which of the following is NOT a redox reaction?",
                                    "options": [{"id": "A", "text": "Zn + 2HCl -> ZnCl2 + H2"}, {"id": "B", "text": "AgNO3 + NaCl -> AgCl + NaNO3"}, {"id": "C", "text": "2Mg + O2 -> 2MgO"}, {"id": "D", "text": "Cl2 + 2KI -> 2KCl + I2"}],
                                    "correctOptionId": "B",
                                    "explanation": "Precipitation involves no change in oxidation states: Ag(+1), N(+5), O(-2), Na(+1), Cl(-1).",
                                    "topic": "Redox Recognition",
                                    "weakAreaCode": "WA-CHM-ELC-01",
                                },
                                {
                                    "id": "q_chm_el_1_4",
                                    "prompt": "In the reaction Cl2 + 2NaOH -> NaCl + NaClO + H2O, chlorine undergoes:",
                                    "options": [{"id": "A", "text": "Oxidation only"}, {"id": "B", "text": "Reduction only"}, {"id": "C", "text": "Disproportionation (both oxidation and reduction)"}, {"id": "D", "text": "Neither"}],
                                    "correctOptionId": "C",
                                    "explanation": "Chlorine (0) is reduced to Cl- (-1) in NaCl and oxidized to ClO- (+1) in NaClO.",
                                    "topic": "Disproportionation",
                                    "weakAreaCode": "WA-CHM-ELC-01",
                                },
                                {
                                    "id": "q_chm_el_1_5",
                                    "prompt": "The oxidation number of chlorine in potassium chlorate, KClO3, is:",
                                    "options": [{"id": "A", "text": "-1"}, {"id": "B", "text": "+1"}, {"id": "C", "text": "+3"}, {"id": "D", "text": "+5"}],
                                    "correctOptionId": "D",
                                    "explanation": "+1 + x + 3(-2) = 0 => x - 5 = 0 => x = +5.",
                                    "topic": "Chlorate Oxidation State",
                                    "weakAreaCode": "WA-CHM-ELC-01",
                                },
                            ],
                        },
                        "examTip": "Always verify that sum of oxidation states in neutral compounds is zero.",
                    },
                ],
            },
        ],
    },
    # COURSE 12: EQUATIONS, FORMULAE AND NOMENCLATURE FIX-IT
    {
        "id": "crs-chm-equations-fixit",
        "slug": "equations-formulae-nomenclature-fix-it",
        "title": "Equations, Formulae and Nomenclature Fix-It",
        "subtitle": "Cross-Level Mastery in Balancing Equations, Polyatomic Radicals, and IUPAC Naming",
        "level": "Cross-Level Skills (SS 1-3 / WAEC / JAMB)",
        "examBody": "WAEC / NECO / JAMB",
        "audience": "Students at any level struggling with formula writing, equation balancing, or net ionic equations.",
        "description": "Essential remedial skills clinic designed to cure common formula writing errors, subscript modification blunders, and spectator ion confusion.",
        "learningOutcomes": [
            "Write chemical formulas for any ionic or binary covalent compound without valency errors",
            "Balance complex chemical equations using systematic atom counting without changing formula subscripts",
            "Convert full molecular equations into net ionic equations by cancelling spectator ions",
            "Apply modern IUPAC nomenclature accurately to inorganic salts and organic molecules",
        ],
        "prerequisites": ["Basic secondary school science"],
        "tags": ["Chemistry", "Balancing Equations", "Chemical Formulas", "IUPAC Nomenclature", "Ionic Equations", "Skills Clinic"],
        "syllabusAlignment": {
            "source": "NERDC Senior Secondary Curriculum (Cross-Cutting Chemistry Standards)",
            "year": "2024",
            "lastAlignedAt": "2026-11-01",
            "needsVerification": True,
        },
        "relatedCourseSlugs": [
            "chemistry-ss1-matter-atomic-structure-periodic-table",
            "stoichiometry-mole-concept-bootcamp",
            "waec-neco-ssce-chemistry-mastery",
        ],
        "modules": [
            {
                "id": "mod-chm-eqfix-1",
                "title": "Module 1: Chemical Symbols, Valencies & Radical Formulas",
                "description": "Fixing common mistakes in chemical symbols, elemental valencies, and radical charges.",
                "sortOrder": 1,
                "lessons": [
                    {
                        "id": "les-chm-eqfix-1-1",
                        "slug": "valencies-and-polyatomic-radicals-memorization-fix",
                        "title": "Valencies, Polyatomic Radicals, and Formula Construction Fix-It",
                        "sortOrder": 1,
                        "durationMinutes": 40,
                        "isFreePreview": True,
                        "reviewStatus": "needs_teacher_review",
                        "topicId": "top-chm-formula-fix",
                        "weakAreaCodes": ["WA-CHM-STO-01", "WA-CHM-STO-02"],
                        "summary": "Master elemental valencies, polyatomic radicals, and eliminate common subscript modification errors when balancing.",
                        "objectives": [
                            "Identify common elemental valencies and radical charges without hesitation",
                            "Construct chemical formulas using criss-cross rules and correct parentheses",
                            "Balance chemical equations by adjusting coefficients only",
                        ],
                        "keyPoints": [
                            "Never change subscripts inside a chemical formula to balance an equation; only adjust stoichiometric coefficients in front.",
                            "Radicals must be enclosed in parentheses when multiplying: $\\ce{Ca(OH)2}$, $\\ce{(NH4)2SO4}$.",
                            "Net ionic equations show only the reacting species; spectator ions are cancelled out.",
                        ],
                        "commonMistakes": {
                            "mistake": "Altering chemical subscripts to balance equations",
                            "wrongExample": "Balancing H2 + O2 -> H2O by writing H2 + O2 -> H2O2.",
                            "correctedExample": "Balance by adjusting coefficients: 2H2 + O2 -> 2H2O.",
                            "explanation": "H2O2 is hydrogen peroxide, a completely different chemical compound from water.",
                        },
                        "workedExamples": [
                            {
                                "context": "Equation Balancing & Net Ionic Derivation",
                                "question": "Balance the molecular equation for the reaction of aqueous lead(II) nitrate with sodium chloride, and derive its net ionic equation.",
                                "stepByStepSolution": [
                                    "1. Molecular equation: $\\ce{Pb(NO3)2(aq) + 2NaCl(aq) -> PbCl2(s) + 2NaNO3(aq)}$.",
                                    "2. Total ionic equation (dissociate all soluble strong electrolytes into ions): $\\ce{Pb^{2+}(aq) + 2NO3-(aq) + 2Na+(aq) + 2Cl-(aq) -> PbCl2(s) + 2Na+(aq) + 2NO3-(aq)}$.",
                                    "3. Identify spectator ions: $\\text{Na}^+$ and $\\text{NO}_3^-$ appear unchanged on both sides.",
                                    "4. Cancel spectator ions to obtain net ionic equation: $\\ce{Pb^{2+}(aq) + 2Cl-(aq) -> PbCl2(s)}$.",
                                ],
                                "finalAnswer": "Balanced: Pb(NO3)2 + 2NaCl -> PbCl2 + 2NaNO3; Net ionic: Pb2+(aq) + 2Cl-(aq) -> PbCl2(s)",
                                "ruleExplanation": "Net ionic equations isolate the chemical precipitation event from spectator spectators.",
                            },
                        ],
                        "checkpoint": {
                            "id": "chk-chm-eqfix-1-1",
                            "title": "Checkpoint: Equation Balancing",
                            "passPercentage": 80,
                            "verificationMethod": "Standard Marking Scheme",
                            "questions": [
                                {
                                    "id": "q_chm_eqfix_1_1",
                                    "prompt": "When the equation a Al + b O2 -> c Al2O3 is balanced, the values of a, b, and c are:",
                                    "options": [{"id": "A", "text": "2, 3, 1"}, {"id": "B", "text": "4, 3, 2"}, {"id": "C", "text": "1, 1, 1"}, {"id": "D", "text": "2, 1, 2"}],
                                    "correctOptionId": "B",
                                    "explanation": "4 Al + 3 O2 -> 2 Al2O3 balances both Al (4) and O (6).",
                                    "topic": "Balancing Coefficients",
                                    "weakAreaCode": "WA-CHM-STO-02",
                                },
                                {
                                    "id": "q_chm_eqfix_1_2",
                                    "prompt": "In the net ionic equation for the neutralization of HCl by NaOH, the spectator ions are:",
                                    "options": [{"id": "A", "text": "H+ and OH-"}, {"id": "B", "text": "Na+ and Cl-"}, {"id": "C", "text": "H2O and NaCl"}, {"id": "D", "text": "H+ and Cl-"}],
                                    "correctOptionId": "B",
                                    "explanation": "Na+ and Cl- remain dissolved in aqueous solution without participating.",
                                    "topic": "Spectator Ions",
                                    "weakAreaCode": "WA-CHM-STO-02",
                                },
                                {
                                    "id": "q_chm_eqfix_1_3",
                                    "prompt": "Which formula correctly represents calcium phosphate?",
                                    "options": [{"id": "A", "text": "CaPO4"}, {"id": "B", "text": "Ca2(PO4)3"}, {"id": "C", "text": "Ca3(PO4)2"}, {"id": "D", "text": "Ca(PO4)2"}],
                                    "correctOptionId": "C",
                                    "explanation": "Ca2+ and PO4 3- criss-cross to give Ca3(PO4)2.",
                                    "topic": "Formula Criss-Cross",
                                    "weakAreaCode": "WA-CHM-STO-01",
                                },
                                {
                                    "id": "q_chm_eqfix_1_4",
                                    "prompt": "The net ionic equation for the precipitation of silver chloride is:",
                                    "options": [{"id": "A", "text": "AgNO3 + NaCl -> AgCl + NaNO3"}, {"id": "B", "text": "Ag+(aq) + Cl-(aq) -> AgCl(s)"}, {"id": "C", "text": "Na+(aq) + NO3-(aq) -> NaNO3(aq)"}, {"id": "D", "text": "Ag+(aq) + NO3-(aq) -> AgNO3(s)"}],
                                    "correctOptionId": "B",
                                    "explanation": "Net ionic equation shows only Ag+ and Cl- forming solid AgCl.",
                                    "topic": "Net Ionic Equation",
                                    "weakAreaCode": "WA-CHM-STO-02",
                                },
                                {
                                    "id": "q_chm_eqfix_1_5",
                                    "prompt": "Why is it forbidden to change subscripts in formulas when balancing equations?",
                                    "options": [{"id": "A", "text": "It makes calculations harder"}, {"id": "B", "text": "It alters the chemical identity of the substance"}, {"id": "C", "text": "It increases molar mass"}, {"id": "D", "text": "It changes reaction temperature"}],
                                    "correctOptionId": "B",
                                    "explanation": "Subscripts define the chemical formula and atomic ratios of a specific compound.",
                                    "topic": "Conservation of Mass",
                                    "weakAreaCode": "WA-CHM-STO-02",
                                },
                            ],
                        },
                        "examTip": "Always verify your balanced equation by counting every element on both reactant and product sides before continuing.",
                    },
                ],
            },
        ],
    },
]

filepath = os.path.join(COURSES_DIR, "chemistry-deep-dives.ts")
header = """/**
 * Trainbow HUB: Chemistry Deep Dive Courses (Courses 8 - 12)
 * Grounded in NERDC, WAEC, NECO, and JAMB UTME Curriculum Specifications.
 *
 * All records strictly adhere to the Teacher Review Gate (reviewStatus: "needs_teacher_review").
 */

import { ChemistryCourseData } from "../chemistry-curriculum";

"""
ts_code = f"export const DEEP_DIVE_CHEMISTRY_COURSES: ChemistryCourseData[] = {to_ts(COURSES, 0)};\n"
with open(filepath, "w", encoding="utf-8") as f:
    f.write(header + ts_code)
print(f"✓ Wrote chemistry-deep-dives.ts with {len(COURSES)} courses.")
