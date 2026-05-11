"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { projects } from "@/data/projects";

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const hasImage = Boolean(project.image);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={hasImage ? "md:col-span-2 lg:col-span-3" : undefined}
    >
      {project.image ? (
        <article className="group h-full overflow-hidden rounded-[12px] border border-[rgba(201,168,76,0.10)] bg-[#162418] transition-all duration-300 hover:border-[rgba(201,168,76,0.30)] hover:shadow-[0_0_24px_rgba(74,124,89,0.10)] md:grid md:grid-cols-[0.85fr_1.15fr]">
          <div className="flex h-full flex-col p-6 md:p-7">
            <div className="flex-1">
              <div className="flex items-start justify-between gap-2 mb-3">
                <h3
                  className="text-xl font-semibold text-[#F0EBE0] leading-snug italic"
                  style={{ fontFamily: "var(--font-display, Playfair Display, serif)" }}
                >
                  {project.title}
                </h3>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-[#9A9080] hover:text-[#C9A84C] transition-colors mt-0.5"
                    aria-label={`View ${project.title}`}
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
              <p className="text-sm text-[#9A9080] leading-[1.8] mb-5">{project.description}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <Badge key={tool} variant="muted">{tool}</Badge>
              ))}
            </div>
          </div>

          <div className="relative min-h-[220px] overflow-hidden border-t border-[rgba(201,168,76,0.10)] bg-[#0D1A0F] md:border-l md:border-t-0">
            <img
              src={project.image.src}
              alt={project.image.alt}
              className="h-full min-h-[220px] w-full object-cover object-left-top opacity-95 transition duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </article>
      ) : (
        <Card glow className="h-full flex flex-col group">
          <div className="flex-1">
            <div className="flex items-start justify-between gap-2 mb-3">
              <h3
                className="text-lg font-semibold text-[#F0EBE0] leading-snug italic"
                style={{ fontFamily: "var(--font-display, Playfair Display, serif)" }}
              >
                {project.title}
              </h3>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-[#9A9080] hover:text-[#C9A84C] transition-colors mt-0.5"
                  aria-label={`View ${project.title}`}
                >
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
            <p className="text-sm text-[#9A9080] leading-[1.8] mb-5">{project.description}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <Badge key={tool} variant="muted">{tool}</Badge>
            ))}
          </div>
        </Card>
      )}
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.p
          className="text-xs font-medium text-[#C9A84C] mb-2 uppercase tracking-[0.2em]"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Work
        </motion.p>
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-[#F0EBE0] mb-12 italic"
          style={{ fontFamily: "var(--font-display, Playfair Display, serif)" }}
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          Project Case Studies
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
