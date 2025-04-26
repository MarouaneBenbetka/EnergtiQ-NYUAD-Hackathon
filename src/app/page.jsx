import VideoBackground from "@/components/general/video-background";
import Link from "next/link";

export default function Home() {
	return (
		<VideoBackground videoSrc="/video/video.mp4">
			<div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
				<h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mt-16 mb-8">
					LIKE & SUBSCRIBE
				</h1>
				<p className="text-xl md:text-2xl text-white max-w-2xl mb-8">
					Experience the adventure of a lifetime with our exclusive
					travel packages
				</p>
				<Link
					href="/services"
					className="bg-white text-black px-8 py-3 text-lg font-semibold hover:bg-opacity-90 transition-colors"
				>
					Explore Now
				</Link>
			</div>
		</VideoBackground>
	);
}
