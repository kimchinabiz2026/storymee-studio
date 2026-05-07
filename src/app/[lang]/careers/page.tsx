'use client';

import { use } from 'react';
import { getDictionary } from '@/lib/i18n';
import { jobs } from '@/lib/demo-data';
import RevealOnScroll from '@/components/cinematic/RevealOnScroll';

export default function CareersPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = use(params);
  const dict = use(getDictionary(lang));
  const l = lang as 'vi' | 'en';

  return (
    <div style={{ paddingTop: '120px', minHeight: '100vh' }}>
      <div style={{
        padding: '0 clamp(20px, 4vw, 60px)',
        maxWidth: '1000px',
        margin: '0 auto',
      }}>
        {/* Hero */}
        <RevealOnScroll>
          <h1 className="text-display-l" style={{ marginBottom: '16px' }}>{dict.careers_page.title}</h1>
          <p className="text-display-m" style={{
            fontStyle: 'italic',
            color: 'var(--text-secondary)',
            marginBottom: '80px',
          }}>
            {dict.careers_page.tagline}
          </p>
        </RevealOnScroll>

        {/* Open Positions */}
        <section style={{ marginBottom: '80px' }}>
          <RevealOnScroll>
            <h2 className="text-label" style={{ color: 'var(--text-tertiary)', marginBottom: '24px' }}>
              {dict.careers_page.open}
            </h2>
          </RevealOnScroll>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--border-subtle)' }}>
            {jobs.map((job, i) => (
              <RevealOnScroll key={i} delay={i * 100}>
                <div style={{
                  background: 'var(--bg-primary)',
                  padding: '28px 24px',
                  display: 'grid',
                  gridTemplateColumns: '1fr auto',
                  gap: '24px',
                  alignItems: 'center',
                  transition: 'background 0.3s ease',
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--bg-card)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--bg-primary)'; }}
                >
                  <div>
                    <h3 className="text-headline" style={{ fontSize: '18px', marginBottom: '8px' }}>
                      {job.title[l]}
                    </h3>
                    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                      <span className="text-micro" style={{ color: 'var(--text-tertiary)' }}>{job.department}</span>
                      <span className="text-micro" style={{ color: 'var(--text-tertiary)' }}>{job.location}</span>
                      <span className="text-micro" style={{ color: 'var(--accent)' }}>{job.type}</span>
                    </div>
                  </div>
                  <span style={{ fontSize: '20px', color: 'var(--text-secondary)' }}>→</span>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        {/* Always looking */}
        <RevealOnScroll>
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            padding: 'clamp(32px, 4vw, 60px)',
            marginBottom: '80px',
          }}>
            <h2 className="text-headline" style={{ marginBottom: '16px' }}>
              {dict.careers_page.always}
            </h2>
            <p className="text-body" style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
              {dict.careers_page.always_desc}
            </p>
            <a href="mailto:storymee@gmail.com" className="btn-secondary" style={{ display: 'inline-flex' }}>
              storymee@gmail.com →
            </a>
          </div>
        </RevealOnScroll>

        {/* Life at Studio */}
        <section style={{ marginBottom: '120px' }}>
          <RevealOnScroll>
            <h2 className="text-label" style={{ color: 'var(--text-tertiary)', marginBottom: '24px' }}>
              {dict.careers_page.life}
            </h2>
          </RevealOnScroll>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '12px',
          }}>
            {[
              'linear-gradient(135deg, #1a1a2e, #2d1b69)',
              'linear-gradient(135deg, #0f3460, #1a5c8f)',
              'linear-gradient(135deg, #1a3a1a, #2d5a27)',
              'linear-gradient(135deg, #3d1c00, #8B4513)',
              'linear-gradient(135deg, #1a0a2e, #4a0e4e)',
              'linear-gradient(135deg, #0d1b2a, #1b2838)',
            ].map((grad, i) => (
              <RevealOnScroll key={i} delay={i * 60}>
                <div style={{
                  aspectRatio: i % 3 === 0 ? '1/1' : '4/3',
                  background: grad,
                  opacity: 0.7,
                }} />
              </RevealOnScroll>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
