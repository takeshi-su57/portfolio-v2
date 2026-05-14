import type { Metadata } from "next";
import "aos/dist/aos.css";
import "@/styles/global.css";
import AosInitializer from "@/components/AosInitializer";
import { resumeData } from "@/data/resume";

export const metadata: Metadata = {
  title: {
    default: resumeData.seoProfile.defaultTitle,
    template: resumeData.seoProfile.titleTemplate,
  },
  description: resumeData.seoProfile.description,
  openGraph: {
    title: resumeData.seoProfile.defaultTitle,
    description: resumeData.seoProfile.description,
    type: resumeData.seoProfile.ogType,
    url: resumeData.socials.website,
  },
  twitter: {
    card: "summary_large_image",
    title: resumeData.seoProfile.defaultTitle,
    description: resumeData.seoProfile.description,
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
