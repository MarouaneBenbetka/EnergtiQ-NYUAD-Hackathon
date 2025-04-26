"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
	Sun,
	LayoutDashboard,
	Cpu,
	BrainCircuit,
	Menu,
	X,
	ExternalLink,
} from "lucide-react";
import Image from "next/image";

export default function ProductsNavbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 10) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const isActive = (path) => {
		return pathname === path;
	};

	return (
		<header
			className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
				isScrolled
					? "bg-gray-900/95 backdrop-blur-sm shadow-lg py-2"
					: "bg-gray-900 py-4"
			}`}
		>
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between">
					{/* Logo */}
					<div className="flex items-center text-white text-2xl font-bold">
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
					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center space-x-1 pr-30">
						<Link
							href="/products/quantum"
							className={`px-4 py-2 rounded-md transition-colors ${
								isActive("/products/quantum")
									? "bg-orange-500 text-white"
									: "text-gray-300 hover:text-white hover:bg-gray-800"
							}`}
						>
							<div className="flex items-center">
								<Cpu className="h-4 w-4 mr-2" />
								Battery Design
							</div>
						</Link>
						<Link
							href="/products/ai"
							className={`px-4 py-2 rounded-md transition-colors ${
								isActive("/products/ai")
									? "bg-orange-500 text-white"
									: "text-gray-300 hover:text-white hover:bg-gray-800"
							}`}
						>
							<div className="flex items-center">
								<BrainCircuit className="h-4 w-4 mr-2" />
								Battery Placement
							</div>
						</Link>
						<Link
							href="/products/dashboard"
							className={`px-4 py-2 rounded-md transition-colors ${
								isActive("/products/dashboard")
									? "bg-orange-500 text-white"
									: "text-gray-300 hover:text-white hover:bg-gray-800"
							}`}
						>
							<div className="flex items-center">
								<LayoutDashboard className="h-4 w-4 mr-2" />
								Dashboard
							</div>
						</Link>
					</nav>

					{/* Action Buttons */}
					<div className="flex items-center">
						<Link
							href="/"
							className="hidden md:flex items-center text-gray-300 hover:text-white mr-4"
						>
							<ExternalLink className="ml-1 h-4 w-4" />
						</Link>

						{/* Mobile Menu Button */}
						<button
							onClick={() =>
								setIsMobileMenuOpen(!isMobileMenuOpen)
							}
							className="md:hidden text-white p-2 rounded-md hover:bg-gray-800 transition-colors"
						>
							{isMobileMenuOpen ? (
								<X className="h-6 w-6" />
							) : (
								<Menu className="h-6 w-6" />
							)}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Navigation Menu */}
			<div
				className={`md:hidden absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-sm transition-all duration-300 overflow-hidden ${
					isMobileMenuOpen
						? "max-h-screen border-b border-gray-800"
						: "max-h-0"
				}`}
			>
				<nav className="container mx-auto px-4 py-4 flex flex-col space-y-3">
					<Link
						href="/products/quantum"
						className={`px-4 py-3 rounded-md flex items-center transition-colors ${
							isActive("/products/quantum")
								? "bg-orange-500 text-white"
								: "text-gray-300 hover:text-white hover:bg-gray-800"
						}`}
						onClick={() => setIsMobileMenuOpen(false)}
					>
						<Cpu className="h-5 w-5 mr-3" />
						Battery Design
					</Link>
					<Link
						href="/products/ai"
						className={`px-4 py-3 rounded-md flex items-center transition-colors ${
							isActive("/products/ai")
								? "bg-orange-500 text-white"
								: "text-gray-300 hover:text-white hover:bg-gray-800"
						}`}
						onClick={() => setIsMobileMenuOpen(false)}
					>
						<BrainCircuit className="h-5 w-5 mr-3" />
						Battery Placememnt
					</Link>

					<Link
						href="/products/dashboard"
						className={`px-4 py-3 rounded-md flex items-center transition-colors ${
							isActive("/products/dashboard")
								? "bg-orange-500 text-white"
								: "text-gray-300 hover:text-white hover:bg-gray-800"
						}`}
						onClick={() => setIsMobileMenuOpen(false)}
					>
						<LayoutDashboard className="h-5 w-5 mr-3" />
						Dashboard
					</Link>

					<div className="border-t border-gray-800 my-2 pt-2">
						<Link
							href="/"
							className="px-4 py-3 rounded-md flex items-center text-gray-300 hover:text-white hover:bg-gray-800"
							onClick={() => setIsMobileMenuOpen(false)}
						>
							<ExternalLink className="h-5 w-5 mr-3" />
							Back to Main Site
						</Link>
					</div>
				</nav>
			</div>
		</header>
	);
}
