# Trainbow HUB — Output Format Contract & UI Layout Specification

This document captures the invariant output-format contract for all academic AI responses across Trainbow HUB (WAEC SSCE, NECO, JAMB UTME, Cambridge IGCSE, BECE).
Under **RULE 1**, every response from any underlying LLM provider (Google Gemini, OpenAI, Anthropic Claude, or Deterministic Engine) **MUST adhere strictly** to this format.

The visual renderer, components, CSS classes, typography, and section order **remain completely unchanged**. Only the intelligence behind the answers upgrades.

---

## 1. Top Badges & Header Bar
Each assistant message card in the workspace (`SocraticWorkspace.tsx`) renders the following top section:

1. **Hint-Level Badge** (`data-testid="hint-level-badge"`):
   - For Hint 1: `bg-amber-100 text-amber-900` — label: `Hint 1: Concept`
   - For Hint 2: `bg-blue-100 text-blue-900` — label: `Hint 2: Formula`
   - For Hint 3: `bg-purple-100 text-purple-900` — label: `Hint 3: Breakdown`
   - For Full Solution: `bg-status-green-600/10 text-status-green-700` — label: `Full Solution`
2. **AI-Generated Badge** (`data-testid="ai-generated-badge"`):
   - `AI-Generated Guidance` (`bg-purple-50 text-service-ai-600 border border-purple-200`)
3. **Escalated Badge** (when `msg.isEscalated` is true):
   - `Escalated to Tutor` (`bg-teal-50 text-service-tutor-700 border border-teal-200`)

---

## 2. Text Output Format by Mode

### A. Direct Full Solution Mode (`hintLevel === "FULL_SOLUTION"`)
When generating a full solution, the Markdown content generated and rendered into `FormattedMathContent` must follow this exact section order:

```markdown
[AI-Generated Mathematical Guidance — Verified by Trainbow Hub Engine (<Method>)]

**Curriculum Topic / Alignment:** <Subject> (<Curriculum>)

### Full Worked Solution & Verification ✅

---

#### Step 1:
**<Step Title / Objective>**
<Step Statement & Derivation with LaTeX $...$ or $$...$$>
*Reason:* <Governing theorem, law of equality, or physical principle>
*Result:* $<Intermediate Value or Equation>$

#### Step 2:
...

---

### Final Answer:
**<Unambiguous final answer with correct SI units or degree symbols>**

---
💡 **Examiner Tip for <Curriculum>:**
<Question-specific marking guide advice or Method M1/Accuracy A1 tip. NO generic command-word filler!>
```

#### Verification Notice Card
Rendered directly below the message content if `msg.verification.isValid === true`:
- Container: `data-testid="math-verification-card"`
- Header: `Verified (<Method>)` with Green Check icon
- Subfields:
  - `Equation: <eq>` (if applicable)
  - `Check: <stepCheck>`
  - `Computed Roots: <roots>` (if applicable)
  - `Notes: <notes>`

If unverified or offline, the badge says `[AI-Generated Academic Guidance — Solver Error]` or `Not independently verified` and never claims certainty.

---

### B. Hint-First Mode (`hintLevel === "HINT_1" | "HINT_2" | "HINT_3"`)

#### Hint Level 1: Conceptual Clue 💡
- **Header:** `[AI-Generated Mathematical Guidance — Verified by Trainbow Hub Engine (<Method>)]` (if verified)
- **Curriculum Line:** `**Curriculum Topic / Alignment:** <Subject> (<Curriculum>)`
- **Heading:** `### Hint Level 1: Conceptual Clue 💡`
- **Sections:**
  1. `**Core Concept & Governing Rule:** <Rule/Theorem>`
  2. `**Conceptual Insight:** <Guidance>`
- **Socratic CTA:** `**Socratic Question for You:** <Prompt question>`
- **Controls Bar (`data-testid="hint-advancement-controls"`):**
  - Button `Advance to Hint 2 (Formula)` (`data-testid="advance-hint-2-btn"`)
  - Button `Reveal Full Solution` (`data-testid="reveal-solution-btn"`)
- **Crucial Rule:** The final answer MUST NEVER be disclosed in Hint 1.

#### Hint Level 2: Formula & Identity 📐
- **Heading:** `### Hint Level 2: Formula & Identity 📐`
- **Sections:**
  1. `**Applicable Theorem / Law:** <Formula>`
  2. `**Step-by-Step Setup:** <Setup equations>`
- **Controls Bar:**
  - Button `Advance to Hint 3 (Steps)` (`data-testid="advance-hint-3-btn"`)
  - Button `Reveal Full Solution` (`data-testid="reveal-solution-btn"`)

#### Hint Level 3: Step-by-Step Breakdown 🔍
- **Heading:** `### Hint Level 3: Step-by-Step Breakdown 🔍`
- **Steps:** Intermediate breakdown without revealing final line.
- **Controls Bar:**
  - Button `Reveal Full Solution` (`data-testid="reveal-solution-btn"`)

---

## 3. Action Bar (Present on EVERY Assistant Turn)
Rendered at the bottom of the card:
1. **Helpful Feedback Widget** (`data-testid="turn-feedback-widget"`):
   - Thumbs Up (`data-testid="feedback-helpful"`)
   - Thumbs Down (`data-testid="feedback-unhelpful"`)
   - Flag / Report Error (`data-testid="feedback-report"`)
2. **Escalate to Human Tutor** (`data-testid="escalate-tutor-btn"`):
   - 1-tap transition sending current thread context directly to live human tutor directory.
3. **Report Wrong Answer** (`data-testid="report-wrong-answer-btn"`):
   - Routes problematic solution to academic audit queue.

---

## 4. Prohibited Generic Filler Phrases (Quality Gate)
Under no circumstances may any model return or render:
- "Identify Core Concepts"
- "Deduce and Explain"
- "Analysis and verified solution provided"
- "Ensure your answers directly address the command words"
- "Work through the required derivation, analysis, or proof systematically"
- "Apply curriculum framework"
- "Deterministic analytical engine"
- "Canned response"

Any response containing these phrases fails validation and is rejected by the Quality Gate.
