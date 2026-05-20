# Full-Site Theme Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign `/`, `/about`, and `/projects` into a Savyona-inspired light editorial theme while preserving existing content/data and lightweight performance.

**Architecture:** Keep route structure and `resumeData` ownership unchanged. Introduce a small set of shared presentation components (section shell, editorial heading, project card/grid, top nav treatment), then migrate each route to those primitives. Keep interactions subtle and prefer server-rendered pages.

**Tech Stack:** Next.js App Router, React, TypeScript, Tailwind CSS

---

## File Structure and Responsibilities

- Modify: `styles/global.css` (theme tokens, base typography, focus states, utility classes)
- Create: `components/Theme/Section.tsx` (layout shell for page sections)
- Create: `components/Theme/EditorialHeading.tsx` (shared heading/eyebrow/copy block)
- Create: `components/Theme/ProjectGrid.tsx` (project gallery and card rendering for featured items)
- Modify: `components/index.ts` (exports for new theme components)
- Modify: `components/Navbar/index.tsx` (light-theme top nav treatment and active states)
- Modify: `components/Layout/index.tsx` (home shell integration with new spacing and section rhythm)
- Modify: `app/page.tsx` (new homepage composition)
- Modify: `app/about/page.tsx` (new about page composition)
- Modify: `app/projects/page.tsx` (new projects page composition)
- Modify: `components/Contact/index.tsx` (light-theme compatibility and spacing)
- Modify: `components/Footer/index.tsx` (light-theme compatibility and spacing)

---

### Task 1: Establish Theme Foundation

**Files:**
- Modify: `styles/global.css`

- [ ] **Step 1: Add light editorial color variables and base typography**

```css
:root {
  --bg: #f7f3ec;
  --surface: #fffdf9;
  --text: #1b1a18;
  --muted: #6d685f;
  --accent: #9d6c42;
  --line: #ded6ca;
}

body {
  background: var(--bg);
  color: var(--text);
}
```

- [ ] **Step 2: Add reusable section/container rhythm classes**

```css
.editorial-container {
  margin-inline: auto;
  width: min(1120px, calc(100% - 2rem));
}

.editorial-section {
  padding-block: clamp(3rem, 6vw, 6rem);
  border-top: 1px solid var(--line);
}
```

- [ ] **Step 3: Add accessible focus states and link treatment**

```css
a:focus-visible,
button:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}
```

- [ ] **Step 4: Verify no syntax regressions**

Run: `npm run build`  
Expected: build succeeds without CSS parsing errors.

- [ ] **Step 5: Commit**

```bash
git add styles/global.css
git commit -m "feat(theme): add light editorial design tokens and base rhythm"
```

### Task 2: Build Reusable Theme Primitives

**Files:**
- Create: `components/Theme/Section.tsx`
- Create: `components/Theme/EditorialHeading.tsx`
- Create: `components/Theme/ProjectGrid.tsx`
- Modify: `components/index.ts`

- [ ] **Step 1: Create section wrapper component**

```tsx
interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export function Section({ id, className, children }: SectionProps) {
  return (
    <section id={id} className={`editorial-section ${className ?? ""}`}>
      <div className="editorial-container">{children}</div>
    </section>
  );
}
```

- [ ] **Step 2: Create shared editorial heading block**

```tsx
interface EditorialHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
}
```

- [ ] **Step 3: Create shared project card/grid component using `FeaturedProject`**

```tsx
interface ProjectGridProps {
  projects: FeaturedProject[];
  limit?: number;
}
```

- [ ] **Step 4: Export new components**

```ts
export { Section } from "./Theme/Section";
export { EditorialHeading } from "./Theme/EditorialHeading";
export { ProjectGrid } from "./Theme/ProjectGrid";
```

- [ ] **Step 5: Verify build**

Run: `npm run build`  
Expected: TypeScript compile succeeds and new components resolve from barrel exports.

- [ ] **Step 6: Commit**

```bash
git add components/Theme components/index.ts
git commit -m "feat(theme): add editorial section and project primitives"
```

### Task 3: Redesign Home Page

**Files:**
- Modify: `app/page.tsx`
- Modify: `components/Layout/index.tsx`
- Modify: `components/Navbar/index.tsx`

- [ ] **Step 1: Replace home composition with editorial sections**

