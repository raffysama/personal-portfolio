"use client";

import { motion } from "framer-motion";
import { Code2, Database, LayoutDashboard, MapPin } from "lucide-react";
import { profile } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";

const strengths = [
  {
    icon: LayoutDashboard,
    title: "Product-minded UI",
    text: "Clear interfaces shaped around real tasks, not decoration.",
  },
  {
    icon: Code2,
    title: "Modern frontend",
    text: "Responsive React and Next.js experiences built with TypeScript.",
  },
  {
    icon: Database,
    title: "Full-stack foundations",
    text: "Practical experience with authentication, APIs, and Supabase data.",
  },
];

export function About() {
  return (
    <section id="about" className="section-shell py-16 sm:py-20">
      <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
        <div>
          <SectionHeader
            eyebrow="About me"
            title="Building useful software with care."
            text=""
          />
          <div className="mt-6 inline-flex items-center gap-2 text-sm text-[var(--muted)]">
            <MapPin size={16} className="text-[var(--accent)]" />
            {profile.location}
          </div>
        </div>

        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
        >
          <p className="max-w-3xl text-lg leading-8 text-[var(--text)] sm:text-xl">
            I&apos;m a junior full stack developer with professional frontend experience and a strong interest in creating dependable digital products.
          </p>
          <p className="mt-4 max-w-3xl leading-7 text-[var(--muted)]">
            My work spans production website maintenance, dashboards, ecommerce, inventory tools, and student productivity apps. I enjoy turning requirements into interfaces that are straightforward, responsive, and pleasant to use.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {strengths.map(({ icon: Icon, title, text }) => (
              <article key={title} className="soft-card p-4">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent)]">
                  <Icon size={19} />
                </span>
                <h3 className="mt-4 text-sm font-semibold text-[var(--text)]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{text}</p>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
