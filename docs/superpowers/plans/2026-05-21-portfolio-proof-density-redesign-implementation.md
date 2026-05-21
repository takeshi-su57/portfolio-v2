# Portfolio Proof-Density Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rework the portfolio into a proof-first senior Web3/AI positioning experience with stronger conversion, deeper project evidence, and dedicated case-study routes.

**Architecture:** Keep existing Next.js App Router structure and editorial-themed components, but update homepage composition and data-driven content. Add typed data fields in `data/resume.ts` and render new sections from `app/page.tsx` with reusable in-file section blocks. Create three dedicated case-study pages in `app/projects/*` that reuse `Layout`, `Section`, and `EditorialHeading`.

**Tech Stack:** Next.js App Router, React, TypeScript, Tailwind CSS

---

## File Structure Map

- Modify: `data/resume.ts`
  - Expand hero copy, proof metrics, skill cards, available-for list, technical stack groups, strengthened project data, case-study content blocks.
- Modify: `types/index.ts`
  - Add/extend interfaces for new data-driven structures (hero CTA targets, case study schema, stack groups, availability items).
- Modify: `app/page.tsx`
  - Reorder sections and render: Hero, Delivery Snapshot, Ownership, Projects, Experience, Technical Stack, Available For.
- Modify: `components/Theme/ProjectGrid.tsx`
  - Update project card structure to show context/challenge/ownership emphasis and route to case studies where available.
- Modify: `app/projects/page.tsx`
  - Ensure project list page description and card links align with case-study-first behavior.
- Create: `app/projects/fullsail/page.tsx`
- Create: `app/projects/sonar/page.tsx`
- Create: `app/projects/tizz/page.tsx`
  - Each route renders the common case-study template sections from `resumeData`.
- Modify: `components/Contact/index.tsx`
  - Sharpen conversion copy and add direct contact links (email/github/linkedin/resume).
- Modify: `components/Footer/index.tsx`
  - Add visible resume download link in footer utilities.

### Task 1: Extend Shared Types for New Content Schema

**Files:**
- Modify: `types/index.ts`
- Test: `npm run lint`

- [ ] **Step 1: Add type definitions for new homepage and project-case-study content**

```ts
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

export interface CaseStudySection {
  overview: string;
  role: string;
  problem: string;
  architecture: string[];
  keyFeatures: string[];
  challenges: string[];
  tradeoffs: string[];
  outcome: string;
  stack: string[];
}
```

- [ ] **Step 2: Extend existing `FeaturedProject` and `ResumeContent` types to include case-study routing and new section collections**

```ts
export interface FeaturedProject {
  title: string;
  imageUrl: string;
  projectUrl: string;
  description: string;
  outcome?: string;
  tags: string[];
  caseStudyPath?: string;
  context?: string;
  challenge?: string;
}

export interface ResumeContent {
  // keep all existing ResumeContent fields above
  deliverySnapshot: DeliverySnapshotItem[];
  ownershipAreas: OwnershipArea[];
  technicalStackGroups: TechnicalStackGroup[];
  availableFor: AvailabilityItem[];
  projectCaseStudies: Record<string, CaseStudySection>;
}
```

- [ ] **Step 3: Run lint to ensure type additions compile cleanly**

Run: `npm run lint`
Expected: lint passes with no new type errors.

- [ ] **Step 4: Commit**

```bash
git add types/index.ts
git commit -m "feat: add content schema types for proof-density portfolio sections"
```

### Task 2: Refresh Portfolio Content Data

**Files:**
- Modify: `data/resume.ts`
- Test: `npm run lint`

- [ ] **Step 1: Replace hero role/tagline text with approved positioning copy**

```ts
role: "Senior Full-Stack Engineer for Web3, AI, and Production Product Teams",
introTagline:
  "I help founders and engineering teams turn complex ideas into shipped software: frontend experiences, backend APIs, blockchain integrations, AI workflows, CI/CD, and cloud infrastructure.",
profileSummary:
  "Strongest in fast-moving teams where one engineer needs to own product delivery from architecture to production.",
favoriteQuote:
  "I connect product UX, business logic, blockchain data, AI workflows, and infrastructure into one reliable production system.",
```

- [ ] **Step 2: Add new collections for delivery snapshot, ownership areas, technical stack groups, and available-for list**

