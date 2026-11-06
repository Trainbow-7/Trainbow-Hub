"use client";

import * as React from "react";
import { InlineMathText } from "@/components/ui/InlineMathText";

interface MathInputHelperProps {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

export function MathInputHelper({
  value,
  onChange,
  placeholder = "Type your answer or use math symbols below...",
  disabled = false,
}: MathInputHelperProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const insertSymbol = (symbol: string) => {
    if (disabled) return;
    const input = inputRef.current;
    if (!input) {
      onChange(value + symbol);
      return;
    }

    const start = input.selectionStart || value.length;
    const end = input.selectionEnd || value.length;
    const newValue = value.substring(0, start) + symbol + value.substring(end);
    onChange(newValue);

    // Restore cursor position after symbol
    setTimeout(() => {
      input.focus();
      input.setSelectionRange(start + symbol.length, start + symbol.length);
    }, 10);
  };

  const SYMBOLS = [
    { label: "x²", insert: "^2", title: "Square" },
    { label: "xⁿ", insert: "^", title: "Exponent" },
    { label: "√x", insert: "sqrt(", title: "Square root" },
    { label: "a/b", insert: "/", title: "Fraction" },
    { label: "π", insert: "pi", title: "Pi" },
    { label: "θ", insert: "theta", title: "Theta" },
    { label: "±", insert: "+-", title: "Plus-minus" },
    { label: "≤", insert: "<=", title: "Less than or equal" },
    { label: "≥", insert: ">=", title: "Greater than or equal" },
    { label: "°", insert: " deg", title: "Degrees" },
    { label: "( )", insert: "()", title: "Parentheses" },
  ];

  return (
    <div className="space-y-2 w-full">
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-neutral-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-blue-500 font-mono text-neutral-slate-900 bg-white disabled:bg-neutral-slate-50"
          aria-label="Mathematical answer input"
        />
      </div>

      {/* Symbol Toolbar */}
      <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-neutral-slate-100 rounded-lg border border-neutral-slate-200" role="toolbar" aria-label="Math symbol keypad">
        {SYMBOLS.map((sym) => (
          <button
            key={sym.label}
            type="button"
            onClick={() => insertSymbol(sym.insert)}
            disabled={disabled}
            title={sym.title}
            className="px-2.5 py-1 text-xs font-semibold rounded bg-white text-neutral-slate-800 border border-neutral-slate-200 hover:bg-brand-blue-50 hover:border-brand-blue-300 hover:text-brand-blue-700 transition-colors active:scale-95 disabled:opacity-50"
          >
            {sym.label}
          </button>
        ))}
        <button
          type="button"
          onClick={() => onChange("")}
          disabled={disabled || !value}
          title="Clear input"
          className="ml-auto px-2 py-1 text-xs font-medium text-neutral-slate-500 hover:text-status-red-700 hover:bg-white rounded transition-colors"
        >
          Clear
        </button>
      </div>

      {/* Live KaTeX Rendered Preview */}
      {value.trim().length > 0 && (
        <div className="p-2.5 rounded-lg bg-brand-blue-50/50 border border-brand-blue-100 text-xs text-neutral-slate-800 flex items-center gap-2">
          <span className="font-semibold text-brand-blue-700 uppercase tracking-wider text-[10px]">Preview:</span>
          <div className="font-medium text-sm">
            <InlineMathText text={`$${value}$`} />
          </div>
        </div>
      )}
    </div>
  );
}

