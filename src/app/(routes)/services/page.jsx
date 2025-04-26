import VideoBackground from "@/components/general/video-background";

export default function Services() {
	return (
		<VideoBackground videoSrc="/video/video.mp4">
			<div className="flex flex-col items-center justify-center min-h-screen text-center px-4 pt-20">
				<h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
					Our Services
				</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
					{services.map((service, index) => (
						<div
							key={index}
							className="bg-black/60 backdrop-blur-sm p-6 rounded-lg text-white"
						>
							<h3 className="text-2xl font-semibold mb-4">
								{service.title}
							</h3>
							<p className="text-gray-300">
								{service.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</VideoBackground>
	);
}

const services = [
	{
		title: "Adventure Tours",
		description:
			"Experience thrilling adventures in exotic locations around the world.",
	},
	{
		title: "Luxury Retreats",
		description:
			"Indulge in premium accommodations and exclusive experiences.",
	},
	{
		title: "Cultural Immersion",
		description:
			"Connect with local communities and experience authentic traditions.",
	},
	{
		title: "Wildlife Safaris",
		description: "Encounter majestic animals in their natural habitats.",
	},
	{
		title: "Photography Expeditions",
		description:
			"Capture stunning landscapes with expert photography guides.",
	},
	{
		title: "Custom Itineraries",
		description:
			"Personalized travel plans tailored to your preferences and interests.",
	},
];
