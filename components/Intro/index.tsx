import Link from "next/link";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { resumeData } from "@/data/resume";
import type { SkillCard } from "@/types";

export default function Intro() {
  return (
    <div className="relative top-[50px] mb-[100px] h-auto w-full p-0">
      <div className="flex w-full flex-wrap-reverse flex-row items-start justify-between">
        <div className="container relative h-auto w-full p-[10px] md:w-[50%]">
          <IntroCards data={resumeData.skills} />
        </div>

        <div className="relative top-[20px] mb-[30px] h-auto w-full p-[10px] md:mb-0 md:w-[45%]">
          <p className="text-[12px] text-white-200">Introduce</p>
          <div className="relative top-[20px]">
            <h1 data-aos="zoom-in-up" className="mb-[20px] text-[35px] font-bold">
              {resumeData.greetingType}, I&apos;m {resumeData.fullName}.
            </h1>
            <br />
            <p
              data-aos="zoom-in-right"
              className="border-l-[3px] border-l-green-200 bg-dark-300 px-3 py-2 text-[15px] italic text-white-200"
            >
              {resumeData.introTagline}
            </p>
            <br />
            <p data-aos="fade-up" className="mb-5 text-[14px] text-white-200">
              {resumeData.bio[0]}
            </p>

            <Link
              href="/about"
              data-aos="zoom-in-up"
              className="text-[14px] font-bold text-green-200 underline"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

interface IntroCardsProps {
  data: SkillCard[];
}

function IntroCards({ data }: IntroCardsProps) {
  return (
    <>
      {data.map((skill) => (
        <div
          data-aos="zoom-in-up"
          key={skill.name}
          className="relative mt-4 h-[120px] w-full rounded-[5px] bg-dark-200 p-[20px] transition-all hover:shadow-2xl"
        >
          <div className="flex flex-col items-start justify-start">
            <p className="m-0 font-extrabold text-green-100">{skill.name}</p>
            <span className="pt-[10px] text-[12px] text-white-300">
              {skill.description}
            </span>
          </div>

          <div className="absolute bottom-[10px]">
            <span className="text-[14px] font-bold text-white-200 underline">
              {skill.projectsCompleted}+ Projects
            </span>
          </div>

          <FaWandMagicSparkles className="absolute right-[10px] top-[10px] p-[5px] text-green-400" />
        </div>
      ))}
    </>
  );
}
