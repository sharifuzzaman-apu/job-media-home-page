import HeroPage from './hero/page';
import CategoryAndGovtJobsSection from './CategoryAndGovtJobsSection/page';
import JobByLocationClient from './jobsByLocation/page';
export default function HomePage() {
  return (
    <>
      <HeroPage />
      <CategoryAndGovtJobsSection />
      <JobByLocationClient />
    </>
  );
}
