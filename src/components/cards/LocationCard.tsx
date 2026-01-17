import React from 'react';
import Image from 'next/image';

interface LocationCardProps {
  title: string;
  image?: string;
  onClick?: () => void;
}

const LocationCard: React.FC<LocationCardProps> = ({
  title,
  image,
  onClick,
}) => {
  const safeImage =
    image?.startsWith('/') || image?.startsWith('http') ? image : '/city.png';

  return (
    <div
      onClick={onClick}
      className="relative h-[220px] cursor-pointer overflow-hidden rounded-2xl border hover:shadow-2xl transition"
    >
      <Image
        src={safeImage}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, 25vw"
        className="object-cover"
        priority={false}
      />

      {/* Overlay */}
      <div className="absolute inset-x-0 bottom-0 bg-black/40 py-4">
        <h4 className="text-xl font-semibold text-center text-white">
          {title}
        </h4>
        <p className="text-xs text-center text-white/80">
          Explore Available Positions
        </p>
      </div>
    </div>
  );
};

export default LocationCard;
