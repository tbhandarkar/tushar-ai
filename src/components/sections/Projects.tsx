"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { projects } from "@/data/projects";

function ProjectRow({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const imageLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: 0.05 }}
      className={`flex flex-col ${imageLeft ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-10 md:gap-16`}
    >
      {/* Image */}
      <div className="w-full md:flex-1 min-w-0 flex justify-center px-4 md:px-6">
        <div className="relative group max-w-[680px] w-full">
          <div
            className="absolute -inset-3 rounded-[20px] opacity-0 group-hover:opacity-60 transition-opacity duration-500"
            style={{
              background: "radial-gradient(ellipse at center, rgba(74,124,89,0.3) 0%, transparent 70%)",
              filter: "blur(16px)",
            }}
          />
          <div
            className="relative rounded-[14px] overflow-hidden border border-[rgba(201,168,76,0.14)] transition-all duration-300 group-hover:border-[rgba(201,168,76,0.30)]"
            style={{ boxShadow: "0 16px 48px rgba(0,0,0,0.45)" }}
          >
            <Image
              src={project.image}
              alt={project.title}
              width={680}
              height={440}
              className="w-full h-[260px] sm:h-[320px] md:h-[420px] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to top, rgba(13,26,15,0.5) 0%, transparent 55%)",
              }}
            />
          </div>
        </div>
      </div>

      {/* Text */}
      <div className="w-full md:flex-1 min-w-0 flex flex-col items-center justify-center text-center gap-4 px-4 md:px-6 py-4">
        <p className="text-xs font-medium text-[#C9A84C] uppercase tracking-[0.2em]">
          {project.category}
        </p>

        <h3
          className="text-2xl sm:text-3xl font-bold text-[#F0EBE0] leading-tight italic"
          style={{ fontFamily: "var(--font-display, Playfair Display, serif)" }}
        >
          {project.title}
        </h3>

        <div className="w-24 h-px bg-gradient-to-r from-transparent via-[rgba(201,168,76,0.4)] to-transparent" />

        <p className="text-[#9A9080] leading-[1.85] text-base w-full max-w-[520px]">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 justify-center">
          {project.tools.map((tool) => (
            <Badge key={tool} variant="muted">{tool}</Badge>
          ))}
        </div>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[#9A9080] hover:text-[#C9A84C] transition-colors group/link mt-1"
          >
            <ExternalLink size={15} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            View Live Project
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section heading */}
        <div ref={ref} className="mb-16 text-center">
          <motion.p
            className="text-xs font-medium text-[#C9A84C] mb-2 uppercase tracking-[0.2em]"
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Work
          </motion.p>
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-[#F0EBE0] italic"
            style={{ fontFamily: "var(--font-display, Playfair Display, serif)" }}
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            Project Case Studies
          </motion.h2>
        </div>

        <div className="flex flex-col gap-28">
          {projects.map((project, i) => (
            <ProjectRow key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
