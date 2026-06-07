"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";
import { reveal, stagger } from "@/lib/motion";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ProjectGallery() {
  const [featuredProject, ...otherProjects] = projects;

  return (
    <section id="projects" className="border-y border-[var(--line)] bg-[color-mix(in_srgb,var(--surface)_45%,transparent)] py-20 sm:py-24">
      <div className="mx-auto w-[min(100%-2rem,1240px)] sm:w-[min(100%-3rem,1240px)]">
        <SectionHeader
          eyebrow="Selected Work"
          title="Projects built for real workflows."
          text="A focused look at production pages, dashboards, ecommerce flows, tracking tools, and inventory systems I have worked on or built."
        />

        <motion.div className="mt-10" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} variants={stagger}>
          {featuredProject ? (
            <motion.a
              href={featuredProject.link}
              target="_blank"
              rel="noreferrer"
              variants={reveal}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.5 }}
              className="group grid overflow-hidden rounded-[28px] border border-[var(--line)] bg-[var(--surface)] shadow-[0_24px_80px_rgba(0,0,0,0.18)] backdrop-blur-xl lg:grid-cols-[1.18fr_0.82fr]"
            >
              <div className="relative min-h-[280px] overflow-hidden bg-[#060a10] sm:min-h-[360px] lg:min-h-[420px]">
                <Image
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-top transition duration-700 group-hover:scale-[1.025]"
                  priority
                />
                <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/45 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/45 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md">
                  Featured
                </div>
              </div>

              <div className="flex min-h-[320px] flex-col justify-between p-6 sm:p-8 lg:p-10">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-[color-mix(in_srgb,var(--accent)_32%,transparent)] bg-[color-mix(in_srgb,var(--accent)_10%,transparent)] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--accent)]">
                      {featuredProject.category}
                    </span>
                    <span className="rounded-full border border-[var(--line)] px-3 py-1 text-[11px] font-semibold text-[var(--muted)]">
                      {featuredProject.status}
                    </span>
                  </div>
                  <h3 className="brand-font mt-6 text-3xl font-bold leading-tight text-[var(--text)] sm:text-4xl">
                    {featuredProject.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base">
                    {featuredProject.description}
                  </p>
                </div>

                <div className="mt-8">
                  <div className="flex flex-wrap gap-2">
                    {featuredProject.stack.map((item, itemIndex) => (
                      <span key={item} className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[color-mix(in_srgb,var(--bg)_44%,transparent)] px-3 py-2 text-xs font-semibold text-[var(--text)]">
                        {featuredProject.icons[itemIndex] ? <i className={`${featuredProject.icons[itemIndex]} text-base`} /> : null}
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[var(--accent)]">
                    Open project
                    <ArrowUpRight size={17} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            </motion.a>
          ) : null}

          <motion.div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3" variants={stagger}>
            {otherProjects.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                variants={reveal}
                transition={{ duration: 0.45, delay: index * 0.025 }}
                whileHover={{ y: -5 }}
                className="group flex min-h-[440px] flex-col overflow-hidden rounded-[24px] border border-[var(--line)] bg-[var(--surface)] shadow-[0_18px_60px_rgba(0,0,0,0.14)] backdrop-blur-xl transition hover:border-[color-mix(in_srgb,var(--accent)_38%,transparent)]"
              >
                <div className="relative h-52 overflow-hidden bg-[#060a10]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top transition duration-700 group-hover:scale-[1.035]"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/45 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-white backdrop-blur-md">
                    {project.status}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <p className="brand-font text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--accent)]">{project.category}</p>
                  <h3 className="brand-font mt-3 text-2xl font-bold leading-tight text-[var(--text)]">{project.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-[var(--muted)]">{project.description}</p>

                  <div className="mt-6 flex items-end justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {project.stack.slice(0, 4).map((item, itemIndex) => (
                        <span key={item} className="inline-flex items-center gap-1.5 rounded-full border border-[var(--line)] px-2.5 py-1 text-[11px] font-semibold text-[var(--muted)]">
                          {project.icons[itemIndex] ? <i className={`${project.icons[itemIndex]} text-sm`} /> : null}
                          {item}
                        </span>
                      ))}
                    </div>
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[var(--line)] bg-[color-mix(in_srgb,var(--surface-strong)_72%,transparent)] text-[var(--accent)] transition group-hover:border-[var(--accent)]">
                      <ArrowUpRight size={17} />
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
