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
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function HomePage() {
	const featuredProducts = products.slice(0, 4);
	const team = [
		{
			name: "Idriss Ahmed HAMOUD",
			role: "Fondateur & CEO",
			image:
				"https://media.licdn.com/dms/image/v2/D4E03AQHCfgcCAs6dnQ/profile-displayphoto-crop_800_800/B4EZifyyYYHoAU-/0/1755027548590?e=1759363200&v=beta&t=o2IbDopjbOaL9f7GeolxIdKbgrcUHCiRjWZR1W24iak",
			description:
				"Passionnée d'agriculture durable, Idriss a créé Ndugu App pour révolutionner la distribution alimentaire.",
		},
		{
			name: "Bakary",
			role: "Co-Fondateur & CTO",
			image:
				"https://images.pexels.com/photos/3778876/pexels-photo-377887.jpeg",
			description:
				"Expert en Informatique, Bakary développe les solutions digitales qui connectent producteurs et consommateurs.",
		},
		{
			name: "Abdoulaye MBAYE",
			role: "Développeur Informatique",
			image:
				"https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg",
			description:
				"Passionné d'informatique, Abdoulaye fait partie de l'équipe qui se charge du développemnt du projet Ndugu App.",
		},
		{
			name: "Seydina Ibrahima DIENG",
			role: "Développeur Informatique",
			image:
				"https://media.licdn.com/dms/image/v2/D4E03AQE-XpuQOytbFA/profile-displayphoto-shrink_800_800/B4EZRVW2nuGwAc-/0/1736598843227?e=1759363200&v=beta&t=gBrxKRWaf2GMWNjZs4w_n7OQ_W2e99_uKEZHdb0tj58",
			description:
				"Passionné d'informatique, Abdoulaye fait partie de l'équipe qui se charge du développemnt du projet Ndugu App.",
		},
	];

	return (
		<div className="min-h-screen bg-gray-50">
			<Header />

			{/* Hero Section */}
			<section
				id="Accueil"
				className="relative min-h-screen flex items-center justify-center overflow-hidden"
			>
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

			{/* Missions et Valeurs */}
			<section
				id="Missions"
				className="relative py-20 bg-white overflow-hidden"
			>
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

			{/* Avantages Section */}
			<section id="Why" className="py-20 bg-green-50">
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

			{/* Mockup phone presentation Ndugu App mobile */}
			<section className="justify-center py-20 bg-white flex flex-col md:flex-row items-center gap-10 overflow-hidden">
				{/* Mockup phone */}
				<motion.div
					className="mockup-phone border-primary"
					initial={{ x: -300, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ duration: 1, ease: "easeOut" }}
					viewport={{ once: true }}
				>
					<div className="mockup-phone-camera"></div>
					<div className="mockup-phone-display">
						<img alt="Ndugu App mobile" src="Ndugu app.png" />
					</div>
				</motion.div>

				{/* Texte animé */}
				<motion.div
					className="max-w-lg text-center md:text-left"
					initial={{ x: 300, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
					viewport={{ once: true }}
				>
					<h2 className="text-3xl md:text-5xl font-bold text-green-600">
						Ndugu App – La nouvelle façon d’acheter responsable
					</h2>
					<p className="mt-4 text-lg text-gray-700">
						Commandez vos produits frais en quelques clics. Une application
						intuitive qui vous connecte directement aux producteurs locaux, pour
						manger sainement tout en soutenant l’agriculture de proximité.
					</p>
				</motion.div>
			</section>

			{/* Team */}
			<section id="Equipe" className="py-16 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							Notre équipe
						</h2>
						<p className="text-lg text-gray-600">
							Les personnes passionnées qui portent le projet Ndugu App
						</p>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-8">
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
			<section
				id="Join"
				className="py-16 bg-gradient-to-r from-green-600 to-green-700"
			>
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
