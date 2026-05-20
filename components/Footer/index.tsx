"use client";

import { AiFillMail } from "react-icons/ai";
import { FaGithub } from "react-icons/fa6";
import { FiGlobe } from "react-icons/fi";
import { AiFillMessage } from "react-icons/ai";
import { resumeData } from "@/data/resume";

export default function Footer() {
  return (
    <div id="footer" className="relative w-screen bg-[var(--surface)] px-3 py-8 md:py-10">
      <div className="editorial-container">
        <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="left flex flex-col gap-1 md:flex-row md:items-center">
            <p className="text-[15px] text-[var(--text)]">
              <span className="font-extrabold">{resumeData.fullName}</span>
            </p>
            <small className="text-[var(--muted)] md:ml-5">
              &copy; {new Date().getFullYear()} All Rights Reserved.
            </small>
          </div>
        </div>
      </div>
      <div className="fixed bottom-6 right-4 z-[80] flex flex-col items-center gap-2 rounded-xl border border-[var(--line)] bg-[var(--surface)]/92 p-2 shadow-sm backdrop-blur md:right-6">
        <button
          type="button"
          aria-label="Open contact form"
          onClick={() => window.dispatchEvent(new CustomEvent("open-contact-modal"))}
          className="mr-2 inline-flex items-center justify-center rounded-md border border-[var(--line)] p-2 text-[var(--muted)] no-underline transition-colors hover:bg-[var(--line)] hover:text-[var(--text)]"
        >
          <AiFillMessage />
        </button>
        <SocialLink url={resumeData.socials.github} label="GitHub">
          <FaGithub />
        </SocialLink>
        <SocialLink url={`mailto:${resumeData.socials.email}`} label="Email">
          <AiFillMail />
        </SocialLink>
        <SocialLink url={resumeData.socials.website} label="Website">
          <FiGlobe />
        </SocialLink>
      </div>
      <Credit />
    </div>
  );
}

interface SocialLinkProps {
  url: string;
  label: string;
  children: React.ReactNode;
}

function SocialLink({ url, label, children }: SocialLinkProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="mr-2 inline-flex items-center justify-center rounded-md border border-[var(--line)] p-2 text-[var(--muted)] no-underline transition-colors hover:bg-[var(--line)] hover:text-[var(--text)]"
    >
      {children}
    </a>
  );
}

function Credit() {
  return (
    <div className="mt-8 flex w-full flex-row items-center justify-start pt-2 md:justify-center">
      <span className="py-2 text-[12px] text-[var(--muted)]">
        Crafted with precision by {resumeData.fullName}
      </span>
    </div>
  );
}
