# Phase 1: Foundation & Core Design System - Research

**Phase Goal:** Establish Next.js setup, luxury design tokens (`#234038` Forest Green, `#B88A44` Brass Gold, `#F7F4EC` Warm Ivory), Playfair Display & Inter typography, and Lenis smooth scroll provider setup.

## Technical Analysis & Patterns

### 1. Framework & Next.js App Router Architecture
- **Framework**: Next.js 14+ with React 18 & strict TypeScript.
- **Directory Structure**:
  - `app/layout.tsx`: Global root layout importing font definitions, Tailwind styles, and `SmoothScrollProvider`.
  - `app/page.tsx`: Initial entry landing page.
  - `components/ui/`: Atomic UI elements (Buttons, Cards, Badges).
  - `components/layout/`: Global layout components (Navbar, Footer, SmoothScrollProvider).
  - `lib/utils.ts`: Helper utilities (e.g. `clsx`, `tailwind-merge`).

### 2. Styling System & Design Tokens
- **Tailwind CSS Configuration**:
  - Primary: `#234038` (Deep Forest Green)
  - Accent: `#B88A44` (Brass Gold)
  - Background: `#F7F4EC` (Warm Ivory)
  - Cards: `#FFFFFF` (White)
  - Text: `#1C1C1C` (Charcoal)
- **Typography (`next/font/google`)**:
  - `Playfair_Display` mapped to CSS variable `--font-playfair` (headings).
  - `Inter` mapped to CSS variable `--font-inter` (body copy).

### 3. Lenis & GSAP Integration
- **Lenis Settings**: `duration: 1.2`, `lerp: 0.1`, `smoothTouch: false`.
- **GSAP Sync**: Registered inside `SmoothScrollProvider` with `'use client'` using `@gsap/react` `useGSAP` hook or `useEffect` to avoid SSR hydration mismatches.

## Validation Architecture

### Verification Strategy
- **Build Verification**: Run `npm run build` or `npx tsc --noEmit` to confirm zero TypeScript compilation errors.
- **Layout & Token Verification**: Confirm CSS variables `--font-playfair` and `--font-inter` apply correctly and Tailwind custom colors render properly.
- **Scroll Behavior Verification**: Confirm Lenis smooth scroll initializes without console warnings or layout thrashing on window scroll.

## Risks & Mitigations
- **Hydration Warning**: Instantiating window-dependent Lenis instance on SSR server render.
  - *Mitigation*: Enforce `'use client'` on `SmoothScrollProvider` and initialize Lenis inside post-mount effect.
