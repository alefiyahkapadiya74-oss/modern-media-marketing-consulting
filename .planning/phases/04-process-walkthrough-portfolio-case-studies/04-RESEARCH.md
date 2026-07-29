# Phase 4: Process Walkthrough, Portfolio & Case Studies - Research

**Phase Goal:** Implement the interactive 6-step methodology section (Discovery, Research, Strategy, Execution, Optimization, Growth) with GSAP ScrollTrigger vertical progress line pinning, and the high-impact Bento portfolio grid with category filter tabs and fullscreen luxury Case Study modals.

## Technical Analysis & Patterns

### 1. Data Schemas & Portfolio Definitions
- **Portfolio Data (`data/projects.ts`)**:
  - `id`: string (e.g. `marina-towers`, `apex-capital`, `aura-hospitality`, `nexus-fintech`, `solaris-retail`, `omni-health`).
  - `title`: string.
  - `client`: string.
  - `category`: string (`Brand Strategy` | `Web Development` | `Media Buying`).
  - `industry`: string.
  - `year`: string.
  - `challenge`: string.
  - `strategy`: string.
  - `metrics`: { label: string; value: string }[].
  - `imageBg`: gradient string or styled luxury container background.

### 2. Component Architecture
- **Process Component (`components/sections/Process.tsx`)**:
  - 6-step methodology list (01 Discovery, 02 Research, 03 Strategy, 04 Execution, 05 Optimization, 06 Growth).
  - GSAP ScrollTrigger vertical progress line filling as each step enters viewport.
- **Portfolio Component (`components/sections/Portfolio.tsx`)**:
  - Category filter tabs (`All Work`, `Brand Strategy`, `Web Development`, `Media Buying`).
  - Asymmetrical Bento grid displaying luxury project cards with hover scale and Brass Gold border states.
  - Interactive state (`activeProject: Project | null`) triggering `CaseStudyModal`.
- **Case Study Modal (`components/portfolio/CaseStudyModal.tsx`)**:
  - Fullscreen Deep Forest Green (`#234038`) overlay detailing client challenge, agency strategy, visual showcase, and quantitative ROI metrics.

## Validation Architecture

### Verification Strategy
- **Build Verification**: Run `npx tsc --noEmit` and `npm run build`.
- **Portfolio Interaction Verification**: Confirm category filtering filters cards correctly, and clicking a project opens `CaseStudyModal`.
- **Scroll & Animation Verification**: Verify GSAP vertical progress line fills smoothly as user scrolls through the 6 methodology steps.
