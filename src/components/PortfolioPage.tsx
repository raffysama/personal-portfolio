"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BackToTop } from "@/components/layout/BackToTop";
import { Navbar } from "@/components/layout/Navbar";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Journey } from "@/components/sections/Journey";
import { ProjectGallery } from "@/components/sections/ProjectGallery";
import { TechStack } from "@/components/sections/TechStack";
import type { ThemeMode } from "@/components/ui/ThemeToggle";
import { navItems } from "@/data/portfolio";

export function PortfolioPage() {
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
    const sectionIds = navItems.map((item) => item.href);
    let animationFrame = 0;

    const updatePageState = () => {
      setScrolled(window.scrollY > 20);
      setShowTop(window.scrollY > 500);

      const pageBottom = document.documentElement.scrollHeight - window.innerHeight;
      const isNearBottom = window.scrollY >= pageBottom - 48;
      const viewportAnchor = Math.min(window.innerHeight * 0.32, 240);
      let current = sectionIds[0];

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= viewportAnchor) {
          current = id;
        }
      }

      setActiveSection(isNearBottom ? "contact" : current);
    };

    const onScroll = () => {
      if (animationFrame) return;
      animationFrame = window.requestAnimationFrame(() => {
        updatePageState();
        animationFrame = 0;
      });
    };

    updatePageState();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  const toggleTheme = () => setTheme((current) => (current === "dark" ? "light" : "dark"));

  return (
    <div className="min-h-screen overflow-x-hidden bg-[var(--bg)] text-[var(--text)]">
      <Navbar
        menuOpen={menuOpen}
        scrolled={scrolled}
        theme={theme}
        activeSection={activeSection}
        setMenuOpen={setMenuOpen}
        onThemeToggle={toggleTheme}
      />

      <motion.main initial={false} animate={{ opacity: 1 }}>
        <Hero />
        <About />
        <TechStack />
        <Journey />
        <ProjectGallery />
        <Contact />
      </motion.main>

      <BackToTop show={showTop} />
    </div>
  );
}
