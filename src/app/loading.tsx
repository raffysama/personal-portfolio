export default function Loading() {
  return (
    <div className="grid min-h-screen place-items-center bg-[var(--bg)] text-[var(--text)]">
      <div className="relative grid h-36 w-36 place-items-center rounded-full border border-[color-mix(in_srgb,var(--accent)_24%,transparent)] bg-[var(--surface)] shadow-[0_0_60px_color-mix(in_srgb,var(--accent)_18%,transparent)]">
        <span className="brand-font text-xs font-bold tracking-[0.35em] text-[var(--accent)]">RAF</span>
      </div>
    </div>
  );
}