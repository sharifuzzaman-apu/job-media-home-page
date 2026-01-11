'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from './Navbar';
import MobileMenu from './MobileMenu';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const Header = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-100 z-50">
      <div className="container mx-auto flex items-center h-[60px] justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" aria-label="Home">
          <Image src="/logo.png" alt="logo" width={120} height={45} priority />
        </Link>

        {/* Navbar (desktop) */}
        <Navbar />

        {/* Mobile  */}
        <Button
          className="md:hidden p-2"
          variant="outline"
          size="sm"
          aria-label="Open mobile menu"
          onClick={() => setMobileOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </Button>
      </div>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
};

export default Header;
