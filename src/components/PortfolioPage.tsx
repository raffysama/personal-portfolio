"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BackToTop } from "@/components/layout/BackToTop";
import { Navbar } from "@/components/layout/Navbar";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Journey } from "@/components/sections/Journey";
import { ProjectGallery } from "@/components/sections/ProjectGallery";
import { TechStack } from "@/components/sections/TechStack";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import type { ThemeMode } from "@/components/ui/ThemeToggle";

export function PortfolioPage() {
  const [booting, setBooting] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const [theme, setTheme] = useState<ThemeMode>("dark");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme") as ThemeMode | null;
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    const nextTheme = savedTheme ?? (prefersLight ? "light" : "dark");

    window.queueMicrotask(() => setTheme(nextTheme));
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    const bootTimer = window.setTimeout(() => setBooting(false), 900);
    const sectionIds = ["top", "skills", "projects", "journey", "contact"];

    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowTop(window.scrollY > 500);

      const pageBottom = document.documentElement.scrollHeight - window.innerHeight;
      const isNearBottom = window.scrollY >= pageBottom - 80;
      const viewportAnchor = window.scrollY + 140;
      const current = isNearBottom
        ? "contact"
        : sectionIds.reduce((active, id) => {
            const element = document.getElementById(id);
            if (!element) return active;
            return element.offsetTop <= viewportAnchor ? id : active;
          }, "top");

      setActiveSection(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.clearTimeout(bootTimer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const toggleTheme = () => setTheme((current) => (current === "dark" ? "light" : "dark"));

  return (
    <div className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_18%_12%,color-mix(in_srgb,var(--accent)_16%,transparent),transparent_32rem),radial-gradient(circle_at_88%_18%,color-mix(in_srgb,var(--accent-2)_12%,transparent),transparent_30rem),linear-gradient(180deg,var(--bg),var(--bg-soft)_48%,var(--bg))] text-[var(--text)]">
      <AnimatePresence>{booting && <LoadingScreen />}</AnimatePresence>
      <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(90deg,color-mix(in_srgb,var(--text)_4%,transparent)_1px,transparent_1px),linear-gradient(0deg,color-mix(in_srgb,var(--text)_4%,transparent)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black_0%,black_68%,transparent_100%)]" />

      <Navbar
        menuOpen={menuOpen}
        scrolled={scrolled}
        theme={theme}
        activeSection={activeSection}
        setMenuOpen={setMenuOpen}
        onThemeToggle={toggleTheme}
      />

      <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.45, delay: 0.1 }}>
        <Hero />
        <TechStack />
        <ProjectGallery />
        <Journey />
        <Contact />
      </motion.main>

      <BackToTop show={showTop} />
    </div>
  );
}
