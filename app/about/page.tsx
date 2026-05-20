import type { Metadata } from "next";
import Image from "next/image";
import { EditorialHeading, Footer, Layout, Section } from "@/components";
import { resumeData } from "@/data/resume";
import { getGithubProfile } from "@/lib/github";

export const metadata: Metadata = {
  title: "About",
  description: `About ${resumeData.fullName}`,
};

export default async function AboutPage() {
  const profile = await getGithubProfile(resumeData.githubUsername);
  const avatarUrl = profile?.avatar_url ?? "/images/avatar/avatar.png";

  return (
    <Layout activePage="about" avatarUrl={avatarUrl}>
      <main className="bg-[var(--surface)] text-[var(--text)]">
        <Section className="border-t-0 !pb-12 !pt-20 md:!pt-24">
          <EditorialHeading
            as="h1"
            eyebrow="About"
            title={`Hi, I'm ${resumeData.fullName}`}
            description={resumeData.profileSummary}
          />
        </Section>

        <Section className="!py-12">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)] lg:gap-14">
            <figure className="mx-auto w-full max-w-[360px] lg:mx-0">
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-[var(--line)] bg-white">
                <Image
                  src={avatarUrl}
                  alt={`${resumeData.fullName} profile photo`}
                  fill
                  sizes="(max-width: 768px) 100vw, 360px"
                  className="object-cover object-center"
                />
              </div>
              <figcaption className="mt-4 border-l-2 border-[var(--accent)] pl-4 text-[13px] leading-6 text-[var(--muted)]">
                {resumeData.introTagline}
              </figcaption>
            </figure>

            <ul className="space-y-4" aria-label="Biography">
              {resumeData.bio.map((paragraph, index) => (
                <li
                  key={`${index}-${paragraph}`}
                  className="list-none border border-[var(--line)] bg-[var(--surface)] p-5 sm:p-6"
                >
                  <p className="text-[15px] leading-7 text-[var(--text)]">{paragraph}</p>
                  <p className="mt-3 text-[12px] uppercase tracking-[0.08em] text-[var(--muted)]">
                    Narrative {index + 1}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Section className="!pt-12">
          <div className="max-w-4xl">
            <EditorialHeading
              as="h2"
              eyebrow="Timeline"
              title="Experience Highlights"
              description="Selected delivery history with scope, outcomes, and stack coverage."
            />
            <ol className="mt-8 border-l border-[var(--line)]">
              {resumeData.employmentHistory.map((item) => (
                <li key={`${item.company}-${item.period}`} className="relative pb-10 pl-6 sm:pl-8">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[5px] top-[10px] h-[10px] w-[10px] rounded-full bg-[var(--accent)]"
                  />
                  <article className="border border-[var(--line)] bg-[var(--surface)] p-5 sm:p-6">
                    <h3 className="text-[18px] font-semibold leading-7 text-[var(--text)]">
                      {item.title}{" "}
                      <span className="text-[var(--muted)]">
                        at{" "}
                        <a
                          className="underline decoration-[var(--accent)] decoration-1 underline-offset-2"
                          href={item.companyUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {item.company}
                        </a>
                      </span>
                    </h3>
                    <p className="mt-2 text-[13px] text-[var(--muted)]">{item.period}</p>
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-[14px] leading-7 text-[var(--text)]">
                      {item.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                    <p className="mt-5 border-t border-[var(--line)] pt-3 text-[12px] leading-6 text-[var(--muted)]">
                      Technologies: {item.technologies.join(", ")}
                    </p>
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </Section>
      </main>
      <div className="border-t border-[var(--line)]">
        <Footer />
      </div>
    </Layout>
  );
}
