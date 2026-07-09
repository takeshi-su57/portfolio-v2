# Portfolio Founder Conversion Design

Date: 2026-07-09  
Owner: Takeshi Suzuki portfolio repo  
Status: Approved in chat, ready for spec review

## 1) Objective

Improve the portfolio so founders and clients understand faster that Takeshi can own messy, high-risk product delivery and ship production-ready software.

This pass should make the site feel less like a general engineering profile and more like a founder-facing product delivery portfolio.

## 2) Target Audience

Primary audience:

- Founders hiring for project-based work
- Clients looking for a senior engineer who can own delivery end-to-end

Secondary audience:

- Recruiters and full-time opportunities

This release optimizes for the primary audience first.

## 3) Scope For This Release

This release includes:

- Homepage messaging and section-flow improvements
- Founder-oriented proof restructuring across homepage, projects, blogs, and archive
- Promotion of LuckyPlans into a featured homepage proof section
- Copy cleanup in the contact CTA and project summaries
- Blog UX cleanup for chapter naming, metadata labels, encoding, and reading flow
- Case-study outcome rewrites to reduce repetitive or templated language

Out of scope:

- Full visual rebrand
- Major architecture rewrite
- New CMS or backend content system
- Large animation system changes

## 4) Product Direction

Recommended direction:

- Conversion-first refresh

Why:

- It directly addresses the founder feedback
- It improves trust and clarity without discarding the current visual language
- It stays mostly within the current content and component model, reducing implementation risk

## 5) Homepage Strategy

The homepage should answer three questions within the first screen and immediate scroll:

1. What does Takeshi build?
2. Who is he best for?
3. Why is he trustworthy for production delivery?

### Homepage order

1. Hero
2. Trust snapshot
3. Best-fit work
4. Featured client projects
5. Featured LuckyPlans proof
6. End-to-end ownership
7. Technical stack credibility
8. Contact CTA
9. Supporting sections that remain useful after trust is established

### Hero direction

The hero should be tightened around production-ready Web3 and AI product delivery.

It should position Takeshi as:

- A senior product engineer
- Strong in complex systems
- Capable of connecting UX, backend, blockchain data, AI workflows, and infrastructure

CTA emphasis should shift toward project conversation and delivery trust, not just exploration.

## 6) Trust And Proof Strategy

The site should move the visitor from:

- "He has many skills"

To:

- "He can own my product and ship it safely"

### Trust snapshot changes

Delivery metrics should be reframed around commercial outcomes instead of generic engineering counts.

Examples:

- Years shipping production web apps
- Startup and client engagements delivered
- APIs and product surfaces shipped
- Multi-chain delivery coverage

## 7) Projects Strategy

Featured projects should feel like founder-relevant proof, not resume entries.

Each project summary should quickly communicate:

- What kind of product it was
- What pressure, risk, or complexity existed
- What Takeshi owned
- What outcome changed because of the work

### Content rewrite goals

- Reduce generic or broad wording
- Emphasize business pressure and technical difficulty
- Make delivery ownership explicit
- Keep descriptions short and scannable

### Case-study page improvements

Outcome sections should stop repeating similar summary sentences.

Each case study should feel specific and evidence-oriented through this structure:

1. Problem
2. Role
3. Technical decisions
4. Result
5. Proof

This does not require a new page architecture for the release, but the existing content should be rewritten to better match this shape.

## 8) LuckyPlans Strategy

LuckyPlans should be elevated from supporting blog content into a featured founder-proof section on the homepage.

The section should communicate that LuckyPlans proves:

- Founder-level product thinking
- Real engineering depth across data, simulation, and product systems
- Honest iteration when production assumptions fail

The section should include:

- A concise summary of what LuckyPlans is
- 2-3 proof bullets
- Clear links into the founder journey and related work

LuckyPlans should not replace client work as the primary homepage proof. It should strengthen the client-work narrative by showing founder empathy and real product ownership.

## 9) Blogs Strategy

The blog should support trust after the visitor already understands the main positioning.

### Required improvements

- Remove visible filename-like chapter labels from user-facing cards
- Replace low-signal metadata like `attachments` with more human labels
- Fix encoding issues such as broken separator characters
- Add previous/next navigation on individual blog posts
- Better frame the founder journey as professional proof, not only a personal archive

### Messaging direction

The LuckyPlans blog archive should be presented as a curated founder journey that demonstrates:

- Web3 systems building
- Architecture adaptation under real constraints
- Strategic maturity
- Product judgment around validation and risk

## 10) Archive Strategy

The archive should remain a supporting trust layer for deeper reviewers.

It should feel easier to scan and more intentional through:

- Clearer project summaries
- Stronger proof labels
- Reduced confusion around private/internal work

The archive should not become the main conversion surface, but it should reinforce credibility for visitors who want breadth.

## 11) Contact Strategy

The contact section should sound direct, natural, and founder-friendly.

Required changes:

- Remove awkward phrasing such as "Let's Ship What Matters Possible."
- Make the invitation more explicit around project goals, blockers, and timelines
- Reinforce best-fit collaboration types

Desired effect:

- The contact section should feel like the next step in a delivery conversation, not a generic form footer

## 12) Implementation Boundaries

This release should stay mostly within the current data-driven structure.

Primary implementation files:

- `data/resume.ts`
- `app/page.tsx`
- `app/blogs/page.tsx`
- `app/blogs/[...slug]/page.tsx`
- `lib/founderJourneyBlogs.ts`
- `components/Contact/index.tsx`

Secondary touchpoints may include project and archive presentation components if required by the content updates.

## 13) Risks And Mitigations

Risk: The homepage becomes content-heavy.  
Mitigation: Keep sections concise, founder-oriented, and proof-first.

Risk: LuckyPlans overwhelms client delivery proof.  
Mitigation: Keep LuckyPlans as a featured supporting section after core client projects.

Risk: Copy improvements feel generic if too broad.  
Mitigation: Use concrete product pressure, delivery context, and system-specific language.

Risk: Blog cleanup fixes labels but not reading flow.  
Mitigation: Treat chapter navigation and sequence UX as required, not optional.

## 14) Success Criteria

The release is successful if:

- The homepage communicates founder-fit faster
- Featured work feels more specific and commercially credible
- LuckyPlans is clearly visible as founder proof on the homepage
- Blog cards and post pages feel curated instead of filesystem-derived
- Contact copy feels natural and conversion-oriented
- The site still matches the existing visual language while feeling sharper and more intentional

## 15) Verification Gates

Required commands before completion claim:

- `npm run lint`
- `npm run build`
- `npm run dev`

Manual QA focus:

- Homepage messaging hierarchy
- Mobile and desktop layout integrity
- Blog series navigation flow
- Encoding cleanup on blog metadata and content
- Contact CTA clarity and interaction flow
