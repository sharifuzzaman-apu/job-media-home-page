import Link from 'next/link';
import { NAV_LINKS } from './nav.config';

const Navbar = () => (
  <nav className="hidden md:flex flex-1 justify-center gap-8">
    {NAV_LINKS.map((link) => (
      <HeaderNavLink key={link.label} {...link} />
    ))}
  </nav>
);

function HeaderNavLink({ href, label, icon: Icon, external }: any) {
  return (
    <Link
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="flex items-center gap-1 px-2 py-1 font-semibold text-gray-700 hover:text-primary transition-colors"
    >
      {label}
      {external && <ExternalLinkIcon />}
    </Link>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      className="ml-1 inline-block w-4 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export default Navbar;
