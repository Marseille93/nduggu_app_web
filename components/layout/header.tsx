"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LoginModal } from "@/components/auth/login-modal";
import { RegisterModal } from "@/components/auth/register-modal";

export function Header() {
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
							<Link
								href="https://nduggu-app-web.vercel.app/#Accueil"
								className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium"
							>
								Accueil
							</Link>
							<Link
								href="https://nduggu-app-web.vercel.app/#Missions"
								className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium"
							>
								Missions
							</Link>
							<Link
								href="https://nduggu-app-web.vercel.app/#Why"
								className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium"
							>
								Pourquoi nous choisir
							</Link>
							<Link
								href="https://nduggu-app-web.vercel.app/#Equipe"
								className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium"
							>
								Équipe
							</Link>
							<Link
								href="https://nduggu-app-web.vercel.app/#Join"
								className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium"
							>
								Nous Rejoindre
							</Link>
						</nav>

						{/* Actions */}
						<div className="flex items-center space-x-4">
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
								<Link
									href="https://nduggu-app-web.vercel.app/#Accueil"
									className="text-gray-700 hover:text-green-600 font-medium"
								>
									Accueil
								</Link>
								<Link
									href="https://nduggu-app-web.vercel.app/#Missions"
									className="text-gray-700 hover:text-green-600 font-medium"
								>
									Missions
								</Link>
								<Link
									href="https://nduggu-app-web.vercel.app/#Why"
									className="text-gray-700 hover:text-green-600 font-medium"
								>
									Porquoi Nous Choisir
								</Link>
								<Link
									href="https://nduggu-app-web.vercel.app/#Equipe"
									className="text-gray-700 hover:text-green-600 font-medium"
								>
									Équipe
								</Link>
								<Link
									href="https://nduggu-app-web.vercel.app/#Join"
									className="text-gray-700 hover:text-green-600 font-medium"
								>
									Nous Rejoindre
								</Link>
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
							</nav>
						</div>
					)}
				</div>
			</header>

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
	);
}
