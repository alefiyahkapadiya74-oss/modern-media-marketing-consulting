export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  industry: string;
  avatarInitial: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote:
      'Modern Media & Marketing Consulting FZC transformed our brand narrative and media acquisition strategy. Their team delivered a 100% off-plan sales sellout for our $350M Dubai Marina luxury tower within 6 months.',
    author: 'Tariq Al-Mansoori',
    role: 'Managing Director',
    company: 'Al Habtoor Real Estate Group',
    industry: 'Luxury Real Estate',
    avatarInitial: 'TA',
    rating: 5,
  },
  {
    id: '2',
    quote:
      'The Awwwards-grade Next.js web application engineered by Modern Media elevated our asset management firm to international standards. Qualified investor inquiries surged by 240% in our first quarter.',
    author: 'Marcus Vance',
    role: 'Chief Investment Officer',
    company: 'Apex Capital UAE',
    industry: 'Wealth Management & Fintech',
    avatarInitial: 'MV',
    rating: 5,
  },
  {
    id: '3',
    quote:
      'Their programmatic media buying and editorial art direction established instant market prestige for our 4 Michelin-starred restaurant concepts across the GCC. Exceptional ROI and strategic execution.',
    author: 'Elena Rostova',
    role: 'Founder & CEO',
    company: 'Aura Hospitality Collection',
    industry: 'Gastronomy & Hospitality',
    avatarInitial: 'ER',
    rating: 5,
  },
  {
    id: '4',
    quote:
      'From executive talent consulting to patient acquisition campaigns, Modern Media operates with unmatched strategic precision. They are the single most valued growth partner in our corporate portfolio.',
    author: 'Dr. Sarah Al-Qasimi',
    role: 'Chief Operating Officer',
    company: 'OmniHealth Specialist Clinics',
    industry: 'Healthcare & Wellness',
    avatarInitial: 'SA',
    rating: 5,
  },
];
