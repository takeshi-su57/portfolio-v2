export type NavPage = "home" | "about" | "projects" | "contact";

export interface SocialLinks {
  linkedin: string;
  github: string;
  email: string;
  website: string;
}

export interface SkillCard {
  name: string;
  description: string;
  projectsCompleted: number;
}

export type AudiencePath = "founders" | "recruiters" | "web3_ai_teams";

export interface AudiencePathItem {
  key: AudiencePath;
  label: string;
  href: string;
  description: string;
}

export interface ImpactMetric {
  value: string;
  label: string;
}

export interface ServiceArea {
  title: string;
  description: string;
}

export interface SeoProfile {
  defaultTitle: string;
  titleTemplate: string;
  description: string;
  ogType: "website" | "profile";
}

export interface FeaturedProject {
  title: string;
  imageUrl?: string;
  projectUrl: string;
  description: string;
  outcome?: string;
  tags: string[];
}

export interface EmploymentItem {
  title: string;
  company: string;
  companyUrl: string;
  period: string;
  highlights: string[];
  technologies: string[];
}

export interface ResumeContent {
  fullName: string;
  role: string;
  tagLine: string;
  introTagline: string;
  subTitle: string;
  profileSummary: string;
  yearsOfExperience: number;
  greetingType: string;
  favoriteQuote: string;
  githubUsername: string;
  socials: SocialLinks;
  skills: SkillCard[];
  audiencePaths: AudiencePathItem[];
  impactMetrics: ImpactMetric[];
  serviceAreas: ServiceArea[];
  seoProfile: SeoProfile;
  bio: string[];
  featuredProjects: FeaturedProject[];
  employmentHistory: EmploymentItem[];
  techStackIcons: string[];
  coreCompetencies: string[];
}

export interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  stargazers_count: number;
  forks: number;
  html_url: string;
}

export interface GithubProfile {
  avatar_url: string;
  public_repos: number;
}
