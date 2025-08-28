"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Star, Package, Users, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function SuppliersPage() {
	const mockSuppliers = [
		{
			id: "1",
			name: "Ferme Bio du Soleil",
			description:
				"Producteur de légumes bio depuis 15 ans, spécialisé dans les tomates et légumes de saison",
			image:
				"https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg",
			location: "Provence, France",
			rating: 4.9,
			reviews: 125,
			products: 23,
			specialties: ["Tomates", "Courgettes", "Aubergines"],
			badges: ["Certifié Bio", "Label Rouge", "Producteur Local"],
		},
		{
			id: "2",
			name: "Verger des Collines",
			description:
				"Arboriculteur traditionnel cultivant pommes, poires et fruits à noyaux avec passion",
			image: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg",
			location: "Normandie, France",
			rating: 4.8,
			reviews: 89,
			products: 18,
			specialties: ["Pommes", "Poires", "Prunes"],
			badges: ["HVE", "Producteur Local"],
		},
		{
			id: "3",
			name: "Ferme Laitière Martin",
			description:
				"Élevage de vaches laitières en pâturage libre, production de lait et fromages fermiers",
			image: "https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg",
			location: "Auvergne, France",
			rating: 4.9,
			reviews: 156,
			products: 12,
			specialties: ["Lait frais", "Fromages", "Beurre"],
			badges: ["Bien-être Animal", "AOC"],
		},
		{
			id: "4",
			name: "Graines du Monde Bio",
			description:
				"Spécialiste des céréales et légumineuses biologiques, importation éthique et locale",
			image: "https://images.pexels.com/photos/793771/pexels-photo-793771.jpeg",
			location: "Bretagne, France",
			rating: 4.7,
			reviews: 67,
			products: 31,
			specialties: ["Quinoa", "Lentilles", "Avoine"],
			badges: ["Commerce Équitable", "Certifié Bio"],
		},
		{
			id: "5",
			name: "Tropical Fair Trade",
			description:
				"Importateur de fruits tropicaux issus du commerce équitable et de l'agriculture durable",
			image:
				"https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg",
			location: "Paris, France",
			rating: 4.6,
			reviews: 94,
			products: 15,
			specialties: ["Bananes", "Mangues", "Ananas"],
			badges: ["Commerce Équitable", "Rainforest Alliance"],
		},
		{
			id: "6",
			name: "Maraîcher Local",
			description:
				"Maraîchage diversifié en agriculture raisonnée, légumes de saison et circuit court",
			image: "https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg",
			location: "Île-de-France, France",
			rating: 4.8,
			reviews: 78,
			products: 28,
			specialties: ["Carottes", "Radis", "Épinards"],
			badges: ["Circuit Court", "Agriculture Raisonnée"],
		},
	];

	return (
		<div className="min-h-screen bg-gray-50">
			<Header />

			{/* Hero Section */}
			<section className="bg-white py-16 border-b border-gray-100">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
							Nos fournisseurs partenaires
						</h1>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
							{`Découvrez les producteurs passionnés qui cultivent pour vous des produits d'exception. 
              Chaque partenaire est sélectionné pour sa qualité et son engagement.`}
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link href="/inscription">
								<Button
									size="lg"
									className="bg-green-600 hover:bg-green-700 px-8"
								>
									Devenir fournisseur
									<ArrowRight className="ml-2 h-5 w-5" />
								</Button>
							</Link>
							<Button size="lg" variant="outline" className="px-8">
								En savoir plus
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Suppliers Grid */}
			<section className="py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{mockSuppliers.map((supplier) => (
							<Card
								key={supplier.id}
								className="group border-0 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
							>
								{/* Supplier Image */}
								<div className="relative h-48">
									<Image
										src={supplier.image}
										alt={supplier.name}
										fill
										className="object-cover group-hover:scale-105 transition-transform duration-500"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

									{/* Location Badge */}
									<div className="absolute top-4 left-4">
										<div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
											<MapPin className="h-3 w-3 text-green-600" />
											<span className="text-xs font-medium text-gray-700">
												{supplier.location.split(",")[0]}
											</span>
										</div>
									</div>

									{/* Rating */}
									<div className="absolute bottom-4 right-4">
										<div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
											<Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
											<span className="text-xs font-bold text-gray-700">
												{supplier.rating}
											</span>
										</div>
									</div>
								</div>

								<CardContent className="p-6 space-y-4">
									{/* Supplier Info */}
									<div>
										<h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
											{supplier.name}
										</h3>
										<p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
											{supplier.description}
										</p>
									</div>

									{/* Stats */}
									<div className="flex items-center justify-between text-sm">
										<div className="flex items-center space-x-1">
											<Package className="h-4 w-4 text-gray-400" />
											<span className="text-gray-600">
												{supplier.products} produits
											</span>
										</div>
										<div className="flex items-center space-x-1">
											<Users className="h-4 w-4 text-gray-400" />
											<span className="text-gray-600">
												{supplier.reviews} avis
											</span>
										</div>
									</div>

									{/* Specialties */}
									<div>
										<p className="text-xs font-medium text-gray-700 mb-2">
											Spécialités :
										</p>
										<div className="flex flex-wrap gap-1">
											{supplier.specialties.map((specialty, index) => (
												<span
													key={index}
													className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full"
												>
													{specialty}
												</span>
											))}
										</div>
									</div>

									{/* Badges */}
									<div className="space-y-2">
										<div className="flex flex-wrap gap-1">
											{supplier.badges.map((badge, index) => (
												<Badge
													key={index}
													variant="outline"
													className="text-xs border-green-200 text-green-700"
												>
													<Award className="h-3 w-3 mr-1" />
													{badge}
												</Badge>
											))}
										</div>
									</div>

									{/* View Products Button */}
									<Link
										href={`/catalogue?supplier=${encodeURIComponent(
											supplier.name
										)}`}
									>
										<Button className="w-full bg-green-600 hover:bg-green-700 group">
											Voir les produits
											<ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
										</Button>
									</Link>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Call to Action */}
			<section className="py-16 bg-green-600">
				<div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
						Vous êtes producteur ?
					</h2>
					<p className="text-xl text-green-100 mb-8">
						Rejoignez notre réseau de fournisseurs et vendez vos produits
						directement aux consommateurs
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link href="/inscription">
							<Button
								size="lg"
								className="bg-white text-green-600 hover:bg-green-50 px-8 shadow-xl"
							>
								Devenir partenaire
							</Button>
						</Link>
						<Button
							size="lg"
							variant="outline"
							className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8"
						>
							En savoir plus
						</Button>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
}
