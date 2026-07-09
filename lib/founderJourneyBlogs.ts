import fs from "node:fs/promises";
import path from "node:path";

export interface FounderJourneyBlog {
  series: string;
  part: string;
  chapter: string;
  chapterLabel: string;
  markdown: string;
  slugSegments: string[];
  slug: string;
  title: string;
  eyebrow: string;
  excerpt: string;
  coverImage?: string;
  imageUrls: string[];
  sourcePath: string;
}

export interface FounderJourneyBlogGroup {
  series: string;
  part: string;
  blogs: FounderJourneyBlog[];
}

const BLOG_ROOT = path.join(process.cwd(), "public/founder-journey");
const PUBLIC_BLOG_ROOT = "/founder-journey";

function toUrlPath(filePath: string) {
  return `${PUBLIC_BLOG_ROOT}/${filePath.split(path.sep).join("/")}`;
}

function slugifySegment(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function toSlugSegments(relativeDir: string) {
  return relativeDir.split(path.sep).map(slugifySegment);
}

function extractTitle(markdown: string, fallback: string) {
  const heading = markdown.split(/\r?\n/).find((line) => /^#\s+/.test(line));

  return heading ? heading.replace(/^#\s+/, "").trim() : fallback;
}

function extractExcerpt(markdown: string) {
  const lines = markdown.split(/\r?\n/);
  const contentLines = lines.filter(
    (line) =>
      line.trim() && !/^#{1,6}\s+/.test(line) && !/^\s*[-*+]\s+/.test(line),
  );

  return contentLines[0]?.trim() ?? "";
}

function getBlogMeta(relativeDir: string) {
  const [series = "", part = "", chapter = ""] = relativeDir.split(path.sep);
  return { series, part, chapter };
}

function formatChapterLabel(chapter: string) {
  const leadingNumber = chapter.match(/^(\d+)/)?.[1];

  if (leadingNumber) {
    return `Chapter ${leadingNumber}`;
  }

  return chapter.replace(/[_-]+/g, " ").replace(/\s+/g, " ").trim();
}

function formatEyebrow(series: string, part: string) {
  return `${series} · ${part}`;
}

async function readBlogDirectory(
  blogDir: string,
): Promise<FounderJourneyBlog | null> {
  const relativeDir = path.relative(BLOG_ROOT, blogDir);
  const { series, part, chapter } = getBlogMeta(relativeDir);
  const fileNames = await fs.readdir(blogDir);
  const markdownFile = fileNames
    .filter((name) => name.toLowerCase().endsWith(".md"))
    .sort()
    .at(0);

  if (!markdownFile) {
    return null;
  }

  const markdown = await fs.readFile(path.join(blogDir, markdownFile), "utf8");
  const title = extractTitle(markdown, path.basename(blogDir));
  const imageUrls = fileNames
    .filter((name) => name.toLowerCase().endsWith(".png"))
    .sort()
    .map((name) => toUrlPath(path.join(relativeDir, name)));

  const slugSegments = toSlugSegments(relativeDir);

  return {
    series,
    part,
    chapter,
    chapterLabel: formatChapterLabel(chapter),
    markdown,
    slugSegments,
    slug: slugSegments.join("/"),
    title,
    eyebrow: formatEyebrow(series, part),
    excerpt: extractExcerpt(markdown),
    coverImage: imageUrls[0],
    imageUrls,
    sourcePath: path.join(relativeDir, markdownFile),
  };
}

async function walkBlogDirectories(dir: string): Promise<string[]> {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const blogDirs: string[] = [];

  for (const entry of entries) {
    if (!entry.isDirectory()) {
      continue;
    }

    const childDir = path.join(dir, entry.name);
    const childEntries = await fs.readdir(childDir, { withFileTypes: true });
    const hasMarkdown = childEntries.some(
      (child) => child.isFile() && child.name.toLowerCase().endsWith(".md"),
    );

    if (hasMarkdown) {
      blogDirs.push(childDir);
      continue;
    }

    blogDirs.push(...(await walkBlogDirectories(childDir)));
  }

  return blogDirs;
}

export async function getFounderJourneyBlogs(): Promise<FounderJourneyBlog[]> {
  const blogDirs = await walkBlogDirectories(BLOG_ROOT);
  const blogs = (
    await Promise.all(blogDirs.map((blogDir) => readBlogDirectory(blogDir)))
  ).filter((blog): blog is FounderJourneyBlog => Boolean(blog));

  return blogs.sort((a, b) => a.sourcePath.localeCompare(b.sourcePath));
}

export async function getFounderJourneyBlogBySlug(slug: string) {
  const blogs = await getFounderJourneyBlogs();
  return blogs.find((blog) => blog.slug === slug);
}

export async function getFounderJourneyBlogNeighbors(slug: string) {
  const blogs = await getFounderJourneyBlogs();
  const index = blogs.findIndex((blog) => blog.slug === slug);

  if (index === -1) {
    return {};
  }

  return {
    previousBlog: index > 0 ? blogs[index - 1] : undefined,
    nextBlog: index < blogs.length - 1 ? blogs[index + 1] : undefined,
  };
}

export function groupBlogsByPart(
  blogs: FounderJourneyBlog[],
): FounderJourneyBlogGroup[] {
  const groups = new Map<string, FounderJourneyBlog[]>();

  for (const blog of blogs) {
    const key = `${blog.series}/${blog.part}`;
    const existing = groups.get(key) ?? [];
    existing.push(blog);
    groups.set(key, existing);
  }

  return Array.from(groups.entries()).map(([key, groupBlogs]) => {
    const [series, part] = key.split("/");
    return {
      series,
      part,
      blogs: groupBlogs,
    };
  });
}
