
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AnimatedBackground = () => {
  const { scrollProgress } = useScrollAnimation();
  
  const gradientOffset = scrollProgress * 100;
  
  return (
    <>
      {/* Animated gradient overlay */}
      <div 
        className="fixed inset-0 opacity-[0.015] pointer-events-none transition-all duration-1000"
        style={{
          background: `linear-gradient(${45 + gradientOffset}deg, 
            hsl(210, 40%, 60%) 0%, 
            hsl(270, 50%, 40%) 25%, 
            hsl(200, 60%, 50%) 50%, 
            hsl(280, 45%, 35%) 75%, 
            hsl(220, 55%, 45%) 100%)`
        }}
      />
      
      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full animate-pulse"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + i * 12}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${3 + i * 0.5}s`,
              transform: `translateY(${Math.sin(scrollProgress * Math.PI + i) * 20}px)`
            }}
          />
        ))}
      </div>
    </>
  );
};

export default AnimatedBackground;
