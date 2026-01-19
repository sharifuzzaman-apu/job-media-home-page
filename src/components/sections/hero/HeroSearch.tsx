'use client';
import { useState } from 'react';
import { useDebouncedValue } from '@/hooks/useDebouncedValue';
import { useRouter } from 'next/navigation';
import {
  Search,
  ChevronRight,
  Code2,
  ClipboardList,
  BarChart3,
  TrendingUp,
  LifeBuoy,
  Palette,
  Boxes,
  PiggyBank,
  UserSearch,
} from 'lucide-react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

const categories = [
  { label: 'Software Engineering', query: 'software engineer', icon: Code2 },
  { label: 'Product', query: 'product manager', icon: ClipboardList },
  { label: 'Analytics', query: 'data analyst', icon: BarChart3 },
  { label: 'Growth Marketing', query: 'growth marketing', icon: TrendingUp },
  { label: 'Support', query: 'customer success', icon: LifeBuoy },
  { label: 'Creative', query: 'creative designer', icon: Palette },
  { label: 'Operations & Logistics', query: 'operations manager', icon: Boxes },
  { label: 'Finance', query: 'accounting', icon: PiggyBank },
  { label: 'Recruiting', query: 'talent acquisition', icon: UserSearch },
];

export default function HeroSearch() {
  const [keyword, setKeyword] = useState('');
  const debouncedKeyword = useDebouncedValue(keyword, 300);
  const router = useRouter();

  return (
    <>
      {/* Search */}
      <div className="max-w-xl lg:max-w-2xl mb-4">
        <form
          className="relative flex items-center bg-white rounded-4xl shadow-lg px-4 py-3 w-full"
          onSubmit={(e) => {
            e.preventDefault();
            if (debouncedKeyword.trim()) {
              router.push(`/search/${encodeURIComponent(debouncedKeyword)}`);
            }
          }}
        >
          <Search className="text-primary w-5 h-5 mr-2" />
          <Input
            id="search input"
            className="w-full border-none bg-transparent p-0 shadow-none focus:ring-0 text-gray-900 placeholder-gray-400 h-10 pr-32"
            placeholder="Search by Job Title, Company or Location"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <Button
            type="submit"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#18b6f6] text-white font-bold px-6 py-2 rounded-full shadow-lg flex items-center"
            disabled={!keyword.trim()}
          >
            Search Jobs <ChevronRight className="ml-1 w-4 h-4" />
          </Button>
        </form>
      </div>
      {/* Tags */}
      <div>
        <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
          Popular Search Keywords
        </h3>
        <div className="flex flex-wrap gap-2">
          {categories.map(({ label, query, icon: Icon }) => (
            <Badge
              key={label}
              as="button"
              onClick={() =>
                router.push(`/search/${encodeURIComponent(query)}`)
              }
              className="gap-2 cursor-pointer text-gray-700 hover:text-gray-900 px-3 py-1"
              variant="secondary"
            >
              <Icon className="w-4 h-4" />
              {label}
            </Badge>
          ))}
        </div>
      </div>
    </>
  );
}
