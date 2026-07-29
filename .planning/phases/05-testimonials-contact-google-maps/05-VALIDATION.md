---
phase: 5
slug: testimonials-contact-google-maps
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-07-29
---

# Phase 5 — Validation Strategy

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
| 05-01-01 | 01 | 1 | TEST-01, TEST-02 | — | N/A | build | `npx tsc --noEmit` | ❌ W0 | ⬜ pending |
| 05-01-02 | 01 | 1 | CONT-01, CONT-02, CONT-03 | — | N/A | build | `npm run build` | ❌ W0 | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- [ ] `data/testimonials.ts` — Data definitions for client testimonials
- [ ] `components/sections/Testimonials.tsx` — Testimonial slider carousel component
- [ ] `components/sections/Contact.tsx` — B2B contact inquiry form, address card, and Google Maps embed

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Testimonial carousel navigation | TEST-02 | Carousel transition state | Click Prev/Next arrows, verify slide advances to next client quote |
| Contact form validation & submission | CONT-01 | Client-side form state | Submit form with empty fields, verify validation warnings; fill fields and submit, verify success state |
| Google Maps interactive embed | CONT-03 | Google Maps iframe render | Verify map renders centered on Sharjah Publishing City Free Zone |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 15s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
