import { Contact, Container, Footer, Intro, Layout, Projects, Quote } from "@/components";
import { resumeData } from "@/data/resume";
import { getGithubProfile, getGithubRepos } from "@/lib/github";

export default async function HomePage() {
  const [githubProfile, githubRepos] = await Promise.all([
    getGithubProfile(resumeData.githubUsername),
    getGithubRepos(resumeData.githubUsername),
  ]);

  return (
    <Layout
      activePage="home"
      avatarUrl={githubProfile?.avatar_url}
      repoCount={githubProfile?.public_repos ?? githubRepos.length}
    >
      <Container>
        <Intro />
        <Projects repos={githubRepos} />
      </Container>
      <Quote />
      <Contact />
      <Footer />
    </Layout>
  );
}
