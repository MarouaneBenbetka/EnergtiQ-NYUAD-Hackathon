import VideoBackground from "@/components/general/video-background";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignUp() {
	return (
		<VideoBackground videoSrc="/video/video.mp4">
			<div className="flex items-center justify-center min-h-screen px-4">
				<div className="w-full max-w-md bg-black/70 backdrop-blur-md p-8 rounded-lg">
					<h1 className="text-3xl font-bold text-white mb-6 text-center">
						Sign Up
					</h1>
					<form className="space-y-6">
						<div className="space-y-2">
							<Label htmlFor="name" className="text-white">
								Full Name
							</Label>
							<Input
								id="name"
								placeholder="Enter your full name"
								className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
							/>
						</div>

						<div className="space-y-2">
							<Label htmlFor="email" className="text-white">
								Email
							</Label>
							<Input
								id="email"
								type="email"
								placeholder="Enter your email"
								className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
							/>
						</div>

						<div className="space-y-2">
							<Label htmlFor="password" className="text-white">
								Password
							</Label>
							<Input
								id="password"
								type="password"
								placeholder="Create a password"
								className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
							/>
						</div>

						<Button
							type="submit"
							className="w-full bg-white text-black hover:bg-white/90"
						>
							Create Account
						</Button>

						<p className="text-sm text-center text-gray-300">
							Already have an account?{" "}
							<a href="#" className="text-white underline">
								Log in
							</a>
						</p>
					</form>
				</div>
			</div>
		</VideoBackground>
	);
}
