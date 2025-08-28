"use client";

import { useState } from "react";
import { Eye, EyeOff, Mail, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";

interface LoginModalProps {
	isOpen: boolean;
	onClose: () => void;
	onSwitchToRegister: () => void;
}

export function LoginModal({
	isOpen,
	onClose,
	onSwitchToRegister,
}: LoginModalProps) {
	const [showPassword, setShowPassword] = useState(false);
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [password, setPassword] = useState("");

	const handleEmailLogin = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Login with email:", { email, password });
		onClose();
	};

	const handlePhoneLogin = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Login with phone:", { phone, password });
		onClose();
	};

	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent className="sm:max-w-md border border-white/20 bg-green-200/10 backdrop-blur-sm shadow-2xl">
				<div>
					<DialogHeader className="text-center pb-6">
						<div className="w-16 h-16 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
							<span className="text-white font-bold text-2xl drop-shadow-lg">
								N
							</span>
						</div>
						<DialogTitle className="text-2xl text-center font-bold text-white drop-shadow-lg">
							Bon retour !
						</DialogTitle>
						<p className="text-white/80 text-center text-sm drop-shadow">
							Connectez-vous pour accéder à votre compte
						</p>
					</DialogHeader>

					<Tabs defaultValue="email" className="w-full">
						<TabsList className="grid w-full grid-cols-2 mb-6 bg-white/10 backdrop-blur-sm border border-white/20">
							<TabsTrigger
								value="email"
								className="flex items-center gap-2 text-white/70 data-[state=active]:bg-white/20 data-[state=active]:text-white"
							>
								<Mail className="h-4 w-4" />
								Email
							</TabsTrigger>
							<TabsTrigger
								value="phone"
								className="flex items-center gap-2 text-white/70 data-[state=active]:bg-white/20 data-[state=active]:text-white"
							>
								<Phone className="h-4 w-4" />
								Téléphone
							</TabsTrigger>
						</TabsList>

						<TabsContent value="email">
							<form onSubmit={handleEmailLogin} className="space-y-4">
								<div className="space-y-2">
									<Label
										htmlFor="email"
										className="text-white/90 font-medium drop-shadow"
									>
										Adresse email
									</Label>
									<Input
										id="email"
										type="email"
										placeholder="votre@email.com"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										className="h-11 bg-white/10 backdrop-blur-sm border-white/30 focus:border-white/50 focus:ring-white/20 text-white placeholder:text-white/50"
										required
									/>
								</div>

								<div className="space-y-2">
									<Label
										htmlFor="password"
										className="text-white/90 font-medium drop-shadow"
									>
										Mot de passe
									</Label>
									<div className="relative">
										<Input
											id="password"
											type={showPassword ? "text" : "password"}
											placeholder="••••••••"
											value={password}
											onChange={(e) => setPassword(e.target.value)}
											className="h-11 pr-11 bg-white/10 backdrop-blur-sm border-white/30 focus:border-white/50 focus:ring-white/20 text-white placeholder:text-white/50"
											required
										/>
										<button
											type="button"
											onClick={() => setShowPassword(!showPassword)}
											className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white/80 transition-colors"
										>
											{showPassword ? (
												<EyeOff className="h-4 w-4" />
											) : (
												<Eye className="h-4 w-4" />
											)}
										</button>
									</div>
								</div>

								<Button
									type="submit"
									className="w-full h-11 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
								>
									Se connecter
								</Button>
							</form>
						</TabsContent>

						<TabsContent value="phone">
							<form onSubmit={handlePhoneLogin} className="space-y-4">
								<div className="space-y-2">
									<Label
										htmlFor="phone"
										className="text-white/90 font-medium drop-shadow"
									>
										Numéro de téléphone
									</Label>
									<Input
										id="phone"
										type="tel"
										placeholder="+33 6 12 34 56 78"
										value={phone}
										onChange={(e) => setPhone(e.target.value)}
										className="h-11 bg-white/10 backdrop-blur-sm border-white/30 focus:border-white/50 focus:ring-white/20 text-white placeholder:text-white/50"
										required
									/>
								</div>

								<div className="space-y-2">
									<Label
										htmlFor="password-phone"
										className="text-white/90 font-medium drop-shadow"
									>
										Mot de passe
									</Label>
									<div className="relative">
										<Input
											id="password-phone"
											type={showPassword ? "text" : "password"}
											placeholder="••••••••"
											value={password}
											onChange={(e) => setPassword(e.target.value)}
											className="h-11 pr-11 bg-white/10 backdrop-blur-sm border-white/30 focus:border-white/50 focus:ring-white/20 text-white placeholder:text-white/50"
											required
										/>
										<button
											type="button"
											onClick={() => setShowPassword(!showPassword)}
											className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white/80 transition-colors"
										>
											{showPassword ? (
												<EyeOff className="h-4 w-4" />
											) : (
												<Eye className="h-4 w-4" />
											)}
										</button>
									</div>
								</div>

								<Button
									type="submit"
									className="w-full h-11 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
								>
									Se connecter
								</Button>
							</form>
						</TabsContent>
					</Tabs>

					<div className="mt-4 text-center">
						<button className="text-sm text-white/80 hover:text-white font-medium transition-colors drop-shadow">
							Mot de passe oublié ?
						</button>
					</div>

					<div className="mt-6 pt-4 border-t border-white/20 text-center">
						<p className="text-white/80 text-sm drop-shadow">
							Pas encore de compte ?{" "}
							<button
								onClick={onSwitchToRegister}
								className="text-white hover:text-white/80 font-semibold transition-colors drop-shadow-lg"
							>
								{`S'inscrire`}
							</button>
						</p>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
}
