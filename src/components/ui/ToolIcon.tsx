import React from 'react';

interface ToolIconProps {
  component: React.ElementType;
  className?: string;
}

export const ToolIcon: React.FC<ToolIconProps> = ({ component: Component, className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      <Component className="size-10 fill-[url('#tech-icon-gradient')]" />
      <svg className="size-0 absolute">
        <defs>
          <linearGradient id="tech-icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(110 231 183)" />
            <stop offset="100%" stopColor="rgb(56 189 248)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
