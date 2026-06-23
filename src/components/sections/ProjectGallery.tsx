"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";
import { reveal, stagger } from "@/lib/motion";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ProjectGallery() {
  return (
    <section id="projects" className="section-shell py-16 sm:py-20">
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <SectionHeader
          eyebrow="Selected projects"
          title="Practical work, clearly presented."
          text="Production experience and full-stack projects built around real business and user needs."
        />
        <a href="https://github.com/raffysama" target="_blank" rel="noreferrer" className="secondary-button w-fit">
          GitHub profile <ArrowUpRight size={16} />
        </a>
      </div>

      <motion.div
        className="mt-9 grid gap-3 md:grid-cols-2"
        variants={stagger}
        initial={false}
        whileInView="visible"
        viewport={{ once: true, amount: 0.08 }}
      >
        {projects.map((project) => (
          <motion.a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            variants={reveal}
            whileHover={{ y: -2 }}
            className="group flex flex-col rounded-xl border border-[var(--line)] bg-[var(--surface)] p-5 transition-colors hover:border-[var(--line-strong)] hover:bg-[var(--surface-hover)]"
          >
            <div className="flex items-center justify-between gap-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">{project.category}</p>
              <span className="text-[11px] text-[var(--faint)]">{project.status}</span>
            </div>

            <div className="mt-4 flex items-start justify-between gap-4">
              <h3 className="font-heading text-lg font-semibold text-[var(--text)]">{project.title}</h3>
              <ArrowUpRight size={17} className="mt-0.5 shrink-0 text-[var(--faint)] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--accent)]" />
            </div>

            <p className="mt-3 flex-1 text-sm leading-6 text-[var(--muted)]">{project.description}</p>

            <div className="mt-5 flex flex-wrap gap-2 border-t border-[var(--line)] pt-4">
              {project.stack.map((item) => (
                <span key={item} className="rounded-md bg-[var(--section)] px-2 py-1 text-[11px] font-medium text-[var(--muted)]">
                  {item}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
