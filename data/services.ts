export interface Service {
  id: string;
  num: string;
  title: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  deliverables: string[];
  benefits: string[];
}

export const services: Service[] = [
  {
    id: 'marketing-consultancy',
    num: '01',
    title: 'Marketing Consultancy',
    tagline: 'Strategic Market Positioning & Growth',
    shortDescription:
      'Comprehensive marketing strategy and competitive positioning tailored for enterprise expansion in the UAE and Gulf region.',
    fullDescription:
      'Our strategic marketing consultancy provides C-suite executives and business founders with high-impact market intelligence, audience segmentation, go-to-market strategies, and cross-channel growth roadmaps.',
    deliverables: [
      'Comprehensive Regional Market Analysis',
      'Competitor Positioning & Benchmarking',
      'Go-To-Market (GTM) Strategy Blueprint',
      'Omnichannel Campaign Roadmaps',
      'Marketing Budget Allocation & ROI Modeling',
    ],
    benefits: [
      'Accelerated UAE Market Penetration',
      'Clarity in Value Proposition & Brand Messaging',
      'Maximized Return on Marketing Investment',
    ],
  },
  {
    id: 'media-buying',
    num: '02',
    title: 'Media Buying & Acquisition',
    tagline: 'Precision Audience Acquisition',
    shortDescription:
      'High-performance programmatic and direct media acquisition campaigns delivering targeted reach across regional channels.',
    fullDescription:
      'We manage multi-channel media budgets with precision algorithms and direct publisher relationships. From digital paid search and programmatic display to premium OOH billboards across Dubai and Sharjah.',
    deliverables: [
      'Programmatic & Direct Publisher Buying',
      'High-Intent Search & Paid Social Campaigns',
      'Premium Outdoor (OOH) & Digital Billboard Placement',
      'Real-Time Attribution & Analytics Dashboards',
      'Ad Creative Optimization & A/B Testing',
    ],
    benefits: [
      'Reduced Cost Per Customer Acquisition (CPA)',
      'High-Impact Visibility Among UAE Decision-Makers',
      'Transparent Campaign Reporting & Attribution',
    ],
  },
  {
    id: 'brand-strategy',
    num: '03',
    title: 'Brand Strategy & Identity',
    tagline: 'Architecting Iconic Brand Equity',
    shortDescription:
      'Editorial brand architecture, luxury visual identity systems, and narrative guidelines that command instant market authority.',
    fullDescription:
      'We craft iconic brand identities for luxury developments, financial firms, and corporate leaders. Our holistic brand architecture encompasses verbal identity, typography systems, visual assets, and brand books.',
    deliverables: [
      'Brand Architecture & Narrative Strategy',
      'Logo & Visual Identity System Design',
      'Typography & Editorial Color Guidelines',
      'Brand Book & Usage Standard Documentation',
      'Collateral & Corporate Stationery Suite',
    ],
    benefits: [
      'Instant Market Distinction & Prestige',
      'Unified Regional Brand Cohesion',
      'Long-Term Enterprise Brand Value',
    ],
  },
  {
    id: 'web-development',
    num: '04',
    title: 'Web Development & Engineering',
    tagline: 'Awwwards-Grade Digital Architecture',
    shortDescription:
      'Bespoke Next.js web applications featuring smooth scroll inertia, interactive GSAP motion, and high-conversion UX.',
    fullDescription:
      'We build high-performance, custom web applications that feel responsive and alive. Engineered with Next.js, TypeScript, Tailwind CSS, and Lenis smooth scroll for seamless desktop and mobile performance.',
    deliverables: [
      'Custom Next.js & React Web Application Engineering',
      'GSAP & Lenis Physics Smooth Animation Systems',
      'Mobile-First Responsive Layout & Performance Optimization',
      'Headless CMS & API Integration',
      'Technical SEO & Accessibility (a11y) Audits',
    ],
    benefits: [
      'Unmatched User Engagement & Session Times',
      'Lightning-Fast Page Speed & Core Web Vitals',
      'Higher Conversion Rates for High-Value Leads',
    ],
  },
  {
    id: 'social-media',
    num: '05',
    title: 'Social Media Consultancy',
    tagline: 'High-Impact Digital Presence',
    shortDescription:
      'Executive social media strategy, editorial content production, and community engagement for luxury brands.',
    fullDescription:
      'We turn corporate social channels into high-converting editorial broadcasts. From LinkedIn leadership thought pieces to Instagram aesthetic motion design, we position your agency or enterprise at the forefront.',
    deliverables: [
      'Social Platform Content Strategy & Content Calendars',
      'High-End Video & Motion Graphics Production',
      'Executive Thought Leadership & LinkedIn Management',
      'Community Management & Strategic Outreach',
      'Monthly Sentiment & Engagement Audits',
    ],
    benefits: [
      'Elevated Executive & Brand Authority',
      'Organic & Paid Audience Growth in the GCC',
      'High-Engagement Social Media Ecosystem',
    ],
  },
  {
    id: 'design-consultancy',
    num: '06',
    title: 'Design Consultancy',
    tagline: 'Editorial Visual Art Direction',
    shortDescription:
      'Art direction, UX/UI consultation, and visual packaging for luxury products, corporate literature, and digital media.',
    fullDescription:
      'Our design consultants work closely with internal teams to elevate digital and print aesthetics. We audit existing collateral, establish modern UI component systems, and oversee complex creative productions.',
    deliverables: [
      'UX/UI Interface & Product Design Consultation',
      'Editorial Print & Corporate Annual Report Art Direction',
      'Digital Design System Creation & Component Libraries',
      'Packaging & Merchandise Aesthetic Design',
      'Creative Team Mentorship & Quality Assurance',
    ],
    benefits: [
      'World-Class Design Standards Across All Touchpoints',
      'Consistent Modern Aesthetic Identity',
      'Reduced In-House Design Bottlenecks',
    ],
  },
  {
    id: 'hr-consultancy',
    num: '07',
    title: 'HR Consulting & Talent Strategy',
    tagline: 'Human Capital & Executive Talent Alignment',
    shortDescription:
      'Strategic HR advisory, executive recruitment, organizational structuring, and UAE labor alignment for corporate teams.',
    fullDescription:
      'Scaling a regional enterprise requires strategic talent alignment. We assist organizations with HR policy structuring, executive talent sourcing, team culture optimization, and UAE regulatory compliance.',
    deliverables: [
      'Organizational Structuring & Role Architecture',
      'Executive Talent Acquisition & Headhunting',
      'HR Policy & Performance Management Frameworks',
      'Employer Branding & Talent Attraction Campaigns',
      'UAE Free Zone & Mainland Labor Compliance Guidance',
    ],
    benefits: [
      'Seamless Organizational Scaling & Alignment',
      'Top-Tier Regional Executive Talent Acquisition',
      'Stronger Employee Retention & Organizational Culture',
    ],
  },
];
