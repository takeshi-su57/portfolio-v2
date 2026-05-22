# Portfolio Product-Site Upgrade Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship a production-ready portfolio upgrade with richer storytelling surfaces (Notes + Archive), upgraded case-study depth, and subtle premium interactions while preserving current visual brand and performance.

**Architecture:** Extend the existing App Router + `resumeData` content model with typed `engineeringNotes`, `projectArchive`, and expanded case-study fields, then render those through reusable UI primitives (`CaseStudyLayout`, `RevealWrapper`, cards/lists). Refactor duplicated project pages into a shared case-study template and add new `/notes` and `/archive` routes with internal linking.

**Tech Stack:** Next.js App Router, React, TypeScript, Tailwind CSS, existing repo component patterns

---

## File Structure Map

- Modify: `types/index.ts`
  - Extend `ResumeContent` and related interfaces for notes, archive, and richer case-study schema.
- Modify: `data/resume.ts`
  - Add real note entries, archive entries, and expanded case-study data.
- Modify: `components/index.ts`
  - Export new shared components.
- Create: `components/Theme/RevealWrapper.tsx`
  - Shared subtle reveal wrapper with reduced-motion safety.
- Create: `components/Theme/BestFitPills.tsx`
  - New best-fit/availability section component.
- Create: `components/Theme/EngineeringNoteCard.tsx`
  - Reusable note preview card.
- Create: `components/Theme/ArchivePreview.tsx`
  - Homepage archive preview block.
- Create: `components/Theme/ArchiveTable.tsx`
  - Full archive table/list component.
- Create: `components/Theme/CaseStudyLayout.tsx`
  - Shared case-study page structure with sticky metadata rail.
- Create: `components/Theme/CaseStudySections.tsx`
  - Modular case-study content sections (scenario, owned, challenges, etc.).
- Modify: `components/Navbar/index.tsx`
  - Add `Notes` and `Archive` nav links and mobile icon mapping updates.
- Modify: `app/page.tsx`
  - Reorder sections and insert notes + archive previews + subtle reveals.
- Create: `app/notes/page.tsx`
  - Notes index page.
- Create: `app/notes/[slug]/page.tsx`
  - Note detail page with `generateStaticParams`.
- Create: `app/archive/page.tsx`
  - Archive page.
- Modify: `app/projects/fullsail/page.tsx`
  - Migrate to shared case-study layout/sections.
- Modify: `app/projects/sonar/page.tsx`
  - Migrate to shared case-study layout/sections.
- Modify: `app/projects/tizz/page.tsx`
  - Migrate to shared case-study layout/sections.

---

### Task 1: Extend Domain Types

**Files:**
- Modify: `types/index.ts`
- Test: `npm run lint`

- [ ] **Step 1: Write the failing type-usage stub**

```ts
// Intentional type check snippet to add temporarily in data/resume.ts later:
// resumeData.engineeringNotes?.map((note) => note.slug);
// Should fail until types are added.
```

- [ ] **Step 2: Run lint/type check to verify current schema does not support new fields**

Run: `npm run lint`  
Expected: PASS currently, but no typed support for `engineeringNotes` / `projectArchive` / rich case-study fields.

- [ ] **Step 3: Implement type additions in `types/index.ts`**

```ts
export interface EngineeringNote {
  slug: string;
  title: string;
  excerpt: string;
  category: "Web3" | "AI" | "Full-Stack" | "Delivery" | "Startup Engineering";
  publishedAt: string;
  readTime: string;
  body: { heading: string; paragraphs: string[] }[];
  relatedProjectKeys?: CaseStudyKey[];
}

export interface ProjectArchiveItem {
  year: number;
  title: string;
  type: string;
  role: string;
  stack: string[];
  proofLabel: string;
  proofHref: string;
  caseStudyPath?: `/projects/${CaseStudyKey}`;
}

export interface CaseStudyMeta {
  role: string;
  timeline: string;
  clientType: string;
  stack: string[];
  links: { label: string; href: string }[];
}
```

- [ ] **Step 4: Extend `CaseStudySection` and `ResumeContent` interfaces**

```ts
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
  metadata?: CaseStudyMeta;
  realScenario?: string;
  ownedScopeChecklist?: string[];
  outcomes?: string[];
  buildNext?: string[];
  relatedNoteSlugs?: string[];
}

export interface ResumeContent {
  // existing fields...
  engineeringNotes?: EngineeringNote[];
  projectArchive?: ProjectArchiveItem[];
}
```

- [ ] **Step 5: Run lint to verify updated type file compiles**

