import Link from "next/link";
import { resumeData } from "@/data/resume";

export default function Intro() {
  const introBio =
    resumeData.bio?.[0] ??
    "I build production-ready software with clear ownership across frontend, backend, and cloud delivery.";

  return (
    <div className="mb-[100px] mt-[50px] h-auto w-full p-0">
      <div className="flex w-full flex-wrap-reverse flex-row items-start justify-between">
        <div className="container relative h-auto w-full p-[10px] md:w-[50%]">
          <ImpactMetrics />
          <ServiceAreas />
        </div>

        <div className="mb-[30px] h-auto w-full p-[10px] md:mb-0 md:w-[45%]">
          <p className="text-[12px] text-white-200">Introduce</p>
          <div className="mt-[20px]">
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
              {introBio}
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

function ImpactMetrics() {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
      {resumeData.impactMetrics.map((metric) => (
        <div
          data-aos="zoom-in-up"
          key={metric.label}
          className="relative mt-2 h-auto w-full rounded-[5px] bg-dark-200 p-[20px] transition-all hover:shadow-2xl"
        >
          <p className="text-[32px] font-extrabold text-green-100">{metric.value}</p>
          <p className="pt-[8px] text-[12px] text-white-300">{metric.label}</p>
        </div>
      ))}
    </div>
  );
}

function ServiceAreas() {
  return (
    <div className="mt-6">
      {resumeData.serviceAreas.map((service) => (
        <div
          data-aos="zoom-in-up"
          key={service.title}
          className="relative mt-3 h-auto w-full rounded-[5px] border border-dark-100 bg-dark-200 p-[18px] transition-all hover:border-green-300"
        >
          <p className="m-0 font-extrabold text-green-100">{service.title}</p>
          <p className="pt-[8px] text-[12px] text-white-300">{service.description}</p>
        </div>
      ))}
    </div>
  );
}
