"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Copy, Check, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { LinkedinIcon } from "@/components/ui/SocialIcons";

const EMAIL = "tsbhandarkar@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/tushar-bhandarkar-20a7b31b/";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto" ref={ref}>
        <motion.p
          className="text-xs font-medium text-[#C9A84C] mb-2 uppercase tracking-[0.2em]"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Contact
        </motion.p>
        <motion.div
          className="flex flex-wrap gap-3 mb-10"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.24 }}
        >
          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-[8px] bg-[#162418] border border-[rgba(201,168,76,0.12)] text-sm text-[#9A9080] hover:text-[#F0EBE0] hover:border-[rgba(201,168,76,0.28)] transition-all cursor-pointer"
            aria-label="Copy email address"
          >
            <Mail size={15} />
            {EMAIL}
            {copied ? <Check size={14} className="text-[#4A7C59]" /> : <Copy size={14} className="opacity-50" />}
          </button>

          <Button variant="outline" size="md" onClick={() => window.open(LINKEDIN, "_blank")} aria-label="Open LinkedIn profile">
            <LinkedinIcon size={15} />
            LinkedIn
          </Button>
        </motion.div>

        {copied && (
          <motion.div
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-4 py-2.5 bg-[#162418] border border-[rgba(201,168,76,0.25)] rounded-[8px] text-sm text-[#F0EBE0] shadow-lg"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Check size={14} className="text-[#4A7C59]" />
            Email copied to clipboard
          </motion.div>
        )}

        <motion.form
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          className="space-y-4"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.32 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-name" className="block text-xs text-[#9A9080] mb-1.5 tracking-wide">Name</label>
              <input
                id="contact-name" type="text" name="name" required placeholder="Your name"
                className="w-full px-3 py-2.5 rounded-[8px] bg-[#162418] border border-[rgba(201,168,76,0.10)] text-sm text-[#F0EBE0] placeholder:text-[#9A9080]/40 focus:outline-none focus:border-[rgba(201,168,76,0.35)] transition-colors"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-xs text-[#9A9080] mb-1.5 tracking-wide">Email</label>
              <input
                id="contact-email" type="email" name="email" required placeholder="your@email.com"
                className="w-full px-3 py-2.5 rounded-[8px] bg-[#162418] border border-[rgba(201,168,76,0.10)] text-sm text-[#F0EBE0] placeholder:text-[#9A9080]/40 focus:outline-none focus:border-[rgba(201,168,76,0.35)] transition-colors"
              />
            </div>
          </div>
          <div>
            <label htmlFor="contact-message" className="block text-xs text-[#9A9080] mb-1.5 tracking-wide">Message</label>
            <textarea
              id="contact-message" name="message" required rows={5}
              placeholder="Tell me about the opportunity or what you'd like to collaborate on..."
              className="w-full px-3 py-2.5 rounded-[8px] bg-[#162418] border border-[rgba(201,168,76,0.10)] text-sm text-[#F0EBE0] placeholder:text-[#9A9080]/40 focus:outline-none focus:border-[rgba(201,168,76,0.35)] transition-colors resize-none"
            />
          </div>
          <Button variant="primary" size="md" type="submit" className="w-full sm:w-auto">
            <Send size={15} />
            Send Message
          </Button>
        </motion.form>
      </div>
    </section>
  );
}
