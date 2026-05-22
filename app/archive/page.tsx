import type { Metadata } from "next";
import { ArchiveTable, EditorialHeading, Footer, Layout, Section } from "@/components";
import { resumeData } from "@/data/resume";
import { getGithubProfile } from "@/lib/github";

export const metadata: Metadata = {
  title: "Archive",
  description: `${resumeData.fullName} project archive with case studies and external proof links`,
};

const archiveColumns = [
  { key: "proof", label: "Proof", className: "min-w-[160px]" },
  { key: "year", label: "Year", className: "w-[92px]" },
  { key: "title", label: "Project" },
  { key: "type", label: "Type" },
  { key: "role", label: "Role" },
  { key: "stack", label: "Stack", className: "min-w-[220px]" },
  { key: "status", label: "Status", className: "w-[120px]" },
];

export default async function ArchivePage() {
  const profile = await getGithubProfile(resumeData.githubUsername);

  const archiveRows = resumeData.projectArchive.map((project, index) => ({
    id: `${project.year}-${project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${index}`,
    href: project.proofHref || project.caseStudyPath || project.projectUrl,
    values: {
      year: project.year,
      title: project.title,
      type: project.type,
      role: project.role,
      stack: project.stack.join(" | "),
      status: project.status,
      proof: project.proofLabel,
    },
  }));

  return (
    <Layout activePage="archive" avatarUrl={profile?.avatar_url}>
      <main className="bg-[var(--surface)] text-[var(--text)]">
        <Section className="border-t-0 !pb-12 !pt-20 md:!pt-24">
          <EditorialHeading
            as="h1"
            eyebrow="Archive"
            title="Project Archive"
            description="A complete index of shipped work with case studies and external proof links."
          />
        </Section>

        <Section className="!pt-10 md:!pt-12">
          <ArchiveTable caption="Project archive" columns={archiveColumns} rows={archiveRows} />
        </Section>
      </main>
      <footer className="border-t border-[var(--line)]">
        <Footer />
      </footer>
    </Layout>
  );
}
