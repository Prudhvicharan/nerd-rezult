import React, { useState, useEffect, useRef } from "react";
import {
  Github,
  Linkedin,
  FileText,
  Award,
  BarChart4,
  Loader2,
  Send,
} from "lucide-react";
import ExpertProfile from "../shared/ExpertProfile";

/**
 * Portfolio-based application component
 * Allows users to apply by connecting their professional profiles
 *
 * @param {function} onBack - Function to go back to method selection
 */
const PortfolioApplication = ({ onBack }) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      content:
        "Hello! I'll help you create your expert profile by analyzing your professional profiles. Connect your accounts below, and I'll extract your expertise and experience automatically.",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [profileData, setProfileData] = useState(null);
  const [portfolioLinks, setPortfolioLinks] = useState({
    github: "",
    linkedin: "",
    website: "",
    papers: "",
    kaggle: "",
  });
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

  // Process the user's message
  const processMessage = (input) => {
    const lowerInput = input.toLowerCase();

    if (step === 2) {
      // Profile review stage
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
          setStep(3);
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
    } else if (step === 3) {
      // Final step - application submitted
      const aiResponse =
        "Thanks for your interest in joining NerdRezult as an AI expert! If you have any questions while your application is being reviewed, you can always reach out to our support team at experts@nerdrezult.com.";

      addAiMessage(aiResponse);
    }
  };

  // Process the portfolio links and generate a profile
  const processPortfolioLinks = () => {
    setLoading(true);

    setTimeout(() => {
      // Generate a profile based on the portfolio links
      setProfileData({
        name: "Alex Johnson",
        expertise: [
          "Machine Learning",
          "Natural Language Processing",
          "Computer Vision",
        ],
        experience: "7+ years",
        skills: ["TensorFlow", "PyTorch", "MLOps", "Python", "Transformers"],
        projects: [
          {
            title: "E-commerce Recommendation Engine",
            description:
              "Built a hybrid recommendation system using collaborative filtering and content-based approaches",
            impact: "Increased conversion rates by 28%",
            technologies: ["TensorFlow", "Python", "AWS"],
          },
          {
            title: "Computer Vision for Manufacturing QA",
            description:
              "Developed a defect detection system using deep learning",
            impact: "Reduced manual QA time by 65%",
            technologies: ["PyTorch", "OpenCV", "CUDA"],
          },
        ],
        education: "Ph.D. in Computer Science, Stanford University",
        publications: 2,
      });

      const aiResponse =
        "I've analyzed your professional profiles! Based on your GitHub repositories and LinkedIn profile, I've extracted your expertise in Machine Learning and NLP. Your work on recommendation systems and computer vision applications is impressive! I've prepared a profile for you - please review it and let me know if you'd like to make any adjustments.";

      addAiMessage(aiResponse);
      setLoading(false);
      setStep(2);
    }, 3000);
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

  // Handle keyboard input
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Check if at least one portfolio link is provided
  const hasPortfolioLinks = () => {
    return Object.values(portfolioLinks).some((link) => link.trim() !== "");
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        AI Portfolio Analysis
      </h2>
      <p className="text-gray-600 mb-6">
        Connect your professional profiles, and our AI will analyze your work to
        build your expert profile.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Portfolio links and chat interface */}
        <div className="lg:col-span-2">
          {/* Portfolio links input form */}
          {step === 1 && (
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 mb-8">
              <div className="space-y-6">
                <PortfolioInput
                  icon={<Github className="h-6 w-6 text-gray-700" />}
                  label="GitHub"
                  value={portfolioLinks.github}
                  onChange={(value) =>
                    setPortfolioLinks({ ...portfolioLinks, github: value })
                  }
                  placeholder="GitHub username or repository URL"
                />

                <PortfolioInput
                  icon={<Linkedin className="h-6 w-6 text-blue-600" />}
                  label="LinkedIn"
                  value={portfolioLinks.linkedin}
                  onChange={(value) =>
                    setPortfolioLinks({ ...portfolioLinks, linkedin: value })
                  }
                  placeholder="LinkedIn profile URL"
                />

                <PortfolioInput
                  icon={<FileText className="h-6 w-6 text-gray-700" />}
                  label="Personal Website"
                  value={portfolioLinks.website}
                  onChange={(value) =>
                    setPortfolioLinks({ ...portfolioLinks, website: value })
                  }
                  placeholder="Your website URL"
                />

                <PortfolioInput
                  icon={<Award className="h-6 w-6 text-orange-500" />}
                  label="Kaggle"
                  value={portfolioLinks.kaggle}
                  onChange={(value) =>
                    setPortfolioLinks({ ...portfolioLinks, kaggle: value })
                  }
                  placeholder="Kaggle profile username"
                />

                <PortfolioInput
                  icon={<BarChart4 className="h-6 w-6 text-purple-600" />}
                  label="Research Papers"
                  value={portfolioLinks.papers}
                  onChange={(value) =>
                    setPortfolioLinks({ ...portfolioLinks, papers: value })
                  }
                  placeholder="Google Scholar profile or paper DOIs"
                />
              </div>

              <div className="mt-6">
                <button
                  onClick={processPortfolioLinks}
                  disabled={loading || !hasPortfolioLinks()}
                  className={`w-full bg-indigo-600 text-white py-3 rounded-md font-medium ${
                    loading || !hasPortfolioLinks()
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-indigo-700"
                  }`}
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <Loader2 className="h-5 w-5 animate-spin mr-2" />
                      Analyzing your portfolio...
                    </span>
                  ) : (
                    "Analyze My Portfolio"
                  )}
                </button>

                <p className="text-sm text-gray-500 mt-2 text-center">
                  Please connect at least one profile for AI analysis
                </p>
              </div>
            </div>
          )}

          {/* Chat interface */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4 bg-indigo-600 text-white flex items-center">
              <BarChart4 className="h-5 w-5 mr-2" />
              <div>
                <h3 className="font-medium">AI Portfolio Assistant</h3>
                <p className="text-xs text-indigo-100">
                  {loading
                    ? "Analyzing your professional work..."
                    : "Ready to analyze your profiles"}
                </p>
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
                    {step === 1
                      ? "Analyzing your profiles..."
                      : "Processing..."}
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
                  placeholder="Ask a question or provide feedback..."
                  className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:ring-indigo-500 focus:border-indigo-500"
                  disabled={loading || step === 1 || step === 3}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={
                    loading || !inputMessage.trim() || step === 1 || step === 3
                  }
                  className={`bg-indigo-600 text-white px-4 py-2 rounded-r-lg flex items-center ${
                    loading || !inputMessage.trim() || step === 1 || step === 3
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

        {/* Profile preview */}
        <div className="lg:col-span-1">
          {profileData && (step === 2 || step === 3) && (
            <ExpertProfile
              profileData={profileData}
              isSubmitting={loading && step === 2}
              onSubmit={
                step === 2
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

/**
 * Portfolio input component with icon
 */
const PortfolioInput = ({ icon, label, value, onChange, placeholder }) => {
  return (
    <div className="flex items-center border border-gray-200 rounded-lg p-4 hover:border-indigo-300 transition-colors">
      <div className="mr-4">{icon}</div>
      <div className="flex-grow">
        <label className="block text-gray-800 font-medium mb-1">{label}</label>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
    </div>
  );
};

export default PortfolioApplication;
