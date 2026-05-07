'use client';

import { useState } from 'react';
import type { Dictionary } from '@/lib/types';
import RevealOnScroll from '@/components/cinematic/RevealOnScroll';

interface Props {
  lang: string;
  dict: Dictionary;
}

export default function ContactPageClient({ lang, dict }: Props) {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  const inputStyle: React.CSSProperties = {
    background: 'var(--bg-card)',
    border: '1px solid var(--border-subtle)',
    color: 'var(--text-primary)',
    padding: '14px 16px',
    fontFamily: 'var(--font-body)',
    fontSize: '14px',
    outline: 'none',
    width: '100%',
    transition: 'border-color 0.3s ease',
  };

  return (
    <div style={{ paddingTop: '120px', minHeight: '100vh', paddingBottom: '120px' }}>
      <div style={{
        padding: '0 clamp(20px, 4vw, 60px)',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <RevealOnScroll>
          <h1 className="text-display-l" style={{ marginBottom: '12px' }}>{dict.contact.title}</h1>
          <p className="text-body" style={{ color: 'var(--text-secondary)', marginBottom: '60px', maxWidth: '500px' }}>
            {dict.contact.subtitle}
          </p>
        </RevealOnScroll>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '60px',
        }}>
          {/* Form */}
          <RevealOnScroll>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label className="text-micro" style={{ color: 'var(--text-tertiary)', display: 'block', marginBottom: '6px' }}>
                    {dict.contact.name} *
                  </label>
                  <input required style={inputStyle} />
                </div>
                <div>
                  <label className="text-micro" style={{ color: 'var(--text-tertiary)', display: 'block', marginBottom: '6px' }}>
                    {dict.contact.email} *
                  </label>
                  <input type="email" required style={inputStyle} />
                </div>
              </div>

              <div>
                <label className="text-micro" style={{ color: 'var(--text-tertiary)', display: 'block', marginBottom: '6px' }}>
                  {dict.contact.company}
                </label>
                <input style={inputStyle} />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label className="text-micro" style={{ color: 'var(--text-tertiary)', display: 'block', marginBottom: '6px' }}>
                    {dict.contact.project_type}
                  </label>
                  <select style={inputStyle}>
                    <option value=""></option>
                    {Object.entries(dict.contact.types).map(([k, v]) => (
                      <option key={k} value={k}>{v}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-micro" style={{ color: 'var(--text-tertiary)', display: 'block', marginBottom: '6px' }}>
                    {dict.contact.budget}
                  </label>
                  <select style={inputStyle}>
                    <option value=""></option>
                    {Object.entries(dict.contact.budgets).map(([k, v]) => (
                      <option key={k} value={k}>{v}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-micro" style={{ color: 'var(--text-tertiary)', display: 'block', marginBottom: '6px' }}>
                  {dict.contact.timeline}
                </label>
                <input style={inputStyle} />
              </div>

              <div>
                <label className="text-micro" style={{ color: 'var(--text-tertiary)', display: 'block', marginBottom: '6px' }}>
                  {dict.contact.message} *
                </label>
                <textarea required rows={5} style={{ ...inputStyle, resize: 'vertical' }} />
              </div>

              {sent ? (
                <div style={{
                  padding: '16px',
                  background: 'rgba(255, 69, 0, 0.1)',
                  border: '1px solid var(--accent)',
                  color: 'var(--accent)',
                  fontSize: '14px',
                }}>
                  ✓ {dict.contact.sent}
                </div>
              ) : (
                <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
                  {dict.contact.send}
                </button>
              )}
            </form>
          </RevealOnScroll>

          {/* Sidebar */}
          <RevealOnScroll delay={200}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div>
                <span className="text-micro" style={{ color: 'var(--text-tertiary)', display: 'block', marginBottom: '12px' }}>
                  {lang === 'vi' ? 'ĐỊA CHỈ' : 'ADDRESS'}
                </span>
                <p className="text-body" style={{ color: 'var(--text-secondary)', whiteSpace: 'pre-line' }}>
                  {dict.contact.info.address}
                </p>
              </div>

              <div>
                <span className="text-micro" style={{ color: 'var(--text-tertiary)', display: 'block', marginBottom: '12px' }}>
                  EMAIL
                </span>
                <a href={`mailto:${dict.contact.info.general}`} className="text-body" style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '4px' }}>
                  {dict.contact.info.general}
                </a>
                <a href={`mailto:${dict.contact.info.business}`} className="text-body" style={{ color: 'var(--text-secondary)' }}>
                  {dict.contact.info.business}
                </a>
              </div>

              <div>
                <span className="text-micro" style={{ color: 'var(--text-tertiary)', display: 'block', marginBottom: '12px' }}>
                  SOCIAL
                </span>
                <div style={{ display: 'flex', gap: '16px' }}>
                  {['YouTube', 'Instagram', 'TikTok', 'LinkedIn'].map((s) => (
                    <a key={s} href="#" className="text-caption" style={{ color: 'var(--text-secondary)' }}>
                      {s}
                    </a>
                  ))}
                </div>
              </div>

              {/* Map embed */}
              <div style={{
                aspectRatio: '16/9',
                border: '1px solid var(--border-subtle)',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '4px',
              }}>
                <iframe 
                  src="https://maps.google.com/maps?q=180%20Thanh%20Binh,%20Ha%20Dong,%20Hanoi&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, display: 'block' }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="StoryMee Studio Location"
                ></iframe>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </div>
  );
}
