export interface Service {
  id: string;
  num: string;
  title: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  whoItsFor: string;
  timeline: string;
  deliverables: string[];
  executionSteps: { step: string; detail: string }[];
  toolsAndFrameworks: string[];
  benefits: string[];
}

export const services: Service[] = [
  {
    id: 'marketing-consultancy',
    num: '01',
    title: 'Marketing Consultancy',
    tagline: 'Strategic Market Positioning & Growth Roadmaps',
    shortDescription:
      'End-to-end strategic marketing roadmaps, competitor intelligence, and go-to-market architecture tailored for business growth in the UAE and Gulf region.',
    fullDescription:
      'We partner with ambitious business founders, executives, and marketing leaders to design comprehensive marketing architectures. Instead of ad-hoc marketing tactics, we diagnose your unique market position, analyze target customer behavior across the UAE, and construct actionable growth roadmaps that align your budget directly with business revenue.',
    whoItsFor:
      'New business entrants into the UAE market, established companies repositioning their brand, and high-growth enterprises seeking disciplined, scalable customer acquisition.',
    timeline: '3 to 6 Weeks Strategy Sprint (or Monthly Strategic Retainer)',
    deliverables: [
      'Comprehensive UAE & Regional Competitor Benchmarking',
      'High-Value Target Customer Personas & ICP Profiling',
      'Complete Go-To-Market (GTM) Strategy Blueprint',
      'Omnichannel Marketing Channel Strategy & Budget Allocation',
      'KPI Framework & Marketing ROI Attribution Modeling',
      'Quarterly Campaign Calendars & Execution Playbook',
    ],
    executionSteps: [
      {
        step: 'Discovery & Commercial Audit',
        detail:
          'Deep dive into your business model, current customer touchpoints, past performance, and specific growth targets.',
      },
      {
        step: 'Market & Competitor Intelligence',
        detail:
          'Rigorous research on local UAE competitors, pricing positioning, and untapped audience niches across Sharjah, Dubai, and Abu Dhabi.',
      },
      {
        step: 'Strategy & Roadmap Formulation',
        detail:
          'Designing the full marketing architecture, messaging pillars, channel prioritization, and exact resource allocation.',
      },
      {
        step: 'Playbook Handover & Implementation Alignment',
        detail:
          'Presenting the actionable execution roadmap to your leadership team with clear milestone tracking and operational guidance.',
      },
    ],
    toolsAndFrameworks: [
      'GTM Strategy Matrix',
      'Audience Segmentation Frameworks',
      'Attribution & CAC Modeling',
      'Competitor Intelligence Audits',
    ],
    benefits: [
      'Eliminate wasted marketing spend through focused, high-yield channel prioritization.',
      'Crystal-clear brand differentiation within the competitive UAE marketplace.',
      'Measurable KPIs and structured revenue tracking for every marketing dirham invested.',
    ],
  },
  {
    id: 'media-buying',
    num: '02',
    title: 'Media Buying & Acquisition',
    tagline: 'Precision Audience Acquisition & Campaign Management',
    shortDescription:
      'Performance-focused digital media planning, programmatic buying, search marketing, and premium outdoor advertising across key UAE markets.',
    fullDescription:
      'We plan, manage, and optimize data-backed advertising campaigns that connect your brand with high-intent decision-makers and consumers. From targeted search and social campaigns to programmatic display and premium outdoor placements, we focus relentlessly on lowering customer acquisition costs (CAC) and maximizing conversion yield.',
    whoItsFor:
      'Companies launching new products or services, B2B firms targeting UAE corporate decision-makers, and luxury consumer brands seeking high-quality lead generation.',
    timeline: 'Campaign-based setup (2–3 weeks) or Ongoing Monthly Management',
    deliverables: [
      'Cross-Channel Media Planning & Budget Distribution',
      'Paid Search Campaigns (Google Ads, Bing) with High-Intent Keyword Targeting',
      'Paid Social Advertising (LinkedIn, Meta, TikTok, YouTube)',
      'Programmatic Display & Premium Local Publisher Placements',
      'Ad Creative Copywriting, Angles & Visual Asset Guidelines',
      'Live Analytics Dashboard & Bi-Weekly Performance Reporting',
    ],
    executionSteps: [
      {
        step: 'Audience & Channel Mapping',
        detail:
          'Identifying exactly where your ideal customers spend attention and determining the optimal media mix across digital and offline channels.',
      },
      {
        step: 'Campaign Setup & Pixel Tracking Architecture',
        detail:
          'Implementing full server-side conversion tracking, Google Tag Manager events, and audience retargeting pools for 100% data integrity.',
      },
      {
        step: 'A/B Creative & Angle Testing',
        detail:
          'Deploying multiple creative formats, headlines, and call-to-actions to discover the highest-converting campaign assets.',
      },
      {
        step: 'Algorithmic Optimization & Scaling',
        detail:
          'Continuously reallocating budget toward winning ad sets and keywords while systematically reducing acquisition costs.',
      },
    ],
    toolsAndFrameworks: [
      'Google Marketing Platform & Search Ads 360',
      'Meta Business Suite & Ads Manager',
      'LinkedIn Campaign Manager',
      'Google Tag Manager & GA4 Server-Side Tracking',
    ],
    benefits: [
      'Direct access to vetted, high-intent prospects across the UAE and GCC.',
      'Transparent reporting with zero hidden agency markups or vanity metrics.',
      'Continuous budget efficiency through proactive algorithmic and manual bid management.',
    ],
  },
  {
    id: 'brand-strategy',
    num: '03',
    title: 'Brand Strategy & Identity',
    tagline: 'Architecting Distinctive Brand Equity & Visual Authority',
    shortDescription:
      'Editorial brand architecture, luxury visual identity systems, bespoke logos, tone of voice, and comprehensive corporate brand manuals.',
    fullDescription:
      'A great brand commands premium pricing and immediate trust. We craft distinctive brand architectures that communicate sophistication, authority, and emotional connection. From defining your core brand narrative and verbal tone to designing iconic visual identities, typography guidelines, and complete corporate stationery.',
    whoItsFor:
      'New companies building their brand from the ground up, established firms seeking a modern rebrand, and luxury ventures demanding refined visual prestige.',
    timeline: '4 to 8 Weeks Comprehensive Brand Sprint',
    deliverables: [
      'Brand Narrative, Mission, Vision & Core Values Matrix',
      'Brand Tone of Voice & Verbal Messaging Architecture',
      'Bespoke Logo Suite (Primary Mark, Secondary Marks, Monograms)',
      'Custom Color Palette & Google / Web Typography System',
      'Comprehensive Corporate Brand Manual & Usage Guidelines',
      'Stationery & Collateral Suite (Business Cards, Letterheads, Decks, Social Templates)',
    ],
    executionSteps: [
      {
        step: 'Brand DNA Immersion',
        detail:
          'Extracting your company ethos, target audience desires, and market landscape to establish a solid conceptual foundation.',
      },
      {
        step: 'Verbal Identity & Positioning',
        detail:
          'Crafting your brand story, core manifesto, elevator pitch, and editorial messaging framework.',
      },
      {
        step: 'Visual System Design',
        detail:
          'Developing logo marks, typography pairings, color harmonies, iconography, and art direction guidelines.',
      },
      {
        step: 'Brand Guidelines & Asset Delivery',
        detail:
          'Packaging all vector assets, typography files, presentation templates, and a multi-page brand manual ready for seamless team execution.',
      },
    ],
    toolsAndFrameworks: [
      'Figma & Adobe Creative Cloud',
      'Editorial Typography Systems',
      'Color Psychology & Contrast Testing',
      'Vector Brand Asset Management',
    ],
    benefits: [
      'Immediate credibility and authority when presenting to clients and investors.',
      'Consistency across every single marketing, web, print, and physical touchpoint.',
      'A timeless brand asset that compounds enterprise equity over the long term.',
    ],
  },
  {
    id: 'web-development',
    num: '04',
    title: 'Web Development & Engineering',
    tagline: 'Bespoke Next.js Digital Platforms & High-Speed Architecture',
    shortDescription:
      'High-performance, editorial websites engineered with Next.js, React, TypeScript, smooth scroll physics, and conversion-optimized architecture.',
    fullDescription:
      'Your website is the single most critical digital asset of your enterprise. We engineer custom, bespoke digital experiences that captivate visitors, load in milliseconds, and convert high-value leads. We reject generic, bloated WordPress templates in favor of modern Next.js and React architecture, high-end motion design, and strict technical SEO.',
    whoItsFor:
      'Modern businesses seeking an Awwwards-grade digital presence, corporate firms wanting fast, secure platforms, and agencies requiring custom web applications.',
    timeline: '3 to 6 Weeks from Architecture to Deployment',
    deliverables: [
      'Custom Next.js (App Router) & React Architecture',
      'TypeScript Type-Safe Engineering & Tailwind CSS Styling',
      'Lenis Smooth Scroll Physics & Fluid Micro-Interactions',
      'Mobile-First Responsive Layouts Tested Across All Viewports',
      'Interactive Contact & Lead Intake Workflows',
      'Technical SEO, Core Web Vitals (95+ score) & Accessibility Optimization',
      'Production Deployment Setup on Vercel or Custom Cloud Infrastructure',
    ],
    executionSteps: [
      {
        step: 'Information Architecture & UX Wireframing',
        detail:
          'Structuring intuitive user journeys, high-conversion section hierarchies, and content blueprints before writing code.',
      },
      {
        step: 'Editorial UI Design & Prototyping',
        detail:
          'Crafting high-fidelity visual mockups using luxury typography, refined color balances, and responsive layouts.',
      },
      {
        step: 'Next.js & Frontend Engineering',
        detail:
          'Developing the platform with clean, maintainable TypeScript code, responsive Tailwind classes, and buttery-smooth animation timelines.',
      },
      {
        step: 'Cross-Device Testing & Cloud Launch',
        detail:
          'Conducting strict cross-browser QA, mobile touch optimization, speed auditing, and seamless production launch.',
      },
    ],
    toolsAndFrameworks: [
      'Next.js 15+ App Router & React 19',
      'TypeScript & Tailwind CSS',
      'Lenis Smooth Scroll & GSAP Motion',
      'Vercel Edge Deployment & Cloudflare DNS',
    ],
    benefits: [
      'Instant competitive distinction with a high-end, custom-crafted digital flagship.',
      'Blazing-fast load speeds that improve Google rankings and prevent visitor bounce.',
      'Clean, maintainable codebase that easily scales as your business expands.',
    ],
  },
  {
    id: 'social-media',
    num: '05',
    title: 'Social Media Consultancy',
    tagline: 'Executive Presence, Thought Leadership & Organic Reach',
    shortDescription:
      'Content strategy, visual editorial direction, executive LinkedIn management, and engagement frameworks for brands in the GCC.',
    fullDescription:
      'We turn corporate social media profiles from passive announcement boards into compelling business engines. We help founders, executives, and brands publish high-value thought leadership on LinkedIn, build stunning visual narratives on Instagram, and engage UAE industry communities with authentic authority.',
    whoItsFor:
      'Founders and CEOs building executive personal brands, corporate companies needing consistent B2B authority, and lifestyle brands requiring editorial aesthetics.',
    timeline: 'Monthly Strategic Retainer with Ongoing Content Direction',
    deliverables: [
      'Channel Audit & Strategic Content Pillar Architecture',
      'Executive LinkedIn Ghostwriting & Thought Leadership Strategy',
      'Monthly Content Calendars with Visual & Copy Direction',
      'Custom Branded Social Media Carousel & Graphic Templates',
      'Hashtag, Distribution & Community Engagement Guidelines',
      'Monthly Analytics, Growth & Reach Reporting',
    ],
    executionSteps: [
      {
        step: 'Channel Audit & Voice Calibration',
        detail:
          'Reviewing your current social presence, defining tone of voice, and aligning content pillars with corporate business goals.',
      },
      {
        step: 'Content System Creation',
        detail:
          'Designing tailored graphic templates, carousel layouts, and editorial formats that stand out on mobile feeds.',
      },
      {
        step: 'Editorial Scheduling & Publishing Support',
        detail:
          'Organizing weekly and monthly content drops focused on business insights, company milestones, and industry commentary.',
      },
      {
        step: 'Engagement Monitoring & Strategy Refinement',
        detail:
          'Analyzing audience reach, inbound inquiries, and engagement rates to continually elevate content performance.',
      },
    ],
    toolsAndFrameworks: [
      'LinkedIn Thought Leadership Frameworks',
      'Content Scheduling & Analytics Suites',
      'Figma Social Component Libraries',
      'Video Scripting & Storyboarding',
    ],
    benefits: [
      'Establish undeniable industry authority in front of regional clients and partners.',
      'Attract inbound business inquiries and talent directly through organic social channels.',
      'Consistent, cohesive brand presence without consuming valuable executive time.',
    ],
  },
  {
    id: 'design-consultancy',
    num: '06',
    title: 'Design Consultancy',
    tagline: 'Art Direction, UI/UX Advisory & Creative Assurance',
    shortDescription:
      'Strategic creative advisory, user experience audits, corporate collateral design, and design system engineering for growing enterprises.',
    fullDescription:
      'Exceptional design is a powerful business differentiator. Our design consultancy offers expert art direction and creative review for companies producing digital interfaces, marketing collateral, investor pitch decks, and corporate literature. We ensure that every piece of visual material leaving your organization reflects absolute excellence.',
    whoItsFor:
      'Enterprises with in-house teams needing senior creative oversight, startups preparing for investor fundraising, and companies redesigning complex digital products.',
    timeline: 'Project-based design sprints or Ongoing Creative Advisory',
    deliverables: [
      'Comprehensive UI/UX Product & Website Audits',
      'Investor Pitch Decks & Executive Presentation Design',
      'Corporate Reports, Whitepapers & Brochure Art Direction',
      'Design System Creation & Component Guidelines',
      'Creative Quality Assurance & Creative Team Mentorship',
    ],
    executionSteps: [
      {
        step: 'Creative Review & Aesthetic Diagnostic',
        detail:
          'Auditing your existing visual touchpoints to identify inconsistencies, usability friction, and visual hierarchy gaps.',
      },
      {
        step: 'Design Concept & System Development',
        detail:
          'Establishing clean grid structures, typography hierarchy, and UI patterns tailored for clarity and visual elegance.',
      },
      {
        step: 'Collateral Refinement & High-Fidelity Output',
        detail:
          'Redesigning key corporate assets (decks, one-pagers, proposals) into high-impact, persuasive visual documents.',
      },
      {
        step: 'Design Guidelines & Handover',
        detail:
          'Equipping your team with editable source files, clear usage rules, and design component standards.',
      },
    ],
    toolsAndFrameworks: [
      'Figma & Adobe Creative Suite',
      'Design System Token Architectures',
      'Interactive Clickable Prototypes',
      'High-Resolution Print Production Standards',
    ],
    benefits: [
      'Elevate investor decks and proposals to dramatically improve win rates.',
      'Unified, polished design standards across all corporate literature.',
      'Senior creative leadership on-demand without the cost of a full-time executive creative director.',
    ],
  },
  {
    id: 'hr-consultancy',
    num: '07',
    title: 'HR Consulting & Talent Strategy',
    tagline: 'Organizational Architecture & UAE Talent Sourcing',
    shortDescription:
      'Strategic HR framework advisory, team structuring, executive talent sourcing, and UAE labor alignment for newly forming and expanding companies.',
    fullDescription:
      'Building and scaling an organization in the UAE requires structured human capital strategy. We advise newly formed and scaling businesses on organizational role design, job profiling, executive talent sourcing, performance management systems, and alignment with UAE Free Zone and Mainland labor regulations.',
    whoItsFor:
      'Newly formed companies hiring their initial core team, expanding businesses restructuring roles, and international firms setting up UAE operations.',
    timeline: 'Per-Role Sourcing Sprint or Monthly HR Strategic Retainer',
    deliverables: [
      'Organizational Charting & Department Role Architecture',
      'Detailed Job Descriptions & Competency Frameworks',
      'Executive Search & Key Talent Sourcing Strategy',
      'Candidate Screening, Interview Frameworks & Assessment Rubrics',
      'Employee Onboarding & Performance Management Templates',
      'Sharjah Free Zone & UAE Labor Standard Compliance Guidance',
    ],
    executionSteps: [
      {
        step: 'Organizational Needs Analysis',
        detail:
          'Assessing your company’s immediate and long-term hiring priorities, skill requirements, and team structure.',
      },
      {
        step: 'Role Design & Sourcing Strategy',
        detail:
          'Drafting comprehensive job specs, salary benchmarks for the UAE market, and multi-channel talent acquisition plans.',
      },
      {
        step: 'Candidate Screening & Structured Vetting',
        detail:
          'Conducting rigorous preliminary evaluations, portfolio/experience verification, and cultural alignment checks.',
      },
      {
        step: 'Offer Formulation & Onboarding Setup',
        detail:
          'Assisting with offer structuring, onboarding checklists, and establishing clear probation performance milestones.',
      },
    ],
    toolsAndFrameworks: [
      'UAE Labor Law Regulatory Guidelines',
      'Competency-Based Interview Matrices',
      'Salary & Compensation Benchmarking Data',
      'Employee Performance KPI Templates',
    ],
    benefits: [
      'Build a high-performing team quickly without costly hiring mistakes.',
      'Ensure full alignment with UAE employment standards and free zone practices.',
      'Structured onboarding and role clarity that maximizes new hire productivity from day one.',
    ],
  },
];
