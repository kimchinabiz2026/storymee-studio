import { getDictionary } from '@/lib/i18n';
import { projects } from '@/lib/demo-data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import RevealOnScroll from '@/components/cinematic/RevealOnScroll';
import ProjectHeroVideo from '@/components/work/ProjectHeroVideo';

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  const dict = await getDictionary(lang);
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const l = lang as 'vi' | 'en';

  return (
    <div style={{ paddingTop: 0 }}>
      {/* Section A — Hero */}
      <section style={{
        height: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'flex-end',
      }}>
          <ProjectHeroVideo
            videoUrl={project.videoUrl || ''}
            thumbnail={project.thumbnail}
            gradient={project.gradient}
            title={project.title.en}
          />
        <div className="film-grain" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />
        <div className="gradient-bottom" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '60%', zIndex: 1 }} />

        <div style={{
          position: 'relative',
          zIndex: 2,
          padding: 'clamp(40px, 6vw, 80px) clamp(20px, 4vw, 60px)',
          width: '100%',
          maxWidth: '1400px',
          margin: '0 auto',
        }}>
          <span className="text-micro" style={{ color: 'var(--text-tertiary)', display: 'block', marginBottom: '12px' }}>
            {project.client} — {project.year}
          </span>
          <h1 className="text-display-xl">{project.title[l]}</h1>
        </div>
      </section>

      {/* Section B — Info Bar */}
      <section style={{
        background: 'var(--bg-surface)',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
        padding: '24px clamp(20px, 4vw, 60px)',
        position: 'sticky',
        top: '72px',
        zIndex: 10,
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '24px',
        }}>
          <div>
            <span className="text-micro" style={{ color: 'var(--text-tertiary)', display: 'block', marginBottom: '4px' }}>{dict.project.client}</span>
            <span className="text-caption" style={{ color: 'var(--text-primary)' }}>{project.client}</span>
          </div>
          <div>
            <span className="text-micro" style={{ color: 'var(--text-tertiary)', display: 'block', marginBottom: '4px' }}>{dict.project.role}</span>
            <span className="text-caption" style={{ color: 'var(--text-primary)' }}>Direction & Production</span>
          </div>
          <div>
            <span className="text-micro" style={{ color: 'var(--text-tertiary)', display: 'block', marginBottom: '4px' }}>{dict.project.year}</span>
            <span className="text-caption" style={{ color: 'var(--text-primary)' }}>{project.year}</span>
          </div>
          <div>
            <span className="text-micro" style={{ color: 'var(--text-tertiary)', display: 'block', marginBottom: '4px' }}>{dict.project.services}</span>
            <span className="text-caption" style={{ color: 'var(--text-primary)' }}>{project.services.join(', ')}</span>
          </div>
        </div>
      </section>

      {/* Section C — Case Study */}
      <section style={{
        padding: 'clamp(80px, 10vw, 160px) clamp(20px, 4vw, 60px)',
        maxWidth: '900px',
        margin: '0 auto',
      }}>
        {[
          { key: 'challenge', content: project.caseStudy.challenge[l] },
          { key: 'approach', content: project.caseStudy.approach[l] },
          { key: 'outcome', content: project.caseStudy.outcome[l] },
        ].map((section, i) => (
          <RevealOnScroll key={section.key} delay={i * 100}>
            <div style={{ marginBottom: '48px' }}>
              <h3 className="text-label" style={{ color: 'var(--accent)', marginBottom: '16px' }}>
                {dict.project[section.key]}
              </h3>
              <p className="text-body" style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                {section.content}
              </p>
            </div>
          </RevealOnScroll>
        ))}
      </section>

      {/* Section D — BTS Gallery placeholder */}
      <section style={{
        padding: '0 clamp(20px, 4vw, 60px) clamp(80px, 10vw, 120px)',
        maxWidth: '1400px',
        margin: '0 auto',
      }}>
        <RevealOnScroll>
          <h3 className="text-label" style={{ color: 'var(--text-tertiary)', marginBottom: '32px' }}>
            {dict.project.bts}
          </h3>
        </RevealOnScroll>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '12px',
        }}>
          {[1, 2, 3, 4].map((n) => (
            <RevealOnScroll key={n} delay={n * 80}>
              <div style={{
                aspectRatio: n % 2 === 0 ? '4/3' : '3/4',
                background: project.gradient,
                opacity: 0.7 + (n * 0.05),
              }} />
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* Section E — Credits + Next */}
      <section style={{
        borderTop: '1px solid var(--border-subtle)',
        padding: 'clamp(60px, 8vw, 100px) clamp(20px, 4vw, 60px)',
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '60px',
      }}>
        {/* Credits */}
        <RevealOnScroll>
          <div>
            <h3 className="text-label" style={{ color: 'var(--text-tertiary)', marginBottom: '24px' }}>
              {dict.project.credits}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {project.credits.map((c) => (
                <div key={c.role} style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span className="text-caption" style={{ color: 'var(--text-tertiary)' }}>{c.role}</span>
                  <span className="text-caption" style={{ color: 'var(--text-primary)' }}>{c.name}</span>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* Next Project */}
        <RevealOnScroll delay={200}>
          <Link
            href={`/${lang}/work/${nextProject.slug}`}
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
              background: nextProject.gradient,
              transition: 'transform 0.6s cubic-bezier(0.65, 0, 0.35, 1)',
            }} />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(0deg, rgba(10,10,11,0.7) 0%, transparent 50%)',
              zIndex: 1,
            }} />
            <div style={{ position: 'absolute', bottom: '16px', left: '16px', zIndex: 2 }}>
              <span className="text-micro" style={{ color: 'var(--text-tertiary)', display: 'block', marginBottom: '4px' }}>
                {dict.project.next} →
              </span>
              <span className="text-headline">{nextProject.title[l]}</span>
            </div>
          </Link>
        </RevealOnScroll>
      </section>
    </div>
  );
}
