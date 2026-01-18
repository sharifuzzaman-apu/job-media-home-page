import HeroPage from './hero/page';
import CategoryAndGovtJobsSection from './CategoryAndGovtJobsSection/page';
import JobByLocationClient from './jobsByLocation/page';
import HotJobsSection from './hotJobs/page';
import RecentJobsSection from './recentJobs/page';
import SpecialJobsTabs from './specialJobs/page';
import ContactPage from './contact/page';

export default function HomePage() {
  return (
    <>
      <HeroPage />
      <CategoryAndGovtJobsSection />
      <JobByLocationClient />
      <HotJobsSection />
      <RecentJobsSection />
      <SpecialJobsTabs />
      <ContactPage />
    </>
  );
}
