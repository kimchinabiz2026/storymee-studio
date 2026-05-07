'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import type { Dictionary, IP } from '@/lib/types';
import RevealOnScroll from '@/components/cinematic/RevealOnScroll';

interface Props {
  lang: string;
  dict: Dictionary;
  ip: IP;
}

export default function IPMiniSite({ lang, dict, ip }: Props) {
  const [activeTab, setActiveTab] = useState('world');
  const l = lang as 'vi' | 'en';
  const tabs = ['world', 'cast', 'episodes', ...(ip.licensingEnabled ? ['licensing'] : [])] as const;

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playWithSound = async () => {
      try {
        video.muted = false;
        await video.play();
        setIsMuted(false);
      } catch (err) {
        video.muted = true;
        await video.play();
        setIsMuted(true);
      }
    };

    playWithSound();

    const handleScroll = () => {
      if (!video) return;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const fadeStart = windowHeight * 0.1;
      const fadeEnd = windowHeight * 0.6;
      
      if (scrollY < fadeStart) {
        if (!isMuted) video.volume = 1;
        video.muted = isMuted;
      } else if (scrollY > fadeEnd) {
        video.volume = 0;
      } else {
        const progress = (scrollY - fadeStart) / (fadeEnd - fadeStart);
        if (!isMuted) video.volume = Math.max(0, 1 - progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMuted]);

  const toggleMute = () => {
    if (videoRef.current) {
      const newMutedState = !videoRef.current.muted;
      videoRef.current.muted = newMutedState;
      if (!newMutedState) videoRef.current.volume = 1;
      setIsMuted(newMutedState);
    }
  };

  return (
    <div>
      {/* Hero */}
      <section style={{
        height: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'flex-end',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, cursor: 'pointer' }} onClick={toggleMute} title="Click to toggle sound">
          {ip.videoUrl ? (
            <video
              ref={videoRef}
              autoPlay
              loop
              playsInline
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            >
              <source src={ip.videoUrl} type="video/mp4" />
            </video>
          ) : ip.keyVisual ? (
            <img
              src={ip.keyVisual}
              alt={ip.name.en}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          ) : (
            <div className="video-placeholder" style={{ width: '100%', height: '100%' }}>
              <div className="vp-bg" style={{ background: ip.gradient }} />
            </div>
          )}
        </div>

        {/* Sound Indicator */}
        {ip.videoUrl && (
          <div style={{
            position: 'absolute',
            bottom: 'clamp(80px, 15vh, 140px)',
            right: 'clamp(20px, 4vw, 60px)',
            zIndex: 10,
            background: 'rgba(0,0,0,0.5)',
            padding: '8px 16px',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.1)',
            pointerEvents: 'none'
          }}>
            <div style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: isMuted ? '#ff4444' : '#44ff44',
              boxShadow: `0 0 10px ${isMuted ? '#ff4444' : '#44ff44'}`
            }} />
            <span className="text-micro" style={{ color: '#fff' }}>
              {isMuted ? 'SOUND OFF (CLICK TO UNMUTE)' : 'SOUND ON'}
            </span>
          </div>
        )}

        <div className="film-grain" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />
        <div className="gradient-bottom" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '70%', zIndex: 1 }} />

        <div style={{
          position: 'relative',
          zIndex: 2,
          padding: 'clamp(60px, 8vw, 100px) clamp(20px, 4vw, 60px)',
          width: '100%',
          maxWidth: '1400px',
          margin: '0 auto',
        }}>
          <div className={`badge ${ip.status}`} style={{ marginBottom: '20px' }}>
            {ip.status.toUpperCase()}
          </div>
          <h1 className="text-display-xl" style={{ marginBottom: '12px' }}>
            {ip.name[l]}
          </h1>
          <p className="text-body" style={{
            color: 'var(--text-secondary)',
            fontStyle: 'italic',
            marginBottom: '32px',
            maxWidth: '500px',
          }}>
            {ip.tagline[l]}
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button className="btn-primary">{dict.ip_page.watch_trailer}</button>
            {ip.episodes.length > 0 && (
              <button className="btn-secondary" onClick={() => setActiveTab('episodes')}>
                {dict.ip_page.view_episodes}
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <nav style={{
        position: 'sticky',
        top: '72px',
        zIndex: 10,
        background: 'var(--bg-surface)',
        borderBottom: '1px solid var(--border-subtle)',
        padding: '0 clamp(20px, 4vw, 60px)',
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          gap: '0',
          overflow: 'auto',
        }}>
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="text-label"
              style={{
                padding: '20px 24px',
                background: 'none',
                border: 'none',
                borderBottom: activeTab === tab ? `2px solid var(--accent)` : '2px solid transparent',
                color: activeTab === tab ? 'var(--text-primary)' : 'var(--text-secondary)',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap',
                fontSize: '10px',
              }}
            >
              {dict.ip_page.tabs[tab] || tab}
            </button>
          ))}
        </div>
      </nav>

      {/* Tab Content */}
      <div style={{
        padding: 'clamp(60px, 8vw, 100px) clamp(20px, 4vw, 60px)',
        maxWidth: '1400px',
        margin: '0 auto',
        minHeight: '60vh',
      }}>
        {/* WORLD TAB */}
        {activeTab === 'world' && (
          <RevealOnScroll>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '60px',
            }}>
              <div>
                <h2 className="text-display-m" style={{ marginBottom: '24px' }}>
                  {lang === 'vi' ? 'Thế giới' : 'The World'}
                </h2>
                <p className="text-body" style={{ color: 'var(--text-secondary)', lineHeight: 2 }}>
                  {ip.worldDescription[l]}
                </p>
              </div>
              <div style={{
                aspectRatio: '1/1',
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
              </div>
            </div>
            {/* Gallery Section */}
            {ip.gallery && ip.gallery.length > 0 && (
              <div style={{ marginTop: '80px' }}>
                <h3 className="text-headline" style={{ marginBottom: '32px' }}>
                  {lang === 'vi' ? 'Bối cảnh thế giới' : 'World Environments'}
                </h3>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                  gap: '20px',
                }}>
                  {ip.gallery.map((img, i) => (
                    <div key={i} style={{
                      aspectRatio: '16/9',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-subtle)'
                    }}>
                      <img src={img} alt={`Environment ${i}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </RevealOnScroll>
        )}

        {/* CAST TAB */}
        {activeTab === 'cast' && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '20px',
          }}>
            {ip.characters.map((char, i) => (
              <RevealOnScroll key={char.name.en} delay={i * 100}>
                <div style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  overflow: 'hidden',
                  transition: 'border-color 0.3s ease',
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--border-default)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-subtle)'; }}
                >
                  <div style={{
                    aspectRatio: '3/4',
                    background: char.gradient,
                    position: 'relative',
                  }}>
                    {char.image ? (
                      <img src={char.image} alt={char.name.en} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                      <div style={{
                        position: 'absolute',
                        inset: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '48px',
                        opacity: 0.1,
                        fontFamily: 'var(--font-display)',
                      }}>
                        {char.name[l].charAt(0)}
                      </div>
                    )}
                  </div>
                  <div style={{ padding: '20px' }}>
                    <h3 className="text-headline" style={{ fontSize: '18px', marginBottom: '4px' }}>
                      {char.name[l]}
                    </h3>
                    <span className="text-micro" style={{ color: 'var(--accent)', display: 'block', marginBottom: '12px' }}>
                      {char.role}
                    </span>
                    <p className="text-caption" style={{ color: 'var(--text-secondary)' }}>
                      {char.bio[l]}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        )}

        {/* EPISODES TAB */}
        {activeTab === 'episodes' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--border-subtle)' }}>
            {ip.episodes.length === 0 ? (
              <div style={{ background: 'var(--bg-primary)', padding: '60px', textAlign: 'center' }}>
                <p className="text-body" style={{ color: 'var(--text-secondary)' }}>
                  {lang === 'vi' ? 'Đang phát triển sắp ra mắt!' : 'In development coming soon!'}
                </p>
              </div>
            ) : (
              ip.episodes.map((ep, i) => (
                <RevealOnScroll key={ep.number} delay={i * 100}>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'auto 1fr auto',
                    gap: '24px',
                    alignItems: 'center',
                    background: 'var(--bg-primary)',
                    padding: '24px',
                    transition: 'background 0.3s ease',
                  }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--bg-card)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--bg-primary)'; }}
                  >
                    {/* Thumbnail */}
                    <div style={{
                      width: 'clamp(80px, 12vw, 160px)',
                      aspectRatio: '16/9',
                      background: ep.gradient,
                      flexShrink: 0,
                      position: 'relative',
                      overflow: 'hidden',
                    }}>
                      {ep.videoUrl ? (
                        <video
                          autoPlay
                          muted
                          loop
                          playsInline
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        >
                          <source src={ep.videoUrl} type="video/mp4" />
                        </video>
                      ) : (
                        <div style={{
                          position: 'absolute',
                          inset: 0,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                          <span style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: '24px',
                            opacity: 0.3,
                          }}>
                            {String(ep.number).padStart(2, '0')}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Info */}
                    <div>
                      <span className="text-micro" style={{ color: 'var(--text-tertiary)', display: 'block', marginBottom: '4px' }}>
                        EP {String(ep.number).padStart(2, '0')} · {Math.floor(ep.runtime / 60)} MIN
                      </span>
                      <h3 className="text-headline" style={{ fontSize: '16px', marginBottom: '4px' }}>
                        {ep.title[l]}
                      </h3>
                      <p className="text-caption" style={{ color: 'var(--text-secondary)' }}>
                        {ep.synopsis[l]}
                      </p>
                    </div>

                    {/* Watch button */}
                    {ep.videoUrl ? (
                      <a href={ep.videoUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: '10px 20px', fontSize: '10px', whiteSpace: 'nowrap', textDecoration: 'none' }}>
                        WATCH
                      </a>
                    ) : (
                      <button className="btn-secondary" style={{ padding: '10px 20px', fontSize: '10px', whiteSpace: 'nowrap', opacity: 0.5, cursor: 'not-allowed' }}>
                        SOON
                      </button>
                    )}
                  </div>
                </RevealOnScroll>
              ))
            )}
          </div>
        )}

        {/* LICENSING TAB */}
        {activeTab === 'licensing' && ip.licensingEnabled && (
          <div id="partnership">
            <RevealOnScroll>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '60px',
                marginBottom: '60px',
              }}>
                <div>
                  <h2 className="text-display-m" style={{ marginBottom: '24px' }}>
                    {lang === 'vi' ? 'Hợp tác & Licensing' : 'Partnership & Licensing'}
                  </h2>
                  <p className="text-body" style={{ color: 'var(--text-secondary)', lineHeight: 2, marginBottom: '32px' }}>
                    {lang === 'vi'
                      ? 'Chúng tôi đang tìm kiếm đối tác cho co-production, licensing, và distribution. Liên hệ để nhận pitch deck và thảo luận cơ hội hợp tác.'
                      : 'We are seeking partners for co-production, licensing, and distribution. Contact us to receive the pitch deck and discuss collaboration opportunities.'
                    }
                  </p>
                  <button className="btn-primary">
                    {lang === 'vi' ? 'Tải Pitch Deck (PDF)' : 'Download Pitch Deck (PDF)'}
                  </button>
                </div>

                {/* Traction Stats */}
                <div style={{
                  background: 'var(--bg-card)',
                  padding: '40px',
                  border: '1px solid var(--border-subtle)',
                }}>
                  <h3 className="text-label" style={{ color: 'var(--text-tertiary)', marginBottom: '32px' }}>
                    TRACTION
                  </h3>
                  {Object.entries(ip.tractionStats).map(([key, value]) => (
                    <div key={key} style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: '16px 0',
                      borderBottom: '1px solid var(--border-subtle)',
                    }}>
                      <span className="text-caption" style={{ color: 'var(--text-secondary)', textTransform: 'capitalize' }}>
                        {key.replace(/([A-Z])/g, ' $1')}
                      </span>
                      <span className="text-headline" style={{ fontSize: '18px', color: 'var(--accent)' }}>
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>

            {/* Contact Form for Licensing */}
            <RevealOnScroll delay={200}>
              <div style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                padding: 'clamp(32px, 4vw, 60px)',
                maxWidth: '700px',
              }}>
                <h3 className="text-headline" style={{ marginBottom: '24px' }}>
                  {lang === 'vi' ? 'Liên hệ Licensing' : 'Licensing Inquiry'}
                </h3>
                <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <input placeholder={lang === 'vi' ? 'Công ty' : 'Company'} style={inputStyle} />
                  <input placeholder="Email" type="email" style={inputStyle} />
                  <select style={inputStyle}>
                    <option>{lang === 'vi' ? 'Loại hợp tác' : 'Type of partnership'}</option>
                    <option>Co-production</option>
                    <option>Licensing</option>
                    <option>Distribution</option>
                    <option>{lang === 'vi' ? 'Khác' : 'Other'}</option>
                  </select>
                  <input placeholder={lang === 'vi' ? 'Lãnh thổ quan tâm' : 'Territory of interest'} style={inputStyle} />
                  <textarea placeholder={lang === 'vi' ? 'Tin nhắn' : 'Message'} rows={4} style={{ ...inputStyle, resize: 'vertical' }} />
                  <button type="button" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
                    {lang === 'vi' ? 'Gửi' : 'Send Inquiry'}
                  </button>
                </form>
              </div>
            </RevealOnScroll>
          </div>
        )}
      </div>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  background: 'var(--bg-card)',
  border: '1px solid var(--border-subtle)',
  color: 'var(--text-primary)',
  padding: '12px 16px',
  fontFamily: 'var(--font-body)',
  fontSize: '14px',
  outline: 'none',
  width: '100%',
  transition: 'border-color 0.3s ease',
};
