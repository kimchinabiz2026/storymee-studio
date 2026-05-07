'use client';

import { useEffect, useRef, useState, useEffect as useClientEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { Dictionary } from '@/lib/types';

interface Props {
  lang: string;
  dict: Dictionary;
}

export default function HeroSection({ lang, dict }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [windowHeight, setWindowHeight] = useState(800);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollY } = useScroll();
  const overlayOpacity = useTransform(scrollY, [0, windowHeight], [0, 0.85]);
  const blurValue = useTransform(scrollY, [0, windowHeight], ['blur(0px)', 'blur(20px)']);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Try to auto-unmute when the page loads
    const playWithSound = async () => {
      try {
        video.muted = false;
        await video.play();
        setIsMuted(false);
      } catch (err) {
        // Autoplay with sound blocked, fallback to muted
        video.muted = true;
        await video.play();
        setIsMuted(true);
      }
    };

    playWithSound();

    const handleScroll = () => {
      if (!video) return;
      // Fade out audio based on scroll
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
    <section
      id="hero"
      style={{
        position: 'relative',
        height: '100vh',
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Fixed Showreel Video Background */}
      <div style={{ position: 'fixed', inset: 0, zIndex: -2 }}>
        <video
          ref={videoRef}
          autoPlay
          loop
          playsInline
          preload="metadata"
          poster="/assets/logo.jpg"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
          onClick={toggleMute}
          title="Click to toggle sound"
        >
          <source src="/assets/ip-virus.mp4" type="video/mp4" />
        </video>

        {/* Dynamic Scroll Overlay */}
        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'var(--bg-primary)',
            opacity: overlayOpacity,
            filter: blurValue,
            pointerEvents: 'none',
          }}
        />

        {/* Sound Indicator */}
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
      </div>

      {/* Film grain */}
      <div className="film-grain" style={{ position: 'absolute', inset: 0, zIndex: 4, pointerEvents: 'none' }} />

      {/* Content */}
      <div style={{
        position: 'absolute',
        bottom: 'clamp(80px, 15vh, 140px)',
        left: 'clamp(20px, 4vw, 60px)',
        right: 'clamp(20px, 4vw, 60px)',
        zIndex: 5,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flexWrap: 'wrap',
        gap: '24px',
      }}>
        {/* Left - Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.2, ease: [0.65, 0, 0.35, 1] }}
          style={{ flex: 1, textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}
        >
          <h1 className="text-display-xl" style={{ marginBottom: '16px', textTransform: 'none', fontWeight: 400, fontStyle: 'italic' }}>
            {dict.hero.tagline}
          </h1>
          <p className="text-body" style={{ color: 'var(--text-secondary)', maxWidth: '440px', textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>
            {dict.hero.subtitle}
          </p>
        </motion.div>

        {/* Right - Live Counter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.6 }}
          style={{
            display: 'flex',
            gap: 'clamp(16px, 3vw, 40px)',
            alignItems: 'flex-end',
            textShadow: '0 2px 10px rgba(0,0,0,0.8)'
          }}
        >
          {[
            { value: '06', label: dict.stats.ips },
            { value: '27', label: dict.stats.projects },
            { value: '2026', label: dict.stats.est },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: 'right' }}>
              <div className="text-display-m" style={{ fontFamily: 'var(--font-display)', lineHeight: 1 }}>
                {stat.value}
              </div>
              <div className="text-micro" style={{ color: 'var(--text-tertiary)', marginTop: '4px', textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 0.6 }}
        style={{
          position: 'absolute',
          bottom: 'clamp(24px, 4vh, 48px)',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <span className="text-micro" style={{ color: 'var(--text-tertiary)' }}>
          {dict.hero.scroll}
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: '1px',
            height: '24px',
            background: 'linear-gradient(180deg, var(--text-tertiary), transparent)',
          }}
        />
      </motion.div>
    </section>
  );
}
