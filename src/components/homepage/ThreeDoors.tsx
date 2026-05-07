'use client';

import Link from 'next/link';
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

  return (
    <section
      id="three-doors"
      style={{
        padding: 'clamp(80px, 10vw, 120px) clamp(20px, 4vw, 60px)',
        maxWidth: '1400px',
        margin: '0 auto',
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <RevealOnScroll>
        <div style={{ marginBottom: '60px' }}>
          <span className="text-label" style={{ color: 'var(--text-tertiary)', display: 'block', marginBottom: '16px' }}>
            {dict.three_doors.label}
          </span>
          <h2 className="text-display-l" style={{ fontStyle: 'italic' }}>
            {dict.three_doors.title}
          </h2>
        </div>
      </RevealOnScroll>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1px',
        background: 'var(--border-subtle)',
      }}>
        {doors.map((door, i) => (
          <RevealOnScroll key={i} delay={i * 150}>
            <Link
              href={door.href}
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: 'clamp(28px, 3vw, 48px)',
                background: 'var(--bg-primary)',
                transition: 'background 0.4s ease',
                minHeight: '220px',
                justifyContent: 'space-between',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--bg-card)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--bg-primary)'; }}
            >
              <div>
                <span className="text-micro" style={{ color: 'var(--accent)', display: 'block', marginBottom: '20px' }}>
                  {door.label}
                </span>
                <h3 className="text-headline" style={{ marginBottom: '12px' }}>
                  {door.title}
                </h3>
                <p className="text-caption" style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
                  {door.desc}
                </p>
              </div>
              <span className="text-label" style={{ color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                {door.cta} <span style={{ fontSize: '16px', transition: 'transform 0.3s ease' }}>→</span>
              </span>
            </Link>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
