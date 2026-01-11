import React from 'react';

interface CategoryCardProps {
  title: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  icon,
  onClick,
}) => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-2 rounded-lg border p-4 cursor-pointer hover:shadow-lg transition animate-cardLift"
      onClick={onClick}
    >
      {icon && <div className="mb-2 text-3xl">{icon}</div>}
      <span className="text-base font-semibold text-gray-800">{title}</span>
    </div>
  );
};

export default CategoryCard;
