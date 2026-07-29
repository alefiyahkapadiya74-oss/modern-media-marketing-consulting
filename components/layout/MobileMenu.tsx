'use client';

import { useEffect } from 'react';
import Logo from '@/components/ui/Logo';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { name: 'About Us', href: '#about', num: '01' },
  { name: 'Services Suite', href: '#services', num: '02' },
  { name: 'Our Process', href: '#process', num: '03' },
  { name: 'Portfolio Work', href: '#portfolio', num: '04' },
  { name: 'Client Reviews', href: '#testimonials', num: '05' },
  { name: 'Contact Agency', href: '#contact', num: '06' },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // Prevent body scroll when mobile menu curtain is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-forest-green text-warm-ivory flex flex-col justify-between p-8 md:p-12 animate-in fade-in duration-300">
      {/* Top Header Bar inside Curtain */}
      <div className="flex items-center justify-between border-b border-brass-gold/20 pb-6">
        <a href="#" onClick={onClose}>
          <Logo size="md" variant="light" />
        </a>

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close Menu"
          className="w-11 h-11 rounded-full border border-brass-gold/40 flex items-center justify-center text-brass-gold hover:bg-brass-gold hover:text-white transition-all duration-300 cursor-pointer"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Main Navigation Links */}
      <nav className="flex flex-col gap-6 my-auto">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={onClose}
            className="group flex items-baseline gap-4 text-3xl md:text-5xl font-serif font-medium text-warm-ivory/90 hover:text-brass-gold transition-colors duration-300"
          >
            <span className="font-mono text-xs text-brass-gold tracking-widest uppercase">
              {link.num}
            </span>
            <span className="group-hover:translate-x-2 transition-transform duration-300">
              {link.name}
            </span>
          </a>
        ))}
      </nav>

      {/* Bottom Footer Info inside Curtain */}
      <div className="pt-6 border-t border-brass-gold/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-sans text-xs text-warm-ivory/60">
        <div className="flex flex-col">
          <span className="text-brass-gold font-semibold uppercase tracking-wider">Agency Headquarters</span>
          <span>Sharjah Publishing City Free Zone • UAE</span>
        </div>

        <div className="flex flex-col sm:text-right">
          <a href="mailto:info@modernmedia.ae" className="hover:text-brass-gold transition-colors">
            info@modernmedia.ae
          </a>
          <a href="tel:+97160000000" className="hover:text-brass-gold transition-colors">
            +971 6 000 0000
          </a>
        </div>
      </div>
    </div>
  );
}
