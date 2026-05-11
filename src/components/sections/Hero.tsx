"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, type: "tween" } },
};

export default function Hero() {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden"
      aria-label="Hero"
    >
      {/* Organic leaf-vein grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(240,235,224,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(240,235,224,0.6) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Gold top divider line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(201,168,76,0.3)] to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 pt-24 pb-16 text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center gap-7"
        >
          {/* Eyebrow */}
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium bg-[rgba(201,168,76,0.08)] text-[#C9A84C] border border-[rgba(201,168,76,0.20)] tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4A7C59] animate-pulse" />
              AI Practitioner · Open to Opportunities
            </span>
          </motion.div>

          {/* Headline — editorial serif */}
          <motion.h1
            variants={item}
            className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight text-[#F0EBE0] leading-[1.05] italic"
            style={{ fontFamily: "var(--font-display, Playfair Display, serif)" }}
          >
            Tushar
            <br />
            <span className="text-[#4A7C59] not-italic">Bhandarkar</span>
          </motion.h1>

          {/* Ornamental divider */}
          <motion.div variants={item} className="flex items-center gap-3 w-48">
            <div className="flex-1 h-px bg-[rgba(201,168,76,0.3)]" />
            <span className="text-[#C9A84C] text-xs">✦</span>
            <div className="flex-1 h-px bg-[rgba(201,168,76,0.3)]" />
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={item}
            className="max-w-xl text-lg sm:text-xl text-[#9A9080] leading-relaxed"
          >
            Building AI solutions —{" "}
            <span className="text-[#F0EBE0] italic">one tool, one workflow,</span>{" "}
            one automation at a time.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-3 justify-center">
            <Button variant="primary" size="lg" onClick={scrollToProjects}>
              View Projects
              <ArrowDown size={16} />
            </Button>
          </motion.div>

          {/* Social links */}
          <motion.div variants={item} className="flex items-center gap-5 pt-1">
            <a href="https://www.linkedin.com/in/tushar-bhandarkar-20a7b31b/" target="_blank" rel="noopener noreferrer"
              className="text-[#9A9080] hover:text-[#C9A84C] transition-colors" aria-label="LinkedIn">
              <LinkedinIcon size={20} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"
              className="text-[#9A9080] hover:text-[#F0EBE0] transition-colors" aria-label="GitHub">
              <GithubIcon size={20} />
            </a>
            <a href="mailto:tsbhandarkar@gmail.com"
              className="text-[#9A9080] hover:text-[#F0EBE0] transition-colors" aria-label="Email">
              <Mail size={20} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="text-[#9A9080]"
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.div>

      {/* Bottom gold divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(201,168,76,0.2)] to-transparent" />
    </section>
  );
}
