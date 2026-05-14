"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components";
import { resumeData } from "@/data/resume";

interface HeaderProps {
  children: React.ReactNode;
  avatarUrl?: string;
  repoCount: number;
}

export default function Header({
  children,
  avatarUrl,
  repoCount,
}: HeaderProps) {
  const [resumeActive, setResumeActive] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [time, setTime] = useState(0);
  const safeAvatar = useMemo(
    () => avatarUrl ?? "/images/avatar/avatar.png",
    [avatarUrl],
  );
  const [roleHead, roleTailRaw] = resumeData.role.split("(");
  const roleTail = roleTailRaw ? `(${roleTailRaw}` : "";
  const outerOrbitLogos = [
    { name: "Python", src: "/icons/python-original.svg", size: 30 },
    { name: "Golang", src: "/icons/go-original-wordmark.svg", size: 38 },
    { name: "NestJS", src: "/icons/nestjs-plain.svg", size: 30 },
    { name: "TanStack Query", src: "/icons/tanstack.svg", size: 30 },
    { name: "Express", src: "/icons/express.svg", size: 30 },
    { name: "Kubernetes", src: "/icons/kubernetes-plain.svg", size: 32 },
    { name: "Next.js", src: "/icons/nextjs-original.svg", size: 30 },
    { name: "Tailwind CSS", src: "/icons/tailwindcss-original.svg", size: 30 },
    { name: "Node.js", src: "/icons/nodejs-original.svg", size: 36 },
    { name: "Ethereum", src: "/icons/ethereum-original.svg", size: 30 },
  ];

  const middleOrbitLogos = [
    { name: "TypeScript", src: "/icons/typescript-original.svg", size: 28 },
    { name: "React", src: "/icons/react-original.svg", size: 28 },
    { name: "Claude", src: "/icons/claude.svg", size: 26 },
    { name: "PostgreSQL", src: "/icons/postgresql-original.svg", size: 28 },
    { name: "MongoDB", src: "/icons/mongodb-original.svg", size: 28 },
    { name: "Redis", src: "/icons/redis-original.svg", size: 28 },
    { name: "Docker", src: "/icons/docker-original.svg", size: 30 },
    { name: "Terraform", src: "/icons/terraform-original.svg", size: 28 },
    { name: "Jest", src: "/icons/jest.svg", size: 24 },
    { name: "GitHub Actions", src: "/icons/githubactions.svg", size: 24 },
  ];

  const innerOrbitLogos = [
    { name: "JavaScript", src: "/icons/javascript-original.svg", size: 24 },
    { name: "Git", src: "/icons/git-original.svg", size: 24 },
    { name: "GraphQL", src: "/icons/graphql-plain.svg", size: 24 },
    { name: "Solidity", src: "/icons/solidity-original.svg", size: 24 },
    { name: "Linux", src: "/icons/linux-original.svg", size: 24 },
    { name: "NPM", src: "/icons/npm-original-wordmark.svg", size: 24 },
    { name: "Vercel", src: "/icons/vercel.svg", size: 24 },
    { name: "Figma", src: "/icons/figma-original.svg", size: 24 },
    { name: "Express", src: "/icons/express.svg", size: 24 },
    { name: "TanStack", src: "/icons/tanstack.svg", size: 24 },
  ];

  useEffect(() => {
    const animateIn = requestAnimationFrame(() => setScrollProgress(1));
    return () => cancelAnimationFrame(animateIn);
  }, []);

  useEffect(() => {
    function onScroll(): void {
      const maxScroll = 300;
      const y = window.scrollY;
      const next = Math.max(0, Math.min(1, 1 - y / maxScroll));
      setScrollProgress(next);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    let frame = 0;
    let stopped = false;

    const loop = () => {
      setTime((prev) => prev + 0.006);
      if (!stopped) {
        frame = requestAnimationFrame(loop);
      }
    };

    frame = requestAnimationFrame(loop);
    return () => {
      stopped = true;
      cancelAnimationFrame(frame);
    };
  }, []);

  function toggleResume(): void {
    setResumeActive((prev) => !prev);
  }

  const orbitLayers = [
    { id: "outer", radius: 285, speed: 0.045, logos: outerOrbitLogos },
    { id: "middle", radius: 225, speed: -0.06, logos: middleOrbitLogos },
    { id: "inner", radius: 185, speed: 0.075, logos: innerOrbitLogos },
  ];

  return (
    <header className="header relative h-[100vh] w-full bg-dark-200 md:h-auto">
      <Container>
        {children}

        <div className="mt-[50px] flex h-[70vmin] w-full flex-wrap flex-row items-center justify-center p-[20px]">
          <div className="relative mb-[50px] h-full w-full md:w-[50%]">
            <span
              data-aos="fade-up"
              className="rounded-[3px] bg-green-600 px-[8px] py-[2px] text-[12px] text-green-100"
            >
              {resumeData.role}
            </span>
            <br />
            <br />
            <h1
              data-aos="fade-right"
              className="text-[9vmin] leading-[1.1] md:text-[5vmin]"
            >
              {roleHead.trim()}
            </h1>
            {roleTail ? (
              <h2
                data-aos="fade-right"
                className="mt-2 text-[8vmin] text-green-100 md:text-[4.4vmin]"
              >
                {roleTail}
              </h2>
            ) : null}
            <br />
            <span
              data-aos="fade-in"
              className="text-[14px] text-green-200 md:text-[2vmin]"
            >
              {resumeData.fullName}
            </span>
            <br />
            <p className="mt-4 text-[14px] text-white-300 md:text-[1.8vmin]">
              {resumeData.tagLine}
            </p>
            <p className="mt-3 text-[13px] text-white-300 md:text-[1.7vmin]">
              {resumeData.subTitle}
            </p>

            <div className="mt-6 grid w-full grid-cols-1 gap-3 md:grid-cols-3">
              {resumeData.audiencePaths.map((audience) => (
                <Link
                  key={audience.key}
                  href={audience.href}
                  className="rounded-md border border-dark-100 bg-dark-300 p-3 transition-all hover:border-green-300"
                >
                  <p className="text-[12px] font-bold text-green-200">
                    {audience.label}
                  </p>
                  <p className="mt-1 text-[11px] text-white-300">
                    {audience.description}
                  </p>
                </Link>
              ))}
            </div>

            <div className="relative top-[50px] flex w-full items-start justify-start">
              <div
                data-aos="zoom-in-left"
                className="mr-[20px] flex w-[50%] flex-row items-center justify-start"
              >
                <h1 className="pr-[10px] pt-[10px] text-[35px]">
                  {resumeData.yearsOfExperience}+
                </h1>
                <span className="w-[80px] text-[10px] text-white-300">
                  Years of Experience
                </span>
              </div>
              <div
                data-aos="zoom-in-right"
                className="mr-[20px] flex w-[50%] flex-row items-center justify-start"
              >
                <h1 className="pr-[10px] pt-[10px] text-[35px]">{repoCount}</h1>
                <span className="w-[80px] text-[10px] text-white-300">
                  Public Repositories
                </span>
              </div>
            </div>

            <div className="mt-[60px] h-auto w-full">
              <br />
              <button
                className="w-[150px] scale-[.90] rounded-[30px] border-[2px] border-green-200 bg-dark-100 px-5 py-3 transition-all hover:scale-[.95]"
                onClick={toggleResume}
                type="button"
              >
                View Resume (PDF)
              </button>
            </div>

            {resumeActive && <ResumeViewer onClose={toggleResume} />}
          </div>

          <div className="main relative hidden h-auto w-full  md:block md:w-[50%]">
            <div
              className="img-cont relative !z-[80] flex h-[250px] w-[250px] flex-col items-center justify-center rounded-[50%] bg-cover bg-center p-[15vmin]"
              style={{
                backgroundImage: `url("${safeAvatar}")`,
              }}
            />

            <div className="pointer-events-none absolute inset-0 z-30">
              {orbitLayers.map((layer) => (
                <div key={layer.id}>
                  <div
                    className="absolute left-1/2 top-1/2 rounded-full border border-green-200/25"
                    style={{
                      width: `${layer.radius * 2}px`,
                      height: `${layer.radius * 2}px`,
                      transform: "translate(-50%, -50%)",
                      opacity: 0.25 * scrollProgress,
                      transition: "opacity 100ms linear",
                    }}
                  />

                  {layer.logos.map((logo, index) => {
                    const baseAngle =
                      (Math.PI * 2 * index) / layer.logos.length;
                    const angle = baseAngle + time * layer.speed;
                    const radius = layer.radius * scrollProgress;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;
                    const wobble = 1 + Math.sin(time * 2 + index) * 0.04;
                    const selfSpin = (time * 36 + index * 13) % 360;
                    return (
                      <div
                        key={`${layer.id}-${logo.name}`}
                        className="absolute left-1/2 top-1/2 flex items-center justify-center rounded-full border border-green-300/35 bg-dark-300 shadow-[0_0_16px_rgba(100,244,172,0.25)]"
                        style={{
                          width: `${logo.size + 20}px`,
                          height: `${logo.size + 20}px`,
                          transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${wobble}) rotate(${selfSpin}deg)`,
                          opacity: 0.2 + 0.8 * scrollProgress,
                          transition: "opacity 90ms linear",
                        }}
                      >
                        <div style={{ transform: `rotate(${-selfSpin}deg)` }}>
                          <Image
                            src={logo.src}
                            alt={logo.name}
                            width={logo.size}
                            height={logo.size}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}

interface ResumeViewerProps {
  onClose: () => void;
}

function ResumeViewer({ onClose }: ResumeViewerProps) {
  return (
    <div className="fixed left-0 top-0 z-[1500] flex h-screen w-screen items-center justify-center bg-dark-400">
      <div className="mx-auto h-[99%] w-[100%] overflow-hidden rounded-md bg-dark-100 md:w-[70%]">
        <div className="flex h-auto w-full items-start justify-start bg-dark-200 p-3">
          <h2>Resume</h2>
          <a
            href="/CV/resume.pdf"
            download
            className="ml-4 flex scale-[.90] flex-row items-center justify-center rounded-[5px] bg-green-300 px-3 py-1 text-[12px] font-bold text-dark-300 transition-all hover:scale-[.95]"
          >
            Download
          </a>
          <button
            className="ml-4 flex scale-[.90] flex-row items-center justify-center rounded-[5px] bg-red-500 px-3 py-1 text-[12px] font-bold text-dark-300 transition-all hover:scale-[.95]"
            onClick={onClose}
            type="button"
          >
            Close
          </button>
        </div>
        <iframe
          src="/CV/resume.pdf"
          className="mt-0 h-full w-full overflow-scroll bg-white-200"
          title="Resume Viewer"
        />
      </div>
    </div>
  );
}
