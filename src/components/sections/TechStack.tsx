"use client";

import { Terminal } from "lucide-react";
import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import { reveal, stagger } from "@/lib/motion";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function TechStack() {
  return (
    <section id="skills" className="border-b border-[var(--line)] py-16 sm:py-20">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
        <SectionHeader
          eyebrow="Skills"
          title="A practical full-stack toolkit."
          text="Technologies I use across interface development, application logic, data, and deployment."
        />

        <motion.div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--line)] sm:grid-cols-3" variants={stagger} initial={false} whileInView="visible" viewport={{ once: true, amount: 0.15 }}>
          {skills.map((skill) => (
            <motion.div key={skill.title} variants={reveal} className="group flex items-center gap-3 bg-[var(--surface)] p-4 transition-colors hover:bg-[var(--surface-hover)]">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[var(--accent-soft)]">
                {skill.title === "Git Bash" ? <Terminal size={20} className="text-[var(--accent)]" /> : null}
                {skill.title === "Next.js" ? <span className="grid h-5 w-5 place-items-center rounded-full bg-[var(--text)] text-[8px] font-bold text-[var(--bg)]">N</span> : null}
                {skill.title !== "Git Bash" && skill.title !== "Next.js" ? <i className={`${skill.icon} text-xl`} /> : null}
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-[var(--text)]">{skill.title}</p>
                <p className="mt-0.5 text-[11px] text-[var(--faint)]">{skill.group}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
