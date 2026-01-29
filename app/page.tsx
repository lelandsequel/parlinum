'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function IntroPage() {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [fadeOut, setFadeOut] = useState(false);
  const [showSkip, setShowSkip] = useState(false);
  const [showLogo, setShowLogo] = useState(true);
  const [videoStarted, setVideoStarted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => window.innerWidth < 768;
    setIsMobile(checkMobile());
    
    // Skip intro on mobile - go straight to home
    if (checkMobile()) {
      router.replace('/home');
      return;
    }

    // Show skip button after 2 seconds
    const skipTimer = setTimeout(() => setShowSkip(true), 2000);
    return () => clearTimeout(skipTimer);
  }, [router]);

  const handleVideoPlay = () => {
    setVideoStarted(true);
    setTimeout(() => setShowLogo(false), 1500);
  };

  const handleVideoEnd = () => {
    setFadeOut(true);
    setTimeout(() => router.push('/home'), 800);
  };

  const handleSkip = () => {
    setFadeOut(true);
    setTimeout(() => router.push('/home'), 400);
  };

  const handleClick = () => {
    if (showSkip) {
      handleSkip();
    }
  };

  // Don't render anything on mobile (will redirect)
  if (isMobile) {
    return (
      <div className="fixed inset-0 bg-[#0a0f1a] flex items-center justify-center">
        <div className="text-white/50 text-sm">Loading...</div>
      </div>
    );
  }

  return (
    <div 
      className={`fixed inset-0 bg-black z-50 transition-opacity duration-700 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
      onClick={handleClick}
    >
      {/* Full-screen video */}
      <div className="w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          onPlay={handleVideoPlay}
          onEnded={handleVideoEnd}
          className="w-full h-full object-cover"
        >
          <source src="/intro.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Logo/Text overlay - fades out when video starts */}
      {showLogo && (
        <div className={`absolute inset-0 flex flex-col items-center justify-center pointer-events-none bg-black transition-opacity duration-1000 ${videoStarted ? 'opacity-0' : 'opacity-100'}`}>
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold tracking-wider text-white animate-fade-in">
              PARLINUM
            </h1>
            <p className="text-lg md:text-xl text-white/70 mt-4 tracking-widest uppercase animate-fade-in-delayed">
              Washington, DC
            </p>
          </div>
        </div>
      )}

      {/* Skip button */}
      {showSkip && (
        <button
          onClick={handleSkip}
          className="absolute bottom-8 right-8 text-white/50 hover:text-white text-sm uppercase tracking-widest transition-colors pointer-events-auto"
        >
          Skip →
        </button>
      )}

      {/* Progress indicator */}
      <div className="absolute bottom-8 left-8 text-white/30 text-xs uppercase tracking-widest">
        Click anywhere to continue
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-delayed {
          0% { opacity: 0; transform: translateY(10px); }
          50% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .animate-fade-in-delayed {
          animation: fade-in-delayed 1.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
