'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { categories, products } from '@/lib/data';

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Explorez nos catégories
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des produits frais, bio et locaux soigneusement sélectionnés dans chaque catégorie. 
            Découvrez la richesse de nos terroirs français.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => {
              const categoryProducts = products.filter(p => p.category === category.name);
              
              return (
                <Card key={category.id} className="group border-0 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative h-64">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    
                    {/* Category Info Overlay */}
                    <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                      <h2 className="text-2xl font-bold mb-2">{category.name}</h2>
                      <p className="text-green-100 text-sm">
                        {categoryProducts.length} produit{categoryProducts.length > 1 ? 's' : ''} disponible{categoryProducts.length > 1 ? 's' : ''}
                      </p>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {/* Featured Products Preview */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 mb-3">Produits populaires</h4>
                        <div className="space-y-2">
                          {categoryProducts.slice(0, 3).map((product) => (
                            <div key={product.id} className="flex items-center justify-between text-sm">
                              <span className="text-gray-600">{product.name}</span>
                              <span className="font-semibold text-green-600">{product.price}€</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <Link href={`/catalogue?category=${encodeURIComponent(category.name)}`}>
                        <Button className="w-full bg-green-600 hover:bg-green-700 group">
                          Découvrir {category.name.toLowerCase()}
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              La fraîcheur en chiffres
            </h2>
            <p className="text-lg text-gray-600">
              Notre engagement qualité se mesure jour après jour
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">150+</div>
              <div className="text-sm text-gray-600">Produits disponibles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-sm text-gray-600">Producteurs partenaires</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">24h</div>
              <div className="text-sm text-gray-600">Délai de livraison</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-sm text-gray-600">Clients satisfaits</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}