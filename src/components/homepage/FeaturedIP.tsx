'use client';

import Link from 'next/link';
import type { Dictionary, IP } from '@/lib/types';
import RevealOnScroll from '@/components/cinematic/RevealOnScroll';

interface Props {
  lang: string;
  dict: Dictionary;
  ip: IP;
}

export default function FeaturedIP({ lang, dict, ip }: Props) {
  return (
    <section
      id="featured-ip"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: ip.gradient,
        opacity: 0.5,
      }} />
      <div className="film-grain" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />

      <div style={{
        position: 'relative',
        zIndex: 2,
        width: '100%',
        maxWidth: '1400px',
        margin: '0 auto',
        padding: 'clamp(120px, 15vh, 200px) clamp(20px, 4vw, 60px)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 'clamp(40px, 6vw, 100px)',
        alignItems: 'center',
      }}>
        {/* Key Visual */}
        <RevealOnScroll>
          <div style={{
            aspectRatio: '3/4',
            background: ip.gradient,
            position: 'relative',
            overflow: 'hidden',
          }}>
            {ip.keyVisual ? (
              <img
                src={ip.keyVisual}
                alt={ip.name.en}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            ) : ip.videoUrl ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              >
                <source src={ip.videoUrl} type="video/mp4" />
              </video>
            ) : (
              <div className="video-placeholder" style={{ width: '100%', height: '100%' }}>
                <div className="vp-bg" style={{ background: ip.gradient }} />
              </div>
            )}
            {/* IP Logo overlay */}
            <div style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(0deg, rgba(10,10,11,0.5) 0%, transparent 50%)',
            }}>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(48px, 8vw, 120px)',
                fontWeight: 400,
                opacity: 0.15,
                letterSpacing: '-2px',
              }}>
                {ip.name.en}
              </span>
            </div>
          </div>
        </RevealOnScroll>

        {/* Content */}
        <RevealOnScroll delay={200}>
          <div>
            <span className="text-label" style={{ color: 'var(--text-tertiary)', display: 'block', marginBottom: '24px' }}>
              {dict.featured_ip.label}
            </span>
            <h2 className="text-display-l" style={{ marginBottom: '12px' }}>
              {ip.name[lang as 'vi' | 'en']}
            </h2>
            <p className="text-body" style={{
              color: 'var(--text-secondary)',
              fontStyle: 'italic',
              marginBottom: '24px',
            }}>
              {ip.tagline[lang as 'vi' | 'en']}
            </p>

            <div className="badge production" style={{ marginBottom: '24px' }}>
              {ip.status.toUpperCase()}
            </div>

            <p className="text-body" style={{
              color: 'var(--text-secondary)',
              marginBottom: '40px',
              maxWidth: '400px',
              lineHeight: 1.8,
            }}>
              {ip.worldDescription[lang as 'vi' | 'en'].slice(0, 200)}...
            </p>

            <Link href={`/${lang}/ips/${ip.slug}`} className="btn-primary">
              {dict.featured_ip.cta} →
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
