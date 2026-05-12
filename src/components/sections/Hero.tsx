"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, type: "tween" } },
};

const photoVariant: Variants = {
  hidden: { opacity: 0, x: -32 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, type: "tween" } },
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
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(240,235,224,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(240,235,224,0.6) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(201,168,76,0.3)] to-transparent" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-16">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">

          {/* ── Left: Photo ── */}
          <motion.div
            variants={photoVariant}
            initial="hidden"
            animate="show"
            className="w-full md:w-[45%] flex justify-center md:justify-start flex-shrink-0"
          >
            <div className="relative">
              {/* Ambient glow behind photo */}
              <div
                className="absolute -inset-4 rounded-[20px] opacity-40"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(74,124,89,0.35) 0%, transparent 70%)",
                  filter: "blur(20px)",
                }}
              />
              <div
                className="relative rounded-[16px] overflow-hidden border border-[rgba(201,168,76,0.18)]"
                style={{
                  boxShadow:
                    "0 0 0 1px rgba(74,124,89,0.15), 0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(74,124,89,0.08)",
                }}
              >
                <Image
                  src="/images/tushar.jpg"
                  alt="Tushar Bhandarkar"
                  width={480}
                  height={560}
                  className="w-full h-[320px] sm:h-[400px] md:h-[480px] object-cover object-top"
                  priority
                />
                {/* AI glow overlay on photo */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(ellipse at 40% 60%, rgba(74,124,89,0.18) 0%, transparent 65%), linear-gradient(to top, rgba(13,26,15,0.45) 0%, transparent 50%)",
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* ── Right: Text ── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="w-full md:w-[55%] flex flex-col items-center md:items-start gap-6 text-center md:text-left"
          >
            {/* Eyebrow */}
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium bg-[rgba(201,168,76,0.08)] text-[#C9A84C] border border-[rgba(201,168,76,0.20)] tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4A7C59] animate-pulse" />
                AI Practitioner · Open to Opportunities
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={item}
              className="text-5xl sm:text-6xl font-bold tracking-tight text-[#F0EBE0] leading-[1.05] italic"
              style={{ fontFamily: "var(--font-display, Playfair Display, serif)" }}
            >
              Tushar
              <br />
              <span className="text-[#4A7C59] not-italic">Bhandarkar</span>
            </motion.h1>

            {/* Ornamental divider */}
            <motion.div variants={item} className="flex items-center gap-3 w-40 mx-auto md:mx-0">
              <div className="flex-1 h-px bg-[rgba(201,168,76,0.3)]" />
              <span className="text-[#C9A84C] text-xs">✦</span>
              <div className="flex-1 h-px bg-[rgba(201,168,76,0.3)]" />
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={item}
              className="text-[#9A9080] leading-[1.85] text-base max-w-md"
            >
              I build AI-powered tools and workflows — connecting LLMs, automation platforms, and
              cloud services into production-ready systems. After completing Outskill&apos;s AI
              Foundations Program, I&apos;ve shipped three real projects and I&apos;m targeting{" "}
              <span className="text-[#F0EBE0] italic">AI Engineer</span> and{" "}
              <span className="text-[#F0EBE0] italic">AI Solutions Specialist</span> roles.
            </motion.p>

            {/* Code snippet */}
            <motion.div variants={item} className="w-full max-w-sm mx-auto md:mx-0">
              <pre
                className="rounded-[10px] bg-[#0D1A0F] border border-[rgba(201,168,76,0.12)] px-5 py-4 text-xs leading-[1.9] overflow-x-auto text-left"
                style={{ fontFamily: "ui-monospace, 'Cascadia Code', 'Fira Code', monospace" }}
              >
                <code>
                  <span className="text-[#C9A84C]">const</span>
                  <span className="text-[#F0EBE0]"> tushar </span>
                  <span className="text-[#C9A84C]">=</span>
                  <span className="text-[#F0EBE0]"> {"{"}</span>
                  {"\n"}
                  <span className="text-[#9A9080]">{"  "}focus</span>
                  <span className="text-[#F0EBE0]">:  </span>
                  <span className="text-[#4A7C59]">&quot;AI Agents &amp; Automation&quot;</span>
                  <span className="text-[#F0EBE0]">,</span>
                  {"\n"}
                  <span className="text-[#9A9080]">{"  "}stack</span>
                  <span className="text-[#F0EBE0]">:  </span>
                  <span className="text-[#F0EBE0]">[</span>
                  <span className="text-[#4A7C59]">&quot;Claude&quot;</span>
                  <span className="text-[#F0EBE0]">, </span>
                  <span className="text-[#4A7C59]">&quot;Next.js&quot;</span>
                  <span className="text-[#F0EBE0]">, </span>
                  <span className="text-[#4A7C59]">&quot;Zapier&quot;</span>
                  <span className="text-[#F0EBE0]">],</span>
                  {"\n"}
                  <span className="text-[#9A9080]">{"  "}status</span>
                  <span className="text-[#F0EBE0]">: </span>
                  <span className="text-[#4A7C59]">&quot;open_to_work ✦&quot;</span>
                  {"\n"}
                  <span className="text-[#F0EBE0]">{"}"}</span>
                  <span className="text-[#C9A84C]">;</span>
                </code>
              </pre>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap gap-3 justify-center md:justify-start">
              <Button variant="primary" size="lg" onClick={scrollToProjects}>
                View Projects
                <ArrowDown size={16} />
              </Button>
              <a
                href="https://www.linkedin.com/in/tushar-bhandarkar-20a7b31b/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[8px] border border-[rgba(201,168,76,0.20)] text-sm text-[#9A9080] hover:text-[#C9A84C] hover:border-[rgba(201,168,76,0.40)] transition-all"
              >
                <LinkedinIcon size={16} />
                LinkedIn
              </a>
            </motion.div>

            {/* Social icons */}
            <motion.div variants={item} className="flex items-center gap-5">
              <a href="https://www.linkedin.com/in/tushar-bhandarkar-20a7b31b/" target="_blank" rel="noopener noreferrer"
                className="text-[#9A9080] hover:text-[#C9A84C] transition-colors" aria-label="LinkedIn">
                <LinkedinIcon size={18} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                className="text-[#9A9080] hover:text-[#F0EBE0] transition-colors" aria-label="GitHub">
                <GithubIcon size={18} />
              </a>
              <a href="mailto:tsbhandarkar@gmail.com"
                className="text-[#9A9080] hover:text-[#F0EBE0] transition-colors" aria-label="Email">
                <Mail size={18} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="text-[#9A9080]"
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(201,168,76,0.2)] to-transparent" />
    </section>
  );
}
