# Portfolio Resume Repositioning Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reposition the portfolio to align with the updated resume and convert three audiences (founders, recruiters, Web3/AI teams) using one clear senior-engineer narrative.

**Architecture:** Keep the current App Router and component structure, but move messaging and section data into a richer typed `resumeData` model. Update homepage sections to include audience lanes, impact metrics, and service cards while reusing existing layout and style language.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS, ESLint

---

## File Structure Map

### Existing files to modify

- `types/index.ts`
  - Extend portfolio data types for audience lanes, impact metrics, services, and SEO profile.
- `data/resume.ts`
  - Replace legacy copy and add resume-aligned structured data used by pages/components.
- `components/Header/index.tsx`
  - Update hero to role-first narrative and add three audience CTA links.
- `components/Intro/index.tsx`
  - Replace old skill card emphasis with impact metrics + service cards.
- `components/Projects/index.tsx`
  - Make project cards outcome-first and improve GitHub section labeling.
- `components/Quotes/index.tsx`
  - Convert summary block to stronger professional positioning copy.
- `components/Contact/index.tsx`
  - Add audience-specific prompt text for founders/recruiters/Web3-AI teams.
- `app/about/page.tsx`
  - Reframe about narrative and timeline headings to resume-aligned language.
- `app/projects/page.tsx`
  - Reframe page intro and headings for selected product work.
- `app/layout.tsx`
  - Use SEO profile fields from data for metadata consistency.

### Optional new files (only if needed during execution)

- `components/ImpactMetrics/index.tsx`
- `components/ServiceAreas/index.tsx`

Default path is to avoid new files and keep changes in existing components unless component size becomes unwieldy.

---

### Task 1: Extend Type Definitions for New Portfolio Content Model

**Files:**
- Modify: `types/index.ts`
- Test: `npm run lint`

- [ ] **Step 1: Add new interfaces before `ResumeContent`**

```ts
export interface AudiencePath {
  id: "founders" | "recruiters" | "web3_ai_teams";
  label: string;
  cta: string;
  blurb: string;
  href: string;
}

export interface ImpactMetric {
  label: string;
  value: string;
  detail: string;
}

export interface ServiceArea {
  title: string;
  summary: string;
  outcomes: string[];
  stack: string[];
}

export interface SeoProfile {
  defaultTitle: string;
  titleTemplate: string;
  description: string;
  ogType: "website";
}
```

- [ ] **Step 2: Extend `FeaturedProject` and `ResumeContent` types**

```ts
export interface FeaturedProject {
  title: string;
  imageUrl?: string;
  projectUrl: string;
  description: string;
  tags: string[];
  outcome?: string;
}

export interface ResumeContent {
  // existing fields stay
  audiencePaths: AudiencePath[];
  impactMetrics: ImpactMetric[];
  serviceAreas: ServiceArea[];
  seoProfile: SeoProfile;
}
```

- [ ] **Step 3: Run lint to verify type file validity**

Run: `npm run lint`
Expected: ESLint passes with no TypeScript parse/type import errors.

- [ ] **Step 4: Commit**

```bash
git add types/index.ts
git commit -m "refactor: extend portfolio data types for audience and impact sections"
```

### Task 2: Refactor `resumeData` to Resume-Aligned Source of Truth

**Files:**
- Modify: `data/resume.ts`
- Test: `npm run lint`

- [ ] **Step 1: Replace top-level messaging fields with resume-aligned copy**

```ts
role: "Senior Software Engineer",
tagLine: "Senior Full-Stack Engineer for AI, Web3, and Cloud products.",
introTagline:
  "I build production-ready software end-to-end, from user-facing product experiences to backend systems and deployment workflows.",
subTitle:
  "7+ years shipping product features across startups and distributed teams.",
profileSummary:
  "Senior Software Engineer with 7+ years of experience building full-stack applications, Web3 products, AI-powered workflows, and cloud-backed systems.",
```

- [ ] **Step 2: Add `audiencePaths`, `impactMetrics`, `serviceAreas`, and `seoProfile`**

