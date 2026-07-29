---
phase: 4
slug: process-walkthrough-portfolio-case-studies
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-07-29
---

# Phase 4 — Validation Strategy

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
| 04-01-01 | 01 | 1 | PROC-01, PROC-02 | — | N/A | build | `npx tsc --noEmit` | ❌ W0 | ⬜ pending |
| 04-01-02 | 01 | 1 | PORT-01, PORT-02, PORT-03 | — | N/A | build | `npm run build` | ❌ W0 | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- [ ] `data/projects.ts` — Data definitions for regional client case studies
- [ ] `components/sections/Process.tsx` — 6-step methodology section with GSAP progress line
- [ ] `components/sections/Portfolio.tsx` — Bento portfolio grid with category filter tabs
- [ ] `components/portfolio/CaseStudyModal.tsx` — Fullscreen luxury Case Study modal

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Case Study modal open/close | PORT-03 | Interactive modal animation | Click any project card, verify fullscreen modal opens showing challenge, strategy, and ROI metrics |
| Category filter tabs | PORT-01 | State filter toggle | Click "Web Development" filter tab, verify grid filters to web projects only |
| GSAP process line fill | PROC-02 | ScrollTrigger animation | Scroll through 6-step process, verify progress indicator line fills in sync with scroll |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 15s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
