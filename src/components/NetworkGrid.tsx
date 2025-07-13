
import { useEffect, useRef, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const NetworkGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollProgress } = useScrollAnimation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const gridSize = 60;
      const dotSize = 1;
      const connectionDistance = 120;
      
      // Draw grid dots
      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          const distanceToMouse = Math.sqrt(
            Math.pow(x - mousePosition.x, 2) + Math.pow(y - mousePosition.y, 2)
          );
          
          const opacity = Math.max(0.1, Math.min(0.4, 1 - distanceToMouse / 200));
          const scrollInfluence = scrollProgress * 0.3;
          
          ctx.fillStyle = `rgba(156, 163, 175, ${opacity + scrollInfluence})`;
          ctx.beginPath();
          ctx.arc(x, y, dotSize, 0, Math.PI * 2);
          ctx.fill();
          
          // Draw occasional connection lines
          if (distanceToMouse < connectionDistance && Math.random() > 0.95) {
            const nextX = x + gridSize;
            const nextY = y + gridSize;
            
            if (nextX < canvas.width && nextY < canvas.height) {
              ctx.strokeStyle = `rgba(156, 163, 175, ${opacity * 0.3})`;
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(x, y);
              ctx.lineTo(nextX, y);
              ctx.stroke();
              
              ctx.beginPath();
              ctx.moveTo(x, y);
              ctx.lineTo(x, nextY);
              ctx.stroke();
            }
          }
        }
      }
    };

    const animate = () => {
      drawGrid();
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [mousePosition, scrollProgress]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-20 z-0"
      style={{ mixBlendMode: 'multiply' }}
    />
  );
};

export default NetworkGrid;
