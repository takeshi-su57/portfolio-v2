import {
  ArchivePreview,
  BestFitPills,
  ContactCtaButton,
  Contact,
  EditorialHeading,
  Footer,
  Layout,
  ProjectGrid,
  RevealWrapper,
  Section,
} from "@/components";
import { resumeData } from "@/data/resume";
import { getFounderJourneyBlogs } from "@/lib/founderJourneyBlogs";
import { getGithubProfile } from "@/lib/github";
import Image from "next/image";
import Link from "next/link";

export default async function HomePage() {
  const githubProfile = await getGithubProfile(resumeData.githubUsername);
  const avatarUrl = githubProfile?.avatar_url ?? "/images/avatar/avatar.png";
  const blogPreview = (await getFounderJourneyBlogs()).slice(0, 3);
  const ctaClassName =
    "inline-flex items-center rounded-sm border border-[var(--line)] px-4 py-2 text-[13px] text-[var(--text)] transition-colors hover:bg-[var(--line)]";
  const bestFitItems = resumeData.serviceAreas.map((area) => ({
    label: area.title,
  }));
  const archivePreviewItems = resumeData.projectArchive.map((item) => ({
    title: item.title,
    description: item.summary,
    href: item.caseStudyPath ?? item.projectUrl,
    dateLabel: item.year,
  }));

  return (
    <Layout activePage="home" avatarUrl={avatarUrl}>
      <main className="bg-[var(--surface)] text-[var(--text)]">
        <Section className="border-t-0 !pb-8 !pt-10 md:!pb-9 md:!pt-12">
          <RevealWrapper>
            <EditorialHeading as="h1" eyebrow="Position" title={resumeData.role} />
            <div className="mt-8 grid items-start gap-4 lg:grid-cols-[minmax(0,190px)_minmax(0,1fr)] lg:gap-8">
              <figure className="mx-auto w-full max-w-[190px] lg:mx-0">
                <div className="relative aspect-[3/4] w-full overflow-hidden border border-[var(--line)] bg-white">
                  <Image
                    src={avatarUrl}
                    alt={`${resumeData.fullName} profile photo`}
                    fill
                    sizes="(max-width: 768px) 190px, 190px"
                    className="object-cover object-center grayscale-[24%] opacity-85"
                  />
                </div>
              </figure>
              <div className="max-w-3xl">
                <p className="max-w-[62ch] text-[15px] leading-8 text-[var(--muted)]">
                  Hi, I&apos;m {resumeData.fullName}.
                </p>
                <p className="mt-4 max-w-[62ch] text-[15px] leading-8 text-[var(--muted)]">
                  {resumeData.introTagline}
                </p>
                <p className="mt-4 max-w-[62ch] text-[15px] leading-8 text-[var(--muted)]">
                  {resumeData.profileSummary}
                </p>
                <blockquote className="mt-4 max-w-[62ch] border-l-2 border-[var(--line)] pl-4 text-[15px] leading-8 text-[var(--text)]">
                  {resumeData.favoriteQuote}
                </blockquote>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="#projects" className={ctaClassName}>
                    View Projects
                  </a>
                  <a
                    href="/CV/resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className={ctaClassName}
                  >
                    Download Resume
                  </a>
                  <ContactCtaButton className={ctaClassName} />
                </div>
              </div>
            </div>
          </RevealWrapper>
        </Section>

        <Section id="about-2" className="!py-6 md:!py-7">
          <RevealWrapper delayMs={40}>
            <EditorialHeading
              as="h2"
              eyebrow="Snapshot"
              title="Delivery Snapshot"
              description="Fast trust signals for founders who need production delivery, not just implementation."
            />
            <ul className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {resumeData.deliverySnapshot.map((item) => (
                <li
                  key={`${item.value}-${item.label}`}
                  className="list-none border border-[var(--line)] bg-[var(--surface)] p-4"
                >
                  <p className="text-[20px] font-semibold text-[var(--text)]">
                    {item.value}
                  </p>
                  <p className="mt-2 text-[14px] leading-7 text-[var(--muted)]">
                    {item.label}
                  </p>
                </li>
              ))}
            </ul>
          </RevealWrapper>
        </Section>

        <Section id="best-fit" className="!py-6 md:!py-7">
          <RevealWrapper delayMs={50}>
            <EditorialHeading
              as="h2"
              eyebrow="Best Fit"
              title="Where I Add The Most Value"
              description="Delivery scopes where I can contribute quickly, reduce product risk, and own outcomes."
            />
            <BestFitPills items={bestFitItems} className="mt-6" />
          </RevealWrapper>
        </Section>

        <Section id="projects" className="!pt-12 md:!pt-16">
          <RevealWrapper delayMs={60}>
            <EditorialHeading
              eyebrow="Selected Work"
              title="Featured Projects"
              description="Founder-relevant case studies where product pressure, technical complexity, and delivery ownership all mattered."
            />
            <div className="mt-8">
              <ProjectGrid projects={resumeData.featuredProjects} limit={3} />
            </div>
          </RevealWrapper>
        </Section>

        <Section id="founder-proof" className="!pt-12">
          <RevealWrapper delayMs={70}>
            <EditorialHeading
              as="h2"
              eyebrow={resumeData.founderProof.eyebrow}
              title={resumeData.founderProof.title}
              description={resumeData.founderProof.description}
            />
            <ul className="mt-6 grid gap-3 md:grid-cols-3">
              {resumeData.founderProof.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="list-none border border-[var(--line)] bg-[var(--surface)] p-4"
                >
                  <p className="text-[14px] leading-7 text-[var(--muted)]">{bullet}</p>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-3">
              {resumeData.founderProof.links.map((link) => (
                <Link key={link.href} href={link.href} className={ctaClassName}>
                  {link.label}
                </Link>
              ))}
            </div>
          </RevealWrapper>
        </Section>

        <Section id="about-3" className="!pt-12">
          <RevealWrapper delayMs={80}>
            <EditorialHeading
              as="h2"
              eyebrow="Ownership"
              title="What I Can Own End-to-End"
              description="Delivery areas I lead from architecture and implementation through production reliability."
            />
            <ul className="mt-6 grid gap-3 md:grid-cols-2">
              {resumeData.ownershipAreas.map((area) => (
                <li
                  key={area.title}
                  className="list-none border border-[var(--line)] bg-[var(--surface)] p-4"
                >
                  <p className="text-[15px] font-semibold text-[var(--text)]">
                    {area.title}
                  </p>
                  <p className="mt-2 text-[14px] leading-7 text-[var(--muted)]">
                    {area.description}
                  </p>
                </li>
              ))}
            </ul>
          </RevealWrapper>
        </Section>

        <Section id="about-5" className="!pt-12">
          <RevealWrapper delayMs={90}>
            <EditorialHeading
              as="h2"
              eyebrow="Stack"
              title="Technical Stack"
              description="Grouped by delivery layer for fast role and project-fit review."
            />
            <ul className="mt-6 grid gap-3 md:grid-cols-2">
              {resumeData.technicalStackGroups.map((group) => (
                <li
                  key={group.group}
                  className="list-none border border-[var(--line)] bg-[var(--surface)] p-4"
                >
                  <p className="text-[15px] font-semibold text-[var(--text)]">
                    {group.group}
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={`${group.group}-${item}`}
                        className="list-none border border-[var(--line)] px-2 py-1 text-[12px] text-[var(--muted)]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </RevealWrapper>
        </Section>

        <Section id="notes-preview" className="!pt-12">
          <RevealWrapper delayMs={100}>
            <EditorialHeading
              as="h2"
              eyebrow="Blogs"
              title="Founder Journey Preview"
              description="Selected LuckyPlans chapters that show how I test assumptions, debug product risk, and adapt when production reality disagrees with the plan."
            />
            <div className="mt-6 grid gap-3 md:grid-cols-3">
              {blogPreview.map((blog) => (
                <article
                  key={blog.slug}
                  className="border border-[var(--line)] bg-[var(--surface)] p-4"
                >
                  <p className="text-[11px] uppercase tracking-[0.08em] text-[var(--accent)]">
                    {blog.eyebrow}
                  </p>
                  <h3 className="mt-2 text-[16px] font-semibold text-[var(--text)]">
                    {blog.title}
                  </h3>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.08em] text-[var(--muted)]">
                    {blog.chapterLabel}
                  </p>
                  <p className="mt-2 text-[13px] leading-7 text-[var(--muted)]">
                    {blog.excerpt}
                  </p>
                </article>
              ))}
            </div>
            <div className="mt-5">
              <Link href="/blogs" className={ctaClassName}>
                View All Blogs
              </Link>
            </div>
          </RevealWrapper>
        </Section>

        <Section id="archive-preview" className="!pt-12">
          <RevealWrapper delayMs={110}>
            <EditorialHeading
              as="h2"
              eyebrow="Archive"
              title="Archive Preview"
              description="More projects and delivery contexts beyond the featured set."
            />
            <ArchivePreview items={archivePreviewItems} className="mt-6" maxItems={3} />
            <div className="mt-5">
              <Link href="/archive" className={ctaClassName}>
                Open Full Archive
              </Link>
            </div>
          </RevealWrapper>
        </Section>

        <Section id="about-4" className="!pt-12">
          <RevealWrapper delayMs={120}>
            <EditorialHeading
              as="h2"
              eyebrow="Timeline"
              title="Experience Highlights"
              description="Selected delivery history with scope, outcomes, and stack coverage."
            />
            <ol className="mt-8 border-l border-[var(--line)]">
              {resumeData.employmentHistory.map((item) => (
                <li
                  key={`${item.company}-${item.period}`}
                  className="relative pb-10 pl-6 sm:pl-8"
                >
                  <span
                    aria-hidden="true"
                    className="absolute -left-[5px] top-[10px] h-[10px] w-[10px] rounded-full bg-[var(--accent)]"
                  />
                  <article className="border border-[var(--line)] bg-[var(--surface)] p-5 sm:p-6">
                    <h3 className="text-[18px] font-semibold leading-7 text-[var(--text)]">
                      {item.title}{" "}
                      <span className="text-[var(--muted)]">at {item.company}</span>
                    </h3>
                    <p className="mt-2 text-[13px] text-[var(--muted)]">{item.period}</p>
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-[14px] leading-7 text-[var(--text)]">
                      {item.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </article>
                </li>
              ))}
            </ol>
          </RevealWrapper>
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
