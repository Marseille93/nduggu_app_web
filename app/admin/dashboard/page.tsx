"use client";

import { useState } from "react";
import {
	TrendingUp,
	Users,
	Package,
	DollarSign,
	Calendar,
	MoreHorizontal,
	CheckCircle,
	XCircle,
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function AdminDashboard() {
	const [selectedPeriod, setSelectedPeriod] = useState("month");

	const mockStats = {
		totalRevenue: 28450.75,
		totalOrders: 342,
		totalUsers: 1250,
		totalSuppliers: 28,
		avgOrderValue: 42.35,
		conversionRate: 3.2,
	};

	const mockUsers = [
		{
			id: "1",
			name: "Marie Dubois",
			email: "marie@email.com",
			role: "Client",
			status: "active",
			joinDate: "2024-12-01",
		},
		{
			id: "2",
			name: "Ferme Bio",
			email: "contact@fermebio.fr",
			role: "Fournisseur",
			status: "active",
			joinDate: "2024-11-15",
		},
		{
			id: "3",
			name: "Jean Martin",
			email: "jean@email.com",
			role: "Client",
			status: "inactive",
			joinDate: "2024-11-20",
		},
	];

	const mockPendingProducts = [
		{
			id: "1",
			name: "Courgettes bio",
			supplier: "Ferme Verte",
			category: "Légumes",
			price: 3.2,
			status: "pending",
		},
		{
			id: "2",
			name: "Pommes Gala",
			supplier: "Verger Martin",
			category: "Fruits",
			price: 2.8,
			status: "pending",
		},
		{
			id: "3",
			name: "Miel de lavande",
			supplier: "Rucher Provence",
			category: "Épices",
			price: 12.5,
			status: "pending",
		},
	];

	const getStatusBadge = (status: string) => {
		switch (status) {
			case "active":
				return <Badge className="bg-green-100 text-green-800">Actif</Badge>;
			case "inactive":
				return <Badge className="bg-red-100 text-red-800">Inactif</Badge>;
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
			<Header role="admin" />
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				{/* Dashboard Header */}
				<div className="mb-8">
					<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
						<div>
							<h1 className="text-3xl font-bold text-gray-900">
								Administration
							</h1>
							<p className="text-gray-600">
								{`Vue d'ensemble de la plateforme Ndugu App`}
							</p>
						</div>
						<div className="flex gap-3">
							<Button variant="outline" className="flex items-center gap-2">
								<Calendar className="h-4 w-4" />
								Ce mois
							</Button>
						</div>
					</div>
				</div>

				{/* Stats Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mb-8">
					<Card className="border-0 shadow-sm">
						<CardContent className="p-6">
							<div className="flex items-center justify-between">
								<div>
									<p className="text-sm font-medium text-gray-600">CA Total</p>
									<p className="text-2xl font-bold text-gray-900">
										{mockStats.totalRevenue.toLocaleString("fr-FR")} Fr
									</p>
								</div>
								<DollarSign className="h-8 w-8 text-green-600" />
							</div>
						</CardContent>
					</Card>

					<Card className="border-0 shadow-sm">
						<CardContent className="p-6">
							<div className="flex items-center justify-between">
								<div>
									<p className="text-sm font-medium text-gray-600">Commandes</p>
									<p className="text-2xl font-bold text-gray-900">
										{mockStats.totalOrders}
									</p>
								</div>
								<Package className="h-8 w-8 text-blue-600" />
							</div>
						</CardContent>
					</Card>

					<Card className="border-0 shadow-sm">
						<CardContent className="p-6">
							<div className="flex items-center justify-between">
								<div>
									<p className="text-sm font-medium text-gray-600">
										Utilisateurs
									</p>
									<p className="text-2xl font-bold text-gray-900">
										{mockStats.totalUsers}
									</p>
								</div>
								<Users className="h-8 w-8 text-purple-600" />
							</div>
						</CardContent>
					</Card>

					<Card className="border-0 shadow-sm">
						<CardContent className="p-6">
							<div className="flex items-center justify-between">
								<div>
									<p className="text-sm font-medium text-gray-600">
										Fournisseurs
									</p>
									<p className="text-2xl font-bold text-gray-900">
										{mockStats.totalSuppliers}
									</p>
								</div>
								<Package className="h-8 w-8 text-orange-600" />
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
										{mockStats.avgOrderValue.toFixed(2)} Fr
									</p>
								</div>
								<TrendingUp className="h-8 w-8 text-indigo-600" />
							</div>
						</CardContent>
					</Card>

					<Card className="border-0 shadow-sm">
						<CardContent className="p-6">
							<div className="flex items-center justify-between">
								<div>
									<p className="text-sm font-medium text-gray-600">
										Conversion
									</p>
									<p className="text-2xl font-bold text-gray-900">
										{mockStats.conversionRate}%
									</p>
								</div>
								<TrendingUp className="h-8 w-8 text-pink-600" />
							</div>
						</CardContent>
					</Card>
				</div>

				{/* Management Tabs */}
				<Tabs defaultValue="users" className="space-y-6">
					<TabsList className="grid w-full grid-cols-3 lg:w-auto lg:grid-cols-3">
						<TabsTrigger value="users">Utilisateurs</TabsTrigger>
						<TabsTrigger value="products">Produits en attente</TabsTrigger>
						<TabsTrigger value="analytics">Analytics</TabsTrigger>
					</TabsList>

					{/* Users Management */}
					<TabsContent value="users" className="space-y-6">
						<Card className="border-0 shadow-sm">
							<CardHeader>
								<CardTitle>Gestion des utilisateurs</CardTitle>
								<CardDescription>
									Administrez les comptes utilisateurs de la plateforme
								</CardDescription>
							</CardHeader>
							<CardContent>
								<Table>
									<TableHeader>
										<TableRow>
											<TableHead>Utilisateur</TableHead>
											<TableHead>Email</TableHead>
											<TableHead>Rôle</TableHead>
											<TableHead>Statut</TableHead>
											<TableHead>Inscription</TableHead>
											<TableHead className="text-right">Actions</TableHead>
										</TableRow>
									</TableHeader>
									<TableBody>
										{mockUsers.map((user) => (
											<TableRow key={user.id} className="hover:bg-gray-50">
												<TableCell className="font-medium">
													{user.name}
												</TableCell>
												<TableCell className="text-gray-600">
													{user.email}
												</TableCell>
												<TableCell>
													<Badge variant="outline">{user.role}</Badge>
												</TableCell>
												<TableCell>{getStatusBadge(user.status)}</TableCell>
												<TableCell className="text-gray-600">
													{user.joinDate}
												</TableCell>
												<TableCell className="text-right">
													<DropdownMenu>
														<DropdownMenuTrigger asChild>
															<Button variant="ghost" size="sm">
																<MoreHorizontal className="h-4 w-4" />
															</Button>
														</DropdownMenuTrigger>
														<DropdownMenuContent align="end">
															<DropdownMenuItem>
																Voir le profil
															</DropdownMenuItem>
															<DropdownMenuItem>
																{user.status === "active"
																	? "Désactiver"
																	: "Activer"}
															</DropdownMenuItem>
															<DropdownMenuItem className="text-red-600">
																Supprimer
															</DropdownMenuItem>
														</DropdownMenuContent>
													</DropdownMenu>
												</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</CardContent>
						</Card>
					</TabsContent>

					{/* Products Approval */}
					<TabsContent value="products" className="space-y-6">
						<Card className="border-0 shadow-sm">
							<CardHeader>
								<CardTitle>Produits en attente de validation</CardTitle>
								<CardDescription>
									Validez ou refusez les nouveaux produits proposés par les
									fournisseurs
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="space-y-4">
									{mockPendingProducts.map((product) => (
										<div
											key={product.id}
											className="flex items-center justify-between p-4 border border-yellow-200 bg-yellow-50 rounded-lg"
										>
											<div>
												<div className="font-medium text-gray-900">
													{product.name}
												</div>
												<div className="text-sm text-gray-600">
													Par {product.supplier}
												</div>
												<div className="text-sm text-gray-500">
													{product.category} • {product.price}€
												</div>
											</div>

											<div className="flex items-center space-x-2">
												<Button
													size="sm"
													className="bg-green-600 hover:bg-green-700"
												>
													<CheckCircle className="h-4 w-4 mr-2" />
													Approuver
												</Button>
												<Button
													size="sm"
													variant="outline"
													className="text-red-600 border-red-200 hover:bg-red-50"
												>
													<XCircle className="h-4 w-4 mr-2" />
													Refuser
												</Button>
											</div>
										</div>
									))}
								</div>
							</CardContent>
						</Card>
					</TabsContent>

					{/* Analytics */}
					<TabsContent value="analytics" className="space-y-6">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<Card className="border-0 shadow-sm">
								<CardHeader>
									<CardTitle>Top Catégories</CardTitle>
									<CardDescription>Catégories les plus vendues</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="space-y-4">
										<div className="flex items-center justify-between">
											<span className="text-sm font-medium">Légumes</span>
											<span className="text-sm font-bold">42%</span>
										</div>
										<div className="w-full bg-gray-200 rounded-full h-2">
											<div className="bg-green-600 h-2 rounded-full w-[42%]"></div>
										</div>

										<div className="flex items-center justify-between">
											<span className="text-sm font-medium">Fruits</span>
											<span className="text-sm font-bold">28%</span>
										</div>
										<div className="w-full bg-gray-200 rounded-full h-2">
											<div className="bg-blue-600 h-2 rounded-full w-[28%]"></div>
										</div>

										<div className="flex items-center justify-between">
											<span className="text-sm font-medium">
												Produits laitiers
											</span>
											<span className="text-sm font-bold">18%</span>
										</div>
										<div className="w-full bg-gray-200 rounded-full h-2">
											<div className="bg-purple-600 h-2 rounded-full w-[18%]"></div>
										</div>

										<div className="flex items-center justify-between">
											<span className="text-sm font-medium">Autres</span>
											<span className="text-sm font-bold">12%</span>
										</div>
										<div className="w-full bg-gray-200 rounded-full h-2">
											<div className="bg-orange-600 h-2 rounded-full w-[12%]"></div>
										</div>
									</div>
								</CardContent>
							</Card>

							<Card className="border-0 shadow-sm">
								<CardHeader>
									<CardTitle>Évolution mensuelle</CardTitle>
									<CardDescription>
										Croissance des ventes sur 6 mois
									</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="space-y-4">
										{[
											{ month: "Juillet", value: 85, amount: "18,500€" },
											{ month: "Août", value: 92, amount: "20,100€" },
											{ month: "Septembre", value: 88, amount: "19,200€" },
											{ month: "Octobre", value: 95, amount: "21,800€" },
											{ month: "Novembre", value: 100, amount: "23,400€" },
											{ month: "Décembre", value: 120, amount: "28,450€" },
										].map((data, index) => (
											<div
												key={index}
												className="flex items-center justify-between"
											>
												<div className="flex items-center space-x-4">
													<span className="text-sm font-medium w-20">
														{data.month}
													</span>
													<div className="w-32 bg-gray-200 rounded-full h-2">
														<div
															className="bg-green-600 h-2 rounded-full transition-all duration-1000"
															style={{ width: `${Math.min(data.value, 100)}%` }}
														></div>
													</div>
												</div>
												<span className="text-sm font-bold text-gray-900">
													{data.amount}
												</span>
											</div>
										))}
									</div>
								</CardContent>
							</Card>
						</div>
					</TabsContent>
				</Tabs>
			</div>

			<Footer />
		</div>
	);
}
