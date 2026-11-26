'use client';

import { useState, useEffect } from 'react';
import Logo from '@/components/ui/Logo';
import MobileMenu from '@/components/layout/MobileMenu';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Methodology', href: '#process' },
  { name: 'How We Partner', href: '#engagement' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out ${
          isScrolled
            ? 'bg-warm-ivory/90 backdrop-blur-md border-b border-brass-gold/20 shadow-sm py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo Component */}
          <a href="#">
            <Logo size="md" variant="dark" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 font-sans text-sm font-medium text-charcoal/80">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative hover:text-brass-gold transition-colors duration-300 py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-brass-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Header Action CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-brass-gold text-brass-gold hover:bg-brass-gold hover:text-white font-sans text-xs tracking-wider uppercase font-semibold transition-all duration-300 shadow-sm cursor-pointer"
            >
              Request Consultation
            </a>

            {/* Mobile Hamburger Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-lg text-forest-green hover:bg-brass-gold/10 transition-colors cursor-pointer"
              aria-label="Open Mobile Menu"
            >
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Slide-out Mobile Navigation Curtain */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