```ts
deliverySnapshot: [
  { value: "7+", label: "Years building production software" },
  { value: "5+", label: "Contract engagements delivered" },
  { value: "100+", label: "Backend endpoints shipped" },
  { value: "20+", label: "Reusable UI components built" },
  { value: "Sui / EVM / Solana / Botanix", label: "Web3 delivery coverage" },
],
ownershipAreas: [
  { title: "Product Engineering", description: "Turn unclear requirements into production features, reusable UI systems, and maintainable delivery workflows." },
  { title: "Web3 Systems", description: "Own wallet flows, contract interactions, indexers, event pipelines, and multi-chain integrations across Sui, EVM, Solana, and Botanix." },
  { title: "Backend and Data", description: "Build NestJS and Express APIs with PostgreSQL, MongoDB, Redis, Prisma, and event-driven workflows." },
  { title: "Frontend Architecture", description: "Design responsive product interfaces with React, Next.js, TypeScript, and Tailwind." },
  { title: "AI-Native Engineering", description: "Integrate Claude Code, Codex, LangChain, LangGraph, MCP, and RAG workflows for practical automation." },
  { title: "Infrastructure and DevOps", description: "Set up Dockerized workflows, CI/CD, cloud deployments, and production monitoring with Grafana and Prometheus." },
],
technicalStackGroups: [
  { group: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "wagmi"] },
  { group: "Backend", items: ["Node.js", "NestJS", "Express", "GraphQL", "REST"] },
  { group: "Data", items: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Prisma"] },
  { group: "Web3", items: ["Sui", "EVM", "Solana", "Botanix", "viem", "wallet integrations", "indexers"] },
  { group: "AI", items: ["Claude Code", "Codex", "LangChain", "LangGraph", "MCP", "RAG"] },
  { group: "Infrastructure", items: ["Docker", "GitHub Actions", "AWS", "GCP", "Terraform", "Kubernetes", "Grafana", "Prometheus"] },
],
availableFor: [
  { label: "Senior full-stack engineering roles" },
  { label: "Web3 product engineering" },
  { label: "DApp frontend/backend development" },
  { label: "Blockchain indexer and data pipeline work" },
  { label: "AI workflow and agent development" },
  { label: "Contract or fractional product engineering" },
  { label: "Open-source collaboration with funded teams" },
],
```

- [ ] **Step 3: Update project entries to include case-study links and richer context/challenge fields**

```ts
{
  title: "Tizz",
  projectUrl: "/projects/tizz",
  caseStudyPath: "/projects/tizz",
  context: "Perp trading product with custom Botanix indexing requirements.",
  challenge: "No subgraph support, requiring reliable event ingestion and sync.",
  outcome: "Launched responsive perp UX and reliable off-chain indexing for high-frequency updates.",
}
```

- [ ] **Step 4: Add `projectCaseStudies` object with full sections for fullsail/sonar/tizz**

```ts
projectCaseStudies: {
  fullsail: {
    overview: "FullSail is a Sui-based Ve(3,3)-inspired DEX focused on sustainable liquidity, voting, and emissions mechanics.",
    role: "Owned frontend product surfaces, backend API integration, and on-chain interaction flows for swap, liquidity, and governance.",
    problem: "Translate complex DeFi mechanics into reliable UX while handling wallet and transaction-state complexity.",
    architecture: ["Next.js frontend", "NestJS API", "GraphQL data layer", "Sui RPC and contract interaction", "AWS ECS deployment"],
    keyFeatures: ["Swap and liquidity flows", "Governance and voting screens", "Wallet-connected transaction handling"],
    challenges: ["Sui object model integration", "Transaction state reliability", "Synchronizing product state with on-chain updates"],
    tradeoffs: ["Separated chain-specific data adapters from UI logic", "Balanced live updates with API caching to reduce UX jitter"],
    outcome: "Shipped a production-ready DEX experience with complete swap, liquidity, and governance surfaces.",
    stack: ["Next.js", "NestJS", "Sui", "GraphQL", "AWS ECS"],
  },
  // sonar, tizz
}
```

- [ ] **Step 5: Run lint**

Run: `npm run lint`
Expected: lint passes and no schema mismatch errors.

- [ ] **Step 6: Commit**

