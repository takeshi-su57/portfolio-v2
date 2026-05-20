import {
  Contact,
  EditorialHeading,
  Footer,
  Layout,
  ProjectGrid,
  Section,
} from "@/components";
import { resumeData } from "@/data/resume";
import { getGithubProfile } from "@/lib/github";

export default async function HomePage() {
  const githubProfile = await getGithubProfile(resumeData.githubUsername);

  return (
    <Layout
      activePage="home"
      avatarUrl={githubProfile?.avatar_url}
    >
      <main className="bg-[var(--surface)] text-[var(--text)]">
        <Section className="border-t-0 !pb-14 !pt-20 md:!pt-24">
          <EditorialHeading
            as="h1"
            eyebrow={resumeData.role}
            title={resumeData.fullName}
            description={resumeData.introTagline}
          />
        </Section>

        <Section id="projects" className="!pt-12 md:!pt-16">
          <EditorialHeading
            eyebrow="Selected Work"
            title="Featured Projects"
            description="A concise sample of recent full-stack delivery across SaaS, AI, and Web3."
          />
          <div className="mt-8">
            <ProjectGrid projects={resumeData.featuredProjects} limit={3} />
          </div>
        </Section>
      </main>

      <div className="border-t border-[var(--line)]">
        <Contact />
      </div>
      <div className="border-t border-[var(--line)]">
        <Footer />
      </div>
    </Layout>
  );
}
