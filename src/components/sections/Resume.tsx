"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Brain, Cloud, Users } from "lucide-react";

const highlights = [
  {
    icon: <Brain size={20} className="text-[#4A7C59]" />,
    title: "AI Foundations Certified",
    desc: "Outskill 14-day program — hands-on with 15+ AI platforms",
  },
  {
    icon: <Zap size={20} className="text-[#4A7C59]" />,
    title: "Automation Builder",
    desc: "Built production workflows with Zapier, Lyzr, and SuperJoin",
  },
  {
    icon: <Cloud size={20} className="text-[#4A7C59]" />,
    title: "Cloud AI Practitioner",
    desc: "Deployed models and pipelines on Azure, GCP, and AWS",
  },
  {
    icon: <Users size={20} className="text-[#4A7C59]" />,
    title: "Business-Oriented",
    desc: "Focus on ROI-driven AI integrations that non-technical teams can use",
  },
];

export default function Resume() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="resume" className="py-24 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center" ref={ref}>
        <motion.p
          className="text-xs font-medium text-[#C9A84C] mb-2 uppercase tracking-[0.2em]"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Resume
        </motion.p>
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-[#F0EBE0] mb-4 italic"
          style={{ fontFamily: "var(--font-display, Playfair Display, serif)" }}
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          Experience & Credentials
        </motion.h2>
        <motion.p
          className="text-[#9A9080] mb-10 leading-[1.8]"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.16 }}
        >
          Transitioning professional with a strong foundation in AI tooling, automation, and
          cloud-based AI deployment. Currently building a project portfolio that demonstrates
          real-world AI application across industries.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-left"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.24 }}
        >
          {highlights.map((h, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-4 rounded-[12px] bg-[#162418] border border-[rgba(201,168,76,0.10)]"
            >
              <div className="mt-0.5 shrink-0">{h.icon}</div>
              <div>
                <p className="text-sm font-semibold text-[#F0EBE0] mb-0.5">{h.title}</p>
                <p className="text-xs text-[#9A9080]">{h.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
