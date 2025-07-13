
import { ReactNode, useState } from 'react';

interface PatternBulletPointProps {
  children: ReactNode;
  category?: 'primary' | 'secondary' | 'tertiary';
  delay?: number;
  connectionId?: string;
}

const PatternBulletPoint = ({ 
  children, 
  category = 'primary',
  delay = 0,
  connectionId
}: PatternBulletPointProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const categoryColors = {
    primary: 'blue-400',
    secondary: 'orange-400',
    tertiary: 'purple-400'
  };

  const color = categoryColors[category];

  return (
    <div 
      className="group relative transition-all duration-200 ease-out"
      style={{ animationDelay: `${delay * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-connection={connectionId}
    >
      <div className="flex items-start gap-4">
        {/* Connection node */}
        <div className={`
          relative mt-2 w-1 h-1 rounded-full transition-all duration-200
          ${isHovered ? `bg-${color} scale-150 shadow-lg shadow-${color}/50` : 'bg-gray-500 scale-100'}
        `}>
          {/* Connection line indicator */}
          <div className={`
            absolute left-full top-1/2 -translate-y-1/2 h-px transition-all duration-300
            ${isHovered ? `w-8 bg-gradient-to-r from-${color} to-transparent opacity-60` : 'w-0'}
          `} />
        </div>
        
        <div className={`
          flex-1 text-gray-300 text-sm leading-relaxed transition-all duration-200
          ${isHovered ? 'text-gray-100 translate-x-2' : ''}
        `}>
          {children}
        </div>
      </div>
      
      {/* Subtle pattern indicator on hover */}
      {isHovered && (
        <div className="absolute -left-8 top-0 w-1 h-full bg-gradient-to-b from-transparent via-gray-600 to-transparent opacity-30" />
      )}
    </div>
  );
};

export default PatternBulletPoint;
