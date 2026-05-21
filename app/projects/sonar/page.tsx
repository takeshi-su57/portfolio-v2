import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";
import { EditorialHeading, Footer, Layout, Section } from "@/components";
import { resumeData } from "@/data/resume";
import { getGithubProfile } from "@/lib/github";

export const metadata: Metadata = {
  title: "Sonar.Trade Case Study",
  description:
    "How Sonar.Trade expanded from EVM-only automation into stable multi-chain strategy execution with Solana support.",
};

export default async function SonarCaseStudyPage() {
  const profile = await getGithubProfile(resumeData.githubUsername);
  const caseStudy = resumeData.projectCaseStudies?.sonar;

  if (!caseStudy) {
    notFound();
  }

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
            title="Sonar.Trade"
            description="Multi-chain trading automation delivery across strategy UX, orchestration, and reliability."
          />
        </Section>

        <Section className="!py-6 md:!py-7">
          <EditorialHeading as="h2" title="Overview" />
          <p className="mt-4 max-w-[70ch] text-[15px] leading-8 text-[var(--muted)]">
            {caseStudy.overview}
          </p>
        </Section>

        <Section className="!py-6 md:!py-7">
          <EditorialHeading as="h2" title="My Role" />
          <p className="mt-4 max-w-[70ch] text-[15px] leading-8 text-[var(--muted)]">
            {caseStudy.role}
          </p>
        </Section>

        <Section className="!py-6 md:!py-7">
          <EditorialHeading as="h2" title="Problem" />
          <p className="mt-4 max-w-[70ch] text-[15px] leading-8 text-[var(--muted)]">
            {caseStudy.problem}
          </p>
        </Section>

        <Section className="!py-6 md:!py-7">
          <EditorialHeading as="h2" title="Architecture Flow" />
          <ul className="mt-4 grid gap-3 md:grid-cols-2">
            {caseStudy.architecture.map((item) => (
              <li
                key={item}
                className="list-none border border-[var(--line)] bg-[var(--surface)] p-4 text-[14px] leading-7 text-[var(--text)]"
              >
                {item}
              </li>
            ))}
          </ul>
        </Section>

        <Section className="!py-6 md:!py-7">
          <EditorialHeading as="h2" title="Key Features Built" />
          <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-8 text-[var(--text)]">
            {caseStudy.keyFeatures.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Section>

        <Section className="!py-6 md:!py-7">
          <EditorialHeading as="h2" title="Technical Challenges" />
          <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-8 text-[var(--text)]">
            {caseStudy.challenges.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Section>

        <Section className="!py-6 md:!py-7">
          <EditorialHeading as="h2" title="Decisions and Tradeoffs" />
          <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-8 text-[var(--text)]">
            {caseStudy.tradeoffs.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Section>

        <Section className="!py-6 md:!py-7">
          <EditorialHeading as="h2" title="Outcome" />
          <p className="mt-4 max-w-[70ch] text-[15px] leading-8 text-[var(--muted)]">
            {caseStudy.outcome}
          </p>
        </Section>

        <Section className="!pt-6 !pb-14 md:!pt-7 md:!pb-16">
          <EditorialHeading as="h2" title="Stack" />
          <ul className="mt-4 flex flex-wrap gap-2">
            {caseStudy.stack.map((item) => (
              <li
                key={item}
                className="list-none border border-[var(--line)] px-2 py-1 text-[12px] text-[var(--muted)]"
              >
                {item}
              </li>
            ))}
          </ul>
        </Section>
      </main>

      <footer className="border-t border-[var(--line)]">
        <Footer />
      </footer>
    </Layout>
  );
}
