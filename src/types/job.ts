export interface Job {
  id: string;
  title: string;
  company: {
    name: string;
    logo?: string;
  };
  location: string;
  salary: string;
  vacancies: number;
  experience: string;
  type: 'Full Time' | 'Part Time' | 'Contract';
}
