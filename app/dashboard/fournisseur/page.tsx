"use client";

import { useState } from "react";
import {
	Plus,
	TrendingUp,
	Package,
	Users,
	Euro,
	Calendar,
	MoreHorizontal,
	Edit,
	Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Header } from "@/components/layout/header";
import { products } from "@/lib/data";
import { Footer } from "@/components/layout/footer";
import Image from "next/image";
import AddProduct from "@/components/AddProduct";

export default function SupplierDashboard() {
	const [selectedPeriod, setSelectedPeriod] = useState("month");

	// Mock data for supplier
	const supplierProducts = products.slice(0, 4);
	const mockStats = {
		totalRevenue: 2450.5,
		totalOrders: 68,
		averageOrderValue: 36.04,
		topProduct: "Tomates cerises bio",
	};

	const mockOrders = [
		{
			id: "#CMD-001",
			customer: "Marie Dubois",
			products: 3,
			total: 24.5,
			status: "delivered",
			date: "2024-12-15",
		},
		{
			id: "#CMD-002",
			customer: "Pierre Martin",
			products: 2,
			total: 18.3,
			status: "shipped",
			date: "2024-12-14",
		},
		{
			id: "#CMD-003",
			customer: "Sophie Laurent",
			products: 5,
			total: 42.8,
			status: "pending",
			date: "2024-12-14",
		},
		{
			id: "#CMD-004",
			customer: "Jean Dupont",
			products: 1,
			total: 8.5,
			status: "confirmed",
			date: "2024-12-13",
		},
	];

	const getStatusBadge = (status: string) => {
		switch (status) {
			case "delivered":
				return <Badge className="bg-green-100 text-green-800">Livré</Badge>;
			case "shipped":
				return <Badge className="bg-blue-100 text-blue-800">Expédié</Badge>;
			case "confirmed":
				return (
					<Badge className="bg-orange-100 text-orange-800">Confirmé</Badge>
				);
			case "pending":
				return (
					<Badge className="bg-yellow-100 text-yellow-800">En attente</Badge>
				);
			default:
				return <Badge variant="secondary">{status}</Badge>;
		}
	};

	return (
		<div className="min-h-screen bg-gray-50">
			<Header role="supplier" />
			<AddProduct />

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				{/* Dashboard Header */}
				<div className="mb-8">
					<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
						<div>
							<h1 className="text-3xl font-bold text-gray-900">
								Tableau de bord
							</h1>
							<p className="text-gray-600">Ferme Bio du Soleil</p>
						</div>
						<div className="flex gap-3">
							<Button variant="outline" className="flex items-center gap-2">
								<Calendar className="h-4 w-4" />
								Ce mois
							</Button>
							<Button
								className="bg-green-600 hover:bg-green-700 flex items-center gap-2"
								onClick={() =>
									(
										document.getElementById(
											"add_product_modal"
										) as HTMLDialogElement
									).showModal()
								}
							>
								<Plus className="h-4 w-4" />
								Ajouter un produit
							</Button>
						</div>
					</div>
				</div>

				{/* Stats Cards */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
					<Card className="border-0 shadow-sm">
						<CardContent className="p-6">
							<div className="flex items-center justify-between">
								<div>
									<p className="text-sm font-medium text-gray-600">
										{`Chiffre d'affaires`}
									</p>
									<p className="text-2xl font-bold text-gray-900">
										{mockStats.totalRevenue.toFixed(2)}€
									</p>
									<p className="text-sm text-green-600 font-medium">
										+12% ce mois
									</p>
								</div>
								<div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
									<Euro className="h-6 w-6 text-green-600" />
								</div>
							</div>
						</CardContent>
					</Card>

					<Card className="border-0 shadow-sm">
						<CardContent className="p-6">
							<div className="flex items-center justify-between">
								<div>
									<p className="text-sm font-medium text-gray-600">
										Commandes totales
									</p>
									<p className="text-2xl font-bold text-gray-900">
										{mockStats.totalOrders}
									</p>
									<p className="text-sm text-blue-600 font-medium">
										+8 cette semaine
									</p>
								</div>
								<div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
									<Package className="h-6 w-6 text-blue-600" />
								</div>
							</div>
						</CardContent>
					</Card>

					<Card className="border-0 shadow-sm">
						<CardContent className="p-6">
							<div className="flex items-center justify-between">
								<div>
									<p className="text-sm font-medium text-gray-600">
										Panier moyen
									</p>
									<p className="text-2xl font-bold text-gray-900">
										{mockStats.averageOrderValue.toFixed(2)}€
									</p>
									<p className="text-sm text-purple-600 font-medium">
										+5% ce mois
									</p>
								</div>
								<div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
									<TrendingUp className="h-6 w-6 text-purple-600" />
								</div>
							</div>
						</CardContent>
					</Card>

					<Card className="border-0 shadow-sm">
						<CardContent className="p-6">
							<div className="flex items-center justify-between">
								<div>
									<p className="text-sm font-medium text-gray-600">
										Clients actifs
									</p>
									<p className="text-2xl font-bold text-gray-900">45</p>
									<p className="text-sm text-orange-600 font-medium">
										+3 ce mois
									</p>
								</div>
								<div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
									<Users className="h-6 w-6 text-orange-600" />
								</div>
							</div>
						</CardContent>
					</Card>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					{/* Products Management */}
					<Card className="border-0 shadow-sm">
						<CardHeader>
							<div className="flex items-center justify-between">
								<div>
									<CardTitle>Mes produits</CardTitle>
									<CardDescription>
										Gérez votre catalogue de produits
									</CardDescription>
								</div>
								<Button size="sm" className="bg-green-600 hover:bg-green-700">
									<Plus className="h-4 w-4 mr-2" />
									Ajouter
								</Button>
							</div>
						</CardHeader>
						<CardContent>
							<div className="space-y-4">
								{supplierProducts.map((product) => (
									<div
										key={product.id}
										className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:border-green-200 transition-colors"
									>
										<div className="flex items-center space-x-3">
											<div className="w-12 h-12 relative rounded-lg overflow-hidden bg-gray-100">
												<Image
													src={product.image}
													alt={product.name}
													fill
													className="object-cover"
												/>
											</div>
											<div>
												<div className="font-medium text-gray-900">
													{product.name}
												</div>
												<div className="text-sm text-gray-500">
													Stock: {product.stock}
												</div>
											</div>
										</div>

										<div className="flex items-center space-x-3">
											<span className="font-semibold text-green-600">
												{product.price}€
											</span>
											<DropdownMenu>
												<DropdownMenuTrigger asChild>
													<Button variant="ghost" size="sm" className="p-2">
														<MoreHorizontal className="h-4 w-4" />
													</Button>
												</DropdownMenuTrigger>
												<DropdownMenuContent align="end">
													<DropdownMenuItem>
														<Edit className="h-4 w-4 mr-2" />
														Modifier
													</DropdownMenuItem>
													<DropdownMenuItem className="text-red-600">
														<Trash2 className="h-4 w-4 mr-2" />
														Supprimer
													</DropdownMenuItem>
												</DropdownMenuContent>
											</DropdownMenu>
										</div>
									</div>
								))}
							</div>
						</CardContent>
					</Card>

					{/* Recent Orders */}
					<Card className="border-0 shadow-sm">
						<CardHeader>
							<CardTitle>Commandes récentes</CardTitle>
							<CardDescription>{`Suivez l'état de vos commandes`}</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="space-y-4">
								{mockOrders.map((order) => (
									<div
										key={order.id}
										className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:border-green-200 transition-colors"
									>
										<div>
											<div className="font-medium text-gray-900">
												{order.id}
											</div>
											<div className="text-sm text-gray-500">
												{order.customer}
											</div>
											<div className="text-xs text-gray-400">{order.date}</div>
										</div>

										<div className="text-right space-y-2">
											<div className="font-semibold text-gray-900">
												{order.total}€
											</div>
											{getStatusBadge(order.status)}
										</div>
									</div>
								))}
							</div>

							<div className="mt-6">
								<Button variant="outline" className="w-full">
									Voir toutes les commandes
								</Button>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>

			<Footer />
		</div>
	);
}
