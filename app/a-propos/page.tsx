"use client";

import Image from "next/image";
import Link from "next/link";
import {
	Heart,
	Users,
	Leaf,
	Award,
	ArrowRight,
	Target,
	Eye,
	Handshake,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function AboutPage() {
	const values = [
		{
			icon: Heart,
			title: "Passion",
			description:
				"Nous croyons en l'agriculture passionnée et respectueuse de l'environnement",
		},
		{
			icon: Handshake,
			title: "Équité",
			description:
				"Une rémunération juste pour les producteurs et des prix transparents",
		},
		{
			icon: Leaf,
			title: "Durabilité",
			description:
				"Circuits courts pour réduire l'empreinte carbone et soutenir l'économie locale",
		},
		{
			icon: Award,
			title: "Qualité",
			description:
				"Sélection rigoureuse et contrôle qualité pour garantir l'excellence",
		},
	];

	const team = [
		{
			name: "Alexandra Dubois",
			role: "Fondatrice & CEO",
			image:
				"https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg",
			description:
				"Passionnée d'agriculture durable, Alexandra a créé Ndugu App pour révolutionner la distribution alimentaire.",
		},
		{
			name: "Thomas Martin",
			role: "CTO",
			image:
				"https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg",
			description:
				"Expert en technologie, Thomas développe les solutions digitales qui connectent producteurs et consommateurs.",
		},
		{
			name: "Sophie Laurent",
			role: "Responsable Qualité",
			image:
				"https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg",
			description:
				"Ingénieure agronome, Sophie garantit la qualité de nos produits et accompagne nos partenaires.",
		},
	];

	return (
		<div className="min-h-screen bg-gray-50">
			<Header />

			{/* Hero Section */}
			<section className="relative py-20 bg-white overflow-hidden">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div>
							<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
								Une mission :
								<span className="block text-green-600">nourrir sainement</span>
							</h1>
							<p className="text-xl text-gray-600 mb-8 leading-relaxed">
								Ndugu App connecte directement les producteurs locaux aux
								consommateurs, garantissant des produits frais, bio et
								équitables pour tous.
							</p>
							<div className="flex flex-col sm:flex-row gap-4">
								<Link href="/catalogue">
									<Button
										size="lg"
										className="bg-green-600 hover:bg-green-700 px-8"
									>
										Découvrir nos produits
										<ArrowRight className="ml-2 h-5 w-5" />
									</Button>
								</Link>
								<Link href="/fournisseurs">
									<Button size="lg" variant="outline" className="px-8">
										Nos fournisseurs
									</Button>
								</Link>
							</div>
						</div>

						<div className="relative">
							<div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
								<Image
									src="https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg"
									alt="Agriculture locale"
									fill
									className="object-cover"
								/>
							</div>

							{/* Floating Stats Cards */}
							<div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4">
								<div className="text-center">
									<div className="text-2xl font-bold text-green-600">50+</div>
									<div className="text-sm text-gray-600">Producteurs</div>
								</div>
							</div>

							<div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-4">
								<div className="text-center">
									<div className="text-2xl font-bold text-blue-600">1500+</div>
									<div className="text-sm text-gray-600">Clients</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Mission & Vision */}
			<section className="py-16 bg-green-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						<Card className="border-0 shadow-lg">
							<CardContent className="p-8">
								<div className="flex items-center space-x-3 mb-6">
									<div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
										<Target className="h-6 w-6 text-green-600" />
									</div>
									<h2 className="text-2xl font-bold text-gray-900">
										Notre mission
									</h2>
								</div>
								<p className="text-gray-600 leading-relaxed">
									{`Créer un pont direct entre les producteurs passionnés et les consommateurs soucieux 
                  de leur alimentation. Nous facilitons l'accès à des produits frais, bio et locaux 
                  tout en garantissant une rémunération équitable aux agriculteurs.`}
								</p>
							</CardContent>
						</Card>

						<Card className="border-0 shadow-lg">
							<CardContent className="p-8">
								<div className="flex items-center space-x-3 mb-6">
									<div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
										<Eye className="h-6 w-6 text-blue-600" />
									</div>
									<h2 className="text-2xl font-bold text-gray-900">
										Notre vision
									</h2>
								</div>
								<p className="text-gray-600 leading-relaxed">
									{`Devenir la référence du commerce alimentaire responsable en Europe. Nous imaginons 
                  un monde où chaque achat alimentaire soutient l'agriculture locale et contribue 
                  à un système alimentaire plus durable et équitable.`}
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Values */}
			<section className="py-16 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							Nos valeurs
						</h2>
						<p className="text-lg text-gray-600">
							Les principes qui guident chacune de nos actions
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{values.map((value, index) => (
							<div key={index} className="text-center group">
								<div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors duration-300">
									<value.icon className="h-10 w-10 text-green-600" />
								</div>
								<h3 className="text-xl font-semibold text-gray-900 mb-3">
									{value.title}
								</h3>
								<p className="text-gray-600 leading-relaxed">
									{value.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Team */}
			<section className="py-16 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							Notre équipe
						</h2>
						<p className="text-lg text-gray-600">
							Les personnes passionnées qui portent le projet Ndugu App
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{team.map((member, index) => (
							<Card
								key={index}
								className="border-0 shadow-sm hover:shadow-xl transition-all duration-300"
							>
								<CardContent className="p-8 text-center">
									<div className="relative w-32 h-32 mx-auto mb-6">
										<Image
											src={member.image}
											alt={member.name}
											fill
											className="object-cover rounded-full"
										/>
									</div>
									<h3 className="text-xl font-bold text-gray-900 mb-1">
										{member.name}
									</h3>
									<p className="text-green-600 font-medium mb-4">
										{member.role}
									</p>
									<p className="text-gray-600 text-sm leading-relaxed">
										{member.description}
									</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Stats Section */}
			<section className="py-16 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							Ndugu App en chiffres
						</h2>
						<p className="text-lg text-gray-600">
							{`L'impact concret de notre engagement`}
						</p>
					</div>

					<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
						<div className="text-center">
							<div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">
								50+
							</div>
							<div className="text-gray-600">Producteurs partenaires</div>
						</div>
						<div className="text-center">
							<div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
								1,500+
							</div>
							<div className="text-gray-600">Clients satisfaits</div>
						</div>
						<div className="text-center">
							<div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">
								150+
							</div>
							<div className="text-gray-600">Produits disponibles</div>
						</div>
						<div className="text-center">
							<div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">
								98%
							</div>
							<div className="text-gray-600">Taux de satisfaction</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-16 bg-gradient-to-r from-green-600 to-green-700">
				<div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
						{`Prêt à rejoindre l'aventure ?`}
					</h2>
					<p className="text-xl text-green-100 mb-8">
						{`Que vous soyez consommateur ou producteur, devenez acteur d'une alimentation plus responsable`}
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link href="/inscription">
							<Button
								size="lg"
								className="bg-white text-green-600 hover:bg-green-50 px-8 shadow-xl"
							>
								Rejoindre Ndugu App
							</Button>
						</Link>
						<Link href="/contact">
							<Button
								size="lg"
								variant="outline"
								className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8"
							>
								Nous contacter
							</Button>
						</Link>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
}
