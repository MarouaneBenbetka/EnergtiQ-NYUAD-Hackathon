"use client";

import { useEffect, useRef } from "react";

export default function VideoBackground({ videoSrc, children }) {
	const videoRef = useRef(null);

	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.playbackRate = 0.75; // Slow down the video slightly
		}
	}, []);

	return (
		<div className="relative min-h-screen w-full overflow-hidden">
			<video
				ref={videoRef}
				autoPlay
				loop
				muted
				playsInline
				className="absolute top-0 left-0 w-full h-full object-cover"
			>
				<source src={videoSrc} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
			<div className="absolute top-0 left-0 w-full h-full bg-black/30" />
			<div className="relative z-10 min-h-screen w-full">{children}</div>
		</div>
	);
}
