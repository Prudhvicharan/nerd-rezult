import React, { useState, useEffect, useRef } from "react";
import { Video, Loader2, Send, Check } from "lucide-react";
import ExpertProfile from "../shared/ExpertProfile";
import { formatTime } from "../utils/formatTime";

/**
 * Video application component
 * Allows users to record a video of themselves explaining their expertise
 *
 * @param {function} onBack - Function to go back to method selection
 */
const VideoApplication = ({ onBack }) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [videoTime, setVideoTime] = useState(0);
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      content:
        "Hello! Record a 2-minute video about your AI expertise, and I'll analyze it to create your expert profile. Please discuss your experience, key projects, and skills.",
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

  // Timer for video recording
  useEffect(() => {
    let interval;

    if (isRecording) {
      interval = setInterval(() => {
        setVideoTime((prevTime) => {
          if (prevTime >= 120) {
            stopRecording();
            return 120;
          }
          return prevTime + 1;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRecording]);

  // Start video recording
  const startRecording = () => {
    setIsRecording(true);
    setVideoTime(0);
  };

  // Stop video recording and process the video
  const stopRecording = () => {
    setIsRecording(false);
    processVideoSubmission();
  };

  // Process the recorded video
  const processVideoSubmission = () => {
    setLoading(true);

    // Simulate processing delay
    setTimeout(() => {
      // Generate a profile based on the video analysis
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
        "Thanks for your video! I've analyzed your experience and expertise in AI. Based on your description, I've identified your specialization in Machine Learning and NLP, with particular expertise in recommendation systems and computer vision. I've prepared a profile for you - please review it and let me know if anything needs adjustment.";

      addAiMessage(aiResponse);
      setLoading(false);
      setStep(2);
    }, 3000);
  };

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

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Video Application
      </h2>
      <p className="text-gray-600 mb-6">
        Record a short video explaining your AI expertise and experience. Our AI
        will analyze your response to build your expert profile.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Video recording UI */}
          {step === 1 && !isRecording && !profileData && (
            <div className="bg-white rounded-lg p-8 shadow-md border border-gray-200 mb-8 text-center">
              <div className="bg-indigo-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Video className="h-8 w-8 text-indigo-600" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Record Your Video Application
              </h3>
              <p className="text-gray-600 mb-6">
                In a 2-minute video, please cover:
              </p>

              <ul className="text-left text-gray-600 mb-8 space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Your name and current role</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Your AI expertise and specialized skills</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    One or two significant AI projects you've worked on
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Measurable results or impacts you've achieved</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Why you want to join NerdRezult as an AI expert</span>
                </li>
              </ul>

              <div className="flex justify-center space-x-4">
                <button
                  onClick={startRecording}
                  className="bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-700 flex items-center"
                >
                  <Video className="h-5 w-5 mr-2" />
                  Start Recording
                </button>
              </div>
            </div>
          )}

          {/* Active recording UI */}
          {isRecording && (
            <div className="bg-white rounded-lg p-8 shadow-md border border-gray-200 mb-8 text-center">
              <div className="relative mb-6">
                <div className="bg-indigo-50 rounded-lg p-8 flex items-center justify-center mb-4">
                  <div className="video-recording-indicator flex flex-col items-center justify-center">
                    <Video className="h-16 w-16 text-red-600 mb-4" />
                    <div className="h-3 w-3 bg-red-600 rounded-full animate-pulse"></div>
                  </div>
                </div>

                <div className="text-center text-lg font-semibold text-indigo-900 mb-6">
                  {formatTime(videoTime)} / 2:00
                </div>
              </div>

              <div className="flex justify-center space-x-4">
                <button
                  onClick={stopRecording}
                  className="bg-red-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 flex items-center"
                >
                  <span className="h-3 w-3 bg-white rounded mr-2"></span>
                  Stop Recording
                </button>
              </div>

              {videoTime >= 100 && (
                <p className="text-sm text-amber-600 mt-4">
                  You're approaching the 2-minute limit. Consider wrapping up
                  your key points.
                </p>
              )}
            </div>
          )}

          {/* Chat interface */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4 bg-indigo-600 text-white flex items-center">
              <Video className="h-5 w-5 mr-2" />
              <div>
                <h3 className="font-medium">AI Video Analyst</h3>
                <p className="text-xs text-indigo-100">
                  {loading
                    ? "Analyzing your video..."
                    : "Ready to analyze your recording"}
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
                    {isRecording
                      ? "Recording..."
                      : step === 1
                      ? "Analyzing your video..."
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
                  placeholder="Ask about the video analysis..."
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

export default VideoApplication;
