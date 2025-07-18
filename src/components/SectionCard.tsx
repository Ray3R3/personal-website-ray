import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionCardProps {
  children: ReactNode;
  className?: string;
  accent?: 'blue' | 'orange' | 'purple' | 'gold' | 'green';
}

const SectionCard = ({ children, className = '', accent }: SectionCardProps) => {
  const accentColors = {
    blue: 'hover:shadow-blue-500/20 hover:border-blue-500/30',
    orange: 'hover:shadow-orange-500/20 hover:border-orange-500/30',
    purple: 'hover:shadow-purple-500/20 hover:border-purple-500/30',
    gold: 'hover:shadow-yellow-500/20 hover:border-yellow-500/30',
    green: 'hover:shadow-green-500/20 hover:border-green-500/30',
  };

  return (
    <div 
      className={cn(
        'bg-card/20 backdrop-blur-sm border border-border/20 rounded-lg p-8 transition-all duration-500 ease-out',
        'hover:bg-card/30 hover:shadow-xl hover:border-border/40 hover:scale-[1.01] hover:-translate-y-0.5',
        accent && accentColors[accent],
        className
      )}
    >
      {children}
    </div>
  );
};

export default SectionCard;