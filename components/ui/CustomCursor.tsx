'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPosition, setTrailingPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on desktop devices with fine pointers
    if (typeof window === 'undefined' || window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.closest('a') ||
          target.closest('button') ||
          target.classList.contains('cursor-pointer') ||
          target.closest('.cursor-pointer'))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  // Smooth trailing effect for the outer ring using animation loop
  useEffect(() => {
    if (!isVisible) return;
    let animationFrameId: number;

    const followMouse = () => {
      setTrailingPosition((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.18,
        y: prev.y + (position.y - prev.y) * 0.18,
      }));
      animationFrameId = requestAnimationFrame(followMouse);
    };

    animationFrameId = requestAnimationFrame(followMouse);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="hidden md:block">
      {/* Inner Precision Dot */}
      <div
        className="fixed w-2.5 h-2.5 rounded-full bg-brass-gold pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 shadow-sm"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />

      {/* Outer Trailing Ring */}
      <div
        className={`fixed rounded-full pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-out border ${
          isHovered
            ? 'w-14 h-14 bg-brass-gold/15 border-brass-gold scale-110 shadow-lg'
            : 'w-9 h-9 border-brass-gold/50 bg-transparent'
        }`}
        style={{ left: `${trailingPosition.x}px`, top: `${trailingPosition.y}px` }}
      />
    </div>
  );
}
