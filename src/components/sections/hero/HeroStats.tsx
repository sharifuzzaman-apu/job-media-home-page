'use client';

import { useEffect, useRef, useState } from 'react';
import { Briefcase, Landmark, UserCog, Building2 } from 'lucide-react';
import Card from '@/components/ui/Card';

const stats = [
  {
    value: 642,
    label: 'Active Jobs',
    description: 'Fresh listings curated and verified.',
    icon: Briefcase,
    color: 'text-sky-600',
    bg: 'bg-sky-50',
  },
  {
    value: 525,
    label: 'Government Jobs',
    description: 'Public sector opportunities updated daily.',
    icon: Landmark,
    color: 'text-rose-600',
    bg: 'bg-rose-50',
  },
  {
    value: 3200,
    label: 'Talent Hired',
    description: 'Professionals placed successfully.',
    icon: UserCog,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    value: 500,
    label: 'Hiring Companies',
    description: 'Companies actively hiring.',
    icon: Building2,
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
  },
];

function AnimatedNumber({ value }: { value: number }) {
  const [count, setCount] = useState(0);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const duration = 1200;
    const start = performance.now();

    const animate = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        raf.current = requestAnimationFrame(animate);
      }
    };

    raf.current = requestAnimationFrame(animate);
    return () => raf.current && cancelAnimationFrame(raf.current);
  }, [value]);

  return <span>{count}</span>;
}

export default function HeroStats() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {stats.map(({ value, label, description, icon: Icon, color, bg }) => (
        <Card key={label}>
          <div className="flex items-center gap-3 mb-2">
            <span
              className={`flex h-10 w-10 items-center justify-center rounded-full ${bg}`}
            >
              <Icon className={`h-5 w-5 ${color}`} />
            </span>

            <span className={`text-2xl font-bold ${color}`}>
              <AnimatedNumber value={value} />+
            </span>
          </div>

          <h4 className="font-semibold text-gray-800">{label}</h4>
          <p className="text-sm text-gray-600">{description}</p>
        </Card>
      ))}
    </div>
  );
}
