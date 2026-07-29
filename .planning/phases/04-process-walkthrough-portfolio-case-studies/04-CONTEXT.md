# Phase 4: Process Walkthrough, Portfolio & Case Studies - Context

**Gathered:** 2026-07-29
**Status:** Ready for planning

<domain>
## Phase Boundary

Implement the 6-step workflow methodology section (01 Discovery, 02 Research, 03 Strategy, 04 Execution, 05 Optimization, 06 Growth) with GSAP ScrollTrigger vertical progress line pinning, and the asymmetrical Bento portfolio showcase with industry filter tabs and fullscreen luxury Case Study modals.

</domain>

<decisions>
## Implementation Decisions

### Process Walkthrough Motion & Layout
- **D-01 (Vertical Pinned Timeline):** The section header and intro pin in view while scrolling through the 6 methodology steps. A Brass Gold vertical progress indicator fills dynamically via GSAP ScrollTrigger as each step enters viewport.
- **D-02 (6 Methodology Steps):**
  1. `01 Discovery` — Deep dive into brand vision, market positioning, and stakeholder goals.
  2. `02 Research` — Regional competitor benchmarking and GCC target audience analysis.
  3. `03 Strategy` — Bespoke campaign blueprint, media channel selection, and technical architecture.
  4. `04 Execution` — High-end creative production, Next.js web build, and ad campaign launch.
  5. `05 Optimization` — Real-time analytics tracking, A/B testing, and media budget tuning.
  6. `06 Scalable Growth` — Sustained market expansion, retainer optimization, and executive reporting.

### Portfolio & Case Studies
- **D-03 (Asymmetrical Bento Portfolio Grid):** Portfolio projects showcased across UAE Real Estate, Luxury Hospitality, Enterprise Fintech, Retail, and Healthcare sectors.
- **D-04 (Industry Category Filter Tabs):** Filter controls (`All Work`, `Brand Strategy`, `Web Development`, `Media Buying`) allowing seamless sorting of portfolio items.
- **D-05 (Fullscreen Luxury Case Study Modal):** Clicking any portfolio card triggers a fullscreen Deep Forest Green modal displaying client background, challenge statement, strategic solution, visual showcase, and quantitative ROI metrics (e.g. `+240% Lead Acquisition`, `$14M+ Sales Pipeline Generated`).

### the agent's Discretion
- Card aspect ratios, color accents, and sample project metadata.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Brand & Architecture Specifications
- `.planning/PROJECT.md` — Brand palette, Core Value, and tech constraints
- `.planning/REQUIREMENTS.md` §PROC, §PORT — Requirements PROC-01, PROC-02, PORT-01, PORT-02, PORT-03
- `.planning/phases/01-foundation-core-design-system/01-CONTEXT.md` — Phase 1 design tokens
- `.planning/phases/03-agency-narrative-about-services-suite/03-CONTEXT.md` — Phase 3 narrative components

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `components/layout/SmoothScrollProvider.tsx` — Lenis smooth scroll & GSAP ScrollTrigger
- `components/ui/Button.tsx` — Luxury magnetic button component
- `app/globals.css` — Brand color tokens (`forest-green`, `brass-gold`, `warm-ivory`)

### Established Patterns
- Client components with `'use client'` using `@gsap/react` `useGSAP` hook for ScrollTrigger animations.

### Integration Points
- `app/page.tsx` — Replacing `#process` and `#portfolio` section placeholders with `Process` and `Portfolio` components.

</code_context>

<specifics>
## Specific Ideas

- Inspired by top agency portfolios on Awwwards, featuring Deep Forest Green (#234038), Brass Gold (#B88A44), Warm Ivory (#F7F4EC), and Playfair Display typography.

</specifics>

<deferred>
## Deferred Ideas

- None — discussion stayed within phase scope.

</deferred>

---

*Phase: 4-Process Walkthrough, Portfolio & Case Studies*
*Context gathered: 2026-07-29*
