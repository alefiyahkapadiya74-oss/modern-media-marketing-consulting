# Phase 3: Agency Narrative (About & Services Suite) - Research

**Phase Goal:** Implement the editorial About section (Company Story, Sharjah Free Zone HQ, Mission/Vision/Values grid, 4-pillar features, quote banner) and the 7-service consultancy suite (Marketing, Media Buying, Brand Strategy, Web Dev, Social Media, Design, HR) with an asymmetrical Bento grid and expandable detail drawer.

## Technical Analysis & Patterns

### 1. Data Schema & Service Definitions
- **Services Data (`data/services.ts`)**:
  - `id`: string (e.g. `marketing`, `media-buying`, `brand-strategy`, `web-development`, `social-media`, `design`, `hr-consulting`).
  - `title`: string.
  - `shortDescription`: string.
  - `fullDescription`: string.
  - `deliverables`: string[].
  - `icon`: icon name / SVG component.
  - `accentColor`: string (e.g. `brass-gold`).

### 2. Component Architecture
- **About Component (`components/sections/About.tsx`)**:
  - Asymmetrical 2-column layout introducing Sharjah Publishing City Free Zone base.
  - Mission, Vision, Values 3-card grid with Playfair Display titles and GSAP fade-up reveals.
  - "Why Choose Us" 4-pillar grid (Strategic Excellence, UAE Market Mastery, Bespoke Craftsmanship, ROI Focus).
  - Full-width Playfair Display editorial quote banner.
- **Services Component (`components/sections/Services.tsx`)**:
  - Asymmetrical Bento grid displaying all 7 services.
  - Interactive state (`activeServiceId: string | null`) controlling expandable detail drawer (`components/services/ServiceDetailDrawer.tsx` or inline expansion).

## Validation Architecture

### Verification Strategy
- **Build Verification**: Run `npx tsc --noEmit` and `npm run build`.
- **Services Interaction Verification**: Confirm all 7 services render, hover states apply Brass Gold borders, and clicking opens expandable detail drawer.
- **Scroll & Animation Verification**: Verify GSAP fade-up reveals trigger cleanly on scroll.
