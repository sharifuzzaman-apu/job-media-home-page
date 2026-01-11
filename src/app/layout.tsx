import '@/app/globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Job Portal',
  description: 'Find your dream job',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
