import VideoBackground from "@/components/general/video-background";
import Image from "next/image";

export default function Products() {
	return (
		<VideoBackground videoSrc="/video/video.mp4">
			<div className="flex flex-col items-center justify-center min-h-screen text-center px-4 pt-20">
				<h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
					Our Products
				</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
					{products.map((product, index) => (
						<div
							key={index}
							className="bg-black/60 backdrop-blur-sm rounded-lg overflow-hidden text-white"
						>
							<div className="relative h-48 w-full">
								<Image
									src={product.image || "/placeholder.svg"}
									alt={product.title}
									fill
									className="object-cover"
								/>
							</div>
							<div className="p-6">
								<h3 className="text-2xl font-semibold mb-2">
									{product.title}
								</h3>
								<p className="text-gray-300 mb-4">
									{product.description}
								</p>
								<p className="text-xl font-bold">
									${product.price}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</VideoBackground>
	);
}

const products = [
	{
		title: "Desert Safari Package",
		description: "3-day adventure through stunning desert landscapes",
		price: "499",
		image: "/placeholder.svg?height=300&width=500",
	},
	{
		title: "Mountain Expedition",
		description: "5-day hiking and camping in majestic mountains",
		price: "799",
		image: "/placeholder.svg?height=300&width=500",
	},
	{
		title: "Tropical Island Getaway",
		description: "7-day relaxation on pristine beaches",
		price: "1299",
		image: "/placeholder.svg?height=300&width=500",
	},
	{
		title: "Travel Essentials Kit",
		description: "Everything you need for your next adventure",
		price: "149",
		image: "/placeholder.svg?height=300&width=500",
	},
	{
		title: "Adventure Camera",
		description: "Waterproof, shockproof camera for extreme conditions",
		price: "349",
		image: "/placeholder.svg?height=300&width=500",
	},
	{
		title: "Premium Backpack",
		description: "Durable, comfortable backpack for all your travels",
		price: "199",
		image: "/placeholder.svg?height=300&width=500",
	},
];
