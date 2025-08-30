"use client";

import { useState } from "react";

export default function AddProduct() {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState("");
	const [stock, setStock] = useState("");
	const [photo, setPhoto] = useState<File | null>(null);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log({
			name,
			description,
			price,
			stock,
			photo,
		});
		(document.getElementById("add_product_modal") as HTMLDialogElement).close();
	};

	return (
		<dialog id="add_product_modal" className="modal">
			<div className="modal-box w-11/12 max-w-lg bg-white text-gray-900">
				<h3 className="font-bold text-lg mb-4">Ajouter un produit</h3>
				<form onSubmit={handleSubmit} className="space-y-4">
					{/* Nom produit */}
					<div>
						<label className="block text-sm font-medium mb-1">
							Nom produit
						</label>
						<input
							type="text"
							className="input input-bordered w-full bg-gray-50 text-gray-900 placeholder-gray-400"
							placeholder="Ex: Tomates bio"
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
						/>
					</div>

					{/* Description */}
					<div>
						<label className="block text-sm font-medium mb-1">
							Description
						</label>
						<textarea
							className="textarea textarea-bordered w-full bg-gray-50 text-gray-900 placeholder-gray-400"
							placeholder="Décrivez le produit..."
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							required
						/>
					</div>

					{/* Prix */}
					<div>
						<label className="block text-sm font-medium mb-1">Prix (Fr)</label>
						<input
							type="number"
							step="0.01"
							className="input input-bordered w-full bg-gray-50 text-gray-900 placeholder-gray-400"
							placeholder="0.00"
							value={price}
							onChange={(e) => setPrice(e.target.value)}
							required
						/>
					</div>

					{/* Stock */}
					<div>
						<label className="block text-sm font-medium mb-1">Stock</label>
						<input
							type="number"
							className="input input-bordered w-full bg-gray-50 text-gray-900 placeholder-gray-400"
							placeholder="0"
							value={stock}
							onChange={(e) => setStock(e.target.value)}
							required
						/>
					</div>

					{/* Photo */}
					<div>
						<label className="block text-sm font-medium mb-1">Photo</label>
						<input
							type="file"
							accept="image/*"
							className="file-input file-input-bordered w-full bg-gray-50 text-gray-900"
							onChange={(e) => setPhoto(e.target.files?.[0] || null)}
							required
						/>
					</div>

					{/* Boutons */}
					<div className="flex justify-end gap-2 pt-4">
						<button
							type="button"
							className="btn btn-ghost"
							onClick={() =>
								(
									document.getElementById(
										"add_product_modal"
									) as HTMLDialogElement
								).close()
							}
						>
							Annuler
						</button>
						<button type="submit" className="btn btn-success">
							Ajouter
						</button>
					</div>
				</form>
			</div>
			<form method="dialog" className="modal-backdrop">
				<button>Fermer</button>
			</form>
		</dialog>
	);
}
