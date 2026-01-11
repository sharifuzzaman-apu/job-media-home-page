import { NAV_LINKS } from './nav.config';
import Link from 'next/link';
import { X } from 'lucide-react';

// If you want, you can use your own ui/Button here for ✖ close button

const MobileMenu = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  if (!open) return null;

  return (
    <nav className="fixed inset-0 z-50 bg-white flex flex-col px-6 py-8">
      <button
        className="self-end mb-6"
        onClick={onClose}
        aria-label="Close menu"
      >
        <X className="w-7 h-7" />
      </button>
      <NavLink href="/" label="Home" />
      {NAV_LINKS.map((link) => (
        <NavLink key={link.label} {...link} />
      ))}
    </nav>
  );
};

function NavLink({ href, label, icon: Icon, external }: any) {
  return (
    <Link
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="flex items-center gap-1 px-4 py-3 font-semibold text-lg text-gray-700 hover:text-primary"
      onClick={(e) => {
        if (external) {
        }
      }}
    >
      {Icon && <Icon className="w-5 h-5" />}
      {label}
    </Link>
  );
}

export default MobileMenu;
