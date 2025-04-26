"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function QuantumPage() {
	const [isPlaying, setIsPlaying] = useState(false);
	const [isMuted, setIsMuted] = useState(true);
	const [progress, setProgress] = useState(0);
	const videoRef = useRef();

	useEffect(() => {
		const video = videoRef.current;
		if (!video) return;

		const updateProgress = () => {
			if (video.duration) {
				setProgress((video.currentTime / video.duration) * 100);
			}
		};

		video.addEventListener("timeupdate", updateProgress);

		return () => {
			video.removeEventListener("timeupdate", updateProgress);
		};
	}, []);

	const togglePlay = () => {
		if (videoRef.current) {
			if (isPlaying) {
				videoRef.current.pause();
			} else {
				videoRef.current.play();
			}
			setIsPlaying(!isPlaying);
		}
	};

	const toggleMute = () => {
		if (videoRef.current) {
			videoRef.current.muted = !isMuted;
			setIsMuted(!isMuted);
		}
	};

	return (
		<div className="min-h-screen bg-black text-white pt-20">
			<div className="container mx-auto px-4">
				<div className="mb-8">
					<Link
						href="/products"
						className="inline-flex items-center text-orange-400 hover:text-orange-300"
					>
						<ArrowLeft className="mr-2 h-4 w-4" />
						Back to Products
					</Link>
				</div>

				<h1 className="text-4xl md:text-6xl font-bold mb-6">
					Quantum Battery Technology
				</h1>
				<p className="text-xl text-gray-300 max-w-3xl mb-12">
					Experience the revolutionary quantum mechanical principles
					that will transform the future of energy storage and battery
					technology.
				</p>

				{/* Video Simulation Container */}
				<div className="relative max-w-5xl mx-auto mb-16 rounded-lg overflow-hidden shadow-2xl">
					<video
						ref={videoRef}
						className="w-full aspect-video bg-gray-900"
						poster="/placeholder.svg?height=720&width=1280"
						muted
					>
						<source
							src="/videos/quantum-simulation.mp4"
							type="video/mp4"
						/>
						Your browser does not support the video tag.
					</video>

					{/* Video Controls */}
					<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
						{/* Progress Bar */}
						<div className="w-full h-1 bg-gray-700 rounded-full mb-4 cursor-pointer">
							<div
								className="h-full bg-orange-500 rounded-full"
								style={{ width: `${progress}%` }}
							></div>
						</div>

						<div className="flex items-center justify-between">
							<div className="flex items-center space-x-4">
								<Button
									variant="ghost"
									size="icon"
									className="text-white hover:bg-white/20"
									onClick={togglePlay}
								>
									{isPlaying ? (
										<Pause className="h-6 w-6" />
									) : (
										<Play className="h-6 w-6" />
									)}
								</Button>
								<Button
									variant="ghost"
									size="icon"
									className="text-white hover:bg-white/20"
									onClick={toggleMute}
								>
									{isMuted ? (
										<VolumeX className="h-6 w-6" />
									) : (
										<Volume2 className="h-6 w-6" />
									)}
								</Button>
							</div>
							<div className="text-sm text-gray-300">
								Quantum Battery Simulation
							</div>
						</div>
					</div>
				</div>

				{/* Content Sections */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
					<div>
						<h2 className="text-2xl font-bold mb-4 text-orange-400">
							How Quantum Batteries Work
						</h2>
						<p className="text-gray-300 mb-4">
							Quantum batteries harness the principles of quantum
							mechanics to store and release energy. Unlike
							conventional batteries that rely on chemical
							reactions, quantum batteries leverage quantum
							entanglement and superposition to achieve
							unprecedented energy density and charging speeds.
						</p>
						<p className="text-gray-300">
							Our quantum battery technology utilizes quantum dots
							and engineered quantum states to create a new
							paradigm in energy storage. This allows for
							near-instantaneous charging, minimal energy loss,
							and significantly longer lifespans compared to
							traditional lithium-ion batteries.
						</p>
					</div>
					<div>
						<h2 className="text-2xl font-bold mb-4 text-orange-400">
							Benefits of Quantum Batteries
						</h2>
						<ul className="text-gray-300 space-y-2">
							<li className="flex items-start">
								<span className="text-orange-400 mr-2">•</span>
								<span>
									Ultra-fast charging (full charge in under 30
									seconds)
								</span>
							</li>
							<li className="flex items-start">
								<span className="text-orange-400 mr-2">•</span>
								<span>
									10x higher energy density than lithium-ion
									batteries
								</span>
							</li>
							<li className="flex items-start">
								<span className="text-orange-400 mr-2">•</span>
								<span>
									Minimal degradation over thousands of charge
									cycles
								</span>
							</li>
							<li className="flex items-start">
								<span className="text-orange-400 mr-2">•</span>
								<span>
									Temperature resistant from -40°C to 85°C
								</span>
							</li>
							<li className="flex items-start">
								<span className="text-orange-400 mr-2">•</span>
								<span>
									Environmentally friendly with no toxic
									materials
								</span>
							</li>
						</ul>
					</div>
				</div>

				{/* Applications Section */}
				<div className="mb-20">
					<h2 className="text-3xl font-bold mb-8 text-center">
						Applications
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6">
							<div className="h-48 relative mb-4 rounded-lg overflow-hidden">
								<Image
									src="/placeholder.svg?height=300&width=400"
									alt="Electric Vehicles"
									fill
									className="object-cover"
								/>
							</div>
							<h3 className="text-xl font-bold mb-2">
								Electric Vehicles
							</h3>
							<p className="text-gray-300">
								Quantum batteries enable EVs with 1000+ mile
								range and charging times under 5 minutes,
								revolutionizing transportation.
							</p>
						</div>
						<div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6">
							<div className="h-48 relative mb-4 rounded-lg overflow-hidden">
								<Image
									src="/placeholder.svg?height=300&width=400"
									alt="Grid Storage"
									fill
									className="object-cover"
								/>
							</div>
							<h3 className="text-xl font-bold mb-2">
								Grid Storage
							</h3>
							<p className="text-gray-300">
								Stabilize renewable energy grids with compact,
								efficient quantum battery arrays that store
								massive amounts of energy.
							</p>
						</div>
						<div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6">
							<div className="h-48 relative mb-4 rounded-lg overflow-hidden">
								<Image
									src="/placeholder.svg?height=300&width=400"
									alt="Consumer Electronics"
									fill
									className="object-cover"
								/>
							</div>
							<h3 className="text-xl font-bold mb-2">
								Consumer Electronics
							</h3>
							<p className="text-gray-300">
								Smartphones and laptops that charge in seconds
								and last for weeks on a single charge.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
