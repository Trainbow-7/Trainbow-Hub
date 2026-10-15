import * as React from "react";
import { cn } from "@/lib/utils";

export interface SliderProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  min: number;
  max: number;
  step?: number;
  value: number;
  onValueChange?: (val: number) => void;
  formatValue?: (val: number) => string;
}

export const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  (
    {
      className,
      label,
      min,
      max,
      step = 500,
      value,
      onValueChange,
      formatValue,
      id,
      ...props
    },
    ref
  ) => {
    const sliderId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : "slider");
    const percentage = Math.min(100, Math.max(0, ((value - min) / (max - min)) * 100));

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const num = Number(e.target.value);
      if (onValueChange) {
        onValueChange(num);
      }
    };

    return (
      <div className="w-full space-y-2 text-left">
        <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-neutral-slate-700">
          {label && <label htmlFor={sliderId}>{label}</label>}
          <span className="font-heading font-bold text-brand-blue-600 normal-case text-sm tracking-normal">
            {formatValue ? formatValue(value) : value}
          </span>
        </div>
        <div className="relative flex items-center select-none touch-none w-full h-6">
          <input
            id={sliderId}
            ref={ref}
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={handleChange}
            className={cn(
              "w-full h-2 bg-neutral-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-600 focus-visible:ring-offset-2",
              className
            )}
            style={{
              background: `linear-gradient(to right, #2563EB 0%, #2563EB ${percentage}%, #E2E8F0 ${percentage}%, #E2E8F0 100%)`,
            }}
            {...props}
          />
        </div>
        <div className="flex justify-between text-[11px] text-neutral-slate-500 font-medium">
          <span>{formatValue ? formatValue(min) : min}</span>
          <span>{formatValue ? formatValue(max) : max}</span>
        </div>
      </div>
    );
  }
);
Slider.displayName = "Slider";
