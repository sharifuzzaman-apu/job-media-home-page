import { cn } from '@/lib/cn';
import React from 'react';

interface SectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  className,
  ...props
}) => (
  <h2
    className={cn('text-2xl font-bold leading-tight mb-2', className)}
    {...props}
  >
    {children}
  </h2>
);

export default SectionTitle;
