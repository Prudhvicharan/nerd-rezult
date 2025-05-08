import React, { useState, useEffect, useRef } from "react";
import { Send, Loader2 } from "lucide-react";
import ExpertProfile from "../shared/ExpertProfile";

/**
 * Chat-based application component
 * Allows users to apply by having a conversation with an AI assistant
 *
 * @param {function} onBack - Function to go back to method selection
 */
const ChatApplication = ({ onBack }) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      content:
        "Hello! I'm your AI application assistant. I'll help you join our network of elite AI experts quickly and efficiently. Tell me about your experience with AI and machine learning.",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [profileData, setProfileData] = useState(null);
  const messagesEndRef = useRef(null);

  // Auto scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // Handle sending a message
  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    // Add user message to chat
    const userMessage = {
      sender: "user",
      content: inputMessage,
      timestamp: new Date(),
    };

    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputMessage("");

    // Simulate AI thinking
    setLoading(true);

    // Simulate AI response after delay
    setTimeout(() => {
      processMessage(inputMessage);
      setLoading(false);
    }, 1500);
  };

  // Process the user's message and generate AI response
  const processMessage = (input) => {
    const lowerInput = input.toLowerCase();

    if (step === 1) {
      // Step 1: Initial information gathering
      const containsExpertise =
        lowerInput.includes("machine learning") ||
        lowerInput.includes("ml") ||
        lowerInput.includes("ai") ||
        lowerInput.includes("data") ||
        lowerInput.includes("neural");

      if (containsExpertise || lowerInput.length > 50) {
        // If message contains expertise keywords or is a detailed response
        const aiResponse =
          "Thanks for sharing your background! Could you tell me about a significant AI project you've worked on? What challenges did you face and what technologies did you use?";

        addAiMessage(aiResponse);
        setStep(2);
      } else {
        // General response asking for expertise
        const aiResponse =
          "That's interesting! To help build your profile accurately, could you elaborate on your specific areas of expertise in AI or machine learning?";

        addAiMessage(aiResponse);
      }
    } else if (step === 2) {
      // Step 2: Get project information
      if (lowerInput.length > 30) {
        // Got enough project information, move to next step
        const aiResponse =
          "Your project experience sounds impressive! What specific AI technologies and frameworks do you have experience with? (For example: TensorFlow, PyTorch, NLP, Computer Vision, etc.)";

        addAiMessage(aiResponse);
        setStep(3);
      } else {
        // Prompt for more details
        const aiResponse =
          "Could you provide a bit more detail about your project? What specific technologies did you use and what outcomes did you achieve?";

        addAiMessage(aiResponse);
      }
    } else if (step === 3) {
      // Step 3: Get technical skills
      // Generate profile after getting technical information
      generateExpertProfile();
    } else if (step === 4) {
      // Step 4: Profile review
      if (
        lowerInput.includes("looks good") ||
        lowerInput.includes("submit") ||
        lowerInput.includes("yes") ||
        lowerInput.includes("correct")
      ) {
        // Submit the application
        setLoading(true);

        setTimeout(() => {
          const aiResponse =
            "Your application has been successfully submitted! Our team will review your profile and get back to you within 48 hours. We're excited about the possibility of having you join our network of AI experts!";

          addAiMessage(aiResponse);
          setLoading(false);
          setStep(5);
        }, 1500);
      } else if (
        lowerInput.includes("change") ||
        lowerInput.includes("update") ||
        lowerInput.includes("edit")
      ) {
        const aiResponse =
          "I'd be happy to update your profile. What specific information would you like to change?";

        addAiMessage(aiResponse);
      } else {
        const aiResponse =
          "I've noted your feedback. Does your profile look accurate now, or would you like to make additional changes before we submit your application?";

        addAiMessage(aiResponse);
      }
    } else if (step === 5) {
      // Final step - application submitted
      const aiResponse =
        "Thanks for your interest in joining NerdRezult as an AI expert! If you have any questions while your application is being reviewed, you can always reach out to our support team at experts@nerdrezult.com.";

      addAiMessage(aiResponse);
    }
  };

  // Helper to add AI message to the chat
  const addAiMessage = (content) => {
    const aiMessage = {
      sender: "ai",
      content: content,
      timestamp: new Date(),
    };

    setMessages((prevMessages) => [...prevMessages, aiMessage]);
  };

  // Generate the expert profile based on conversation
  const generateExpertProfile = () => {
    setLoading(true);

    setTimeout(() => {
      // Create a profile based on the conversation
      setProfileData({
        name: "AI Expert",
        expertise: [
          "Machine Learning",
          "Natural Language Processing",
          "Computer Vision",
        ],
        experience: "5+ years",
        skills: ["TensorFlow", "PyTorch", "MLOps", "Python", "Transformers"],
        projects: [
          {
            title: "Advanced Recommendation System",
            description:
              "Built a hybrid recommendation system using collaborative filtering and content-based approaches",
            impact: "Increased conversion rates by 28%",
            technologies: ["TensorFlow", "Python", "AWS"],
          },
          {
            title: "Computer Vision for Manufacturing",
            description:
              "Developed a defect detection system using deep learning",
            impact: "Reduced manual QA time by 65%",
            technologies: ["PyTorch", "OpenCV", "CUDA"],
          },
        ],
        education: "Master's in Computer Science",
        publications: 2,
      });

      const aiResponse =
        "Based on our conversation, I've created your expert profile. Please review it and let me know if anything needs to be adjusted before we submit your application.";

      addAiMessage(aiResponse);
      setLoading(false);
      setStep(4);
    }, 2000);
  };

  // Handle keyboard input
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">AI Conversation</h2>
      <p className="text-gray-600 mb-6">
        Chat with our AI to share your expertise and experience. We'll build
        your profile as we converse.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Chat interface */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4 bg-indigo-600 text-white flex items-center">
              <BrainCircuitIcon className="h-5 w-5 mr-2" />
              <div>
                <h3 className="font-medium">AI Application Assistant</h3>
                <p className="text-xs text-indigo-100">
                  Building your expert profile
                </p>
              </div>
            </div>

            <div className="h-96 overflow-y-auto p-4 bg-gray-50">
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
                    Thinking...
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
                  placeholder="Type your message..."
                  className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:ring-indigo-500 focus:border-indigo-500"
                  disabled={loading || step === 5}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={loading || !inputMessage.trim() || step === 5}
                  className={`bg-indigo-600 text-white px-4 py-2 rounded-r-lg flex items-center ${
                    loading || !inputMessage.trim() || step === 5
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
        </div>

        {/* Profile preview (shown in step 4 and 5) */}
        <div className="lg:col-span-1">
          {profileData && (step === 4 || step === 5) && (
            <ExpertProfile
              profileData={profileData}
              isSubmitting={loading && step === 4}
              onSubmit={
                step === 4
                  ? () => {
                      processMessage("looks good");
                    }
                  : null
              }
            />
          )}
        </div>
      </div>
    </div>
  );
};

// Internal icon component
const BrainCircuitIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08 2.5 2.5 0 0 0 4.91.05L12 20V4.5Z" />
    <path d="M16 8V5c0-1.1.9-2 2-2" />
    <path d="M12 13h4" />
    <path d="M12 18h6a2 2 0 0 1 2 2v1" />
    <path d="M12 8h8" />
    <path d="M20.5 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
    <path d="M16.5 13a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
    <path d="M20.5 21a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
    <path d="M18.5 3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
  </svg>
);

export default ChatApplication;
