"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
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
  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen, setMenuOpen]);

  const navigate = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    scrollToSection(event, id);
    setMenuOpen(false);
  };

  const mobileMenu = typeof document !== "undefined"
    ? createPortal(
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="fixed inset-0 z-[9999] isolate lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <button
                type="button"
                className="absolute inset-0 z-0 bg-black/60 backdrop-blur-sm"
                onClick={() => setMenuOpen(false)}
                aria-label="Close navigation"
              />
              <motion.aside
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 32 }}
                className="absolute inset-y-0 right-0 z-10 flex w-[min(88vw,360px)] flex-col overflow-y-auto overscroll-contain border-l border-[var(--line)] bg-[var(--bg)] p-6 shadow-2xl"
                aria-label="Mobile navigation"
              >
                <div className="flex items-start justify-between gap-4 border-b border-[var(--line)] pb-6">
                  <div>
                    <p className="font-heading text-sm font-semibold text-[var(--text)]">Raffy Gumapo</p>
                    <p className="mt-1 text-xs text-[var(--faint)]">Junior Full Stack Developer</p>
                  </div>
                  <button type="button" onClick={() => setMenuOpen(false)} className="icon-button" aria-label="Close navigation">
                    <X size={19} />
                  </button>
                </div>

                <div className="mt-5 flex flex-col">
                  {navItems.map((item, index) => {
                    const isActive = activeSection === item.href;
                    return (
                      <a
                        key={item.href}
                        href={`#${item.href}`}
                        onClick={(event) => navigate(event, item.href)}
                        aria-current={isActive ? "location" : undefined}
                        className={`flex items-center gap-4 border-b border-[var(--line)] py-4 transition-colors ${isActive ? "text-[var(--accent)]" : "text-[var(--text)] hover:text-[var(--accent)]"}`}
                      >
                        <span className="w-5 text-[11px] text-[var(--faint)]">0{index + 1}</span>
                        <span className="font-heading text-base font-medium">{item.label}</span>
                        {isActive && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />}
                      </a>
                    );
                  })}
                </div>

                <p className="mt-auto border-t border-[var(--line)] pt-5 text-xs leading-5 text-[var(--faint)]">Available for junior full stack and frontend opportunities.</p>
              </motion.aside>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )
    : null;

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-[100] border-b transition-all duration-300 ${scrolled ? "border-[var(--line)] bg-[color-mix(in_srgb,var(--bg)_92%,transparent)] backdrop-blur-xl" : "border-transparent bg-transparent"}`}>
        <nav className="section-shell flex h-20 items-center justify-between">
          <a href="#top" onClick={(event) => navigate(event, "top")} className="group" aria-label="Raffy Gumapo, home">
            <span className="block font-heading text-sm font-semibold text-[var(--text)] transition-colors group-hover:text-[var(--accent)]">Raffy Gumapo</span>
            <span className="hidden text-[11px] text-[var(--faint)] sm:block">Junior Full Stack Developer</span>
          </a>

          <div className="hidden items-center gap-5 lg:flex xl:gap-7">
            {navItems.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.href}
                  href={`#${item.href}`}
                  onClick={(event) => navigate(event, item.href)}
                  aria-current={isActive ? "location" : undefined}
                  className={`relative py-2 text-sm font-medium transition-colors ${isActive ? "text-[var(--text)]" : "text-[var(--muted)] hover:text-[var(--text)]"}`}
                >
                  {item.label}
                  <span className={`absolute inset-x-0 -bottom-0.5 h-0.5 origin-left rounded-full bg-[var(--accent)] transition-transform duration-200 ${isActive ? "scale-x-100" : "scale-x-0"}`} />
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle theme={theme} onToggle={onThemeToggle} />
            <span className="lg:hidden">
              <button type="button" onClick={() => setMenuOpen(true)} className="icon-button" aria-label="Open navigation" aria-expanded={menuOpen}>
                <Menu size={20} />
              </button>
            </span>
          </div>
        </nav>
      </header>
      {mobileMenu}
    </>
  );
}