Run: `npm run lint`  
Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add types/index.ts
git commit -m "feat: extend portfolio domain types for notes archive and case-study depth"
```

### Task 2: Add Real Content Data

**Files:**
- Modify: `data/resume.ts`
- Test: `npm run lint`

- [ ] **Step 1: Add `engineeringNotes` with 3 real entries**

```ts
engineeringNotes: [
  {
    slug: "reliable-transaction-ux-web3",
    title: "Designing Reliable Transaction UX for Web3 Products",
    excerpt: "How to make pending/success/failure states trustworthy in wallet-driven flows.",
    category: "Web3",
    publishedAt: "2026-05-21",
    readTime: "8 min",
    body: [
      {
        heading: "Why transaction UX fails",
        paragraphs: [
          "Most teams design happy-path confirmations...",
          "Reliable UX requires explicit state transitions..."
        ]
      }
    ],
    relatedProjectKeys: ["fullsail", "tizz"]
  }
  // plus 2 additional real posts
]
```

- [ ] **Step 2: Add `projectArchive` entries with proof links**

```ts
projectArchive: [
  {
    year: 2025,
    title: "Tizz",
    type: "Perp trading / Web3",
    role: "Frontend + indexer",
    stack: ["Next.js", "NestJS", "Viem", "Redis"],
    proofLabel: "Case Study",
    proofHref: "/projects/tizz",
    caseStudyPath: "/projects/tizz"
  }
  // add Sonar, FullSail, and additional trustworthy entries
]
```

- [ ] **Step 3: Expand each `projectCaseStudies` item with richer fields**

```ts
fullsail: {
  // existing keys...
  metadata: {
    role: "Senior Full-Stack Engineer",
    timeline: "2024",
    clientType: "DeFi product team",
    stack: ["Next.js", "NestJS", "Sui", "GraphQL", "AWS ECS"],
    links: [{ label: "Live Product", href: "https://fullsail.finance/" }]
  },
  realScenario: "Liquidity providers and traders needed...",
  ownedScopeChecklist: [
    "Designed swap/liquidity/governance UI flows",
    "Integrated wallet transaction states"
  ],
  outcomes: [
    "Shipped swap, liquidity, and governance flows in production",
    "Stabilized wallet transaction-state messaging"
  ],
  buildNext: [
    "Transaction timeline for users",
    "Indexer observability dashboard"
  ],
  relatedNoteSlugs: ["reliable-transaction-ux-web3"]
}
```

- [ ] **Step 4: Run lint to verify content satisfies `ResumeContent`**

Run: `npm run lint`  
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add data/resume.ts
git commit -m "feat: add engineering notes archive and richer case-study content data"
```

### Task 3: Build Shared Presentation Primitives

**Files:**
- Create: `components/Theme/RevealWrapper.tsx`
- Create: `components/Theme/BestFitPills.tsx`
- Create: `components/Theme/EngineeringNoteCard.tsx`
- Create: `components/Theme/ArchivePreview.tsx`
- Create: `components/Theme/ArchiveTable.tsx`
- Modify: `components/index.ts`
- Test: `npm run lint`

- [ ] **Step 1: Add `RevealWrapper` with reduced-motion support**

```tsx
"use client";
import { useEffect, useRef, useState } from "react";

export default function RevealWrapper({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) {
      setShown(true);
      return;
    }
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setShown(true);
    }, { threshold: 0.12 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return <div ref={ref} className={shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}>{children}</div>;
}
```

- [ ] **Step 2: Add `BestFitPills` and note/archive card components**

```tsx
export default function BestFitPills({ items }: { items: { label: string }[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li key={item.label} className="border border-[var(--line)] px-3 py-2 text-[13px]">
          {item.label}
        </li>
      ))}
    </ul>
  );
}
```

- [ ] **Step 3: Export new components from `components/index.ts`**

```ts
export { default as RevealWrapper } from "./Theme/RevealWrapper";
export { default as BestFitPills } from "./Theme/BestFitPills";
export { default as EngineeringNoteCard } from "./Theme/EngineeringNoteCard";
export { default as ArchivePreview } from "./Theme/ArchivePreview";
export { default as ArchiveTable } from "./Theme/ArchiveTable";
```

- [ ] **Step 4: Run lint for component-level validation**

Run: `npm run lint`  
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add components/Theme components/index.ts
git commit -m "feat: add reusable reveal notes and archive UI primitives"
```

### Task 4: Upgrade Navigation For New Surfaces

**Files:**
- Modify: `components/Navbar/index.tsx`
- Modify: `types/index.ts`
- Test: `npm run lint`

- [ ] **Step 1: Add `notes` and `archive` to `NavPage`**

```ts
export type NavPage = "home" | "about" | "projects" | "notes" | "archive" | "contact";
```

- [ ] **Step 2: Add desktop/mobile nav items**

```tsx
const navItems = [
  { key: "about", label: "About", href: "/#about-1" },
  { key: "projects", label: "Projects", href: "/projects" },
  { key: "notes", label: "Notes", href: "/notes" },
  { key: "archive", label: "Archive", href: "/archive" },
  { key: "contact", label: "Contact", href: "/#contact" },
] as const;
```

- [ ] **Step 3: Update mobile icon map for new keys**

```tsx
const mobileIconByKey = {
  about: FiUser,
  projects: FiPackage,
  notes: FiBookOpen,
  archive: FiArchive,
  contact: FiMail,
};
```

- [ ] **Step 4: Run lint to validate nav typing and imports**

Run: `npm run lint`  
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add components/Navbar/index.tsx types/index.ts
git commit -m "feat: add notes and archive to portfolio navigation"
```

