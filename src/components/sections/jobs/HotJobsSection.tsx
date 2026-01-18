'use client';

import React, { useState } from 'react';
import JobCard from '@/components/cards/JobCard';
import { hotJobs } from '@/data/hotJobs';
import { Pagination } from '@/components/ui/Pagination';

const PAGE_SIZE = 4;

const HotJobsSection = () => {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(hotJobs.length / PAGE_SIZE);
  const start = (page - 1) * PAGE_SIZE;
  const jobs = hotJobs.slice(start, start + PAGE_SIZE);

  return (
    <section className="bg-white  py-16">
      <div className="container w-7xl mx-auto space-y-8">
        <h2 className="text-2xl text-blue-700 font-bold text-primary">
          🔥 Hot Jobs
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 3xl:grid-cols-4">
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
          <div className="flex justify-center">
            <Pagination
              currentPage={page}
              totalPages={totalPages}
              onPageChange={setPage}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default HotJobsSection;
