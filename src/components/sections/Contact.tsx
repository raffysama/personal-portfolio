import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/data/portfolio";

export function Contact() {
  return (
    <footer id="contact" className="border-t border-[var(--line)] bg-[var(--section)]">
      <div className="section-shell py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">Contact</p>
            <h2 className="mt-3 max-w-2xl font-heading text-3xl font-semibold leading-tight text-[var(--text)] sm:text-4xl">Open to junior full stack opportunities.</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base">I&apos;m ready to contribute, learn from a strong team, and help build reliable products. Let&apos;s discuss how I can support your next project.</p>
            <a href={`mailto:${profile.email}`} className="primary-button mt-7 w-fit">
              Email me <Mail size={17} />
            </a>
          </div>

          <div className="border-t border-[var(--line)] pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--faint)]">Contact details</p>
            <div className="mt-5 space-y-4 text-sm text-[var(--muted)]">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-3 break-all transition hover:text-[var(--text)]"><Mail size={16} className="shrink-0 text-[var(--accent)]" /> {profile.email}</a>
              <span className="flex items-center gap-3"><Phone size={16} className="shrink-0 text-[var(--accent)]" /> {profile.phone}</span>
              <span className="flex items-center gap-3"><MapPin size={16} className="shrink-0 text-[var(--accent)]" /> {profile.location}</span>
            </div>
            <div className="mt-7 flex gap-5 border-t border-[var(--line)] pt-5 text-sm">
              <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-[var(--muted)] transition hover:text-[var(--text)]">GitHub <ArrowUpRight size={13} /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-[var(--muted)] transition hover:text-[var(--text)]">LinkedIn <ArrowUpRight size={13} /></a>
            </div>
          </div>
        </div>

        <p className="mt-12 border-t border-[var(--line)] pt-6 text-xs text-[var(--faint)]">(c) 2026 Raffy Gumapo. Built with Next.js and TypeScript.</p>
      </div>
    </footer>
  );
}
