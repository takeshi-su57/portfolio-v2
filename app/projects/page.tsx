import type { Metadata } from "next";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import { EditorialHeading, Footer, Layout, ProjectGrid, Section } from "@/components";
import { resumeData } from "@/data/resume";
import { getGithubProfile } from "@/lib/github";

export const metadata: Metadata = {
  title: "Projects",
  description: `${resumeData.fullName} projects and GitHub repositories`,
};

export default async function ProjectsPage() {
  const profile = await getGithubProfile(resumeData.githubUsername);

  return (
    <Layout activePage="projects" avatarUrl={profile?.avatar_url}>
      <main className="bg-[var(--surface)] text-[var(--text)]">
        <Section className="border-t-0 !pb-12 !pt-20 md:!pt-24">
          <Link
            href="/"
            aria-label="Back to home"
            className="mb-6 inline-flex items-center gap-2 text-[13px] text-[var(--muted)] hover:text-[var(--text)]"
          >
            <FaArrowLeft className="text-[12px]" />
            Back to Home
          </Link>
          <EditorialHeading
            as="h1"
            eyebrow="Projects"
            title="Selected Case Studies"
            description="Case-study snapshots of shipped work across SaaS, Web3, and AI-enabled products."
          />
        </Section>

        <Section className="!pt-12 md:!pt-16">
          {resumeData.featuredProjects.length > 0 ? (
            <ProjectGrid projects={resumeData.featuredProjects} />
          ) : (
            <div className="py-8 text-[var(--muted)]">
              Case-study highlights are currently being refreshed.
            </div>
          )}
        </Section>
      </main>
      <footer className="border-t border-[var(--line)]">
        <Footer />
      </footer>
    </Layout>
  );
}
