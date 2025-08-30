"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LoginModal } from "@/components/auth/login-modal";
import { RegisterModal } from "@/components/auth/register-modal";

type HeaderProps = {
	role?: "public" | "admin" | "supplier";
};

export function Header({ role = "public" }: HeaderProps) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isLoginOpen, setIsLoginOpen] = useState(false);
	const [isRegisterOpen, setIsRegisterOpen] = useState(false);

	const handleSwitchToRegister = () => {
		setIsLoginOpen(false);
		setIsRegisterOpen(true);
	};

	const handleSwitchToLogin = () => {
		setIsRegisterOpen(false);
		setIsLoginOpen(true);
	};

	// 🔹 Liens pour chaque rôle
	const publicLinks = [
		{ href: "#Accueil", label: "Accueil" },
		{ href: "#Missions", label: "Missions" },
		{ href: "#Why", label: "Pourquoi nous choisir" },
		{ href: "#Equipe", label: "Équipe" },
		{ href: "#Join", label: "Nous Rejoindre" },
	];

	const supplierLinks = [
		{ href: "/dashboard", label: "Tableau de bord" },
		{ href: "/products", label: "Mes Produits" },
		{ href: "/orders", label: "Mes Commandes" },
		{ href: "/deliveries", label: "Livraisons" },
		{ href: "/recipes", label: "Recettes" },
	];

	const adminLinks = [
		{ href: "/dashboard", label: "Tableau de bord" },
		{ href: "/users", label: "Utilisateurs" },
		{ href: "/products", label: "Produits" },
		{ href: "/orders", label: "Commandes" },
		{ href: "/deliveries", label: "Livraisons" },
	];

	let links = publicLinks;
	if (role === "supplier") links = supplierLinks;
	if (role === "admin") links = adminLinks;

	// 🔹 Avatar & Nom pour supplier/admin
	const userName =
		role === "supplier" ? "Demba Fall" : role === "admin" ? "Idriss Ahmed" : "";
	const userRoleText =
		role === "supplier" ? "Fournisseur" : role === "admin" ? "Admin" : "";
	const avatarSrc =
		role === "supplier"
			? "https://img.daisyui.com/images/profile/demo/gordon@192.webp"
			: role === "admin"
			? "https://media.licdn.com/dms/image/v2/D4E03AQHCfgcCAs6dnQ/profile-displayphoto-crop_800_800/B4EZifyyYYHoAU-/0/1755027548590?e=1759363200&v=beta&t=o2IbDopjbOaL9f7GeolxIdKbgrcUHCiRjWZR1W24iak"
			: "";

	return (
		<>
			<header className="bg-white shadow-sm border-b border-green-100 sticky top-0 z-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center h-16">
						{/* Logo */}
						<Link href="/" className="flex items-center space-x-2">
							<div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
								<span className="text-white font-bold text-lg">N</span>
							</div>
							<span className="text-xl font-bold text-green-800">
								Ndugu App
							</span>
						</Link>

						{/* Navigation Desktop */}
						<nav className="hidden md:flex space-x-8">
							{links.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium"
								>
									{link.label}
								</Link>
							))}
						</nav>

						{/* Actions / Avatar */}
						<div className="flex items-center space-x-4">
							{role === "public" ? (
								<div className="hidden md:flex space-x-3">
									<Button
										variant="outline"
										className="border-green-600 text-green-600 hover:bg-green-50"
										onClick={() => setIsLoginOpen(true)}
									>
										Connexion
									</Button>
									<Button
										className="bg-green-600 hover:bg-green-700 text-white"
										onClick={() => setIsRegisterOpen(true)}
									>
										{`S'inscrire`}
									</Button>
								</div>
							) : (
								<div className="flex flex-col items-center space-y-1">
									<div>
										<div className="avatar avatar-online">
											<div className="w-14 rounded-full ring-2 ring-green-500">
												<img src={avatarSrc} alt="avatar" />
											</div>
										</div>
										<span className=" ml-2 font-bold text-gray-700">
											{userName}
										</span>
										{/* <span className="text-sm text-green-600">
											{userRoleText}
										</span> */}
									</div>
								</div>
							)}

							{/* Menu Mobile */}
							<button
								onClick={() => setIsMenuOpen(!isMenuOpen)}
								className="md:hidden p-2 text-gray-700"
							>
								{isMenuOpen ? (
									<X className="h-6 w-6" />
								) : (
									<Menu className="h-6 w-6" />
								)}
							</button>
						</div>
					</div>

					{/* Menu Mobile */}
					{isMenuOpen && (
						<div className="md:hidden py-4 border-t border-green-100">
							<nav className="flex flex-col space-y-4">
								{links.map((link) => (
									<Link
										key={link.href}
										href={link.href}
										className="text-gray-700 hover:text-green-600 font-medium"
									>
										{link.label}
									</Link>
								))}
								{role === "public" && (
									<div className="flex flex-col space-y-2 pt-4">
										<Button
											variant="outline"
											className="w-full border-green-600 text-green-600 hover:bg-green-50"
											onClick={() => setIsLoginOpen(true)}
										>
											Connexion
										</Button>
										<Button
											className="w-full bg-green-600 hover:bg-green-700 text-white"
											onClick={() => setIsRegisterOpen(true)}
										>
											{`S'inscrire`}
										</Button>
									</div>
								)}
							</nav>
						</div>
					)}
				</div>
			</header>

			{/* Modals seulement pour public */}
			{role === "public" && (
				<>
					<LoginModal
						isOpen={isLoginOpen}
						onClose={() => setIsLoginOpen(false)}
						onSwitchToRegister={handleSwitchToRegister}
					/>

					<RegisterModal
						isOpen={isRegisterOpen}
						onClose={() => setIsRegisterOpen(false)}
						onSwitchToLogin={handleSwitchToLogin}
					/>
				</>
			)}
		</>
	);
}
