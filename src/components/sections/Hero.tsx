"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import profileImage from "@/assets/images/mainprofile.jpg";
import { metrics, profile } from "@/data/portfolio";
import { reveal, stagger } from "@/lib/motion";
import { scrollToSection } from "@/lib/scroll";

function CodeRow({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "cyan" | "green" | "amber";
}) {
  const toneClass = {
    cyan: "text-[var(--accent)]",
    green: "text-[var(--accent-2)]",
    amber: "text-amber-300",
  }[tone];

  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-[var(--line)] bg-[color-mix(in_srgb,var(--bg)_32%,transparent)] px-4 py-3">
      <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--faint)]">
        {label}
      </span>
      <strong className={`text-right text-sm font-semibold ${toneClass}`}>
        {value}
      </strong>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-screen w-[min(100%-2rem,1280px)] items-center px-0 pb-20 pt-28 sm:w-[min(100%-3rem,1280px)] lg:pt-32"
    >
      <motion.div
        className="grid w-full gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,520px)] lg:items-center lg:gap-16"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <div className="min-w-0">
          <motion.div
            variants={reveal}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full border border-[color-mix(in_srgb,var(--accent)_28%,transparent)] bg-[color-mix(in_srgb,var(--accent)_10%,transparent)] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)]"
          >
            <Sparkles size={14} /> Available for frontend work
          </motion.div>

          <motion.h1
            variants={reveal}
            transition={{ duration: 0.75, delay: 0.05 }}
            className="brand-font mt-7 max-w-4xl text-5xl font-bold leading-[1.03] tracking-normal text-[var(--text)] sm:text-6xl lg:text-7xl"
          >
            Tech-focused frontend for clean, fast web apps.
          </motion.h1>

          <motion.p
            variants={reveal}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg"
          >
            {profile.intro}
          </motion.p>

          <motion.div
            variants={reveal}
            transition={{ duration: 0.75, delay: 0.15 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#projects"
              onClick={(event) => scrollToSection(event, "projects")}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--accent)] bg-[var(--accent)] px-6 py-3 text-sm font-bold text-[var(--accent-text)] transition hover:-translate-y-0.5"
            >
              View gallery <ArrowRight size={17} />
            </a>
            <a
              href="#contact"
              onClick={(event) => scrollToSection(event, "contact")}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-6 py-3 text-sm font-semibold text-[var(--text)] transition hover:-translate-y-0.5 hover:border-[color-mix(in_srgb,var(--accent)_45%,transparent)]"
            >
              Contact me <Mail size={17} />
            </a>
          </motion.div>

          <motion.div
            variants={reveal}
            transition={{ duration: 0.75, delay: 0.2 }}
            className="mt-10 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3"
          >
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5 shadow-[0_18px_55px_rgba(0,0,0,0.12)] backdrop-blur-xl"
              >
                <p className="text-2xl font-bold text-[var(--accent-2)]">
                  {metric.value}
                </p>
                <span className="mt-3 block text-xs font-bold uppercase tracking-[0.14em] text-[var(--faint)]">
                  {metric.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={reveal}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="w-full justify-self-center lg:justify-self-end"
        >
          <div className="relative overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.18)] backdrop-blur-2xl sm:p-6">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,color-mix(in_srgb,var(--accent)_14%,transparent),transparent_45%,color-mix(in_srgb,var(--accent-2)_10%,transparent))]" />
            <div className="relative">
              <div className="flex items-center justify-between gap-4 border-b border-[var(--line)] pb-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--muted)]">
                    Frontend Developer
                  </p>
                  <h2 className="brand-font mt-2 text-2xl font-semibold text-[var(--text)]">
                    {profile.name}
                  </h2>
                </div>
                <Image
                  src={profileImage}
                  alt="Raffy Gumapo"
                  className="h-16 w-16 rounded-2xl border border-[var(--line)] object-cover"
                  priority
                />
              </div>

              <div className="mt-6 grid gap-4">
                <CodeRow label="role" value={profile.role} tone="cyan" />
                <CodeRow
                  label="focus"
                  value="React, Next.js, TypeScript"
                  tone="green"
                />
                <CodeRow
                  label="style"
                  value="Clean UI, motion, dashboards"
                  tone="amber"
                />
              </div>

              <div className="mt-8 rounded-2xl border border-[var(--line)] bg-[color-mix(in_srgb,var(--bg)_45%,transparent)] p-4">
                <div className="mb-4 flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-300" />
                  <span className="h-3 w-3 rounded-full bg-emerald-300" />
                </div>
                <pre className="m-0 overflow-auto text-xs leading-6 text-[var(--muted)]">
                  <code>{`const portfolio = {\n  framework: "Next.js",\n  language: "TypeScript",\n  motion: "Framer"\n};`}</code>
                </pre>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
