/**
 * Trainbow HUB: Physics Weak Area Deficiency Registry
 * Mapped to NERDC, WAEC, NECO, and JAMB UTME Physics Curriculum Specifications
 *
 * All records strictly adhere to the Teacher Review Gate (needsReview: true).
 */

import { WeakAreaRecord } from "./english-deficiency-map";

export type PhysicsSkillArea =
  | "MECHANICS"
  | "THERMAL_PHYSICS"
  | "WAVES_OPTICS"
  | "ELECTRICITY_MAGNETISM"
  | "ATOMIC_NUCLEAR"
  | "PRACTICAL_MEASUREMENT";

export const PHYSICS_WEAK_AREAS: WeakAreaRecord[] = [
  // 1. MECHANICS
  {
    code: "WA-PHY-MCH-01",
    title: "Units, Conversions, Dimensions & Dimensional Homogeneity",
    skillArea: "MECHANICS" as any,
    levels: ["SS 1-3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Candidates fail to convert non-SI units (g to kg, cm to m, mins to s, km/h to m/s) before formula substitution. Inability to derive dimensional formulas ([M][L][T]^-2) to verify physical homogeneity.",
    evidenceSource: "WAEC Chief Examiner Report (Physics Paper 2) 2021-2024; JAMB IBASS",
    evidenceDate: "2021-2024",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-PHY-MCH-02",
    title: "Vectors vs Scalars & Component Resolution",
    skillArea: "MECHANICS" as any,
    levels: ["SS 1-3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Treating vector quantities as simple scalars. Failure to resolve inclined forces into perpendicular components (Fx = F cos θ, Fy = F sin θ) in inclined planes and equilibrium problems.",
    evidenceSource: "WAEC Chief Examiner Report (Physics 2) 2020-2023",
    evidenceDate: "2020-2023",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-PHY-MCH-03",
    title: "Motion Graphs: Velocity-Time & Displacement-Time Interpretation",
    skillArea: "MECHANICS" as any,
    levels: ["SS 1-2", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Inability to deduce acceleration from graph gradients or total distance travelled from area under the velocity-time curve. Confusing curved displacement graphs with uniform velocity.",
    evidenceSource: "WAEC Chief Examiner Report (Paper 2) 2019-2024",
    evidenceDate: "2019-2024",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-PHY-MCH-04",
    title: "Newton's Laws & Free-Body Force Equilibrium",
    skillArea: "MECHANICS" as any,
    levels: ["SS 1-3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Omitting weight (W = mg), normal reaction (R = mg cos θ), or friction (Fr = μR) in free-body diagrams. Stating Newton's 3rd Law without noting that action and reaction act on different bodies.",
    evidenceSource: "WAEC Chief Examiner Report 2022; NECO SSCE 2023",
    evidenceDate: "2022-2023",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-PHY-MCH-05",
    title: "Projectile Motion: Independence of Horizontal & Vertical Motion",
    skillArea: "MECHANICS" as any,
    levels: ["SS 2-3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Mixing vertical gravitational acceleration with horizontal motion where velocity remains constant. Overlooking that at maximum height, vertical velocity component vy = 0.",
    evidenceSource: "JAMB UTME Physics Syllabus; WAEC Paper 2",
    evidenceDate: "2022-2025",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-PHY-MCH-06",
    title: "Uniform Circular Motion & Centripetal Force",
    skillArea: "MECHANICS" as any,
    levels: ["SS 2-3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Believing centripetal force (F = mv^2/r) is an independent external force rather than the resultant force toward the center. Miscalculating angular velocity (ω = 2πf = v/r).",
    evidenceSource: "WAEC Chief Examiner Report 2021; JAMB IBASS",
    evidenceDate: "2021-2024",
    confidence: "high",
    priority: false,
    needsReview: true,
  },
  {
    code: "WA-PHY-MCH-07",
    title: "Work, Energy, Power & Mechanical Energy Conservation",
    skillArea: "MECHANICS" as any,
    levels: ["SS 1-3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Calculating work done without multiplying by the cosine of the angle between force and displacement (W = F d cos θ). Overlooking energy dissipation due to friction.",
    evidenceSource: "WAEC Chief Examiner Report 2023; NECO SSCE 2022",
    evidenceDate: "2022-2023",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-PHY-MCH-08",
    title: "Linear Momentum, Collisions & Sign Conventions",
    skillArea: "MECHANICS" as any,
    levels: ["SS 1-3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Failure to assign opposite algebraic signs to velocities moving in opposite directions prior to or after collision. Confusing elastic with inelastic collisions.",
    evidenceSource: "WAEC Chief Examiner Report 2020-2024; JAMB IBASS",
    evidenceDate: "2020-2024",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-PHY-MCH-09",
    title: "Principle of Moments & Conditions for Rigid Body Equilibrium",
    skillArea: "MECHANICS" as any,
    levels: ["SS 1-3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Calculating torque without perpendicular distance from the line of action to the pivot. Forgetting the weight of non-uniform or uniform meter rules acting through their centre of gravity.",
    evidenceSource: "WAEC Chief Examiner Report (Physics 2 & 3) 2018-2023",
    evidenceDate: "2018-2023",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-PHY-MCH-10",
    title: "Fluid Pressure, Archimedes' Principle & Law of Flotation",
    skillArea: "MECHANICS" as any,
    levels: ["SS 1-3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Confusing gauge pressure (P = ρgh) with absolute pressure (Pabs = P0 + ρgh). Incorrectly equating upthrust to object weight rather than displaced liquid weight for partially submerged bodies.",
    evidenceSource: "WAEC Chief Examiner Report 2022; JAMB UTME Review",
    evidenceDate: "2022-2024",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-PHY-MCH-11",
    title: "Hooke's Law, Elasticity & Young's Modulus",
    skillArea: "MECHANICS" as any,
    levels: ["SS 1-3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Forgetting extension e = l - l0 rather than absolute length. Confusing tensile stress (F/A) and tensile strain (e/l0) with Young's Modulus (E = FL0 / Ae), or using diameter instead of radius for area.",
    evidenceSource: "WAEC Chief Examiner Report 2021; NECO SSCE",
    evidenceDate: "2021-2023",
    confidence: "high",
    priority: false,
    needsReview: true,
  },
  {
    code: "WA-PHY-MCH-12",
    title: "Simple Harmonic Motion (SHM): Pendulum & Loaded Spring",
    skillArea: "MECHANICS" as any,
    levels: ["SS 2-3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Incorrect formula relation between period and mass or length (T = 2π√(l/g), T = 2π√(m/k)). Forgetting that restoring acceleration is maximum at extreme amplitude while speed is maximum at equilibrium.",
    evidenceSource: "WAEC Chief Examiner Report 2020-2023; JAMB IBASS",
    evidenceDate: "2020-2023",
    confidence: "high",
    priority: true,
    needsReview: true,
  },

  // 2. THERMAL PHYSICS
  {
    code: "WA-PHY-THM-01",
    title: "Thermal Expansion & Linear/Area/Volume Expansivity",
    skillArea: "THERMAL_PHYSICS" as any,
    levels: ["SS 1-2", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Forgetting original length L1 in expansivity calculations (ΔL = α L1 Δθ). Confusing linear (α), superficial (β = 2α), and cubic (γ = 3α) expansivity coefficients.",
    evidenceSource: "WAEC Chief Examiner Report 2021-2024",
    evidenceDate: "2021-2024",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-PHY-THM-02",
    title: "Specific Heat Capacity & Method of Mixtures Calorimetry",
    skillArea: "THERMAL_PHYSICS" as any,
    levels: ["SS 1-3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Neglecting heat absorbed by the calorimeter container and stirrer in heat exchange: Heat Lost = Heat Gained. Writing negative temperature intervals instead of (Thot - Tf) = (Tf - Tcold).",
    evidenceSource: "WAEC Chief Examiner Report (Physics 2) 2019-2024",
    evidenceDate: "2019-2024",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-PHY-THM-03",
    title: "Specific Latent Heat of Fusion & Vaporisation",
    skillArea: "THERMAL_PHYSICS" as any,
    levels: ["SS 2-3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Applying Q = mcΔθ during phase change where temperature remains strictly constant. Forgetting to sum both sensible and latent heat steps for ice below 0°C.",
    evidenceSource: "WAEC Chief Examiner Report 2022; NECO SSCE",
    evidenceDate: "2022-2024",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-PHY-THM-04",
    title: "Gas Laws & Absolute Thermodynamic Temperature Scales",
    skillArea: "THERMAL_PHYSICS" as any,
    levels: ["SS 1-3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Substituting Celsius temperatures directly into Boyle's, Charles', or ideal gas laws (P1 V1 / T1 = P2 V2 / T2) without converting to Kelvin (T = θ°C + 273).",
    evidenceSource: "JAMB UTME Physics Specification; WAEC Paper 2",
    evidenceDate: "2022-2025",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-PHY-THM-05",
    title: "Heat Transfer Mechanisms & Blackbody Radiation",
    skillArea: "THERMAL_PHYSICS" as any,
    levels: ["SS 1-2", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Confusing thermal radiation (EM waves traversing vacuum) with conduction and convection requiring material media. Failing to apply good absorber = good emitter principles.",
    evidenceSource: "WAEC Chief Examiner Report 2020; NERDC",
    evidenceDate: "2020-2023",
    confidence: "high",
    priority: false,
    needsReview: true,
  },

  // 3. WAVES & OPTICS
  {
    code: "WA-PHY-WAV-01",
    title: "Wave Properties, Phase & the General Wave Equation",
    skillArea: "WAVES_OPTICS" as any,
    levels: ["SS 2-3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Inability to extract amplitude, wavelength (λ), frequency (f), and speed from mathematical equations y = A sin(ωt ± kx). Confusing transverse and longitudinal wave motions.",
    evidenceSource: "WAEC Chief Examiner Report 2021-2024",
    evidenceDate: "2021-2024",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-PHY-WAV-02",
    title: "Sound Waves, Echoes, Resonance & Organ Pipe Harmonics",
    skillArea: "WAVES_OPTICS" as any,
    levels: ["SS 2-3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Forgetting that echo distance is doubled (v = 2d/t). Confusing resonant end conditions for closed pipes (λ = 4L, odd harmonics only) versus open pipes (λ = 2L, all harmonics).",
    evidenceSource: "WAEC Chief Examiner Report 2020-2023; JAMB IBASS",
    evidenceDate: "2020-2023",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-PHY-OPT-01",
    title: "Reflection in Plane & Curved Spherical Mirrors",
    skillArea: "WAVES_OPTICS" as any,
    levels: ["SS 2-3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Failure to use consistent sign conventions in the mirror formula (1/f = 1/u + 1/v). Confusing virtual diminished images in convex mirrors with real magnified images in concave mirrors.",
    evidenceSource: "WAEC Chief Examiner Report 2019-2023",
    evidenceDate: "2019-2023",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-PHY-OPT-02",
    title: "Refraction, Snell's Law & Total Internal Reflection",
    skillArea: "WAVES_OPTICS" as any,
    levels: ["SS 2-3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Measuring angles of incidence and refraction from the boundary surface rather than the normal. Omitting condition for TIR: light traveling from denser to less dense medium with i > c (sin c = 1/n).",
    evidenceSource: "WAEC Chief Examiner Report 2022-2024; JAMB IBASS",
    evidenceDate: "2022-2024",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-PHY-OPT-03",
    title: "Thin Lenses & Accurate Optical Ray Construction",
    skillArea: "WAVES_OPTICS" as any,
    levels: ["SS 2-3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Drawing rays without directional arrowheads (penalized heavily in WAEC). Misidentifying focal length signs (f > 0 for converging convex lens, f < 0 for diverging concave lens).",
    evidenceSource: "WAEC Chief Examiner Report (Physics 2 & 3) 2018-2024",
    evidenceDate: "2018-2024",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-PHY-OPT-04",
    title: "Optical Instruments: Microscope & Astronomical Telescope",
    skillArea: "WAVES_OPTICS" as any,
    levels: ["SS 3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Confusing roles of objective and eyepiece lenses in normal adjustment. Inability to calculate overall angular magnification (M = mo * me).",
    evidenceSource: "WAEC Chief Examiner Report 2021-2023",
    evidenceDate: "2021-2023",
    confidence: "high",
    priority: false,
    needsReview: true,
  },

  // 4. ELECTRICITY & MAGNETISM
  {
    code: "WA-PHY-ELC-01",
    title: "Coulomb's Law, Electric Field Strength & Potential",
    skillArea: "ELECTRICITY_MAGNETISM" as any,
    levels: ["SS 2-3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Confusing electric field strength vector (E = k q / r^2) with scalar electric potential (V = k q / r). Failing to draw correct electric field line arrows between charges.",
    evidenceSource: "WAEC Chief Examiner Report 2020-2023",
    evidenceDate: "2020-2023",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-PHY-ELC-02",
    title: "Ohm's Law, Series & Parallel Resistor Networks",
    skillArea: "ELECTRICITY_MAGNETISM" as any,
    levels: ["SS 1-3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Inverting reciprocal terms erroneously in parallel resistance (1/Rp = 1/R1 + 1/R2). Failing to apply voltage divider rules across series networks or current divider rules across parallel branches.",
    evidenceSource: "WAEC Chief Examiner Report (Paper 2 & 3) 2018-2024",
    evidenceDate: "2018-2024",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-PHY-ELC-03",
    title: "Electromotive Force, Internal Resistance & Terminal P.D.",
    skillArea: "ELECTRICITY_MAGNETISM" as any,
    levels: ["SS 2-3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Assuming terminal potential difference (V) equals cell EMF (E) under load, overlooking internal resistance loss (V = E - Ir). Inability to find E and r from linear graphical intercepts.",
    evidenceSource: "WAEC Chief Examiner Report 2021-2024; JAMB IBASS",
    evidenceDate: "2021-2024",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-PHY-ELC-04",
    title: "Electrical Energy, Power Dissipation & Commercial Billing",
    skillArea: "ELECTRICITY_MAGNETISM" as any,
    levels: ["SS 1-3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Confusing power formulas (P = IV = I^2 R = V^2/R). Calculating commercial energy cost in kilowatt-hours (kWh) without converting watts to kilowatts (W/1000).",
    evidenceSource: "WAEC Chief Examiner Report 2020-2023; NECO SSCE",
    evidenceDate: "2020-2023",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-PHY-ELC-05",
    title: "Capacitors: Capacitance, Energy & Network Combinations",
    skillArea: "ELECTRICITY_MAGNETISM" as any,
    levels: ["SS 2-3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Confusing capacitor combination formulas with resistor formulas (capacitors add directly in parallel and reciprocally in series). Forgetting the factor of 1/2 in stored energy: W = 1/2 CV^2.",
    evidenceSource: "WAEC Chief Examiner Report 2022; JAMB UTME Review",
    evidenceDate: "2022-2024",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-PHY-MAG-01",
    title: "Magnetic Fields & Force on Currents / Moving Charges",
    skillArea: "ELECTRICITY_MAGNETISM" as any,
    levels: ["SS 2-3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Misapplying Fleming's Left-Hand Rule. Omitting sin θ term when conductor or charge enters field at an oblique angle (F = B I L sin θ, F = q v B sin θ).",
    evidenceSource: "WAEC Chief Examiner Report 2021-2024",
    evidenceDate: "2021-2024",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-PHY-MAG-02",
    title: "Electromagnetic Induction: Faraday's & Lenz's Laws",
    skillArea: "ELECTRICITY_MAGNETISM" as any,
    levels: ["SS 3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Forgetting that induced EMF opposes the change producing it (Lenz's law). Confusing Fleming's Right-Hand Rule (induction/generators) with Left-Hand Rule (motors).",
    evidenceSource: "WAEC Chief Examiner Report 2020-2023",
    evidenceDate: "2020-2023",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-PHY-MAG-03",
    title: "Transformers, Efficiency & Alternating Current (AC) Circuits",
    skillArea: "ELECTRICITY_MAGNETISM" as any,
    levels: ["SS 3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Inverting turns and voltage ratios (Vs/Vp = Ns/Np = Ip/Is). Neglecting power loss: Efficiency = (Vs Is) / (Vp Ip) * 100%. Confusing peak and rms values (Vrms = V0 / √2).",
    evidenceSource: "WAEC Chief Examiner Report 2019-2024; JAMB IBASS",
    evidenceDate: "2019-2024",
    confidence: "high",
    priority: true,
    needsReview: true,
  },

  // 5. ATOMIC & NUCLEAR PHYSICS
  {
    code: "WA-PHY-NUC-01",
    title: "Radioactive Decay, Decay Equations & Half-Life Calculations",
    skillArea: "ATOMIC_NUCLEAR" as any,
    levels: ["SS 3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Inability to balance atomic numbers (Z) and mass numbers (A) during alpha and beta decays. Confusing remaining fraction N/N0 = (1/2)^n with decayed fraction 1 - (1/2)^n.",
    evidenceSource: "WAEC Chief Examiner Report 2020-2024; JAMB IBASS",
    evidenceDate: "2020-2024",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-PHY-NUC-02",
    title: "Nuclear Reactions, Mass Defect & Binding Energy",
    skillArea: "ATOMIC_NUCLEAR" as any,
    levels: ["SS 3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Failing to convert atomic mass units to kg or MeV (1 u ≈ 931.5 MeV). Confusing nuclear fission (heavy nucleus split) with nuclear fusion (light nuclei combining).",
    evidenceSource: "WAEC Chief Examiner Report 2021-2024",
    evidenceDate: "2021-2024",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-PHY-MOD-01",
    title: "Photoelectric Effect, Photons & Einstein's Equation",
    skillArea: "ATOMIC_NUCLEAR" as any,
    levels: ["SS 3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Failing to convert electron-volts to Joules (1 eV = 1.6 x 10^-19 J). Believing light intensity increases electron kinetic energy rather than photocurrent. Applying h f = W0 + K.E.max.",
    evidenceSource: "WAEC Chief Examiner Report 2022-2024; JAMB IBASS",
    evidenceDate: "2022-2024",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-PHY-MOD-02",
    title: "Atomic Energy Levels & Line Emission/Absorption Spectra",
    skillArea: "ATOMIC_NUCLEAR" as any,
    levels: ["SS 3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Calculating transition wavelength without accounting for negative bound state energies. Omitting ΔE = h f = h c / λ.",
    evidenceSource: "WAEC Chief Examiner Report 2021-2023",
    evidenceDate: "2021-2023",
    confidence: "high",
    priority: false,
    needsReview: true,
  },

  // 6. PRACTICAL PHYSICS & MEASUREMENT
  {
    code: "WA-PHY-PRC-01",
    title: "Vernier Calipers & Micrometer Screw Gauge Measurements",
    skillArea: "PRACTICAL_MEASUREMENT" as any,
    levels: ["SS 1-3", "WAEC Prep", "JAMB UTME Prep"],
    description:
      "Inability to read main scale and fractional rotating/vernier scale. Neglecting positive or negative zero errors (Actual = Reading - Zero Error).",
    evidenceSource: "WAEC Chief Examiner Report (Physics 3) 2018-2024",
    evidenceDate: "2018-2024",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
  {
    code: "WA-PHY-PRC-02",
    title: "Practical Graph Plotting, Gradient Deduction & Error Controls",
    skillArea: "PRACTICAL_MEASUREMENT" as any,
    levels: ["SS 1-3", "WAEC Prep"],
    description:
      "Choosing awkward non-standard scales (multiples of 3 or 7) violating WAEC plotting criteria. Drawing non-best-fit lines or failing to distinguish line intercepts from origin.",
    evidenceSource: "WAEC Chief Examiner Report (Physics 3) 2018-2024",
    evidenceDate: "2018-2024",
    confidence: "high",
    priority: true,
    needsReview: true,
  },
];

export function getPhysicsWeakAreaByCode(code: string): WeakAreaRecord | undefined {
  return PHYSICS_WEAK_AREAS.find((wa) => wa.code === code);
}

export function listPriorityPhysicsWeakAreas(): WeakAreaRecord[] {
  return PHYSICS_WEAK_AREAS.filter((wa) => wa.priority);
}

export function listPhysicsWeakAreasBySkill(skill: PhysicsSkillArea): WeakAreaRecord[] {
  return PHYSICS_WEAK_AREAS.filter((wa) => (wa.skillArea as any) === skill);
}

