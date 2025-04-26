"use client";

import { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { MapPin } from "lucide-react";

export default function MapComponent() {
	const [city, setCity] = useState("city1");
	const [clusterSize, setClusterSize] = useState(10);
	const [mapUrl, setMapUrl] = useState("");

	// Update the map URL when city or cluster size changes
	useEffect(() => {
		// This would be the path to your HTML maps
		setMapUrl(`/maps/${city}-cluster-${clusterSize}.html`);
	}, [city, clusterSize]);

	// Handle slider value change
	const handleSliderChange = (value: number[]) => {
		// Find the closest cluster size (5, 10, 15, 20) to the slider value
		const sizes = [5, 10, 15, 20];
		const closest = sizes.reduce((prev, curr) => {
			return Math.abs(curr - value[0]) < Math.abs(prev - value[0])
				? curr
				: prev;
		});
		setClusterSize(closest);
	};

	// Calculate slider marks for the specific values
	const getSliderValue = () => {
		// Map the cluster size to a slider value between 0-100
		const sizes = [5, 10, 15, 20];
		const index = sizes.indexOf(clusterSize);
		return [index * 33.33]; // 0, 33.33, 66.66, 100
	};

	return (
		<div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6">
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
							<TabsTrigger value="city1">City One</TabsTrigger>
							<TabsTrigger value="city2">City Two</TabsTrigger>
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
							value={getSliderValue()}
							min={0}
							max={100}
							step={33.33}
							onValueChange={(value) => {
								// Convert slider value back to cluster size
								const sizes = [5, 10, 15, 20];
								const index = Math.round(value[0] / 33.33);
								setClusterSize(sizes[index]);
							}}
							className="mb-2"
						/>
						<div className="flex justify-between text-sm text-gray-400">
							<span>5</span>
							<span>10</span>
							<span>15</span>
							<span>20</span>
						</div>
					</div>
				</div>
			</div>

			{/* Map Display */}
			<div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 h-[500px] w-full">
				<iframe
					src={mapUrl}
					className="w-full h-full"
					title={`Energy distribution map for ${city} with cluster size ${clusterSize}`}
				/>
			</div>

			<div className="mt-4 text-sm text-gray-400 text-center">
				Data visualization showing energy distribution patterns and
				optimization opportunities.
			</div>
		</div>
	);
}
