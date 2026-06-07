"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import { reveal, stagger } from "@/lib/motion";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function TechStack() {
  return (
    <section id="skills" className="mx-auto w-[min(100%-2rem,1280px)] py-24 sm:w-[min(100%-3rem,1280px)]">
      <SectionHeader
        eyebrow="Tech Section"
        title="A stack that feels wired together."
        text="Animated tech tiles with the same rhythm as the project gallery, so the whole site feels like one system."
      />

      <motion.div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        {skills.map((skill, index) => (
          <motion.div key={skill.title} variants={reveal} transition={{ duration: 0.45, delay: index * 0.01 }} whileHover={{ y: -6, scale: 1.015 }} className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-4 shadow-[0_14px_45px_rgba(0,0,0,0.10)] backdrop-blur-xl transition hover:border-[color-mix(in_srgb,var(--accent)_40%,transparent)]">
            <div className="flex items-center justify-between gap-3">
              <i className={`${skill.icon} text-3xl`} />
              <span className="rounded-full border border-[var(--line)] px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--faint)]">{skill.group}</span>
            </div>
            <p className="mt-5 text-sm font-semibold text-[var(--text)]">{skill.title}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
