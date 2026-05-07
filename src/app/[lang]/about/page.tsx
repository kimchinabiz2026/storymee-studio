'use client';

import { use } from 'react';
import { getDictionary } from '@/lib/i18n';
import { team, clientLogos } from '@/lib/demo-data';
import type { TeamMember } from '@/lib/types';
import RevealOnScroll from '@/components/cinematic/RevealOnScroll';
import Image from 'next/image';

const TeamMemberCard = ({ member, lang, delay }: { member: TeamMember, lang: 'vi'|'en', delay: number }) => {
  if (!member) return null;
  return (
    <RevealOnScroll delay={delay}>
      <div style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-subtle)',
        overflow: 'hidden',
        transition: 'border-color 0.3s ease',
      }}>
        <div style={{
          aspectRatio: '1/1',
          background: member.gradient,
          position: 'relative',
        }}>
          {member.image ? (
            <Image 
              src={member.image} 
              alt={member.name} 
              fill 
              style={{ objectFit: 'cover' }} 
            />
          ) : (
            <div style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '64px',
              fontFamily: 'var(--font-display)',
              opacity: 0.08,
            }}>
              {member.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
            </div>
          )}
        </div>
        <div style={{ padding: '20px 16px' }}>
          <h3 className="text-display-m" style={{ fontSize: '24px', marginBottom: '4px' }}>{member.name}</h3>
          <span className="text-label" style={{ color: 'var(--accent)', display: 'block', marginBottom: '12px' }}>
            {member.role[lang]}
          </span>
          <p className="text-caption" style={{ color: 'var(--text-secondary)' }}>
            {member.bio[lang]}
          </p>
        </div>
      </div>
    </RevealOnScroll>
  );
};

