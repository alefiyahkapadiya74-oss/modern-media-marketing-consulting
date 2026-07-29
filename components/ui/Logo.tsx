'use client';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'dark' | 'light';
  showText?: boolean;
}

export default function Logo({
  className = '',
  size = 'md',
  variant = 'dark',
  showText = true,
}: LogoProps) {
  // Size dimensions for emblem
  const dimensions = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  }[size];

  const titleSizes = {
    sm: 'text-sm',
    md: 'text-base md:text-lg',
    lg: 'text-xl md:text-2xl',
  }[size];

  const subTitleSizes = {
    sm: 'text-[8px]',
    md: 'text-[9px] md:text-[10px]',
    lg: 'text-[11px]',
  }[size];

  const textColor = variant === 'light' ? 'text-warm-ivory' : 'text-forest-green';

  return (
    <div className={`inline-flex items-center gap-3.5 group cursor-pointer ${className}`}>
      {/* Abstract Geometric Luxury Emblem: Zenith Prism */}
      <div className={`relative shrink-0 ${dimensions} flex items-center justify-center transition-transform duration-300 group-hover:scale-105`}>
        <svg
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
        >
          {/* Outer Octagonal Frame - Brass Gold (#B88A44) */}
          <path
            d="M22 2L42 12V32L22 42L2 32V12L22 2Z"
            stroke="#B88A44"
            strokeWidth="2"
            strokeLinejoin="round"
            className="transition-all duration-300 group-hover:stroke-brass-gold-dark"
          />

          {/* Interlocking Zenith Chevron Facet 1 (Left Wing) */}
          <path
            d="M22 8L10 15V29L22 22V8Z"
            fill="#234038"
            opacity="0.95"
          />

          {/* Interlocking Zenith Chevron Facet 2 (Right Wing) */}
          <path
            d="M22 8L34 15V29L22 22V8Z"
            fill="#B88A44"
            opacity="0.85"
          />

          {/* Bottom Reflective Facet */}
          <path
            d="M22 22L34 29L22 36L10 29L22 22Z"
            fill="#B88A44"
            opacity="0.35"
          />

          {/* Core Apex Golden Diamond */}
          <polygon
            points="22,14 26,19 22,24 18,19"
            fill="#B88A44"
          />
        </svg>
      </div>

      {/* Brand Typography Wordmark */}
      {showText && (
        <div className="flex flex-col text-left">
          <span className={`font-serif font-bold tracking-tight leading-none transition-colors duration-300 ${textColor} group-hover:text-brass-gold ${titleSizes}`}>
            Modern Media & Marketing
          </span>
          <span className="font-sans text-[9px] md:text-[10px] tracking-[0.22em] text-brass-gold uppercase font-semibold mt-1">
            Consulting FZC • Sharjah, UAE
          </span>
        </div>
      )}
    </div>
  );
}
