
import React, { useEffect, useState } from 'react';

const SmokeEffect = ({ onComplete }: { onComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 5000); // 5 seconds for the smoke effect

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  // Create multiple smoke divs for a fuller effect
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 pointer-events-none">
      {Array.from({ length: 12 }).map((_, i) => (
        <div 
          key={i}
          className="absolute w-60 h-60 rounded-full bg-purple-500/30 animate-smoke"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
};

export default SmokeEffect;
