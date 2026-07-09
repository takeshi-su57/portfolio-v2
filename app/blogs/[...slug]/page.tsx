import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";
import { EditorialHeading, Footer, Layout, Section } from "@/components";
import { resumeData } from "@/data/resume";
import {
  getFounderJourneyBlogBySlug,
  getFounderJourneyBlogNeighbors,
  getFounderJourneyBlogs,
} from "@/lib/founderJourneyBlogs";
import { getGithubProfile } from "@/lib/github";
import type { ElementType, ReactNode } from "react";

type BlogPageProps = {
  params: Promise<{ slug: string[] }>;
};

function renderInlineMarkdown(text: string) {
  const nodes: ReactNode[] = [];
  let cursor = 0;
  let key = 0;
  const pattern = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;

  for (const match of text.matchAll(pattern)) {
    const index = match.index ?? 0;
    if (index > cursor) {
      nodes.push(text.slice(cursor, index));
    }

    const token = match[0];
    if (token.startsWith("**")) {
      nodes.push(<strong key={`md-${key++}`}>{token.slice(2, -2)}</strong>);
    } else if (token.startsWith("*")) {
      nodes.push(<em key={`md-${key++}`}>{token.slice(1, -1)}</em>);
    } else if (token.startsWith("`")) {
      nodes.push(
        <code
          key={`md-${key++}`}
          className="rounded bg-[var(--line)] px-1 py-0.5 text-[0.92em]"
        >
          {token.slice(1, -1)}
        </code>,
      );
    } else {
      const linkMatch = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (linkMatch) {
        nodes.push(
          <Link
            key={`md-${key++}`}
            href={linkMatch[2]}
            className="underline underline-offset-4"
          >
            {linkMatch[1]}
          </Link>,
        );
      }
    }

    cursor = index + token.length;
  }

  if (cursor < text.length) {
    nodes.push(text.slice(cursor));
  }

  return nodes;
}

