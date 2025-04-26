"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { GoogleGenerativeAI } from "@google/generative-ai";

// initialize the GenAI client
const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);

export default function ChatBubble() {
	const [isOpen, setIsOpen] = useState(false);
	const [messages, setMessages] = useState([
		{
			id: 1,
			text: "👋 Hi there! Ask me anything about the project?",
			isUser: false,
			timestamp: new Date(),
		},
	]);
	const [inputValue, setInputValue] = useState("");
	const [isLoading, setIsLoading] = useState(false);
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

	const sendMessage = async (e) => {
		e?.preventDefault();

		if (!inputValue.trim()) return;

		const userMessage = {
			id: messages.length + 1,
			text: inputValue,
			isUser: true,
			timestamp: new Date(),
		};

		setMessages((prev) => [...prev, userMessage]);
		setInputValue("");
		setIsLoading(true);

		try {
			console.log("[Gemini] Sending user input:", inputValue);
			const botResponse = await fetchGeminiResponse(inputValue);
			console.log("[Gemini] Received response:", botResponse);
			const botMessage = {
				id: messages.length + 2,
				text: botResponse,
				isUser: false,
				timestamp: new Date(),
			};
			setMessages((prev) => [...prev, botMessage]);
		} catch (err) {
			console.error("[Gemini] Error:", err);
			const botMessage = {
				id: messages.length + 2,
				text: "Sorry, I couldn't get a response from the AI. Please try again later.",
				isUser: false,
				timestamp: new Date(),
			};
			setMessages((prev) => [...prev, botMessage]);
		} finally {
			setIsLoading(false);
		}
	};

	const fetchGeminiResponse = async (userInput) => {
		try {
			const model = genAI.getGenerativeModel({
				model: "gemini-1.5-flash",
			});
			const systemPrompt = `You are an AI assistant for EnergetiQ - Qطاقة, an AI-Powered Quantum Solar Revolution project. Your role is to provide information and answer questions about:
			- The project's mission to improve solar energy efficiency using Quantum Computing and AI
			- Technical aspects including Quantum Computing for battery materials and AI/ML for panel optimization
			- Alignment with SDG 7 (Affordable & Clean Energy) and SDG 11 (Sustainable Cities & Communities)
			- Impact on scalability, sustainability, and innovation
			- Target audience and key differentiators
			
			Please only respond to questions relevant to these topics. If asked about unrelated topics, politely redirect the conversation back to EnergetiQ's mission and capabilities.
			
			User question: ${userInput}`;
			const result = await model.generateContent(systemPrompt);
			const response = await result.response;
			return response.text();
		} catch (error) {
			console.error("[Gemini] Error generating text:", error);
			throw error;
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
						? "bg-blue-500 rotate-90"
						: "bg-gradient-to-r from-blue-500 to-blue-300 hover:from-blue-600 hover:to-blue-400 animate-bounce"
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
				<div className="bg-gradient-to-r from-blue-500 to-blue-300 p-4">
					<h3 className="text-white font-bold">
						EnergetiQ Assistant
					</h3>
				</div>

				{/* Chat messages */}
				<div className="h-80 overflow-y-auto p-4 bg-blue-50">
					{messages.map((message) => (
						<div
							key={message.id}
							className={cn(
								"mb-4 max-w-[80%] p-3 rounded-lg",
								message.isUser
									? "bg-gradient-to-r from-blue-500 to-blue-300 text-white ml-auto rounded-br-none"
									: "bg-blue-100 text-blue-900 rounded-bl-none"
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
					{isLoading && (
						<div className="mb-4 max-w-[80%] p-3 rounded-lg bg-blue-100 text-blue-900 rounded-bl-none animate-pulse">
							<p>Typing...</p>
						</div>
					)}
					<div ref={messagesEndRef} />
				</div>

				{/* Chat input */}
				<form
					onSubmit={sendMessage}
					className="border-t border-blue-200 p-4 flex"
				>
					<Input
						ref={inputRef}
						type="text"
						placeholder="Type your message..."
						value={inputValue}
						onChange={handleInputChange}
						className="flex-1 focus-visible:ring-blue-500"
					/>
					<Button
						type="submit"
						size="icon"
						className="ml-2 bg-gradient-to-r from-blue-500 to-blue-300 hover:from-blue-600 hover:to-blue-400"
						disabled={!inputValue.trim() || isLoading}
					>
						<Send className="h-4 w-4" />
					</Button>
				</form>
			</div>
		</div>
	);
}
