"use client";

import Image from "next/image";
import Link from "next/link";
import {
	ArrowRight,
	Truck,
	Clock,
	Heart,
	Users,
	Award,
	Leaf,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CategoryCard } from "@/components/ui/category-card";
import { ProductCard } from "@/components/ui/product-card";
import { categories, products } from "@/lib/data";

export default function HomePage() {
	const featuredProducts = products.slice(0, 4);

	return (
		<div className="min-h-screen bg-gray-50">
			<Header />

			{/* Hero Section */}
			<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
				<div className="absolute inset-0 z-0">
					<Image
						src="https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg"
						alt="Panier de légumes frais"
						fill
						className="object-cover"
						priority
					/>
					<div className="absolute inset-0 bg-gradient-to-r from-green-900/70 via-green-800/50 to-green-700/30 backdrop-blur-[2px]" />
				</div>

				<div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
					<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
						Du producteur
						<span className="block text-green-300">à votre table</span>
					</h1>
					<p className="text-xl md:text-2xl text-green-100 mb-8 font-light max-w-3xl mx-auto leading-relaxed">
						Découvrez des produits frais, bio et locaux directement chez les
						producteurs. Une alimentation saine pour vous, un soutien direct aux
						agriculteurs.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link href="/catalogue">
							<Button
								size="lg"
								className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300"
							>
								Découvrir les produits
								<ArrowRight className="ml-2 h-5 w-5" />
							</Button>
						</Link>
						<Button
							size="lg"
							variant="outline"
							className="border-2 border-white text-green-700 hover:bg-white hover:text-green-800 px-8 py-4 text-lg font-semibold transition-all duration-300"
						>
							Devenir fournisseur
						</Button>
					</div>
				</div>
			</section>

			{/* Categories Section */}
			<section className="py-20 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							Explorez nos catégories
						</h2>
						<p className="text-lg text-gray-600 max-w-2xl mx-auto">
							Des produits frais et de qualité dans chaque catégorie,
							directement sourcés chez nos producteurs partenaires.
						</p>
					</div>

					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
						{categories.map((category) => (
							<CategoryCard key={category.id} category={category} />
						))}
					</div>
				</div>
			</section>

			{/* Avantages Section */}
			<section className="py-20 bg-green-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							Pourquoi choisir Ndugu App ?
						</h2>
						<p className="text-lg text-gray-600">
							Une plateforme pensée pour simplifier vos achats alimentaires
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						<div className="text-center group">
							<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-300">
								<Truck className="h-8 w-8 text-green-600" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-2">
								Livraison rapide
							</h3>
							<p className="text-gray-600">
								Vos produits frais livrés dans les 24h partout en France
							</p>
						</div>

						<div className="text-center group">
							<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-300">
								<Heart className="h-8 w-8 text-green-600" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-2">
								Produits de qualité
							</h3>
							<p className="text-gray-600">
								Sélection rigoureuse de produits frais, bio et locaux
							</p>
						</div>

						<div className="text-center group">
							<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-300">
								<Users className="h-8 w-8 text-green-600" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-2">
								Soutien aux producteurs
							</h3>
							<p className="text-gray-600">
								Achat direct qui rémunère justement nos agriculteurs
							</p>
						</div>

						<div className="text-center group">
							<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-300">
								<Clock className="h-8 w-8 text-green-600" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-2">
								Simplicité
							</h3>
							<p className="text-gray-600">
								Interface intuitive pour commander en quelques clics
							</p>
						</div>

						<div className="text-center group">
							<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-300">
								<Award className="h-8 w-8 text-green-600" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-2">
								Garantie fraîcheur
							</h3>
							<p className="text-gray-600">
								Produits ultra-frais ou remboursés sous 48h
							</p>
						</div>

						<div className="text-center group">
							<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-300">
								<Leaf className="h-8 w-8 text-green-600" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-2">
								Éco-responsable
							</h3>
							<p className="text-gray-600">
								{`Circuit court qui réduit l'impact environnemental`}
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Produits vedettes */}
			<section className="py-20 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							Nos produits vedettes
						</h2>
						<p className="text-lg text-gray-600">
							Découvrez notre sélection de produits frais et de saison
						</p>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
						{featuredProducts.map((product) => (
							<ProductCard key={product.id} product={product} />
						))}
					</div>

					<div className="text-center mt-12">
						<Link href="/catalogue">
							<Button
								size="lg"
								className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
							>
								Voir tous les produits
								<ArrowRight className="ml-2 h-4 w-4" />
							</Button>
						</Link>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
				<div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
						Rejoignez la communauté Ndugu
					</h2>
					<p className="text-xl text-green-100 mb-8">
						Plus de 10 000 consommateurs font déjà confiance à nos producteurs
						locaux
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button
							size="lg"
							className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 text-lg font-semibold shadow-xl"
						>
							Commencer maintenant
						</Button>
						<Link href="/fournisseurs">
							<Button
								size="lg"
								variant="outline"
								className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg font-semibold"
							>
								Devenir partenaire
							</Button>
						</Link>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
}
