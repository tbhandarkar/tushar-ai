import { HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "accent" | "muted" | "gold";
}

function Badge({ variant = "muted", className = "", children, ...props }: BadgeProps) {
  const variants = {
    accent: "bg-[#4A7C59]/15 text-[#7ab890] border border-[#4A7C59]/30",
    muted:  "bg-[rgba(201,168,76,0.07)] text-[#9A9080] border border-[rgba(201,168,76,0.12)]",
    gold:   "bg-[rgba(201,168,76,0.12)] text-[#C9A84C] border border-[rgba(201,168,76,0.25)]",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-[9999px] text-xs font-medium ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}

export { Badge };
