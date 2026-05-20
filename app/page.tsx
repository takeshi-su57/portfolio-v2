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
import Image from "next/image";

export default async function HomePage() {
  const githubProfile = await getGithubProfile(resumeData.githubUsername);
  const avatarUrl = githubProfile?.avatar_url ?? "/images/avatar/avatar.png";

  return (
    <Layout activePage="home" avatarUrl={avatarUrl}>
      <main className="bg-[var(--surface)] text-[var(--text)]">
        <Section className="border-t-0 !pb-8 !pt-10 md:!pb-9 md:!pt-12">
          <EditorialHeading
            as="h1"
            eyebrow="Position"
            title={resumeData.role}
          />
        </Section>

        <Section id="about-1" className="!py-6 md:!py-7">
          <div className="grid items-start gap-4 lg:grid-cols-[minmax(0,190px)_minmax(0,1fr)] lg:gap-8">
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
                Senior full-stack engineer with a delivery track record in
                AI-enabled workflows, decentralized applications, and product
                engineering.
              </p>
              <p className="mt-4 max-w-[62ch] text-[15px] leading-8 text-[var(--muted)]">
                Product teams and founders partner with me to turn ambitious
                ideas into production software across SaaS, Web3, and AI.
              </p>
              <p className="mt-4 max-w-[62ch] text-[15px] leading-8 text-[var(--muted)]">
                Delivery spans startup and scale-up environments where roadmap
                speed, release confidence, and engineering quality all need to
                move together.
              </p>
            </div>
          </div>
        </Section>

        <Section id="about-2" className="!py-6 md:!py-7">
          <EditorialHeading
            as="h2"
            eyebrow="Skills"
            title="Core Skills"
            description="Technical strengths most used in production delivery."
          />
          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            {resumeData.skills.map((skill) => (
              <li
                key={skill.name}
                className="list-none border border-[var(--line)] bg-[var(--surface)] p-4"
              >
                <p className="text-[15px] font-semibold text-[var(--text)]">
                  {skill.name}
                </p>
                <p className="mt-2 text-[14px] leading-7 text-[var(--muted)]">
                  {skill.description}
                </p>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="about-3" className="!pt-12">
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
                    <span className="text-[var(--muted)]">
                      at {item.company}
                    </span>
                  </h3>
                  <p className="mt-2 text-[13px] text-[var(--muted)]">
                    {item.period}
                  </p>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-[14px] leading-7 text-[var(--text)]">
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </article>
              </li>
            ))}
          </ol>
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
