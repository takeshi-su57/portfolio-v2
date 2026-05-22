import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import {
  EditorialHeading,
  EngineeringNoteCard,
  Footer,
  Layout,
  Section,
} from "@/components";
import { resumeData } from "@/data/resume";
import { getGithubProfile } from "@/lib/github";

export default async function NotesPage() {
  const githubProfile = await getGithubProfile(resumeData.githubUsername);
  const avatarUrl = githubProfile?.avatar_url ?? "/images/avatar/avatar.png";

  return (
    <Layout activePage="notes" avatarUrl={avatarUrl}>
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
            eyebrow="Notes"
            title="Engineering Notes"
            description="Short writing on product engineering decisions, trade-offs, and production lessons."
          />
          <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {resumeData.engineeringNotes.map((note) => (
              <EngineeringNoteCard
                key={note.slug}
                title={note.title}
                note={
                  <div>
                    <p>{note.excerpt}</p>
                    <p className="mt-3">
                      <Link
                        href={`/notes/${note.slug}`}
                        aria-label={`Read note: ${note.title}`}
                        className="text-[var(--text)] underline underline-offset-4"
                      >
                        Read note: {note.title}
                      </Link>
                    </p>
                  </div>
                }
                meta={`${note.category} - ${note.publishedAt} - ${note.readTime}`}
              />
            ))}
          </div>
        </Section>
      </main>
      <div className="border-t border-[var(--line)]">
        <Footer />
      </div>
    </Layout>
  );
}
