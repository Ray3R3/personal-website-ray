
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface EditorialCardProps {
  children: ReactNode;
  className?: string;
}

const EditorialCard = ({ children, className = '' }: EditorialCardProps) => {
  return (
    <div 
      className={cn(
        'bg-card border border-border rounded-lg p-8 transition-all duration-300 ease-out hover:border-amber-400/30 hover:bg-card/80',
        className
      )}
    >
      {children}
    </div>
  );
};

export default EditorialCard;
