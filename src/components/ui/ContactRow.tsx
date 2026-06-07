import type { ReactNode } from "react";

type ContactRowProps = {
  icon: ReactNode;
  text: string;
};

export function ContactRow({ icon, text }: ContactRowProps) {
  return (
    <div className="flex items-center gap-3 border-b border-[var(--line)] py-3 last:border-b-0">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-[color-mix(in_srgb,var(--accent)_12%,transparent)] text-[var(--accent)]">{icon}</span>
      <span className="text-sm font-medium text-[var(--muted)]">{text}</span>
    </div>
  );
}
