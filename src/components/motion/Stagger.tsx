"use client";

import * as React from "react";
import { m, type HTMLMotionProps } from "motion/react";
import { VARIANTS, MOTION_TOKENS, getMotionPreference } from "@/lib/motion";

export interface StaggerProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
  amount?: number;
}

export function Stagger({
  children,
  staggerDelay = 0.06, // 60ms between children
  className = "",
  amount = 0.2,
  ...rest
}: StaggerProps) {
  const [mounted, setMounted] = React.useState(false);
  const [policy, setPolicy] = React.useState<"full" | "reduced" | "off">("full");

  React.useEffect(() => {
    setMounted(true);
    setPolicy(getMotionPreference());
  }, []);

  if (!mounted || policy === "off" || policy === "reduced") {
    return (
      <div className={className} {...(rest as React.HTMLAttributes<HTMLDivElement>)}>
        {children}
      </div>
    );
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.02,
      },
    },
  };

  return (
    <m.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={containerVariants}
      className={className}
      {...rest}
    >
      {children}
    </m.div>
  );
}

export interface StaggerItemProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  index?: number;
  className?: string;
}

export function StaggerItem({
  children,
  index = 0,
  className = "",
  ...rest
}: StaggerItemProps) {
  // At most 8 children animated with stagger, subsequent children appear immediately
  if (index >= 8) {
    return (
      <div className={className} {...(rest as React.HTMLAttributes<HTMLDivElement>)}>
        {children}
      </div>
    );
  }

  return (
    <m.div
      variants={VARIANTS.fadeUp}
      transition={{
        duration: MOTION_TOKENS.duration.base,
        ease: MOTION_TOKENS.ease.entrance,
      }}
      className={className}
      {...rest}
    >
      {children}
    </m.div>
  );
}

