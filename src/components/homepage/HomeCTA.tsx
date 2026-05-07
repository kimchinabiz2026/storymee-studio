'use client';

import Link from 'next/link';
import type { Dictionary } from '@/lib/types';
import RevealOnScroll from '@/components/cinematic/RevealOnScroll';

interface Props {
  lang: string;
  dict: Dictionary;
}

export default function HomeCTA({ lang, dict }: Props) {
  return (
    <section
      id="home-cta"
      style={{
        padding: 'clamp(80px, 12vw, 160px) clamp(20px, 4vw, 60px)',
        textAlign: 'center',
        position: 'relative',
      }}
    >
      {/* Subtle gradient background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at 50% 80%, rgba(255,69,0,0.05) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />

      <RevealOnScroll>
        <h2 className="text-display-xl" style={{
          marginBottom: '8px',
          position: 'relative',
          zIndex: 1,
        }}>
          {dict.cta.headline}
        </h2>
        <h2 className="text-display-xl" style={{
          fontStyle: 'italic',
          marginBottom: '48px',
          position: 'relative',
          zIndex: 1,
        }}>
          {dict.cta.headline2}
        </h2>
      </RevealOnScroll>

      <RevealOnScroll delay={200}>
        <div style={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          position: 'relative',
          zIndex: 1,
        }}>
          <Link href={`/${lang}/contact`} className="btn-primary">
            {dict.cta.primary}
          </Link>
          <Link href={`/${lang}/ips`} className="btn-secondary">
            {dict.cta.secondary}
          </Link>
        </div>
      </RevealOnScroll>
    </section>
  );
}
