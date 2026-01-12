'use client';
import { useState } from 'react';
import { categories as allCategories } from '@/data/categories';
import CategoryGrid from './CategoryGrid';
import { Pagination } from '@/components/ui/Pagination';
import { Skeleton } from '@/components/ui/Skeleton';
import SectionTitle from '@/components/ui/SectionTitle';

const PAGE_SIZE = 12; // adjust to match your design grid

export default function CategorySection() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(allCategories.length / PAGE_SIZE);
  const paginatedCategories = allCategories.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );
  const [isLoading, setIsLoading] = useState(false);

  const handlePageChange = (page: number) => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentPage(page);
      setIsLoading(false);
    }, 200);
  };

  return (
    <section className="bg-blue-50 rounded-2xl p-5">
      <SectionTitle className="text-blue-700 mb-1">
        Jobs By Category
      </SectionTitle>
      <p className="text-gray-600 mb-4 text-sm">
        Explore opportunities across various sectors
      </p>
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {Array.from({ length: PAGE_SIZE }).map((_, idx) => (
            <Skeleton key={idx} className="h-[72px] rounded-lg" />
          ))}
        </div>
      ) : (
        <CategoryGrid categories={paginatedCategories} />
      )}
      <div className="flex justify-center mt-4">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
}
