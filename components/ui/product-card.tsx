'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Star, Plus, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/lib/types';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const getBadgeVariant = (badge: string) => {
    switch (badge) {
      case 'bio':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'local':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'nouveau':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="group relative bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300 overflow-hidden">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1">
          {product.badges.map((badge) => (
            <Badge
              key={badge}
              variant="secondary"
              className={`text-xs font-medium px-2 py-1 ${getBadgeVariant(badge)}`}
            >
              {badge === 'bio' ? 'Bio' : badge === 'local' ? 'Local' : 'Nouveau'}
            </Badge>
          ))}
        </div>

        {/* Quick Add Button */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            size="sm"
            className="bg-white/90 text-green-600 hover:bg-white hover:text-green-700 shadow-lg"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>

        {/* Stock indicator */}
        {product.stock < 10 && (
          <div className="absolute bottom-3 right-3">
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              Stock faible
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-gray-900 text-lg leading-tight group-hover:text-green-600 transition-colors line-clamp-2">
            <Link href={`/produits/${product.id}`}>
              {product.name}
            </Link>
          </h3>
        </div>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2 leading-relaxed">
          {product.description}
        </p>
        
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium text-gray-700 ml-1">
              {product.rating}
            </span>
            <span className="text-xs text-gray-500 ml-1">
              ({product.reviews} avis)
            </span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-green-600">
              {product.price.toFixed(2)}€
            </span>
            <span className="text-sm text-gray-500 ml-1">/ kg</span>
          </div>
          
          <Button 
            className="bg-green-600 hover:bg-green-700 text-white shadow-md hover:shadow-lg transition-all duration-200"
            size="sm"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Ajouter
          </Button>
        </div>
        
        <div className="mt-3 text-xs text-gray-500">
          Par {product.supplier}
        </div>
      </div>
    </div>
  );
}