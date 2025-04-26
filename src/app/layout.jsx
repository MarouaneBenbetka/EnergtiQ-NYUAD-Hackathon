import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/general/navbar";
import ChatBubble from "@/components/ai/chat-bubble";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "TRVL - Adventure Awaits",
	description: "Discover amazing travel destinations around the world",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar />
				<main className="relative min-h-screen scroll-smooth">
					{children}
				</main>
				<ChatBubble />
			</body>
		</html>
	);
}
