import { Inter } from "next/font/google";
import "../globals.css";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "EnergitiQ - AI-Powered Quantum Solar Revolution",
	description:
		"Discover the future of energy with our innovative quantum technology solutions.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
			<Head>
				<script src="https://3Dmol.org/build/3Dmol-min.js"></script>
			</Head>
		</html>
	);
}
