import React, { useEffect, useRef } from "react";
import { Send, Loader2 } from "lucide-react";

/**
 * Reusable chat interface component
 * Provides a consistent chat UI across application methods
 *
 * @param {array} messages - Array of message objects
 * @param {boolean} loading - Whether a message is being processed
 * @param {string} inputMessage - Current input message
 * @param {function} setInputMessage - Function to update input message
 * @param {function} handleSendMessage - Function to handle sending a message
 * @param {string} placeholder - Placeholder text for input
 * @param {boolean} disabled - Whether the input is disabled
 * @param {string} title - Chat title
 * @param {string} subtitle - Chat subtitle
 * @param {React.ReactNode} icon - Icon to show in the header
 */
const ApplicationChat = ({
  messages,
  loading,
  inputMessage,
  setInputMessage,
  handleSendMessage,
  placeholder = "Type your message...",
  disabled = false,
  title = "AI Assistant",
  subtitle = "Building your expert profile",
  icon = null,
}) => {
  const messagesEndRef = useRef(null);

  // Auto scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // Handle keyboard input
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 bg-indigo-600 text-white flex items-center">
        {icon && <div className="mr-2">{icon}</div>}
        <div>
          <h3 className="font-medium">{title}</h3>
          <p className="text-xs text-indigo-100">{subtitle}</p>
        </div>
      </div>

      <div className="h-72 overflow-y-auto p-4 bg-gray-50">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex mb-4 ${
              message.sender === "user" ? "justify-end" : ""
            }`}
          >
            <div
              className={`rounded-lg p-3 max-w-3/4 ${
                message.sender === "user"
                  ? "bg-indigo-600 text-white"
                  : "bg-white border border-gray-200 text-gray-800"
              }`}
            >
              <p>{message.content}</p>
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex mb-4">
            <div className="bg-white border border-gray-200 rounded-lg p-3 flex items-center text-gray-500">
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Processing...
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <div className="p-3 border-t border-gray-200">
        <div className="flex">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={placeholder}
            className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:ring-indigo-500 focus:border-indigo-500"
            disabled={disabled || loading}
          />
          <button
            onClick={handleSendMessage}
            disabled={disabled || loading || !inputMessage.trim()}
            className={`bg-indigo-600 text-white px-4 py-2 rounded-r-lg flex items-center ${
              disabled || loading || !inputMessage.trim()
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-indigo-700"
            }`}
          >
            {loading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <Send className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationChat;
