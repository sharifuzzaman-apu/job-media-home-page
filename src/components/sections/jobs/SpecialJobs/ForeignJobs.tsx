'use client';

import React, { useState } from 'react';
import JobCard from '@/components/cards/JobCard';
import { foreignJobs } from '@/data/foreignJobs';
import { Pagination } from '@/components/ui/Pagination';

const PAGE_SIZE = 8;

const ForeignJobs = () => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(foreignJobs.length / PAGE_SIZE);
  const start = (page - 1) * PAGE_SIZE;
  const jobs = foreignJobs.slice(start, start + PAGE_SIZE);

  return (
    <div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {jobs.map((job) => (
          <JobCard
            key={job.id}
            title={job.title}
            company={job.company.name}
            companyLogo={job.company.logo}
            location={job.location}
            salary={job.salary}
            meta={{
              vacancies: job.vacancies,
              type: job.type,
              experience: job.experience,
            }}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-6 flex justify-center">
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </div>
      )}
    </div>
  );
};

export default ForeignJobs;