```ts
audiencePaths: [
  {
    id: "founders",
    label: "For Founders",
    cta: "Ship MVPs and product iterations faster",
    blurb: "Partner with a senior engineer who can own frontend, backend, and delivery from idea to launch.",
    href: "/#contact",
  },
  {
    id: "recruiters",
    label: "For Recruiters",
    cta: "Evaluate senior full-stack fit quickly",
    blurb: "See experience across SaaS, Web3, AI workflows, and production delivery in distributed teams.",
    href: "/about",
  },
  {
    id: "web3_ai_teams",
    label: "For Web3/AI Teams",
    cta: "Integrate on-chain and AI workflows reliably",
    blurb: "Hands-on with viem/wagmi, blockchain data flows, and modern AI agent engineering patterns.",
    href: "/projects",
  },
],
impactMetrics: [
  { label: "Years", value: "7+", detail: "Professional software engineering experience" },
  { label: "Contracts", value: "5+", detail: "Freelance and contract engagements delivered" },
  { label: "Backend Endpoints", value: "100+", detail: "APIs and workflow endpoints shipped" },
  { label: "UI Delivery", value: "20+", detail: "Custom components and product pages built" },
],
serviceAreas: [
  {
    title: "Product Engineering",
    summary: "Build and ship user-facing product features with clean full-stack ownership.",
    outcomes: ["Faster MVP delivery", "Clear feature ownership", "Stable production rollout"],
    stack: ["TypeScript", "React", "Next.js", "Node.js", "NestJS", "Express.js"],
  },
  {
    title: "AI Agent Workflows",
    summary: "Design AI-assisted workflows and agent-based automations for product teams.",
    outcomes: ["Reduced manual operations", "Faster iteration loops", "Knowledge workflow automation"],
    stack: ["Claude Code", "Codex", "LangChain", "LangGraph", "MCP", "RAG"],
  },
  {
    title: "Web3 / DApp Engineering",
    summary: "Implement wallet-connected UX and on-chain data workflows for DeFi products.",
    outcomes: ["Reliable wallet flows", "On-chain aware UX", "Data-informed product features"],
    stack: ["EVM", "Solidity", "viem", "wagmi", "Next.js", "Indexing"],
  },
  {
    title: "Cloud and DevOps Delivery",
    summary: "Support CI/CD, containers, observability, and cloud deployment workflows.",
    outcomes: ["Safer releases", "Improved reliability", "Production visibility"],
    stack: ["Docker", "Kubernetes", "GitHub Actions", "AWS", "GCP", "Terraform"],
  },
],
seoProfile: {
  defaultTitle: "Takeshi Suzuki | Senior Software Engineer",
  titleTemplate: "%s | Takeshi Suzuki",
  description:
    "Senior Full-Stack Engineer focused on AI workflows, Web3 products, and cloud-backed delivery.",
  ogType: "website",
},
```

- [ ] **Step 3: Update `featuredProjects` descriptions with problem-action-outcome framing and add `outcome` field where helpful**

```ts
{
  title: "UrbanMix Portfolio Platform",
  projectUrl: "https://www.urbanmix.tech/",
  description:
    "Built core workflows for a real-estate portfolio platform, covering frontend delivery, backend services, and integration paths.",
  outcome: "Supported launch readiness in a six-month delivery window.",
  tags: ["TypeScript", "React", "Three.js", "Terraform", "Firebase"],
}
```

- [ ] **Step 4: Run lint to verify new data object satisfies `ResumeContent`**

Run: `npm run lint`
Expected: No type or lint errors in `data/resume.ts`.

- [ ] **Step 5: Commit**

```bash
git add data/resume.ts
git commit -m "refactor: align resume data model and content with senior positioning"
```

### Task 3: Rebuild Hero for Audience Lanes and Stronger Narrative

**Files:**
- Modify: `components/Header/index.tsx`
- Test: `npm run lint`

- [ ] **Step 1: Keep current layout shell, replace hero copy block to use updated fields**

