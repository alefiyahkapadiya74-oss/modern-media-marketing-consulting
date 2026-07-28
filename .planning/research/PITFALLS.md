# Project Research: Pitfalls to Avoid

## Critical Domain Risks & Mitigation
1. **Scroll-Jank & Animation Overload**: Overusing heavy JavaScript animations can degrade frame rates on mobile devices.
   - *Mitigation*: Use Lenis for smooth scroll, utilize CSS transforms for GSAP animations, and disable resource-intensive 3D canvases on low-power mobile viewports.
2. **SSR / Hydration Mismatches**: GSAP ScrollTrigger or window measuring executed server-side causes React hydration warnings.
   - *Mitigation*: Enforce `'use client'` on interactive animation wrappers and initialize ScrollTrigger inside `useLayoutEffect` or `useEffect` after mount.
3. **Generic Corporate Feel**: Falling back to standard blue/purple palettes or repetitive card layouts.
   - *Mitigation*: Strictly enforce Warm Ivory (#F7F4EC), Deep Forest Green (#234038), and Brass Gold (#B88A44) with Playfair Display typography and asymmetrical editorial grid structures.
4. **Poor Mobile Responsiveness**: Complex horizontal scroll or pinned sections breaking on smaller screens.
   - *Mitigation*: Build mobile-first layouts and gracefully degrade horizontal scroll sections to responsive vertical stacks on touch devices.
