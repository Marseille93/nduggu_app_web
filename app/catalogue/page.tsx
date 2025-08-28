"use client";

import { useState, useMemo } from "react";
import { Search, Filter, SlidersHorizontal, Grid3X3, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ProductCard } from "@/components/ui/product-card";
import { products, categories } from "@/lib/data";

export default function CataloguePage() {
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedCategory, setSelectedCategory] = useState("all");
	const [sortBy, setSortBy] = useState("name");
	const [viewMode, setViewMode] = useState("grid");
	const [priceRange, setPriceRange] = useState("all");

	const filteredAndSortedProducts = useMemo(() => {
		let filtered = products;

		// Filter by search query
		if (searchQuery) {
			filtered = filtered.filter(
				(product) =>
					product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
					product.description
						.toLowerCase()
						.includes(searchQuery.toLowerCase()) ||
					product.supplier.toLowerCase().includes(searchQuery.toLowerCase())
			);
		}

		// Filter by category
		if (selectedCategory !== "all") {
			filtered = filtered.filter(
				(product) => product.category === selectedCategory
			);
		}

		// Filter by price range
		if (priceRange !== "all") {
			switch (priceRange) {
				case "low":
					filtered = filtered.filter((product) => product.price < 3);
					break;
				case "medium":
					filtered = filtered.filter(
						(product) => product.price >= 3 && product.price < 6
					);
					break;
				case "high":
					filtered = filtered.filter((product) => product.price >= 6);
					break;
			}
		}

		// Sort products
		switch (sortBy) {
			case "price-asc":
				return filtered.sort((a, b) => a.price - b.price);
			case "price-desc":
				return filtered.sort((a, b) => b.price - a.price);
			case "rating":
				return filtered.sort((a, b) => b.rating - a.rating);
			case "popularity":
				return filtered.sort((a, b) => b.reviews - a.reviews);
			default:
				return filtered.sort((a, b) => a.name.localeCompare(b.name));
		}
	}, [searchQuery, selectedCategory, sortBy, priceRange]);

	return (
		<div className="min-h-screen bg-gray-50">
			<Header />

			{/* Header Section */}
			<div className="bg-white border-b border-gray-200">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
					<div className="text-center mb-8">
						<h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							Catalogue Produits
						</h1>
						<p className="text-lg text-gray-600 max-w-2xl mx-auto">
							Découvrez notre sélection de produits frais, bio et locaux
							directement chez nos producteurs partenaires
						</p>
					</div>

					{/* Filters and Search */}
					<div className="space-y-4">
						{/* Search Bar */}
						<div className="relative max-w-md mx-auto">
							<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
							<Input
								type="text"
								placeholder="Rechercher des produits..."
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
								className="pl-10 h-12 rounded-xl border-gray-200 focus:border-green-300 focus:ring-green-200"
							/>
						</div>

						{/* Filters Row */}
						<div className="flex flex-wrap items-center justify-between gap-4">
							<div className="flex flex-wrap items-center gap-4">
								{/* Category Filter */}
								<Select
									value={selectedCategory}
									onValueChange={setSelectedCategory}
								>
									<SelectTrigger className="w-48 h-10 rounded-lg">
										<SelectValue placeholder="Toutes les catégories" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="all">Toutes les catégories</SelectItem>
										{categories.map((category) => (
											<SelectItem key={category.id} value={category.name}>
												{category.name}
											</SelectItem>
										))}
									</SelectContent>
								</Select>

								{/* Price Range */}
								<Select value={priceRange} onValueChange={setPriceRange}>
									<SelectTrigger className="w-40 h-10 rounded-lg">
										<SelectValue placeholder="Prix" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="all">Tous les prix</SelectItem>
										<SelectItem value="low">Moins de 3€</SelectItem>
										<SelectItem value="medium">3€ - 6€</SelectItem>
										<SelectItem value="high">Plus de 6€</SelectItem>
									</SelectContent>
								</Select>

								{/* Sort */}
								<Select value={sortBy} onValueChange={setSortBy}>
									<SelectTrigger className="w-44 h-10 rounded-lg">
										<SelectValue placeholder="Trier par" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="name">Nom A-Z</SelectItem>
										<SelectItem value="price-asc">Prix croissant</SelectItem>
										<SelectItem value="price-desc">Prix décroissant</SelectItem>
										<SelectItem value="rating">Mieux notés</SelectItem>
										<SelectItem value="popularity">Plus populaires</SelectItem>
									</SelectContent>
								</Select>
							</div>

							{/* View Mode Toggle */}
							<div className="flex items-center gap-2">
								<Button
									variant={viewMode === "grid" ? "default" : "outline"}
									size="sm"
									onClick={() => setViewMode("grid")}
									className="h-10 w-10 p-0"
								>
									<Grid3X3 className="h-4 w-4" />
								</Button>
								<Button
									variant={viewMode === "list" ? "default" : "outline"}
									size="sm"
									onClick={() => setViewMode("list")}
									className="h-10 w-10 p-0"
								>
									<List className="h-4 w-4" />
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Products Grid */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				{/* Active Filters */}
				{(selectedCategory !== "all" ||
					priceRange !== "all" ||
					searchQuery) && (
					<div className="mb-8">
						<div className="flex flex-wrap items-center gap-2">
							<span className="text-sm font-medium text-gray-700">
								Filtres actifs :
							</span>
							{selectedCategory !== "all" && (
								<Badge
									variant="secondary"
									className="bg-green-100 text-green-800"
								>
									{selectedCategory}
									<button
										onClick={() => setSelectedCategory("all")}
										className="ml-2 hover:text-green-900"
									>
										×
									</button>
								</Badge>
							)}
							{priceRange !== "all" && (
								<Badge
									variant="secondary"
									className="bg-blue-100 text-blue-800"
								>
									{priceRange === "low"
										? "Moins de 3€"
										: priceRange === "medium"
										? "3€-6€"
										: "Plus de 6€"}
									<button
										onClick={() => setPriceRange("all")}
										className="ml-2 hover:text-blue-900"
									>
										×
									</button>
								</Badge>
							)}
							{searchQuery && (
								<Badge
									variant="secondary"
									className="bg-purple-100 text-purple-800"
								>
									{/* eslint-disable-next-line react/no-unescaped-entities */}
									{searchQuery}"
									<button
										onClick={() => setSearchQuery("")}
										className="ml-2 hover:text-purple-900"
									>
										×
									</button>
								</Badge>
							)}
						</div>
					</div>
				)}

				{/* Results Count */}
				<div className="mb-8">
					<p className="text-gray-600">
						<span className="font-semibold text-gray-900">
							{filteredAndSortedProducts.length}
						</span>
						{filteredAndSortedProducts.length === 1
							? " produit trouvé"
							: " produits trouvés"}
					</p>
				</div>

				{/* Products Display */}
				{filteredAndSortedProducts.length > 0 ? (
					<div
						className={
							viewMode === "grid"
								? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
								: "space-y-6"
						}
					>
						{filteredAndSortedProducts.map((product) => (
							<ProductCard key={product.id} product={product} />
						))}
					</div>
				) : (
					<div className="text-center py-16">
						<div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
							<Search className="h-8 w-8 text-gray-400" />
						</div>
						<h3 className="text-xl font-semibold text-gray-900 mb-2">
							Aucun produit trouvé
						</h3>
						<p className="text-gray-600 mb-6">
							{`Essayez de modifier vos critères de recherche ou explorez d'autres catégories`}
						</p>
						<Button
							onClick={() => {
								setSearchQuery("");
								setSelectedCategory("all");
								setPriceRange("all");
							}}
						>
							Réinitialiser les filtres
						</Button>
					</div>
				)}
			</div>

			<Footer />
		</div>
	);
}
