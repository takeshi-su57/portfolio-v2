import type { ComponentPropsWithoutRef, ReactNode } from "react";

interface CaseStudySectionProps extends ComponentPropsWithoutRef<"section"> {
  title: string;
  intro?: ReactNode;
  children: ReactNode;
}

function CaseStudySection({
  title,
  intro,
  children,
  className = "",
  ...rest
}: CaseStudySectionProps) {
  return (
    <section className={`space-y-4 ${className}`.trim()} {...rest}>
      <header className="space-y-2">
        <h2 className="editorial-title text-[clamp(1.45rem,2vw,2rem)]">{title}</h2>
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
  items: ReactNode[];
}

function OwnedChecklistSection({ items, ...rest }: OwnedChecklistSectionProps) {
  return (
    <CaseStudySection {...rest}>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li
            key={`owned-${index}`}
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
  bullets: ReactNode[];
}

function ArchitectureSection({ bullets, ...rest }: ArchitectureSectionProps) {
  return (
    <CaseStudySection {...rest}>
      <ul className="space-y-2 text-[14px] leading-relaxed text-[var(--text)]">
        {bullets.map((item, index) => (
          <li key={`architecture-${index}`} className="pl-5 before:mr-2 before:ml-[-1.25rem] before:text-[var(--accent)] before:content-['•']">
            {item}
          </li>
        ))}
      </ul>
    </CaseStudySection>
  );
}

interface ChallengesSectionProps extends Omit<CaseStudySectionProps, "children"> {
  items: ReactNode[];
}

function ChallengesSection({ items, ...rest }: ChallengesSectionProps) {
  return (
    <CaseStudySection {...rest}>
      <ul className="space-y-3 text-[14px] leading-relaxed text-[var(--text)]">
        {items.map((item, index) => (
          <li key={`challenge-${index}`} className="rounded-md border border-[var(--line)] p-3">
            {item}
          </li>
        ))}
      </ul>
    </CaseStudySection>
  );
}

interface TradeoffsSectionProps extends Omit<CaseStudySectionProps, "children"> {
  decisions: { decision: ReactNode; reason: ReactNode }[];
}

function TradeoffsSection({ decisions, ...rest }: TradeoffsSectionProps) {
  return (
    <CaseStudySection {...rest}>
      <dl className="space-y-4">
        {decisions.map((item, index) => (
          <div key={`tradeoff-${index}`} className="rounded-md border border-[var(--line)] bg-[var(--surface)] p-4">
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
  metrics: { label: string; value: ReactNode; detail?: ReactNode }[];
}

function OutcomesSection({ metrics, ...rest }: OutcomesSectionProps) {
  return (
    <CaseStudySection {...rest}>
      <ul className="grid gap-3 sm:grid-cols-2">
        {metrics.map((metric) => (
          <li key={metric.label} className="rounded-md border border-[var(--line)] bg-[var(--surface)] p-4">
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
  items: ReactNode[];
}

function BuildNextSection({ items, ...rest }: BuildNextSectionProps) {
  return (
    <CaseStudySection {...rest}>
      <ol className="list-decimal space-y-2 pl-5 text-[14px] leading-relaxed text-[var(--text)] marker:text-[var(--accent)]">
        {items.map((item, index) => (
          <li key={`build-next-${index}`}>
            {item}
          </li>
        ))}
      </ol>
    </CaseStudySection>
  );
}

interface RelatedNotesSectionProps extends Omit<CaseStudySectionProps, "children"> {
  notes: ReactNode[];
}

function RelatedNotesSection({ notes, ...rest }: RelatedNotesSectionProps) {
  return (
    <CaseStudySection {...rest}>
      <ul className="space-y-3 text-[14px] leading-relaxed text-[var(--text)]">
        {notes.map((note, index) => (
          <li key={`note-${index}`} className="rounded-md border border-[var(--line)] p-3">
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
