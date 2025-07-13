
import { ReactNode, useState } from 'react';

interface SystemCardProps {
  children: ReactNode;
  className?: string;
  dataSection?: string;
  category?: 'primary' | 'secondary' | 'tertiary';
}

const SystemCard = ({ 
  children, 
  className = '', 
  dataSection,
  category = 'primary' 
}: SystemCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const categoryStyles = {
    primary: 'border-l-blue-400/30',
    secondary: 'border-l-orange-400/30', 
    tertiary: 'border-l-purple-400/30'
  };

  return (
    <div 
      className={`
        relative border border-gray-800/50 bg-gray-900/20 rounded-sm
        border-l-2 ${categoryStyles[category]}
        transition-all duration-300 ease-out
        ${isHovered ? 'border-gray-700/70 bg-gray-900/30 transform translate-x-1' : ''}
        ${className}
      `}
      data-section={dataSection}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Subtle connection indicator */}
      <div className={`
        absolute -left-1 top-4 w-2 h-2 rounded-full transition-all duration-300
        ${isHovered ? 'bg-gray-400 scale-150' : 'bg-gray-600 scale-100'}
      `} />
      
      {children}
    </div>
  );
};

export default SystemCard;
