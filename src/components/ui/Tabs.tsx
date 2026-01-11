import React, { useState } from 'react';
import { cn } from '@/lib/cn';
import { Button } from '@/components/ui/Button';

interface Tab {
  label: string;
  value: string;
}

interface TabsProps {
  tabs: Tab[];
  selected?: string;
  onChange?: (value: string) => void;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, selected, onChange }) => {
  const [active, setActive] = useState(selected || tabs[0].value);

  const handleClick = (value: string) => {
    setActive(value);
    if (onChange) onChange(value);
  };

  return (
    <div className="flex space-x-2 border-b border-gray-300">
      {tabs.map((tab) => (
        <Button
          key={tab.value}
          size="sm"
          variant={active === tab.value ? 'default' : 'outline'}
          onClick={() => handleClick(tab.value)}
        >
          {tab.label}
        </Button>
      ))}
    </div>
  );
};
