
import { ReactNode } from 'react';

interface KineticTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const KineticText = ({ children, className = '', delay = 0 }: KineticTextProps) => {
  return (
    <span 
      className={`
        inline-block animate-pulse hover:animate-none
        hover:scale-105 hover:text-blue-300 
        transition-all duration-700 ease-out cursor-default
        ${className}
      `}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: '4s'
      }}
    >
      {children}
    </span>
  );
};

export default KineticText;
