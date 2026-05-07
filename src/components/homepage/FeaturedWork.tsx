'use client';

import Link from 'next/link';
import type { Dictionary, Project } from '@/lib/types';
import RevealOnScroll from '@/components/cinematic/RevealOnScroll';

interface Props {
  lang: string;
  dict: Dictionary;
  projects: Project[];
}

export default function FeaturedWork({ lang, dict, projects }: Props) {
  return (
    <section
      id="featured-work"
      style={{
        padding: 'clamp(80px, 10vw, 160px) clamp(20px, 4vw, 60px)',
        maxWidth: '1400px',
        margin: '0 auto',
      }}
    >
      <RevealOnScroll>
        <div style={{ marginBottom: '60px' }}>
          <span className="text-label" style={{ color: 'var(--text-tertiary)', display: 'block', marginBottom: '16px' }}>
            01 — OUR WORK
          </span>
          <h2 className="text-display-l">
            {lang === 'vi' ? 'Tuyển chọn.' : 'Selected work.'}
          </h2>
        </div>
      </RevealOnScroll>

      {/* Asymmetric masonry grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1.4fr 1fr',
        gap: '20px',
      }}>
        {projects.map((project, i) => (
          <RevealOnScroll key={project.slug} delay={i * 100}>
            <Link
              href={`/${lang}/work/${project.slug}`}
              data-cursor-video
              style={{
                display: 'block',
                position: 'relative',
                aspectRatio: '16/9',
                overflow: 'hidden',
                gridColumn: i % 3 === 0 ? 'span 1' : undefined,
              }}
            >
              {/* Video placeholder */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: project.gradient,
                transition: 'transform 0.6s cubic-bezier(0.65, 0, 0.35, 1)',
              }}
                className="work-tile-bg"
              >
                {project.thumbnail && project.thumbnail !== '/placeholder.jpg' && (
                  <img
                    src={project.thumbnail}
                    alt={project.title[lang as 'vi' | 'en']}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                )}
                {project.videoUrl && !project.thumbnail?.includes('paco') && (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }}
                  >
                    <source src={project.videoUrl} type="video/mp4" />
                  </video>
                )}
              </div>
              {/* Hover overlay */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(0deg, rgba(10,10,11,0.7) 0%, transparent 50%)',
                zIndex: 1,
              }} />

              {/* Caption */}
              <div style={{
                position: 'absolute',
                bottom: '16px',
                left: '16px',
                right: '16px',
                zIndex: 2,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
              }}>
                <div>
                  <span className="text-micro" style={{ color: 'var(--text-tertiary)', display: 'block', marginBottom: '4px' }}>
                    {String(i + 1).padStart(2, '0')} / {project.title[lang as 'vi' | 'en']}
                  </span>
                  <span className="text-caption" style={{ color: 'var(--text-secondary)' }}>
                    {project.client} — {project.year}
                  </span>
                </div>
                <span className="text-micro" style={{ color: 'var(--text-tertiary)' }}>
                  {project.category.toUpperCase().replace('_', ' ')}
                </span>
              </div>
            </Link>
          </RevealOnScroll>
        ))}
      </div>

      <RevealOnScroll delay={600}>
        <div style={{ marginTop: '48px', textAlign: 'center' }}>
          <Link href={`/${lang}/work`} className="btn-secondary" style={{ display: 'inline-flex' }}>
            {dict.work_page.view_all} →
          </Link>
        </div>
      </RevealOnScroll>

      <style jsx>{`
        .work-tile-bg:hover {
          transform: scale(1.02);
        }
      `}</style>
    </section>
  );
}
