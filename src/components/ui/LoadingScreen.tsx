"use client";

import { motion } from "framer-motion";

export function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] grid place-items-center bg-[var(--bg)]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
    >
      <div className="relative grid h-36 w-36 place-items-center rounded-full border border-[color-mix(in_srgb,var(--accent)_24%,transparent)] bg-[var(--surface)] shadow-[0_0_60px_color-mix(in_srgb,var(--accent)_18%,transparent)] before:absolute before:inset-3 before:rounded-full before:border before:border-dashed before:border-[color-mix(in_srgb,var(--accent-2)_55%,transparent)] before:content-[''] after:absolute after:inset-7 after:rounded-full after:border after:border-dashed after:border-amber-300/45 after:content-['']">
        <span className="brand-font text-xs font-bold tracking-[0.35em] text-[var(--accent)]">RAF</span>
      </div>
    </motion.div>
  );
}
