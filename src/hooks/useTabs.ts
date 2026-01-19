import { useState } from 'react';

export function useTabs<T extends string>(tabs: T[], initialTab?: T) {
  const [activeTab, setActiveTab] = useState<T>(initialTab || tabs[0]);
  const changeTab = (tab: T) => setActiveTab(tab);
  return { activeTab, changeTab };
}
