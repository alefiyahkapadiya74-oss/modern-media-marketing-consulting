# Phase 6: GSAP ScrollTrigger Motion Polish & Performance Tuning - Context

**Gathered:** 2026-07-29
**Status:** Ready for planning

<domain>
## Phase Boundary

Implement the custom luxury dual-ring magnetic cursor (`ANIM-03`), global GSAP ScrollTrigger section parallax depth shifts and headline reveals (`ANIM-02`), Lenis smooth scroll inertia tuning (`ANIM-01`), complete Schema.org `ProfessionalService` JSON-LD structured data for Sharjah Publishing City Free Zone HQ, OpenGraph social meta cards, and final production build verification.

</domain>

<decisions>
## Implementation Decisions

### Custom Luxury Magnetic Cursor
- **D-01 (Dual-Ring Brass Cursor):** Create `components/ui/CustomCursor.tsx` featuring an inner Brass Gold dot (`w-2 h-2 bg-brass-gold`) and a trailing outer ring (`w-8 h-8 border border-brass-gold/50`) that scales up (`scale-150 bg-brass-gold/10`) when hovering interactive elements (`a`, `button`, `.cursor-pointer`). Hidden automatically on touch devices (`hidden md:block`).

### Motion Dynamics & Section Parallax
- **D-02 (GSAP Parallax Depth Shifts):** Apply subtle `yPercent` parallax offsets on background ambient glows across Hero, About, Services, Process, Portfolio, Testimonials, and Contact sections using GSAP ScrollTrigger.
- **D-03 (Lenis Physics Tuning):** Ensure Lenis inertia physics perform at a smooth 60fps across desktop and mobile devices without jank.

### SEO, Structured Data & Launch Readiness
- **D-04 (Schema.org JSON-LD Markup):** Embed structured `ProfessionalService` / `LocalBusiness` JSON-LD data in `app/layout.tsx` specifying company legal name ("Modern Media & Marketing Consulting FZC"), headquarters ("Sharjah Publishing City Free Zone, Sharjah, UAE"), GEO coordinates (`25.3094468, 55.4578148`), service catalog, and official channels.
- **D-05 (OpenGraph & Social Meta Cards):** Add complete OpenGraph and Twitter card metadata for social preview sharing.

### the agent's Discretion
- Cursor lerp speed, parallax offset percentages, and JSON-LD property formatting.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Brand & Architecture Specifications
- `.planning/PROJECT.md` — Project core value, brand palette, and tech stack constraints
- `.planning/REQUIREMENTS.md` §ANIM — Requirements ANIM-01, ANIM-02, ANIM-03
- `.planning/phases/01-foundation-core-design-system/01-CONTEXT.md` — Phase 1 smooth scroll provider
- `.planning/phases/05-testimonials-contact-google-maps/05-CONTEXT.md` — Phase 5 contact & location context

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `components/layout/SmoothScrollProvider.tsx` — Lenis smooth scroll & GSAP ScrollTrigger
- `components/ui/Button.tsx` — Luxury magnetic button component
- `app/layout.tsx` — Root layout for global fonts, meta tags, and cursor integration

### Established Patterns
- Client components with `'use client'` using `@gsap/react` `useGSAP` for animation hooks.

### Integration Points
- `app/layout.tsx` — Integrating `<CustomCursor />` and JSON-LD structured script.
- `app/page.tsx` — Assembling complete single-page editorial app layout.

</code_context>

<specifics>
## Specific Ideas

- Deliver an Awwwards-level final experience with Deep Forest Green (#234038), Brass Gold (#B88A44), Warm Ivory (#F7F4EC), and smooth inertia physics.

</specifics>

<deferred>
## Deferred Ideas

- None — discussion stayed within phase scope.

</deferred>

---

*Phase: 6-GSAP ScrollTrigger Motion Polish & Performance Tuning*
*Context gathered: 2026-07-29*
