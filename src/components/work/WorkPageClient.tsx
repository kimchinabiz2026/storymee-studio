'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { Dictionary, Project } from '@/lib/types';
import RevealOnScroll from '@/components/cinematic/RevealOnScroll';

interface Props {
  lang: string;
  dict: Dictionary;
  projects: Project[];
}

const FILTERS = ['all', 'ip', 'production', 'commercial', 'music_video', 'short_film', 'series', 'post_production', 'book', 'podcast'] as const;

export default function WorkPageClient({ lang, dict, projects }: Props) {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <div style={{ paddingTop: '120px', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{
        padding: '0 clamp(20px, 4vw, 60px)',
        maxWidth: '1400px',
        margin: '0 auto 40px',
      }}>
        <RevealOnScroll>
          <h1 className="text-display-l" style={{ marginBottom: '32px' }}>{dict.work_page.title}</h1>
        </RevealOnScroll>

        {/* Filter chips */}
        <RevealOnScroll delay={100}>
          <div style={{
            display: 'flex',
            gap: '8px',
            flexWrap: 'wrap',
            marginBottom: '48px',
          }}>
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className="text-label"
                style={{
                  padding: '8px 16px',
                  background: activeFilter === filter ? 'transparent' : 'transparent',
                  border: `1px solid ${activeFilter === filter ? 'var(--accent)' : 'var(--border-default)'}`,
                  color: activeFilter === filter ? 'var(--accent)' : 'var(--text-secondary)',
                  transition: 'all 0.3s ease',
                  fontSize: '10px',
                }}
              >
                {dict.work_page.filters[filter] || filter}
              </button>
            ))}
          </div>
        </RevealOnScroll>

        {/* Vimeo Commercial Banner */}
        {activeFilter === 'commercial' && (
          <RevealOnScroll delay={100}>
            <div style={{
              marginTop: '40px',
              padding: '32px',
              border: '1px solid var(--border-subtle)',
              background: 'var(--bg-card)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              gap: '16px',
            }}>
              <h3 className="text-headline">
                {lang === 'vi' ? 'Xem thêm các dự án Commercial & TVC trên Vimeo' : 'Discover more Commercial & TVC projects on Vimeo'}
              </h3>
              <p className="text-body" style={{ color: 'var(--text-secondary)', maxWidth: '600px' }}>
                {lang === 'vi' 
                  ? 'Bên cạnh các dự án nổi bật dưới đây, bạn có thể khám phá thêm toàn bộ danh mục sản phẩm quảng cáo của StoryMee (Kim Ngân) trên kênh Vimeo chính thức.' 
                  : 'In addition to the featured projects below, you can explore the full commercial portfolio of StoryMee (Kim Ngân) on our official Vimeo channel.'}
              </p>
              <a
                href="https://vimeo.com/user102580330"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ marginTop: '8px' }}
              >
                {lang === 'vi' ? 'TRUY CẬP VIMEO' : 'VISIT VIMEO'} ↗
              </a>
            </div>
          </RevealOnScroll>
        )}
      </div>

      {/* Grid */}
      <div style={{
        padding: '0 clamp(20px, 4vw, 60px)',
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
        gap: '20px',
        paddingBottom: '120px',
      }}>
        {filtered.map((project, i) => (
          <RevealOnScroll key={project.slug} delay={i * 100}>
            <Link
              href={project.externalUrl || `/${lang}/work/${project.slug}`}
              target={project.externalUrl ? "_blank" : undefined}
              rel={project.externalUrl ? "noopener noreferrer" : undefined}
              data-cursor-video
              style={{
                display: 'block',
                position: 'relative',
                aspectRatio: '16/9',
                overflow: 'hidden',
              }}
            >
              <div style={{
                position: 'absolute',
                inset: 0,
                background: project.gradient,
                transition: 'transform 0.6s cubic-bezier(0.65, 0, 0.35, 1)',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.02)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
              >
                {project.thumbnail && project.thumbnail !== '/placeholder.jpg' && (
                  <img
                    src={project.thumbnail}
                    alt={project.title.en}
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
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(0deg, rgba(10,10,11,0.7) 0%, transparent 50%)',
                zIndex: 1,
              }} />
              <div style={{
                position: 'absolute',
                bottom: '16px',
                left: '16px',
                right: '16px',
                zIndex: 2,
              }}>
                <span className="text-micro" style={{ color: 'var(--text-tertiary)', display: 'block', marginBottom: '4px' }}>
                  {String(i + 1).padStart(2, '0')} / {project.title[lang as 'vi' | 'en']}
                </span>
                <span className="text-caption" style={{ color: 'var(--text-secondary)' }}>
                  {project.client}{project.year > 0 ? ` — ${project.year}` : ''}
                </span>
              </div>
            </Link>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
}
