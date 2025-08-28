"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
	Plus,
	Minus,
	Trash2,
	ArrowRight,
	ShoppingBag,
	Tag,
	Truck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { products } from "@/lib/data";
import { CartItem } from "@/lib/types";

export default function CartPage() {
	const [cartItems, setCartItems] = useState<CartItem[]>([
		{ product: products[0], quantity: 2 },
		{ product: products[1], quantity: 1 },
		{ product: products[4], quantity: 3 },
	]);
	const [promoCode, setPromoCode] = useState("");
	const [discount, setDiscount] = useState(0);

	const updateQuantity = (productId: string, newQuantity: number) => {
		if (newQuantity === 0) {
			removeItem(productId);
			return;
		}

		setCartItems((items) =>
			items.map((item) =>
				item.product.id === productId
					? { ...item, quantity: Math.min(newQuantity, item.product.stock) }
					: item
			)
		);
	};

	const removeItem = (productId: string) => {
		setCartItems((items) =>
			items.filter((item) => item.product.id !== productId)
		);
	};

	const applyPromoCode = () => {
		// Mock promo code logic
		if (promoCode.toLowerCase() === "welcome10") {
			setDiscount(0.1); // 10% discount
		}
	};

	const subtotal = cartItems.reduce(
		(total, item) => total + item.product.price * item.quantity,
		0
	);
	const discountAmount = subtotal * discount;
	const deliveryFee = subtotal > 30 ? 0 : 4.99;
	const total = subtotal - discountAmount + deliveryFee;

	if (cartItems.length === 0) {
		return (
			<div className="min-h-screen bg-gray-50">
				<Header />
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
					<div className="text-center">
						<div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
							<ShoppingBag className="h-12 w-12 text-gray-400" />
						</div>
						<h1 className="text-3xl font-bold text-gray-900 mb-4">
							Votre panier est vide
						</h1>
						<p className="text-lg text-gray-600 mb-8">
							Découvrez nos produits frais et bio pour commencer vos achats
						</p>
						<Link href="/catalogue">
							<Button
								size="lg"
								className="bg-green-600 hover:bg-green-700 px-8"
							>
								Découvrir les produits
								<ArrowRight className="ml-2 h-5 w-5" />
							</Button>
						</Link>
					</div>
				</div>
				<Footer />
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-gray-50">
			<Header />

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<div className="mb-8">
					<h1 className="text-3xl font-bold text-gray-900 mb-2">Mon panier</h1>
					<p className="text-gray-600">
						{cartItems.length} article{cartItems.length > 1 ? "s" : ""}{" "}
						sélectionné{cartItems.length > 1 ? "s" : ""}
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{/* Cart Items */}
					<div className="lg:col-span-2 space-y-6">
						{cartItems.map((item) => (
							<Card
								key={item.product.id}
								className="border-0 shadow-sm hover:shadow-md transition-shadow duration-200"
							>
								<CardContent className="p-6">
									<div className="flex flex-col sm:flex-row gap-6">
										{/* Product Image */}
										<div className="relative w-full sm:w-32 h-32 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
											<Image
												src={item.product.image}
												alt={item.product.name}
												fill
												className="object-cover"
											/>
										</div>

										{/* Product Details */}
										<div className="flex-1 space-y-3">
											<div className="flex justify-between items-start">
												<div>
													<h3 className="text-lg font-semibold text-gray-900 mb-1">
														<Link
															href={`/produits/${item.product.id}`}
															className="hover:text-green-600 transition-colors"
														>
															{item.product.name}
														</Link>
													</h3>
													<p className="text-sm text-gray-600">
														{item.product.supplier}
													</p>
													{/* <div className="flex gap-2 mt-2">
														{item.product.badges.map((badge) => (
															<span
																key={badge}
																className={`text-xs px-2 py-1 rounded-full ${getBadgeVariant(
																	badge
																)}`}
															>
																{badge === "bio"
																	? "Bio"
																	: badge === "local"
																	? "Local"
																	: "Nouveau"}
															</span>
														))}
													</div> */}
												</div>

												<Button
													variant="ghost"
													size="sm"
													onClick={() => removeItem(item.product.id)}
													className="text-red-500 hover:text-red-700 hover:bg-red-50"
												>
													<Trash2 className="h-4 w-4" />
												</Button>
											</div>

											<div className="flex items-center justify-between">
												{/* Quantity Controls */}
												<div className="flex items-center space-x-3">
													<span className="text-sm font-medium text-gray-700">
														Quantité :
													</span>
													<div className="flex items-center border border-gray-300 rounded-lg">
														<Button
															variant="ghost"
															size="sm"
															onClick={() =>
																updateQuantity(
																	item.product.id,
																	item.quantity - 1
																)
															}
															className="h-8 w-8 p-0 rounded-l-lg rounded-r-none"
														>
															<Minus className="h-3 w-3" />
														</Button>
														<span className="w-12 text-center text-sm font-medium bg-white h-8 flex items-center justify-center">
															{item.quantity}
														</span>
														<Button
															variant="ghost"
															size="sm"
															onClick={() =>
																updateQuantity(
																	item.product.id,
																	item.quantity + 1
																)
															}
															className="h-8 w-8 p-0 rounded-r-lg rounded-l-none"
															disabled={item.quantity >= item.product.stock}
														>
															<Plus className="h-3 w-3" />
														</Button>
													</div>
												</div>

												{/* Price */}
												<div className="text-right">
													<div className="text-lg font-bold text-gray-900">
														{(item.product.price * item.quantity).toFixed(2)}€
													</div>
													<div className="text-sm text-gray-500">
														{item.product.price.toFixed(2)}€ / kg
													</div>
												</div>
											</div>
										</div>
									</div>
								</CardContent>
							</Card>
						))}
					</div>

					{/* Order Summary */}
					<div className="space-y-6">
						<Card className="border-0 shadow-lg">
							<CardHeader className="pb-4">
								<CardTitle className="text-xl text-gray-900">
									Récapitulatif
								</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								{/* Promo Code */}
								<div className="space-y-3">
									<div className="flex gap-2">
										<Input
											placeholder="Code promo"
											value={promoCode}
											onChange={(e) => setPromoCode(e.target.value)}
											className="flex-1"
										/>
										<Button
											variant="outline"
											onClick={applyPromoCode}
											className="px-4"
										>
											<Tag className="h-4 w-4" />
										</Button>
									</div>
									{discount > 0 && (
										<div className="text-sm text-green-600 font-medium">
											✓ Code promo appliqué (-{(discount * 100).toFixed(0)}%)
										</div>
									)}
								</div>

								<Separator />

								{/* Price Breakdown */}
								<div className="space-y-3">
									<div className="flex justify-between text-sm">
										<span className="text-gray-600">Sous-total</span>
										<span className="font-medium">{subtotal.toFixed(2)}€</span>
									</div>

									{discount > 0 && (
										<div className="flex justify-between text-sm">
											<span className="text-gray-600">Réduction</span>
											<span className="font-medium text-green-600">
												-{discountAmount.toFixed(2)}€
											</span>
										</div>
									)}

									<div className="flex justify-between text-sm">
										<span className="text-gray-600">Livraison</span>
										<span className="font-medium">
											{deliveryFee === 0 ? (
												<span className="text-green-600">Gratuite</span>
											) : (
												`${deliveryFee.toFixed(2)}€`
											)}
										</span>
									</div>

									{deliveryFee > 0 && (
										<div className="text-xs text-gray-500">
											Livraison gratuite à partir de 30€
										</div>
									)}
								</div>

								<Separator />

								<div className="flex justify-between text-lg font-bold text-gray-900">
									<span>Total</span>
									<span className="text-green-600">{total.toFixed(2)}€</span>
								</div>

								<Button className="w-full h-12 bg-green-600 hover:bg-green-700 text-white font-semibold text-lg mt-6">
									<ArrowRight className="h-5 w-5 mr-2" />
									Passer commande
								</Button>
							</CardContent>
						</Card>

						{/* Delivery Info */}
						<Card className="border-0 bg-green-50">
							<CardContent className="p-6">
								<div className="flex items-center space-x-3 mb-3">
									<Truck className="h-5 w-5 text-green-600" />
									<span className="font-semibold text-green-800">
										Livraison express
									</span>
								</div>
								<p className="text-sm text-green-700">
									Commandez avant 16h pour une livraison le lendemain matin
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
}
