import Image from "next/image";
import Link from "next/link";
import type { FeaturedProject } from "@/types";

const fallbackProjectImage = "/images/projects/fullsail/landing.png";

interface ProjectGridProps {
  projects: FeaturedProject[];
  limit?: number;
}

export default function ProjectGrid({ projects, limit }: ProjectGridProps) {
  const visibleProjects = typeof limit === "number" ? projects.slice(0, limit) : projects;

  if (visibleProjects.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {visibleProjects.map((project, projectIndex) => {
        const projectKey = `${project.title}-${project.projectUrl}-${projectIndex}`;
        return (
        <article
          key={projectKey}
          className="overflow-hidden rounded-md border border-[var(--line)] bg-[var(--surface)]"
        >
          <div className="relative h-[190px] w-full">
            <Image
              src={project.imageUrl || fallbackProjectImage}
              alt={`${project.title} project preview`}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            />
          </div>

          <div className="flex h-full flex-col gap-3 p-4">
            <h3 className="text-[18px] text-[var(--text)]">{project.title}</h3>
            <p className="text-[13px] text-[var(--muted)]">{project.description}</p>

            {project.outcome ? (
              <p className="border-l-2 border-l-[var(--accent)] pl-2 text-[12px] text-[var(--text)]">
                Outcome: {project.outcome}
              </p>
            ) : null}

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={`${projectKey}-${tag}-${tagIndex}`}
                  className="rounded-sm bg-[var(--line)] px-2 py-1 text-[10px] text-[var(--text)]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <Link
              href={project.projectUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-1 text-[13px] text-[var(--muted)] underline transition-colors hover:text-[var(--text)]"
              aria-label={`View project: ${project.title}`}
            >
              View project
            </Link>
          </div>
        </article>
        );
      })}
    </div>
  );
}
