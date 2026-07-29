# Phase 2: Header Navigation & Cinematic Hero Section - Research

**Phase Goal:** Build the dynamic transparent navigation header, sticky scroll state transitions, slide-over/fullscreen mobile navigation overlay, and cinematic Playfair Display Hero section with GSAP entrance reveals and magnetic CTA micro-interactions.

## Technical Analysis & Patterns

### 1. Header Component & Scroll State
- **Sticky Glassmorphism Header**:
  - Initial state (`scrollY === 0`): `bg-transparent border-transparent text-charcoal`.
  - Scrolled state (`scrollY > 50`): `bg-warm-ivory/80 backdrop-blur-md border-b border-brass-gold/20 shadow-sm`.
  - Brand Logo: "M&M" brass badge + "Modern Media & Marketing Consulting FZC" in Playfair Display serif typography.
  - Active Section Tracking: IntersectionObserver or scroll position updating active anchor link (`#home`, `#about`, `#services`, `#process`, `#portfolio`, `#testimonials`, `#contact`).

### 2. Fullscreen Mobile Navigation Overlay
- **Fullscreen Overlay Component**:
  - Triggered by hamburger button with animated icon morphing to an 'X' close icon.
  - Background: Fullscreen Deep Forest Green (`#234038`) curtain with subtle noise texture and Brass Gold accents.
  - Staggered Links: Playfair Display serif links (`text-3xl md:text-5xl`) animating into view with Framer Motion or GSAP.
  - Additional Info: Sharjah Publishing City Free Zone address badge, direct email, phone, and social links embedded at bottom.

### 3. Cinematic Hero Section & GSAP Motion
- **Layout & Typography**:
  - Large Playfair Display headline with Brass Gold italic accent word ("Architecting Luxury Digital Experiences").
  - Inter body subtitle max-w-2xl font-light.
  - Call-To-Action buttons ("Explore Our Suite", "Request Consultation") with magnetic hover physics and Brass Gold fill expansion.
- **GSAP Stagger Reveal**:
  - `useGSAP` hook creating timeline staggering headline words, subtitle, and CTA buttons on page mount with opacity 0 -> 1 and `y: 40 -> 0`.

## Validation Architecture

### Verification Strategy
- **Build Verification**: Run `npx tsc --noEmit` and `npm run build`.
- **Navigation & Mobile Overlay Verification**: Confirm navigation links jump to section anchors and mobile menu toggle opens/closes fullscreen overlay smoothly.
- **Hero Motion & Hover Verification**: Verify GSAP entrance timeline runs without console warnings or layout shifts.

## Risks & Mitigations
- **Scroll Jank on Mobile**: Heavy backdrop-blur filters causing low frame rates on low-spec mobile browsers.
  - *Mitigation*: Fall back to solid/semi-opaque Deep Forest Green background on touch devices without backdrop-filter support.
