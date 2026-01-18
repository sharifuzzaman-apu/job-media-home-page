'use client';

import React from 'react';
import JobCard from '@/components/cards/JobCard';
import { recentJobs } from '@/data/recentJobs';

const RecentJobsSection = () => {
  const jobs = recentJobs;

  return (
    <section className="bg-white py-16">
      <div className="container max-w-7xl mx-auto space-y-8">
        <h2 className="text-2xl text-blue-700 font-bold text-primary">
          Recent Jobs
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
              onApply={() => alert(`Apply clicked for ${job.title}`)}
            />
          ))}
        </div>

        <div className="text-center mt-6">
          <a
            href="/jobs"
            className="text-primary font-semibold hover:underline cursor-pointer"
          >
            Browse All
          </a>
        </div>
      </div>
    </section>
  );
};

export default RecentJobsSection;
