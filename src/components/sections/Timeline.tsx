"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { timelineNodes } from "@/data/timeline";
import { CheckCircle2, Circle } from "lucide-react";

function TimelineNode({ node, index }: { node: typeof timelineNodes[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className="relative flex gap-6 md:gap-8"
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <div className="flex flex-col items-center shrink-0">
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center z-10 ${
            node.completed
              ? "bg-[#4A7C59] text-[#F0EBE0]"
              : "bg-[#162418] border border-[rgba(201,168,76,0.18)] text-[#9A9080]"
          }`}
        >
          {node.completed ? <CheckCircle2 size={16} /> : <Circle size={16} />}
        </div>
        <div className="flex-1 w-px bg-[rgba(201,168,76,0.10)] mt-2" />
      </div>

      <div className="pb-12 flex-1">
        <span className="text-xs font-medium text-[#C9A84C] uppercase tracking-[0.18em]">
          {node.label}
        </span>
        <h3
          className="text-lg font-semibold text-[#F0EBE0] mt-1 mb-2 italic"
          style={{ fontFamily: "var(--font-display, Playfair Display, serif)" }}
        >
          {node.title}
        </h3>
        <p className="text-sm text-[#9A9080] leading-[1.8] mb-4">{node.description}</p>
        <div className="flex flex-wrap gap-2">
          {node.tools.map((tool) => (
            <Badge key={tool} variant={node.completed ? "accent" : "muted"}>
              {tool}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Timeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="journey" className="py-24 px-4 sm:px-6 bg-[#162418]/50">
      <div className="max-w-3xl mx-auto" ref={ref}>
        <motion.p
          className="text-xs font-medium text-[#C9A84C] mb-2 uppercase tracking-[0.2em]"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          My Journey
        </motion.p>
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-[#F0EBE0] mb-12 italic"
          style={{ fontFamily: "var(--font-display, Playfair Display, serif)" }}
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          6-Month AI Transition
          <br />
          <span className="text-[#4A7C59] not-italic">Timeline</span>
        </motion.h2>

        <div className="relative">
          {timelineNodes.map((node, i) => (
            <TimelineNode key={node.month} node={node} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
