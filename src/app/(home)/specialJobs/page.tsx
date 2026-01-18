'use client';

import React, { useState } from 'react';
import PrivateJobs from '@/components/sections/jobs/SpecialJobs/PrivateJobs';
import GovtJobs from '@/components/sections/jobs/SpecialJobs/GovtJobs';
import ForeignJobs from '@/components/sections/jobs/SpecialJobs/ForeignJobs';

const SpecialJobsTabs = () => {
  const [activeTab, setActiveTab] = useState<
    'private' | 'government' | 'foreign'
  >('private');

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto w-7xl">
        <div className="mx-auto mb-10 text-center max-w-2xl">
          <h2 className="text-2xl font-bold text-blue-700 text-primary mb-6">
            Special Jobs
          </h2>

          {/* Tabs */}
          <div className="inline-flex rounded border border-gray-300 mb-8">
            <button
              className={`px-6 py-2 first:rounded-l last:rounded-r cursor-pointer border-r last:border-r-0 ${
                activeTab === 'private'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white hover:bg-gray-100 text-gray-700'
              }`}
              onClick={() => setActiveTab('private')}
            >
              Private Jobs
            </button>
            <button
              className={`px-6 py-2 first:rounded-l last:rounded-r cursor-pointer border-r last:border-r-0 ${
                activeTab === 'government'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white hover:bg-gray-100 text-gray-700'
              }`}
              onClick={() => setActiveTab('government')}
            >
              Government Jobs
            </button>
            <button
              className={`px-6 py-2 first:rounded-l last:rounded-r cursor-pointer border-r last:border-r-0 ${
                activeTab === 'foreign'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white hover:bg-gray-100 text-gray-700'
              }`}
              onClick={() => setActiveTab('foreign')}
            >
              Foreign Jobs
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === 'private' && <PrivateJobs />}
          {activeTab === 'government' && <GovtJobs />}
          {activeTab === 'foreign' && <ForeignJobs />}
        </div>
      </div>
    </section>
  );
};

export default SpecialJobsTabs;
