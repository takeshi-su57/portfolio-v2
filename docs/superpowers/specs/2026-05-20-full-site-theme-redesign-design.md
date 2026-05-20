# Full-Site Theme Redesign (Savyona-Inspired, Lighter Static Variant)

## Context

The portfolio currently uses a dark, card-heavy presentation and needs a full-site visual redesign across `/`, `/about`, and `/projects`.
The target direction is inspired by `https://www.savyona.com/`, but adapted to preserve original branding, content, and assets.
Primary content inputs are:

- `data/resume.ts`
- `../../../resumes/projects` (already integrated project details and screenshots)

## Goals

1. Redesign the entire site theme with an editorial, image-forward style.
2. Keep interaction lightweight (subtle animation only; no advanced drag/drop interaction model).
3. Preserve maintainability by keeping existing data model and route structure.
4. Maintain performance, responsive behavior, accessibility, and SEO-safe metadata handling.

## Non-Goals

1. Reproducing third-party branding/copy/image assets verbatim.
2. Introducing a CMS or changing data ownership away from `data/resume.ts`.
3. Adding heavy animation frameworks or high-complexity interaction mechanics.

## Selected Approach

### Recommended Option Chosen: Page-by-page rewrite

Rebuild `/`, `/about`, and `/projects` page structures and shared presentational components to match the new visual language while preserving existing data interfaces.

Why this approach:

- Produces the highest fidelity to desired style.
- Avoids fighting legacy markup constraints.
- Improves long-term consistency and maintainability.

## Information Architecture

### Routes (unchanged)

- `/` home
- `/about`
- `/projects`

### Home page structure

1. Hero intro with editorial typography and concise positioning.
2. Selected projects image-first grid.
3. Compact impact/metric section.
4. Contact CTA + footer.

### About page structure

1. Profile hero block (photo + role framing).
2. Narrative bio sections from `resumeData.bio`.
3. Experience timeline/highlights with readable typography and spacing.

### Projects page structure

1. Clean header intro.
2. Full project gallery from `resumeData.featuredProjects`.
3. Clear metadata per card: title, description, tags, outcome, project link.

## Visual Design System

### Core style direction

- Warm light background.
- Deep neutral text with high contrast body copy.
- Muted accent for links/interactive emphasis.
- Editorial hierarchy with generous whitespace.

### Component styling rules

- Flat section composition (avoid nested card-on-card page shells).
- Small-radius frames (<= 8px) and restrained shadows/borders.
- Image-forward project cards using existing screenshots.
- Minimal top navigation with clear active state.
- Restyled mobile nav consistent with new visual system.

### Motion model

- Subtle entrance transitions (fade/translate).
- Gentle hover transitions.
- No physics-driven interactions, drag/drop, or complex kinetic UI.

## Data and Content Mapping

### Data source

Continue using `resumeData` as the primary content source:

- Profile identity and intro content
- Experience and bio
- Featured project cards and metadata

### Project visuals

- Existing local screenshots remain primary where available.
- Existing fallback image behavior remains for entries without dedicated visuals.

## Technical Design

1. Update route-level page structures in `app/page.tsx`, `app/about/page.tsx`, and `app/projects/page.tsx`.
2. Refactor/add reusable presentational components under `components/` for:
   - Editorial section shell
   - Project grid/card variants
   - Shared heading/meta blocks
3. Update global styles and/or Tailwind class usage to support the new palette, spacing, and typography rhythm.
4. Preserve existing metadata exports and routing behavior.

## Accessibility and UX Requirements

1. Semantic landmarks and heading order.
2. Keyboard-visible focus states for links/buttons.
3. Descriptive alt text for meaningful imagery.
4. Mobile-safe text wrapping and spacing.
5. Predictable navigation with clear active state indication.

## Performance and Reliability Requirements

1. Prefer server rendering and avoid unnecessary client-only logic.
2. Avoid introducing heavy UI libraries for animation.
3. Keep image handling optimized and avoid oversized blocking assets.
4. Keep implementation closely scoped to redesign objectives.

## Testing and Verification

### Required commands

1. `npm run lint`
2. `npm run build`
3. `npm run dev` with manual checks on `/`, `/about`, `/projects`

### Manual validation checklist

1. No layout breakage on mobile and desktop.
2. No console errors on redesigned pages.
3. Project cards and links function correctly.
4. Typography/spacing cadence is consistent across pages.
5. Route metadata and navigation behavior remain intact.

## Risks and Mitigations

1. **Risk:** Overfitting style in one page and losing consistency on others.
   **Mitigation:** Build shared section and card primitives first, then apply to all pages.
2. **Risk:** Regressions in responsive layout during full rewrite.
   **Mitigation:** Mobile-first spacing checks during implementation and final manual sweep.
3. **Risk:** Accessibility regressions during visual refactor.
   **Mitigation:** Explicit semantic and focus-state checks in implementation review.

## Implementation Handoff

After spec approval, generate a concrete implementation plan and execute in scoped phases:

1. Theme primitives and global styling baseline.
2. Home page redesign.
3. About page redesign.
4. Projects page redesign.
5. Verification and polish.
