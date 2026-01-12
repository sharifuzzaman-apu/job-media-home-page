import CategorySection from '@/components/sections/categories/CategorySection';
import GovtJobsSection from '@/components/sections/categories/GovtJobs';

export default function CategoryAndGovtJobsSection() {
  return (
    <div className="min-h-125 bg-white   ">
      <div className="container mx-auto px-[5.22vw] py-10">
        <div className="grid grid-cols-1 gap-8 lg:flex lg:gap-6 lg:flex-row">
          {/* Jobs By Category */}
          <div className="bg-[#e6f2fc]  rounded-2xl shadow-md p-6 flex-1  lg:w-2/3">
            <CategorySection />
          </div>
          {/* Govt Jobs */}
          <div className="bg-[#e6f2fc] rounded-2xl shadow-md p-6 lg:w-1/3 ">
            <GovtJobsSection />
          </div>
        </div>
      </div>
    </div>
  );
}
