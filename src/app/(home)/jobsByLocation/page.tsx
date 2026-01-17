'use client';

import React from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import LocationCard from '@/components/cards/LocationCard';
import { locations } from '@/data/location';

export default function JobsByLocationSection() {
  return (
    <section className="py-24 bg-gradient-to-r from-[#4EF1C8] to-[#1BC3E7]">
      <div className="container w-full max-w-7xl mx-auto ">
        {/* Title */}
        <SectionTitle className="text-white text-center mb-14">
          Jobs By Location
        </SectionTitle>

        {/* Locations Grid */}
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {locations.map((location) => (
            <LocationCard
              key={location.id}
              id={location.id}
              title={location.name}
              image={location.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
