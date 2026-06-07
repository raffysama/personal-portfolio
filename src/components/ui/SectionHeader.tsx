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
      className="max-w-3xl"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55 }}
    >
      <p className="brand-font text-xs font-bold uppercase tracking-[0.22em] text-[var(--accent)]">{eyebrow}</p>
      <h2 className="brand-font mt-3 text-3xl font-bold leading-tight text-[var(--text)] md:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-[var(--muted)]">{text}</p>
    </motion.div>
  );
}
