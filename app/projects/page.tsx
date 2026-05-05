import type { Metadata } from "next";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import { Container, Footer, NavBar, Projects } from "@/components";
import { ResponsiveNavbar } from "@/components/Navbar";
import { resumeData } from "@/data/resume";
import { getGithubProfile, getGithubRepos } from "@/lib/github";

export const metadata: Metadata = {
  title: "Projects",
  description: `${resumeData.fullName} projects and GitHub repositories`,
};

export default async function ProjectsPage() {
  const [profile, repos] = await Promise.all([
    getGithubProfile(resumeData.githubUsername),
    getGithubRepos(resumeData.githubUsername),
  ]);

  return (
    <div>
      <Container>
        <NavBar avatarUrl={profile?.avatar_url} />
      </Container>

      <div className="relative flex h-[35vh] w-full flex-col items-start justify-start bg-dark-400 p-3">
        <Container className="relative">
          <Link href="/" aria-label="Back to home">
            <FaArrowLeft className="cursor-pointer rounded-[4px] bg-dark-100 px-3 py-1 text-[35px] text-white-200" />
          </Link>
          <br />
          <h1 className="text-[50px] font-bold">Projects</h1>
          <p className="text-[15px] text-white-300">
            Product highlights and open-source work.
          </p>
        </Container>
      </div>

      <div className="h-auto w-screen">
        <Container>
          <br />
          <div className="w-full py-2">
            <h2 className="px-4 text-[20px] text-white-200 md:px-0">
              Featured Product Work
            </h2>
          </div>
          <Projects
            repos={repos}
            featuredLimit={resumeData.featuredProjects.length}
            showAllLink={false}
            heading="Selected Work"
          />
        </Container>
      </div>
      <Footer />
      <ResponsiveNavbar activePage="projects" contactHref="/#contact" />
    </div>
  );
}
