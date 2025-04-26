"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MapPin } from "lucide-react";

export default function Navbar() {
	const pathname = usePathname();

	return (
		<header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-sm">
			<div className="container mx-auto flex items-center justify-between py-4 px-4">
				<Link
					href="/"
					className="flex items-center text-white text-2xl font-bold"
				>
					TRVL <MapPin className="ml-2 h-6 w-6" />
				</Link>

				<nav className="hidden md:flex items-center space-x-8">
					<Link
						href="/"
						className={`text-white hover:text-gray-300 transition-colors ${
							pathname === "/" ? "font-semibold" : ""
						}`}
					>
						Home
					</Link>
					<Link
						href="/services"
						className={`text-white hover:text-gray-300 transition-colors ${
							pathname === "/services" ? "font-semibold" : ""
						}`}
					>
						Services
					</Link>
					<Link
						href="/products"
						className={`text-white hover:text-gray-300 transition-colors ${
							pathname === "/products" ? "font-semibold" : ""
						}`}
					>
						Products
					</Link>
				</nav>

				<Link
					href="/signup"
					className="border border-white text-white px-6 py-2 hover:bg-white hover:text-black transition-colors"
				>
					SIGN UP
				</Link>
			</div>
		</header>
	);
}
