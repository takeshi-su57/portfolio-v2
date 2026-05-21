# Portfolio Proof-Density Redesign Design Spec

Date: 2026-05-21
Owner: Takeshi Suzuki portfolio
Status: Approved in chat

## Objective
Reposition the homepage from a resume-like summary to a high-conviction senior portfolio narrative with stronger proof density, clearer conversion paths, and deeper project evidence.

## Scope
In scope:
- Homepage structure and copy updates
- New proof-first sections
- Project-card framing improvements
- Dedicated case-study pages for FullSail, Sonar, and Tizz
- Contact conversion improvements
- Resume CTA placement
- Tizz link trust fix

Out of scope:
- GitHub profile alignment tasks (bio/pinned repos)
- New external branding/design system overhaul

## Constraints
- Preserve existing visual language and style direction
- Maintain responsive behavior on mobile and desktop
- Maintain accessibility basics (semantic structure, keyboard-accessible controls, meaningful labels)
- Avoid SEO regressions
- Keep performance profile stable

## Information Architecture
Homepage order will be:
1. Hero
2. Delivery Snapshot
3. What I Can Own End-to-End
4. Featured Projects
5. Experience Highlights
6. Technical Stack
7. Available For
8. Contact

Rationale:
- Front-load measurable credibility and project proof
- Move projects above timeline to emphasize shipped work
- Keep experience and stack as supporting evidence

## Hero Design
### Headline
Senior Full-Stack Engineer for Web3, AI, and production product teams

### Supporting copy
I help founders and engineering teams turn complex ideas into shipped software: frontend experiences, backend APIs, blockchain integrations, AI workflows, CI/CD, and cloud infrastructure.

Strongest in fast-moving teams where one engineer needs to own product delivery from architecture to production.

### Differentiator line
I connect product UX, business logic, blockchain data, AI workflows, and infrastructure into one reliable production system.

### CTAs
- View Projects (anchor to projects section)
- Download Resume (/CV/resume.pdf)
- Contact Me (anchor/modal open)

## Delivery Snapshot
Add compact metric cards near top:
- 7+ years building production software
- 5+ contract engagements
- 100+ backend endpoints shipped
- 20+ reusable UI components built
- Web3 delivery across Sui, EVM, Solana, and Botanix

## What I Can Own End-to-End
Six cards:
1. Product Engineering
2. Web3 Systems
3. Backend and Data
4. Frontend Architecture
5. AI-Native Engineering
6. Infrastructure and DevOps

Each card contains practical ownership language over generic buzzwords.

## Featured Projects (Homepage)
Project cards will include concise senior-proof fields:
- Product context
- Ownership summary
- Core technical challenge
- Outcome
- Stack tags
- Case study link

Cards should remain skimmable while signaling depth.

## Dedicated Case Study Pages
Create:
- /projects/fullsail
- /projects/sonar
- /projects/tizz

Each page template:
1. Overview
2. My Role
3. Problem
4. Architecture Flow
5. Key Features Built
6. Technical Challenges
7. Decisions and Tradeoffs
8. Outcome
9. Stack

Architecture is presented as a text flow block (diagram-style structure using layout primitives), not an image dependency.

## Tizz Link Trust Fix
Replace current dead-looking external link behavior by routing Tizz CTA to the internal case-study page.

## Experience Highlights Refresh
Keep timeline structure but rewrite bullets toward:
- Context
- Ownership
- Technical depth
- Impact

Goal: less resume phrasing, more portfolio proof language.

## Technical Stack Section
Add grouped stack panel:
- Frontend
- Backend
- Data
- Web3
- AI
- Infrastructure

Purpose: make cross-domain capability obvious without bloating earlier sections.

## Available For Section
Add clear opportunity list:
- Senior full-stack engineering roles
- Web3 product engineering
- DApp frontend/backend development
- Blockchain indexer and data pipeline work
- AI workflow and agent development
- Contract/fractional product engineering
- Open-source collaboration with funded teams

## Contact Conversion Updates
Rewrite heading/copy toward practical delivery language.
Add direct action links:
- Email
- GitHub
- LinkedIn
- Resume PDF

Retain existing contact modal implementation and event behavior.

## SEO and Accessibility
- Preserve canonical behavior and route semantics
- Ensure meaningful link text and aria labels
- Maintain semantic heading structure
- Keep alt text for meaningful imagery

## Implementation Notes
- Prioritize content/data updates in `data/resume.ts`
- Update homepage composition in `app/page.tsx`
- Extend themed components as needed with minimal stylistic drift
- Add project detail route pages under `app/projects/*`

## Validation Plan
- npm run lint
- npm run build
- npm run dev manual check for touched pages:
  - Homepage section order and copy
  - CTA behavior
  - Project links and case-study pages
  - Mobile and desktop layout sanity
  - Contact interactions

## Risks and Mitigations
Risk: copy expansion creates visual crowding.
Mitigation: preserve concise paragraph lengths and use sectional spacing hierarchy.

Risk: section reorder introduces anchor/nav mismatches.
Mitigation: verify ids and anchor targets after reorder.

Risk: case-study page drift from existing design language.
Mitigation: reuse existing Layout/Section/EditorialHeading patterns.
