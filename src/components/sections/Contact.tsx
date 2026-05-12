"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { LinkedinIcon } from "@/components/ui/SocialIcons";

const EMAIL = "tsbhandarkar@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/tushar-bhandarkar-20a7b31b/";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-24 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto text-center" ref={ref}>
        <motion.p
          className="text-xs font-medium text-[#C9A84C] mb-2 uppercase tracking-[0.2em]"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Contact
        </motion.p>

        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-[#F0EBE0] mb-4 italic"
          style={{ fontFamily: "var(--font-display, Playfair Display, serif)" }}
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          Let&apos;s work together
        </motion.h2>

        <motion.p
          className="text-[#9A9080] text-base leading-relaxed mb-10"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.14 }}
        >
          Open to AI Engineer and AI Solutions Specialist roles. Reach out directly or connect on LinkedIn.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-3 justify-center"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.22 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-[8px] bg-[#162418] border border-[rgba(201,168,76,0.12)] text-sm text-[#9A9080]">
            <Mail size={15} />
            {EMAIL}
          </div>

          <Button variant="outline" size="md" onClick={() => window.open(LINKEDIN, "_blank")} aria-label="Open LinkedIn profile">
            <LinkedinIcon size={15} />
            LinkedIn
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
