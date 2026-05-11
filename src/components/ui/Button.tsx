"use client";

import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost" | "gold";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className = "", children, ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4A7C59] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D1A0F] disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      primary:
        "bg-[#4A7C59] hover:bg-[#3d6b4a] text-[#F0EBE0] rounded-[8px]",
      outline:
        "border border-[rgba(201,168,76,0.25)] hover:border-[#C9A84C] text-[#F0EBE0] hover:text-[#C9A84C] rounded-[8px] bg-transparent",
      ghost:
        "text-[#9A9080] hover:text-[#F0EBE0] bg-transparent rounded-[8px]",
      gold:
        "bg-[#C9A84C] hover:bg-[#b8943d] text-[#0D1A0F] rounded-[8px] font-semibold",
    };

    const sizes = {
      sm: "text-sm px-3 py-1.5",
      md: "text-sm px-5 py-2.5",
      lg: "text-base px-7 py-3",
    };

    return (
      <button
        ref={ref}
        className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
