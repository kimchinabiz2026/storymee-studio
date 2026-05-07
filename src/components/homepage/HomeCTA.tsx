'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import type { Dictionary } from '@/lib/types';

interface Props {
  lang: string;
  dict: Dictionary;
}

export default function HomeCTA({ lang, dict }: Props) {
  const ctaRef = useRef(null);
  const isInView = useInView(ctaRef, { once: true, amount: 0.5 });

  return (
    <section
      id="home-cta"
      ref={ctaRef}
      style={{
        padding: 'clamp(80px, 12vw, 160px) clamp(20px, 4vw, 60px)',
        textAlign: 'center',
        position: 'relative',
        background: 'transparent',
      }}
    >
      {/* Subtle gradient background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at 50% 80%, rgba(255,69,0,0.15) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="text-display-xl" style={{
          fontFamily: 'var(--font-body)',
          textTransform: 'none',
          marginBottom: '8px',
          position: 'relative',
          zIndex: 1,
          color: '#fff',
          textShadow: '0 4px 20px rgba(0,0,0,0.5)',
        }}>
          {dict.cta.headline}
        </h2>
        <h2 className="text-display-xl" style={{
          fontFamily: 'var(--font-body)',
          textTransform: 'none',
          fontStyle: 'italic',
          marginBottom: '48px',
          position: 'relative',
          zIndex: 1,
          color: '#fff',
          textShadow: '0 4px 20px rgba(0,0,0,0.5)',
        }}>
          {dict.cta.headline2}
        </h2>

        <div style={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          position: 'relative',
          zIndex: 1,
        }}>
          <Link href={`/${lang}/contact`} className="btn-primary" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
            {dict.cta.primary}
          </Link>
          <Link href={`/${lang}/ips`} className="btn-secondary" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
            {dict.cta.secondary}
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
