import Link from "next/link";
import {
	Facebook,
	Twitter,
	Instagram,
	Mail,
	Phone,
	MapPin,
} from "lucide-react";

export function Footer() {
	return (
		<footer className="bg-green-800 text-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* Logo et description */}
					<div className="space-y-4">
						<div className="flex items-center space-x-2">
							<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
								<span className="text-green-800 font-bold text-lg">N</span>
							</div>
							<span className="text-xl font-bold">Ndugu App</span>
						</div>
						<p className="text-green-100 text-sm leading-relaxed">
							Connectons les producteurs locaux aux consommateurs pour une
							alimentation fraîche, bio et responsable.
						</p>
						<div className="flex space-x-4">
							<Facebook className="h-5 w-5 text-green-300 hover:text-white cursor-pointer transition-colors" />
							<Twitter className="h-5 w-5 text-green-300 hover:text-white cursor-pointer transition-colors" />
							<Instagram className="h-5 w-5 text-green-300 hover:text-white cursor-pointer transition-colors" />
						</div>
					</div>

					{/* Navigation */}
					<div>
						<h3 className="text-lg font-semibold mb-4">Navigation</h3>
						<ul className="space-y-2 text-sm">
							<li>
								<Link
									href="/catalogue"
									className="text-green-100 hover:text-white transition-colors"
								>
									Catalogue
								</Link>
							</li>
							<li>
								<Link
									href="/categories"
									className="text-green-100 hover:text-white transition-colors"
								>
									Catégories
								</Link>
							</li>
							<li>
								<Link
									href="/fournisseurs"
									className="text-green-100 hover:text-white transition-colors"
								>
									Fournisseurs
								</Link>
							</li>
							<li>
								<Link
									href="/a-propos"
									className="text-green-100 hover:text-white transition-colors"
								>
									À propos
								</Link>
							</li>
						</ul>
					</div>

					{/* Support */}
					<div>
						<h3 className="text-lg font-semibold mb-4">Support</h3>
						<ul className="space-y-2 text-sm">
							<li>
								<Link
									href="/aide"
									className="text-green-100 hover:text-white transition-colors"
								>{`Centre d'aide`}</Link>
							</li>
							<li>
								<Link
									href="/contact"
									className="text-green-100 hover:text-white transition-colors"
								>
									Contactez-nous
								</Link>
							</li>
							<li>
								<Link
									href="/cgv"
									className="text-green-100 hover:text-white transition-colors"
								>
									CGV
								</Link>
							</li>
							<li>
								<Link
									href="/confidentialite"
									className="text-green-100 hover:text-white transition-colors"
								>
									Confidentialité
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h3 className="text-lg font-semibold mb-4">Contact</h3>
						<div className="space-y-3 text-sm">
							<div className="flex items-center space-x-2">
								<Mail className="h-4 w-4 text-green-300" />
								<span className="text-green-100">contact@nduguapp.com</span>
							</div>
							<div className="flex items-center space-x-2">
								<Phone className="h-4 w-4 text-green-300" />
								<span className="text-green-100">+33 1 23 45 67 89</span>
							</div>
							<div className="flex items-center space-x-2">
								<MapPin className="h-4 w-4 text-green-300" />
								<span className="text-green-100">Paris, France</span>
							</div>
						</div>
					</div>
				</div>

				<div className="border-t border-green-700 mt-8 pt-8 text-center text-sm text-green-200">
					<p>&copy; 2024 Ndugu App. Tous droits réservés.</p>
				</div>
			</div>
		</footer>
	);
}
