import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        {/* Section Anchor Placeholders for Navigation & Smooth Scroll Validation */}
        <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-brass-gold/20">
          <span className="text-xs uppercase tracking-widest text-brass-gold font-mono block mb-2">01 / Story</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-forest-green mb-4">
            About Modern Media & Marketing
          </h2>
          <p className="font-sans text-charcoal/70 max-w-2xl font-light leading-relaxed">
            Headquartered in Sharjah Publishing City Free Zone, we partner with industry leaders to design and deploy bespoke creative and strategic solutions.
          </p>
        </section>

        <section id="services" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-brass-gold/20">
          <span className="text-xs uppercase tracking-widest text-brass-gold font-mono block mb-2">02 / Offerings</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-forest-green mb-4">
            Our Service Suite
          </h2>
          <p className="font-sans text-charcoal/70 max-w-2xl font-light leading-relaxed">
            From strategic marketing consultancy to executive HR consulting, discover our end-to-end agency capabilities.
          </p>
        </section>

        <section id="process" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-brass-gold/20">
          <span className="text-xs uppercase tracking-widest text-brass-gold font-mono block mb-2">03 / Methodology</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-forest-green mb-4">
            Our 6-Step Process
          </h2>
          <p className="font-sans text-charcoal/70 max-w-2xl font-light leading-relaxed">
            Discovery, Research, Strategy, Execution, Optimization, and Scalable Growth.
          </p>
        </section>

        <section id="portfolio" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-brass-gold/20">
          <span className="text-xs uppercase tracking-widest text-brass-gold font-mono block mb-2">04 / Work</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-forest-green mb-4">
            Portfolio & Case Studies
          </h2>
          <p className="font-sans text-charcoal/70 max-w-2xl font-light leading-relaxed">
            Showcasing luxury digital implementations for premier regional and international clients.
          </p>
        </section>

        <section id="testimonials" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-brass-gold/20">
          <span className="text-xs uppercase tracking-widest text-brass-gold font-mono block mb-2">05 / Endorsements</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-forest-green mb-4">
            Client Testimonials
          </h2>
          <p className="font-sans text-charcoal/70 max-w-2xl font-light leading-relaxed">
            Feedback and trust from leading brands across corporate, real estate, and enterprise sectors.
          </p>
        </section>

        <section id="contact" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-brass-gold/20">
          <span className="text-xs uppercase tracking-widest text-brass-gold font-mono block mb-2">06 / Connect</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-forest-green mb-4">
            Start Your Consultation
          </h2>
          <p className="font-sans text-charcoal/70 max-w-2xl font-light leading-relaxed mb-8">
            Sharjah Publishing City Free Zone, Sharjah, United Arab Emirates.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-forest-green text-warm-ivory py-12 px-6 md:px-12 border-t border-brass-gold/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg border border-brass-gold bg-brass-gold/20 flex items-center justify-center text-brass-gold font-serif font-bold text-sm">
              M&M
            </div>
            <span className="font-serif font-semibold text-warm-ivory">
              Modern Media & Marketing Consulting FZC
            </span>
          </div>

          <span className="font-sans text-xs text-warm-ivory/60">
            © {new Date().getFullYear()} Modern Media & Marketing Consulting FZC. All rights reserved.
          </span>
        </div>
      </footer>
    </>
  );
}
