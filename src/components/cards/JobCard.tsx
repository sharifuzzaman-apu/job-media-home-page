import React from 'react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { MapPin, Briefcase, Users, Send } from 'lucide-react';

const placeholderLogo = '/file.svg';

interface JobMeta {
  vacancies?: number;
  type?: string;
  experience?: string;
}

interface JobCardProps {
  title: string;
  company: string;
  companyLogo?: string;
  location?: string;
  salary?: string;
  meta?: JobMeta;
  onApply?: () => void;
}

const JobCard: React.FC<JobCardProps> = ({
  title,
  company,
  companyLogo,
  location,
  salary,
  meta,
  onApply,
}) => {
  return (
    <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm hover:shadow-lg transition flex flex-col min-h-[340px]">
      {/* Logo */}
      <div className="flex justify-start mb-2"></div>
      {/* Title & Company */}
      <h3 className="text-base font-semibold text-sky-700 leading-tight mb-1">
        {title}
      </h3>
      <p className="text-sm font-medium text-sky-500 mb-2">{company}</p>

      {/* Location */}
      {location && (
        <div className="flex items-center gap-1 text-xs text-gray-500 mb-1">
          <MapPin className="h-3 w-3 text-sky-400" />
          {location}
        </div>
      )}

      {/* Salary */}
      {salary && (
        <div className="mb-2">
          <Badge className="bg-green-50 text-green-600 border border-green-100 px-2 py-0.5 text-xs font-semibold rounded-md">
            {salary}
          </Badge>
        </div>
      )}

      {/*Info*/}
      <div className="grid grid-cols-2 gap-2 text-xs mb-2 mt-4">
        {meta?.vacancies !== undefined && (
          <Badge className="flex items-center gap-1 w-full justify-center rounded-lg bg-blue-50 text-blue-600 font-medium px-0 py-2">
            <Users className="h-4 w-4" />
            <span className="font-semibold">
              {meta.vacancies.toString().padStart(2, '0')}
            </span>
          </Badge>
        )}
        {meta?.type && (
          <Badge className="flex items-center gap-1 w-full justify-center rounded-lg bg-green-50 text-green-600 font-medium px-0 py-2">
            <Briefcase className="h-4 w-4" />
            <span className="font-semibold">{meta.type}</span>
          </Badge>
        )}
        {meta?.experience && (
          <Badge className="flex items-center gap-1 w-full justify-center rounded-lg bg-purple-50 text-purple-600 font-medium px-0 py-2 col-span-1">
            <Briefcase className="h-4 w-4" />
            <span className="font-semibold">{meta.experience}</span>
          </Badge>
        )}
        <Button
          size="sm"
          className="flex items-center gap-2 w-full justify-center bg-sky-400 hover:bg-sky-500 text-white rounded-lg px-0 py-2 shadow-none col-span-1"
          onClick={onApply}
        >
          <Send className="h-4 w-4" /> Apply Now
        </Button>
      </div>
    </div>
  );
};

export default JobCard;
