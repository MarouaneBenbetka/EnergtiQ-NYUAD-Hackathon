import { Inter } from "next/font/google";
import Link from "next/link";
import { Sun } from "lucide-react";
import ProductsNavbar from "@/components/general/products-navbar";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });
import ChatBubble from "@/components/ai/chat-bubble";
import Image from "next/image";

export default function ProductsLayout({ children }) {
	return (
		<div
			className={`min-h-screen bg-gray-950 text-white ${inter.className}`}
		>
			<ProductsNavbar />
			<main className="pt-20">{children}</main>

			{/* Products Footer */}
			<footer className="bg-gray-900 py-8 border-t border-gray-800">
				<div className="container mx-auto px-4">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<div className="mb-6 md:mb-0">
							<Link
								href="/"
								className="flex items-center text-white text-xl font-bold"
							>
								<Sun className="h-6 w-6 text-orange-500 mr-2" />
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
							</Link>
							<p className="text-gray-400 mt-2">
								AI-Powered Quantum Solar Revolution
							</p>
						</div>

						<div className="flex flex-col md:flex-row gap-8">
							<div>
								<h4 className="font-bold mb-3 text-orange-400">
									Products
								</h4>
								<ul className="space-y-2 text-gray-400">
									<li>
										<Link
											href="/products#dashboard"
											className="hover:text-white"
										>
											Dashboard
										</Link>
									</li>
									<li>
										<Link
											href="/products#quantum"
											className="hover:text-white"
										>
											Quantum Technology
										</Link>
									</li>
									<li>
										<Link
											href="/products#ai"
											className="hover:text-white"
										>
											AI Solutions
										</Link>
									</li>
								</ul>
							</div>

							<div>
								<h4 className="font-bold mb-3 text-orange-400">
									Company
								</h4>
								<ul className="space-y-2 text-gray-400">
									<li>
										<Link
											href="/"
											className="hover:text-white"
										>
											Main Website
										</Link>
									</li>
									<li>
										<Link
											href="/#about"
											className="hover:text-white"
										>
											About Us
										</Link>
									</li>
									<li>
										<Link
											href="/#contact"
											className="hover:text-white"
										>
											Contact
										</Link>
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
			<ChatBubble />
		</div>
	);
}
