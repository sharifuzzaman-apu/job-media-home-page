export interface Company {
  name: string;
  logo: string;
}

export interface RecentJob {
  id: number;
  title: string;
  company: Company;
  location: string;
  salary?: string;
  vacancies?: number;
  type?: string;
  experience?: string;
}

export const recentJobs: RecentJob[] = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: { name: 'TechBangla', logo: '/logos/techbangla.png' },
    location: 'Dhaka, Bangladesh',
    salary: '৳50,000 - 70,000',
    vacancies: 3,
    type: 'Full-time',
    experience: '2+ years',
  },
  {
    id: 2,
    title: 'Backend Developer',
    company: { name: 'CodeCrafters', logo: '/logos/codecrafters.png' },
    location: 'Chittagong, Bangladesh',
    salary: '৳55,000 - 75,000',
    vacancies: 2,
    type: 'Full-time',
    experience: '3+ years',
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    company: { name: 'DesignPro', logo: '/logos/designpro.png' },
    location: 'Dhaka, Bangladesh',
    salary: '৳40,000 - 60,000',
    vacancies: 1,
    type: 'Contract',
    experience: '2+ years',
  },
  {
    id: 4,
    title: 'Mobile App Developer',
    company: { name: 'AppWorks', logo: '/logos/appworks.png' },
    location: 'Sylhet, Bangladesh',
    salary: '৳45,000 - 65,000',
    vacancies: 2,
    type: 'Full-time',
    experience: '1+ years',
  },
  {
    id: 5,
    title: 'Data Analyst',
    company: { name: 'DataSolve', logo: '/logos/datasolve.png' },
    location: 'Dhaka, Bangladesh',
    salary: '৳35,000 - 50,000',
    vacancies: 3,
    type: 'Part-time',
    experience: '1+ years',
  },
  {
    id: 6,
    title: 'DevOps Engineer',
    company: { name: 'CloudBangla', logo: '/logos/cloudbangla.png' },
    location: 'Khulna, Bangladesh',
    salary: '৳60,000 - 80,000',
    vacancies: 1,
    type: 'Full-time',
    experience: '3+ years',
  },
  {
    id: 7,
    title: 'QA Engineer',
    company: { name: 'Testify', logo: '/logos/testify.png' },
    location: 'Dhaka, Bangladesh',
    salary: '৳35,000 - 50,000',
    vacancies: 2,
    type: 'Full-time',
    experience: '2+ years',
  },
  {
    id: 8,
    title: 'Product Manager',
    company: { name: 'InnovateBD', logo: '/logos/innovatebd.png' },
    location: 'Chittagong, Bangladesh',
    salary: '৳70,000 - 90,000',
    vacancies: 1,
    type: 'Full-time',
    experience: '5+ years',
  },
];
