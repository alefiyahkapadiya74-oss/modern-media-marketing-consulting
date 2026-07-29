export interface Project {
  id: string;
  title: string;
  client: string;
  category: 'Brand Strategy' | 'Web Development' | 'Media Buying';
  industry: string;
  year: string;
  tagline: string;
  challenge: string;
  strategy: string;
  metrics: { label: string; value: string }[];
  gradientBg: string;
}

export const projects: Project[] = [
  {
    id: 'marina-heights',
    title: 'Marina Heights Luxury Residences',
    client: 'Al Habtoor Real Estate Group',
    category: 'Brand Strategy',
    industry: 'Real Estate & Hospitality',
    year: '2025',
    tagline: 'Ultra-Luxury Waterfront Living Brand Identity',
    challenge:
      'Launch an iconic $350M waterfront residential tower in Dubai Marina amidst intense regional market competition for high-net-worth investors.',
    strategy:
      'We developed an editorial brand architecture, bespoke coffee table brand book, cinematic teaser film, and targeted media buying strategy across international private wealth publications.',
    metrics: [
      { label: 'Off-Plan Sales Target', value: '100% Sold Out' },
      { label: 'Qualified Investor Leads', value: '4,200+' },
      { label: 'Sales Pipeline Generated', value: '$350M+' },
    ],
    gradientBg: 'from-forest-green via-forest-green-dark to-charcoal',
  },
  {
    id: 'apex-capital',
    title: 'Apex Capital Investment Group',
    client: 'Apex Financial Services UAE',
    category: 'Web Development',
    industry: 'Corporate & Wealth Management',
    year: '2025',
    tagline: 'Awwwards-Grade Web Application for Sovereign Wealth Advisory',
    challenge:
      'Transform a traditional corporate banking website into an interactive, high-trust digital platform matching the caliber of tier-1 global investment funds.',
    strategy:
      'Engineered a Next.js 14 App Router platform with Lenis smooth scroll inertia, interactive portfolio calculators, and strict GCC security compliance.',
    metrics: [
      { label: 'Average Session Duration', value: '+180%' },
      { label: 'Institutional Inquiries', value: '+240%' },
      { label: 'Page Speed Score', value: '99/100' },
    ],
    gradientBg: 'from-brass-gold/90 via-brass-gold-dark to-forest-green',
  },
  {
    id: 'aura-hospitality',
    title: 'Aura Fine Dining Collection',
    client: 'Aura Luxury Group GCC',
    category: 'Media Buying',
    industry: 'Hospitality & Gastronomy',
    year: '2024',
    tagline: 'High-Intent Programmatic Acquisition Campaign',
    challenge:
      'Establish brand awareness and drive recurring VIP reservations for 4 Michelin-starred restaurant concepts across Dubai and Abu Dhabi.',
    strategy:
      'Executed high-precision geo-targeted media buying across premium lifestyle publications, programmatic digital OOH billboards, and paid VIP social acquisition channels.',
    metrics: [
      { label: 'Table Reservations', value: '+310%' },
      { label: 'Customer Acquisition Cost (CAC)', value: '-42%' },
      { label: 'Campaign Impressions', value: '18M+' },
    ],
    gradientBg: 'from-charcoal via-forest-green-dark to-brass-gold/80',
  },
  {
    id: 'solaris-retail',
    title: 'Solaris E-Commerce Ecosystem',
    client: 'Solaris Luxury Retail',
    category: 'Web Development',
    industry: 'Luxury E-Commerce & Retail',
    year: '2025',
    tagline: 'Bespoke Headless E-Commerce Platform',
    challenge:
      'Re-architect an outdated e-commerce storefront into a high-speed, multi-currency luxury shopping experience serving customers across the GCC.',
    strategy:
      'Built a headless web platform with Next.js, micro-animations, multi-currency support, and instant checkout flows.',
    metrics: [
      { label: 'Online Conversion Rate', value: '+195%' },
      { label: 'Average Order Value (AOV)', value: '+45%' },
      { label: 'Mobile Checkout Speed', value: '1.2s' },
    ],
    gradientBg: 'from-forest-green-dark via-brass-gold/70 to-charcoal',
  },
  {
    id: 'nexus-enterprise',
    title: 'Nexus Enterprise B2B Systems',
    client: 'Nexus Global UAE',
    category: 'Brand Strategy',
    industry: 'Enterprise Software & Cloud',
    year: '2024',
    tagline: 'Regional Market Rebranding & Positioning',
    challenge:
      'Position a fast-growing B2B cloud software firm as the premier enterprise digital transformation provider in the GCC region.',
    strategy:
      'Created a bold, modern visual identity, executive messaging guidelines, and launched an integrated corporate B2B campaign.',
    metrics: [
      { label: 'Enterprise Contracts Won', value: '28 New' },
      { label: 'Brand Awareness Index', value: '+320%' },
      { label: 'Sales Pipeline Growth', value: '$18M' },
    ],
    gradientBg: 'from-brass-gold via-forest-green to-charcoal',
  },
  {
    id: 'omni-health',
    title: 'OmniHealth Medical Centers',
    client: 'OmniHealth UAE',
    category: 'Media Buying',
    industry: 'Healthcare & Wellness',
    year: '2025',
    tagline: 'Multi-Location Patient Acquisition Campaign',
    challenge:
      'Drive high-value patient appointments for specialist clinics across Sharjah and Dubai while maintaining strict medical marketing compliance.',
    strategy:
      'Deployed geo-targeted search campaigns, patient testimonial content, and localized mobile ad buying.',
    metrics: [
      { label: 'New Patient Bookings', value: '+260%' },
      { label: 'Search Impression Share', value: '94%' },
      { label: 'Return on Ad Spend (ROAS)', value: '6.4x' },
    ],
    gradientBg: 'from-forest-green via-charcoal to-brass-gold/90',
  },
];
