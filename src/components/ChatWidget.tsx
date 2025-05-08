"use client";
import { useState, useRef, useEffect, ReactNode } from "react";
import { Loader2, SendHorizonal, X, MessageCircle, MinusCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  sender: "user" | "bot";
  text: ReactNode | "string";
}

export default function ChatWidget() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const sendMessageToAI = async (message: string) => {
    try {
      const res = await fetch("/api/mistral", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });
      const data = await res.json();
      if (data.error) {
        console.error("AI Error:", data.error);
        throw new Error("Server responded with an error");
      }
      return data.choices[0].message.content;
    } catch (err) {
      console.error("SendMessageToAI Error:", err);
      return "Sorry, something went wrong. Please try again later.";
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMessage = input.trim();
    setMessages((prev) => [...prev, { sender: "user", text: userMessage }]);
    setInput("");
    setIsLoading(true);
    setMessages((prev) => [...prev, { sender: "bot", text: <Loader2 className="animate-spin" /> }]);
    const botResponse = await sendMessageToAI(userMessage);
    setMessages((prev) => [...prev.slice(0, -1), { sender: "bot", text: botResponse }]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSend();
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const resetChat = () => {
    setMessages([]);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-[90vw] max-w-sm shadow-2xl rounded-2xl bg-white dark:bg-gray-900 overflow-hidden"
          >
            <div className="p-4 flex justify-between items-center bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-t-2xl">
              <div className="text-lg font-semibold flex items-center gap-2">
                <MessageCircle size={20} />
                SoftSell Assistant
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={resetChat}
                  className="p-1 hover:bg-blue-600 rounded-full transition-colors"
                  aria-label="Reset conversation"
                >
                  <MinusCircle size={18} />
                </button>
                <button 
                  onClick={toggleChat}
                  className="p-1 bg-red-500 hover:bg-red-600 rounded-full transition-colors"
                  aria-label="Close chat"
                >
                  <X size={18} />
                </button>
              </div>
            </div>
            
            <motion.div 
              className="h-64 p-3 overflow-y-auto text-sm space-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {messages.length === 0 && (
                <div className="h-full flex items-center justify-center text-gray-400 dark:text-gray-500 text-center p-4">
                  <p>How can I help you with your software licenses today?</p>
                </div>
              )}
              
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`p-3 rounded-lg max-w-[80%] ${
                    msg.sender === "user"
                      ? "ml-auto bg-blue-500 text-white"
                      : "mr-auto bg-gray-200 dark:bg-gray-700 dark:text-white"
                  }`}
                >
                 {typeof msg.text === "string" ? (
  <div dangerouslySetInnerHTML={{ __html: msg.text }} />
) : (
  msg.text
)}
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </motion.div>
            
            <div className="flex p-3 bg-gray-50 dark:bg-gray-800">
              <input
                type="text"
                placeholder="Ask something..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                className="flex-grow px-3 py-2 rounded-lg  bg-white dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="ml-2 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg disabled:opacity-50 transition-colors"
              >
                <SendHorizonal size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={toggleChat}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`p-4 rounded-full shadow-lg flex items-center justify-center transition-colors bg-blue-600 hover:bg-blue-700 text-white`}
        aria-label={ "Open chat"}
      >
        { <MessageCircle size={24} />}
      </motion.button>
    </div>
  );
}