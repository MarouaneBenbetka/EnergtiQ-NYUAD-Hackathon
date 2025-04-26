import { Inter } from "next/font/google";
import Navbar from "@/components/general/navbar";
import ChatBubble from "@/components/ai/chat-bubble";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
	return (
		<>
			<Navbar />
			<main className="relative min-h-screen scroll-smooth">
				{children}
			</main>
			<ChatBubble />
		</>
	);
}
