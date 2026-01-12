'use client';
import { useState } from 'react';
import { govtJobs } from '@/data/govtJobs';
import SectionTitle from '../../ui/SectionTitle';
import { Pagination } from '../../ui/Pagination';
import Card from '../../ui/Card';

const PAGE_SIZE = 7;

export default function GovtJobsSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(govtJobs.length / PAGE_SIZE);
  const pagedJobs = govtJobs.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  return (
    <aside className="bg-sky-50 rounded-2xl p-4 min-h-[300px]">
      <SectionTitle className="text-sky-700 mb-1">Govt Jobs</SectionTitle>
      <p className="text-sm text-gray-600 mb-3">Latest govt positions</p>
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
                {job.company || job.organization}
              </div>
            </div>
          </Card>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </aside>
  );
}
