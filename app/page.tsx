import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import Portfolio from '@/components/sections/Portfolio';
import Testimonials from '@/components/sections/Testimonials';
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
        <Portfolio />
        <Testimonials />
        <Contact />
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
