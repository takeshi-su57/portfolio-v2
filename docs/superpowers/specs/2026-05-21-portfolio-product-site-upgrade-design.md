# Portfolio Product-Site Upgrade Design

Date: 2026-05-21  
Owner: Takeshi Suzuki portfolio repo  
Status: Approved in chat, ready for implementation planning

## 1) Objective

Upgrade the portfolio from a polished resume-style site into a stronger product-style personal brand site by combining:

- Existing strengths: clear senior positioning, delivery credibility, Web3/full-stack depth
- New strengths: richer storytelling, writing surface area, archive discoverability, subtle premium interactions

The target is not to copy Ryan's website. The target is to adopt high-value structure patterns while keeping technical precision and credibility.

## 2) Scope For This Release

This release includes:

- Homepage restructuring and component upgrades
- New `Notes` content surface (index + detail pages) with 3 real posts
- New `Archive` page with real entries
- Full case-study template upgrade applied to all 3 core projects:
  - FullSail
  - Sonar.Trade
  - Tizz
- Subtle interaction polish (scroll reveal + restrained hover motion)

Out of scope for this release:

- Heavy animation systems and cinematic motion
- Video backgrounds
- Major theme redesign
- New backend/CMS integration

## 3) Information Architecture

### Homepage order

1. Hero
2. Best Fit (moved up from current low placement)
3. Delivery Snapshot
4. Featured Case Studies
5. What I Can Own End-to-End
6. Technical Stack
7. Engineering Notes (preview of 3 real posts)
8. Project Archive Preview
9. Experience Highlights
10. Contact

### New pages

- `/notes` (engineering writing index)
- `/notes/[slug]` (individual note pages)
- `/archive` (expanded project archive)

### Case-study routes

Existing routes remain and are upgraded in place:

- `/projects/fullsail`
- `/projects/sonar`
- `/projects/tizz`

## 4) Visual And Interaction Direction

Visual tone:

- Dark, technical, clean, premium, product-engineering oriented
- No playful or decorative-heavy visual direction

Interaction principles:

- Subtle and professional motion only
- Motion should support comprehension and hierarchy, not decoration
- Respect accessibility and performance constraints

Required behaviors:

- Scroll reveal for major sections with low-distance fade/translate
- Project-card hover with restrained image clarity enhancement and slight scale
- Sticky case-study metadata rail on desktop
- Mobile-first fallback where sticky behavior becomes stacked blocks
- Honor `prefers-reduced-motion`

## 5) Content Model And Data Architecture

Use `data/resume.ts` as source of truth and extend it with structured collections.

### New data groups

`engineeringNotes`:

- `slug`
- `title`
- `excerpt`
- `category` (`Web3`, `AI`, `Full-Stack`, `Delivery`, `Startup Engineering`)
- `publishedAt`
- `readTime`
- `coverImage` (optional)
- `body` (sectioned content blocks)

`projectArchive`:

- `year`
- `title`
- `type`
- `role`
- `stack`
- `proofLabel`
- `proofHref`
- `caseStudyPath` (optional)

Expanded `projectCaseStudies` fields:

- Header metadata (`role`, `timeline`, `clientType`, `stack`, links)
- `realScenario`
- `ownedScopeChecklist`
- `architectureFlow`
- `technicalChallenges` (context-rich cards)
- `tradeoffs`
- `outcomes` (specific, evidence-oriented bullets)
- `buildNext`
- `relatedNotes`
- `visualAssets` (screenshot and diagram references)

## 6) Component Architecture

Create reusable components instead of repeating similar page code.

Core additions:

- `CaseStudyLayout`
  - Left sticky metadata rail (desktop)
  - Right long-scroll narrative stream
- `CaseStudySection`
  - Shared section block wrapper for narrative modules
- `EngineeringNoteCard`
- `ArchiveTable` (or responsive archive list equivalent)
- `BestFitPills`
- `RevealWrapper` for consistent section animation behavior

Refactor goals:

- Migrate existing per-project page duplication into shared case-study rendering pattern
- Keep route-specific metadata and project-specific content data-driven

## 7) Homepage Upgrade Details

Changes:

- Move availability content up into a new high-priority `Best Fit` block
- Preserve and slightly polish current hero messaging
- Keep delivery metrics and ownership sections but improve rhythm and interactivity
- Add `Engineering Notes` preview section with 3 real posts
- Add `Archive Preview` section with link to full archive

Project cards:

- Keep existing real product imagery
- Add restrained hover behavior to communicate inspectability
- Include richer metadata scanability without bloating card height

## 8) Notes (Blog) Strategy

Section label:

- Use `Engineering Notes` (preferred branding over generic `Blog`)

Initial 3 real notes:

1. Designing Reliable Transaction UX for Web3 Products
2. Building Custom Blockchain Indexers When Subgraphs Are Not Available
3. How I Use AI Coding Tools in Real Production Workflows

Requirements:

- Founder-facing and technically credible tone
- Concrete implementation perspective
- Clear scannable structure
- Strong relationship to featured case studies

## 9) Archive Strategy

Archive principles:

- Smaller but trustworthy (quality over breadth inflation)
- Clean hierarchy by year and project
- Direct proof links and case-study links where possible

Required fields displayed:

- Year
- Project
- Type
- Role
- Stack
- Proof

## 10) Case Study Template (All 3 Projects)

Each case study must include:

1. Header metadata (project, role, timeline, client type, stack, links)
2. Real scenario in plain language
3. What I owned (specific checklist)
4. Architecture flow visual section
5. Technical challenges with context
6. Tradeoffs and decision rationale
7. Outcomes with concrete evidence
8. What I'd build next
9. Related engineering notes

Visual requirement per case study:

- At least 1 screenshot section
- At least 1 architecture/flow visual block

## 11) Delivery Phases

### Phase A: Foundation

- Add typed data structures for notes, archive, and expanded case studies
- Seed initial real content
- Add shared presentation primitives (`RevealWrapper`, shared section patterns)

### Phase B: Homepage

- Reorder homepage sections per IA
- Add `Best Fit`, `Engineering Notes` preview, and `Archive Preview`
- Apply subtle interaction polish

### Phase C: New Surfaces

- Implement `/notes`, `/notes/[slug]`, `/archive`
- Add navigation links and internal linking flows

### Phase D: Case Studies

- Refactor and upgrade FullSail, Sonar, Tizz to shared rich template
- Add sticky metadata rail, visuals, outcomes, and next-step sections

## 12) Risks And Mitigations

Risk: Content bloat reduces readability.  
Mitigation: Keep strict section brevity and scannable card/list structures.

Risk: Motion harms performance/accessibility.  
Mitigation: CSS-first transitions, minimal runtime animation work, reduced-motion compliance.

Risk: Inconsistent case-study quality across projects.  
Mitigation: Enforce a single required template contract for all 3 projects.

Risk: Credibility drift from vague archive entries.  
Mitigation: Use only verifiable projects with explicit role and proof links.

## 13) Success Criteria

The release is successful if:

- Homepage clearly communicates best fit earlier and improves narrative flow
- Notes and Archive surfaces are live with real content
- All 3 featured project case studies follow the richer template
- Visual polish feels more alive but remains professional and restrained
- Content feels more like a technical product portfolio than a resume page

## 14) Verification Gates (Before Completion Claim)

Required commands:

- `npm run lint`
- `npm run build`
- `npm run dev` manual checks on touched pages

Manual QA focus:

- Desktop and mobile layout integrity
- No console errors on affected routes
- Navigation links work for notes/archive/case studies
- Motion remains subtle and non-disruptive

