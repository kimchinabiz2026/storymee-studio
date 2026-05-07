'use client';

import { use } from 'react';
import { getDictionary } from '@/lib/i18n';
import { pressArticles } from '@/lib/demo-data';
import RevealOnScroll from '@/components/cinematic/RevealOnScroll';

export default function PressPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = use(params);
  const dict = use(getDictionary(lang));

  return (
    <div style={{ paddingTop: '120px', minHeight: '100vh' }}>
      <div style={{
        padding: '0 clamp(20px, 4vw, 60px)',
        maxWidth: '1000px',
        margin: '0 auto',
      }}>
        <RevealOnScroll>
          <h1 className="text-display-l" style={{ marginBottom: '48px' }}>{dict.press_page.title}</h1>
        </RevealOnScroll>

        {/* Articles */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--border-subtle)', marginBottom: '80px' }}>
          {pressArticles.map((article, i) => (
            <RevealOnScroll key={i} delay={i * 80}>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'auto 1fr auto',
                  gap: '24px',
                  alignItems: 'center',
                  padding: '28px 24px',
                  background: 'var(--bg-primary)',
                  transition: 'background 0.3s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--bg-card)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--bg-primary)'; }}
              >
                <span className="text-label" style={{ color: 'var(--accent)', minWidth: '100px' }}>
                  {article.publication}
                </span>
                <div>
                  <h3 className="text-headline" style={{ fontSize: '16px', marginBottom: '4px' }}>
                    {article.headline}
                  </h3>
                  <p className="text-caption" style={{ color: 'var(--text-secondary)' }}>
                    {article.excerpt}
                  </p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
                  <span className="text-micro" style={{ color: 'var(--text-tertiary)' }}>{article.date}</span>
                  <span style={{ fontSize: '16px', color: 'var(--text-secondary)' }}>↗</span>
                </div>
              </a>
            </RevealOnScroll>
          ))}
        </div>

        {/* Press Kit */}
        <RevealOnScroll>
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            padding: 'clamp(32px, 4vw, 60px)',
            marginBottom: '120px',
          }}>
            <h2 className="text-headline" style={{ marginBottom: '16px' }}>{dict.press_page.kit_title}</h2>
            <p className="text-body" style={{ color: 'var(--text-secondary)', marginBottom: '24px', maxWidth: '500px' }}>
              {dict.press_page.kit_desc}
            </p>
            <div className="text-caption" style={{ color: 'var(--text-tertiary)', marginBottom: '24px' }}>
              {lang === 'vi' ? 'Bao gồm: ' : 'Includes: '} Logos (PNG/SVG) · Key Visuals · Headshots · Fact Sheet · Press Release
            </div>
            <a 
              href="/assets/StoryMee_Sale_kit.pdf" 
              download 
              className="btn-primary" 
              style={{ display: 'inline-block', textDecoration: 'none' }}
            >
              {dict.press_page.download}
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}
