import { CategoryCard } from '@/components/cards/CategoryCard';
import type { Category } from '@/types/category';

interface CategoryGridProps {
  categories: Category[];
}

export default function CategoryGrid({ categories }: CategoryGridProps) {
  if (!categories.length)
    return (
      <div className="flex h-40 items-center justify-center">
        <p className="text-lg text-gray-500">No Categories Found</p>
      </div>
    );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
      {categories.map((category) => (
        <CategoryCard
          key={category.id}
          id={category.id}
          name={category.category_name}
          jobsCount={category.circular_count}
          description={category.description}
        />
      ))}
    </div>
  );
}
