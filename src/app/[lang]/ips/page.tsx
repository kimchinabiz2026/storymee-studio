'use client';

import { use } from 'react';
import { getDictionary } from '@/lib/i18n';
import { ips } from '@/lib/demo-data';
import Link from 'next/link';
import RevealOnScroll from '@/components/cinematic/RevealOnScroll';

export default function IPsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = use(params);
  const dict = use(getDictionary(lang));
  const l = lang as 'vi' | 'en';

  return (
    <div style={{ paddingTop: '120px', minHeight: '100vh' }}>
      <div style={{
        padding: '0 clamp(20px, 4vw, 60px)',
        maxWidth: '1400px',
        margin: '0 auto',
      }}>
        <RevealOnScroll>
          <h1 className="text-display-l" style={{ marginBottom: '48px' }}>{dict.ip_page.title}</h1>
        </RevealOnScroll>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '20px',
          paddingBottom: '120px',
        }}>
          {ips.map((ip, i) => (
            <RevealOnScroll key={ip.slug} delay={i * 150}>
              <Link
                href={`/${lang}/ips/${ip.slug}`}
                data-cursor-video
                style={{
                  display: 'block',
                  position: 'relative',
                  aspectRatio: '4/5',
                  overflow: 'hidden',
                }}
              >
                {/* Background: video, image, or gradient */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: ip.gradient,
                  transition: 'transform 0.8s cubic-bezier(0.65, 0, 0.35, 1)',
                }}
                  className="ip-tile-bg"
                >
                  {ip.keyVisual && (
                    <img
                      src={ip.keyVisual}
                      alt={ip.name.en}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  )}
                  {ip.videoUrl && !ip.keyVisual && (
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    >
                      <source src={ip.videoUrl} type="video/mp4" />
                    </video>
                  )}
                </div>

                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(0deg, rgba(10,10,11,0.9) 0%, rgba(10,10,11,0.2) 40%, transparent 70%)',
                  zIndex: 2,
                }} />

                <div style={{
                  position: 'absolute',
                  bottom: 'clamp(24px, 4vw, 40px)',
                  left: 'clamp(20px, 3vw, 32px)',
                  right: 'clamp(20px, 3vw, 32px)',
                  zIndex: 3,
                }}>
                  <div className={`badge ${ip.status}`} style={{ marginBottom: '16px' }}>
                    {ip.status.toUpperCase()}
                  </div>
                  <h2 className="text-display-m" style={{ marginBottom: '8px' }}>{ip.name[l]}</h2>
                  <p className="text-caption" style={{ color: 'var(--text-secondary)', fontStyle: 'italic' }}>
                    {ip.tagline[l]}
                  </p>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>

      <style>{`
        .ip-tile-bg:hover { transform: scale(1.03); }
      `}</style>
    </div>
  );
}
