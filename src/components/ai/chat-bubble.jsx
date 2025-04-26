"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export default function ChatBubble() {
	const [isOpen, setIsOpen] = useState(false);
	const [messages, setMessages] = useState([
		{
			id: 1,
			text: "👋 Hi there! How can I help you with your travel plans today?",
			isUser: false,
			timestamp: new Date(),
		},
	]);
	const [inputValue, setInputValue] = useState("");
	const messagesEndRef = useRef();
	const inputRef = useRef();

	const toggleChat = () => {
		setIsOpen(!isOpen);
	};

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	useEffect(() => {
		if (isOpen) {
			scrollToBottom();
			inputRef.current?.focus();
		}
	}, [isOpen, messages]);

	const sendMessage = (e) => {
		e?.preventDefault();

		if (!inputValue.trim()) return;

		// Add user message
		const userMessage = {
			id: messages.length + 1,
			text: inputValue,
			isUser: true,
			timestamp: new Date(),
		};

		setMessages((prev) => [...prev, userMessage]);
		setInputValue("");

		// Simulate typing indicator
		setTimeout(() => {
			// Generate dummy response based on user input
			const botResponse = generateDummyResponse(inputValue);

			const botMessage = {
				id: messages.length + 2,
				text: botResponse,
				isUser: false,
				timestamp: new Date(),
			};

			setMessages((prev) => [...prev, botMessage]);
		}, 1000);
	};

	const generateDummyResponse = (userInput) => {
		const userText = userInput.toLowerCase();

		if (
			userText.includes("hello") ||
			userText.includes("hi") ||
			userText.includes("hey")
		) {
			return "Hello there! How can I assist with your travel plans today?";
		} else if (
			userText.includes("book") ||
			userText.includes("reservation")
		) {
			return "I'd be happy to help you book a trip! Our team can be reached at bookings@trvl.com or you can use our online booking system.";
		} else if (
			userText.includes("price") ||
			userText.includes("cost") ||
			userText.includes("how much")
		) {
			return "Our prices vary depending on the destination and package. Could you tell me which destination you're interested in?";
		} else if (userText.includes("desert") || userText.includes("safari")) {
			return "Our desert safari packages start at $499 for a 3-day adventure. Would you like more information about this?";
		} else if (userText.includes("cancel") || userText.includes("refund")) {
			return "For cancellations and refunds, please contact our customer service team at support@trvl.com with your booking reference.";
		} else {
			return "Thanks for your message! Our team will get back to you soon. Is there anything else I can help with?";
		}
	};

	return (
		<div className="fixed bottom-6 right-6 z-50">
			{/* Chat toggle button */}
			<button
				onClick={toggleChat}
				className={cn(
					"flex items-center justify-center w-16 h-16 rounded-full shadow-lg transition-all duration-300 transform",
					isOpen
						? "bg-red-500 rotate-90"
						: "bg-orange-500 hover:bg-orange-600 animate-bounce"
				)}
			>
				{isOpen ? (
					<X className="w-8 h-8 text-white" />
				) : (
					<MessageSquare className="w-8 h-8 text-white" />
				)}
			</button>

			{/* Chat window */}
			<div
				className={cn(
					"absolute bottom-20 right-0 w-80 md:w-96 bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-300 transform",
					isOpen
						? "scale-100 opacity-100"
						: "scale-0 opacity-0 pointer-events-none"
				)}
			>
				{/* Chat header */}
				<div className="bg-orange-500 p-4">
					<h3 className="text-white font-bold">TRVL Assistant</h3>
					<p className="text-white text-sm opacity-80">
						We typically reply within minutes
					</p>
				</div>

				{/* Chat messages */}
				<div className="h-80 overflow-y-auto p-4 bg-gray-50">
					{messages.map((message) => (
						<div
							key={message.id}
							className={cn(
								"mb-4 max-w-[80%] p-3 rounded-lg",
								message.isUser
									? "bg-orange-500 text-white ml-auto rounded-br-none"
									: "bg-gray-200 text-gray-800 rounded-bl-none"
							)}
						>
							<p>{message.text}</p>
							<span className="text-xs opacity-70 block mt-1">
								{message.timestamp.toLocaleTimeString([], {
									hour: "2-digit",
									minute: "2-digit",
								})}
							</span>
						</div>
					))}
					<div ref={messagesEndRef} />
				</div>

				{/* Chat input */}
				<form
					onSubmit={sendMessage}
					className="border-t border-gray-200 p-4 flex"
				>
					<Input
						ref={inputRef}
						type="text"
						placeholder="Type your message..."
						value={inputValue}
						onChange={handleInputChange}
						className="flex-1 focus-visible:ring-orange-500"
					/>
					<Button
						type="submit"
						size="icon"
						className="ml-2 bg-orange-500 hover:bg-orange-600"
						disabled={!inputValue.trim()}
					>
						<Send className="h-4 w-4" />
					</Button>
				</form>
			</div>
		</div>
	);
}
