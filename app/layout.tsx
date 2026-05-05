import type { Metadata } from "next";
import "aos/dist/aos.css";
import "@/styles/global.css";
import AosInitializer from "@/components/AosInitializer";
import { resumeData } from "@/data/resume";

export const metadata: Metadata = {
  title: {
    default: `${resumeData.fullName} | ${resumeData.role}`,
    template: `%s | ${resumeData.fullName}`,
  },
  description: resumeData.profileSummary,
  openGraph: {
    title: `${resumeData.fullName} | ${resumeData.role}`,
    description: resumeData.profileSummary,
    type: "website",
    url: resumeData.socials.website,
  },
  twitter: {
    card: "summary_large_image",
    title: `${resumeData.fullName} | ${resumeData.role}`,
    description: resumeData.profileSummary,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AosInitializer />
        {children}
      </body>
    </html>
  );
}