### Task 5: Implement Homepage Restructure

**Files:**
- Modify: `app/page.tsx`
- Use: new theme components and existing sections
- Test: `npm run lint`, `npm run build`

- [ ] **Step 1: Reorder homepage sections per approved IA**

```tsx
// Order:
// Hero
// Best Fit
// Delivery Snapshot
// Featured Projects
// Ownership
// Stack
// Engineering Notes Preview
// Archive Preview
// Experience
// Contact
```

- [ ] **Step 2: Insert `BestFitPills`, `EngineeringNoteCard` preview, and `ArchivePreview`**

```tsx
<Section id="best-fit">
  <EditorialHeading as="h2" eyebrow="Best Fit" title="Best Fit For" />
  <BestFitPills items={resumeData.availableFor ?? []} />
</Section>
```

- [ ] **Step 3: Wrap key sections with `RevealWrapper` and subtle card hover classes**

```tsx
<RevealWrapper>
  <Section id="projects">...</Section>
</RevealWrapper>
```

- [ ] **Step 4: Run lint/build to verify route output**

Run: `npm run lint`  
Expected: PASS.  
Run: `npm run build`  
Expected: PASS with `/`, `/notes`, `/archive`, and project pages generated after later tasks.

- [ ] **Step 5: Commit**

```bash
git add app/page.tsx
git commit -m "feat: restructure homepage with best-fit notes and archive previews"
```

### Task 6: Create Notes Routes

**Files:**
- Create: `app/notes/page.tsx`
- Create: `app/notes/[slug]/page.tsx`
- Test: `npm run lint`, `npm run build`

- [ ] **Step 1: Build notes index page from `resumeData.engineeringNotes`**

```tsx
export default function NotesPage() {
  const notes = resumeData.engineeringNotes ?? [];
  return (
    <Layout activePage="notes">
      <main>
        {notes.map((note) => (
          <EngineeringNoteCard key={note.slug} note={note} href={`/notes/${note.slug}`} />
        ))}
      </main>
    </Layout>
  );
}
```

- [ ] **Step 2: Build notes detail route with static params**

```tsx
export function generateStaticParams() {
  return (resumeData.engineeringNotes ?? []).map((note) => ({ slug: note.slug }));
}
```

- [ ] **Step 3: Add not-found fallback for unknown slug**

```tsx
const note = (resumeData.engineeringNotes ?? []).find((n) => n.slug === params.slug);
if (!note) notFound();
```

- [ ] **Step 4: Run lint/build**

Run: `npm run lint`  
Expected: PASS.  
Run: `npm run build`  
Expected: PASS and static note routes generated.

- [ ] **Step 5: Commit**

```bash
git add app/notes
git commit -m "feat: add engineering notes index and detail routes"
```

### Task 7: Create Archive Route

**Files:**
- Create: `app/archive/page.tsx`
- Test: `npm run lint`, `npm run build`

- [ ] **Step 1: Implement archive page with grouped rows**

```tsx
export default function ArchivePage() {
  const items = resumeData.projectArchive ?? [];
  return (
    <Layout activePage="archive">
      <main>
        <ArchiveTable items={items} />
      </main>
    </Layout>
  );
}
```

- [ ] **Step 2: Add case-study and external proof link rendering**

```tsx
{item.caseStudyPath ? <Link href={item.caseStudyPath}>Case Study</Link> : null}
<a href={item.proofHref} target={item.proofHref.startsWith("http") ? "_blank" : undefined}>
  {item.proofLabel}
</a>
```

- [ ] **Step 3: Run lint/build**

Run: `npm run lint`  
Expected: PASS.  
Run: `npm run build`  
Expected: PASS.

- [ ] **Step 4: Commit**

```bash
git add app/archive
git commit -m "feat: add project archive page with proof links"
```

### Task 8: Shared Case Study Layout And Sections

**Files:**
- Create: `components/Theme/CaseStudyLayout.tsx`
- Create: `components/Theme/CaseStudySections.tsx`
- Modify: `components/index.ts`
- Test: `npm run lint`

- [ ] **Step 1: Create shared case-study layout with sticky desktop rail**

