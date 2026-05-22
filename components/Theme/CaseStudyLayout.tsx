import type { ComponentPropsWithoutRef, ReactNode } from "react";

export interface CaseStudyMetaItem {
  label: string;
  value: ReactNode;
}

interface CaseStudyLayoutProps extends ComponentPropsWithoutRef<"section"> {
  metadata: CaseStudyMetaItem[];
  railTitle?: string;
  railFooter?: ReactNode;
  contentClassName?: string;
  railClassName?: string;
  children: ReactNode;
}

export default function CaseStudyLayout({
  metadata,
  railTitle = "Project metadata",
  railFooter,
  contentClassName = "",
  railClassName = "",
  className = "",
  children,
  ...rest
}: CaseStudyLayoutProps) {
  return (
    <section className={`editorial-section ${className}`.trim()} {...rest}>
      <div className="editorial-container">
        <div className="grid gap-10 lg:grid-cols-[minmax(220px,280px)_minmax(0,1fr)] lg:gap-16">
          <aside
            className={`self-start rounded-md border border-[var(--line)] bg-[var(--surface)] p-5 lg:sticky lg:top-24 ${railClassName}`.trim()}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--accent)]">
              {railTitle}
            </p>
            <dl className="mt-4 space-y-4">
              {metadata.map((item) => (
                <div key={item.label}>
                  <dt className="text-[11px] uppercase tracking-[0.08em] text-[var(--muted)]">{item.label}</dt>
                  <dd className="mt-1 text-[13px] leading-relaxed text-[var(--text)]">{item.value}</dd>
                </div>
              ))}
            </dl>
            {railFooter ? <div className="mt-5 border-t border-[var(--line)] pt-4">{railFooter}</div> : null}
          </aside>

          <div className={`min-w-0 space-y-12 ${contentClassName}`.trim()}>{children}</div>
        </div>
      </div>
    </section>
  );
}