```tsx
<span className="rounded-[3px] bg-green-600 px-[8px] py-[2px] text-[12px] text-green-100">
  {resumeData.role}
</span>
<h1 className="text-[9vmin] md:text-[5vmin]">{resumeData.tagLine}</h1>
<span className="text-[20px] md:text-[2vmin]">{resumeData.subTitle}</span>
```

- [ ] **Step 2: Add audience path CTA row under the subtitle**

```tsx
<div className="mt-6 grid w-full gap-3 md:grid-cols-3">
  {resumeData.audiencePaths.map((path) => (
    <a
      key={path.id}
      href={path.href}
      className="rounded-md border border-dark-100 bg-dark-300 px-3 py-3 hover:border-green-200"
    >
      <p className="text-[12px] font-bold text-green-200">{path.label}</p>
      <p className="mt-1 text-[13px] text-white-100">{path.cta}</p>
    </a>
  ))}
</div>
```

- [ ] **Step 3: Keep resume modal behavior but rename button copy**

```tsx
<button ... type="button">
  View Resume (PDF)
</button>
```

- [ ] **Step 4: Run lint for JSX and hook safety**

Run: `npm run lint`
Expected: No JSX/React lint failures.

- [ ] **Step 5: Commit**

```bash
git add components/Header/index.tsx
git commit -m "feat: add audience-lane hero messaging and CTAs"
```

### Task 4: Replace Intro Skill Cards with Metrics and Services

**Files:**
- Modify: `components/Intro/index.tsx`
- Test: `npm run lint`

- [ ] **Step 1: Replace `IntroCards` dependency on `resumeData.skills` with `resumeData.impactMetrics`**

```tsx
{resumeData.impactMetrics.map((metric) => (
  <div key={metric.label} className="...">
    <p className="text-[24px] font-extrabold text-green-100">{metric.value}</p>
    <p className="text-[13px] font-bold text-white-100">{metric.label}</p>
    <p className="pt-2 text-[12px] text-white-300">{metric.detail}</p>
  </div>
))}
```

- [ ] **Step 2: Add service cards using `resumeData.serviceAreas` below the intro text block**

```tsx
<div className="mt-10 grid gap-4 md:grid-cols-2">
  {resumeData.serviceAreas.map((service) => (
    <article key={service.title} className="rounded-[5px] bg-dark-200 p-4">
      <h3 className="text-[16px] font-bold text-green-100">{service.title}</h3>
      <p className="mt-2 text-[13px] text-white-200">{service.summary}</p>
    </article>
  ))}
</div>
```

- [ ] **Step 3: Remove unused `SkillCard` import and sparkle icon usage if no longer needed**

```tsx
// delete:
import { FaWandMagicSparkles } from "react-icons/fa6";
import type { SkillCard } from "@/types";
```

- [ ] **Step 4: Run lint to catch dead imports and className issues**

Run: `npm run lint`
Expected: No unused import warnings/errors.

- [ ] **Step 5: Commit**

```bash
git add components/Intro/index.tsx
git commit -m "refactor: convert intro section to impact metrics and service areas"
```

### Task 5: Strengthen Projects Section Messaging

**Files:**
- Modify: `components/Projects/index.tsx`
- Modify: `app/projects/page.tsx`
- Test: `npm run lint`

- [ ] **Step 1: Update default heading and GitHub section label text**

```tsx
heading = "Selected Product Work"
...
<h2 className="px-4 text-[20px] text-white-200 md:px-0">Open-Source and GitHub Activity</h2>
```

- [ ] **Step 2: Render `project.outcome` when present**

```tsx
{project.outcome ? (
  <p className="mt-2 text-[12px] text-green-100">Outcome: {project.outcome}</p>
) : null}
```

- [ ] **Step 3: Update `/projects` page subtitle copy**

```tsx
<p className="text-[15px] text-white-300">
  Selected product delivery across SaaS, Web3, and AI-adjacent work.
</p>
```

- [ ] **Step 4: Run lint**

Run: `npm run lint`
Expected: No typing errors for optional `outcome`.

- [ ] **Step 5: Commit**

```bash
git add components/Projects/index.tsx app/projects/page.tsx
git commit -m "refactor: emphasize project outcomes and selected work narrative"
```

