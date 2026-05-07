'use client';

import Link from 'next/link';
import type { Dictionary, IP } from '@/lib/types';
import RevealOnScroll from '@/components/cinematic/RevealOnScroll';

interface Props {
  lang: string;
  dict: Dictionary;
  ips: IP[];
}

export default function FeaturedIP({ lang, dict, ips }: Props) {
  // Duplicate array to create seamless loop
  const scrollItems = [...ips, ...ips, ...ips, ...ips];

  return (
    <section
      id="featured-ips"
      style={{
        position: 'relative',
        background: '#050505', // Black background
        padding: 'clamp(80px, 10vh, 120px) 0',
        overflow: 'hidden',
      }}
    >
      <RevealOnScroll>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 clamp(20px, 4vw, 60px)', marginBottom: '40px' }}>
          <span className="text-label" style={{ color: 'var(--text-tertiary)', display: 'block', marginBottom: '16px' }}>
            {dict.featured_ip.label}
          </span>
          <h2 className="text-display-m" style={{ color: '#fff' }}>
            {lang === 'vi' ? 'Vũ trụ StoryMee' : 'StoryMee Universe'}
          </h2>
        </div>
      </RevealOnScroll>

      {/* Marquee Style */}
      <style>{`
        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: scrollRight 40s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        .ip-card-image {
          transition: transform 0.5s ease;
        }
        .ip-card:hover .ip-card-image {
          transform: scale(1.05);
        }
      `}</style>

      {/* Marquee Container */}
      <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
        <div className="marquee-track" style={{ gap: '32px', padding: '20px 0' }}>
          {scrollItems.map((ip, index) => (
            <Link 
              href={`/${lang}/ips/${ip.slug}`} 
              key={`${ip.slug}-${index}`}
              className="ip-card"
              style={{
                display: 'block',
                width: 'clamp(280px, 25vw, 400px)',
                aspectRatio: '4/5',
                position: 'relative',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.1)',
                textDecoration: 'none',
                flexShrink: 0,
                background: ip.gradient,
              }}
            >
              {ip.keyVisual ? (
                <img
                  src={ip.keyVisual}
                  alt={ip.name[lang as 'vi' | 'en']}
                  className="ip-card-image"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : (
                <div style={{ width: '100%', height: '100%', background: ip.gradient }} />
              )}
              
              {/* Overlay Content */}
              <div style={{
                position: 'absolute',
                bottom: 0, left: 0, right: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)',
                padding: '40px 24px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}>
                <span className="text-headline" style={{ color: '#fff', fontSize: '24px' }}>
                  {ip.name[lang as 'vi' | 'en']}
                </span>
                <span className="text-caption" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  {ip.tagline[lang as 'vi' | 'en']}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
