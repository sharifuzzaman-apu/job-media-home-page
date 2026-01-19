import { useState, useEffect } from 'react';
import { useFetch } from './useFetch';
import { Job } from '@/types/job';

export const useHotJobs = (pageSize: number) => {
  const [page, setPage] = useState(1);
  const url = `/api/hot-jobs?page=${page}&pageSize=${pageSize}`;
  const { data, loading, error } = useFetch<any>(url);

  const jobs: Job[] = data?.results || [];
  const totalPages = data ? Math.ceil(data.count / pageSize) : 1;

  return {
    jobs,
    loading,
    error,
    page,
    totalPages,
    setPage,
  };
};
