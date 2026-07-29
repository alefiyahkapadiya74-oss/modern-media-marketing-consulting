# Phase 3: Agency Narrative (About & Services Suite) - Context

**Gathered:** 2026-07-29
**Status:** Ready for planning

<domain>
## Phase Boundary

Implement the editorial About section (Company Origin, Sharjah Publishing City Base, Mission/Vision/Values grid, Why Choose Us 4-pillar grid, Minimal Editorial Quote Banner) and the comprehensive 7-service consultancy suite (Marketing, Media Buying, Brand Strategy, Web Development, Social Media, Design, HR) with an asymmetrical Bento grid and expandable detail drawer.

</domain>

<decisions>
## Implementation Decisions

### About Section Editorial Layout
- **D-01 (Company Story & Base):** Asymmetrical 2-column layout introducing Modern Media & Marketing Consulting FZC, emphasizing its strategic base in Sharjah Publishing City Free Zone, UAE.
- **D-02 (3-Card Pillar Grid):** Mission, Vision, and Values rendered in white rounded cards (`bg-white shadow-sm border-t-2 border-brass-gold`) with Playfair Display headings and GSAP ScrollTrigger fade-up entrance reveals.
- **D-03 (4-Pillar Metric Grid):** "Why Choose Us" section presented as a 4-card metric grid highlighting Strategic Excellence, UAE Market Mastery, Bespoke Craftsmanship, and ROI Focus.

### Services Suite Interactive Grid
- **D-04 (Asymmetrical Bento Grid):** All 7 core services (Marketing Consultancy, Media Buying, Brand Strategy, Web Development, Social Media Consultancy, Design Consultancy, HR Consultancy) displayed in an interactive Bento layout with numbered badges (`01`, `02`, etc.) and Brass Gold hover borders.
- **D-05 (Expandable Service Detail Drawer):** Clicking any service card triggers an expandable detail view/drawer detailing core deliverables, strategic approach, and client outcomes.

### Editorial Typography & Trust Indicators
- **D-06 (Minimal Editorial Quote Banner):** Elegant full-width divider featuring a large Playfair Display quote statement: *"Empowering UAE Enterprises with Uncompromising Vision, Strategic Precision, and Luxury Craftsmanship."*

### the agent's Discretion
- Card spacing, icon selections, and service deliverable bullet copy.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Brand & Architecture Specifications
- `.planning/PROJECT.md` — Project core value, brand palette, and tech stack constraints
- `.planning/REQUIREMENTS.md` §ABT, §SVC — Requirements ABT-01, ABT-02, ABT-03, SVC-01, SVC-02
- `.planning/phases/01-foundation-core-design-system/01-CONTEXT.md` — Phase 1 design system decisions
- `.planning/phases/02-header-navigation-cinematic-hero-section/02-CONTEXT.md` — Phase 2 header & hero implementation

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `components/layout/SmoothScrollProvider.tsx` — Lenis smooth scroll & GSAP ScrollTrigger provider
- `components/ui/Button.tsx` — Luxury magnetic CTA button
- `app/globals.css` — Luxury theme tokens and typography classes

### Established Patterns
- Client component animation wrappers using `'use client'` and `@gsap/react` / `useGSAP`.

### Integration Points
- `app/page.tsx` — Replacing `#about` and `#services` section placeholders with `About` and `Services` components.

</code_context>

<specifics>
## Specific Ideas

- Inspired by Awwwards-winning luxury agency layouts, maintaining Deep Forest Green (#234038), Brass Gold (#B88A44), Warm Ivory (#F7F4EC), and Playfair Display typography.

</specifics>

<deferred>
## Deferred Ideas

- None — discussion stayed within phase scope.

</deferred>

---

*Phase: 3-Agency Narrative (About & Services Suite)*
*Context gathered: 2026-07-29*
