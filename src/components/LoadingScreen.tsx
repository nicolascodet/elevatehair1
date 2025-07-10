'use client';

import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onLoadingComplete, 500); // Wait for fade out animation
    }, 2500);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="text-center">
        {/* Animated logo */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-gold animate-glow">
            ELEVATE
          </h1>
          <div className="text-lg md:text-xl text-gold-light tracking-widest mt-2">
            HAIR SALON
          </div>
        </div>
        
        {/* Loading animation */}
        <div className="flex justify-center space-x-1">
          <div className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
        
        {/* Loading text */}
        <div className="mt-6 text-gray-400 text-sm tracking-wide">
          PREPARING YOUR EXPERIENCE
        </div>
      </div>
    </div>
  );
}