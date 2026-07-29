# Phase 1: Foundation & Core Design System - Context

**Gathered:** 2026-07-29
**Status:** Ready for planning

<domain>
## Phase Boundary

Establish the technical foundation for Next.js 14+ (App Router), strict TypeScript, Tailwind CSS with luxury brand colors (#234038 Deep Forest Green, #B88A44 Brass Gold, #F7F4EC Warm Ivory, White cards, Charcoal text), Playfair Display (Headings) and Inter (Body) fonts via `next/font`, and centralized Lenis smooth scroll provider setup.

</domain>

<decisions>
## Implementation Decisions

### Lenis & GSAP Animation Integration
- **D-01:** Lenis smooth scroll configured with **Ultra-Smooth Editorial** parameters (`duration: 1.2`, `lerp: 0.1`, `smoothTouch: false`) to deliver a weighted, fluid inertia feel matching Awwwards luxury design standards. — **Reversibility:** costly — changing scroll inertia physics affects section scroll triggers across all downstream pages.
- **D-02:** Centralized `SmoothScrollProvider` component using `'use client'` and `@gsap/react` / `useGSAP` hook for synchronized GSAP ScrollTrigger updates and zero SSR hydration warnings. — **Reversibility:** reversible — modular provider pattern isolated in component tree.

### Design System & Tokens
- **D-03:** Tailwind CSS theme configured to map brand hex values: `#234038` (Deep Forest Green), `#B88A44` (Brass Gold), `#F7F4EC` (Warm Ivory), `#FFFFFF` (Cards), `#1C1C1C` (Charcoal Text).
- **D-04:** `Playfair Display` and `Inter` loaded through `next/font/google` and mapped to CSS variables (`--font-playfair`, `--font-inter`) for SSR typography rendering without FOUT (Flash of Unstyled Text).

### the agent's Discretion
- Code folder structure following standard Next.js App Router layout (`app/`, `components/ui/`, `components/layout/`, `lib/`).

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Brand & Architecture Specifications
- `.planning/PROJECT.md` — Project core value, brand palette, and tech stack constraints
- `.planning/REQUIREMENTS.md` §SYS — Requirements SYS-01, SYS-02, SYS-03
- `.planning/research/STACK.md` — Stack guidelines for Next.js + Tailwind + GSAP + Lenis

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- Greenfield setup — creating core design tokens, font definitions, and smooth scroll provider.

### Established Patterns
- Next.js 14+ App Router layout pattern with client-side animation wrappers.

### Integration Points
- Root `app/layout.tsx` wrapping all section components with `SmoothScrollProvider`.

</code_context>

<specifics>
## Specific Ideas

- Inspired by Awwwards luxury editorial sites (e.g. Cherry House) with deep forest green background, brass gold accents, and Playfair Display typography.

</specifics>

<deferred>
## Deferred Ideas

- None — discussion stayed within phase scope.

</deferred>

---

*Phase: 1-Foundation & Core Design System*
*Context gathered: 2026-07-29*
