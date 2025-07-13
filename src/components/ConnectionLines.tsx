
import { useEffect, useRef, useState } from 'react';

interface ConnectionPoint {
  id: string;
  x: number;
  y: number;
  active: boolean;
}

const ConnectionLines = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [connections, setConnections] = useState<ConnectionPoint[]>([]);
  const [activeConnections, setActiveConnections] = useState<string[]>([]);

  useEffect(() => {
    const updateConnections = () => {
      const sections = document.querySelectorAll('[data-section]');
      const newConnections: ConnectionPoint[] = [];

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        newConnections.push({
          id: section.getAttribute('data-section') || '',
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
          active: isVisible
        });
      });

      setConnections(newConnections);
      setActiveConnections(
        newConnections.filter(conn => conn.active).map(conn => conn.id)
      );
    };

    updateConnections();
    window.addEventListener('scroll', updateConnections);
    window.addEventListener('resize', updateConnections);

    return () => {
      window.removeEventListener('scroll', updateConnections);
      window.removeEventListener('resize', updateConnections);
    };
  }, []);

  const renderConnections = () => {
    const lines: JSX.Element[] = [];
    
    for (let i = 0; i < connections.length - 1; i++) {
      const current = connections[i];
      const next = connections[i + 1];
      
      if (activeConnections.includes(current.id) && activeConnections.includes(next.id)) {
        const pathId = `connection-${current.id}-${next.id}`;
        
        lines.push(
          <g key={pathId}>
            <defs>
              <linearGradient id={`gradient-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgb(156, 163, 175)" stopOpacity="0.1" />
                <stop offset="50%" stopColor="rgb(156, 163, 175)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="rgb(156, 163, 175)" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <path
              d={`M ${current.x} ${current.y} Q ${(current.x + next.x) / 2} ${current.y - 50} ${next.x} ${next.y}`}
              stroke={`url(#gradient-${i})`}
              strokeWidth="1"
              fill="none"
              className="animate-fade-in"
              style={{
                animationDelay: `${i * 0.2}s`,
                animationDuration: '1s'
              }}
            />
            <circle
              cx={current.x}
              cy={current.y}
              r="2"
              fill="rgb(156, 163, 175)"
              opacity="0.5"
              className="animate-scale-in"
              style={{
                animationDelay: `${i * 0.1}s`
              }}
            />
          </g>
        );
      }
    }
    
    return lines;
  };

  return (
    <svg
      ref={svgRef}
      className="fixed inset-0 pointer-events-none z-10"
      style={{ width: '100vw', height: '100vh' }}
    >
      {renderConnections()}
    </svg>
  );
};

export default ConnectionLines;
