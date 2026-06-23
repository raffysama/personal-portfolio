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
      className="icon-button"
      onClick={onToggle}
    >
      {isDark ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
}
