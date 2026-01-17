'use client';

import React from 'react';

export default function SectionLoader() {
  return (
    <div className="container py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="animate-pulse rounded-lg border bg-white p-4">
            {/* Image */}
            <div className="h-40 w-full rounded-md bg-gray-200 mb-4" />

            {/* Title */}
            <div className="h-4 w-3/4 bg-gray-200 rounded mb-2" />

            {/* Subtitle */}
            <div className="h-4 w-1/2 bg-gray-200 rounded mb-4" />

            {/* Meta */}
            <div className="flex gap-2">
              <div className="h-6 w-20 bg-gray-200 rounded" />
              <div className="h-6 w-16 bg-gray-200 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
