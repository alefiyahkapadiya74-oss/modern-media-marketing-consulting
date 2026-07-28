# Project Research: Architecture

## Component Hierarchy
- `app/` (Next.js App Router)
  - `layout.tsx` (Root layout, Providers, Font definitions, Smooth Scroll wrapper)
  - `page.tsx` (Main interactive landing page assembling cinematic sections)
- `components/`
  - `layout/` (Navbar, Footer, SmoothScrollProvider)
  - `sections/` (Hero, About, Services, Process, Portfolio, CaseStudies, Testimonials, Contact)
  - `ui/` (Buttons, Cards, Modals, MagneticElements, CustomCursor, SectionHeading)
  - `animations/` (TextReveal, ScrollPin, ParallaxImage, StackingCards)
- `lib/` (GSAP register plugins, Lenis hook, animation configs, form validation)
- `data/` (Services list, Portfolio items, Case studies, Testimonials, Company info)

## Build Order Dependencies
1. Project foundation & design tokens (Tailwind colors, Playfair/Inter typography)
2. Smooth scroll & animation provider setup (Lenis + GSAP ScrollTrigger)
3. Header Navigation & Footer components
4. Cinematic Hero & Narrative About sections
5. Services & Process interactive components
6. Portfolio & Case Studies masonry/bento layouts
7. Testimonials & Contact Form with map integration
8. Motion polish, performance tuning & responsive validation
