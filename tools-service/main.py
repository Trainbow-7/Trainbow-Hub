import os
import io
import sys
import ast
import time
import math
from typing import List, Optional, Any, Dict
from fastapi import FastAPI, Header, HTTPException, Depends
from pydantic import BaseModel, Field

TOOLS_SECRET = os.getenv("TOOLS_SERVICE_SECRET", "trainbow_tools_secret_dev")

app = FastAPI(
    title="Trainbow HUB Python Tools Microservice",
    description="High-precision CAS, numerical calculus, chemistry, and sandboxed computation service",
    version="1.0.0"
)

# Optional dynamic imports
try:
    import sympy
    from sympy import symbols, Eq, solve, simplify, factor, expand, diff, integrate, Matrix, N
    from sympy.parsing.sympy_parser import parse_expr, standard_transformations, implicit_multiplication_application
    SYMPY_AVAILABLE = True
except ImportError:
    SYMPY_AVAILABLE = False

try:
    import numpy as np
    import scipy.stats as stats
    SCIPY_AVAILABLE = True
except ImportError:
    SCIPY_AVAILABLE = False

try:
    import pint
    ureg = pint.UnitRegistry()
    PINT_AVAILABLE = True
except ImportError:
    PINT_AVAILABLE = False

try:
    import chempy
    from chempy import balance_stoichiometry, Substance
    CHEMPY_AVAILABLE = True
except ImportError:
    CHEMPY_AVAILABLE = False


def verify_secret(x_tools_secret: Optional[str] = Header(None)):
    if TOOLS_SECRET and x_tools_secret != TOOLS_SECRET:
        raise HTTPException(status_code=401, detail="Unauthorized: Invalid tools secret")


@app.get("/health")
def health():
    return {
        "status": "healthy",
        "service": "Trainbow Tools Service",
        "libraries": {
            "sympy": getattr(sympy, "__version__", None) if SYMPY_AVAILABLE else "not_installed",
            "numpy": getattr(np, "__version__", None) if SCIPY_AVAILABLE else "not_installed",
            "scipy": getattr(stats, "__version__", None) if SCIPY_AVAILABLE else "not_installed",
            "pint": getattr(pint, "__version__", None) if PINT_AVAILABLE else "not_installed",
            "chempy": getattr(chempy, "__version__", None) if CHEMPY_AVAILABLE else "not_installed",
        }
    }


# Models
class SolveRequest(BaseModel):
    equation: str
    variable: str = "x"
    substitute_check: Optional[List[str]] = None


class CalcRequest(BaseModel):
    expression: str
    precision: int = 10
    sig_figs: Optional[int] = None


class StatsRequest(BaseModel):
    data: List[float]
    regression_y: Optional[List[float]] = None


class UnitRequest(BaseModel):
    value: float
    from_unit: str
    to_unit: str


class ChemistryRequest(BaseModel):
    action: str  # "balance" | "molar_mass" | "ph"
    equation: Optional[str] = None
    formula: Optional[str] = None
    h_concentration: Optional[float] = None
    oh_concentration: Optional[float] = None


class CodeExecRequest(BaseModel):
    code: str
    language: str = "python"


@app.post("/solve", dependencies=[Depends(verify_secret)])
def solve_endpoint(req: SolveRequest):
    if not SYMPY_AVAILABLE:
        raise HTTPException(status_code=503, detail="SymPy is not installed")

    try:
        transformations = standard_transformations + (implicit_multiplication_application,)
        var = symbols(req.variable)

        # Parse equation (supports "lhs = rhs" or single expression "lhs - rhs")
        if "=" in req.equation:
            parts = req.equation.split("=")
            lhs = parse_expr(parts[0].strip(), transformations=transformations)
            rhs = parse_expr(parts[1].strip(), transformations=transformations)
            eq = Eq(lhs, rhs)
            expr_to_solve = lhs - rhs
        else:
            lhs = parse_expr(req.equation.strip(), transformations=transformations)
            rhs = 0
            eq = Eq(lhs, 0)
            expr_to_solve = lhs

        solutions = solve(eq, var)
        str_solutions = [str(s) for s in solutions]

        # Substitution check
        sub_results = []
        all_passed = True
        if req.substitute_check:
            for cand in req.substitute_check:
                try:
                    cand_val = parse_expr(cand.strip(), transformations=transformations)
                    lhs_eval = lhs.subs(var, cand_val)
                    rhs_eval = rhs.subs(var, cand_val) if isinstance(rhs, sympy.Expr) else rhs
                    diff_val = simplify(lhs_eval - rhs_eval)
                    is_match = bool(diff_val == 0 or abs(float(N(diff_val))) < 1e-9)
                    sub_results.append({
                        "candidate": cand,
                        "lhs_evaluated": str(lhs_eval),
                        "rhs_evaluated": str(rhs_eval),
                        "is_valid": is_match
                    })
                    if not is_match:
                        all_passed = False
                except Exception as ex:
                    sub_results.append({
                        "candidate": cand,
                        "error": str(ex),
                        "is_valid": False
                    })
                    all_passed = False

        simplified_expr = str(simplify(expr_to_solve))
        factored_expr = str(factor(expr_to_solve))

        return {
            "success": True,
            "variable": req.variable,
            "roots": str_solutions,
            "simplified": simplified_expr,
            "factored": factored_expr,
            "substitution_check": sub_results if req.substitute_check else None,
            "all_substitutions_valid": all_passed if req.substitute_check else None
        }
    except Exception as e:
        return {"success": False, "error": str(e)}


