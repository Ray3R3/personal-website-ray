
import { ReactNode, useState } from 'react';

interface PersonalityBulletProps {
  children: ReactNode;
}

const PersonalityBullet = ({ children }: PersonalityBulletProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative transition-all duration-200 ease-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start gap-4">
        <div className={`
          relative mt-2 w-1.5 h-1.5 rounded-full transition-all duration-200
          ${isHovered ? 'bg-amber-400 scale-125' : 'bg-muted-foreground/40 scale-100'}
        `} />
        
        <div className={`
          flex-1 leading-relaxed transition-all duration-200
          ${isHovered ? 'text-foreground translate-x-1' : 'text-muted-foreground'}
        `}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default PersonalityBullet;
