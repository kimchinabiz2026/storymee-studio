'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function IntroAnimation() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Only show once per session
    if (typeof window === 'undefined') return;
    
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;
    
    const seen = sessionStorage.getItem('intro-seen');
    if (seen) return;

    setShow(true);
    const timer = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem('intro-seen', 'true');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="intro-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
        >
          <motion.div
            className="logo-reveal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.65, 0, 0.35, 1] }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
              <img
                src="/assets/logo.jpg"
                alt="StoryMee"
                style={{
                  height: '80px',
                  width: 'auto',
                  borderRadius: '12px',
                  marginBottom: '8px'
                }}
              />
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 4vw, 42px)' }}>STORYMEE</span>
              <span style={{
                fontFamily: 'var(--font-body)',
                fontSize: '10px',
                letterSpacing: '4px',
                textTransform: 'uppercase',
                color: 'var(--text-secondary)',
                marginTop: '4px'
              }}>
                ANIMATION STUDIO · IP CREATOR
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
