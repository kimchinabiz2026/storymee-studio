'use client';

import { useEffect, useState, useRef, useCallback } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafId = useRef<number>(0);

  const updateCursor = useCallback(() => {
    if (dotRef.current) {
      dotRef.current.style.transform = `translate(${mousePos.current.x - 4}px, ${mousePos.current.y - 4}px)`;
    }
    // Smooth follow for ring
    ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.15;
    ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.15;
    if (ringRef.current) {
      const size = isExpanded ? 80 : 32;
      ringRef.current.style.transform = `translate(${ringPos.current.x - size / 2}px, ${ringPos.current.y - size / 2}px)`;
    }
    rafId.current = requestAnimationFrame(updateCursor);
  }, [isExpanded]);

  useEffect(() => {
    // Only on desktop with fine pointer
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!mq.matches) return;

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseEnterVideo = () => setIsExpanded(true);
    const handleMouseLeaveVideo = () => setIsExpanded(false);

    document.addEventListener('mousemove', handleMouseMove);
    rafId.current = requestAnimationFrame(updateCursor);

    // Watch for video tiles
    const observer = new MutationObserver(() => {
      document.querySelectorAll('[data-cursor-video]').forEach((el) => {
        el.addEventListener('mouseenter', handleMouseEnterVideo);
        el.addEventListener('mouseleave', handleMouseLeaveVideo);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    // Initial binding
    document.querySelectorAll('[data-cursor-video]').forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnterVideo);
      el.addEventListener('mouseleave', handleMouseLeaveVideo);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId.current);
      observer.disconnect();
    };
  }, [updateCursor]);

  if (!isVisible) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className={`cursor-ring ${isExpanded ? 'expanded' : ''}`}>
        <span className="cursor-text">WATCH</span>
      </div>
      <style jsx global>{`
        @media (hover: hover) and (pointer: fine) {
          * { cursor: none !important; }
        }
      `}</style>
    </>
  );
}
