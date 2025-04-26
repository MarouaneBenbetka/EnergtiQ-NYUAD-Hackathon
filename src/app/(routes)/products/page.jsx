"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import {
	LayoutDashboard,
	Cpu,
	BrainCircuit,
	ChevronRight,
	BarChart3,
	LineChart,
	PieChart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ProductsPage() {
	const dashboardRef = useRef();
	const quantumRef = useRef();
	const aiRef = useRef();

	useEffect(() => {
		// Set IDs for scroll navigation
		if (dashboardRef.current) dashboardRef.current.id = "dashboard";
		if (quantumRef.current) quantumRef.current.id = "quantum";
		if (aiRef.current) aiRef.current.id = "ai";
	}, []);

	return (
		<div className="bg-gray-950 text-white">
			{/* Hero Section */}
			<section className="pt-32 pb-16 bg-gradient-to-b from-gray-900 to-gray-950">
				<div className="container mx-auto px-4 text-center">
					<h1 className="text-4xl md:text-6xl font-bold mb-6">
						Our Products
					</h1>
					<p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
						Explore our revolutionary solutions combining quantum
						computing and artificial intelligence for solar energy
						optimization.
					</p>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
						<Link
							className="bg-gray-800/50 p-6 rounded-lg cursor-pointer hover:bg-gray-800 transition-colors"
							href="/products/quantum"
						>
							<Cpu className="h-10 w-10 text-orange-500 mx-auto mb-4" />
							<h3 className="text-xl font-bold mb-2">
								Battery Design
							</h3>
							<p className="text-gray-400">
								Quantum computing technology for advanced
								material simulation
							</p>
						</Link>

						<Link
							className="bg-gray-800/50 p-6 rounded-lg cursor-pointer hover:bg-gray-800 transition-colors"
							href="/products/ai"
						>
							<BrainCircuit className="h-10 w-10 text-orange-500 mx-auto mb-4" />
							<h3 className="text-xl font-bold mb-2">
								Battery Placement
							</h3>
							<p className="text-gray-400">
								Artificial intelligence for optimization and
								predictive analytics
							</p>
						</Link>

						<Link
							className="bg-gray-800/50 p-6 rounded-lg cursor-pointer hover:bg-gray-800 transition-colors"
							href="/products/dashboard"
						>
							<LayoutDashboard className="h-10 w-10 text-orange-500 mx-auto mb-4" />
							<h3 className="text-xl font-bold mb-2">
								Dashboard
							</h3>
							<p className="text-gray-400">
								Real-time monitoring and analytics for your
								solar energy system
							</p>
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
