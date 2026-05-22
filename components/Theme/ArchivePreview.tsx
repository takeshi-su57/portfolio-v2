import Link from "next/link";
import type { HTMLAttributes } from "react";

export interface ArchivePreviewItem {
  title: string;
  description?: string;
  href: string;
  dateLabel?: string;
}

interface ArchivePreviewProps extends HTMLAttributes<HTMLDivElement> {
  items: ArchivePreviewItem[];
  maxItems?: number;
}

export default function ArchivePreview({
  items,
  maxItems = 3,
  className = "",
  ...rest
}: ArchivePreviewProps) {
  const visibleItems = items.slice(0, maxItems);

  if (visibleItems.length === 0) {
    return null;
  }

  return (
    <div className={`grid gap-3 ${className}`.trim()} {...rest}>
      {visibleItems.map((item, itemIndex) => {
        const itemKey = `${item.title}-${itemIndex}`;

        return (
          <article
            key={itemKey}
            className="rounded-md border border-[var(--line)] bg-[var(--surface)] px-4 py-3"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-[15px] leading-snug text-[var(--text)]">{item.title}</h3>
              {item.dateLabel ? (
                <p className="shrink-0 text-[11px] uppercase tracking-[0.06em] text-[var(--muted)]">
                  {item.dateLabel}
                </p>
              ) : null}
            </div>
            {item.description ? (
              <p className="mt-2 text-[13px] leading-relaxed text-[var(--muted)]">{item.description}</p>
            ) : null}
            <Link
              href={item.href}
              className="mt-2 inline-block text-[13px] text-[var(--muted)] underline transition-colors hover:text-[var(--text)]"
            >
              Open
            </Link>
          </article>
        );
      })}
    </div>
  );
}
