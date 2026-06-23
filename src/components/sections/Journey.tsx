"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { journey, profile } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Journey() {
  return (
    <section id="experience" className="border-y border-[var(--line)] bg-[var(--section)] py-16 sm:py-20">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
        <div>
          <SectionHeader eyebrow="Experience" title="My professional journey." text="Experience that shaped how I approach quality, collaboration, and reliable delivery." />
          <a href={profile.resume} download className="secondary-button mt-7 w-fit">
            Resume PDF <Download size={16} />
          </a>
        </div>

        <div>
          {journey.map((item, index) => (
            <motion.article
              key={`${item.year}-${item.role}`}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="relative grid gap-3 border-l border-[var(--line-strong)] pb-10 pl-7 last:pb-0 sm:grid-cols-[130px_1fr] sm:gap-7"
            >
              <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-[var(--section)] bg-[var(--accent)]" />
              <p className="text-xs font-semibold text-[var(--accent)]">{item.year}</p>
              <div>
                <h3 className="font-heading text-lg font-semibold text-[var(--text)]">{item.role}</h3>
                <p className="mt-1 text-sm font-medium text-[var(--muted)]">{item.company}</p>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{item.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