```bash
git add data/resume.ts
git commit -m "feat: refresh portfolio content for proof-first positioning"
```

### Task 3: Recompose Homepage Sections and Hero CTAs

**Files:**
- Modify: `app/page.tsx`
- Test: `npm run lint`

- [ ] **Step 1: Replace current intro block with updated hero copy and CTA buttons**

```tsx
<div className="mt-6 flex flex-wrap gap-3">
  <a href="#projects" className="inline-flex items-center rounded-sm border border-[var(--line)] px-4 py-2 text-[13px] text-[var(--text)] hover:bg-[var(--line)]">View Projects</a>
  <a href="/CV/resume.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-sm border border-[var(--line)] px-4 py-2 text-[13px] text-[var(--text)] hover:bg-[var(--line)]">Download Resume</a>
  <button type="button" onClick={() => window.dispatchEvent(new CustomEvent("open-contact-modal"))} className="inline-flex items-center rounded-sm border border-[var(--line)] px-4 py-2 text-[13px] text-[var(--text)] hover:bg-[var(--line)]">Contact Me</button>
</div>
```

- [ ] **Step 2: Add Delivery Snapshot section directly under hero using `resumeData.deliverySnapshot`**

```tsx
<ul className="mt-6 grid gap-3 md:grid-cols-3">
  {resumeData.deliverySnapshot.map((item) => (
    <li key={item.label} className="border border-[var(--line)] p-4">
      <p className="text-[20px] font-semibold">{item.value}</p>
      <p className="text-[13px] text-[var(--muted)]">{item.label}</p>
    </li>
  ))}
</ul>
```

- [ ] **Step 3: Add “What I Can Own End-to-End” section from `ownershipAreas`**

```tsx
<EditorialHeading as="h2" eyebrow="Ownership" title="What I Can Own End-to-End" />
```

- [ ] **Step 4: Move Featured Projects section above Experience Highlights**

Run: move section block order in `app/page.tsx` so projects render before timeline.
Expected: route renders proof-first page flow.

- [ ] **Step 5: Add Technical Stack and Available For sections before Contact**

```tsx
<EditorialHeading as="h2" eyebrow="Stack" title="Technical Stack" />
<EditorialHeading as="h2" eyebrow="Availability" title="Available For" />
```

- [ ] **Step 6: Run lint**

Run: `npm run lint`
Expected: no JSX/type errors.

- [ ] **Step 7: Commit**

```bash
git add app/page.tsx
git commit -m "feat: restructure homepage with proof-first narrative and CTAs"
```

### Task 4: Upgrade Project Grid Card Framing

**Files:**
- Modify: `components/Theme/ProjectGrid.tsx`
- Test: `npm run lint`

- [ ] **Step 1: Render context/challenge summaries when available**

```tsx
{project.context ? <p className="text-[12px] text-[var(--text)]">Context: {project.context}</p> : null}
{project.challenge ? <p className="text-[12px] text-[var(--muted)]">Challenge: {project.challenge}</p> : null}
```

- [ ] **Step 2: Route CTA to case-study path when present, otherwise external URL**

```tsx
const href = project.caseStudyPath ?? project.projectUrl;
const external = href.startsWith("http");
```

- [ ] **Step 3: Update CTA label based on destination**

```tsx
{project.caseStudyPath ? "View case study" : "View project"}
```

- [ ] **Step 4: Run lint**

Run: `npm run lint`
Expected: clean build-time typing.

- [ ] **Step 5: Commit**

```bash
git add components/Theme/ProjectGrid.tsx
git commit -m "feat: strengthen project cards and support case-study routing"
```

### Task 5: Add FullSail, Sonar, and Tizz Case Study Pages

**Files:**
- Create: `app/projects/fullsail/page.tsx`
- Create: `app/projects/sonar/page.tsx`
- Create: `app/projects/tizz/page.tsx`
- Test: `npm run lint`

- [ ] **Step 1: Create shared page structure in each route using existing layout components**

```tsx
import { EditorialHeading, Layout, Section } from "@/components";
import { resumeData } from "@/data/resume";

const study = resumeData.projectCaseStudies.fullsail;
```

- [ ] **Step 2: Implement required sections per page template**

```tsx
<EditorialHeading as="h1" eyebrow="Case Study" title="FullSail" description={study.overview} />
<h2>My Role</h2>
<p>{study.role}</p>
<h2>Problem</h2>
<p>{study.problem}</p>
```

