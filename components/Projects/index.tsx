import Link from "next/link";
import { FaArrowRight, FaGithub, FaStar } from "react-icons/fa6";
import { resumeData } from "@/data/resume";
import type { FeaturedProject, GithubRepo } from "@/types";

const fallbackProjectImage =
  "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1200&q=80";

interface ProjectsProps {
  repos: GithubRepo[];
  heading?: string;
  showAllLink?: boolean;
  featuredLimit?: number;
}

export default function Projects({
  repos,
  heading = "Latest Works",
  showAllLink = true,
  featuredLimit = 6,
}: ProjectsProps) {
  const featuredProjects = resumeData.featuredProjects.slice(0, featuredLimit);

  return (
    <div className="projectCont relative top-[50px] mb-[50px] flex h-auto w-full flex-col items-center justify-center p-[10px]">
      <div className="flex w-full flex-row items-center justify-center">
        <span
          data-aos="zoom-in"
          className="m-[20px] h-[2px] w-[100px] rounded-[30px] bg-green-200 md:w-[120px]"
        />
        <p data-aos="fade-up" className="text-[15px] text-white-200">
          {heading}
        </p>
        <span
          data-aos="zoom-in"
          className="m-[20px] h-[2px] w-[100px] rounded-[30px] bg-green-200 md:w-[120px]"
        />

        {showAllLink && (
          <Link
            href="/projects"
            data-aos="zoom-in-up"
            className="absolute top-[50px] text-center text-[14px] text-green-200 underline"
          >
            All Projects
          </Link>
        )}
      </div>

      <div className="projects mb-[50px] flex h-auto w-full flex-row flex-wrap items-center justify-between p-3">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <div className="mb-5 mt-4 flex h-auto w-full flex-row flex-wrap items-center justify-between p-3">
        {repos.length > 0 ? (
          repos.slice(0, 3).map((repo) => <GithubRepoCard key={repo.id} repo={repo} />)
        ) : (
          <p className="text-white-300">
            GitHub data is currently unavailable. Check back soon.
          </p>
        )}
      </div>
    </div>
  );
}

interface ProjectCardProps {
  project: FeaturedProject;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div
      data-aos="zoom-in"
      className="box relative top-[50px] mb-[50px] mr-[5px] h-auto w-full rounded-[5px] bg-dark-200 opacity-[.85] transition-all hover:opacity-[1] md:w-[250px]"
    >
      <div
        className="h-[190px] w-full rounded-[5px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${project.imageUrl || fallbackProjectImage})`,
        }}
      />

      <div className="bottom-[5px] w-full p-[10px]">
        <div className="h-auto w-full">
          <p className="text-[15px] text-white-200">{project.title}</p>
          <br />
          <small>
            {project.description.length > 130
              ? `${project.description.slice(0, 130)}...`
              : project.description}
          </small>
        </div>

        <br />

        <div className="bottom-[5px] left-[5px] flex items-start justify-start p-0">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={`${project.title}-${tag}`}
              className="mr-[2px] rounded-[2px] bg-dark-100 px-[9px] py-[3px] text-[10px] text-white-100"
            >
              {tag}
            </span>
          ))}
        </div>

        <span className="absolute right-[10px] my-[-20px] flex items-center justify-start text-[12px]">
          <a
            href={project.projectUrl}
            target="_blank"
            rel="noreferrer"
            className="mr-[10px] text-white-200 hover:text-white-100 hover:underline"
          >
            View
          </a>
          <FaArrowRight className="ml-[10px] p-[2px]" />
        </span>
      </div>
    </div>
  );
}

interface GithubRepoCardProps {
  repo: GithubRepo;
}

function GithubRepoCard({ repo }: GithubRepoCardProps) {
  return (
    <div
      data-aos="zoom-in"
      className="relative mt-2 flex h-[180px] w-full flex-col items-start justify-start rounded-md bg-dark-200 px-4 py-3 md:w-[300px]"
    >
      <h2 className="w-full text-[20px]">{repo.name}</h2>
      <br />
      <p className="w-full text-[15px] text-white-300">
        {repo.description && repo.description.length > 80
          ? `${repo.description.slice(0, 80)}...`
          : repo.description ?? "No description available."}
      </p>
      <br />
      <div className="ratings absolute bottom-4 flex w-full flex-row items-start justify-start">
        <span className="mr-2 flex flex-row items-start justify-start">
          <StatBadge title="stars" count={repo.stargazers_count} />
        </span>
        <span className="mr-2 flex flex-row items-start justify-start">
          <StatBadge title="forks" count={repo.forks} />
        </span>
      </div>

      <a
        href={repo.html_url}
        target="_blank"
        rel="noreferrer"
        className="absolute right-3 top-2 flex flex-row items-center"
      >
        <small className="underline">View</small>
        <FaArrowRight className="ml-2 text-[12px]" />
      </a>
    </div>
  );
}

interface StatBadgeProps {
  count: number;
  title: "stars" | "forks";
}

function StatBadge({ count, title }: StatBadgeProps) {
  return (
    <>
      {title === "stars" ? (
        <FaStar className="text-green-200" />
      ) : (
        <FaGithub className="text-green-200" />
      )}
      <small className="ml-2 font-extrabold text-white-200">{count}</small>
      <small className="ml-2 text-white-200">{title}</small>
    </>
  );
}
