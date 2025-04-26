import { Inter } from "next/font/google";
import "../globals.css";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });
import ChatBubble from "@/components/ai/chat-bubble";

export const metadata = {
	title: "TRVL - Adventure Awaits",
	description: "Discover amazing travel destinations around the world",
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