- [ ] **Step 3: Add architecture flow block and lists for features/challenges/tradeoffs/stack**

```tsx
<ul>{study.architecture.map((line) => <li key={line}>{line}</li>)}</ul>
```

- [ ] **Step 4: Add metadata title/description for each page**

```ts
export const metadata = { title: "FullSail Case Study" };
```

- [ ] **Step 5: Run lint**

Run: `npm run lint`
Expected: all new routes type-check and lint pass.

- [ ] **Step 6: Commit**

```bash
git add app/projects/fullsail/page.tsx app/projects/sonar/page.tsx app/projects/tizz/page.tsx
git commit -m "feat: add project case-study pages for fullsail sonar and tizz"
```

### Task 6: Align Projects Index Page Copy and Behavior

**Files:**
- Modify: `app/projects/page.tsx`
- Test: `npm run lint`

- [ ] **Step 1: Update page description toward case-study narrative**

```tsx
description="Case studies and selected product delivery across Web3, AI, and SaaS platforms."
```

- [ ] **Step 2: Ensure list page still uses `ProjectGrid` with new case-study-aware CTAs**

Run: no extra code path needed beyond using current component.
Expected: Tizz no longer appears as dead external link.

- [ ] **Step 3: Run lint**

Run: `npm run lint`
Expected: no regressions.

- [ ] **Step 4: Commit**

```bash
git add app/projects/page.tsx
git commit -m "chore: tune projects page copy for case-study framing"
```

### Task 7: Strengthen Contact Conversion + Resume Visibility

**Files:**
- Modify: `components/Contact/index.tsx`
- Modify: `components/Footer/index.tsx`
- Test: `npm run lint`

- [ ] **Step 1: Rewrite contact headline/subtext with practical delivery language**

```tsx
<h2>Need a senior engineer who can ship across product, Web3, AI, and infrastructure?</h2>
<p>Send your goal, timeline, and current blocker. I will reply with a practical path to delivery.</p>
```

- [ ] **Step 2: Add direct action links under contact intro**

```tsx
<a href={`mailto:${resumeData.socials.email}`}>Email</a>
<a href={resumeData.socials.github} target="_blank" rel="noreferrer">GitHub</a>
<a href={resumeData.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
<a href="/CV/resume.pdf" target="_blank" rel="noreferrer">Resume PDF</a>
```

- [ ] **Step 3: Add footer resume download affordance**

```tsx
<a href="/CV/resume.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-sm border border-[var(--line)] px-4 py-2 text-[13px] text-[var(--text)] hover:bg-[var(--line)]">Download Resume</a>
```

- [ ] **Step 4: Run lint**

Run: `npm run lint`
Expected: no accessibility/lint regressions.

- [ ] **Step 5: Commit**

```bash
git add components/Contact/index.tsx components/Footer/index.tsx
git commit -m "feat: improve contact conversion and add resume access points"
```

### Task 8: Full Verification and Final Polish

**Files:**
- Modify (if needed): any touched file for fixes discovered during verification
- Test: `npm run build`, `npm run dev`

- [ ] **Step 1: Run full lint and build verification**

Run: `npm run lint && npm run build`
Expected: both commands pass.

- [ ] **Step 2: Run dev server and manually validate touched routes**

Run: `npm run dev`
Expected checks:
- Homepage order matches approved structure
- Hero CTAs behave correctly
- Featured project CTAs route correctly (including Tizz)
- `/projects/fullsail`, `/projects/sonar`, `/projects/tizz` render all required sections
- Mobile and desktop layouts remain coherent
- Contact modal still opens and submits with unchanged logic

- [ ] **Step 3: Apply any small verification fixes and re-run lint/build**

Run: `npm run lint && npm run build`
Expected: pass after fixes.

- [ ] **Step 4: Commit verification fixes and summarize**

```bash
git add app/page.tsx data/resume.ts types/index.ts components/Theme/ProjectGrid.tsx app/projects/page.tsx app/projects/fullsail/page.tsx app/projects/sonar/page.tsx app/projects/tizz/page.tsx components/Contact/index.tsx components/Footer/index.tsx
git commit -m "feat: complete proof-density portfolio redesign with case studies"
```


