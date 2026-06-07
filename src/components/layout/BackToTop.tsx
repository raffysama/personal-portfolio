"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { scrollToSection } from "@/lib/scroll";

type BackToTopProps = {
  show: boolean;
};

export function BackToTop({ show }: BackToTopProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full border border-[var(--line)] bg-[var(--surface)] text-[var(--text)] shadow-[0_18px_50px_rgba(0,0,0,0.25)] backdrop-blur-xl"
          onClick={(event) => scrollToSection(event, "top")}
          initial={{ opacity: 0, y: 18, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 18, scale: 0.92 }}
          whileHover={{ y: -3 }}
        >
          <ArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
