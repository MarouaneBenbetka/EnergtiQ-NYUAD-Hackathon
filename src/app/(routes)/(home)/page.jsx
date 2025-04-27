import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
	Sun,
	Battery,
	Cpu,
	BrainCircuit,
	BarChart3,
	Users,
	Lightbulb,
	ChevronDown,
	Globe,
	Factory,
	Building2,
	CloudSun,
} from "lucide-react";
import VideoBackground from "@/components/general/video-background";
import Navbar from "@/components/general/navbar";

export default function Home() {
	return (
		<div className="min-h-screen bg-black text-white">
			<Navbar />

			{/* Hero Section */}
			<section
				id="hero"
				className="relative min-h-screen flex items-center justify-center"
			>
				<VideoBackground videoSrc="/video/video.mp4">
					<div className="container mx-auto px-4 py-20 flex flex-col items-center text-center mt-50">
						<div className="mb-6 flex items-center">
							<Sun className="h-16 w-16 text-orange-500 mr-4" />
							<h1 className="text-5xl md:text-7xl font-bold flex items-center">
								<div className="w-56 h-20 relative  rounded-lg overflow-hidden flex items-center justify-center">
									<Image
										src="/logos/english_white_logo.png"
										alt="Logo"
										fill
										className="object-contain p-2"
									/>
								</div>
								<span className="text-orange-500 mx-1">-</span>
								<div className="w-32 h-24 relative  rounded-lg overflow-hidden flex items-center justify-center">
									<Image
										src="/logos/arabic_white_logo.png"
										alt="Logo"
										fill
										className="object-contain p-2"
									/>
								</div>
							</h1>
						</div>
						<h2 className="text-2xl md:text-4xl font-semibold mb-8 text-orange-400">
							AI-Powered Quantum Solar Revolution
						</h2>
						<p className="text-xl max-w-3xl mx-auto mb-12">
							Transforming solar energy with quantum computing and
							artificial intelligence for a sustainable future.
						</p>

						<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
							<ChevronDown className="h-10 w-10 text-orange-500" />
						</div>
					</div>
				</VideoBackground>
			</section>

			{/* Problem Section */}
			<section
				id="problem"
				className="py-20 bg-gradient-to-b from-black to-gray-900"
			>
				<div className="container mx-auto px-4">
					<div className="flex flex-col md:flex-row items-center gap-12">
						<div className="md:w-1/2">
							<h2 className="text-3xl md:text-5xl font-bold mb-6">
								The Problem
							</h2>
							<div className="h-1 w-20 bg-orange-500 mb-8"></div>
							<p className="text-lg text-gray-300 mb-6">
								Using solar energy is an excellent way to
								harness clean, renewable power—but it comes with
								a catch: when battery packs overheat during
								charge–discharge cycles, they suffer accelerated
								capacity loss, safety risks like thermal
								runaway, and higher cooling and maintenance
								costs.
							</p>
							<ul className="space-y-4">
								<li className="flex items-start">
									<div className="mt-1 mr-4 p-1 bg-orange-500/20 rounded-full">
										<Battery className="h-5 w-5 text-orange-500" />
									</div>
									<p className="text-gray-300">
										Accelerated capacity fade, reducing the
										amount of energy the system can store
										and deliver over its lifetime.
									</p>
								</li>
								<li className="flex items-start">
									<div className="mt-1 mr-4 p-1 bg-orange-500/20 rounded-full">
										<Sun className="h-5 w-5 text-orange-500" />
									</div>
									<p className="text-gray-300">
										Elevated safety risks, including thermal
										runaway, venting, or even fires if
										temperatures aren't carefully managed.
									</p>
								</li>
								<li className="flex items-start">
									<div className="mt-1 mr-4 p-1 bg-orange-500/20 rounded-full">
										<BarChart3 className="h-5 w-5 text-orange-500" />
									</div>
									<p className="text-gray-300">
										Increased operational costs and
										downtime, as active cooling systems and
										safety interlocks add expense and can
										interrupt energy availability.
									</p>
								</li>
							</ul>
						</div>
						<div className="md:w-1/2 relative h-80 md:h-96">
							<Image
								src="/images/landing-page/battery.jpg"
								alt="Solar energy problems"
								fill
								className="object-cover rounded-lg"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Solution Section */}
			<section id="solution" className="py-20 bg-gray-900">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">
						Our Solution
					</h2>
					<div className="h-1 w-20 bg-orange-500 mx-auto mb-12"></div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
						<div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg">
							<div className="flex items-center mb-6">
								<div className="p-3 bg-orange-500/20 rounded-full mr-4">
									<Cpu className="h-8 w-8 text-orange-500" />
								</div>
								<h3 className="text-2xl font-bold">
									Quantum Computing
								</h3>
							</div>
							<p className="text-gray-300 mb-6">
								We leverage Quantum Computing to simulate and
								identify novel battery materials with enhanced
								energy density and longevity using Material
								Quantum Algorithms.
							</p>
							<ul className="space-y-3 text-gray-300">
								<li className="flex items-start">
									<span className="text-orange-500 mr-2">
										•
									</span>
									<span>Atomic-level material modeling</span>
								</li>
								<li className="flex items-start">
									<span className="text-orange-500 mr-2">
										•
									</span>
									<span>
										High-efficiency battery material
										discovery
									</span>
								</li>
								<li className="flex items-start">
									<span className="text-orange-500 mr-2">
										•
									</span>
									<span>
										Cost-effective energy storage solutions
									</span>
								</li>
							</ul>
						</div>

						<div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg">
							<div className="flex items-center mb-6">
								<div className="p-3 bg-orange-500/20 rounded-full mr-4">
									<BrainCircuit className="h-8 w-8 text-orange-500" />
								</div>
								<h3 className="text-2xl font-bold">
									Artificial Intelligence
								</h3>
							</div>
							<p className="text-gray-300 mb-6">
								We integrate AI/ML to optimize solar panel and
								battery placement through analysing temperature
								and population density, and enhance power grids
								for dynamic energy distribution.
							</p>
							<ul className="space-y-3 text-gray-300">
								<li className="flex items-start">
									<span className="text-orange-500 mr-2">
										•
									</span>
									<span>
										Analysis of the temperature and
										population density features
									</span>
								</li>
								<li className="flex items-start">
									<span className="text-orange-500 mr-2">
										•
									</span>
									<span>
										Optimal panel and battery placement
									</span>
								</li>
								<li className="flex items-start">
									<span className="text-orange-500 mr-2">
										•
									</span>
									<span>
										Power grid enhancement and load
										balancing
									</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* SDG Alignment Section */}
			<section
				id="sdgs"
				className="py-20 bg-gradient-to-b from-gray-900 to-black"
			>
				<div className="container mx-auto px-4">
					<h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">
						Alignment with SDGs
					</h2>
					<div className="h-1 w-20 bg-orange-500 mx-auto mb-12"></div>

					<div
						className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center mx-auto"
						style={{ maxWidth: "700px" }}
					>
						<div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-orange-500/30">
							<div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center mb-4">
								<Sun className="h-8 w-8 text-orange-500" />
							</div>
							<h3 className="text-xl font-bold mb-2">SDG 7</h3>
							<h4 className="text-orange-400 mb-4">
								Affordable & Clean Energy
							</h4>
							<p className="text-gray-300">
								Improve solar efficiency to accelerate renewable
								energy adoption globally.
							</p>
						</div>

						<div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-orange-500/30">
							<div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center mb-4">
								<Building2 className="h-8 w-8 text-orange-500" />
							</div>
							<h3 className="text-xl font-bold mb-2">SDG 11</h3>
							<h4 className="text-orange-400 mb-4">
								Sustainable Cities & Communities
							</h4>
							<p className="text-gray-300">
								Enable smart urban planning with optimized
								renewable energy integration for more
								sustainable, resilient cities.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Impact Section */}
			<section
				id="impact"
				className="py-20 bg-gradient-to-b from-black to-gray-900"
			>
				<div className="container mx-auto px-4">
					<h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">
						Impact
					</h2>
					<div className="h-1 w-20 bg-orange-500 mx-auto mb-12"></div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg border-t-4 border-orange-500">
							<h3 className="text-2xl font-bold mb-4">
								Scalability
							</h3>
							<p className="text-gray-300">
								Applicable to urban and rural settings globally,
								particularly in sun-rich but energy-poor
								regions.
							</p>
							<div className="mt-6 h-40 relative rounded overflow-hidden">
								<Image
									src="/images/landing-page/scalability.jpg"
									alt="Innovation Impact"
									fill
									className="object-cover"
								/>
								<div className="absolute inset-0 bg-black/50" />
							</div>
						</div>

						<div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg border-t-4 border-orange-500">
							<h3 className="text-2xl font-bold mb-4">
								Sustainability
							</h3>
							<p className="text-gray-300">
								Extend battery lifespan and reduce waste while
								lowering energy costs for communities.
							</p>
							<div className="mt-6 h-40 relative rounded overflow-hidden">
								<Image
									src="/images/landing-page/sustainability.jpg"
									alt="Innovation Impact"
									fill
									className="object-cover"
								/>
								<div className="absolute inset-0 bg-black/50" />
							</div>
						</div>

						<div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg border-t-4 border-orange-500">
							<h3 className="text-2xl font-bold mb-4">
								Innovation
							</h3>
							<p className="text-gray-300">
								Combine QC and AI to address a critical
								bottleneck in the renewable energy lifecycle.
							</p>
							<div className="mt-6 h-40 relative rounded overflow-hidden">
								<Image
									src="/images/landing-page/innovation.jpg"
									alt="Innovation Impact"
									fill
									className="object-cover"
								/>
								<div className="absolute inset-0 bg-black/50" />
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Key Differentiator Section */}
			<section
				id="differentiator"
				className="py-20 bg-gradient-to-b from-gray-900 to-black"
			>
				<div className="container mx-auto px-4">
					<h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">
						Key Differentiator
					</h2>
					<div className="h-1 w-20 bg-orange-500 mx-auto mb-12"></div>

					<div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg border border-orange-500/30 max-w-4xl mx-auto">
						<div className="flex items-center mb-6">
							<div className="p-3 bg-orange-500/20 rounded-full mr-4">
								<Lightbulb className="h-8 w-8 text-orange-500" />
							</div>
							<h3 className="text-2xl font-bold">
								A Holistic QC+AI Approach
							</h3>
						</div>

						<p className="text-xl text-gray-300 mb-8">
							We address both material science limitations and
							systemic inefficiencies in solar energy deployment,
							creating a blueprint for scalable, socially
							impactful climate tech.
						</p>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div className="bg-gray-900/50 p-4 rounded-lg">
								<h4 className="font-bold mb-2 text-orange-400">
									End-to-End Solution
								</h4>
								<p className="text-gray-300 text-sm">
									From material discovery to deployment
									optimization and maintenance
								</p>
							</div>
							<div className="bg-gray-900/50 p-4 rounded-lg">
								<h4 className="font-bold mb-2 text-orange-400">
									Dual Technology Advantage
								</h4>
								<p className="text-gray-300 text-sm">
									Leveraging both quantum computing and AI for
									maximum impact
								</p>
							</div>
							<div className="bg-gray-900/50 p-4 rounded-lg">
								<h4 className="font-bold mb-2 text-orange-400">
									Social Impact Focus
								</h4>
								<p className="text-gray-300 text-sm">
									Prioritizing accessibility and affordability
									for underserved regions
								</p>
							</div>
							<div className="bg-gray-900/50 p-4 rounded-lg">
								<h4 className="font-bold mb-2 text-orange-400">
									Scalable Framework
								</h4>
								<p className="text-gray-300 text-sm">
									Adaptable to different environments,
									infrastructures, and energy needs
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* About Us Section */}
			<section id="about" className="py-20 bg-black">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">
						About Us
					</h2>
					<div className="h-1 w-20 bg-orange-500 mx-auto mb-12"></div>

					<div className="flex flex-col md:flex-row gap-12 items-center mb-16">
						<div className="md:w-1/2">
							<p className="text-xl text-gray-300 mb-6">
								EnergetiQ – Qطاقة is powered by a diverse group
								of students and enthusiasts in quantum
								computing, artificial intelligence, and
								renewable energy, united by a shared passion for
								clean-energy innovation. Though we’re still
								learning the ropes, our team brings together
								hands-on experience from university projects in
								material science, machine learning, and solar
								technology exploration across different regions.
								As hackathon participants, we’re drawing on this
								collective curiosity to prototype solutions that
								advance the UN Sustainable Development Goals.
								Above all, we’re committed to making renewable
								power more accessible and affordable—one
								creative idea at a time.
							</p>
						</div>

						<div className="md:w-1/2 relative h-80 md:h-96 w-full">
							<Image
								src="/images/landing-page/Team-photo.jpg"
								alt="EnergetiQ Team"
								fill
								className="object-cover rounded-lg"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section
				id="contact"
				className="py-20 bg-gradient-to-b from-black to-gray-900"
			>
				<div className="container mx-auto px-4 text-center">
					<h2 className="text-3xl md:text-5xl font-bold mb-6">
						Join the Revolution
					</h2>
					<p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
						Ready to transform solar energy with quantum computing
						and AI? Get in touch with our team.
					</p>
					<Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
						Contact Us
					</Button>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-gray-900 py-12 border-t border-gray-800">
				<div className="container mx-auto px-4">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<div className="mb-6 md:mb-0">
							<div className="flex items-center">
								<Sun className="h-8 w-8 text-orange-500 mr-3" />
								<div className="w-36 h-14 relative  rounded-lg overflow-hidden flex items-center justify-center">
									<Image
										src="/logos/english_white_logo.png"
										alt="Logo"
										fill
										className="object-contain p-2"
									/>
								</div>
								<span className="text-orange-500 mx-1">-</span>
								<div className="w-24 h-14 relative  rounded-lg overflow-hidden flex items-center justify-center">
									<Image
										src="/logos/arabic_white_logo.png"
										alt="Logo"
										fill
										className="object-contain p-2"
									/>
								</div>
							</div>
							<p className="text-gray-400 mt-2">
								AI-Powered Quantum Solar Revolution
							</p>
						</div>

						<div className="flex flex-col md:flex-row gap-8">
							<div>
								<h4 className="font-bold mb-3 text-orange-400">
									Navigation
								</h4>
								<ul className="space-y-2 text-gray-400">
									<li>
										<a
											href="#hero"
											className="hover:text-white"
										>
											Home
										</a>
									</li>
									<li>
										<a
											href="#problem"
											className="hover:text-white"
										>
											Problem
										</a>
									</li>
									<li>
										<a
											href="#solution"
											className="hover:text-white"
										>
											Solution
										</a>
									</li>
									<li>
										<a
											href="#about"
											className="hover:text-white"
										>
											About Us
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
						<p>© 2025 EnergetiQ - Qطاقة. All rights reserved.</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
