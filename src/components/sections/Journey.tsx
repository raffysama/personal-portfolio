"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { journey, profile } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Journey() {
  return (
    <section id="journey" className="mx-auto w-[min(100%-2rem,1280px)] py-24 sm:w-[min(100%-3rem,1280px)]">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeader
          eyebrow="Journey"
          title="Professional timeline."
          text="A compact view of the experience behind the portfolio and production work."
        />
        <a href={profile.resume} download className="inline-flex w-fit items-center justify-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-5 py-3 text-sm font-semibold text-[var(--text)] transition hover:-translate-y-0.5 hover:border-[color-mix(in_srgb,var(--accent)_45%,transparent)]">
          <Download size={17} /> Download resume
        </a>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {journey.map((item, index) => (
          <motion.article
            key={item.year}
            className="rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-5 shadow-[0_14px_45px_rgba(0,0,0,0.10)] backdrop-blur-xl"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <p className="brand-font text-xs font-bold uppercase tracking-[0.18em] text-amber-300">{item.year}</p>
            <h3 className="brand-font mt-4 text-xl font-semibold text-[var(--text)]">{item.role}</h3>
            <strong className="mt-1 block text-sm font-semibold text-[var(--accent)]">{item.company}</strong>
            <span className="mt-4 block text-sm leading-6 text-[var(--muted)]">{item.description}</span>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
