export * from "./types";
export * from "./symbolic-math";
export * from "./numeric-calc";
export * from "./statistics";
export * from "./geometry-check";
export * from "./unit-tools";
export * from "./chemistry-tools";
export * from "./code-exec";
export * from "./retrieve-syllabus";
export * from "./draw-diagram";
export * from "./reread-image-region";
export * from "./tools-provider";

/**
 * Gemini-compatible Function Declarations for the 10 Function Calling Tools
 */
export const GEMINI_TOOL_DECLARATIONS = [
  {
    name: "symbolic_math",
    description: "Symbolic algebra engine to solve equations, factor, expand, differentiate, integrate, or verify roots by programmatic substitution (e.g. rational equations, quadratics).",
    parameters: {
      type: "OBJECT",
      properties: {
        action: {
          type: "STRING",
          enum: ["solve", "substitute_and_check", "simplify", "factor", "expand", "differentiate", "integrate"],
          description: "Operation to perform"
        },
        equationOrExpr: {
          type: "STRING",
          description: "Equation or expression, e.g. '1/(3*a-1) = 2/(a+1) - 3/8' or '2*x^2 - 5*x + 3 = 0'"
        },
        variable: {
          type: "STRING",
          description: "Variable to solve for (e.g. 'a', 'x')"
        },
        candidateRoots: {
          type: "ARRAY",
          items: { type: "STRING" },
          description: "Candidate roots to substitute and verify (e.g. ['3', '7/9'])"
        }
      },
      required: ["action", "equationOrExpr"]
    }
  },
  {
    name: "numeric_calc",
    description: "High-precision arithmetic calculator for evaluating numerical formulas, square roots, trigonometric ratios, and rounding to specified significant figures.",
    parameters: {
      type: "OBJECT",
      properties: {
        expression: { type: "STRING", description: "Expression to evaluate, e.g. 'sqrt(13^2 - 5^2)'" },
        precision: { type: "INTEGER", description: "Decimal digits" },
        significantFigures: { type: "INTEGER", description: "Desired significant figures" }
      },
      required: ["expression"]
    }
  },
  {
    name: "statistics",
    description: "Compute mean, median, mode, standard deviation, linear regression, combinatorics (nPr, nCr), and normal distribution probabilities.",
    parameters: {
      type: "OBJECT",
      properties: {
        action: { type: "STRING", enum: ["describe", "linear_regression", "combinatorics", "normal_cdf"] },
        data: { type: "ARRAY", items: { type: "NUMBER" }, description: "Sample numbers" },
        dataY: { type: "ARRAY", items: { type: "NUMBER" }, description: "Dependent Y values" },
        n: { type: "INTEGER" },
        r: { type: "INTEGER" },
        combinatoricsType: { type: "STRING", enum: ["permutation", "combination", "factorial"] },
        xVal: { type: "NUMBER" }
      },
      required: ["action"]
    }
  },
  {
    name: "geometry_check",
    description: "Verify circle theorems, cyclic quadrilaterals, chord distances, and angle deduction constraints numerically against geometric theorems.",
    parameters: {
      type: "OBJECT",
      properties: {
        problemText: { type: "STRING", description: "Geometry question text or figure description" },
        claimedAnswer: { type: "STRING", description: "Claimed final angle or length to verify (e.g. '35°')" }
      },
      required: ["problemText"]
    }
  },
  {
    name: "unit_tools",
    description: "Convert physical quantities between SI, imperial, and metric units with dimensional analysis.",
    parameters: {
      type: "OBJECT",
      properties: {
        value: { type: "NUMBER" },
        fromUnit: { type: "STRING" },
        toUnit: { type: "STRING" }
      },
      required: ["value", "fromUnit", "toUnit"]
    }
  },
  {
    name: "chemistry_tools",
    description: "Chemical reaction balancing, molar mass calculation from chemical formula, stoichiometry, and pH/pOH calculations.",
    parameters: {
      type: "OBJECT",
      properties: {
        action: { type: "STRING", enum: ["molar_mass", "balance_equation", "ph_calc", "stoichiometry"] },
        formula: { type: "STRING" },
        equation: { type: "STRING" },
        hConcentration: { type: "NUMBER" },
        ohConcentration: { type: "NUMBER" },
        givenMassGrams: { type: "NUMBER" },
        givenMolarMass: { type: "NUMBER" },
        targetMolarMass: { type: "NUMBER" }
      },
      required: ["action"]
    }
  },
  {
    name: "code_exec",
    description: "Run short JavaScript or Python code in a secure sandbox for algorithmic steps or verification.",
    parameters: {
      type: "OBJECT",
      properties: {
        language: { type: "STRING", enum: ["javascript", "python"] },
        code: { type: "STRING", description: "Code snippet" }
      },
      required: ["code"]
    }
  },
  {
    name: "retrieve_syllabus",
    description: "Retrieve approved WAEC/JAMB syllabus objectives, verified lesson notes, and marking scheme guidelines.",
    parameters: {
      type: "OBJECT",
      properties: {
        query: { type: "STRING", description: "Topic to retrieve" },
        subject: { type: "STRING" }
      },
      required: ["query"]
    }
  },
  {
    name: "draw_diagram",
    description: "Produce SVG diagram specifications for geometric figures, electrical circuits, or chemical apparatus.",
    parameters: {
      type: "OBJECT",
      properties: {
        family: { type: "STRING", enum: ["GEOMETRY_CIRCLE", "PHYSICS_CIRCUIT", "CHEMISTRY_MOLECULE", "BIOLOGY_CELL", "TECHNICAL_DRAWING"] },
        title: { type: "STRING" }
      },
      required: ["family", "title"]
    }
  },
  {
    name: "reread_image_region",
    description: "Re-read a cropped high-resolution region of the uploaded exam diagram when labels or exponents are ambiguous.",
    parameters: {
      type: "OBJECT",
      properties: {
        regionBox: {
          type: "OBJECT",
          properties: {
            xMinPercent: { type: "NUMBER" },
            yMinPercent: { type: "NUMBER" },
            xMaxPercent: { type: "NUMBER" },
            yMaxPercent: { type: "NUMBER" }
          },
          required: ["xMinPercent", "yMinPercent", "xMaxPercent", "yMaxPercent"]
        },
        focusQuery: { type: "STRING" }
      },
      required: ["regionBox", "focusQuery"]
    }
  }
];
