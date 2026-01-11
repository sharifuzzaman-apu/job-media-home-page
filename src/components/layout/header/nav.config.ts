import {
  Home as HomeIcon,
  Briefcase,
  Building2,
  ExternalLink,
} from 'lucide-react';

export const NAV_LINKS = [
  {
    label: 'Home',
    href: '/',
    icon: HomeIcon,
  },
  {
    label: 'Browse Jobs',
    href: '/home/jobs',
    icon: Briefcase,
  },
  {
    label: 'Govt. Jobs',
    href: '/home/govt-jobs',
    icon: Building2,
  },
  {
    label: 'Employer Panel',
    href: 'https://provider.jobmedia.com.bd/',
    icon: ExternalLink,
    external: true,
  },
];
