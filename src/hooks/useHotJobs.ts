import { useEffect, useState } from 'react';

import { Job } from '@/types/job';

export const useHotJobs = (pageSize: number) => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchJobs = async (page: number) => {
    setLoading(true);
    try {
      const res: any = await getHotJob(page, pageSize);
      if (res?.success) {
        setJobs(res.data.results);
        setTotalPages(Math.ceil(res.data.count / pageSize));
        setPage(page);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs(1);
  }, [pageSize]);

  return {
    jobs,
    loading,
    page,
    totalPages,
    setPage: fetchJobs,
  };
};
