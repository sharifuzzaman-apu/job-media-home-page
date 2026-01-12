import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Briefcase } from 'lucide-react';

interface CategoryCardProps {
  id: number;
  name: string;
  jobsCount: number;
  description?: string;
}

export function CategoryCard({
  id,
  name,
  jobsCount,
  description,
}: CategoryCardProps) {
  return (
    <Link
      href={`/jobs?category=${id}&name=${name}`}
      className="group flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-3 transition hover:shadow-md"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-gray-600">
        {/* Replace with dedicated icon logic as needed */}
        <Briefcase className="h-5 w-5" />
      </div>
      <div>
        <p className="text-base font-medium text-gray-900">{name}</p>
        <Badge variant="secondary" className="mt-1">
          {jobsCount} {jobsCount === 1 ? 'Job' : 'Jobs'} Available
        </Badge>
      </div>
    </Link>
  );
}
