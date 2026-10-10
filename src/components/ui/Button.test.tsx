import * as React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Button } from "./Button";

describe("Button Component", () => {
  it("renders with default primary variant and text", () => {
    render(<Button>Get Started</Button>);
    const button = screen.getByRole("button", { name: /Get Started/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-brand-blue-600");
    expect(button).toHaveClass("text-white");
  });

  it("renders AI violet variant", () => {
    render(<Button variant="ai">Ask AI Assistant</Button>);
    const button = screen.getByRole("button", { name: /Ask AI Assistant/i });
    expect(button).toHaveClass("bg-service-ai-600");
  });

  it("renders Tutor teal variant", () => {
    render(<Button variant="tutor">Book Tutor</Button>);
    const button = screen.getByRole("button", { name: /Book Tutor/i });
    expect(button).toHaveClass("bg-service-tutor-700");
  });

  it("disables button and shows loader when isLoading is true", () => {
    render(<Button isLoading>Processing</Button>);
    const button = screen.getByRole("button", { name: /Processing/i });
    expect(button).toBeDisabled();
  });
});