export default function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = use(params);
  const dict = use(getDictionary(lang));
  const l = lang as 'vi' | 'en';

  const services = {
    ip: ['World Building', 'Character Design', 'Story Development', 'Pilot Production', 'Series Bible', 'Pitch Deck'],
    production: ['Commercial TVC', 'Music Video', 'Short Film', 'Brand Film', 'Live Action', 'Animation'],
    post: ['Color Grading', 'VFX & CGI', 'Motion Graphics', 'Sound Design', 'Editing', 'DIT'],
  };

  const pipeline = [
    { step: '01', name: lang === 'vi' ? 'Brief' : 'Brief', desc: lang === 'vi' ? 'Hiểu mục tiêu & tầm nhìn' : 'Understand goals & vision' },
    { step: '02', name: lang === 'vi' ? 'Concept' : 'Concept', desc: lang === 'vi' ? 'Phát triển ý tưởng sáng tạo' : 'Develop creative ideas' },
    { step: '03', name: lang === 'vi' ? 'Sản xuất' : 'Production', desc: lang === 'vi' ? 'Hiện thực hóa tầm nhìn' : 'Bring the vision to life' },
    { step: '04', name: lang === 'vi' ? 'Giao hàng' : 'Delivery', desc: lang === 'vi' ? 'Hoàn thiện & phân phối' : 'Finalize & distribute' },
  ];

  return (
    <div style={{ paddingTop: '120px' }}>
      {/* Our Story */}
      <section style={{
        padding: '0 clamp(20px, 4vw, 60px) clamp(80px, 10vw, 160px)',
        maxWidth: '1400px',
        margin: '0 auto',
      }}>
        <RevealOnScroll>
          <span className="text-label" style={{ color: 'var(--text-tertiary)', display: 'block', marginBottom: '16px' }}>
            {dict.about.story_label}
          </span>
          <h1 className="text-display-l" style={{ marginBottom: '40px', maxWidth: '700px' }}>
            {dict.about.story_title}
          </h1>
        </RevealOnScroll>
        <RevealOnScroll delay={200}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
          }}>
            <p className="text-body" style={{ color: 'var(--text-secondary)', lineHeight: 2 }}>
              {lang === 'vi'
                ? 'StoryMee là studio xây dựng và phát triển thế giới nhân vật IP tại Việt Nam, từ phim hoạt hình, nội dung ngắn, nội dung dài, đến hệ thống nhân vật cho các thương hiệu lớn. Chúng tôi tin rằng Việt Nam xứng đáng có một Disney của riêng mình, và chúng tôi đang tiên phong xây dựng từng nhân vật, từng thế giới, từng câu chuyện.'
                : 'StoryMee is a studio that builds and develops IP character worlds in Vietnam from animated films, short-form content, long-form content, to character systems for major brands. We believe Vietnam deserves its own Disney, and we are pioneering the creation of each character, each world, each story.'
              }
            </p>
            <p className="text-body" style={{ color: 'var(--text-secondary)', lineHeight: 2 }}>
              {lang === 'vi'
                ? 'Với hệ sinh thái 4+ IP gốc đang phát triển từ chú vẹt Paco đáng yêu, gấu nâu hiền lành, corgi Ú hài hước đến thế giới vi khuẩn kỳ thú StoryMee đang từng bước đưa animation Việt Nam ra thế giới. Mỗi nhân vật chúng tôi tạo ra đều mang DNA Việt nhưng có sức hấp dẫn toàn cầu.'
                : 'With an ecosystem of 4+ original IPs in development from the adorable parrot Paco, gentle brown bear, hilarious corgi Ú, to the fascinating microbe world StoryMee is step by step bringing Vietnamese animation to the world. Every character we create carries Vietnamese DNA with global appeal.'
              }
            </p>
          </div>
        </RevealOnScroll>
      </section>

      <div className="section-divider" style={{ maxWidth: '1400px', margin: '0 auto' }} />

      {/* Vimeo Showreel */}
      <section style={{
        padding: 'clamp(80px, 10vw, 160px) clamp(20px, 4vw, 60px)',
        maxWidth: '1400px',
        margin: '0 auto',
      }}>
        <RevealOnScroll>
          <span className="text-label" style={{ color: 'var(--text-tertiary)', display: 'block', marginBottom: '16px' }}>
            {lang === 'vi' ? '  SHOWREEL' : '  SHOWREEL'}
          </span>
          <h2 className="text-display-l" style={{ marginBottom: '32px' }}>
            {lang === 'vi' ? 'StoryMee Production.' : 'StoryMee Production.'}
          </h2>
        </RevealOnScroll>
        <RevealOnScroll delay={200}>
          <div style={{
            position: 'relative',
            aspectRatio: '16/9',
            overflow: 'hidden',
            borderRadius: '4px',
            border: '1px solid var(--border-subtle)',
          }}>
            <video
              autoPlay
              muted
              loop
              playsInline
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                position: 'absolute',
                inset: 0,
              }}
            >
              <source src="/assets/ip-bear.mp4" type="video/mp4" />
            </video>
          </div>
          <div style={{ marginTop: '24px', textAlign: 'center' }}>
            <p className="text-body" style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
              {lang === 'vi' 
                ? 'Khám phá thêm các dự án Commercial & TVC trên kênh Vimeo chính thức của chúng tôi.' 
                : 'Explore more Commercial & TVC projects on our official Vimeo channel.'}
            </p>
            <a
              href="https://vimeo.com/user102580330"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              {lang === 'vi' ? 'TRUY CẬP VIMEO' : 'VISIT VIMEO'} ↗
            </a>
          </div>
        </RevealOnScroll>
      </section>

      <div className="section-divider" style={{ maxWidth: '1400px', margin: '0 auto' }} />

      {/* Team */}
      <section style={{
        padding: 'clamp(80px, 10vw, 160px) clamp(20px, 4vw, 60px)',
        maxWidth: '1400px',
        margin: '0 auto',
      }}>
        <RevealOnScroll>
          <span className="text-label" style={{ color: 'var(--text-tertiary)', display: 'block', marginBottom: '16px' }}>
            {dict.about.team_label}
          </span>
          <h2 className="text-display-l" style={{ marginBottom: '48px' }}>
            {dict.about.team_title}
          </h2>
        </RevealOnScroll>

        {/* Row 1: Founders */}
        <div style={{ marginBottom: '40px' }}>
          <h3 className="text-label" style={{ marginBottom: '24px', color: 'var(--text-secondary)' }}>
            {lang === 'vi' ? 'Ban Giám Đốc' : 'Board of Directors'}
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '20px',
          }}>
            {team.slice(0, 2).map((member, i) => (
              <TeamMemberCard key={member.name} member={member} lang={l} delay={i * 80} />
            ))}
          </div>
        </div>

        {/* Row 2: Team Production */}
        <div style={{ marginBottom: '40px' }}>
          <h3 className="text-label" style={{ marginBottom: '24px', color: 'var(--text-secondary)' }}>
            Team Production
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '20px',
          }}>
            {[team[3], team[5]].map((member, i) => (
              <TeamMemberCard key={member.name} member={member} lang={l} delay={i * 80} />
            ))}
          </div>
        </div>

        {/* Row 3: Team Creative */}
        <div style={{ marginBottom: '40px' }}>
          <h3 className="text-label" style={{ marginBottom: '24px', color: 'var(--text-secondary)' }}>
            Team Creative
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '20px',
          }}>
            {[team[2], team[4]].map((member, i) => (
              <TeamMemberCard key={member.name} member={member} lang={l} delay={i * 80} />
            ))}
          </div>
        </div>

        {/* Row 4: Team Growth */}
        <div style={{ marginBottom: '40px' }}>
          <h3 className="text-label" style={{ marginBottom: '24px', color: 'var(--text-secondary)' }}>
            Team Growth
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '20px',
          }}>
            {[team[6]].map((member, i) => (
              <TeamMemberCard key={member.name} member={member} lang={l} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" style={{ maxWidth: '1400px', margin: '0 auto' }} />

      {/* Services */}
      <section style={{
        padding: 'clamp(80px, 10vw, 160px) clamp(20px, 4vw, 60px)',
        maxWidth: '1400px',
        margin: '0 auto',
      }}>
        <RevealOnScroll>
          <span className="text-label" style={{ color: 'var(--text-tertiary)', display: 'block', marginBottom: '16px' }}>
            {dict.about.services_label}
          </span>
          <h2 className="text-display-l" style={{ marginBottom: '48px' }}>
            {dict.about.services_title}
          </h2>
        </RevealOnScroll>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1px',
          background: 'var(--border-subtle)',
        }}>
          {[
            { title: dict.about.ip_dev, items: services.ip },
            { title: dict.about.production, items: services.production },
            { title: dict.about.post_production, items: services.post },
          ].map((svc, i) => (
            <RevealOnScroll key={svc.title} delay={i * 150}>
              <div style={{
                background: 'var(--bg-primary)',
                padding: '32px',
              }}>
                <h3 className="text-headline" style={{ fontSize: '18px', marginBottom: '24px', color: 'var(--accent)' }}>
                  {svc.title}
                </h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {svc.items.map((item) => (
                    <li key={item} className="text-caption" style={{ color: 'var(--text-secondary)' }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <div className="section-divider" style={{ maxWidth: '1400px', margin: '0 auto' }} />

      {/* Pipeline */}
      <section style={{
        padding: 'clamp(80px, 10vw, 160px) clamp(20px, 4vw, 60px)',
        maxWidth: '1400px',
        margin: '0 auto',
      }}>
        <RevealOnScroll>
          <span className="text-label" style={{ color: 'var(--text-tertiary)', display: 'block', marginBottom: '16px' }}>
            {dict.about.pipeline_label}
          </span>
          <h2 className="text-display-l" style={{ marginBottom: '48px' }}>
            {dict.about.pipeline_title}
          </h2>
        </RevealOnScroll>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '24px',
        }}>
          {pipeline.map((p, i) => (
            <RevealOnScroll key={p.step} delay={i * 150}>
              <div style={{
                padding: '32px 24px',
                borderLeft: '2px solid var(--border-subtle)',
                transition: 'border-color 0.3s ease',
              }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--accent)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border-subtle)'; }}
              >
                <span className="text-display-m" style={{
                  fontFamily: 'var(--font-display)',
                  color: 'var(--text-tertiary)',
                  display: 'block',
                  marginBottom: '12px',
                }}>
                  {p.step}
                </span>
                <h3 className="text-headline" style={{ fontSize: '18px', marginBottom: '8px' }}>{p.name}</h3>
                <p className="text-caption" style={{ color: 'var(--text-secondary)' }}>{p.desc}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <div className="section-divider" style={{ maxWidth: '1400px', margin: '0 auto' }} />

      {/* Awards & Clients */}
      <section style={{
        padding: 'clamp(80px, 10vw, 120px) clamp(20px, 4vw, 60px)',
        maxWidth: '1400px',
        margin: '0 auto',
      }}>
        <RevealOnScroll>
          <span className="text-label" style={{ color: 'var(--text-tertiary)', display: 'block', marginBottom: '48px', textAlign: 'center' }}>
            {dict.about.awards_label}
          </span>
        </RevealOnScroll>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '32px',
        }}>
          {clientLogos.map((logo, i) => (
            <RevealOnScroll key={logo} delay={i * 60}>
              <div style={{
                padding: '16px 28px',
                opacity: 0.4,
                transition: 'opacity 0.3s ease',
                fontFamily: 'var(--font-body)',
                fontSize: '15px',
                fontWeight: 600,
                letterSpacing: '1px',
                color: 'var(--text-secondary)',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.4'; }}
              >
                {logo}
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>
    </div>
  );
}
