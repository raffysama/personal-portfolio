"use client";

import { motion } from "framer-motion";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  text: string;
};

export function SectionHeader({ eyebrow, title, text }: SectionHeaderProps) {
  return (
    <motion.div
      className="max-w-2xl"
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55 }}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">{eyebrow}</p>
      <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight text-[var(--text)] sm:text-4xl">{title}</h2>
      {text ? <p className="mt-4 text-base leading-7 text-[var(--muted)]">{text}</p> : null}
    </motion.div>
  );
}
