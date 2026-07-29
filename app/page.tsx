import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import Portfolio from '@/components/sections/Portfolio';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Portfolio />

        {/* Section Anchor Placeholders for Remaining Phases */}
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
