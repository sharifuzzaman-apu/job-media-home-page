import React from 'react';
import { useTabs } from '@/hooks/useTabs';
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
  const { activeTab, changeTab } = useTabs(
    tabs.map((tab) => tab.value),
    selected as string | undefined,
  );

  const handleClick = (value: string) => {
    changeTab(value);
    if (onChange) onChange(value);
  };

  return (
    <div className="flex space-x-2 border-b border-gray-300">
      {tabs.map((tab) => (
        <Button
          key={tab.value}
          size="sm"
          variant={activeTab === tab.value ? 'default' : 'outline'}
          onClick={() => handleClick(tab.value)}
        >
          {tab.label}
        </Button>
      ))}
    </div>
  );
};
