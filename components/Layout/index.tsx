import { NavBar } from "@/components";
import { ResponsiveNavbar } from "@/components/Navbar";
import type { NavPage } from "@/types";

interface LayoutProps {
  children: React.ReactNode;
  activePage: NavPage;
  avatarUrl?: string;
}

export default function Layout({
  children,
  activePage,
  avatarUrl,
}: LayoutProps) {
  return (
    <div className="min-h-screen w-full bg-[var(--surface)] pb-[calc(4.5rem+env(safe-area-inset-bottom))] text-[var(--text)] md:pb-0">
      <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[var(--surface)] backdrop-blur">
        <div className="editorial-container">
          <NavBar avatarUrl={avatarUrl} activePage={activePage} />
        </div>
      </header>
      {children}
      <ResponsiveNavbar activePage={activePage} />
    </div>
  );
}
