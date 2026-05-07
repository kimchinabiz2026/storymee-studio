'use client';

import type { Dictionary } from '@/lib/types';
import RevealOnScroll from '@/components/cinematic/RevealOnScroll';

interface Props {
  lang: string;
  dict: Dictionary;
  logos: string[];
}

export default function PressStrip({ lang, dict, logos }: Props) {
  return (
    <section
      id="press-strip"
      style={{
        padding: 'clamp(60px, 8vw, 100px) clamp(20px, 4vw, 60px)',
        maxWidth: '1400px',
        margin: '0 auto',
        minHeight: '40vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <RevealOnScroll>
        <span className="text-label" style={{
          color: 'var(--text-tertiary)',
          display: 'block',
          marginBottom: '48px',
          textAlign: 'center',
        }}>
          {dict.press.label}
        </span>
      </RevealOnScroll>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 'clamp(24px, 4vw, 60px)',
        alignItems: 'center',
      }}>
        {logos.map((logo, i) => (
          <RevealOnScroll key={logo} delay={i * 80}>
            <div
              style={{
                padding: '16px 24px',
                opacity: 0.4,
                transition: 'opacity 0.4s ease',
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(13px, 1.2vw, 16px)',
                fontWeight: 600,
                letterSpacing: '1px',
                color: 'var(--text-secondary)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.4'; }}
            >
              {logo}
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
