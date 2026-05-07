'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import type { Dictionary } from '@/lib/types';

interface Props {
  lang: string;
  dict: Dictionary;
}

export default function Header({ lang, dict }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('sound-pref');
      if (saved === 'true') setSoundOn(true);
    }
  }, []);

  const toggleSound = () => {
    const next = !soundOn;
    setSoundOn(next);
    localStorage.setItem('sound-pref', String(next));
  };

  const otherLang = lang === 'vi' ? 'en' : 'vi';
  const navItems = [
    { label: dict.nav.work, href: `/${lang}/work` },
    { label: dict.nav.ips, href: `/${lang}/ips` },
    { label: dict.nav.about, href: `/${lang}/about` },
    { label: dict.nav.press, href: `/${lang}/press` },
    { label: dict.nav.contact, href: `/${lang}/contact` },
  ];

  return (
    <>
      <header
        id="site-header"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: '0 clamp(20px, 4vw, 60px)',
          height: '72px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'background 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease',
          background: scrolled ? 'rgba(18, 18, 20, 0.9)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
        }}
      >
        {/* Logo */}
        <Link href={`/${lang}`} aria-label="Home" style={{ display: 'flex', alignItems: 'center', gap: '10px', zIndex: 101 }}>
          <img
            src="/assets/logo.jpg"
            alt="StoryMee"
            style={{
              height: '36px',
              width: 'auto',
              borderRadius: '6px',
              objectFit: 'contain',
            }}
          />
          <span className="text-label" style={{ letterSpacing: '2px', fontSize: '12px', fontWeight: 600 }}>STORYMEE</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-label"
              style={{
                color: 'var(--text-secondary)',
                transition: 'color 0.3s ease',
                fontSize: '10px',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', zIndex: 101 }}>
          {/* Language Toggle */}
          <Link
            href={`/${otherLang}`}
            className="text-label"
            style={{
              color: 'var(--text-secondary)',
              fontSize: '10px',
              padding: '6px 10px',
              border: '1px solid var(--border-subtle)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-default)';
              e.currentTarget.style.color = 'var(--text-primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-subtle)';
              e.currentTarget.style.color = 'var(--text-secondary)';
            }}
          >
            {otherLang.toUpperCase()}
          </Link>

          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            aria-label={soundOn ? dict.hero.sound_on : dict.hero.sound_off}
            className="hide-mobile"
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-secondary)',
              padding: '6px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '10px',
              fontFamily: 'var(--font-body)',
              fontWeight: 500,
              letterSpacing: '2px',
              textTransform: 'uppercase' as const,
              transition: 'color 0.3s ease',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M11 5L6 9H2v6h4l5 4V5z" />
              {soundOn ? (
                <>
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                </>
              ) : (
                <path d="M23 9l-6 6M17 9l6 6" />
              )}
            </svg>
          </button>

          {/* Mobile Hamburger */}
          <button
            className="hide-desktop"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-primary)',
              padding: '8px',
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
            }}
          >
            <span style={{
              width: '24px',
              height: '1.5px',
              background: 'currentColor',
              transition: 'transform 0.3s ease',
              transform: menuOpen ? 'rotate(45deg) translateY(6.5px)' : 'none',
            }} />
            <span style={{
              width: '24px',
              height: '1.5px',
              background: 'currentColor',
              transition: 'opacity 0.3s ease',
              opacity: menuOpen ? 0 : 1,
            }} />
            <span style={{
              width: '24px',
              height: '1.5px',
              background: 'currentColor',
              transition: 'transform 0.3s ease',
              transform: menuOpen ? 'rotate(-45deg) translateY(-6.5px)' : 'none',
            }} />
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 99,
              background: 'var(--bg-primary)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '32px',
            }}
          >
            {navItems.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '32px',
                    color: 'var(--text-primary)',
                  }}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
