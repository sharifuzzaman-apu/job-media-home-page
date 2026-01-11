import { cn } from '@/lib/cn';
import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children, className, ...props }) => (
  <div
    className={cn(
      'rounded-2xl border bg-white/80 p-6 shadow transition-all hover:-translate-y-1',
      className
    )}
    {...props}
  >
    {children}
  </div>
);

export default Card;
