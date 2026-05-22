import { notFound } from "next/navigation";
import { EditorialHeading, Footer, Layout, Section } from "@/components";
import { resumeData } from "@/data/resume";
import { getGithubProfile } from "@/lib/github";

type NotePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return resumeData.engineeringNotes.map((note) => ({
    slug: note.slug,
  }));
}

export default async function NoteDetailPage({ params }: NotePageProps) {
  const { slug } = await params;
  const note = resumeData.engineeringNotes.find((entry) => entry.slug === slug);

  if (!note) {
    notFound();
  }

  const githubProfile = await getGithubProfile(resumeData.githubUsername);
  const avatarUrl = githubProfile?.avatar_url ?? "/images/avatar/avatar.png";

  return (
    <Layout activePage="notes" avatarUrl={avatarUrl}>
      <main className="bg-[var(--surface)] text-[var(--text)]">
        <Section className="border-t-0 !pb-8 !pt-20 md:!pt-24">
          <EditorialHeading
            as="h1"
            eyebrow={note.category}
            title={note.title}
            description={note.summary}
          />
          <p className="mt-6 text-[13px] text-[var(--muted)]">
            {note.publishedAt} - {note.readTime}
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {note.tags.map((tag) => (
              <li
                key={tag}
                className="list-none border border-[var(--line)] px-2 py-1 text-[12px] text-[var(--muted)]"
              >
                {tag}
              </li>
            ))}
          </ul>
        </Section>

        <Section className="!pt-4 !pb-14 md:!pb-16">
          <div className="space-y-7">
            {note.body.map((section) => (
              <article key={section.heading} className="border border-[var(--line)] p-5 sm:p-6">
                <h2 className="text-[19px] font-semibold text-[var(--text)]">{section.heading}</h2>
                <p className="mt-3 text-[15px] leading-8 text-[var(--muted)]">{section.content}</p>
              </article>
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