function renderMarkdown(markdown: string) {
  const lines = markdown.split(/\r?\n/);
  const nodes: ReactNode[] = [];
  let paragraphBuffer: string[] = [];
  let listBuffer: string[] = [];

  const flushParagraph = () => {
    const content = paragraphBuffer.join(" ").trim();
    if (content) {
      nodes.push(
        <p
          key={`p-${nodes.length}`}
          className="max-w-3xl text-[15px] leading-8 text-[var(--muted)]"
        >
          {renderInlineMarkdown(content)}
        </p>,
      );
    }
    paragraphBuffer = [];
  };

  const flushList = () => {
    if (listBuffer.length) {
      nodes.push(
        <ul
          key={`ul-${nodes.length}`}
          className="list-disc space-y-2 pl-5 text-[15px] leading-8 text-[var(--muted)]"
        >
          {listBuffer.map((item, index) => (
            <li key={`${item}-${index}`}>{renderInlineMarkdown(item)}</li>
          ))}
        </ul>,
      );
    }
    listBuffer = [];
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (!line) {
      flushParagraph();
      flushList();
      continue;
    }

    if (/^#{1,3}\s+/.test(line)) {
      flushParagraph();
      flushList();
      const level = line.match(/^#{1,3}/)?.[0].length ?? 2;
      const Tag: ElementType =
        level === 1 ? "h2" : level === 2 ? "h3" : "h4";
      nodes.push(
        <Tag
          key={`h-${nodes.length}`}
          className={
            level === 1
              ? "text-[28px] font-semibold"
              : level === 2
                ? "text-[22px] font-semibold"
                : "text-[18px] font-semibold"
          }
        >
          {renderInlineMarkdown(line.replace(/^#{1,3}\s+/, "").trim())}
        </Tag>,
      );
      continue;
    }

    if (/^\s*[-*]\s+/.test(line)) {
      flushParagraph();
      listBuffer.push(line.replace(/^\s*[-*]\s+/, "").trim());
      continue;
    }

    if (line.startsWith("![")) {
      flushParagraph();
      flushList();
      const imageMatch = line.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
      if (imageMatch) {
        nodes.push(
          <figure
            key={`img-${nodes.length}`}
            className="overflow-hidden rounded-md border border-[var(--line)]"
          >
            <Image
              src={imageMatch[2]}
              alt={imageMatch[1] || "Blog image"}
              width={1600}
              height={900}
              className="h-full w-full object-cover"
            />
          </figure>,
        );
      }
      continue;
    }

    if (listBuffer.length) {
      flushList();
    }

    paragraphBuffer.push(line);
  }

  flushParagraph();
  flushList();
  return nodes;
}

export async function generateStaticParams() {
  const blogs = await getFounderJourneyBlogs();
  return blogs.map((blog) => ({ slug: blog.slugSegments }));
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getFounderJourneyBlogBySlug(slug.join("/"));

  if (!blog) {
    return {};
  }

  return {
    title: blog.title,
    description: blog.excerpt,
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const blog = await getFounderJourneyBlogBySlug(slug.join("/"));

  if (!blog) {
    notFound();
  }

  const { previousBlog, nextBlog } = await getFounderJourneyBlogNeighbors(
    blog.slug,
  );
  const githubProfile = await getGithubProfile(resumeData.githubUsername);
  const avatarUrl = githubProfile?.avatar_url ?? "/images/avatar/avatar.png";
  const galleryImages = blog.coverImage ? blog.imageUrls.slice(1) : blog.imageUrls;

  return (
    <Layout activePage="blogs" avatarUrl={avatarUrl}>
      <main className="bg-[var(--surface)] text-[var(--text)]">
        <Section className="border-t-0 !pb-8 !pt-20 md:!pt-24">
          <Link
            href="/blogs"
            aria-label="Back to blogs"
            className="mb-6 inline-flex items-center gap-2 text-[13px] text-[var(--muted)] hover:text-[var(--text)]"
          >
            <FaArrowLeft className="text-[12px]" />
            Back to Blogs
          </Link>
          <EditorialHeading
            as="h1"
            eyebrow={blog.eyebrow}
            title={blog.title}
            description={blog.excerpt}
          />
          <p className="mt-4 text-[12px] uppercase tracking-[0.08em] text-[var(--muted)]">
            {blog.chapterLabel}
          </p>
        </Section>

        <Section className="!pb-10 !pt-4">
          {blog.coverImage ? (
            <div className="overflow-hidden rounded-md border border-[var(--line)]">
              <Image
                src={blog.coverImage}
                alt={blog.title}
                width={1600}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
          ) : null}
        </Section>

        <Section className="!pb-10 !pt-2">
          <div className="space-y-6">{renderMarkdown(blog.markdown)}</div>
        </Section>

        <Section className="!pb-10 !pt-0">
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[var(--line)] pt-6 text-[13px] text-[var(--muted)]">
            {previousBlog ? (
              <Link
                href={`/blogs/${previousBlog.slug}`}
                className="underline underline-offset-4"
              >
                ← Previous chapter
              </Link>
            ) : (
              <span />
            )}
            <Link href="/blogs" className="underline underline-offset-4">
              Back to all chapters
            </Link>
            {nextBlog ? (
              <Link
                href={`/blogs/${nextBlog.slug}`}
                className="underline underline-offset-4"
              >
                Next chapter →
              </Link>
            ) : (
              <span />
            )}
          </div>
        </Section>

        {galleryImages.length > 0 ? (
          <Section className="!pb-16 !pt-0">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {galleryImages.map((imageUrl, index) => (
                <figure
                  key={imageUrl}
                  className="overflow-hidden rounded-md border border-[var(--line)]"
                >
                  <Image
                    src={imageUrl}
                    alt={`${blog.title} visual ${index + 1}`}
                    width={1280}
                    height={720}
                    className="h-full w-full object-cover"
                  />
                </figure>
              ))}
            </div>
          </Section>
        ) : null}
      </main>
      <div className="border-t border-[var(--line)]">
        <Footer />
      </div>
    </Layout>
  );
}
