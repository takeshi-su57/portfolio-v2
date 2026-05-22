import type { ComponentPropsWithoutRef, ReactNode } from "react";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

function stableNodeText(value: ReactNode): string {
  if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
    return String(value);
  }
  return "";
}

interface CaseStudySectionProps extends ComponentPropsWithoutRef<"section"> {
  title: string;
  intro?: ReactNode;
  children: ReactNode;
  headingTag?: HeadingTag;
}

function CaseStudySection({
  title,
  intro,
  children,
  headingTag = "h2",
  className = "",
  ...rest
}: CaseStudySectionProps) {
  const HeadingTag = headingTag;
  return (
    <section className={`space-y-4 ${className}`.trim()} {...rest}>
      <header className="space-y-2">
        <HeadingTag className="editorial-title text-[clamp(1.45rem,2vw,2rem)]">{title}</HeadingTag>
        {intro ? <div className="editorial-description text-[var(--muted)]">{intro}</div> : null}
      </header>
      {children}
    </section>
  );
}

interface ScenarioSectionProps extends Omit<CaseStudySectionProps, "children"> {
  narrative: ReactNode;
}

function ScenarioSection({ narrative, ...rest }: ScenarioSectionProps) {
  return (
    <CaseStudySection {...rest}>
      <div className="text-[15px] leading-relaxed text-[var(--text)]">{narrative}</div>
    </CaseStudySection>
  );
}

interface OwnedChecklistSectionProps extends Omit<CaseStudySectionProps, "children"> {
  items: readonly ReactNode[];
}

function OwnedChecklistSection({ items, ...rest }: OwnedChecklistSectionProps) {
  return (
    <CaseStudySection {...rest}>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li
            key={`owned-checklist-${index}-${stableNodeText(item)}`}
            className="rounded-md border border-[var(--line)] bg-[var(--surface)] p-3 text-[14px] leading-relaxed text-[var(--text)]"
          >
            {item}
          </li>
        ))}
      </ul>
    </CaseStudySection>
  );
}

interface ArchitectureSectionProps extends Omit<CaseStudySectionProps, "children"> {
  bullets: readonly ReactNode[];
}

function ArchitectureSection({ bullets, ...rest }: ArchitectureSectionProps) {
  return (
    <CaseStudySection {...rest}>
      <ul className="space-y-2 text-[14px] leading-relaxed text-[var(--text)]">
        {bullets.map((item, index) => (
          <li
            key={`architecture-${index}-${stableNodeText(item)}`}
            className="pl-5 before:mr-2 before:ml-[-1.25rem] before:text-[var(--accent)] before:content-['•']"
          >
            {item}
          </li>
        ))}
      </ul>
    </CaseStudySection>
  );
}

interface ChallengesSectionProps extends Omit<CaseStudySectionProps, "children"> {
  items: readonly ReactNode[];
}

function ChallengesSection({ items, ...rest }: ChallengesSectionProps) {
  return (
    <CaseStudySection {...rest}>
      <ul className="space-y-3 text-[14px] leading-relaxed text-[var(--text)]">
        {items.map((item, index) => (
          <li key={`challenge-${index}-${stableNodeText(item)}`} className="rounded-md border border-[var(--line)] p-3">
            {item}
          </li>
        ))}
      </ul>
    </CaseStudySection>
  );
}

interface TradeoffsSectionProps extends Omit<CaseStudySectionProps, "children"> {
  decisions: readonly { decision: ReactNode; reason: ReactNode }[];
}

function TradeoffsSection({ decisions, ...rest }: TradeoffsSectionProps) {
  return (
    <CaseStudySection {...rest}>
      <dl className="space-y-4">
        {decisions.map((item, index) => (
          <div
            key={`tradeoff-${index}-${stableNodeText(item.decision)}-${stableNodeText(item.reason)}`}
            className="rounded-md border border-[var(--line)] bg-[var(--surface)] p-4"
          >
            <dt className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--accent)]">Decision</dt>
            <dd className="mt-1 text-[14px] leading-relaxed text-[var(--text)]">{item.decision}</dd>
            <dt className="mt-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--muted)]">Why</dt>
            <dd className="mt-1 text-[14px] leading-relaxed text-[var(--text)]">{item.reason}</dd>
          </div>
        ))}
      </dl>
    </CaseStudySection>
  );
}

interface OutcomesSectionProps extends Omit<CaseStudySectionProps, "children"> {
  metrics: readonly { label: string; value: ReactNode; detail?: ReactNode }[];
}

function OutcomesSection({ metrics, ...rest }: OutcomesSectionProps) {
  return (
    <CaseStudySection {...rest}>
      <ul className="grid gap-3 sm:grid-cols-2">
        {metrics.map((metric) => (
          <li
            key={`outcome-${metric.label}-${stableNodeText(metric.value)}-${stableNodeText(metric.detail)}`}
            className="rounded-md border border-[var(--line)] bg-[var(--surface)] p-4"
          >
            <p className="text-[11px] uppercase tracking-[0.08em] text-[var(--muted)]">{metric.label}</p>
            <p className="mt-2 text-xl font-medium text-[var(--text)]">{metric.value}</p>
            {metric.detail ? (
              <p className="mt-2 text-[13px] leading-relaxed text-[var(--muted)]">{metric.detail}</p>
            ) : null}
          </li>
        ))}
      </ul>
    </CaseStudySection>
  );
}

interface BuildNextSectionProps extends Omit<CaseStudySectionProps, "children"> {
  items: readonly ReactNode[];
}

function BuildNextSection({ items, ...rest }: BuildNextSectionProps) {
  return (
    <CaseStudySection {...rest}>
      <ol className="list-decimal space-y-2 pl-5 text-[14px] leading-relaxed text-[var(--text)] marker:text-[var(--accent)]">
        {items.map((item, index) => (
          <li key={`build-next-${index}-${stableNodeText(item)}`}>{item}</li>
        ))}
      </ol>
    </CaseStudySection>
  );
}

interface RelatedNotesSectionProps extends Omit<CaseStudySectionProps, "children"> {
  notes: readonly ReactNode[];
}

function RelatedNotesSection({ notes, ...rest }: RelatedNotesSectionProps) {
  return (
    <CaseStudySection {...rest}>
      <ul className="space-y-3 text-[14px] leading-relaxed text-[var(--text)]">
        {notes.map((note, index) => (
          <li key={`note-${index}-${stableNodeText(note)}`} className="rounded-md border border-[var(--line)] p-3">
            {note}
          </li>
        ))}
      </ul>
    </CaseStudySection>
  );
}

export {
  CaseStudySection,
  ScenarioSection,
  OwnedChecklistSection,
  ArchitectureSection,
  ChallengesSection,
  TradeoffsSection,
  OutcomesSection,
  BuildNextSection,
  RelatedNotesSection,
};
