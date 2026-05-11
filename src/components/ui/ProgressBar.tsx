"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ProgressBarProps {
  value: number;
  label?: string;
  className?: string;
}

function ProgressBar({ value, label, className = "" }: ProgressBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className={`w-full ${className}`}>
      {label && (
        <div className="flex justify-between items-center mb-1.5">
          <span className="text-sm text-[#F0EBE0]">{label}</span>
          <span className="text-xs text-[#9A9080]">{value}%</span>
        </div>
      )}
      <div className="h-1.5 w-full bg-[rgba(201,168,76,0.08)] rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-[#4A7C59] rounded-full origin-left"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

export { ProgressBar };
