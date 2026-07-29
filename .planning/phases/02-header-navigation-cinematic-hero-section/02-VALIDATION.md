---
phase: 2
slug: header-navigation-cinematic-hero-section
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-07-29
---

# Phase 2 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | Next.js Build & TypeScript Check |
| **Config file** | tsconfig.json |
| **Quick run command** | `npx tsc --noEmit` |
| **Full suite command** | `npm run build` |
| **Estimated runtime** | ~15 seconds |

---

## Sampling Rate

- **After every task commit:** Run `npx tsc --noEmit`
- **After every plan wave:** Run `npm run build`
- **Before `/gsd-verify-work`:** Full build must pass cleanly with 0 errors
- **Max feedback latency:** 15 seconds

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Threat Ref | Secure Behavior | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|------------|-----------------|-----------|-------------------|-------------|--------|
| 02-01-01 | 01 | 1 | NAV-01, NAV-02 | — | N/A | build | `npx tsc --noEmit` | ❌ W0 | ⬜ pending |
| 02-01-02 | 01 | 1 | NAV-03 | — | N/A | build | `npx tsc --noEmit` | ❌ W0 | ⬜ pending |
| 02-01-03 | 01 | 1 | HERO-01, HERO-02, HERO-03 | — | N/A | build | `npm run build` | ❌ W0 | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- [ ] `components/layout/Navbar.tsx` — Glassmorphism navigation bar with scroll detection & active section state
- [ ] `components/layout/MobileMenu.tsx` — Fullscreen luxury overlay curtain for small screens
- [ ] `components/sections/Hero.tsx` — Cinematic Playfair Display hero with GSAP entrance reveals and magnetic CTA buttons

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Glassmorphism scroll transition | NAV-01 | Visual transition on window scroll | Scroll page down, verify background morphs from transparent to backdrop-blur with Brass Gold border |
| Fullscreen mobile menu open/close | NAV-03 | UI curtain animation | Click mobile hamburger menu, verify fullscreen curtain covers screen and close button dismisses it |
| GSAP Hero entrance reveal | HERO-02 | Motion timing and staggered opacity/scale | Refresh page, verify Playfair Display headline words stagger into view smoothly |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 15s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
