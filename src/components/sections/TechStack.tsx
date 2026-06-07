"use client";

import { Terminal } from "lucide-react";
import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import { reveal, stagger } from "@/lib/motion";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function TechStack() {
  return (
    <section id="skills" className="mx-auto w-[min(100%-2rem,1240px)] py-20 sm:w-[min(100%-3rem,1240px)] sm:py-24">
      <SectionHeader
        eyebrow="Tech Stack"
        title="Tools I use to build and ship."
        text="A practical stack for responsive interfaces, dashboards, API-driven features, and production deployment."
      />

      <motion.div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        {skills.map((skill, index) => (
          <motion.div
            key={skill.title}
            variants={reveal}
            transition={{ duration: 0.4, delay: index * 0.01 }}
            whileHover={{ y: -5 }}
            className="group rounded-[22px] border border-[var(--line)] bg-[var(--surface)] p-4 shadow-[0_14px_45px_rgba(0,0,0,0.10)] backdrop-blur-xl transition hover:border-[color-mix(in_srgb,var(--accent)_38%,transparent)]"
          >
            <div className="flex items-start justify-between gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl border border-[var(--line)] bg-[color-mix(in_srgb,var(--surface-strong)_70%,transparent)]">
                {skill.title === "Git Bash" ? <Terminal size={24} className="text-[var(--accent-2)]" /> : <i className={`${skill.icon} text-2xl`} />}
              </span>
              <span className="rounded-full border border-[var(--line)] px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--faint)]">
                {skill.group}
              </span>
            </div>
            <p className="mt-5 text-sm font-bold text-[var(--text)]">{skill.title}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
