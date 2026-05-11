"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Card } from "@/components/ui/Card";
import { skillCategories } from "@/data/skills";

function SkillCategoryCard({ category, index }: { category: typeof skillCategories[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full">
        <h3
          className="text-base font-semibold text-[#F0EBE0] mb-5 italic"
          style={{ fontFamily: "var(--font-display, Playfair Display, serif)" }}
        >
          {category.category}
        </h3>
        <div className="space-y-4">
          {category.skills.map((skill) => (
            <ProgressBar key={skill.name} label={skill.name} value={skill.level} />
          ))}
        </div>
      </Card>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 bg-[#162418]/50">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.p
          className="text-xs font-medium text-[#C9A84C] mb-2 uppercase tracking-[0.2em]"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.p>
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-[#F0EBE0] mb-12 italic"
          style={{ fontFamily: "var(--font-display, Playfair Display, serif)" }}
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          Skills Matrix
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, i) => (
            <SkillCategoryCard key={cat.category} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
