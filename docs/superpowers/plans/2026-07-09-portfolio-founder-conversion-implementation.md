# Portfolio Founder Conversion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rework the portfolio so founders and clients immediately understand the delivery value, see stronger proof on the homepage, and get a cleaner LuckyPlans/blog experience.

**Architecture:** Keep the existing Next.js App Router and data-driven content model centered on `data/resume.ts`. Implement the founder-conversion refresh through focused content updates, homepage section changes, LuckyPlans promotion, and blog parsing/template cleanup rather than a broad visual or routing rewrite.

**Tech Stack:** Next.js App Router, React, TypeScript, Tailwind CSS

---

## File Structure Map

- Modify: `data/resume.ts`
  - Tighten founder-facing copy, rewrite delivery snapshot labels, strengthen featured project summaries, refine archive labels, and add LuckyPlans homepage content.
- Modify: `types/index.ts`
  - Extend interfaces for the LuckyPlans homepage section if new content fields are added.
- Modify: `app/page.tsx`
  - Reorder proof flow, sharpen hero/supporting copy usage, and add a dedicated LuckyPlans section.
- Modify: `app/projects/page.tsx`
  - Refresh page framing copy to match founder-facing case-study language.
- Modify: `app/archive/page.tsx`
  - Improve description and support clearer archive proof presentation.
- Modify: `components/Contact/index.tsx`
  - Fix the awkward CTA copy and make the contact invitation more founder-friendly.
- Modify: `lib/founderJourneyBlogs.ts`
  - Fix eyebrow encoding, normalize chapter labels, and expose previous/next navigation metadata plus cleaner blog-card metadata.
- Modify: `app/blogs/page.tsx`
  - Replace `attachments` with human language and frame the series as founder proof.
- Modify: `app/blogs/[...slug]/page.tsx`
  - Fix metadata display, add previous/next navigation, and improve chapter/read-flow presentation.

## Task 1: Add Founder-Proof Content Fields

**Files:**
- Modify: `types/index.ts`
- Modify: `data/resume.ts`
- Test: `npm run lint`

- [ ] **Step 1: Add any missing type definitions for LuckyPlans homepage content**

```ts
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
```

- [ ] **Step 2: Extend `ResumeContent` with a founder-proof section if not already present**

```ts
export interface ResumeContent {
  // existing fields...
  founderProof: FounderProofSection;
}
```

- [ ] **Step 3: Run lint to verify type changes compile**

Run: `npm run lint`
Expected: lint passes with no schema/type errors from `types/index.ts`.

- [ ] **Step 4: Commit**

```bash
git add types/index.ts data/resume.ts
git commit -m "feat: add founder proof content schema"
```

## Task 2: Rewrite Portfolio Content For Founder Conversion

**Files:**
- Modify: `data/resume.ts`
- Test: `npm run lint`

- [ ] **Step 1: Tighten hero-facing copy toward founder/client positioning**

```ts
role: "Senior Product Engineer for Web3 and AI Systems",
introTagline:
  "I help founders ship production-ready Web3 and AI products end-to-end, from UX and APIs to blockchain data, agents, CI/CD, and cloud deployment.",
profileSummary:
  "Best fit for founders and product teams who need one senior engineer to turn ambiguity, blockers, and system complexity into shipped software.",
```

- [ ] **Step 2: Rewrite the delivery snapshot labels to feel commercially valuable**

```ts
deliverySnapshot: [
  { value: "8+", label: "Years shipping production web apps" },
  { value: "5+", label: "Startup and client engagements delivered" },
  { value: "100+", label: "APIs shipped across SaaS and Web3 products" },
  { value: "20+", label: "Production UI surfaces and reusable flows shipped" },
  { value: "Sui / EVM / Solana / Botanix", label: "Multi-chain delivery coverage" },
],
```

- [ ] **Step 3: Rewrite the featured project descriptions around pressure, ownership, and outcomes**

```ts
description:
  "Built launch-critical Sui DEX flows across swap, LP, and governance while solving wallet reliability and Sui-specific transaction complexity under deadline pressure.",
```

- [ ] **Step 4: Improve archive proof labels and summaries for easier founder scanning**

```ts
proofLabel: "Live platform",
summary:
  "Expanded strategy automation from EVM-only execution to reliable EVM plus Solana support without breaking existing operator behavior.",
```

- [ ] **Step 5: Add homepage LuckyPlans founder-proof content**

```ts
founderProof: {
  eyebrow: "Founder Proof",
  title: "LuckyPlans",
  description:
    "Founder-built simulation-first copy-trading research platform shaped by real Web3 execution, failed assumptions, and product iteration under pressure.",
  bullets: [
    "Built across leaderboards, indexing, simulation, strategy research, and multi-platform product thinking.",
    "Learned where backtests, execution reality, and user safety diverge in production systems.",
    "Shows founder empathy alongside deep engineering ownership.",
  ],
  links: [
    { label: "Read founder journey", href: "/blogs" },
    { label: "View related projects", href: "/projects" },
  ],
},
```

