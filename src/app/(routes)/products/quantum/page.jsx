"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, AtomIcon, Heater } from "lucide-react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductsNavbar from "@/components/general/products-navbar";

// Reusable card component
function DiagramCard({ molecule, diagram, view }) {
	return (
		<div
			className={`bg-gray-900 rounded-lg overflow-hidden border border-gray-800 shadow-lg flex flex-col`}
		>
			{view === "full" && (
				<div className="p-6 border-b border-gray-800">
					<h3 className="text-2xl font-bold text-orange-400">
						{diagram.title}
					</h3>
					<p className="text-md text-gray-300">
						{diagram.description}
					</p>
				</div>
			)}
			<div
				className={
					view === "grid" ? "relative h-64" : "relative h-[500px]"
				}
			>
				<Image
					src={`/quantum/${molecule}/${diagram.id}.png`}
					alt={`${diagram.title} for ${molecule.toUpperCase()}`}
					fill
					className="object-contain p-6"
				/>
			</div>
			{view === "grid" && (
				<div className="p-6">
					<h3 className="text-xl font-bold text-orange-400">
						{diagram.title}
					</h3>
					<p className="text-sm text-gray-300">
						{diagram.description}
					</p>
				</div>
			)}
		</div>
	);
}

export default function QuantumPage() {
	const [selectedMolecule, setSelectedMolecule] = useState("h2");

	const molecules = [
		{ value: "h2", label: "H₂ (Hydrogen)" },
		{ value: "li", label: "Li (Lithium)" },
	];

	const diagrams = [
		{
			id: "energy-eigenstates",
			title: "Energy Eigenstates",
			description: "Quantum energy levels of the molecule",
		},
		{
			id: "ion-energy-eigenstates",
			title: "+1 Ion Energy Eigenstates",
			description: "Energy levels of the ionized molecule",
		},
		{
			id: "heat-capacity",
			title: "Heat Capacity",
			description: "Thermal energy storage characteristics",
		},
		{
			id: "Ionization-energy",
			title: "Ionization Energy",
			description: "Energy required to remove an electron",
		},
		{
			id: "free-energy",
			title: "Free Energy",
			description:
				"Available energy for work at constant temperature and pressure",
		},
	];

	return (
		<div className="min-h-screen bg-black text-white pt-20">
			<ProductsNavbar />
			<div className="container mx-auto px-4">
				<div className="mb-8">
					<Link
						href="/products/dashboard"
						className="inline-flex items-center text-orange-400 hover:text-orange-300"
					>
						<ArrowLeft className="mr-2 h-4 w-4" />
						Back to Products
					</Link>
				</div>

				<h1 className="text-4xl md:text-6xl font-bold mb-6">
					Quantum Molecular Analysis
				</h1>
				<p className="text-xl text-gray-300 max-w-3xl mb-12">
					Explore the quantum properties of different molecules that
					form the foundation of our revolutionary energy storage
					technology.
				</p>

				{/* Molecule Selector */}
				<div className="max-w-8xl mx-auto mb-12">
					<div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6">
						<div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6">
							<div className="flex items-center">
								<AtomIcon className="h-6 w-6 text-orange-400 mr-2" />
								<h2 className="text-2xl font-bold">
									Select Molecule:
								</h2>
							</div>
							<div className="w-full md:w-64">
								<Select
									value={selectedMolecule}
									onValueChange={setSelectedMolecule}
								>
									<SelectTrigger className="bg-gray-900 border-gray-700">
										<SelectValue placeholder="Select a molecule" />
									</SelectTrigger>
									<SelectContent className="bg-gray-900 border-gray-700">
										{molecules.map((molecule) => (
											<SelectItem
												key={molecule.value}
												value={molecule.value}
												className="text-white"
											>
												{molecule.label}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</div>
						</div>

						{/* Diagram Tabs */}
						<Tabs defaultValue="full" className="w-full">
							<TabsList className="grid w-full max-w-md grid-cols-2 mb-6">
								<TabsTrigger value="grid">
									Grid View
								</TabsTrigger>
								<TabsTrigger value="full">
									Full View
								</TabsTrigger>
							</TabsList>

							<TabsContent value="full">
								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
									{diagrams.map((diagram) => (
										<DiagramCard
											key={diagram.id}
											molecule={selectedMolecule}
											diagram={diagram}
											view="grid"
										/>
									))}
								</div>
							</TabsContent>

							<TabsContent value="full">
								<div className="space-y-10">
									{diagrams.map((diagram) => (
										<DiagramCard
											key={diagram.id}
											molecule={selectedMolecule}
											diagram={diagram}
											view="full"
										/>
									))}
								</div>
							</TabsContent>
						</Tabs>
					</div>
				</div>

				{/* Explanation Section */}
				<div className="max-w-5xl mx-auto mb-20">
					<h2 className="text-3xl font-bold mb-6 text-center">
						Understanding Quantum Properties
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6">
							<h3 className="text-xl font-bold mb-4 text-orange-400">
								Energy Eigenstates
							</h3>
							<p className="text-gray-300 mb-4">
								Energy eigenstates represent the discrete energy
								levels that electrons can occupy within a
								molecule. These quantum states are fundamental
								to understanding how molecules store and
								transfer energy.
							</p>
							<p className="text-gray-300">
								Our quantum battery technology leverages these
								precise energy states to store energy with
								unprecedented efficiency, allowing for rapid
								charging and minimal energy loss during storage.
							</p>
						</div>
						<div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6">
							<h3 className="text-xl font-bold mb-4 text-orange-400">
								Quantum Advantages
							</h3>
							<p className="text-gray-300 mb-4">
								By analyzing the quantum properties of different
								molecules, we can identify ideal candidates for
								energy storage applications. The ionization
								energy, heat capacity, and free energy diagrams
								provide critical insights into how a molecule
								will perform in various conditions.
							</p>
							<p className="text-gray-300">
								These quantum-level insights allow us to
								engineer battery materials that outperform
								traditional chemical batteries in energy
								density, charging speed, and longevity.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
