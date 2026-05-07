'use client';

import { useEffect, useRef, useState } from 'react';

interface ProjectHeroVideoProps {
  videoUrl: string;
  thumbnail: string;
  gradient: string;
  title: string;
}

export default function ProjectHeroVideo({ videoUrl, thumbnail, gradient, title }: ProjectHeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Try to auto-unmute when the page loads (user interaction might have happened)
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
      // Calculate how far we've scrolled
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // If we scrolled past 30% of the screen, start fading out volume
      // At 70% of the screen, volume should be 0 and it should mute
      const fadeStart = windowHeight * 0.1;
      const fadeEnd = windowHeight * 0.6;
      
      if (scrollY < fadeStart) {
        if (!isMuted) video.volume = 1;
        video.muted = isMuted; // Keep user preference or block state
      } else if (scrollY > fadeEnd) {
        video.volume = 0;
      } else {
        const progress = (scrollY - fadeStart) / (fadeEnd - fadeStart);
        if (!isMuted) video.volume = Math.max(0, 1 - progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMuted]);

  // Click to toggle mute manually if browser blocked it
  const toggleMute = () => {
    if (videoRef.current) {
      const newMutedState = !videoRef.current.muted;
      videoRef.current.muted = newMutedState;
      if (!newMutedState) videoRef.current.volume = 1;
      setIsMuted(newMutedState);
    }
  };

  return (
    <div style={{ position: 'absolute', inset: 0, cursor: 'pointer' }} onClick={toggleMute} title="Click to toggle sound">
      {videoUrl ? (
        <video
          ref={videoRef}
          autoPlay
          loop
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      ) : thumbnail && thumbnail !== '/placeholder.jpg' ? (
        <img
          src={thumbnail}
          alt={title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      ) : (
        <div className="video-placeholder" style={{ width: '100%', height: '100%' }}>
          <div className="vp-bg" style={{ background: gradient }} />
        </div>
      )}
      
      {/* Sound Indicator */}
      {videoUrl && (
        <div style={{
          position: 'absolute',
          bottom: '120px',
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
    </div>
  );
}