```tsx
export default function CaseStudyLayout({ meta, children }: Props) {
  return (
    <div className="grid gap-8 lg:grid-cols-[300px_minmax(0,1fr)]">
      <aside className="lg:sticky lg:top-24 lg:self-start">{/* metadata */}</aside>
      <div>{children}</div>
    </div>
  );
}
```

- [ ] **Step 2: Add modular section renderers for scenario/owned/challenges/outcomes/next**

```tsx
export function OwnedChecklist({ items }: { items: string[] }) {
  return <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}
```

- [ ] **Step 3: Export components**

```ts
export { default as CaseStudyLayout } from "./Theme/CaseStudyLayout";
export * from "./Theme/CaseStudySections";
```

- [ ] **Step 4: Run lint**

Run: `npm run lint`  
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add components/Theme/CaseStudyLayout.tsx components/Theme/CaseStudySections.tsx components/index.ts
git commit -m "feat: add shared rich case-study layout and section components"
```

### Task 9: Migrate FullSail Case Study

**Files:**
- Modify: `app/projects/fullsail/page.tsx`
- Test: `npm run lint`, `npm run build`

- [ ] **Step 1: Replace duplicated section blocks with `CaseStudyLayout` + shared sections**

```tsx
<CaseStudyLayout meta={caseStudy.metadata}>
  <ScenarioSection text={caseStudy.realScenario ?? caseStudy.problem} />
  <OwnedChecklist items={caseStudy.ownedScopeChecklist ?? []} />
  <ArchitectureSection items={caseStudy.architecture} />
  <OutcomeSection summary={caseStudy.outcome} bullets={caseStudy.outcomes ?? []} />
  <BuildNextSection items={caseStudy.buildNext ?? []} />
</CaseStudyLayout>
```

- [ ] **Step 2: Add related-note links and screenshot block**

```tsx
<img src="/images/projects/fullsail/landing.png" alt="FullSail product screenshot" />
```

- [ ] **Step 3: Run lint/build**

Run: `npm run lint`  
Expected: PASS.  
Run: `npm run build`  
Expected: PASS.

- [ ] **Step 4: Commit**

```bash
git add app/projects/fullsail/page.tsx
git commit -m "feat: upgrade fullsail case study to rich storytelling template"
```

### Task 10: Migrate Sonar and Tizz Case Studies

**Files:**
- Modify: `app/projects/sonar/page.tsx`
- Modify: `app/projects/tizz/page.tsx`
- Test: `npm run lint`, `npm run build`

- [ ] **Step 1: Apply same shared template to Sonar and Tizz**

```tsx
<CaseStudyLayout meta={caseStudy.metadata}>
  {/* shared module sequence */}
</CaseStudyLayout>
```

- [ ] **Step 2: Add per-project architecture visual/screenshot blocks**

```tsx
<img src="/images/projects/tizz/trade.png" alt="Tizz trading interface screenshot" />
```

- [ ] **Step 3: Verify metadata, outcomes, and build-next sections appear on both pages**

Run: `npm run lint`  
Expected: PASS.

- [ ] **Step 4: Run production build**

Run: `npm run build`  
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add app/projects/sonar/page.tsx app/projects/tizz/page.tsx
git commit -m "feat: upgrade sonar and tizz case studies to shared rich template"
```

### Task 11: Final Verification and QA

**Files:**
- No code changes unless fixes are needed
- Test: lint, build, and manual checks

- [ ] **Step 1: Run final lint**

Run: `npm run lint`  
Expected: PASS.

- [ ] **Step 2: Run final build**

Run: `npm run build`  
Expected: PASS.

- [ ] **Step 3: Run dev server for manual checks**

Run: `npm run dev`  
Expected: App starts and key routes render:
- `/`
- `/notes`
- `/archive`
- `/projects/fullsail`
- `/projects/sonar`
- `/projects/tizz`

- [ ] **Step 4: Manual QA checklist**

```md
- No console errors on touched pages
- Mobile and desktop layout integrity
- Nav links for Notes/Archive work
- Project card hover remains subtle
- Case-study sticky rail works on desktop and degrades on mobile
- Reduced-motion users still receive readable content without animation dependence
```

- [ ] **Step 5: Final commit for QA/fixes (if any)**

```bash
git add .
git commit -m "chore: finalize portfolio product-site upgrade verification fixes"
```

---

## Plan Self-Review

- Spec coverage: covered homepage IA, notes surfaces, archive surface, all three case-study upgrades, subtle interaction model, and verification gates.
- Placeholder scan: no `TODO`, `TBD`, or deferred ambiguity markers used in execution steps.
- Type consistency: `engineeringNotes`, `projectArchive`, and expanded case-study keys are used consistently across types, data, routes, and components.

