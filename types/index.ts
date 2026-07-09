export type NavPage = "home" | "about" | "projects" | "blogs" | "archive" | "contact";

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

export interface DeliverySnapshotItem {
  value: string;
  label: string;
}

export interface OwnershipArea {
  title: string;
  description: string;
}

export interface TechnicalStackGroup {
  group: string;
  items: string[];
}

export interface AvailabilityItem {
  label: string;
}

export interface FounderProofLink {
  label: string;
  href: string;
}

export interface FounderProofSection {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  links: FounderProofLink[];
}

export interface CaseStudyMeta {
  role: string;
  timeline: string;
  clientType: string;
  stack: string[];
  links: { label: string; href: string }[];
}

export interface CaseStudySection {
  overview: string;
  role: string;
  metadata?: CaseStudyMeta;
  realScenario?: string;
  problem: string;
  architecture: string[];
  keyFeatures: string[];
  ownedScopeChecklist?: string[];
  challenges: string[];
  tradeoffs: string[];
  outcome: string;
  // Optional detailed bullets; `outcome` remains the canonical summary.
  outcomes?: string[];
  buildNext?: string[];
  relatedNoteSlugs?: string[];
  stack: string[];
}

export type CaseStudyKey = "fullsail" | "sonar" | "tizz";

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
  caseStudyPath?: `/projects/${CaseStudyKey}`;
  context?: string;
  challenge?: string;
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

export interface EngineeringNote {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
  tags: string[];
}

export interface ProjectArchiveItem {
  year?: string;
  title: string;
  summary: string;
  type?: string;
  role?: string;
  proofLabel?: string;
  proofHref?: string;
  caseStudyPath?: string;
  status?: string;
  stack?: string[];
  projectUrl?: string;
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
  deliverySnapshot?: DeliverySnapshotItem[];
  ownershipAreas?: OwnershipArea[];
  technicalStackGroups?: TechnicalStackGroup[];
  availableFor?: AvailabilityItem[];
  founderProof?: FounderProofSection;
  projectCaseStudies?: Record<CaseStudyKey, CaseStudySection>;
  engineeringNotes?: EngineeringNote[];
  projectArchive?: ProjectArchiveItem[];
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
