import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";
import {
  ArchitectureSection,
  BuildNextSection,
  CaseStudySection,
  CaseStudyLayout,
  ChallengesSection,
  EditorialHeading,
  Footer,
  Layout,
  OwnedChecklistSection,
  OutcomesSection,
  RelatedNotesSection,
  ScenarioSection,
  Section,
  TradeoffsSection,
} from "@/components";
import { resumeData } from "@/data/resume";
import { getGithubProfile } from "@/lib/github";

export const metadata: Metadata = {
  title: "Tizz Case Study",
  description:
    "How Tizz shipped a Botanix perp trading experience with a custom indexer and reliable near real-time chain sync.",
};

export default async function TizzCaseStudyPage() {
  const profile = await getGithubProfile(resumeData.githubUsername);
  const caseStudy = resumeData.projectCaseStudies?.tizz;

  if (!caseStudy) {
    notFound();
  }

  const projectCard = resumeData.featuredProjects.find((project) => project.title === "Tizz");

  const relatedNotes = (caseStudy.relatedNoteSlugs ?? [])
    .map((slug) => resumeData.engineeringNotes.find((note) => note.slug === slug))
    .filter((note): note is (typeof resumeData.engineeringNotes)[number] => Boolean(note));

  const metadataItems = [
    { label: "Role", value: caseStudy.metadata.role },
    { label: "Timeline", value: caseStudy.metadata.timeline },
    { label: "Client", value: caseStudy.metadata.clientType },
    {
      label: "Stack",
      value: (
        <span className="text-[12px] leading-relaxed text-[var(--muted)]">
          {caseStudy.metadata.stack.join(" - ")}
        </span>
      ),
    },
    {
      label: "Links",
      value: (
        <div className="flex flex-wrap gap-2">
          {caseStudy.metadata.links.map((entry) => (
            <Link
              key={entry.href}
              href={entry.href}
              target={entry.href.startsWith("http") ? "_blank" : undefined}
              rel={entry.href.startsWith("http") ? "noreferrer" : undefined}
              className="inline-flex items-center border border-[var(--line)] px-2 py-1 text-[11px] uppercase tracking-[0.08em] text-[var(--muted)] hover:text-[var(--text)]"
            >
              {entry.label}
            </Link>
          ))}
        </div>
      ),
    },
  ];

  const tradeoffDecisions = caseStudy.tradeoffs.map((item) => {
    const [decision, reason] = item.split(" while ");
    return {
      decision: decision ?? item,
      reason: reason ? `while ${reason}` : "Balanced delivery constraints to maximize launch reliability.",
    };
  });

  const outcomeMetrics = caseStudy.outcomes.map((item, index) => ({
    label: `Outcome ${index + 1}`,
    value: item,
    detail: caseStudy.outcome,
  }));

  return (
    <Layout activePage="projects" avatarUrl={profile?.avatar_url}>
      <main className="bg-[var(--surface)] text-[var(--text)]">
        <Section className="border-t-0 !pb-8 !pt-20 md:!pt-24">
          <Link
            href="/projects"
            aria-label="Back to projects"
            className="mb-6 inline-flex items-center gap-2 text-[13px] text-[var(--muted)] hover:text-[var(--text)]"
          >
            <FaArrowLeft className="text-[12px]" />
            Back to Projects
          </Link>
          <EditorialHeading
            as="h1"
            eyebrow="Case Study"
            title="Tizz"
            description="Perp trading product delivery on Botanix with custom indexing and resilient event ingestion."
          />
        </Section>

        <CaseStudyLayout metadata={metadataItems}>
          <ScenarioSection
            title="Real Scenario"
            intro={`${caseStudy.overview} ${caseStudy.problem}`}
            narrative={caseStudy.realScenario}
          />

          {projectCard?.imageUrl ? (
            <section className="space-y-4">
              <h2 className="editorial-title text-[clamp(1.45rem,2vw,2rem)]">Product Snapshot</h2>
              <div className="overflow-hidden rounded-md border border-[var(--line)] bg-[var(--surface)]">
                <Image
                  src={projectCard.imageUrl}
                  alt="Tizz trading product and indexer-backed market views"
                  width={1600}
                  height={900}
                  className="h-auto w-full"
                  sizes="(max-width: 1024px) 100vw, 900px"
                  priority
                />
              </div>
            </section>
          ) : null}

          <OwnedChecklistSection
            title="Owned Scope"
            intro={caseStudy.role}
            items={caseStudy.ownedScopeChecklist}
          />

          <CaseStudySection
            title="Key Features"
            intro="Core product capabilities delivered for launch readiness"
          >
            <ul className="space-y-2 text-[14px] leading-relaxed text-[var(--text)]">
              {caseStudy.keyFeatures.map((feature, index) => (
                <li
                  key={`key-feature-${index}-${feature}`}
                  className="pl-5 before:mr-2 before:ml-[-1.25rem] before:text-[var(--accent)] before:content-['•']"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </CaseStudySection>

          <ArchitectureSection
            title="Architecture"
            intro="System boundaries and delivery structure"
            bullets={caseStudy.architecture}
          />

          <ChallengesSection
            title="Challenges"
            intro="Main technical risks during implementation"
            items={caseStudy.challenges}
          />

          <TradeoffsSection
            title="Tradeoffs"
            intro="Key implementation decisions and rationale"
            decisions={tradeoffDecisions}
          />

          <OutcomesSection
            title="Outcomes"
            intro="Delivery impact from launch through stabilization"
            metrics={outcomeMetrics}
          />

          <BuildNextSection
            title="Build Next"
            intro="High-leverage improvements identified post-launch"
            items={caseStudy.buildNext}
          />

          <RelatedNotesSection
            title="Related Notes"
            intro="Engineering notes connected to this delivery"
            notes={
              relatedNotes.length > 0
                ? relatedNotes.map((note) => (
                    <Link
                      key={note.slug}
                      href={`/notes/${note.slug}`}
                      className="group block"
                      aria-label={`Read note: ${note.title}`}
                    >
                      <span className="text-[11px] uppercase tracking-[0.08em] text-[var(--muted)]">
                        {note.category}
                      </span>
                      <span className="mt-1 block text-[15px] text-[var(--text)] group-hover:text-[var(--accent)]">
                        {note.title}
                      </span>
                      <span className="mt-1 block text-[13px] text-[var(--muted)]">{note.excerpt}</span>
                    </Link>
                  ))
                : [<span key="none">No related notes linked yet.</span>]
            }
          />
        </CaseStudyLayout>
      </main>

      <footer className="border-t border-[var(--line)]">
        <Footer />
      </footer>
    </Layout>
  );
}
