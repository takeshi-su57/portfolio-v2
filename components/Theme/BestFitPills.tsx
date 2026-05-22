import type { HTMLAttributes } from "react";

export interface BestFitPill {
  label: string;
  value?: string;
}

interface BestFitPillsProps extends HTMLAttributes<HTMLUListElement> {
  items: BestFitPill[];
}

export default function BestFitPills({
  items,
  className = "",
  ...rest
}: BestFitPillsProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <ul
      className={`flex flex-wrap gap-2 ${className}`.trim()}
      aria-label="Best fit highlights"
      {...rest}
    >
      {items.map((item, itemIndex) => {
        const key = `${item.label}-${itemIndex}`;

        return (
          <li
            key={key}
            className="inline-flex items-center gap-1 rounded-full border border-[var(--line)] bg-[var(--surface)] px-3 py-1 text-[11px] font-medium tracking-[0.02em] text-[var(--text)]"
          >
            <span>{item.label}</span>
            {item.value ? <span className="text-[var(--muted)]">{item.value}</span> : null}
          </li>
        );
      })}
    </ul>
  );
}
