"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";
import { reveal, stagger } from "@/lib/motion";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ProjectGallery() {
  return (
    <section id="projects" className="border-y border-[var(--line)] bg-[color-mix(in_srgb,var(--surface)_45%,transparent)] py-24">
      <div className="mx-auto w-[min(100%-2rem,1280px)] sm:w-[min(100%-3rem,1280px)]">
        <SectionHeader
          eyebrow="Gallery"
          title="Project gallery with matching motion."
          text="Existing project screenshots stay visible, with cleaner card structure, tech tags, and hover animation."
        />

        <motion.div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}>
          {projects.map((project, index) => (
            <motion.a key={project.title} href={project.link} target="_blank" rel="noreferrer" variants={reveal} transition={{ duration: 0.55, delay: index * 0.03 }} whileHover={{ y: -7 }} className={`group overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--surface)] shadow-[0_18px_55px_rgba(0,0,0,0.14)] backdrop-blur-xl ${index === 0 ? "md:col-span-2" : ""}`}>
              <div className="relative h-64 overflow-hidden bg-black sm:h-72" style={{ position: "relative" }}>
                <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/18 to-black/5" />
                <div className="absolute left-4 top-4 rounded-full border border-white/25 bg-black/45 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md">{project.status}</div>
                <div className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/10 text-white opacity-0 backdrop-blur-md transition group-hover:opacity-100">
                  <ArrowUpRight size={17} />
                </div>
              </div>

              <div className="min-h-64 bg-[color-mix(in_srgb,var(--bg)_38%,transparent)] p-5">
                <p className="brand-font text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)]">{project.category}</p>
                <h3 className="brand-font mt-3 max-w-lg text-2xl font-semibold leading-tight text-[var(--text)]">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full border border-[color-mix(in_srgb,var(--accent-2)_28%,transparent)] bg-[color-mix(in_srgb,var(--accent-2)_10%,transparent)] px-3 py-1 text-xs font-semibold text-[var(--accent-2)]">{item}</span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
