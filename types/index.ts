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

export interface FeaturedProject {
  title: string;
  imageUrl?: string;
  projectUrl: string;
  description: string;
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
  bio: string[];
  featuredProjects: FeaturedProject[];
  employmentHistory: EmploymentItem[];
  techStackIcons: string[];
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
