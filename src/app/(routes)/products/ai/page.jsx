"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Zap, Shield, LineChart, MapPin } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductsNavbar from "@/components/general/products-navbar";

export default function AIPage() {
	const [city, setCity] = useState("city1");
	const [clusterSize, setClusterSize] = useState(10);
	const [mapUrl, setMapUrl] = useState("");

	// Update the map URL when city or cluster size changes
	useEffect(() => {
		// Map city values to actual city names for the file path
		const cityName = city === "city1" ? "abu_dhabi" : "abu_dhabi";
		// Set the map URL with the correct city name and cluster size
		setMapUrl(`/maps/${cityName}_${clusterSize}.html`);
	}, [city, clusterSize]);

	// Handle slider value change
	const handleSliderChange = (value) => {
		// Directly set to increments of 5 (5, 10, 15, 20)
		const newValue = Math.round(value[0] / 5) * 5;
		// Ensure the value is within our range
		const clampedValue = Math.max(5, Math.min(20, newValue));
		setClusterSize(clampedValue);
	};

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

				{/* Map Section */}
				<div className="mb-20">
					<h2 className="text-3xl font-bold mb-6 text-center">
						Energy Distribution Map
					</h2>
					<p className="text-gray-300 text-center max-w-3xl mx-auto mb-8">
						Explore our AI-powered energy distribution analysis
						across different cities and cluster sizes.
					</p>

					<div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 mb-8">
						<div className="flex flex-col md:flex-row gap-8 mb-6">
							{/* City Selection */}
							<div className="w-full md:w-1/2">
								<h3 className="text-xl font-bold mb-4 flex items-center">
									<MapPin className="mr-2 h-5 w-5 text-orange-400" />
									Select City
								</h3>
								<Tabs
									defaultValue="city1"
									value={city}
									onValueChange={setCity}
									className="w-full"
								>
									<TabsList className="grid grid-cols-2 w-full">
										<TabsTrigger value="city1">
											Abu dhabi
										</TabsTrigger>
										<TabsTrigger value="city2">
											Dubai
										</TabsTrigger>
									</TabsList>
								</Tabs>
							</div>

							{/* Cluster Size Slider */}
							<div className="w-full md:w-1/2">
								<h3 className="text-xl font-bold mb-4">
									Cluster Size: {clusterSize}
								</h3>
								<div className="px-2">
									<Slider
										defaultValue={[10]}
										min={10}
										max={25}
										step={5}
										onValueChange={handleSliderChange}
										className="mb-2"
									/>
									<div className="flex justify-between text-sm text-gray-400">
										<span>10</span>
										<span>15</span>
										<span>20</span>
										<span>25</span>
									</div>
								</div>
							</div>
						</div>

						{/* Map Display */}
						<div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 h-[500px] w-full">
							<iframe
								src={mapUrl}
								className="w-full h-full"
								title={`Energy distribution map for ${
									city === "city1" ? "Abu dhabi" : "Dubai"
								} with cluster size ${clusterSize}`}
							/>
						</div>

						<div className="mt-4 text-sm text-gray-400 text-center">
							Data visualization showing energy distribution
							patterns and optimization opportunities.
						</div>
					</div>
				</div>

				{/* Features Section */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
					<div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 flex flex-col items-center text-center">
						<div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mb-6">
							<Zap className="h-8 w-8 text-orange-500" />
						</div>
						<h3 className="text-xl font-bold mb-3">
							Predictive Optimization
						</h3>
						<p className="text-gray-300">
							Our AI anticipates energy demand patterns and
							automatically adjusts distribution to maximize
							efficiency and minimize costs.
						</p>
					</div>
					<div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 flex flex-col items-center text-center">
						<div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mb-6">
							<Shield className="h-8 w-8 text-orange-500" />
						</div>
						<h3 className="text-xl font-bold mb-3">
							Preventive Maintenance
						</h3>
						<p className="text-gray-300">
							Detect potential failures before they occur with our
							advanced anomaly detection algorithms, reducing
							downtime and repair costs.
						</p>
					</div>
					<div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 flex flex-col items-center text-center">
						<div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mb-6">
							<LineChart className="h-8 w-8 text-orange-500" />
						</div>
						<h3 className="text-xl font-bold mb-3">
							Real-time Analytics
						</h3>
						<p className="text-gray-300">
							Comprehensive dashboards provide instant insights
							into your energy consumption, costs, and carbon
							footprint with actionable recommendations.
						</p>
					</div>
				</div>

				{/* Use Cases */}
				<div className="mb-20">
					<h2 className="text-3xl font-bold mb-8 text-center">
						Use Cases
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
						<div className="flex flex-col md:flex-row gap-6">
							<div className="w-full md:w-1/3 h-48 md:h-auto relative rounded-lg overflow-hidden">
								<Image
									src="/placeholder.svg?height=300&width=300"
									alt="Smart Grid Management"
									fill
									className="object-cover"
								/>
							</div>
							<div className="w-full md:w-2/3">
								<h3 className="text-2xl font-bold mb-3 text-orange-400">
									Smart Grid Management
								</h3>
								<p className="text-gray-300 mb-4">
									Our AI balances load distribution across
									power grids, integrates renewable sources
									seamlessly, and ensures stability during
									peak demand periods.
								</p>
								<ul className="text-gray-300 space-y-1">
									<li className="flex items-start">
										<span className="text-orange-400 mr-2">
											•
										</span>
										<span>
											30% reduction in grid management
											costs
										</span>
									</li>
									<li className="flex items-start">
										<span className="text-orange-400 mr-2">
											•
										</span>
										<span>
											45% fewer outages and disruptions
										</span>
									</li>
									<li className="flex items-start">
										<span className="text-orange-400 mr-2">
											•
										</span>
										<span>
											Seamless integration with renewable
											sources
										</span>
									</li>
								</ul>
							</div>
						</div>
						<div className="flex flex-col md:flex-row gap-6">
							<div className="w-full md:w-1/3 h-48 md:h-auto relative rounded-lg overflow-hidden">
								<Image
									src="/placeholder.svg?height=300&width=300"
									alt="Industrial Energy Management"
									fill
									className="object-cover"
								/>
							</div>
							<div className="w-full md:w-2/3">
								<h3 className="text-2xl font-bold mb-3 text-orange-400">
									Industrial Energy Management
								</h3>
								<p className="text-gray-300 mb-4">
									Optimize energy consumption in manufacturing
									facilities by analyzing production
									schedules, equipment efficiency, and
									environmental factors.
								</p>
								<ul className="text-gray-300 space-y-1">
									<li className="flex items-start">
										<span className="text-orange-400 mr-2">
											•
										</span>
										<span>
											25% average reduction in energy
											costs
										</span>
									</li>
									<li className="flex items-start">
										<span className="text-orange-400 mr-2">
											•
										</span>
										<span>
											40% improvement in equipment
											lifespan
										</span>
									</li>
									<li className="flex items-start">
										<span className="text-orange-400 mr-2">
											•
										</span>
										<span>
											Reduced carbon footprint and
											emissions
										</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
