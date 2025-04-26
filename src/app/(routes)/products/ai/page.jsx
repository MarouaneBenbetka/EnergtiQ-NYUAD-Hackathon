import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function AIPage() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white pt-20">
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

				<div className="flex flex-col md:flex-row items-center mb-16">
					<div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
						<h1 className="text-4xl md:text-6xl font-bold mb-6">
							AI-Powered Battery Systems
						</h1>
						<p className="text-xl text-gray-300 mb-6">
							Our advanced AI systems revolutionize how batteries
							are managed, optimized, and maintained.
						</p>
						<p className="text-gray-400">
							Powered by state-of-the-art machine learning
							algorithms and trained on billions of battery
							performance data points, our AI battery management
							system maximizes efficiency, extends lifespan, and
							ensures optimal performance in any condition.
						</p>
					</div>
					<div className="md:w-1/2 relative h-64 md:h-96 w-full rounded-lg overflow-hidden">
						<Image
							src="/placeholder.svg?height=600&width=800"
							alt="AI Battery Management"
							fill
							className="object-cover"
						/>
					</div>
				</div>

				{/* AI Features */}
				<div className="mb-20">
					<h2 className="text-3xl font-bold mb-8 text-center">
						Key Features
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{aiFeatures.map((feature, index) => (
							<div
								key={index}
								className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 hover:bg-gray-800/70 transition-colors"
							>
								<div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mb-4">
									<span className="text-orange-400 text-xl font-bold">
										{index + 1}
									</span>
								</div>
								<h3 className="text-xl font-bold mb-3">
									{feature.title}
								</h3>
								<p className="text-gray-400">
									{feature.description}
								</p>
							</div>
						))}
					</div>
				</div>

				{/* How It Works */}
				<div className="mb-20">
					<h2 className="text-3xl font-bold mb-8 text-center">
						How Our AI Battery Management Works
					</h2>
					<div className="relative">
						<div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 bg-orange-500/30 hidden md:block"></div>

						{aiProcess.map((step, index) => (
							<div
								key={index}
								className={`relative flex flex-col md:flex-row items-center md:items-start gap-8 mb-12 ${
									index % 2 === 0
										? "md:flex-row"
										: "md:flex-row-reverse"
								}`}
							>
								<div className="md:w-1/2 relative">
									<div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-orange-500 z-10"></div>
									<div
										className={`bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 ${
											index % 2 === 0
												? "md:mr-8"
												: "md:ml-8"
										}`}
									>
										<h3 className="text-xl font-bold mb-3 text-orange-400">
											{step.title}
										</h3>
										<p className="text-gray-300">
											{step.description}
										</p>
									</div>
								</div>
								<div className="md:w-1/2"></div>
							</div>
						))}
					</div>
				</div>

				{/* Battery Placement Optimization */}
				<div className="mb-20">
					<h2 className="text-3xl font-bold mb-8 text-center">
						Battery Placement Optimization
					</h2>
					<div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8">
						<div className="flex flex-col md:flex-row items-center">
							<div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
								<h3 className="text-2xl font-bold mb-4 text-orange-400">
									Intelligent Placement Analysis
								</h3>
								<p className="text-gray-300 mb-4">
									Our AI system analyzes the optimal placement
									of batteries in any device or system,
									considering factors such as heat
									distribution, weight balance, space
									efficiency, and electromagnetic
									interference.
								</p>
								<p className="text-gray-300">
									By optimizing battery placement, we can
									increase energy efficiency by up to 23%,
									reduce thermal management requirements by
									35%, and extend overall battery lifespan by
									40% compared to conventional placement
									methods.
								</p>
							</div>
							<div className="md:w-1/2 relative h-64 md:h-80 w-full rounded-lg overflow-hidden">
								<Image
									src="/placeholder.svg?height=500&width=700"
									alt="Battery Placement Optimization"
									fill
									className="object-cover"
								/>
							</div>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
							<div className="bg-black/30 p-4 rounded-lg">
								<h4 className="font-bold mb-2">
									Thermal Optimization
								</h4>
								<p className="text-sm text-gray-400">
									AI analyzes heat generation patterns to
									place batteries where cooling is most
									efficient.
								</p>
							</div>
							<div className="bg-black/30 p-4 rounded-lg">
								<h4 className="font-bold mb-2">
									Space Utilization
								</h4>
								<p className="text-sm text-gray-400">
									Maximizes energy density by optimizing the
									spatial arrangement of battery cells.
								</p>
							</div>
							<div className="bg-black/30 p-4 rounded-lg">
								<h4 className="font-bold mb-2">
									Weight Distribution
								</h4>
								<p className="text-sm text-gray-400">
									Balances weight for improved device handling
									and reduced structural stress.
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Call to Action */}
				<div className="bg-gradient-to-r from-orange-600 to-orange-400 rounded-lg p-8 text-center mb-20">
					<h2 className="text-3xl font-bold mb-4">
						Ready to Revolutionize Your Battery Systems?
					</h2>
					<p className="text-xl mb-6 max-w-2xl mx-auto">
						Join thousands of companies who have transformed their
						energy storage solutions with our AI battery technology.
					</p>
					<Link
						href="/signup"
						className="inline-block bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
					>
						Get Started Today
					</Link>
				</div>
			</div>
		</div>
	);
}

const aiFeatures = [
	{
		title: "Adaptive Charging",
		description:
			"AI dynamically adjusts charging parameters based on battery condition, temperature, and usage patterns.",
	},
	{
		title: "Predictive Maintenance",
		description:
			"Forecasts battery degradation and potential failures before they occur, enabling proactive maintenance.",
	},
	{
		title: "Energy Optimization",
		description:
			"Maximizes energy efficiency by intelligently managing discharge rates and power distribution.",
	},
	{
		title: "Thermal Management",
		description:
			"Precisely controls temperature to prevent overheating and extend battery lifespan.",
	},
	{
		title: "Usage Pattern Analysis",
		description:
			"Learns from usage patterns to optimize battery performance for specific applications.",
	},
	{
		title: "Placement Optimization",
		description:
			"Determines the ideal physical arrangement of battery cells for maximum efficiency and safety.",
	},
];

const aiProcess = [
	{
		title: "Data Collection",
		description:
			"Our AI continuously collects data from sensors monitoring voltage, current, temperature, and hundreds of other parameters across the battery system.",
	},
	{
		title: "Pattern Recognition",
		description:
			"Advanced neural networks identify patterns in battery performance and usage that would be impossible for human analysts to detect.",
	},
	{
		title: "Predictive Modeling",
		description:
			"The system creates detailed models that predict future battery behavior, potential issues, and optimal operating conditions.",
	},
	{
		title: "Adaptive Control",
		description:
			"Based on real-time analysis, the AI dynamically adjusts charging, discharging, and thermal management parameters.",
	},
	{
		title: "Continuous Learning",
		description:
			"With each charge cycle, the AI refines its models, becoming more accurate and efficient over the battery's lifetime.",
	},
];