```tsx
<Layout activePage="home" ...>
  <Section>
    <EditorialHeading
      eyebrow={resumeData.role}
      title={resumeData.fullName}
      description={resumeData.introTagline}
    />
  </Section>
  <Section id="projects">
    <ProjectGrid projects={resumeData.featuredProjects} limit={3} />
  </Section>
</Layout>
```

- [ ] **Step 2: Update layout/nav to light theme and clear active states**

```tsx
<nav className="border-b border-[var(--line)] bg-[var(--surface)]/90 ...">
```

- [ ] **Step 3: Keep contact and footer sections, restyled via shared spacing classes**

```tsx
<Section id="contact" className="!pb-16">
  <Contact />
</Section>
```

- [ ] **Step 4: Verify route rendering**

Run: `npm run build`  
Expected: `/` pre-renders successfully with no runtime import errors.

- [ ] **Step 5: Commit**

```bash
git add app/page.tsx components/Layout/index.tsx components/Navbar/index.tsx
git commit -m "feat(home): redesign homepage with editorial light theme"
```

### Task 4: Redesign About Page

**Files:**
- Modify: `app/about/page.tsx`

- [ ] **Step 1: Replace dark hero with editorial header and profile split**

```tsx
<Section>
  <EditorialHeading
    eyebrow="About"
    title={`Hi, I'm ${resumeData.fullName}`}
    description={resumeData.profileSummary}
  />
</Section>
```

- [ ] **Step 2: Render bio and experience as clean timeline blocks**

```tsx
{resumeData.employmentHistory.map((item) => (
  <article key={`${item.company}-${item.period}`} className="border-t border-[var(--line)] py-6">
```

- [ ] **Step 3: Preserve semantic structure and external link safety**

```tsx
<a href={item.companyUrl} target="_blank" rel="noreferrer">
```

- [ ] **Step 4: Verify route rendering**

Run: `npm run build`  
Expected: `/about` pre-renders successfully and TypeScript remains clean.

- [ ] **Step 5: Commit**

```bash
git add app/about/page.tsx
git commit -m "feat(about): redesign about page with editorial narrative layout"
```

### Task 5: Redesign Projects Page

**Files:**
- Modify: `app/projects/page.tsx`
- (Optional removal only if unused): `components/Projects/index.tsx`

- [ ] **Step 1: Replace page hero and wire full gallery using shared `ProjectGrid`**

```tsx
<Section>
  <EditorialHeading
    eyebrow="Projects"
    title="Selected Product Work"
    description="Delivery across SaaS, Web3, and AI-enabled platforms."
  />
  <ProjectGrid projects={resumeData.featuredProjects} />
</Section>
```

- [ ] **Step 2: Ensure image-first cards show tags/outcomes and fallback image behavior**

```tsx
const imageSrc = project.imageUrl ?? fallbackProjectImage;
```

- [ ] **Step 3: Preserve navigation back to home and route metadata**

```tsx
export const metadata: Metadata = { title: "Projects", ... };
```

- [ ] **Step 4: Verify route rendering**

Run: `npm run build`  
Expected: `/projects` pre-renders successfully and cards render from `resumeData.featuredProjects`.

- [ ] **Step 5: Commit**

```bash
git add app/projects/page.tsx components/Projects/index.tsx components/Theme/ProjectGrid.tsx
git commit -m "feat(projects): redesign projects page and gallery presentation"
```

### Task 6: Final Validation and Polish

**Files:**
- Modify as needed from findings: `styles/global.css`, `app/*.tsx`, `components/**/*.tsx`

- [ ] **Step 1: Run lint and capture known non-scope lint issues**

Run: `npm run lint`  
Expected: no new lint errors from touched app/components files; note existing `.agents/skills` lint noise if unchanged.

- [ ] **Step 2: Run full production build**

Run: `npm run build`  
Expected: successful production build.

- [ ] **Step 3: Manual responsive QA in dev server**

Run: `npm run dev`  
Check:
- `/` on mobile + desktop
- `/about` on mobile + desktop
- `/projects` on mobile + desktop
- keyboard focus visibility
- link/button interaction
- no console errors

- [ ] **Step 4: Final commit**

```bash
git add styles/global.css app components
git commit -m "feat(theme): complete full-site light editorial redesign"
```

---

## Self-Review

- Spec coverage: all approved sections are mapped (architecture, visual system, motion, accessibility, performance, verification).
- Placeholder scan: no `TBD`/`TODO`/deferred placeholders.
- Type consistency: plan consistently uses `resumeData.featuredProjects`, `FeaturedProject`, and route files currently present in repo.
