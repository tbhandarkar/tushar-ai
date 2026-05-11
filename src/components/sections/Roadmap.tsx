"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { timelineNodes } from "@/data/timeline";
import { CheckCircle2 } from "lucide-react";

const CURRENT_MONTH = 1;

export default function Roadmap() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="roadmap" className="py-24 px-4 sm:px-6 bg-[#162418]/50">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.p
          className="text-xs font-medium text-[#C9A84C] mb-2 uppercase tracking-[0.2em]"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Plan
        </motion.p>
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-[#F0EBE0] mb-12 italic"
          style={{ fontFamily: "var(--font-display, Playfair Display, serif)" }}
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          6-Month Roadmap
        </motion.h2>

        {/* Desktop: horizontal stepper */}
        <div className="hidden md:block">
          <div className="relative flex items-start justify-between mb-8">
            <div className="absolute top-4 left-0 right-0 h-px bg-[rgba(201,168,76,0.10)]" />
            <div
              className="absolute top-4 left-0 h-px bg-[#4A7C59] transition-all duration-1000"
              style={{ width: `${((CURRENT_MONTH - 1) / (timelineNodes.length - 1)) * 100}%` }}
            />
            {timelineNodes.map((node, i) => {
              const isCurrent = node.month === CURRENT_MONTH;
              const isDone = node.month < CURRENT_MONTH;
              return (
                <motion.div
                  key={node.month}
                  className="relative flex flex-col items-center"
                  style={{ width: `${100 / timelineNodes.length}%` }}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center z-10 text-sm font-bold
                      ${isDone ? "bg-[#4A7C59] text-[#F0EBE0]" : ""}
                      ${isCurrent ? "bg-[#4A7C59] text-[#F0EBE0] accent-pulse" : ""}
                      ${!isDone && !isCurrent ? "bg-[#162418] border border-[rgba(201,168,76,0.18)] text-[#9A9080]" : ""}
                    `}
                  >
                    {isDone ? <CheckCircle2 size={16} /> : node.month}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="flex justify-between">
            {timelineNodes.map((node, i) => {
              const isCurrent = node.month === CURRENT_MONTH;
              return (
                <motion.div
                  key={node.month}
                  className="flex flex-col items-center text-center px-1"
                  style={{ width: `${100 / timelineNodes.length}%` }}
                  initial={{ opacity: 0, y: 8 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                >
                  <span className={`text-xs font-medium mb-1 ${isCurrent ? "text-[#C9A84C]" : "text-[#9A9080]"}`}>
                    {node.label}
                  </span>
                  <p className={`text-xs leading-snug ${isCurrent ? "text-[#F0EBE0]" : "text-[#9A9080]"}`}>
                    {node.title}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile: vertical list */}
        <div className="md:hidden space-y-4">
          {timelineNodes.map((node, i) => {
            const isCurrent = node.month === CURRENT_MONTH;
            const isDone = node.month < CURRENT_MONTH;
            return (
              <motion.div
                key={node.month}
                className={`flex items-start gap-4 p-4 rounded-[12px] border ${
                  isCurrent
                    ? "bg-[#162418] border-[rgba(201,168,76,0.28)]"
                    : "bg-[#162418] border-[rgba(201,168,76,0.10)]"
                }`}
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <div
                  className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center text-sm font-bold
                    ${isDone || isCurrent ? "bg-[#4A7C59] text-[#F0EBE0]" : "bg-[rgba(201,168,76,0.06)] text-[#9A9080]"}
                    ${isCurrent ? "accent-pulse" : ""}
                  `}
                >
                  {isDone ? <CheckCircle2 size={16} /> : node.month}
                </div>
                <div>
                  <p className={`text-xs font-medium mb-0.5 ${isCurrent ? "text-[#C9A84C]" : "text-[#9A9080]"}`}>
                    {node.label}
                  </p>
                  <p className="text-sm font-semibold text-[#F0EBE0]">{node.title}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
