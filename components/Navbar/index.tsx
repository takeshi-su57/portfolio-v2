import Link from "next/link";
import Image from "next/image";
import { FiArchive, FiBookOpen, FiMail, FiPackage } from "react-icons/fi";
import { resumeData } from "@/data/resume";
import type { NavPage } from "@/types";

interface NavBarProps {
  avatarUrl?: string;
  activePage?: NavPage;
}

const navItems: { key: Exclude<NavPage, "home" | "about">; label: string; href: string }[] = [
  { key: "projects", label: "Projects", href: "/projects" },
  { key: "notes", label: "Notes", href: "/notes" },
  { key: "archive", label: "Archive", href: "/archive" },
  { key: "contact", label: "Contact", href: "/#contact" },
];
const mobileIconByKey: Record<Exclude<NavPage, "home" | "about">, React.ComponentType<{ className?: string }>> = {
  projects: FiPackage,
  notes: FiBookOpen,
  archive: FiArchive,
  contact: FiMail,
};

function linkClass(isActive: boolean): string {
  return `border-b-2 pb-1 text-[13px] transition-colors ${
    isActive
      ? "border-[var(--text)] font-semibold text-[var(--text)]"
      : "border-transparent text-[var(--muted)] hover:border-[var(--line)] hover:text-[var(--text)]"
  }`;
}

export default function NavBar({ avatarUrl, activePage }: NavBarProps) {
  return (
    <nav className="navbar relative flex h-auto w-full items-center justify-between py-5">
      <div className="left flex w-auto items-center justify-start">
        <Link
          href="/"
          className="mr-6 text-[15px] font-extrabold text-[var(--text)] underline-offset-4 hover:underline"
        >
          {resumeData.fullName.split(" ")[0]}
        </Link>
      </div>

      <div className="right relative hidden md:flex">
        <ul className="relative hidden items-center gap-5 md:flex">
          {navItems.map((item) => (
            <li key={item.key}>
              <Link
                href={item.href}
                aria-current={activePage === item.key ? "page" : undefined}
                className={linkClass(activePage === item.key)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="absolute right-0 top-3 md:hidden">
        <Image
          src={avatarUrl ?? "/images/avatar/avatar.png"}
          className="w-[40px] rounded-full border border-[var(--line)] bg-white"
          alt={`${resumeData.fullName} avatar`}
          width={40}
          height={40}
        />
      </div>
    </nav>
  );
}

interface ResponsiveNavbarProps {
  activePage: NavPage;
  contactHref?: string;
}

export function ResponsiveNavbar({
  activePage,
  contactHref = "/#contact",
}: ResponsiveNavbarProps) {
  const items = navItems.map((item) => ({
    ...item,
    href: item.key === "contact" ? contactHref : item.href,
    icon: mobileIconByKey[item.key],
  }));

  return (
    <nav
      aria-label="Mobile navigation"
      className="fixed bottom-0 left-0 z-[1000] w-full border-t border-[var(--line)] bg-[var(--surface)]/95 px-3 py-2 backdrop-blur md:hidden"
    >
      <ul className="mx-auto flex w-full max-w-[500px] items-center justify-between">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activePage === item.key;
          return (
            <li key={item.key}>
              <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`flex min-w-[72px] flex-col items-center gap-1 rounded-md px-2 py-1 ${
                  isActive ? "text-[var(--text)]" : "text-[var(--muted)]"
                }`}
              >
                <span
                  className={`rounded-full p-2 ${
                    isActive
                      ? "bg-[var(--line)] text-[var(--text)]"
                      : "bg-transparent text-[var(--muted)]"
                  }`}
                >
                  <Icon className="text-[18px]" />
                </span>
                <span className="text-[11px]">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