- [ ] **Step 6: Run lint**

Run: `npm run lint`
Expected: content updates pass lint with no type drift.

- [ ] **Step 7: Commit**

```bash
git add data/resume.ts types/index.ts
git commit -m "feat: refresh founder-facing portfolio content"
```

## Task 3: Rework Homepage Proof Hierarchy

**Files:**
- Modify: `app/page.tsx`
- Test: `npm run lint`

- [ ] **Step 1: Keep the current editorial visual language but tighten the homepage descriptive copy consumption**

```tsx
<EditorialHeading as="h1" eyebrow="Position" title={resumeData.role} />
```

- [ ] **Step 2: Keep trust-building sections near the top in this order: hero, snapshot, best fit, featured projects**

Run: reorder the existing section blocks so the proof-first flow matches the approved design.
Expected: founder-relevant trust signals appear before longer supporting content.

- [ ] **Step 3: Add a dedicated LuckyPlans founder-proof section after featured client projects**

```tsx
<Section id="founder-proof" className="!pt-12">
  <RevealWrapper delayMs={75}>
    <EditorialHeading
      as="h2"
      eyebrow={resumeData.founderProof.eyebrow}
      title={resumeData.founderProof.title}
      description={resumeData.founderProof.description}
    />
  </RevealWrapper>
</Section>
```

- [ ] **Step 4: Render the LuckyPlans proof bullets and links in a scannable card layout**

```tsx
<ul className="mt-6 grid gap-3 md:grid-cols-3">
  {resumeData.founderProof.bullets.map((bullet) => (
    <li key={bullet} className="list-none border border-[var(--line)] bg-[var(--surface)] p-4">
      <p className="text-[14px] leading-7 text-[var(--muted)]">{bullet}</p>
    </li>
  ))}
</ul>
```

- [ ] **Step 5: Reduce blog preview emphasis so it supports the LuckyPlans proof instead of competing with it**

Run: keep the preview but update copy so it clearly acts as a doorway into the founder journey.
Expected: homepage feels curated, not split between two competing site identities.

- [ ] **Step 6: Run lint**

Run: `npm run lint`
Expected: homepage renders cleanly with no JSX/type issues.

- [ ] **Step 7: Commit**

```bash
git add app/page.tsx
git commit -m "feat: add founder-proof homepage flow"
```

## Task 4: Improve Contact Conversion Copy

**Files:**
- Modify: `components/Contact/index.tsx`
- Test: `npm run lint`

- [ ] **Step 1: Replace the awkward headline with natural founder-facing language**

```tsx
<h2 className="mt-2 text-[32px] font-semibold leading-tight text-[var(--text)] md:text-[40px]">
  Let&apos;s Ship What Matters.
</h2>
```

- [ ] **Step 2: Rewrite the supporting copy around project goals, blockers, and timelines**

```tsx
<p className="mt-4 max-w-[680px] text-[14px] leading-7 text-[var(--muted)]">
  Share your product goal, timeline, and current blocker. I&apos;ll reply with a practical delivery path and where I can help fastest.
</p>
```

- [ ] **Step 3: Add a best-fit collaboration line without changing the existing modal behavior**

```tsx
<p className="mt-3 max-w-[680px] text-[13px] leading-7 text-[var(--muted)]">
  Best fit: Web3 product engineering, AI workflows, full-stack MVPs, blockchain data systems, and production delivery.
</p>
```

- [ ] **Step 4: Run lint**

Run: `npm run lint`
Expected: no lint or accessibility regressions in the contact section.

- [ ] **Step 5: Commit**

```bash
git add components/Contact/index.tsx
git commit -m "feat: improve founder-facing contact conversion copy"
```

## Task 5: Clean Founder Journey Data And Metadata

**Files:**
- Modify: `lib/founderJourneyBlogs.ts`
- Test: `npm run lint`

- [ ] **Step 1: Replace broken eyebrow encoding with a clean separator**

```ts
function formatEyebrow(series: string, part: string) {
  return `${series} · ${part}`;
}
```

- [ ] **Step 2: Normalize chapter labels so users never see raw filesystem slugs**

```ts
function formatChapterLabel(rawChapter: string) {
  const match = rawChapter.match(/^(\d+)/);
  return match ? `Chapter ${match[1]}` : rawChapter;
}
```

- [ ] **Step 3: Add previous/next navigation metadata to the blog model**

```ts
export interface FounderJourneyBlog {
  // existing fields...
  chapterLabel: string;
  imageLabel: string;
}
```

- [ ] **Step 4: Compute adjacent posts when reading a post by slug**

Run: update the data helpers so the blog detail page can locate the previous and next entries in the sorted series list.
Expected: post pages can render sequence navigation without hardcoding route knowledge in the page.

- [ ] **Step 5: Run lint**

Run: `npm run lint`
Expected: the founder-journey helper compiles cleanly with the new fields.

