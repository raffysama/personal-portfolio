"use client";

import { Moon, Sun } from "lucide-react";

export type ThemeMode = "light" | "dark";

type ThemeToggleProps = {
  theme: ThemeMode;
  onToggle: () => void;
};

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="brand-font inline-flex h-10 items-center gap-2 rounded-xl border border-[var(--line)] bg-[var(--surface)] px-2.5 text-sm font-medium text-[var(--muted)] transition hover:text-[var(--text)]"
      onClick={onToggle}
    >
      <span className="grid h-7 w-7 place-items-center rounded-lg bg-[color-mix(in_srgb,var(--accent)_13%,transparent)] text-[var(--accent)]">
        {isDark ? <Moon size={15} /> : <Sun size={15} />}
      </span>
      <span className="hidden sm:inline">{isDark ? "Dark" : "Light"}</span>
    </button>
  );
}
