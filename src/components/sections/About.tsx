"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles, Target, Zap } from "lucide-react";

const highlights = [
  {
    icon: <Sparkles size={16} className="text-[#C9A84C]" />,
    text: "Completed Outskill's 14-day AI Foundations Program",
  },
  {
    icon: <Zap size={16} className="text-[#C9A84C]" />,
    text: "Hands-on with 15+ AI tools across automation, LLMs, and cloud",
  },
  {
    icon: <Target size={16} className="text-[#C9A84C]" />,
    text: "Targeting AI Engineer & AI Solutions Specialist roles",
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.p
          className="text-xs font-medium text-[#C9A84C] mb-2 uppercase tracking-[0.2em]"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.p>
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-[#F0EBE0] mb-12 italic"
          style={{ fontFamily: "var(--font-display, Playfair Display, serif)" }}
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          Bridging the gap between
          <br />
          <span className="text-[#4A7C59] not-italic">humans and AI</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
          {/* Text */}
          <motion.div
            className="md:col-span-3 space-y-5"
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="text-[#9A9080] leading-[1.85] text-base">
              I&apos;m Tushar Bhandarkar — a professional making a deliberate transition into the
              AI industry after completing Outskill&apos;s intensive 14-day AI Foundations Program.
              My journey started with a simple observation: AI tools were transforming every
              industry, and the most valuable people weren&apos;t just the ones who could build
              models — they were the ones who could deploy them, connect them, and make them
              work for real business problems.
            </p>
            <p className="text-[#9A9080] leading-[1.85] text-base">
              During the program I gained hands-on experience with over 15 AI platforms spanning
              conversational AI (Claude, ChatGPT, Gemini), automation (Zapier, Lyzr, SuperJoin),
              model hubs (Hugging Face), and cloud AI services (Google AI Studio, Azure, AWS).
              I&apos;m now actively building projects that connect these tools into coherent,
              production-ready workflows.
            </p>
            <p className="text-[#9A9080] leading-[1.85] text-base">
              My 6-month roadmap is to deepen my expertise in agentic workflows and AI
              automation, ship real projects that demonstrate value, and land a role where I can
              help organisations integrate AI at scale.
            </p>

            <ul className="space-y-3 pt-2">
              {highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0">{h.icon}</span>
                  <span className="text-sm text-[#9A9080]">{h.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Photo placeholder */}
          <motion.div
            className="md:col-span-2 flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <div
              className="w-64 h-64 sm:w-72 sm:h-72 rounded-[16px] bg-[#162418] border border-[rgba(201,168,76,0.12)] flex flex-col items-center justify-center gap-3"
              aria-label="Profile photo placeholder"
            >
              <div className="w-16 h-16 rounded-full bg-[rgba(74,124,89,0.15)] border border-[#4A7C59]/30 flex items-center justify-center">
                <span
                  className="text-2xl font-bold text-[#4A7C59]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  TB
                </span>
              </div>
              <p className="text-xs text-[#9A9080] text-center px-4">
                Replace with your photo in the code
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
