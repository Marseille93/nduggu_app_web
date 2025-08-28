'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Category } from '@/lib/types';

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/catalogue?category=${encodeURIComponent(category.name)}`}>
      <div className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:scale-105">
        <div className="relative h-32 lg:h-40">
          <Image
            src={category.image}
            alt={category.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          
          {/* Category Name */}
          <div className="absolute inset-0 flex items-end justify-center p-4">
            <h3 className="text-white font-semibold text-lg text-center drop-shadow-lg">
              {category.name}
            </h3>
          </div>
        </div>
      </div>
    </Link>
  );
}