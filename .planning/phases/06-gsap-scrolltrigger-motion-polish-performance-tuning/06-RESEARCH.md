# Phase 6: GSAP ScrollTrigger Motion Polish & Performance Tuning - Research

**Phase Goal:** Implement the custom luxury dual-ring magnetic cursor (`ANIM-03`), global GSAP ScrollTrigger section parallax depth shifts and headline reveals (`ANIM-02`), Lenis smooth scroll inertia tuning (`ANIM-01`), complete Schema.org `ProfessionalService` JSON-LD structured data for Sharjah Publishing City Free Zone HQ, OpenGraph social meta cards, and final production build verification.

## Technical Analysis & Patterns

### 1. Custom Luxury Cursor Architecture
- **`components/ui/CustomCursor.tsx` ('use client')**:
  - State: `position` ({x, y}), `isHovered` (boolean).
  - Mousemove event listener updating position with lerp animation frame (`requestAnimationFrame`).
  - Event listeners on `a`, `button`, `.cursor-pointer` toggling `isHovered` state for scale-up expansion.
  - Hidden on touch devices (`@media (pointer: coarse)` / `hidden md:block`).

### 2. SEO & Schema.org JSON-LD Structured Data
- **Structured Data in `app/layout.tsx`**:
  - `@context`: `https://schema.org`
  - `@type`: `ProfessionalService` / `LocalBusiness`
  - `name`: "Modern Media & Marketing Consulting FZC"
  - `description`: "Luxury marketing, branding, web development, media buying, and HR consulting agency in Sharjah Publishing City Free Zone, UAE."
  - `address`: { streetAddress: "Sharjah Publishing City Free Zone", addressLocality: "Sharjah", addressCountry: "AE" }
  - `geo`: { latitude: 25.3094468, longitude: 55.4578148 }
  - `telephone`: "+97160000000"
  - `email`: "info@modernmedia.ae"

## Validation Architecture

### Verification Strategy
- **Build Verification**: Run `npx tsc --noEmit` and `npm run build`.
- **Custom Cursor Verification**: Confirm cursor dot & trailing ring follow mouse movements smoothly and expand when hovering links/buttons on desktop.
- **Structured Data & SEO Verification**: Verify JSON-LD script tag renders in DOM without syntax errors.
