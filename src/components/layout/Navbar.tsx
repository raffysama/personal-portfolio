"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/portfolio";
import { scrollToSection } from "@/lib/scroll";
import { ThemeMode, ThemeToggle } from "@/components/ui/ThemeToggle";

type NavbarProps = {
  menuOpen: boolean;
  scrolled: boolean;
  theme: ThemeMode;
  activeSection: string;
  setMenuOpen: (open: boolean) => void;
  onThemeToggle: () => void;
};

export function Navbar({ menuOpen, scrolled, theme, activeSection, setMenuOpen, onThemeToggle }: NavbarProps) {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        className={`pointer-events-auto mx-auto grid max-w-6xl grid-cols-[auto_1fr_auto] items-center gap-3 rounded-2xl border px-3 py-2 shadow-[0_18px_70px_rgba(0,0,0,0.18)] backdrop-blur-2xl transition-all duration-300 ${
          scrolled
            ? "border-[var(--line)] bg-[color-mix(in_srgb,var(--bg)_88%,transparent)]"
            : "border-[var(--line)] bg-[color-mix(in_srgb,var(--surface)_78%,transparent)]"
        }`}
      >
        <a
          href="#top"
          onClick={(event) => scrollToSection(event, "top")}
          className="group inline-flex items-center gap-2 rounded-xl px-1.5 py-1 transition hover:bg-[var(--surface)]"
        >
          <span className="brand-font grid h-9 w-9 place-items-center rounded-xl border border-[color-mix(in_srgb,var(--accent)_45%,transparent)] bg-[color-mix(in_srgb,var(--accent)_14%,transparent)] text-sm font-bold text-[var(--text)] shadow-[0_0_26px_color-mix(in_srgb,var(--accent)_15%,transparent)]">
            R
          </span>
          <span className="brand-font hidden text-sm font-semibold text-[var(--text)] sm:block">Raffy</span>
        </a>

        <div className="hidden justify-center lg:flex">
          <div className="inline-flex items-center gap-1 rounded-xl border border-[var(--line)] bg-[color-mix(in_srgb,var(--bg)_28%,transparent)] p-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.href}
                  href={`#${item.href}`}
                  onClick={(event) => scrollToSection(event, item.href)}
                  aria-current={isActive ? "true" : undefined}
                  className={`brand-font rounded-lg px-3.5 py-2 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-[color-mix(in_srgb,var(--accent)_16%,var(--surface-strong))] text-[var(--text)] shadow-[inset_0_0_0_1px_color-mix(in_srgb,var(--accent)_26%,transparent)]"
                      : "text-[var(--muted)] hover:bg-[var(--surface)] hover:text-[var(--text)]"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>

        <div className="flex items-center justify-end gap-2">
          <ThemeToggle theme={theme} onToggle={onThemeToggle} />
          <button
            className="grid h-10 w-10 place-items-center rounded-xl border border-[var(--line)] bg-[var(--surface)] text-[var(--text)] lg:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div className="pointer-events-auto fixed inset-0 z-[60] lg:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <button className="absolute inset-0 bg-black/55" onClick={() => setMenuOpen(false)} aria-label="Close menu backdrop" />
            <motion.aside
              className="absolute right-0 top-0 h-screen w-[min(86vw,380px)] border-l border-[var(--line)] bg-[var(--bg)] p-5 shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 24, stiffness: 220 }}
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)]" />
              <div className="flex items-center justify-between pt-2">
                <span className="brand-font text-sm font-semibold uppercase tracking-[0.24em] text-[var(--text)]">Menu</span>
                <button className="grid h-10 w-10 place-items-center rounded-xl border border-[var(--line)] bg-[var(--surface)]" onClick={() => setMenuOpen(false)} aria-label="Close menu">
                  <X size={18} />
                </button>
              </div>

              <div className="mt-8 grid gap-3">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href;
                  return (
                    <a
                      key={item.href}
                      href={`#${item.href}`}
                      onClick={(event) => {
                        scrollToSection(event, item.href);
                        setMenuOpen(false);
                      }}
                      aria-current={isActive ? "true" : undefined}
                      className={`relative rounded-xl border px-4 py-4 font-medium transition ${
                        isActive
                          ? "border-[color-mix(in_srgb,var(--accent)_42%,transparent)] bg-[color-mix(in_srgb,var(--accent)_13%,var(--surface))] text-[var(--text)] before:absolute before:left-2 before:top-1/2 before:h-5 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-gradient-to-b before:from-[var(--accent)] before:to-[var(--accent-2)]"
                          : "border-[var(--line)] bg-[var(--surface)] text-[var(--muted)] hover:text-[var(--text)]"
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
