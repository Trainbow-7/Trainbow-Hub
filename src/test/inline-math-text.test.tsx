import { describe, it, expect } from "vitest";
import * as React from "react";
import { render } from "@testing-library/react";
import { InlineMathText } from "@/components/ui/InlineMathText";

describe("InlineMathText Typography & KaTeX Rendering", () => {
  it("renders plain text without dollar delimiters cleanly", () => {
    const { container } = render(<InlineMathText text="Fractions & Decimals Operations" />);
    expect(container.textContent).toBe("Fractions & Decimals Operations");
    expect(container.querySelector(".katex")).toBeNull();
  });

  it("renders inline math ($cm^2$, $cm^3$) with publication-grade KaTeX typography", () => {
    const { container } = render(
      <InlineMathText text="Omitting units in mensuration ($\text{cm}^2$ for area, $\text{cm}^3$ for volume)" />
    );
    expect(container.querySelectorAll(".katex").length).toBe(2);
    expect(container.textContent).toContain("Omitting units in mensuration");
  });

  it("renders vector magnitude |v| = sqrt(x^2 + y^2) with KaTeX typography", () => {
    const { container } = render(
      <InlineMathText text="Magnitude $|\mathbf{v}| = \sqrt{x^2 + y^2}$" />
    );
    const katexEl = container.querySelector(".katex");
    expect(katexEl).not.toBeNull();
    expect(container.textContent).toContain("Magnitude");
  });

  it("renders area scale factor k^2 with proper power representation", () => {
    const { container } = render(
      <InlineMathText text="Area scale factor $k^2$" />
    );
    const katexEl = container.querySelector(".katex");
    expect(katexEl).not.toBeNull();
    expect(container.textContent).toContain("Area scale factor");
  });

  it("renders power rule d/dx(x^n) = n*x^(n-1)", () => {
    const { container } = render(
      <InlineMathText text="Power rule $\frac{d}{dx}(x^n) = n x^{n-1}$" />
    );
    const katexEl = container.querySelector(".katex");
    expect(katexEl).not.toBeNull();
    expect(container.textContent).toContain("Power rule");
  });

  it("renders compound interest formula A = P(1+r/n)^nt", () => {
    const { container } = render(
      <InlineMathText text="Compound interest formula $A = P\left(1 + \frac{r}{n}\right)^{nt}$" />
    );
    const katexEl = container.querySelector(".katex");
    expect(katexEl).not.toBeNull();
  });

  it("renders distance and midpoint formulas correctly", () => {
    const { container } = render(
      <div>
        <InlineMathText text="Distance between two points $d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$" />
        <InlineMathText text="Midpoint coordinates $\left(\frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2}\right)$" />
      </div>
    );
    const katexEls = container.querySelectorAll(".katex");
    expect(katexEls.length).toBe(2);
  });

  it("auto-formats unescaped math expressions when autoFormatUnescaped is true", () => {
    const { container } = render(
      <InlineMathText text="Area scale factor k^2 with units cm^2" autoFormatUnescaped={true} />
    );
    const katexEls = container.querySelectorAll(".katex");
    expect(katexEls.length).toBeGreaterThanOrEqual(1);
  });

  it("renders theta (and tetha) and alpha symbols using correct mathematical KaTeX typography", () => {
    // 1. Unescaped Greek words
    const { container: c1 } = render(
      <InlineMathText text="Quadrant 2: theta = 180 - alpha; Quadrant 3: theta = 180 + alpha; Quadrant 4: theta = 360 - alpha" />
    );
    expect(c1.querySelectorAll(".katex").length).toBe(3);
    expect(c1.textContent).toContain("θ");
    expect(c1.textContent).toContain("α");

    // 2. Trig quadrant formulas with theta
    const { container: c2 } = render(
      <InlineMathText text="cos(180 - theta) = -cos(theta); sin(180 - theta) = sin(theta)" />
    );
    expect(c2.querySelectorAll(".katex").length).toBe(2);
    expect(c2.textContent).toContain("θ");

    // 3. Typo variant 'tetha'
    const { container: c3 } = render(
      <InlineMathText text="Find angle tetha in range 0 to 360" />
    );
    expect(c3.querySelectorAll(".katex").length).toBe(1);
    expect(c3.textContent).toContain("θ");

    // 4. Explicit LaTeX delimiters
    const { container: c4 } = render(
      <InlineMathText text="Quadrant 2: $\theta = 180^\circ - \alpha$" />
    );
    expect(c4.querySelectorAll(".katex").length).toBe(1);
    expect(c4.textContent).toContain("θ");
    expect(c4.textContent).toContain("α");
  });
});
