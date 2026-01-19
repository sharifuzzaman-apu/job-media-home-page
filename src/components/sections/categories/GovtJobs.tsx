'use client';

import { usePagination } from '@/hooks/usePagination';
import { govtJobs } from '@/data/govtJobs';
import SectionTitle from '../../ui/SectionTitle';
import { Pagination } from '../../ui/Pagination';
import Card from '../../ui/Card';

const PAGE_SIZE = 7;

export default function GovtJobsSection() {
  const {
    currentPage,
    setCurrentPage,
    totalPages,
    paginatedData: pagedJobs,
  } = usePagination(govtJobs, PAGE_SIZE);

  return (
    <aside className="bg-sky-50 rounded-2xl p-4 min-h-[300px]">
      {/* Header */}
      <SectionTitle className="text-sky-700 mb-1">Govt Jobs</SectionTitle>
      <p className="text-sm text-gray-600 mb-3">Latest govt positions</p>

      {/* Job */}
      <div className="flex flex-col gap-2">
        {pagedJobs.map((job) => (
          <Card
            key={job.id}
            className="flex items-start gap-3 px-3 py-2 rounded-md border bg-white"
          >
            <img
              src="/flag.png"
              alt="BD Govt"
              className="w-8 h-8 rounded-full mt-1"
              width={32}
              height={32}
            />
            <div>
              <div className="font-semibold text-gray-800 text-sm">
                {job.title}
              </div>
              <div className="text-xs text-gray-500">
                {typeof job.company === 'string'
                  ? job.company
                  : job.company?.name || job.organization}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-end">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      )}
    </aside>
  );
}
