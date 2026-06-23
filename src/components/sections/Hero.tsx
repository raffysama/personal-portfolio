"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, MapPin } from "lucide-react";
import profileImage from "@/assets/images/mainprofile.jpg";
import { profile } from "@/data/portfolio";
import { reveal, stagger } from "@/lib/motion";
import { scrollToSection } from "@/lib/scroll";

const focusSkills = ["React", "TypeScript", "Next.js", "Supabase", "Tailwind", "REST API", "AWS"];

export function Hero() {
  return (
    <section id="top" className="section-shell border-b border-[var(--line)] pb-16 pt-32 sm:pb-20 sm:pt-36">
      <motion.div
        className="grid gap-10 lg:grid-cols-3 lg:items-center lg:gap-16"
        variants={stagger}
        initial={false}
        animate="visible"
      >
        <div className="lg:col-span-2">
          <motion.p variants={reveal} className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
            Junior Full Stack Developer
          </motion.p>

          <motion.h1 variants={reveal} className="mt-4 font-heading text-4xl font-semibold leading-tight text-[var(--text)] sm:text-5xl">
            {profile.name}
          </motion.h1>

          <motion.p variants={reveal} className="mt-3 font-heading text-xl font-medium text-[var(--muted)] sm:text-2xl">
            Building clear, reliable web experiences.
          </motion.p>

          <motion.p variants={reveal} className="mt-6 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
            I have four years of frontend experience and build responsive, reliable web applications that are easy to use and maintain. I help turn business ideas and requirements into clean, practical digital solutions.
          </motion.p>

          <motion.div variants={reveal} className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[var(--muted)] lg:hidden">
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[var(--accent)]" /> Available for work
            </span>
            <span className="inline-flex items-center gap-1.5 text-[var(--faint)]">
              <MapPin size={13} /> {profile.location}
            </span>
          </motion.div>

          <motion.div variants={reveal} className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" onClick={(event) => scrollToSection(event, "projects")} className="primary-button">
              View projects <ArrowDown size={17} />
            </a>
            <a href={profile.resume} download className="secondary-button">
              Download resume <Download size={17} />
            </a>
          </motion.div>

          <motion.div variants={reveal} className="mt-7 lg:hidden">
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-lg border border-[var(--line)] bg-[var(--surface)] p-4">
                <p className="font-heading text-lg font-semibold text-[var(--text)]">4+ years</p>
                <p className="mt-1 text-xs leading-5 text-[var(--faint)]">Frontend experience</p>
              </div>
              <div className="rounded-lg border border-[var(--line)] bg-[var(--surface)] p-4">
                <p className="font-heading text-sm font-semibold leading-5 text-[var(--text)]">Frontend-focused</p>
                <p className="mt-1 text-xs leading-5 text-[var(--faint)]">Full Stack</p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {focusSkills.map((skill) => (
                <span key={skill} className="rounded-full border border-[var(--line)] px-3 py-1 font-mono text-[11px] text-[var(--muted)]">
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-2">
              <a href={profile.github} target="_blank" rel="noreferrer" className="icon-button" aria-label="GitHub profile" title="GitHub">
                <i className="devicon-github-original text-base" />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="icon-button" aria-label="LinkedIn profile" title="LinkedIn">
                <i className="devicon-linkedin-plain text-base" />
              </a>
              <a href={`mailto:${profile.email}`} className="icon-button" aria-label="Send an email" title="Email">
                <Mail size={17} />
              </a>
              <a href={profile.resume} download className="icon-button" aria-label="Download resume" title="Download resume">
                <Download size={17} />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.aside variants={reveal} className="hidden lg:block lg:border-l lg:border-[var(--line)] lg:pl-8">
          <div className="flex items-center gap-4">
            <div className="hero-profile">
              <Image src={profileImage} alt="Raffy Gumapo" className="hero-profile-image" priority />
            </div>
            <div>
              <p className="flex items-center gap-2 font-heading text-sm font-semibold text-[var(--text)]">
                <span className="h-2 w-2 rounded-full bg-[var(--accent)]" /> Available for work
              </p>
              <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-[var(--faint)]"><MapPin size={13} /> {profile.location}</p>
            </div>
          </div>

          <dl className="mt-6 divide-y divide-[var(--line)] border-y border-[var(--line)] text-sm">
            <div className="flex items-center justify-between gap-4 py-3">
              <dt className="text-[var(--faint)]">Experience</dt>
              <dd className="font-medium text-[var(--text)]">4+ years</dd>
            </div>
            <div className="flex items-start justify-between gap-4 py-3">
              <dt className="text-[var(--faint)]">Specialty</dt>
              <dd className="max-w-40 text-right font-medium leading-5 text-[var(--text)]">Frontend-focused Full Stack</dd>
            </div>
          </dl>

          <div className="mt-5">
            <div className="flex flex-wrap gap-2">
              {focusSkills.map((skill) => (
                <span key={skill} className="rounded-full border border-[var(--line)] px-3 py-1 font-mono text-[11px] text-[var(--muted)]">
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-2">
              <a href={profile.github} target="_blank" rel="noreferrer" className="icon-button" aria-label="GitHub profile" title="GitHub">
                <i className="devicon-github-original text-base" />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="icon-button" aria-label="LinkedIn profile" title="LinkedIn">
                <i className="devicon-linkedin-plain text-base" />
              </a>
              <a href={`mailto:${profile.email}`} className="icon-button" aria-label="Send an email" title="Email">
                <Mail size={17} />
              </a>
              <a href={profile.resume} download className="icon-button" aria-label="Download resume" title="Download resume">
                <Download size={17} />
              </a>
            </div>
          </div>
        </motion.aside>
      </motion.div>
    </section>
  );
}
