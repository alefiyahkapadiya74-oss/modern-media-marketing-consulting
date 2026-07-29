# Phase 5: Testimonials, Contact & Google Maps - Research

**Phase Goal:** Implement the luxury client testimonial carousel slider (`TEST-01`, `TEST-02`), strategic B2B contact inquiry form with service selection pills, budget range selector, and client-side validation (`CONT-01`), Sharjah Publishing City Free Zone location details (`CONT-02`), and custom interactive Google Maps embed (`CONT-03`).

## Technical Analysis & Patterns

### 1. Data Schemas & Testimonial Definitions
- **Testimonials Data (`data/testimonials.ts`)**:
  - `id`: string.
  - `quote`: string.
  - `author`: string.
  - `role`: string.
  - `company`: string.
  - `industry`: string.
  - `avatarInitial`: string.

### 2. Component Architecture
- **Testimonials Component (`components/sections/Testimonials.tsx`)**:
  - Auto-playing carousel with React state (`activeSlide`).
  - Manual Prev/Next controls with Brass Gold hover styling.
  - Pagination indicators.
  - Playfair Display quote typography.
- **Contact Component (`components/sections/Contact.tsx`)**:
  - Full Strategic B2B Inquiry Form: Name, Email, Phone, Company, Service Domain pills (multi-select), Budget Range selector, Project Details.
  - Real-time client-side validation for required fields and email regex.
  - Instant success state with confirmation banner.
  - Sharjah Publishing City Free Zone address, direct email (`info@modernmedia.ae`), phone (`+971 6 000 0000`), working hours, and custom interactive Google Maps embed iframe.

## Validation Architecture

### Verification Strategy
- **Build Verification**: Run `npx tsc --noEmit` and `npm run build`.
- **Form & Carousel Verification**: Confirm testimonial carousel slides through client quotes, service selection pills toggle in contact form, and submitting form validates fields and triggers success banner.
- **Google Maps Verification**: Confirm Google Maps iframe renders cleanly with Sharjah Publishing City Free Zone coordinates.
