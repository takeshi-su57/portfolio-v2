import { Header, NavBar } from "@/components";
import { ResponsiveNavbar } from "@/components/Navbar";
import type { NavPage } from "@/types";

interface LayoutProps {
  children: React.ReactNode;
  activePage: NavPage;
  avatarUrl?: string;
  repoCount: number;
}

export default function Layout({
  children,
  activePage,
  avatarUrl,
  repoCount,
}: LayoutProps) {
  return (
    <div className="h-screen w-screen">
      <Header avatarUrl={avatarUrl} repoCount={repoCount}>
        <NavBar avatarUrl={avatarUrl} />
      </Header>
      {children}
      <ResponsiveNavbar activePage={activePage} />
    </div>
  );
}
