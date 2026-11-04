"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  src?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export function Avatar({ name, src, size = "md", className, ...props }: AvatarProps) {
  const [imgError, setImgError] = React.useState(false);

  const sizeClasses = {
    sm: "h-8 w-8 text-xs",
    md: "h-10 w-10 text-sm",
    lg: "h-12 w-12 text-base",
    xl: "h-16 w-16 text-lg",
  };

  const getInitials = (n: string) => {
    const parts = n.trim().split(" ");
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    }
    return n.slice(0, 2).toUpperCase();
  };

  // If no explicit src is provided, check if the avatar belongs to Mr Oyedeji S.T
  // This automatically displays his official photo anywhere his name is rendered.
  const resolvedSrc =
    src ||
    (name && /oyedeji/i.test(name)
      ? "/images/instructors/mr-oyedeji-st.jpg"
      : undefined);

  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center rounded-full bg-brand-blue-50 text-brand-blue-700 font-semibold ring-2 ring-white overflow-hidden shrink-0 select-none",
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {resolvedSrc && !imgError ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={resolvedSrc}
          alt={name}
          className="h-full w-full object-cover object-top"
          onError={() => setImgError(true)}
        />
      ) : (
        <span>{getInitials(name)}</span>
      )}
    </div>
  );
}
