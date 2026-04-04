import type { HTMLAttributes } from "react";
import { cn } from "./cn";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "solid" | "outline";
}

export function Badge({ className, variant = "solid", ...props }: BadgeProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-semibold transition";
  const variantStyle =
    variant === "outline"
      ? "border border-slate-200 bg-white text-slate-900 dark:border-slate-700 dark:bg-transparent dark:text-slate-50"
      : "bg-slate-900/90 text-white dark:bg-white/10 dark:text-white";

  return <span className={cn(base, variantStyle, className)} {...props} />;
}
