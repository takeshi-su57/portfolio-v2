import type { Metadata } from "next";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import { Container, Footer, NavBar } from "@/components";
import { ResponsiveNavbar } from "@/components/Navbar";
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
    <div>
      <Container>
        <NavBar avatarUrl={avatarUrl} />
      </Container>

      <div className="relative flex h-[35vh] w-full flex-col items-start justify-start bg-dark-400 p-3">
        <Container className="relative">
          <Link href="/" aria-label="Back to home">
            <FaArrowLeft className="cursor-pointer rounded-[4px] bg-dark-100 px-3 py-1 text-[35px] text-white-200" />
          </Link>
          <br />
          <h1 className="text-[50px] font-bold">About</h1>
          <p className="text-[15px] text-white-300">Career story and focus.</p>
        </Container>
      </div>

      <div className="h-auto w-screen">
        <Container>
          <div className="flex h-auto w-full flex-col items-center justify-between p-5 md:flex-row">
            <div className="w-full md:w-[40%]">
              <div
                className="h-[450px] w-full rounded-md bg-cover bg-center bg-no-repeat md:w-[350px]"
                style={{
                  backgroundImage: `url(${avatarUrl})`,
                }}
              />
            </div>

            <div className="w-full md:w-[60%]">
              <div className="relative top-[20px] mb-[30px] h-auto w-full p-[10px] md:top-0 md:mb-0">
                <p className="text-[12px] text-white-200">About</p>
                <div className="relative top-[20px]">
                  <h1 className="mb-[20px] text-[35px] font-bold">
                    {resumeData.greetingType}, I&apos;m {resumeData.fullName}
                  </h1>
                  <br />
                  <p className="border-l-[5px] border-l-green-200 bg-dark-400 p-2 px-5 text-[15px] italic text-white-200">
                    {resumeData.introTagline}
                  </p>
                  <br />
                  {resumeData.bio.map((paragraph) => (
                    <p key={paragraph} className="mb-5 text-[14px] text-white-200">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="pb-[50px]">
            <h2 className="mb-4 text-[28px] font-bold">Employment History</h2>
            <div className="space-y-5">
              {resumeData.employmentHistory.map((item) => (
                <article key={`${item.company}-${item.period}`} className="rounded-md bg-dark-200 p-4">
                  <h3 className="text-[20px] font-semibold">
                    {item.title} -{" "}
                    <a
                      className="text-green-200 underline"
                      href={item.companyUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.company}
                    </a>
                  </h3>
                  <p className="mb-3 text-[13px] text-white-300">{item.period}</p>
                  <ul className="list-disc pl-4">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="mb-2 text-[14px] text-white-200">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </div>
      <Footer />
      <ResponsiveNavbar activePage="about" contactHref="/#contact" />
    </div>
  );
}
