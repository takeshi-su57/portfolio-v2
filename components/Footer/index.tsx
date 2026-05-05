import { AiFillMail } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { FiGlobe } from "react-icons/fi";
import { Container } from "@/components";
import { resumeData } from "@/data/resume";

export default function Footer() {
  return (
    <div id="footer" className="relative h-[35vh] w-screen bg-dark-300 px-3 py-5">
      <Container>
        <div className="relative flex flex-row items-center justify-between">
          <div className="left flex flex-row">
            <h1 className="text-[15px]">
              <span className="font-extrabold">{resumeData.fullName}</span>
            </h1>
            <small className="ml-[20px] text-white-200">
              &copy; {new Date().getFullYear()} All Rights Reserved.
            </small>
          </div>

          <div className="right">
            <div className="socials flex flex-row items-center justify-center">
              <SocialLink url={resumeData.socials.linkedin}>
                <FaLinkedin />
              </SocialLink>
              <SocialLink url={resumeData.socials.github}>
                <FaGithub />
              </SocialLink>
              <SocialLink url={`mailto:${resumeData.socials.email}`}>
                <AiFillMail />
              </SocialLink>
              <SocialLink url={resumeData.socials.website}>
                <FiGlobe />
              </SocialLink>
            </div>
          </div>
        </div>
      </Container>
      <Credit />
    </div>
  );
}

interface SocialLinkProps {
  url: string;
  children: React.ReactNode;
}

function SocialLink({ url, children }: SocialLinkProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="mr-4 text-white-100 no-underline hover:text-white-100"
    >
      {children}
    </a>
  );
}

function Credit() {
  return (
    <div className="absolute bottom-[100px] flex w-screen flex-row items-center justify-center md:bottom-[10px]">
      <span className="py-2 text-[12px] text-white-200">
        Crafted with precision by {resumeData.fullName}
      </span>
    </div>
  );
}
