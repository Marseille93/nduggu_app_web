"use client";

import { useState } from "react";
import { Eye, EyeOff, User, Store, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";

interface RegisterModalProps {
	isOpen: boolean;
	onClose: () => void;
	onSwitchToLogin: () => void;
}

export function RegisterModal({
	isOpen,
	onClose,
	onSwitchToLogin,
}: RegisterModalProps) {
	const [showPassword, setShowPassword] = useState(false);
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		password: "",
		confirmPassword: "",
		role: "client",
		acceptTerms: false,
	});

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		// Construction du payload attendu par ton API
		const payload = {
			email: formData.email,
			first_name: formData.firstName,
			last_name: formData.lastName,
			password: formData.password,
			phone_number: formData.phone,
			role: "fournisseur", // forcé à "fournisseur"
		};

		try {
			const response = await fetch(
				"https://nduggu-app-backend.afrylink.com/auth/register",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(payload),
				}
			);

			if (!response.ok) {
				// gestion des erreurs HTTP (400, 500…)
				const errorData = await response.json();
				console.error("Erreur API:", errorData);
				alert(
					"Erreur lors de l'inscription: " + (errorData.message || "Inconnue")
				);
				return;
			}

			const data = await response.json();
			console.log("Succès inscription:", data);

			alert("Compte créé avec succès ✅");
			onClose(); // fermer le modal après succès
		} catch (error) {
			console.error("Erreur réseau:", error);
			alert("Impossible de contacter le serveur 🚨");
		}
	};

	const handleInputChange = (field: string, value: string | boolean) => {
		setFormData((prev) => ({ ...prev, [field]: value }));
	};

	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent className="sm:max-w-lg border border-white/20 bg-green-200/10 backdrop-blur-md shadow-2xl max-h-[90vh] overflow-y-auto">
				<div>
					<DialogHeader className="text-center pb-6">
						<div className="w-16 h-16 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
							<span className="text-white font-bold text-2xl drop-shadow-lg">
								N
							</span>
						</div>
						<DialogTitle className="text-2xl text-center font-bold text-white drop-shadow-lg">
							Rejoignez Ndugu App
						</DialogTitle>
						<p className="text-white/80 text-center text-sm drop-shadow">
							Créez votre compte Fournisseur en quelques étapes
						</p>
					</DialogHeader>

					<form onSubmit={handleSubmit} className="space-y-4">
						{/* Informations personnelles */}
						<div className="grid grid-cols-2 gap-3">
							<div className="space-y-2">
								<Label
									htmlFor="firstName"
									className="text-white/90 font-medium text-sm drop-shadow"
								>
									Prénom
								</Label>
								<Input
									id="firstName"
									type="text"
									placeholder="Moussa"
									value={formData.firstName}
									onChange={(e) =>
										handleInputChange("firstName", e.target.value)
									}
									className="h-10 bg-white/10 backdrop-blur-sm border-white/30 focus:border-white/50 focus:ring-white/20 text-white placeholder:text-white/50"
									required
								/>
							</div>
							<div className="space-y-2">
								<Label
									htmlFor="lastName"
									className="text-white/90 font-medium text-sm drop-shadow"
								>
									Nom
								</Label>
								<Input
									id="lastName"
									type="text"
									placeholder="DIOP"
									value={formData.lastName}
									onChange={(e) =>
										handleInputChange("lastName", e.target.value)
									}
									className="h-10 bg-white/10 backdrop-blur-sm border-white/30 focus:border-white/50 focus:ring-white/20 text-white placeholder:text-white/50"
									required
								/>
							</div>
						</div>

						{/* Email */}
						<div className="space-y-2">
							<Label
								htmlFor="email"
								className="text-white/90 font-medium text-sm drop-shadow"
							>
								Adresse email
							</Label>
							<Input
								id="email"
								type="email"
								placeholder="moussa@gmail.com"
								value={formData.email}
								onChange={(e) => handleInputChange("email", e.target.value)}
								className="h-10 bg-white/10 backdrop-blur-sm border-white/30 focus:border-white/50 focus:ring-white/20 text-white placeholder:text-white/50"
								required
							/>
						</div>

						{/* Téléphone */}
						<div className="space-y-2">
							<Label
								htmlFor="phone"
								className="text-white/90 font-medium text-sm drop-shadow"
							>
								Téléphone (optionnel)
							</Label>
							<Input
								id="phone"
								type="tel"
								placeholder="762690719"
								value={formData.phone}
								onChange={(e) => handleInputChange("phone", e.target.value)}
								className="h-10 bg-white/10 backdrop-blur-sm border-white/30 focus:border-white/50 focus:ring-white/20 text-white placeholder:text-white/50"
							/>
						</div>

						{/* Type de profil */}
						{/* <div className="space-y-3">
							<Label className="text-white/90 font-medium text-sm drop-shadow">
								Type de profil
							</Label>
							<RadioGroup
								value={formData.role}
								onValueChange={(value) => handleInputChange("role", value)}
								className="grid grid-cols-1 gap-2"
							>
								<div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg p-3 hover:border-white/50 transition-colors">
									<RadioGroupItem value="fournisseur" id="fournisseur" />
									<Label
										htmlFor="fournisseur"
										className="flex items-center space-x-2 cursor-pointer flex-1"
									>
										<Store className="h-4 w-4 text-white/80" />
										<div>
											<div className="font-medium text-sm text-white drop-shadow">
												Fournisseur
											</div>
											<div className="text-xs text-white/60 drop-shadow">
												Vendre mes produits
											</div>
										</div>
									</Label>
								</div>

								<div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg p-3 hover:border-white/50 transition-colors">
									<RadioGroupItem value="grande_surface" id="grande_surface" />
									<Label
										htmlFor="grande_surface"
										className="flex items-center space-x-2 cursor-pointer flex-1"
									>
										<Building className="h-4 w-4 text-white/80" />
										<div>
											<div className="font-medium text-sm text-white drop-shadow">
												Grande surface
											</div>
											<div className="text-xs text-white/60 drop-shadow">
												Distribuer les produits
											</div>
										</div>
									</Label>
								</div>
							</RadioGroup>
						</div> */}

						{/* Mots de passe */}
						<div className="grid grid-cols-1 gap-3">
							<div className="space-y-2">
								<Label
									htmlFor="password"
									className="text-white/90 font-medium text-sm drop-shadow"
								>
									Mot de passe
								</Label>
								<div className="relative">
									<Input
										id="password"
										type={showPassword ? "text" : "password"}
										placeholder="••••••••"
										value={formData.password}
										onChange={(e) =>
											handleInputChange("password", e.target.value)
										}
										className="h-10 pr-10 bg-white/10 backdrop-blur-sm border-white/30 focus:border-white/50 focus:ring-white/20 text-white placeholder:text-white/50"
										required
									/>
									<button
										type="button"
										onClick={() => setShowPassword(!showPassword)}
										className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white/80 transition-colors"
									>
										{showPassword ? (
											<EyeOff className="h-3 w-3" />
										) : (
											<Eye className="h-3 w-3" />
										)}
									</button>
								</div>
							</div>

							<div className="space-y-2">
								<Label
									htmlFor="confirmPassword"
									className="text-white/90 font-medium text-sm drop-shadow"
								>
									Confirmer
								</Label>
								<Input
									id="confirmPassword"
									type="password"
									placeholder="••••••••"
									value={formData.confirmPassword}
									onChange={(e) =>
										handleInputChange("confirmPassword", e.target.value)
									}
									className="h-10 bg-white/10 backdrop-blur-sm border-white/30 focus:border-white/50 focus:ring-white/20 text-white placeholder:text-white/50"
									required
								/>
							</div>
						</div>

						{/* Conditions
						<div className="flex items-start space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3">
							<Checkbox
								id="acceptTerms"
								checked={formData.acceptTerms}
								onCheckedChange={(checked) =>
									handleInputChange("acceptTerms", checked)
								}
								required
								className="mt-0.5"
							/>
							<Label
								htmlFor="acceptTerms"
								className="text-xs text-white/80 leading-relaxed drop-shadow"
							>
								J'accepte les{" "}
								<button
									type="button"
									className="text-white hover:text-white/80 font-medium underline"
								>
									conditions générales
								</button>{" "}
								et la{" "}
								<button
									type="button"
									className="text-white hover:text-white/80 font-medium underline"
								>
									politique de confidentialité
								</button>
							</Label>
						</div> */}

						<Button
							type="submit"
							className="w-full h-11 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
						>
							Créer mon compte
						</Button>
					</form>

					<div className="mt-4 pt-4 border-t border-white/20 text-center">
						<p className="text-white/80 text-sm drop-shadow">
							Déjà un compte ?{" "}
							<button
								onClick={onSwitchToLogin}
								className="text-white hover:text-white/80 font-semibold transition-colors drop-shadow-lg"
							>
								Se connecter
							</button>
						</p>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
}
