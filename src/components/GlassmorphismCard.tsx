
import { ReactNode } from 'react';

interface GlassmorphismCardProps {
  children: ReactNode;
  className?: string;
}

const GlassmorphismCard = ({ children, className = '' }: GlassmorphismCardProps) => {
  return (
    <div className={`
      backdrop-blur-sm bg-white/[0.02] border border-white/[0.05] rounded-lg
      shadow-[0_8px_32px_rgba(255,255,255,0.02)] 
      hover:bg-white/[0.03] hover:border-white/[0.08] hover:shadow-[0_12px_40px_rgba(255,255,255,0.03)]
      transition-all duration-500 ease-out
      ${className}
    `}>
      {children}
    </div>
  );
};

export default GlassmorphismCard;
