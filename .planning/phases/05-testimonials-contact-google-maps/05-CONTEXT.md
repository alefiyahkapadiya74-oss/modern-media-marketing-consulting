# Phase 5: Testimonials, Contact & Google Maps - Context

**Gathered:** 2026-07-29
**Status:** Ready for planning

<domain>
## Phase Boundary

Implement the luxury client testimonial carousel slider (`TEST-01`, `TEST-02`), strategic B2B contact inquiry form with service selection pills, budget range selector, and validation (`CONT-01`), Sharjah Publishing City Free Zone location details (`CONT-02`), and custom interactive Google Maps embed (`CONT-03`).

</domain>

<decisions>
## Implementation Decisions

### Testimonials & Social Proof
- **D-01 (Interactive Carousel Slider):** Auto-playing slider with manual Brass Gold prev/next controls, pagination indicators, large Playfair Display quote typography, and executive profiles (CEO, CMO, Managing Directors) from top UAE real estate, corporate, and hospitality enterprises.

### Contact & Strategic B2B Inquiry Form
- **D-02 (Full Strategic Inquiry Form):** Interactive form featuring:
  - Client Details: Full Name, Business Email, Phone Number, Company Name.
  - Service Selection Pills: Multi-select pills for Marketing, Media Buying, Brand Strategy, Web Dev, Social Media, Design, and HR Consulting.
  - Budget Range Selector: `$10k-$25k`, `$25k-$50k`, `$50k-$100k`, `$100k+`.
  - Project Scope Text Area: Detailed project goals and timeline.
  - Client-Side Validation: Real-time email and required field checks with instant success state.

### Location Details & Google Maps Embed
- **D-03 (Integrated Location Hub):** Dedicated contact container combining:
  - Official Headquarters Address: Sharjah Publishing City Free Zone, Sharjah, United Arab Emirates.
  - Direct Channels: `info@modernmedia.ae`, `+971 6 000 0000`, WhatsApp direct link.
  - Operating Hours: Monday – Friday: 9:00 AM – 6:00 PM GST.
  - Google Maps Embed: Custom styled interactive Google Maps iframe centered on Sharjah Publishing City Free Zone.

### the agent's Discretion
- Form state validation messages, success toast duration, and testimonial transition speeds.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Brand & Architecture Specifications
- `.planning/PROJECT.md` — Project core value, brand palette, and tech stack constraints
- `.planning/REQUIREMENTS.md` §TEST, §CONT — Requirements TEST-01, TEST-02, CONT-01, CONT-02, CONT-03
- `.planning/phases/01-foundation-core-design-system/01-CONTEXT.md` — Phase 1 design tokens
- `.planning/phases/04-process-walkthrough-portfolio-case-studies/04-CONTEXT.md` — Phase 4 portfolio context

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `components/ui/Button.tsx` — Luxury magnetic button component
- `app/globals.css` — Brand color tokens (`forest-green`, `brass-gold`, `warm-ivory`)

### Established Patterns
- Client components with `'use client'` using `@gsap/react` or React state hooks for interactive carousels and forms.

### Integration Points
- `app/page.tsx` — Replacing `#testimonials` and `#contact` section placeholders with `Testimonials` and `Contact` components.

</code_context>

<specifics>
## Specific Ideas

- Inspired by premier UAE corporate agency sites, maintaining Deep Forest Green (#234038), Brass Gold (#B88A44), Warm Ivory (#F7F4EC), and Playfair Display typography.

</specifics>

<deferred>
## Deferred Ideas

- None — discussion stayed within phase scope.

</deferred>

---

*Phase: 5-Testimonials, Contact & Google Maps*
*Context gathered: 2026-07-29*