@app.post("/calc", dependencies=[Depends(verify_secret)])
def calc_endpoint(req: CalcRequest):
    if not SYMPY_AVAILABLE:
        raise HTTPException(status_code=503, detail="SymPy is not installed")

    try:
        transformations = standard_transformations + (implicit_multiplication_application,)
        expr = parse_expr(req.expression, transformations=transformations)
        evaluated = N(expr, req.precision)
        numeric_val = float(evaluated)

        sig_fig_str = None
        if req.sig_figs is not None and req.sig_figs > 0:
            sig_fig_str = f"{numeric_val:.{req.sig_figs}g}"

        return {
            "success": True,
            "expression": req.expression,
            "result": str(evaluated),
            "float_value": numeric_val,
            "sig_figs_formatted": sig_fig_str
        }
    except Exception as e:
        return {"success": False, "error": str(e)}


@app.post("/stats", dependencies=[Depends(verify_secret)])
def stats_endpoint(req: StatsRequest):
    if not SCIPY_AVAILABLE:
        raise HTTPException(status_code=503, detail="SciPy is not installed")

    try:
        arr = np.array(req.data, dtype=float)
        mean_val = float(np.mean(arr))
        median_val = float(np.median(arr))
        variance_val = float(np.var(arr, ddof=1)) if len(arr) > 1 else 0.0
        std_val = float(np.std(arr, ddof=1)) if len(arr) > 1 else 0.0

        mode_res = stats.mode(arr, keepdims=True)
        mode_val = float(mode_res.mode[0]) if len(mode_res.mode) > 0 else mean_val

        regression = None
        if req.regression_y and len(req.regression_y) == len(req.data):
            arr_y = np.array(req.regression_y, dtype=float)
            slope, intercept, r_val, p_val, std_err = stats.linregress(arr, arr_y)
            regression = {
                "slope": float(slope),
                "intercept": float(intercept),
                "r": float(r_val),
                "r_squared": float(r_val ** 2),
                "p_value": float(p_val),
                "std_err": float(std_err)
            }

        return {
            "success": True,
            "count": len(arr),
            "mean": mean_val,
            "median": median_val,
            "mode": mode_val,
            "variance": variance_val,
            "std_dev": std_val,
            "min": float(np.min(arr)),
            "max": float(np.max(arr)),
            "regression": regression
        }
    except Exception as e:
        return {"success": False, "error": str(e)}


@app.post("/units", dependencies=[Depends(verify_secret)])
def units_endpoint(req: UnitRequest):
    if not PINT_AVAILABLE:
        raise HTTPException(status_code=503, detail="Pint is not installed")

    try:
        qty = req.value * ureg(req.from_unit)
        converted = qty.to(req.to_unit)
        return {
            "success": True,
            "original": f"{req.value} {req.from_unit}",
            "converted_value": float(converted.magnitude),
            "converted_unit": str(converted.units),
            "dimensionality": str(qty.dimensionality)
        }
    except Exception as e:
        return {"success": False, "error": str(e)}


