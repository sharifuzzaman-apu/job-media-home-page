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
  return (
    <div
      className="relative flex items-center justify-center rounded-2xl overflow-hidden border cursor-pointer hover:shadow-lg transition animate-cardLift"
      onClick={onClick}
    >
      <Image
        src={image || '/city.png'}
        width={700}
        height={320}
        className="w-full h-full object-cover"
        alt={title}
      />
      <div className="absolute bottom-0 left-0 w-full py-6 bg-white/80">
        <h4 className="text-2xl font-bold text-center text-primary">{title}</h4>
      </div>
    </div>
  );
};

export default LocationCard;
