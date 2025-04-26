import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import VideoBackground from "@/components/general/video-background";

export default function Products() {
	return (
		<VideoBackground videoSrc="/video/video.mp4">
			<div className="flex flex-col items-center justify-center min-h-screen text-center px-4 pt-20">
				<h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
					Battery Solutions
				</h1>
				<p className="text-xl text-white max-w-3xl mx-auto mb-12">
					Discover our revolutionary battery technologies that are
					changing the future of energy storage
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
					{/* Quantum Battery Card */}
					<Link href="/products/quantum" className="group">
						<div className="bg-black/60 backdrop-blur-sm rounded-lg overflow-hidden text-white h-full transition-all duration-300 transform group-hover:scale-[1.02] group-hover:shadow-xl">
							<div className="relative h-64 w-full">
								<Image
									src="/images/quantum.jpg"
									alt="Quantum Battery Technology"
									fill
									className="object-cover transition-transform duration-500 group-hover:scale-110"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
								<div className="absolute bottom-4 left-4 right-4">
									<h3 className="text-3xl font-bold mb-2">
										Quantum Batteries
									</h3>
									<p className="text-gray-300">
										Next-generation energy storage using
										quantum mechanical principles
									</p>
								</div>
							</div>
							<div className="p-6 flex justify-between items-center">
								<span className="text-orange-400 font-semibold">
									Explore Quantum Technology
								</span>
								<ArrowRight className="h-5 w-5 text-orange-400 transition-transform duration-300 transform group-hover:translate-x-2" />
							</div>
						</div>
					</Link>

					{/* AI Battery Card */}
					<Link href="/products/ai" className="group">
						<div className="bg-black/60 backdrop-blur-sm rounded-lg overflow-hidden text-white h-full transition-all duration-300 transform group-hover:scale-[1.02] group-hover:shadow-xl">
							<div className="relative h-64 w-full">
								<Image
									src="/images/ai.jpg"
									alt="AI Battery Management"
									fill
									className="object-cover transition-transform duration-500 group-hover:scale-110"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
								<div className="absolute bottom-4 left-4 right-4">
									<h3 className="text-3xl font-bold mb-2">
										AI-Powered Batteries
									</h3>
									<p className="text-gray-300">
										Smart battery systems with advanced AI
										management technology
									</p>
								</div>
							</div>
							<div className="p-6 flex justify-between items-center">
								<span className="text-orange-400 font-semibold">
									Discover AI Battery Solutions
								</span>
								<ArrowRight className="h-5 w-5 text-orange-400 transition-transform duration-300 transform group-hover:translate-x-2" />
							</div>
						</div>
					</Link>
				</div>
			</div>
		</VideoBackground>
	);
}