@app.post("/chemistry", dependencies=[Depends(verify_secret)])
def chemistry_endpoint(req: ChemistryRequest):
    try:
        if req.action == "balance":
            if not CHEMPY_AVAILABLE:
                raise HTTPException(status_code=503, detail="ChemPy is not installed")
            # Parse equation like "C3H8 + O2 -> CO2 + H2O"
            eq_str = req.equation.replace("->", "=").replace("-->", "=")
            reactants_str, products_str = eq_str.split("=")
            reac = [r.strip() for r in reactants_str.split("+") if r.strip()]
            prod = [p.strip() for p in products_str.split("+") if p.strip()]

            reac_bal, prod_bal = balance_stoichiometry(set(reac), set(prod))
            reac_part = " + ".join([f"{v if v > 1 else ''}{k}" for k, v in reac_bal.items()])
            prod_part = " + ".join([f"{v if v > 1 else ''}{k}" for k, v in prod_bal.items()])
            return {
                "success": True,
                "balanced_equation": f"{reac_part} -> {prod_part}",
                "reactants": reac_bal,
                "products": prod_bal
            }

        elif req.action == "molar_mass":
            if not CHEMPY_AVAILABLE:
                raise HTTPException(status_code=503, detail="ChemPy is not installed")
            sub = Substance.from_formula(req.formula.strip())
            return {
                "success": True,
                "formula": req.formula,
                "molar_mass": float(sub.mass),
                "unit": "g/mol"
            }

        elif req.action == "ph":
            # pH calculations
            if req.h_concentration is not None and req.h_concentration > 0:
                ph = -math.log10(req.h_concentration)
                poh = 14.0 - ph
                oh = 10 ** (-poh)
                return {
                    "success": True,
                    "pH": round(ph, 3),
                    "pOH": round(poh, 3),
                    "H_conc": req.h_concentration,
                    "OH_conc": oh
                }
            elif req.oh_concentration is not None and req.oh_concentration > 0:
                poh = -math.log10(req.oh_concentration)
                ph = 14.0 - poh
                h = 10 ** (-ph)
                return {
                    "success": True,
                    "pH": round(ph, 3),
                    "pOH": round(poh, 3),
                    "H_conc": h,
                    "OH_conc": req.oh_concentration
                }
            else:
                return {"success": False, "error": "Provide either h_concentration or oh_concentration"}
        else:
            return {"success": False, "error": f"Unknown chemistry action: {req.action}"}
    except Exception as e:
        return {"success": False, "error": str(e)}


BANNED_AST_NODES = (
    ast.Import,
    ast.ImportFrom,
)

BANNED_CALL_NAMES = {
    "open", "eval", "exec", "__import__", "compile", "globals", "locals", "getattr", "setattr", "delattr"
}

ALLOWED_MODULES = {"math", "statistics", "itertools", "random", "re"}


@app.post("/run_code", dependencies=[Depends(verify_secret)])
def run_code_endpoint(req: CodeExecRequest):
    if req.language.lower() != "python":
        return {"success": False, "error": f"Only python is supported in tools-service, received: {req.language}"}

    # Static AST safety analysis
    try:
        tree = ast.parse(req.code)
    except SyntaxError as se:
        return {"success": False, "error": f"Syntax error: {se}"}

    for node in ast.walk(tree):
        if isinstance(node, (ast.Import, ast.ImportFrom)):
            names = [alias.name.split(".")[0] for alias in node.names]
            if isinstance(node, ast.ImportFrom) and node.module:
                names.append(node.module.split(".")[0])
            for name in names:
                if name not in ALLOWED_MODULES:
                    return {
                        "success": False,
                        "error": f"Security violation: import of module '{name}' is forbidden in sandbox."
                    }
        if isinstance(node, ast.Call):
            if isinstance(node.func, ast.Name) and node.func.id in BANNED_CALL_NAMES:
                return {
                    "success": False,
                    "error": f"Security violation: call to function '{node.func.id}' is forbidden."
                }

    # Execute in restricted environment
    stdout_buf = io.StringIO()
    old_stdout = sys.stdout

    safe_globals = {
        "__builtins__": {
            "abs": abs, "min": min, "max": max, "sum": sum, "len": len, "range": range,
            "enumerate": enumerate, "zip": zip, "print": print, "round": round,
            "int": int, "float": float, "str": str, "bool": bool, "list": list,
            "dict": dict, "set": set, "tuple": tuple, "True": True, "False": False, "None": None,
        },
        "math": math,
    }

    start_time = time.time()
    try:
        sys.stdout = stdout_buf
        compiled = compile(tree, filename="<sandbox>", mode="exec")
        exec(compiled, safe_globals)
        duration_ms = (time.time() - start_time) * 1000

        output = stdout_buf.getvalue()
        if len(output) > 4096:
            output = output[:4096] + "\n...[truncated output]"

        return {
            "success": True,
            "output": output,
            "duration_ms": round(duration_ms, 2)
        }
    except Exception as e:
        return {
            "success": False,
            "error": f"Runtime error: {str(e)}"
        }
    finally:
        sys.stdout = old_stdout
