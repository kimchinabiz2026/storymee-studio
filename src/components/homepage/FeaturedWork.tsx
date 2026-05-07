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
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 'clamp(40px, 6vw, 80px)',
      }}>
        {/* Left Side: Title */}
        <div style={{
          flex: '1 1 300px',
          maxWidth: '400px',
        }}>
          <RevealOnScroll>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(50px, 8vw, 80px)', // Made smaller
              fontWeight: 900,
              color: '#ffffff', // Changed to white
              lineHeight: 0.85,
              letterSpacing: '-2px',
              margin: 0,
            }}>
              WORK
            </h2>
            <h3 style={{
              fontFamily: 'var(--font-body)',
              fontSize: '13px',
              letterSpacing: '4px',
              color: 'var(--text-secondary)',
              marginTop: '16px',
              fontWeight: 600,
            }}>
              THE MAKING OF ANIMATION
            </h3>
            <p style={{
              marginTop: '32px',
              fontSize: '14px',
              color: 'var(--text-tertiary)',
              lineHeight: 1.8,
            }}>
              {lang === 'vi' 
                ? 'Khám phá các dự án nổi bật, quá trình kiến tạo thế giới nhân vật và đằng sau hậu trường của StoryMee Studio.' 
                : 'Explore our selected projects, the world-building process, and behind the scenes of StoryMee Studio.'}
            </p>
            
            <div style={{ marginTop: '48px' }}>
              <Link href={`/${lang}/work`} style={{
                color: '#E91E63',
                fontSize: '14px',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'opacity 0.3s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.7'; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}>
                {dict.work_page.view_all} &gt;
              </Link>
            </div>
          </RevealOnScroll>
        </div>

        {/* Right Side: Grid */}
        <div style={{
          flex: '2 1 600px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '24px',
        }}>
          {projects.map((project, i) => (
            <RevealOnScroll key={project.slug} delay={300 + i * 150}>
              <Link
                href={`/${lang}/work/${project.slug}`}
                style={{
                  display: 'block',
                  background: '#1a1a1a', // Changed to gray
                  padding: '12px',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  transition: 'transform 0.3s ease',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div style={{
                  aspectRatio: '16/9',
                  overflow: 'hidden',
                  position: 'relative',
                  border: '1px solid rgba(255,255,255,0.05)', // Darker border
                }}>
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
                
                <div style={{ marginTop: '16px', padding: '0 4px 8px' }}>
                  <div style={{
                    color: '#E91E63',
                    fontSize: '12px',
                    fontWeight: 700,
                    marginBottom: '8px',
                    fontFamily: 'var(--font-body)',
                  }}>
                    {project.year || new Date().getFullYear()} {lang === 'vi' ? 'CẬP NHẬT' : 'UPDATED'}
                  </div>
                  <div style={{
                    color: '#ffffff', // Title color to white for contrast on gray
                    fontSize: '15px',
                    fontWeight: 600,
                    lineHeight: 1.4,
                  }}>
                    {project.title[lang as 'vi' | 'en']}
                  </div>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
