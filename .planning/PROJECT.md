# Modern Media & Marketing Consulting FZC

## What This Is

Modern Media & Marketing Consulting FZC is a luxury, modern, editorial, and interactive web application for a premier UAE-based creative marketing and business consulting agency located in Sharjah Publishing City Free Zone. The platform offers an immersive storytelling experience with smooth animations, high-end typography, and an Awwwards-inspired aesthetic to showcase the company's full service suite across marketing, branding, web development, media buying, and HR consulting.

## Core Value

Deliver an Awwwards-level cinematic, immersive, and highly memorable digital experience that positions Modern Media & Marketing Consulting FZC as one of the top luxury creative agencies in the UAE.

## Business Context

- **Customer**: UAE & international Startups, SMEs, Large Enterprises, Real Estate, Restaurants, Healthcare, Retail, E-commerce, Corporate, and Government entities.
- **Revenue model**: B2B Consulting retainer & project-based contracts across marketing, branding, media buying, web development, and HR services.
- **Success metric**: Client inquiries, high-ticket lead generation, high engagement depth (time on site), and industry design recognition.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Cinematic & Immersive Hero Section with Playfair Display typography and high-end visual storytelling.
- [ ] Responsive Transparent & Sticky Navigation header with smooth state changes.
- [ ] Editorial About Section showcasing Company Story, Mission, Vision, and Why Choose Us.
- [ ] Full Service Suite Showcase: Marketing Consultancy, Media Buying, Brand Strategy, Web Development, Social Media Consultancy, Design Consultancy, HR Consultancy.
- [ ] Interactive 6-step Process Walkthrough (Discovery, Research, Strategy, Execution, Optimization, Growth).
- [ ] High-Impact Portfolio Showcase featuring interactive project cards, bento grids, and masonry layouts.
- [ ] Detailed Case Studies section presenting client success stories.
- [ ] Luxury Testimonials Showcase with custom card layouts.
- [ ] Comprehensive Contact Section with interactive contact form, office address in Sharjah Publishing City Free Zone, Google Maps integration, email, and phone contact details.
- [ ] Smooth Lenis Scrolling & GSAP ScrollTrigger animation system (text reveal, parallax, card stacking, blur/scale reveals).
- [ ] Custom Color Palette (#234038 Deep Forest Green, #B88A44 Brass Gold, #F7F4EC Warm Ivory, White cards, Charcoal text).

### Out of Scope

- [ ] Generic corporate blue/purple themes — Explicitly excluded by brand guidelines; must strictly adhere to Deep Forest Green and Brass Gold luxury palette.
- [ ] Cluttered default component libraries (e.g. raw Bootstrap or standard unstyled controls) — Excluded in favor of bespoke Framer Motion / GSAP animations and Tailwind styling.

## Context

- **Company Location**: Sharjah Publishing City Free Zone, UAE.
- **Design Target**: Inspired by Awwwards-winning websites (e.g. Cherry House), featuring luxury editorial typography (Playfair Display + Inter), smooth physics-based scrolling (Lenis), and refined motion graphics (GSAP & Framer Motion).
- **Target OS & Devices**: Fully responsive across mobile, tablet, desktop, and ultra-wide displays with mobile-first performance optimizations.

## Constraints

- **Tech Stack**: Next.js, React, TypeScript, Tailwind CSS, GSAP, Lenis, Framer Motion, Three.js (where meaningful).
- **Design & Branding**: Primary: #234038 Deep Forest Green, Accent: #B88A44 Brass Gold, Background: #F7F4EC Warm Ivory, Cards: White, Text: Charcoal. Headings: Playfair Display, Body: Inter.
- **Performance**: High frame-rate animations (60fps), fast initial load times, optimized image loading, SEO best practices, accessibility (a11y) support.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Next.js + React + TS Stack | Enables optimal SSR/SSG for SEO while maintaining rich client-side animation state | — Pending |
| Lenis + GSAP ScrollTrigger | Provides butter-smooth inertia scrolling and pinning mechanics matching Awwwards standards | — Pending |
| Custom Luxury Palette | Forest Green (#234038) & Brass Gold (#B88A44) over Warm Ivory (#F7F4EC) to signal exclusivity and trust | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-07-29 after project initialization*
