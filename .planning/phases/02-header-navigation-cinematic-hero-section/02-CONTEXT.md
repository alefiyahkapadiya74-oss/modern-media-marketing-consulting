# Phase 2: Header Navigation & Cinematic Hero Section - Context

**Gathered:** 2026-07-29
**Status:** Ready for planning

<domain>
## Phase Boundary

Build the dynamic transparent navigation header, sticky scroll state transitions, slide-over/fullscreen mobile navigation overlay, and cinematic Playfair Display Hero section with GSAP entrance reveals and magnetic CTA micro-interactions.

</domain>

<decisions>
## Implementation Decisions

### Header Navigation & Sticky Transitions
- **D-01 (Glassmorphism Blur Header):** Navbar starts fully transparent over Warm Ivory background at scroll position 0. On scroll down, it transitions smoothly to a subtle glassmorphism backdrop-blur (`backdrop-blur-md bg-warm-ivory/80`) with a thin Brass Gold bottom border (`border-b border-brass-gold/20`). — **Reversibility:** reversible — isolated in `Navbar` component state.
- **D-02 (Brand Logo Presentation):** Navigation header displays a custom "M&M" brass monogram badge paired with "Modern Media & Marketing Consulting FZC" in Playfair Display serif typography.

### Hero Typography & GSAP Entrance Motion
- **D-03 (Staggered Word Entrance):** GSAP entrance animation staggering headline words/lines sequentially with opacity fade-in and subtle scale-up, followed by the subtitle and call-to-action buttons. — **Reversibility:** reversible — contained in `Hero` component GSAP timeline.
- **D-04 (Magnetic CTA Micro-Interactions):** Call-to-action buttons ("Explore Our Work" and "Request Consultation") incorporate magnetic cursor pull physics and smooth Brass Gold fill hover expansion.

### Mobile Navigation Menu
- **D-05 (Fullscreen Luxury Overlay):** Mobile navigation opens a fullscreen Deep Forest Green (`#234038`) overlay curtain featuring staggered Playfair Display navigation links, social badges, and Sharjah Publishing City Free Zone contact details.

### the agent's Discretion
- Anchor link target section IDs (`#home`, `#about`, `#services`, `#process`, `#portfolio`, `#testimonials`, `#contact`).

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Brand & Architecture Specifications
- `.planning/PROJECT.md` — Brand palette, Core Value, and tech constraints
- `.planning/REQUIREMENTS.md` §NAV, §HERO — Requirements NAV-01, NAV-02, NAV-03, HERO-01, HERO-02, HERO-03
- `.planning/phases/01-foundation-core-design-system/01-CONTEXT.md` — Phase 1 foundation decisions

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `components/layout/SmoothScrollProvider.tsx` — Global Lenis smooth scroll and GSAP ScrollTrigger provider wrapper
- `app/globals.css` — Luxury color tokens and Lenis smooth scroll CSS classes
- `tailwind.config.ts` — `forest-green`, `brass-gold`, `warm-ivory`, `font-serif`, `font-sans`

### Established Patterns
- Client component animation wrappers using `'use client'` and `@gsap/react`.

### Integration Points
- `app/page.tsx` — Assembling `Navbar` and `Hero` components into the primary landing layout.

</code_context>

<specifics>
## Specific Ideas

- Inspired by top Awwwards editorial sites, maintaining Deep Forest Green (#234038) and Brass Gold (#B88A44) accents over Warm Ivory background with large Playfair Display typography.

</specifics>

<deferred>
## Deferred Ideas

- None — discussion stayed within phase scope.

</deferred>

---

*Phase: 2-Header Navigation & Cinematic Hero Section*
*Context gathered: 2026-07-29*
