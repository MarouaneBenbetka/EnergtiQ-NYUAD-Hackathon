"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Sun, Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<header
			className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
				isScrolled
					? "bg-black/90 backdrop-blur-sm py-3"
					: "bg-transparent py-5"
			}`}
		>
			<div className="container mx-auto px-4 flex items-center justify-between">
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
				<nav className="hidden md:flex items-center space-x-8">
					<a
						href="#hero"
						className="text-white hover:text-orange-400 transition-colors"
					>
						Home
					</a>
					<a
						href="#problem"
						className="text-white hover:text-orange-400 transition-colors"
					>
						Problem
					</a>
					<a
						href="#solution"
						className="text-white hover:text-orange-400 transition-colors"
					>
						Solution
					</a>
					<a
						href="#sdgs"
						className="text-white hover:text-orange-400 transition-colors"
					>
						SDGs
					</a>
					<a
						href="#about"
						className="text-white hover:text-orange-400 transition-colors"
					>
						About Us
					</a>
					<Link
						href="/products"
						className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors"
					>
						Explore
					</Link>
				</nav>

				{/* Mobile Menu Button */}
				<button
					className="md:hidden text-white"
					onClick={toggleMobileMenu}
				>
					{isMobileMenuOpen ? (
						<X className="h-6 w-6" />
					) : (
						<Menu className="h-6 w-6" />
					)}
				</button>
			</div>

			{/* Mobile Navigation */}
			<div
				className={`md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-sm transition-all duration-300 ${
					isMobileMenuOpen
						? "max-h-screen py-4"
						: "max-h-0 overflow-hidden py-0"
				}`}
			>
				<nav className="container mx-auto px-4 flex flex-col space-y-4">
					<a
						href="#hero"
						className="text-white hover:text-orange-400 transition-colors py-2"
						onClick={toggleMobileMenu}
					>
						Home
					</a>
					<a
						href="#problem"
						className="text-white hover:text-orange-400 transition-colors py-2"
						onClick={toggleMobileMenu}
					>
						Problem
					</a>
					<a
						href="#solution"
						className="text-white hover:text-orange-400 transition-colors py-2"
						onClick={toggleMobileMenu}
					>
						Solution
					</a>
					<a
						href="#sdgs"
						className="text-white hover:text-orange-400 transition-colors py-2"
						onClick={toggleMobileMenu}
					>
						SDGs
					</a>
					<a
						href="#about"
						className="text-white hover:text-orange-400 transition-colors py-2"
						onClick={toggleMobileMenu}
					>
						About Us
					</a>
					<Link
						href="/products"
						className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors"
					>
						Explore
					</Link>
				</nav>
			</div>
		</header>
	);
}
