# Portfolio Refactor Design Spec

Date: 2026-05-14
Topic: Resume-aligned full repositioning for portfolio website
Status: Draft for user review

## 1. Objective

Refactor the portfolio to align with the updated senior software engineer resume and improve conversion across three audiences:

1. Startup founders hiring contractors
2. Recruiters for full-time senior roles
3. Web3/AI product teams

The site should keep one clear core narrative while offering targeted paths for each audience.

## 2. Primary Narrative

Primary positioning:

- Senior Full-Stack Engineer (AI, Web3, Cloud) who ships production products end-to-end.

Supporting proof themes:

- 7+ years of professional delivery
- Freelance/contract + product company experience
- Frontend, backend, data, and infrastructure ownership
- Practical AI agent engineering and Web3 production experience

## 3. Information Architecture

Homepage flow:

1. Hero with value proposition and audience-specific CTA options
2. Impact snapshot (resume-grounded metrics)
3. Services / how I work
4. Selected work with outcome-driven project framing
5. Experience timeline (clean, resume-aligned)
6. Skills matrix grouped by domain
7. Contact section with audience-specific prompts

Secondary pages:

- About page: deeper career narrative and timeline
- Projects page: expanded selected work and GitHub highlights

## 4. Content Model Refactor

Refactor `data/resume.ts` to introduce clearer, reusable structures:

- `audiencePaths`
  - founders
  - recruiters
  - web3AiTeams
  - each with label, CTA text, and promise

- `impactMetrics`
  - measurable resume-grounded highlights

- `serviceAreas`
  - product engineering
  - AI agent workflows
  - Web3/DApp engineering
  - cloud/DevOps delivery

- employment normalization
  - align timeline and bullets to resume phrasing
  - reduce vague language and improve outcomes

- project framing consistency
  - each featured project should communicate problem, action, and result

- optional `seoProfile`
  - title/description helpers for metadata and social previews

## 5. Component and Page Changes

Primary targets:

- `components/Intro/*`: new hero messaging + audience paths
- `components/Projects/*`: stronger outcome-focused project card copy hierarchy
- `app/page.tsx`: section ordering and composition updates
- `app/about/page.tsx`: resume-aligned narrative and experience emphasis
- `app/projects/page.tsx`: clearer section framing for product and open-source work
- `data/resume.ts`: source-of-truth content refactor

Potential new lightweight components (only if needed):

- `components/ImpactMetrics/*`
- `components/ServiceAreas/*`

## 6. UX and Writing Rules

- Keep existing design system and visual language unless a section needs structural improvement
- Use concise, outcome-focused copy
- Avoid overstuffed hero text; lead with one strong headline and proof row
- Preserve responsive behavior and existing style conventions
- Maintain accessibility basics (semantic hierarchy, readable contrast, meaningful links)

## 7. Risk and Mitigation

Risks:

- Trying to serve all audiences equally can dilute message clarity
- Overly dense content can reduce scannability
- Inconsistent wording between pages can weaken credibility

Mitigations:

- Keep one primary narrative with secondary audience lanes
- Enforce concise section copy and visual hierarchy
- Use `data/resume.ts` as single source of truth for shared messaging

## 8. Verification Plan

After implementation:

1. Run `npm run lint`
2. Run `npm run build`
3. Run `npm run dev` and manually check:
   - home/about/projects on mobile and desktop widths
   - CTA visibility and navigation flow
   - no console errors
   - content consistency against resume

## 9. Scope Boundaries

In scope:

- Messaging/content refactor
- Section structure improvements
- Data model cleanup for maintainability

Out of scope (for this pass):

- Full visual redesign
- New CMS integration
- Internationalization
- New backend services

## 10. Success Criteria

- Resume and portfolio messaging are aligned
- Home page quickly communicates senior positioning
- Founders, recruiters, and Web3/AI teams each have clear entry points
- Core pages remain responsive, build cleanly, and pass lint
