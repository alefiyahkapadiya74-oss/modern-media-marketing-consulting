'use client';

import { ReactNode, useRef, useState, MouseEvent } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  href,
  variant = 'primary',
  className,
  onClick,
}: ButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    if (!buttonRef.current) return;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = (e.clientX - (left + width / 2)) * 0.25;
    const y = (e.clientY - (top + height / 2)) * 0.25;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles =
    'relative inline-flex items-center justify-center font-sans font-semibold tracking-wide text-xs uppercase rounded-full px-8 py-4 transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer overflow-hidden group';

  const variants = {
    primary:
      'bg-forest-green text-warm-ivory border border-forest-green hover:bg-brass-gold hover:border-brass-gold hover:text-white',
    secondary:
      'bg-brass-gold text-white border border-brass-gold hover:bg-forest-green hover:border-forest-green',
    outline:
      'bg-transparent text-brass-gold border border-brass-gold hover:bg-brass-gold hover:text-white',
  };

  const content = (
    <span
      className="relative z-10 flex items-center gap-2 transition-transform duration-200"
      style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
    >
      {children}
    </span>
  );

  if (href) {
    return (
      <a
        ref={buttonRef as any}
        href={href}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={cn(baseStyles, variants[variant], className)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={buttonRef as any}
      type="button"
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(baseStyles, variants[variant], className)}
    >
      {content}
    </button>
  );
}
