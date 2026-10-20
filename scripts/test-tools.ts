import { toolsProvider } from "../src/lib/ai/tools";

async function main() {
  console.log("=== TRAINBOW HUB TOOL SUITE VERIFICATION ===\n");
  let passedCount = 0;
  let totalCount = 0;

  function assert(condition: boolean, msg: string) {
    totalCount++;
    if (condition) {
      passedCount++;
      console.log(`  [PASS] ${msg}`);
    } else {
      console.error(`  [FAIL] ${msg}`);
    }
  }

  // 1. Symbolic Math: Example 13
  console.log("1. Testing Symbolic Math (Example 13: 1/(3*a-1) = 2/(a+1) - 3/8)...");
  const ex13Res = await toolsProvider.executeTool("symbolic_math", {
    action: "solve",
    equationOrExpr: "1/(3*a-1) = 2/(a+1) - 3/8",
    variable: "a",
  });
  assert(ex13Res.success, "Example 13 solved successfully");
  const roots = ex13Res.data?.roots || [];
  assert(roots.includes("3") && roots.includes("7/9"), `Roots contain 3 and 7/9: found [${roots.join(", ")}]`);
  assert(ex13Res.data?.allRootsVerified === true, "CAS substitution verification passed for all roots");

  // 2. Symbolic Math: Quadratic 2x^2 - 5x + 3 = 0
  console.log("\n2. Testing Symbolic Math (Quadratic: 2*x^2 - 5*x + 3 = 0)...");
  const quadRes = await toolsProvider.executeTool("symbolic_math", {
    action: "solve",
    equationOrExpr: "2*x^2 - 5*x + 3 = 0",
    variable: "x",
  });
  assert(quadRes.success, "Quadratic solved successfully");
  const quadRoots = quadRes.data?.roots || [];
  assert(quadRoots.includes("1") && quadRoots.includes("3/2"), `Quadratic roots contain 1 and 3/2: found [${quadRoots.join(", ")}]`);

  // 3. Geometry Check: Fig. 2.26 & PMQN
  console.log("\n3. Testing Geometry Verifier...");
  const geom226 = await toolsProvider.executeTool("geometry_check", {
    problemText: "In Fig. 2.26, QP is produced to X, angle XPS = 77°, angle PSO = 68°. Find angle PQO.",
    claimedAnswer: "35°",
  });
  assert(geom226.success && geom226.data?.calculatedAngles?.angle_PQO === 35, "Fig. 2.26 angle PQO = 35° verified");

  const geomPMQN = await toolsProvider.executeTool("geometry_check", {
    problemText: "In circle PMQN, PQ is a diameter, centre O, angle PQM = 63°. Calculate angle QNM.",
    claimedAnswer: "27°",
  });
  assert(geomPMQN.success && geomPMQN.data?.calculatedAngles?.angle_QNM === 27, "Circle PMQN angle QNM = 27° verified");

  // 4. Numeric Calc
  console.log("\n4. Testing Numeric Calc...");
  const calcRes = await toolsProvider.executeTool("numeric_calc", {
    expression: "sqrt(13^2 - 5^2)",
    precision: 10,
    significantFigures: 3,
  });
  assert(calcRes.success && Math.abs(calcRes.data?.numericValue - 12) < 1e-6, "sqrt(13^2 - 5^2) = 12 verified");

  // 5. Statistics
  console.log("\n5. Testing Statistics...");
  const statsRes = await toolsProvider.executeTool("statistics", {
    action: "describe",
    data: [10, 20, 20, 40, 50, 100],
  });
  assert(statsRes.success && statsRes.data?.mean === 40, `Mean calculated correctly: ${statsRes.data?.mean}`);
  assert(statsRes.data?.median === 30, `Median calculated correctly: ${statsRes.data?.median}`);

  // 6. Chemistry Tools
  console.log("\n6. Testing Chemistry Tools...");
  const h2so4Res = await toolsProvider.executeTool("chemistry_tools", {
    action: "molar_mass",
    formula: "H2SO4",
  });
  assert(h2so4Res.success && Math.abs(h2so4Res.data?.molarMass - 98.07) < 0.1, `H2SO4 molar mass: ${h2so4Res.data?.molarMass} g/mol`);

  const balRes = await toolsProvider.executeTool("chemistry_tools", {
    action: "balance_equation",
    equation: "C3H8 + O2 -> CO2 + H2O",
  });
  assert(balRes.success && balRes.data?.balancedEquation.includes("3 CO2"), `Propane combustion balanced: ${balRes.data?.balancedEquation}`);

  const phRes = await toolsProvider.executeTool("chemistry_tools", {
    action: "ph_calc",
    hConcentration: 0.001,
  });
  assert(phRes.success && phRes.data?.pH === 3, `pH of 0.001 M HCl = ${phRes.data?.pH}`);

  // 7. Unit Tools
  console.log("\n7. Testing Unit Conversion...");
  const unitRes = await toolsProvider.executeTool("unit_tools", {
    value: 5,
    fromUnit: "km",
    toUnit: "m",
  });
  assert(unitRes.success && unitRes.data?.convertedValue === 5000, `5 km = ${unitRes.data?.convertedValue} m`);

  // 8. Code Exec Sandbox Safety
  console.log("\n8. Testing Code Exec Sandbox Safety...");
  const codeSafe = await toolsProvider.executeTool("code_exec", {
    language: "javascript",
    code: "const fib = [1, 1, 2, 3, 5, 8]; fib.reduce((a, b) => a + b, 0);",
  });
  assert(codeSafe.success && codeSafe.data?.output === "20", `JS calculation executed: ${codeSafe.data?.output}`);

  const codeMalicious = await toolsProvider.executeTool("code_exec", {
    language: "javascript",
    code: "process.exit(1);",
  });
  assert(!codeMalicious.success, "Blocked unauthorized process access in JS sandbox");

  console.log(`\n========================================`);
  console.log(`TOOL SUITE RESULTS: ${passedCount}/${totalCount} assertions passed.`);
  console.log(`========================================\n`);

  if (passedCount !== totalCount) {
    process.exit(1);
  }
}

main().catch((err) => {
  console.error("Test execution failed:", err);
  process.exit(1);
});
