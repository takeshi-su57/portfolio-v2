"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Container } from "@/components";
import { resumeData } from "@/data/resume";

interface HeaderProps {
  children: React.ReactNode;
  avatarUrl?: string;
  repoCount: number;
}

export default function Header({ children, avatarUrl, repoCount }: HeaderProps) {
  const [resumeActive, setResumeActive] = useState(false);
  const safeAvatar = useMemo(
    () => avatarUrl ?? "/images/avatar/avatar.png",
    [avatarUrl],
  );

  function toggleResume(): void {
    setResumeActive((prev) => !prev);
  }

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
            <h1 data-aos="fade-right" className="text-[9vmin] md:text-[5vmin]">
              {resumeData.tagLine}
            </h1>
            <br />
            <span data-aos="fade-in" className="text-[20px] md:text-[2vmin]">
              {resumeData.subTitle}
            </span>
            <br />

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
                View Resume
              </button>
            </div>

            {resumeActive && <ResumeViewer onClose={toggleResume} />}
          </div>

          <div
            data-aos="fade-left"
            className="main relative hidden h-auto w-full md:block md:w-[50%]"
          >
            <div
              className="img-cont flex h-[250px] w-[250px] flex-col items-center justify-center rounded-[50%] bg-cover bg-center p-[15vmin]"
              style={{
                backgroundImage: `url("${safeAvatar}")`,
              }}
            />

            <div data-aos="fade-up" className="circleA">
              <Image
                src={resumeData.techStackIcons[0]}
                className="langImgA"
                alt="TypeScript"
                width={72}
                height={72}
              />
            </div>
            <div data-aos="fade-right" className="circleB">
              <Image
                src={resumeData.techStackIcons[1]}
                className="langImgB"
                alt="React"
                width={96}
                height={96}
              />
            </div>
            <div data-aos="fade-left" className="circleC">
              <Image
                src={resumeData.techStackIcons[2]}
                className="langImgC"
                alt="Node.js"
                width={84}
                height={84}
              />
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
