import { Wallet, Sprout, Paintbrush, Briefcase } from 'lucide-react';

export const CATEGORY_ICONS: Record<string, JSX.Element> = {
  'Accounting & Finance': <Wallet className="h-5 w-5" />,
  'Agriculture & Agro-based': <Sprout className="h-5 w-5" />,
  'Arts, Culture & Entertainment': <Paintbrush className="h-5 w-5" />,
};

export const DEFAULT_CATEGORY_ICON = <Briefcase className="h-5 w-5" />;
