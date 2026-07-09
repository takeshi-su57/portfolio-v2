import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import { EditorialHeading, Footer, Layout, Section } from "@/components";
import { resumeData } from "@/data/resume";
import { getGithubProfile } from "@/lib/github";
import { getFounderJourneyBlogs, groupBlogsByPart } from "@/lib/founderJourneyBlogs";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Founder journey blog archive for LuckyPlans.",
};

export default async function BlogsPage() {
  const posts = await getFounderJourneyBlogs();
  const groupedPosts = groupBlogsByPart(posts);
  const githubProfile = await getGithubProfile(resumeData.githubUsername);
  const avatarUrl = githubProfile?.avatar_url ?? "/images/avatar/avatar.png";

  return (
    <Layout activePage="blogs" avatarUrl={avatarUrl}>
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
            eyebrow="Blogs"
            title="Founder Journey"
            description="A curated LuckyPlans series showing how product ideas, trading systems, indexing, simulation, and execution reality shaped my founder-engineer perspective."
          />
        </Section>

        <Section className="!pt-4 !pb-16">
          <div className="mb-10 border border-[var(--line)] bg-[var(--surface)] p-5">
            <p className="max-w-3xl text-[14px] leading-7 text-[var(--muted)]">
              This series shows how I build, test assumptions, debug product risk,
              and adapt when production reality disagrees with the original plan.
            </p>
          </div>
          <div className="space-y-10">
            {groupedPosts.map((group) => (
              <section key={`${group.series}-${group.part}`} className="space-y-4">
                <div className="flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.08em] text-[var(--accent)]">
                      {group.series}
                    </p>
                    <h2 className="mt-1 text-[22px] font-semibold text-[var(--text)]">
                      {group.part}
                    </h2>
                  </div>
                  <p className="text-[12px] text-[var(--muted)]">
                    {group.blogs.length} chapter{group.blogs.length === 1 ? "" : "s"}
                  </p>
                </div>
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {group.blogs.map((post) => (
                    <article
                      key={post.slug}
                      className="overflow-hidden rounded-md border border-[var(--line)] bg-[var(--surface)]"
                    >
                      {post.coverImage ? (
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          width={1280}
                          height={720}
                          className="h-52 w-full object-cover"
                        />
                      ) : null}
                      <div className="p-5">
                        <p className="text-[11px] uppercase tracking-[0.08em] text-[var(--accent)]">
                          {post.chapterLabel}
                        </p>
                        <h3 className="mt-2 text-[18px] font-semibold leading-snug text-[var(--text)]">
                          {post.title}
                        </h3>
                        <p className="mt-3 text-[13px] leading-7 text-[var(--muted)]">
                          {post.excerpt}
                        </p>
                        <div className="mt-4 flex items-center justify-between gap-3 text-[11px] text-[var(--muted)]">
                          <span>
                            {post.imageUrls.length} visual{post.imageUrls.length === 1 ? "" : "s"}
                          </span>
                          <Link
                            href={`/blogs/${post.slug}`}
                            className="text-[var(--text)] underline underline-offset-4"
                          >
                            Read chapter
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
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
