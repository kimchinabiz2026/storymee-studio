'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import type { Dictionary } from '@/lib/types';
import RevealOnScroll from '@/components/cinematic/RevealOnScroll';

interface Props {
  lang: string;
  dict: Dictionary;
}

export default function ThreeDoors({ lang, dict }: Props) {
  const doors = [
    { ...dict.three_doors.brand, href: `/${lang}/work`, icon: '◆' },
    { ...dict.three_doors.partners, href: `/${lang}/ips#partnership`, icon: '◈' },
    { ...dict.three_doors.fans, href: `/${lang}/ips`, icon: '●' },
  ];

  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      id="three-doors"
      ref={sectionRef}
      style={{
        position: 'relative',
        padding: 'clamp(80px, 10vw, 120px) clamp(20px, 4vw, 60px)',
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden',
        // Make background transparent to show the fixed video
        background: 'transparent',
      }}
    >
      {/* Left Door */}
      <motion.div
        initial={{ x: '0%' }}
        animate={{ x: isInView ? '-100%' : '0%' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        style={{
          position: 'absolute',
          top: 0, bottom: 0, left: 0, width: '50%',
          background: '#050505',
          zIndex: 10,
          borderRight: '2px solid rgba(255,255,255,0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          paddingRight: '20px',
        }}
      >
        <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '24px', letterSpacing: '4px' }}>STORY</span>
      </motion.div>

      {/* Right Door */}
      <motion.div
        initial={{ x: '0%' }}
        animate={{ x: isInView ? '100%' : '0%' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        style={{
          position: 'absolute',
          top: 0, bottom: 0, right: 0, width: '50%',
          background: '#050505',
          zIndex: 10,
          borderLeft: '2px solid rgba(255,255,255,0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          paddingLeft: '20px',
        }}
      >
        <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '24px', letterSpacing: '4px' }}>MEE</span>
      </motion.div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
        <RevealOnScroll delay={300}>
          <div style={{ marginBottom: '60px' }}>
            <span className="text-label" style={{ color: 'var(--text-tertiary)', display: 'block', marginBottom: '16px' }}>
              {dict.three_doors.label}
            </span>
            <h2 className="text-display-l" style={{ fontStyle: 'italic', color: '#fff' }}>
              {dict.three_doors.title}
            </h2>
          </div>
        </RevealOnScroll>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1px',
          background: 'rgba(255,255,255,0.1)', // Subtler border between cards
        }}>
          {doors.map((door, i) => (
            <RevealOnScroll key={i} delay={400 + i * 100}>
              <Link
                href={door.href}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: 'clamp(28px, 3vw, 48px)',
                  background: 'rgba(10, 10, 11, 0.85)', // Semi-transparent black card
                  backdropFilter: 'blur(10px)',
                  transition: 'background 0.4s ease, transform 0.3s ease',
                  minHeight: '220px',
                  justifyContent: 'space-between',
                }}
                onMouseEnter={(e) => { 
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'; 
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => { 
                  e.currentTarget.style.background = 'rgba(10, 10, 11, 0.85)'; 
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div>
                  <span className="text-micro" style={{ color: '#E91E63', display: 'block', marginBottom: '20px' }}>
                    {door.label}
                  </span>
                  <h3 className="text-headline" style={{ marginBottom: '12px', color: '#fff' }}>
                    {door.title}
                  </h3>
                  <p className="text-caption" style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
                    {door.desc}
                  </p>
                </div>
                <span className="text-label" style={{ color: '#E91E63', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {door.cta} <span style={{ fontSize: '16px', transition: 'transform 0.3s ease' }}>→</span>
                </span>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
