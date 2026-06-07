import { Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/data/portfolio";
import { ContactRow } from "@/components/ui/ContactRow";

export function Contact() {
  return (
    <footer id="contact" className="border-t border-[var(--line)] bg-[color-mix(in_srgb,var(--bg-soft)_72%,var(--bg))]">
      <div className="mx-auto grid w-[min(100%-2rem,1280px)] gap-8 py-16 sm:w-[min(100%-3rem,1280px)] lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.75fr)] lg:items-end">
        <div>
          <p className="brand-font text-xs font-bold uppercase tracking-[0.22em] text-[var(--accent)]">Connect</p>
          <h2 className="brand-font mt-4 max-w-2xl text-4xl font-bold leading-tight text-[var(--text)] md:text-6xl">
            Let&apos;s build a clean, fast interface.
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`mailto:${profile.email}`} className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--accent)] bg-[var(--accent)] px-5 py-3 text-sm font-bold text-[var(--accent-text)]">
              <Mail size={17} /> Email me
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-5 py-3 text-sm font-semibold text-[var(--text)]">
              <i className="devicon-github-original text-base" /> GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-5 py-3 text-sm font-semibold text-[var(--text)]">
              <i className="devicon-linkedin-plain text-base" /> LinkedIn
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-5 shadow-[0_16px_50px_rgba(0,0,0,0.12)] backdrop-blur-xl">
          <ContactRow icon={<Mail size={17} />} text={profile.email} />
          <ContactRow icon={<MapPin size={17} />} text={profile.location} />
          <ContactRow icon={<Phone size={17} />} text={profile.phone} />
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--faint)]">2026 RAF. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
