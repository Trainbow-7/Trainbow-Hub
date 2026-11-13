/**
 * Trainbow HUB: Chemistry Weak Area Deficiency Registry
 * Mapped to NERDC, WAEC, NECO, and JAMB UTME Chemistry Curriculum Specifications
 *
 * All records strictly adhere to the Teacher Review Gate (needsReview: true).
 */

import { WeakAreaRecord } from "./english-deficiency-map";

export type ChemistrySkillArea =
  | "STOICHIOMETRY_EQUATIONS"
  | "ATOMIC_PERIODICITY"
  | "PHYSICAL_CHEMISTRY"
  | "INORGANIC_CHEMISTRY"
  | "ORGANIC_CHEMISTRY"
  | "ANALYTICAL_PRACTICAL";

export const CHEMISTRY_WEAK_AREAS: WeakAreaRecord[] = [
  // 1. STOICHIOMETRY & EQUATIONS
  {
    code: "WA-CHM-STO-01",
    title: "Chemical Formulas, Valency & IUPAC Oxidation Numbers",
    skillArea: "STOICHIOMETRY_EQUATIONS" as any,
    levels: ["SS 1-3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Writing incorrect chemical formulas by swapping valencies improperly (e.g. AlSO4 or FeCl instead of Al2(SO4)3 and FeCl3). Inability to calculate Roman numeral oxidation numbers for transition elements and polyatomic ions.",
    evidenceSource: "WAEC Chief Examiner Report (Chemistry 2) 2021-2024; JAMB IBASS",
    evidenceDate: "2021-2024",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-CHM-STO-02",
    title: "Balancing Chemical, Ionic & Net Ionic Equations",
    skillArea: "STOICHIOMETRY_EQUATIONS" as any,
    levels: ["SS 1-3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Balancing equations by altering subscripts inside formulas rather than adjusting stoichiometric coefficients. Omitting required physical state symbols (s, l, g, aq) and failing to cancel spectator ions in net ionic equations.",
    evidenceSource: "WAEC Chief Examiner Report 2020-2023",
    evidenceDate: "2020-2023",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-CHM-STO-03",
    title: "The Mole Concept, Molar Mass & Avogadro's Number",
    skillArea: "STOICHIOMETRY_EQUATIONS" as any,
    levels: ["SS 1-3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Confusing molar mass (M) with given mass (m). Multiplying instead of dividing when finding moles from mass (n = m/M). Failure to relate moles to particle count with Avogadro's constant (6.02 x 10^23 mol^-1).",
    evidenceSource: "WAEC Chief Examiner Report 2019-2024; JAMB IBASS",
    evidenceDate: "2019-2024",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-CHM-STO-04",
    title: "Percentage Composition, Empirical & Molecular Formulas",
    skillArea: "STOICHIOMETRY_EQUATIONS" as any,
    levels: ["SS 1-2", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Prematurely rounding fractional mole ratios instead of finding the simplest whole-number ratio, yielding wrong empirical formulas. Inability to apply Molar Mass = 2 x Vapor Density to determine molecular formulas.",
    evidenceSource: "WAEC Chief Examiner Report 2022",
    evidenceDate: "2022",
    confidence: "high",
    priority: false,
    needsReview: true,
  },
  {
    code: "WA-CHM-STO-05",
    title: "Stoichiometric Calculations & Limiting Reagents",
    skillArea: "STOICHIOMETRY_EQUATIONS" as any,
    levels: ["SS 2-3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Computing product yield directly without verifying which reactant is completely consumed first. Inability to use stoichiometric mole ratios from balanced equations to calculate limiting and excess reagents.",
    evidenceSource: "WAEC Chief Examiner Report 2021-2024",
    evidenceDate: "2021-2024",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-CHM-STO-06",
    title: "Molar Volume of Gases at S.T.P. & Gas Stoichiometry",
    skillArea: "STOICHIOMETRY_EQUATIONS" as any,
    levels: ["SS 2-3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Forgetting that 1 mole of any gas at s.t.p. occupies 22.4 dm^3 (22,400 cm^3). Inadvertently applying 22.4 dm^3 to liquid solutions or solid precipitates. Confusing s.t.p. with room temperature and pressure (24 dm^3).",
    evidenceSource: "JAMB UTME Chemistry Syllabus Notes",
    evidenceDate: "2024",
    confidence: "high",
    priority: false,
    needsReview: true,
  },

  // 2. ATOMIC STRUCTURE & PERIODICITY
  {
    code: "WA-CHM-ATM-01",
    title: "Subatomic Particles, Isotopes & Relative Atomic Mass",
    skillArea: "ATOMIC_PERIODICITY" as any,
    levels: ["SS 1", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Confusing atomic number (Z) with mass number (A). Inability to calculate weighted average relative atomic mass from fractional isotopic abundances (e.g. Cl-35 and Cl-37).",
    evidenceSource: "WAEC Chief Examiner Report 2020",
    evidenceDate: "2020",
    confidence: "high",
    priority: false,
    needsReview: true,
  },
  {
    code: "WA-CHM-ATM-02",
    title: "Electronic Configuration in s, p, d, f Orbitals",
    skillArea: "ATOMIC_PERIODICITY" as any,
    levels: ["SS 1-3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Violating Hund's rule or Pauli's exclusion principle when filling degenerate orbitals. Inability to identify anomalous half-filled and fully-filled 3d configurations of Chromium (3d^5 4s^1) and Copper (3d^10 4s^1).",
    evidenceSource: "JAMB IBASS Specification 2024",
    evidenceDate: "2024",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-CHM-ATM-03",
    title: "Periodic Trends: Radii, Ionization Energy & Electronegativity",
    skillArea: "ATOMIC_PERIODICITY" as any,
    levels: ["SS 1-3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Blindly memorizing trend arrows across periods and down groups without explaining effective nuclear charge vs shielding. Failing to explain anomalies (e.g. why Be has higher IE than B, and N higher than O).",
    evidenceSource: "WAEC Chief Examiner Report 2022-2024",
    evidenceDate: "2022-2024",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-CHM-ATM-04",
    title: "Chemical Bonding: Ionic, Covalent, Coordinate & Intermolecular Forces",
    skillArea: "ATOMIC_PERIODICITY" as any,
    levels: ["SS 1-3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Confusing strong intramolecular covalent bonds with weak intermolecular hydrogen bonds and van der Waals forces. Inability to represent coordinate (dative) covalent bonds in NH4+ and H3O+ using arrow notation.",
    evidenceSource: "WAEC Chief Examiner Report 2021",
    evidenceDate: "2021",
    confidence: "high",
    priority: true,
    needsReview: true,
  },

  // 3. PHYSICAL CHEMISTRY
  {
    code: "WA-CHM-PHY-01",
    title: "Gas Laws: Boyle, Charles, Avogadro & Ideal Gas Equation",
    skillArea: "PHYSICAL_CHEMISTRY" as any,
    levels: ["SS 1-2", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Failing to convert temperatures in Celsius to Kelvin (T = θ + 273) before formula substitution into P1V1/T1 = P2V2/T2. Inability to apply Graham's law of diffusion to compare molecular rates.",
    evidenceSource: "WAEC Chief Examiner Report 2020-2023",
    evidenceDate: "2020-2023",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-CHM-PHY-02",
    title: "Chemical Energetics, Enthalpy Profile Diagrams & Hess's Law",
    skillArea: "PHYSICAL_CHEMISTRY" as any,
    levels: ["SS 2-3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Drawing enthalpy diagrams with upside-down activation energy (Ea) arrows or reversed ΔH signs (ΔH < 0 exothermic, ΔH > 0 endothermic). Inability to calculate heat of reaction from bond energies.",
    evidenceSource: "WAEC Chief Examiner Report 2023",
    evidenceDate: "2023",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-CHM-PHY-03",
    title: "Rates of Reaction, Collision Theory & Activation Energy",
    skillArea: "PHYSICAL_CHEMISTRY" as any,
    levels: ["SS 2-3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Describing reaction rates without explaining particle kinetic energy, collision frequency, and successful collisions exceeding activation energy. Confusing speed of reaction with equilibrium yield.",
    evidenceSource: "WAEC Chief Examiner Report 2021-2024",
    evidenceDate: "2021-2024",
    confidence: "high",
    priority: false,
    needsReview: true,
  },
  {
    code: "WA-CHM-PHY-04",
    title: "Reversible Reactions, Chemical Equilibrium & Le Chatelier's Principle",
    skillArea: "PHYSICAL_CHEMISTRY" as any,
    levels: ["SS 2-3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Falsely claiming catalysts shift equilibrium positions (they only accelerate reaching equilibrium). Predicting incorrect shifts upon pressure variation when gas moles are equal on both sides.",
    evidenceSource: "WAEC Chief Examiner Report 2022; JAMB UTME",
    evidenceDate: "2022",
    confidence: "high",
    priority: true,
    needsReview: true,
  },

  // 4. INORGANIC CHEMISTRY: ACIDS, BASES, SALTS, METALS & NON-METALS
  {
    code: "WA-CHM-INO-01",
    title: "Acids, Bases, pH Scale & pOH Calculations",
    skillArea: "INORGANIC_CHEMISTRY" as any,
    levels: ["SS 1-3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Confusing acid strength (degree of ionization) with concentration (molarity in mol/dm^3). Math errors in evaluating pH = -log[H+] and failing to apply pH + pOH = 14 at 25°C.",
    evidenceSource: "WAEC Chief Examiner Report 2020-2024",
    evidenceDate: "2020-2024",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-CHM-INO-02",
    title: "Preparation of Salts, Solubility Rules & Precipitation",
    skillArea: "INORGANIC_CHEMISTRY" as any,
    levels: ["SS 2", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Choosing improper synthetic routes for soluble vs insoluble salts (e.g. attempting to prepare insoluble BaSO4 by neutralization rather than ionic precipitation). Misremembering basic solubility rules.",
    evidenceSource: "WAEC Chief Examiner Report 2021",
    evidenceDate: "2021",
    confidence: "high",
    priority: false,
    needsReview: true,
  },
  {
    code: "WA-CHM-INO-03",
    title: "Water Hardness: Temporary vs Permanent Hardness & Treatment",
    skillArea: "INORGANIC_CHEMISTRY" as any,
    levels: ["SS 2", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Confusing temporary hardness (Ca(HCO3)2, decomposed by boiling) with permanent hardness (CaSO4/MgSO4, requiring washing soda or ion exchange). Writing incorrect equations for lather scum formation.",
    evidenceSource: "WAEC Chief Examiner Report 2019-2022",
    evidenceDate: "2019-2022",
    confidence: "high",
    priority: false,
    needsReview: true,
  },
  {
    code: "WA-CHM-INO-04",
    title: "Extraction of Metals: Iron (Blast Furnace) & Aluminium (Hall-Héroult)",
    skillArea: "INORGANIC_CHEMISTRY" as any,
    levels: ["SS 3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Confusing the roles of limestone (flux reacting with silica to form slag CaSiO3) and carbon monoxide (reducing agent) in the blast furnace. Omitting the role of cryolite (Na3AlF6) in dissolving alumina and saving energy.",
    evidenceSource: "WAEC Chief Examiner Report 2023",
    evidenceDate: "2023",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-CHM-INO-05",
    title: "Non-Metals: Sulphur (Contact Process) & Nitrogen (Haber Process)",
    skillArea: "INORGANIC_CHEMISTRY" as any,
    levels: ["SS 2-3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Inability to state industrial optimum conditions with equilibrium justification (450°C, V2O5 catalyst, 1-2 atm for Contact process; 450°C, Fe catalyst, 200 atm for Haber process). Forgetting why SO3 is absorbed in conc H2SO4 rather than water.",
    evidenceSource: "WAEC Chief Examiner Report 2022-2024",
    evidenceDate: "2022-2024",
    confidence: "high",
    priority: true,
    needsReview: true,
  },

  // 5. ELECTROCHEMISTRY & REDOX
  {
    code: "WA-CHM-ELC-01",
    title: "Oxidation Numbers, Redox Half-Equations & Agents",
    skillArea: "INORGANIC_CHEMISTRY" as any,
    levels: ["SS 2-3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Confusing the oxidized substance with the oxidizing agent (the oxidizing agent is reduced). Inability to balance half-reactions in acidic media by systematically adding H2O, H+, and electrons.",
    evidenceSource: "WAEC Chief Examiner Report 2020-2024",
    evidenceDate: "2020-2024",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-CHM-ELC-02",
    title: "Electrolysis: Preferential Discharge of Ions at Electrodes",
    skillArea: "INORGANIC_CHEMISTRY" as any,
    levels: ["SS 2-3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Overlooking the 3 critical discharge factors: electrochemical position, concentration, and electrode nature. Predicting incorrect products for concentrated NaCl (brine) or CuSO4 with reactive copper anodes.",
    evidenceSource: "WAEC Chief Examiner Report 2021-2024",
    evidenceDate: "2021-2024",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-CHM-ELC-03",
    title: "Faraday's Laws of Electrolysis & Quantitative Deposition",
    skillArea: "INORGANIC_CHEMISTRY" as any,
    levels: ["SS 2-3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Omitting ion valence (n) in m = (M I t)/(n F) or Q = n F. Failing to convert time from minutes or hours into seconds. Inability to compute volumes of gas liberated at anode/cathode at s.t.p.",
    evidenceSource: "WAEC Chief Examiner Report 2019-2024",
    evidenceDate: "2019-2024",
    confidence: "high",
    priority: true,
    needsReview: true,
  },

  // 6. ORGANIC CHEMISTRY
  {
    code: "WA-CHM-ORG-01",
    title: "IUPAC Nomenclature & Structural Isomerism of Hydrocarbons",
    skillArea: "ORGANIC_CHEMISTRY" as any,
    levels: ["SS 2-3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Numbering the parent carbon chain from the wrong end; failing to assign the lowest locants to double bonds or substituents. Drawing pentavalent carbon atoms (carbon must strictly have four bonds).",
    evidenceSource: "WAEC Chief Examiner Report 2021-2024",
    evidenceDate: "2021-2024",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-CHM-ORG-02",
    title: "Reactions of Hydrocarbons: Substitution vs Addition",
    skillArea: "ORGANIC_CHEMISTRY" as any,
    levels: ["SS 2-3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Confusing free-radical substitution of alkanes with electrophilic addition of alkenes/alkynes. Inability to explain bromine water and acidified KMnO4 decolourization tests for unsaturation.",
    evidenceSource: "WAEC Chief Examiner Report 2020-2023",
    evidenceDate: "2020-2023",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-CHM-ORG-03",
    title: "Alkanols, Alkanoic Acids, Esterification & Saponification",
    skillArea: "ORGANIC_CHEMISTRY" as any,
    levels: ["SS 3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Confusing primary, secondary, and tertiary alcohols and their respective oxidation products. Writing backward ester formulas (e.g. ethyl ethanoate as CH3COOCH2CH3). Inability to formulate saponification equations.",
    evidenceSource: "WAEC Chief Examiner Report 2022-2024",
    evidenceDate: "2022-2024",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-CHM-ORG-04",
    title: "Polymers, Carbohydrates, Fats & Proteins",
    skillArea: "ORGANIC_CHEMISTRY" as any,
    levels: ["SS 3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Confusing addition polymerization (polyethene, PVC) with condensation polymerization (nylon-6,6, terylene). Inability to identify peptide bonds (-CONH-) or distinguish reducing sugars with Fehling's solution.",
    evidenceSource: "WAEC Chief Examiner Report 2021-2024",
    evidenceDate: "2021-2024",
    confidence: "high",
    priority: false,
    needsReview: true,
  },
  {
    code: "WA-CHM-ORG-05",
    title: "Petroleum Refining, Fractional Distillation & Cracking",
    skillArea: "ORGANIC_CHEMISTRY" as any,
    levels: ["SS 2-3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Confusing fractional distillation (physical boiling-point separation) with cracking (chemical thermal/catalytic breakdown). Inability to define octane numbers and anti-knock additive mechanisms.",
    evidenceSource: "JAMB UTME Chemistry Syllabus",
    evidenceDate: "2024",
    confidence: "high",
    priority: false,
    needsReview: true,
  },

  // 7. ANALYTICAL & PRACTICAL CHEMISTRY (WAEC Paper 3 / NECO Practical)
  {
    code: "WA-CHM-PRC-01",
    title: "Burette Technique, Meniscus Reading & Concordancy",
    skillArea: "ANALYTICAL_PRACTICAL" as any,
    levels: ["SS 2-3", "WAEC Prep"],
    description:
      "Reading the top rather than the bottom of the meniscus for colorless solutions. Averaging non-concordant titres (titres must agree within ±0.20 cm^3). Failing to record burette readings to 2 decimal places with the last digit 0 or 5.",
    evidenceSource: "WAEC Chief Examiner Report (Paper 3 Practical) 2019-2024",
    evidenceDate: "2019-2024",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-CHM-PRC-02",
    title: "Volumetric Analysis Calculations: Molarities & Percentage Purity",
    skillArea: "ANALYTICAL_PRACTICAL" as any,
    levels: ["SS 2-3", "WAEC Prep"],
    description:
      "Applying CA VA / CB VB = nA / nB incorrectly. Failing to convert mass concentration in g/dm^3 to molar concentration in mol/dm^3 using M = conc(g/dm^3) / molar mass. Inability to solve back-titration problems.",
    evidenceSource: "WAEC Chief Examiner Report (Paper 3) 2021-2024",
    evidenceDate: "2021-2024",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-CHM-PRC-03",
    title: "Qualitative Analysis: Identification of Cations, Anions & Gases",
    skillArea: "ANALYTICAL_PRACTICAL" as any,
    levels: ["SS 2-3", "WAEC Prep"],
    description:
      "Using ambiguous informal observations rather than formal exam terminology. Failing to recognize amphoteric hydroxides (Zn2+, Al3+, Pb2+) dissolving in excess NaOH(aq). Confusing confirmatory gas identification tests.",
    evidenceSource: "WAEC Chief Examiner Report (Paper 3) 2020-2024",
    evidenceDate: "2020-2024",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-CHM-PRC-04",
    title: "Laboratory Safety Protocols & Practical Apparatus Precautions",
    skillArea: "ANALYTICAL_PRACTICAL" as any,
    levels: ["SS 1-3", "WAEC Prep"],
    description:
      "Failing to state standard volumetric precautions (rinsing burette with acid, pipette with base; not rinsing titration flask with either solution; adding acid to water, never water to acid). Omitting eye protection and fume cupboard rules.",
    evidenceSource: "WAEC Regulations & Syllabuses for Chemistry",
    evidenceDate: "2024",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
];

export function getChemistryWeakAreaByCode(code: string): WeakAreaRecord | undefined {
  return CHEMISTRY_WEAK_AREAS.find((wa) => wa.code === code);
}

export function listPriorityChemistryWeakAreas(): WeakAreaRecord[] {
  return CHEMISTRY_WEAK_AREAS.filter((wa) => wa.priority);
}

export function listChemistryWeakAreasBySkill(skill: ChemistrySkillArea): WeakAreaRecord[] {
  return CHEMISTRY_WEAK_AREAS.filter((wa) => (wa.skillArea as any) === skill);
}
