---
phase: 3
slug: agency-narrative-about-services-suite
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-07-29
---

# Phase 3 — Validation Strategy

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
| 03-01-01 | 01 | 1 | ABT-01, ABT-02, ABT-03 | — | N/A | build | `npx tsc --noEmit` | ❌ W0 | ⬜ pending |
| 03-01-02 | 01 | 1 | SVC-01, SVC-02 | — | N/A | build | `npm run build` | ❌ W0 | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- [ ] `data/services.ts` — Data definitions for all 7 consultancy services
- [ ] `components/sections/About.tsx` — Editorial About section with Mission/Vision/Values & 4-pillar feature grid
- [ ] `components/sections/Services.tsx` — Bento grid showcasing 7 services with expandable detail drawer

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Service detail drawer open/close | SVC-02 | Interactive drawer UI animation | Click a service card (e.g. Marketing Consultancy), verify expandable drawer reveals deliverables list |
| About section GSAP reveals | ABT-02 | Motion timing on scroll | Scroll to About section, verify 3 pillar cards fade up smoothly |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 15s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
