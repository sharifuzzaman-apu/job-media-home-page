import React from 'react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

interface JobCardProps {
  title: string;
  company: string;
  location?: string;
  salary?: string;
  onApply?: () => void;
}

const JobCard: React.FC<JobCardProps> = ({
  title,
  company,
  location,
  salary,
  onApply,
}) => {
  return (
    <div className="flex flex-col gap-3 rounded-lg border p-4 hover:shadow-lg transition animate-cardLift">
      <h3 className="text-lg font-bold text-primary">{title}</h3>
      <span className="text-sm text-gray-700">{company}</span>
      {location && <span className="text-xs text-gray-500">{location}</span>}
      {salary && <Badge variant="secondary">{salary}</Badge>}
      <Button variant="default" size="md" className="mt-2" onClick={onApply}>
        Apply Now
      </Button>
    </div>
  );
};

export default JobCard;
