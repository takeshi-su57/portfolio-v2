import type { HTMLAttributes, ReactNode } from "react";

interface EngineeringNoteCardProps extends HTMLAttributes<HTMLElement> {
  title?: string;
  note: ReactNode;
  meta?: string;
}

export default function EngineeringNoteCard({
  title = "Engineering note",
  note,
  meta,
  className = "",
  ...rest
}: EngineeringNoteCardProps) {
  return (
    <aside
      className={`rounded-md border border-[var(--line)] bg-[var(--surface)] p-4 ${className}`.trim()}
      {...rest}
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--accent)]">{title}</p>
      <div className="mt-2 text-[13px] leading-relaxed text-[var(--text)]">{note}</div>
      {meta ? <p className="mt-3 text-[11px] text-[var(--muted)]">{meta}</p> : null}
    </aside>
  );
}
