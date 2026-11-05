"use client";

import * as React from "react";
import {
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  ChevronLeft,
  Search,
  Paperclip,
  Send,
  Play,
  Pause,
  ExternalLink,
  Copy,
  Download,
  Check,
  AlertCircle,
  Loader2,
  Eye,
  EyeOff,
  ArrowLeft,
  ArrowRight,
  Volume2,
} from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Trainbow HUB — Central Functional Icon Registry
 * 
 * In accordance with Part 1 of the Design System specification:
 * - Decorative icons, colored tiles, and emoji are removed across the entire product.
 * - Universal functional controls are centralized here with consistent stroke, scale, and accessibility.
 * - Supports UI_ICONS=minimal (default) and UI_ICONS=none.
 */

export type IconMode = "minimal" | "none";

export function getIconMode(): IconMode {
  if (typeof process !== "undefined") {
    const mode = process.env.NEXT_PUBLIC_UI_ICONS || process.env.UI_ICONS;
    if (mode === "none") return "none";
  }
  return "minimal";
}

export interface FunctionalIconProps extends React.SVGAttributes<SVGElement> {
  size?: "sm" | "md" | "lg";
  className?: string;
  fallbackText?: string;
}

const sizeMap = {
  sm: "h-3.5 w-3.5",
  md: "h-4 w-4",
  lg: "h-5 w-5",
};

function createFunctionalIcon(
  Glyph: React.ComponentType<any>,
  defaultText: string
) {
  return function FunctionalIcon({
    size = "md",
    className,
    fallbackText = defaultText,
    ...props
  }: FunctionalIconProps) {
    const isNone = getIconMode() === "none";

    if (isNone) {
      return (
        <span
          className={cn(
            "text-xs font-medium tracking-tight select-none text-current inline-block",
            className
          )}
          aria-hidden={props["aria-hidden"] ?? true}
        >
          {fallbackText}
        </span>
      );
    }

    return (
      <Glyph
        className={cn(sizeMap[size], "shrink-0 stroke-[2] text-current", className)}
        strokeWidth={2}
        aria-hidden={props["aria-hidden"] ?? true}
        {...(props as any)}
      />
    );
  };
}

export const MenuIcon = createFunctionalIcon(Menu, "Menu");
export const CloseIcon = createFunctionalIcon(X, "Close");
export const ChevronDownIcon = createFunctionalIcon(ChevronDown, "▾");
export const ChevronUpIcon = createFunctionalIcon(ChevronUp, "▴");
export const ChevronRightIcon = createFunctionalIcon(ChevronRight, "›");
export const ChevronLeftIcon = createFunctionalIcon(ChevronLeft, "‹");
export const SearchIcon = createFunctionalIcon(Search, "Search");
export const AttachIcon = createFunctionalIcon(Paperclip, "Attach");
export const SendIcon = createFunctionalIcon(Send, "Send");
export const PlayIcon = createFunctionalIcon(Play, "Play");
export const PauseIcon = createFunctionalIcon(Pause, "Pause");
export const ExternalLinkIcon = createFunctionalIcon(ExternalLink, "↗");
export const CopyIcon = createFunctionalIcon(Copy, "Copy");
export const DownloadIcon = createFunctionalIcon(Download, "Download");
export const CheckIcon = createFunctionalIcon(Check, "✓");
export const AlertIcon = createFunctionalIcon(AlertCircle, "!");
export const LoaderIcon = createFunctionalIcon(Loader2, "Loading...");
export const EyeIcon = createFunctionalIcon(Eye, "Show");
export const EyeOffIcon = createFunctionalIcon(EyeOff, "Hide");
export const ArrowLeftIcon = createFunctionalIcon(ArrowLeft, "←");
export const ArrowRightIcon = createFunctionalIcon(ArrowRight, "→");
export const VolumeIcon = createFunctionalIcon(Volume2, "Audio");
