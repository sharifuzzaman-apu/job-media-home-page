import HeaderPage from './header/page';
import FooterPage from './footer/page';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderPage />
      <main>{children}</main>
      <FooterPage />
    </>
  );
}
