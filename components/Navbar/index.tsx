import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaEnvelope } from "react-icons/fa6";
import { FiHome, FiMail, FiPackage, FiUser } from "react-icons/fi";
import { resumeData } from "@/data/resume";
import type { NavPage } from "@/types";

interface NavBarProps {
  avatarUrl?: string;
}

export default function NavBar({ avatarUrl }: NavBarProps) {
  return (
    <div className="navbar relative flex h-auto w-full justify-between py-[20px]">
      <div className="left flex w-auto items-start justify-start px-[10px]">
        <p className="mr-[20px] font-extrabold">
          {resumeData.fullName.split(" ")[0]}
        </p>

        <ul className="relative ml-[10px] hidden md:flex">
          <li className="ml-[10px] mr-[10px] mt-[5px] cursor-pointer text-[12px] transition-all hover:font-extrabold hover:text-green-100">
            <Link href="/">Home</Link>
          </li>
          <li className="ml-[10px] mr-[10px] mt-[5px] cursor-pointer text-[12px] transition-all hover:font-extrabold hover:text-green-100">
            <Link href="/about">About</Link>
          </li>
          <li className="ml-[10px] mr-[10px] mt-[5px] cursor-pointer text-[12px] transition-all hover:font-extrabold hover:text-green-100">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="ml-[10px] mr-[10px] mt-[5px] cursor-pointer text-[12px] transition-all hover:font-extrabold hover:text-green-100">
            <Link href="/#contact">Contact</Link>
          </li>
        </ul>
      </div>

      <div className="right relative hidden w-[50vmin] md:flex">
        <ul className="flex flex-row items-center justify-between">
          <a
            href={resumeData.socials.github}
            target="_blank"
            rel="noreferrer"
            className="flex w-[100px] flex-row items-center justify-center text-[17px] hover:text-white"
          >
            <FaGithub className="mr-[10px]" />
            <small>GitHub</small>
          </a>

          <a
            href={`mailto:${resumeData.socials.email}`}
            className="flex w-[100px] flex-row items-center justify-center text-[17px] hover:text-white"
          >
            <FaEnvelope className="icon mail mr-[10px]" />
            <small>Email</small>
          </a>
        </ul>
      </div>

      <div className="absolute right-[25px] top-[15px] md:hidden">
        <Image
          src={avatarUrl ?? "/images/avatar/avatar.png"}
          className="w-[40px] rounded-[50%] border-[2px] border-green-100 bg-dark-100"
          alt={`${resumeData.fullName} avatar`}
          width={40}
          height={40}
        />
      </div>
    </div>
  );
}

interface ResponsiveNavbarProps {
  activePage: NavPage;
  contactHref?: string;
}

export function ResponsiveNavbar({
  activePage,
  contactHref = "#contact",
}: ResponsiveNavbarProps) {
  return (
    <div className="mobileNav md:hidden">
      <div className="main">
        <li className={activePage === "home" ? "active" : "li"}>
          <Link href="/">
            <FiHome className="icon" />
          </Link>
          <label className="label">Home</label>
        </li>
        <li className={activePage === "projects" ? "active" : "li"}>
          <Link href="/projects">
            <FiPackage className="icon" />
          </Link>
          <label className="label">Projects</label>
        </li>
        <li className={activePage === "about" ? "active" : "li"}>
          <Link href="/about">
            <FiUser className="icon" />
          </Link>
          <label className="label">About</label>
        </li>
        <li className={activePage === "contact" ? "active mr-5" : "li mr-5"}>
          <Link href={contactHref}>
            <FiMail className="icon" />
          </Link>
          <label className="label">Contact</label>
        </li>
      </div>
    </div>
  );
}
