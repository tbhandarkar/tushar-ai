import { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  glow?: boolean;
}

function Card({ glow = false, className = "", children, ...props }: CardProps) {
  return (
    <div
      className={`
        bg-[#162418] border border-[rgba(201,168,76,0.10)] rounded-[12px] p-6
        transition-all duration-300
        ${glow ? "hover:border-[rgba(201,168,76,0.30)] hover:shadow-[0_0_24px_rgba(74,124,89,0.10)]" : ""}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}

export { Card };
