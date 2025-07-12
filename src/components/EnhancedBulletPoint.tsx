
import { ReactNode } from 'react';

interface EnhancedBulletPointProps {
  children: ReactNode;
  color?: string;
  delay?: number;
}

const EnhancedBulletPoint = ({ 
  children, 
  color = 'blue-400', 
  delay = 0 
}: EnhancedBulletPointProps) => {
  return (
    <div 
      className="group hover:translate-x-3 transition-all duration-300 ease-out"
      style={{ animationDelay: `${delay * 0.1}s` }}
    >
      <div className="flex items-center gap-3">
        <div className={`
          w-1.5 h-1.5 rounded-full transition-all duration-300
          bg-gray-500 group-hover:bg-${color} group-hover:scale-150 group-hover:shadow-lg
          group-hover:shadow-${color}/50
        `} />
        <span className="text-gray-300 text-sm font-light group-hover:text-white transition-colors duration-300">
          {children}
        </span>
      </div>
    </div>
  );
};

export default EnhancedBulletPoint;