### Task 6: Reframe About and Summary Sections

**Files:**
- Modify: `components/Quotes/index.tsx`
- Modify: `app/about/page.tsx`
- Test: `npm run lint`

- [ ] **Step 1: Update quote/summary section heading and descriptor**

```tsx
<h1 className="text-[35px] font-bold md:mr-[50px]">How I Deliver</h1>
<p className="text-[12px] text-white-200">Execution principles for product teams.</p>
```

- [ ] **Step 2: Update about hero subtitle and employment section heading**

```tsx
<p className="text-[15px] text-white-300">Senior engineering journey across product, AI, and Web3 delivery.</p>
...
<h2 className="mb-4 text-[28px] font-bold">Experience Highlights</h2>
```

- [ ] **Step 3: Add technologies line per role for scannability**

```tsx
<p className="mt-3 text-[12px] text-white-300">
  Core stack: {item.technologies.join(", ")}
</p>
```

- [ ] **Step 4: Run lint**

Run: `npm run lint`
Expected: JSX compiles and lint passes.

- [ ] **Step 5: Commit**

```bash
git add components/Quotes/index.tsx app/about/page.tsx
git commit -m "refactor: align about and summary sections with senior delivery narrative"
```

### Task 7: Update Contact and Global Metadata for Conversion Consistency

**Files:**
- Modify: `components/Contact/index.tsx`
- Modify: `app/layout.tsx`
- Test: `npm run lint`

- [ ] **Step 1: Add audience-specific contact helper text near CTA**

```tsx
<p data-aos="fade-right" className="mt-2 text-[14px] text-white-300">
  Founder needing an MVP, recruiter evaluating senior fit, or Web3/AI team shipping fast? Let&apos;s talk.
</p>
```

- [ ] **Step 2: Switch metadata to `resumeData.seoProfile`**

```tsx
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
```

- [ ] **Step 3: Run lint**

Run: `npm run lint`
Expected: Metadata object remains valid TypeScript.

- [ ] **Step 4: Commit**

```bash
git add components/Contact/index.tsx app/layout.tsx
git commit -m "feat: align contact prompts and SEO metadata with new positioning"
```

### Task 8: End-to-End Verification and Final Cleanup

**Files:**
- Verify only; no required file edits
- Test: `npm run lint`, `npm run build`, `npm run dev`

- [ ] **Step 1: Run static verification**

Run: `npm run lint`
Expected: Pass.

Run: `npm run build`
Expected: Next.js production build succeeds.

- [ ] **Step 2: Run manual verification in dev mode**

Run: `npm run dev`

Manual checks:
- Home page hero shows three audience lanes and updated narrative.
- Intro section shows impact metrics and service cards.
- Projects page shows outcome-focused copy.
- About page headings and timeline read consistently with resume.
- Contact section includes audience-focused prompt.
- Mobile and desktop layouts are both usable.

- [ ] **Step 3: Stage final adjustments (if any) and commit**

```bash
git add app/layout.tsx app/page.tsx app/about/page.tsx app/projects/page.tsx components data types
git commit -m "chore: finalize resume-aligned portfolio repositioning"
```

- [ ] **Step 4: Capture change summary for PR/body**

```md
- Repositioned homepage narrative for founders, recruiters, and Web3/AI teams
- Added structured data model for audience paths, impact metrics, and service areas
- Updated about/projects/contact/SEO for consistent senior positioning
- Verified with lint + build + manual responsive checks
```

---

## Self-Review Checklist

### Spec coverage

- Primary narrative: covered by Task 2 and Task 3.
- Information architecture: covered by Tasks 3, 4, 5, 6, 7.
- Content model refactor: covered by Tasks 1 and 2.
- Resume alignment across pages: covered by Tasks 5, 6, 7.
- Verification plan: covered by Task 8.

### Placeholder scan

- No unresolved placeholders included.
- Each task contains concrete paths, snippets, and commands.

### Type consistency

- New fields introduced in `types/index.ts` are consumed by `data/resume.ts` and referenced in components.
- Optional `FeaturedProject.outcome` handled with conditional rendering.