- [ ] **Step 6: Commit**

```bash
git add lib/founderJourneyBlogs.ts
git commit -m "feat: clean founder journey metadata and sequencing"
```

## Task 6: Refresh Blog Index UX

**Files:**
- Modify: `app/blogs/page.tsx`
- Test: `npm run lint`

- [ ] **Step 1: Rewrite the page intro so the series is framed as founder proof**

```tsx
<EditorialHeading
  as="h1"
  eyebrow="Blogs"
  title="Founder Journey"
  description="A curated LuckyPlans series showing how product ideas, trading systems, indexing, simulation, and execution reality shaped my founder-engineer perspective."
/>
```

- [ ] **Step 2: Replace the raw chapter display and attachment copy with human-friendly metadata**

```tsx
<p className="text-[11px] uppercase tracking-[0.08em] text-[var(--accent)]">
  {post.chapterLabel}
</p>
<span>{post.imageUrls.length} visual{post.imageUrls.length === 1 ? "" : "s"}</span>
```

- [ ] **Step 3: Add a short professional-proof callout above the grouped posts**

```tsx
<div className="border border-[var(--line)] bg-[var(--surface)] p-5">
  <p className="text-[14px] leading-7 text-[var(--muted)]">
    This series shows how I build, test assumptions, debug product risk, and adapt when production reality disagrees with the plan.
  </p>
</div>
```

- [ ] **Step 4: Run lint**

Run: `npm run lint`
Expected: blog index copy and metadata changes lint cleanly.

- [ ] **Step 5: Commit**

```bash
git add app/blogs/page.tsx
git commit -m "feat: improve founder journey blog index UX"
```

## Task 7: Add Blog Reading Flow And Detail-Page Cleanup

**Files:**
- Modify: `app/blogs/[...slug]/page.tsx`
- Test: `npm run lint`

- [ ] **Step 1: Replace broken eyebrow text and raw chapter display with cleaned metadata from the helper**

```tsx
<EditorialHeading
  as="h1"
  eyebrow={blog.eyebrow}
  title={blog.title}
  description={blog.excerpt}
/>
<p className="mt-4 text-[12px] uppercase tracking-[0.08em] text-[var(--muted)]">
  {blog.chapterLabel}
</p>
```

- [ ] **Step 2: Add previous/next navigation beneath the article content**

```tsx
<div className="flex flex-wrap items-center justify-between gap-3 border-t border-[var(--line)] pt-6">
  {previousBlog ? <Link href={`/blogs/${previousBlog.slug}`}>Previous chapter</Link> : <span />}
  <Link href="/blogs">Back to all chapters</Link>
  {nextBlog ? <Link href={`/blogs/${nextBlog.slug}`}>Next chapter</Link> : <span />}
</div>
```

- [ ] **Step 3: Avoid duplicating the cover image in the gallery**

Run: render the additional visuals list from `blog.imageUrls.slice(1)` when a cover image exists.
Expected: the page feels curated rather than repetitive.

- [ ] **Step 4: Run lint**

Run: `npm run lint`
Expected: blog detail page compiles cleanly and sequence navigation types are satisfied.

- [ ] **Step 5: Commit**

```bash
git add app/blogs/[...slug]/page.tsx
git commit -m "feat: add founder journey reading flow"
```

## Task 8: Tune Supporting Page Copy And Run Full Verification

**Files:**
- Modify: `app/projects/page.tsx`
- Modify: `app/archive/page.tsx`
- Modify: any touched files if verification uncovers issues
- Test: `npm run lint`, `npm run build`, `npm run dev`

- [ ] **Step 1: Refresh projects/archive page descriptions to match founder-proof framing**

```tsx
description="Founder-relevant case studies across Web3, AI, and production product delivery."
```

- [ ] **Step 2: Run the full lint pass**

Run: `npm run lint`
Expected: exit code 0 with no errors on touched pages/helpers/data.

- [ ] **Step 3: Run the production build**

Run: `npm run build`
Expected: successful Next.js production build with no route or type failures.

- [ ] **Step 4: Run the dev server and manually inspect the touched routes**

Run: `npm run dev`
Expected manual checks:
- Homepage shows the founder-proof flow and LuckyPlans section in the right place
- Contact copy reads naturally and the modal still opens
- Blog index shows clean chapter labels and visual metadata
- Blog detail pages show correct separators and previous/next navigation
- Projects and archive copy feel aligned with the new positioning

- [ ] **Step 5: Apply any small fixes from verification and re-run lint/build**

Run: `npm run lint`
Expected: clean after any final polish.

Run: `npm run build`
Expected: clean after any final polish.

- [ ] **Step 6: Commit**

```bash
git add app/page.tsx app/projects/page.tsx app/archive/page.tsx components/Contact/index.tsx data/resume.ts lib/founderJourneyBlogs.ts app/blogs/page.tsx app/blogs/[...slug]/page.tsx types/index.ts
git commit -m "feat: implement founder-conversion portfolio refresh"
```
