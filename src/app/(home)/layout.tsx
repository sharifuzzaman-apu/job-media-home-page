import HeaderPage from './header/page';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderPage />
      <main>{children}</main>
    </>
  );
}
