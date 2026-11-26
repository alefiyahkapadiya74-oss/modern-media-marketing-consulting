import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import EngagementModels from '@/components/sections/EngagementModels';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <EngagementModels />
        <Contact />
      </main>

      {/* Footer with clean, balanced spacing */}
      <footer className="bg-forest-green text-warm-ivory py-10 md:py-12 px-6 md:px-12 border-t border-brass-gold/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-3.5 text-center sm:text-left">
            <div className="w-8 h-8 rounded-lg border border-brass-gold bg-brass-gold/20 flex items-center justify-center text-brass-gold font-serif font-bold text-xs">
              M&M
            </div>
            <div>
              <span className="font-serif text-sm font-semibold text-warm-ivory block">
                Modern Media & Marketing Consulting FZC
              </span>
              <span className="font-sans text-[11px] text-warm-ivory/60">
                Sharjah Publishing City Free Zone • United Arab Emirates
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 font-sans text-xs text-warm-ivory/70">
            <a href="#about" className="hover:text-brass-gold transition-colors">
              About
            </a>
            <a href="#services" className="hover:text-brass-gold transition-colors">
              Services Suite
            </a>
            <a href="#process" className="hover:text-brass-gold transition-colors">
              Our Methodology
            </a>
            <a href="#engagement" className="hover:text-brass-gold transition-colors">
              How We Partner
            </a>
            <a href="#contact" className="hover:text-brass-gold transition-colors">
              Request Consultation
            </a>
          </div>

          <span className="font-sans text-[11px] text-warm-ivory/50">
            © {new Date().getFullYear()} Modern Media & Marketing Consulting FZC. All rights reserved.
          </span>
        </div>
      </footer>
    </>
  );
}
