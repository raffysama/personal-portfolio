"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Code2, GitBranch, Images, Menu, Send, X } from "lucide-react";
import { navItems } from "@/data/portfolio";
import { scrollToSection } from "@/lib/scroll";
import { ThemeMode, ThemeToggle } from "@/components/ui/ThemeToggle";

const mobileNavIcons = {
  skills: Code2,
  projects: Images,
  journey: GitBranch,
  contact: Send,
};

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
            className="group relative grid h-10 w-10 place-items-center overflow-hidden rounded-xl border border-[color-mix(in_srgb,var(--accent)_28%,var(--line))] bg-[color-mix(in_srgb,var(--surface-strong)_68%,transparent)] text-[var(--text)] shadow-[0_10px_30px_rgba(0,0,0,0.16)] transition hover:border-[var(--accent)] lg:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <span className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,color-mix(in_srgb,var(--accent)_24%,transparent),transparent_56%)] opacity-80" />
            <Menu size={20} className="relative" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div className="pointer-events-auto fixed inset-0 z-[60] lg:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <button className="absolute inset-0 bg-black/62 backdrop-blur-sm" onClick={() => setMenuOpen(false)} aria-label="Close menu backdrop" />
            <motion.aside
              className="absolute bottom-0 right-0 top-0 w-[min(90vw,420px)] overflow-hidden border-l border-[var(--line)] bg-[color-mix(in_srgb,var(--bg)_94%,transparent)] shadow-[0_30px_120px_rgba(0,0,0,0.5)] backdrop-blur-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 230 }}
            >
              <div className="absolute inset-0 bg-[linear-gradient(color-mix(in_srgb,var(--line)_45%,transparent)_1px,transparent_1px),linear-gradient(90deg,color-mix(in_srgb,var(--line)_45%,transparent)_1px,transparent_1px)] bg-[size:34px_34px] opacity-25" />
              <div className="absolute -right-16 top-10 h-44 w-44 rounded-full bg-[color-mix(in_srgb,var(--accent)_16%,transparent)] blur-3xl" />
              <div className="absolute bottom-12 left-8 h-36 w-36 rounded-full bg-[color-mix(in_srgb,var(--accent-2)_12%,transparent)] blur-3xl" />

              <div className="relative flex h-full flex-col p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <a
                    href="#top"
                    onClick={(event) => {
                      scrollToSection(event, "top");
                      setMenuOpen(false);
                    }}
                    className="inline-flex items-center gap-3 rounded-2xl border border-[var(--line)] bg-[color-mix(in_srgb,var(--surface)_82%,transparent)] px-3 py-2"
                  >
                    <span className="brand-font grid h-10 w-10 place-items-center rounded-xl border border-[color-mix(in_srgb,var(--accent)_42%,transparent)] bg-[color-mix(in_srgb,var(--accent)_14%,transparent)] text-sm font-bold text-[var(--text)]">
                      R
                    </span>
                    <span>
                      <span className="brand-font block text-sm font-bold text-[var(--text)]">Raffy</span>
                      <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--faint)]">Frontend</span>
                    </span>
                  </a>

                  <button className="grid h-11 w-11 place-items-center rounded-2xl border border-[var(--line)] bg-[var(--surface)] text-[var(--text)] transition hover:border-[var(--accent)]" onClick={() => setMenuOpen(false)} aria-label="Close menu">
                    <X size={19} />
                  </button>
                </div>

                <div className="mt-8 rounded-[28px] border border-[var(--line)] bg-[color-mix(in_srgb,var(--surface)_76%,transparent)] p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                  {navItems.map((item, index) => {
                    const isActive = activeSection === item.href;
                    const Icon = mobileNavIcons[item.href as keyof typeof mobileNavIcons] ?? Code2;

                    return (
                      <a
                        key={item.href}
                        href={`#${item.href}`}
                        onClick={(event) => {
                          scrollToSection(event, item.href);
                          setMenuOpen(false);
                        }}
                        aria-current={isActive ? "true" : undefined}
                        className={`group relative flex items-center gap-3 rounded-3xl border px-3 py-3.5 transition ${
                          isActive
                            ? "border-[color-mix(in_srgb,var(--accent)_38%,transparent)] bg-[color-mix(in_srgb,var(--accent)_13%,var(--surface-strong))] text-[var(--text)] shadow-[0_14px_38px_color-mix(in_srgb,var(--accent)_10%,transparent)]"
                            : "border-transparent text-[var(--muted)] hover:border-[var(--line)] hover:bg-[var(--surface)] hover:text-[var(--text)]"
                        }`}
                      >
                        <span className={`grid h-11 w-11 place-items-center rounded-2xl border transition ${isActive ? "border-[color-mix(in_srgb,var(--accent)_42%,transparent)] bg-[color-mix(in_srgb,var(--accent)_16%,transparent)] text-[var(--accent)]" : "border-[var(--line)] bg-[color-mix(in_srgb,var(--bg)_32%,transparent)] text-[var(--faint)] group-hover:text-[var(--accent)]"}`}>
                          <Icon size={18} />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="brand-font block text-base font-bold">{item.label}</span>
                          <span className="mt-0.5 block text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--faint)]">0{index + 1}</span>
                        </span>
                        <span className={`h-2.5 w-2.5 rounded-full transition ${isActive ? "bg-[var(--accent)] shadow-[0_0_18px_var(--accent)]" : "bg-[var(--line)]"}`} />
                      </a>
                    );
                  })}
                </div>

                <div className="mt-auto rounded-[24px] border border-[var(--line)] bg-[color-mix(in_srgb,var(--surface)_70%,transparent)] p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="brand-font text-sm font-bold text-[var(--text)]">{theme === "dark" ? "Dark mode" : "Light mode"}</p>
                      <p className="mt-1 text-xs font-medium text-[var(--faint)]">Theme active</p>
                    </div>
                    <ThemeToggle theme={theme} onToggle={onThemeToggle} />
                  </div>
                </div>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
