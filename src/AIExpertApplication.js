import React, { useState, useEffect, useRef } from "react";
import {
  Cpu,
  ArrowLeft,
  Send,
  Upload,
  Mic,
  Video,
  Github,
  Linkedin,
  X,
  Menu,
  Check,
  FileText,
  Star,
  Award,
  BrainCircuit,
  BarChart4,
  ChevronRight,
  Loader2,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function AIExpertApplication() {
  const [isOpen, setIsOpen] = useState(false);
  const [appMethod, setAppMethod] = useState(null);
  const [loading, setLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState(null);
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      content:
        "Hello! I'm your AI application assistant. I'll help you join our network of elite AI experts quickly and efficiently. How would you like to proceed?",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [portfolioLinks, setPortfolioLinks] = useState({
    github: "",
    linkedin: "",
    website: "",
    papers: "",
    kaggle: "",
  });
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [isVideoRecording, setIsVideoRecording] = useState(false);
  const [videoTime, setVideoTime] = useState(0);
  const [profileData, setProfileData] = useState(null);
  const [step, setStep] = useState(1);
  const messagesEndRef = useRef(null);
  const navigate = useNavigate();

  // Auto scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // Timer for video recording
  useEffect(() => {
    let interval;

    if (isVideoRecording) {
      interval = setInterval(() => {
        setVideoTime((prevTime) => {
          if (prevTime >= 120) {
            stopVideoRecording();
            return 120;
          }
          return prevTime + 1;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isVideoRecording]);

  // Timer for audio recording
  useEffect(() => {
    let interval;

    if (isRecording) {
      interval = setInterval(() => {
        setRecordingTime((prevTime) => {
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

  const goBack = () => {
    if (appMethod) {
      setAppMethod(null);
      return;
    }
    navigate("/");
  };

  const startRecording = () => {
    setIsRecording(true);
    setRecordingTime(0);
  };

  const stopRecording = () => {
    setIsRecording(false);
    // Simulate processing the audio
    processAudioApplication();
  };

  const startVideoRecording = () => {
    setIsVideoRecording(true);
    setVideoTime(0);
  };

  const stopVideoRecording = () => {
    setIsVideoRecording(false);
    // Simulate processing the video
    processVideoApplication();
  };

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
      processConversationalInput(inputMessage);
      setLoading(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const processPortfolioLinks = () => {
    setLoading(true);

    // Simulate processing the portfolio links
    setTimeout(() => {
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

      setMessages((prevMessages) => [
        ...prevMessages,
        {
          sender: "ai",
          content:
            "I've analyzed your professional profiles! Based on your GitHub repositories and LinkedIn profile, I've extracted your expertise in Machine Learning and NLP. Your work on recommendation systems and computer vision applications is impressive! I've prepared a profile for you - please review it and let me know if you'd like to make any adjustments.",
          timestamp: new Date(),
        },
      ]);

      setLoading(false);
      setStep(2);
    }, 3000);
  };

  const processVideoApplication = () => {
    setLoading(true);

    // Simulate processing the video
    setTimeout(() => {
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

      setMessages((prevMessages) => [
        ...prevMessages,
        {
          sender: "ai",
          content:
            "Thanks for your video! I've analyzed your experience and expertise in AI. Based on your description, I've identified your specialization in Machine Learning and NLP, with particular expertise in recommendation systems and computer vision. I've prepared a profile for you - please review it and let me know if anything needs adjustment.",
          timestamp: new Date(),
        },
      ]);

      setLoading(false);
      setStep(2);
    }, 3000);
  };

  const processAudioApplication = () => {
    setLoading(true);

    // Simulate processing the audio
    setTimeout(() => {
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

      setMessages((prevMessages) => [
        ...prevMessages,
        {
          sender: "ai",
          content:
            "I've processed your audio description! Based on what you shared, I've identified your expertise in Machine Learning and NLP, with strong skills in TensorFlow and PyTorch. Your experience with recommendation systems and computer vision projects is notable. I've prepared a profile for you - please review it and make any necessary adjustments.",
          timestamp: new Date(),
        },
      ]);

      setLoading(false);
      setStep(2);
    }, 3000);
  };

  const processConversationalInput = (input) => {
    if (step === 1) {
      // First step conversation handling
      const lowerInput = input.toLowerCase();

      // Check for expertise mentions
      if (
        lowerInput.includes("machine learning") ||
        lowerInput.includes("ml") ||
        lowerInput.includes("ai") ||
        lowerInput.includes("data") ||
        lowerInput.includes("neural") ||
        lowerInput.includes("deep learning")
      ) {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            sender: "ai",
            content:
              "Great! I can see you have expertise in AI and machine learning. Could you tell me about a significant project you've worked on in this field?",
            timestamp: new Date(),
          },
        ]);
      }
      // Check for project descriptions
      else if (lowerInput.length > 50) {
        setProfileData({
          name: "Expert",
          expertise: ["Machine Learning", "AI Engineering"],
          experience: "5+ years",
          skills: ["Python", "TensorFlow", "Data Science"],
          projects: [
            {
              title: "AI Project",
              description: "Based on your description",
              impact: "Significant results in the field",
              technologies: ["AI Technologies"],
            },
          ],
          education: "Advanced Degree",
        });

        setMessages((prevMessages) => [
          ...prevMessages,
          {
            sender: "ai",
            content:
              "Thanks for sharing! Based on our conversation, I've started to build your expert profile. Would you like to continue with more detailed questions, or would you prefer to review what I've gathered so far?",
            timestamp: new Date(),
          },
        ]);

        setStep(2);
      }
      // General response
      else {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            sender: "ai",
            content:
              "Thanks for that information. To help build your profile accurately, could you tell me about your specific areas of expertise in AI or machine learning?",
            timestamp: new Date(),
          },
        ]);
      }
    } else if (step === 2) {
      // Handle conversation during profile review
      const lowerInput = input.toLowerCase();

      if (
        lowerInput.includes("looks good") ||
        lowerInput.includes("correct") ||
        lowerInput.includes("accurate") ||
        lowerInput.includes("submit") ||
        lowerInput.includes("proceed") ||
        lowerInput.includes("continue")
      ) {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            sender: "ai",
            content:
              "Excellent! I've submitted your application. Our team will review your impressive profile, and you should hear back from us within 48 hours. Is there anything else you'd like to know about the next steps?",
            timestamp: new Date(),
          },
        ]);

        setStep(3);
      } else if (
        lowerInput.includes("change") ||
        lowerInput.includes("update") ||
        lowerInput.includes("edit") ||
        lowerInput.includes("wrong") ||
        lowerInput.includes("incorrect")
      ) {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            sender: "ai",
            content:
              "I'd be happy to update your profile. What specific information would you like to change?",
            timestamp: new Date(),
          },
        ]);
      } else {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            sender: "ai",
            content:
              "I've noted your feedback. Does your profile look accurate now, or would you like to make additional changes before we submit your application?",
            timestamp: new Date(),
          },
        ]);
      }
    } else if (step === 3) {
      // Final step - application submitted
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          sender: "ai",
          content:
            "Thanks for your interest in joining NerdRezult as an AI expert! If you have any questions while your application is being reviewed, you can always reach out to our support team at experts@nerdrezult.com.",
          timestamp: new Date(),
        },
      ]);
    }
  };

  const submitApplication = () => {
    setLoading(true);

    // Simulate submission process
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          sender: "ai",
          content:
            "Your application has been successfully submitted! Our team will review your profile and get back to you within 48 hours. We're excited about the possibility of having you join our network of AI experts!",
          timestamp: new Date(),
        },
      ]);

      setLoading(false);
      setStep(3);
    }, 2000);
  };

  // Render different application methods
  const renderApplicationMethod = () => {
    if (!appMethod) {
      return (
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Choose Your Application Method
          </h2>
          <p className="text-gray-600 mb-8">
            Select the fastest way to share your AI expertise with us. Our AI
            will process your information to create your expert profile.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div
              onClick={() => setAppMethod("chat")}
              className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all cursor-pointer"
            >
              <div className="bg-indigo-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <BrainCircuit className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                AI Conversation
              </h3>
              <p className="text-gray-600 mb-4">
                Have a natural conversation with our AI assistant to share your
                expertise and experience.
              </p>
              <button className="mt-2 text-indigo-600 font-medium inline-flex items-center group">
                Start conversation
                <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div
              onClick={() => setAppMethod("portfolio")}
              className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all cursor-pointer"
            >
              <div className="bg-indigo-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <FileText className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Portfolio Analysis
              </h3>
              <p className="text-gray-600 mb-4">
                Connect your LinkedIn, GitHub, or website, and our AI will
                analyze your work and build your profile.
              </p>
              <button className="mt-2 text-indigo-600 font-medium inline-flex items-center group">
                Connect profiles
                <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div
              onClick={() => setAppMethod("video")}
              className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all cursor-pointer"
            >
              <div className="bg-indigo-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <Video className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Video Application
              </h3>
              <p className="text-gray-600 mb-4">
                Record a short video explaining your AI expertise, and our AI
                will extract the key information.
              </p>
              <button className="mt-2 text-indigo-600 font-medium inline-flex items-center group">
                Record video
                <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div
              onClick={() => setAppMethod("audio")}
              className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all cursor-pointer"
            >
              <div className="bg-indigo-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <Mic className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Voice Application
              </h3>
              <p className="text-gray-600 mb-4">
                Tell us about your expertise and projects by recording an audio
                description.
              </p>
              <button className="mt-2 text-indigo-600 font-medium inline-flex items-center group">
                Record audio
                <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      );
    }

    // Chat-based application
    if (appMethod === "chat") {
      return (
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            AI Conversation
          </h2>
          <p className="text-gray-600 mb-6">
            Chat with our AI to share your expertise and experience. We'll build
            your profile as we converse.
          </p>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4 bg-indigo-600 text-white flex items-center">
              <BrainCircuit className="h-5 w-5 mr-2" />
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
                  disabled={loading || step === 3}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={loading || !inputMessage.trim() || step === 3}
                  className={`bg-indigo-600 text-white px-4 py-2 rounded-r-lg flex items-center ${
                    loading || !inputMessage.trim() || step === 3
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

              {step === 3 && (
                <div className="mt-4 text-center">
                  <Link
                    to="/"
                    className="text-indigo-600 font-medium hover:text-indigo-800"
                  >
                    Return to Home
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Profile preview (shown in step 2 and 3) */}
          {profileData && (step === 2 || step === 3) && (
            <div className="mt-8 bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <FileText className="h-5 w-5 text-indigo-600 mr-2" />
                Your Expert Profile
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Name</h4>
                  <p className="text-gray-800">{profileData.name}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500">
                    Expertise
                  </h4>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {profileData.expertise.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500">
                    Experience
                  </h4>
                  <p className="text-gray-800">{profileData.experience}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500">Skills</h4>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {profileData.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500">
                    Key Projects
                  </h4>
                  <div className="space-y-3 mt-1">
                    {profileData.projects.map((project, i) => (
                      <div
                        key={i}
                        className="bg-gray-50 border border-gray-200 rounded-md p-3"
                      >
                        <p className="font-medium text-gray-800">
                          {project.title}
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                          {project.description}
                        </p>
                        <p className="text-sm text-green-600 mt-1">
                          Impact: {project.impact}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500">
                    Education
                  </h4>
                  <p className="text-gray-800">{profileData.education}</p>
                </div>
              </div>

              {step === 2 && (
                <div className="mt-6">
                  <button
                    onClick={submitApplication}
                    disabled={loading}
                    className={`w-full bg-indigo-600 text-white py-2 rounded-md font-medium hover:bg-indigo-700 ${
                      loading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    {loading ? (
                      <span className="flex items-center justify-center">
                        <Loader2 className="h-5 w-5 animate-spin mr-2" />
                        Submitting...
                      </span>
                    ) : (
                      "Submit Application"
                    )}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      );
    }

    // Portfolio analysis
    if (appMethod === "portfolio") {
      return (
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            AI Portfolio Analysis
          </h2>
          <p className="text-gray-600 mb-6">
            Connect your professional profiles, and our AI will analyze your
            work to build your expert profile.
          </p>

          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 mb-8">
            <div className="space-y-6">
              <div className="flex items-center border border-gray-200 rounded-lg p-4 hover:border-indigo-300 transition-colors">
                <Github className="h-6 w-6 text-gray-700 mr-4" />
                <div className="flex-grow">
                  <label className="block text-gray-800 font-medium mb-1">
                    GitHub
                  </label>
                  <input
                    type="text"
                    value={portfolioLinks.github}
                    onChange={(e) =>
                      setPortfolioLinks({
                        ...portfolioLinks,
                        github: e.target.value,
                      })
                    }
                    placeholder="GitHub username or repository URL"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>

              <div className="flex items-center border border-gray-200 rounded-lg p-4 hover:border-indigo-300 transition-colors">
                <Linkedin className="h-6 w-6 text-blue-600 mr-4" />
                <div className="flex-grow">
                  <label className="block text-gray-800 font-medium mb-1">
                    LinkedIn
                  </label>
                  <input
                    type="text"
                    value={portfolioLinks.linkedin}
                    onChange={(e) =>
                      setPortfolioLinks({
                        ...portfolioLinks,
                        linkedin: e.target.value,
                      })
                    }
                    placeholder="LinkedIn profile URL"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>

              <div className="flex items-center border border-gray-200 rounded-lg p-4 hover:border-indigo-300 transition-colors">
                <FileText className="h-6 w-6 text-gray-700 mr-4" />
                <div className="flex-grow">
                  <label className="block text-gray-800 font-medium mb-1">
                    Personal Website
                  </label>
                  <input
                    type="text"
                    value={portfolioLinks.website}
                    onChange={(e) =>
                      setPortfolioLinks({
                        ...portfolioLinks,
                        website: e.target.value,
                      })
                    }
                    placeholder="Your website URL"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>

              <div className="flex items-center border border-gray-200 rounded-lg p-4 hover:border-indigo-300 transition-colors">
                <Award className="h-6 w-6 text-orange-500 mr-4" />
                <div className="flex-grow">
                  <label className="block text-gray-800 font-medium mb-1">
                    Kaggle
                  </label>
                  <input
                    type="text"
                    value={portfolioLinks.kaggle}
                    onChange={(e) =>
                      setPortfolioLinks({
                        ...portfolioLinks,
                        kaggle: e.target.value,
                      })
                    }
                    placeholder="Kaggle profile username"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>

              <div className="flex items-center border border-gray-200 rounded-lg p-4 hover:border-indigo-300 transition-colors">
                <BarChart4 className="h-6 w-6 text-purple-600 mr-4" />
                <div className="flex-grow">
                  <label className="block text-gray-800 font-medium mb-1">
                    Research Papers
                  </label>
                  <input
                    type="text"
                    value={portfolioLinks.papers}
                    onChange={(e) =>
                      setPortfolioLinks({
                        ...portfolioLinks,
                        papers: e.target.value,
                      })
                    }
                    placeholder="Google Scholar profile or paper DOIs"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={processPortfolioLinks}
                disabled={
                  loading ||
                  (!portfolioLinks.github &&
                    !portfolioLinks.linkedin &&
                    !portfolioLinks.website &&
                    !portfolioLinks.kaggle &&
                    !portfolioLinks.papers)
                }
                className={`w-full bg-indigo-600 text-white py-3 rounded-md font-medium hover:bg-indigo-700 ${
                  loading ||
                  (!portfolioLinks.github &&
                    !portfolioLinks.linkedin &&
                    !portfolioLinks.website &&
                    !portfolioLinks.kaggle &&
                    !portfolioLinks.papers)
                    ? "opacity-50 cursor-not-allowed"
                    : ""
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

          {/* Chat interface for follow-up questions */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="p-4 bg-indigo-600 text-white flex items-center">
              <BrainCircuit className="h-5 w-5 mr-2" />
              <div>
                <h3 className="font-medium">AI Portfolio Assistant</h3>
                <p className="text-xs text-indigo-100">
                  Analyzing your professional work
                </p>
              </div>
            </div>

            <div className="h-64 overflow-y-auto p-4 bg-gray-50">
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
                    Analyzing...
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
                  placeholder="Ask a question about your analysis..."
                  className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:ring-indigo-500 focus:border-indigo-500"
                  disabled={loading || step === 3}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={loading || !inputMessage.trim() || step === 3}
                  className={`bg-indigo-600 text-white px-4 py-2 rounded-r-lg flex items-center ${
                    loading || !inputMessage.trim() || step === 3
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

              {step === 3 && (
                <div className="mt-4 text-center">
                  <Link
                    to="/"
                    className="text-indigo-600 font-medium hover:text-indigo-800"
                  >
                    Return to Home
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Profile preview */}
          {profileData && (step === 2 || step === 3) && (
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <FileText className="h-5 w-5 text-indigo-600 mr-2" />
                Your Expert Profile
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Name</h4>
                  <p className="text-gray-800">{profileData.name}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500">
                    Expertise
                  </h4>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {profileData.expertise.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500">
                    Experience
                  </h4>
                  <p className="text-gray-800">{profileData.experience}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500">Skills</h4>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {profileData.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500">
                    Key Projects
                  </h4>
                  <div className="space-y-3 mt-1">
                    {profileData.projects.map((project, i) => (
                      <div
                        key={i}
                        className="bg-gray-50 border border-gray-200 rounded-md p-3"
                      >
                        <p className="font-medium text-gray-800">
                          {project.title}
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                          {project.description}
                        </p>
                        <p className="text-sm text-green-600 mt-1">
                          Impact: {project.impact}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500">
                    Education
                  </h4>
                  <p className="text-gray-800">{profileData.education}</p>
                </div>
              </div>

              {step === 2 && (
                <div className="mt-6">
                  <button
                    onClick={submitApplication}
                    disabled={loading}
                    className={`w-full bg-indigo-600 text-white py-2 rounded-md font-medium hover:bg-indigo-700 ${
                      loading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    {loading ? (
                      <span className="flex items-center justify-center">
                        <Loader2 className="h-5 w-5 animate-spin mr-2" />
                        Submitting...
                      </span>
                    ) : (
                      "Submit Application"
                    )}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      );
    }

    // Video application
    if (appMethod === "video") {
      return (
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Video Application
          </h2>
          <p className="text-gray-600 mb-6">
            Record a short video explaining your AI expertise and experience.
            Our AI will analyze your response to build your expert profile.
          </p>

          {!isVideoRecording && !profileData && (
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
                  onClick={startVideoRecording}
                  className="bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-700 flex items-center"
                >
                  <Video className="h-5 w-5 mr-2" />
                  Start Recording
                </button>

                <button className="border border-gray-300 bg-white text-gray-700 px-6 py-3 rounded-md font-semibold hover:bg-gray-50 flex items-center">
                  <Upload className="h-5 w-5 mr-2" />
                  Upload Video
                </button>
              </div>
            </div>
          )}

          {/* Video recording UI */}
          {isVideoRecording && (
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
                  onClick={stopVideoRecording}
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

          {/* Chat interface for video analysis */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="p-4 bg-indigo-600 text-white flex items-center">
              <BrainCircuit className="h-5 w-5 mr-2" />
              <div>
                <h3 className="font-medium">AI Video Analyst</h3>
                <p className="text-xs text-indigo-100">
                  {loading
                    ? "Analyzing your video..."
                    : "Ready to analyze your recording"}
                </p>
              </div>
            </div>

            <div className="h-64 overflow-y-auto p-4 bg-gray-50">
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
                    Analyzing your video...
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
                  disabled={loading || step === 3}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={loading || !inputMessage.trim() || step === 3}
                  className={`bg-indigo-600 text-white px-4 py-2 rounded-r-lg flex items-center ${
                    loading || !inputMessage.trim() || step === 3
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

              {step === 3 && (
                <div className="mt-4 text-center">
                  <Link
                    to="/"
                    className="text-indigo-600 font-medium hover:text-indigo-800"
                  >
                    Return to Home
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Profile preview */}
          {profileData && (step === 2 || step === 3) && (
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <FileText className="h-5 w-5 text-indigo-600 mr-2" />
                Your Expert Profile
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Name</h4>
                  <p className="text-gray-800">{profileData.name}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500">
                    Expertise
                  </h4>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {profileData.expertise.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500">
                    Experience
                  </h4>
                  <p className="text-gray-800">{profileData.experience}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500">Skills</h4>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {profileData.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500">
                    Key Projects
                  </h4>
                  <div className="space-y-3 mt-1">
                    {profileData.projects.map((project, i) => (
                      <div
                        key={i}
                        className="bg-gray-50 border border-gray-200 rounded-md p-3"
                      >
                        <p className="font-medium text-gray-800">
                          {project.title}
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                          {project.description}
                        </p>
                        <p className="text-sm text-green-600 mt-1">
                          Impact: {project.impact}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500">
                    Education
                  </h4>
                  <p className="text-gray-800">{profileData.education}</p>
                </div>
              </div>

              {step === 2 && (
                <div className="mt-6">
                  <button
                    onClick={submitApplication}
                    disabled={loading}
                    className={`w-full bg-indigo-600 text-white py-2 rounded-md font-medium hover:bg-indigo-700 ${
                      loading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    {loading ? (
                      <span className="flex items-center justify-center">
                        <Loader2 className="h-5 w-5 animate-spin mr-2" />
                        Submitting...
                      </span>
                    ) : (
                      "Submit Application"
                    )}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      );
    }

    // Audio application
    // Audio application
    if (appMethod === "audio") {
      return (
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Voice Application
          </h2>
          <p className="text-gray-600 mb-6">
            Record an audio description of your AI expertise and experience. Our
            AI will analyze your response to build your expert profile.
          </p>

          {!isRecording && !profileData && (
            <div className="bg-white rounded-lg p-8 shadow-md border border-gray-200 mb-8 text-center">
              <div className="bg-indigo-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Mic className="h-8 w-8 text-indigo-600" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Record Your Application
              </h3>
              <p className="text-gray-600 mb-6">
                In a 2-minute audio recording, please explain:
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
                  <Mic className="h-5 w-5 mr-2" />
                  Start Recording
                </button>

                <button className="border border-gray-300 bg-white text-gray-700 px-6 py-3 rounded-md font-semibold hover:bg-gray-50 flex items-center">
                  <Upload className="h-5 w-5 mr-2" />
                  Upload Audio
                </button>
              </div>
            </div>
          )}

          {/* Audio recording UI */}
          {isRecording && (
            <div className="bg-white rounded-lg p-8 shadow-md border border-gray-200 mb-8 text-center">
              <div className="relative mb-6">
                <div className="bg-indigo-50 rounded-lg p-8 flex items-center justify-center mb-4">
                  <div className="audio-visualization flex items-end h-32 space-x-1">
                    {[...Array(30)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1.5 bg-indigo-600 rounded-t"
                        style={{
                          height: `${
                            20 +
                            Math.sin(i * 0.3 + recordingTime * 0.2) * 20 +
                            Math.random() * 40
                          }px`,
                          opacity:
                            0.5 + Math.sin(i * 0.3 + recordingTime * 0.2) * 0.5,
                        }}
                      ></div>
                    ))}
                  </div>
                </div>

                <div className="text-center text-lg font-semibold text-indigo-900 mb-6">
                  {formatTime(recordingTime)} / 2:00
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

              {recordingTime >= 100 && (
                <p className="text-sm text-amber-600 mt-4">
                  You're approaching the 2-minute limit. Consider wrapping up
                  your key points.
                </p>
              )}
            </div>
          )}

          {/* Chat interface for audio analysis */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="p-4 bg-indigo-600 text-white flex items-center">
              <BrainCircuit className="h-5 w-5 mr-2" />
              <div>
                <h3 className="font-medium">AI Audio Analyst</h3>
                <p className="text-xs text-indigo-100">
                  {loading
                    ? "Analyzing your audio..."
                    : "Ready to analyze your recording"}
                </p>
              </div>
            </div>

            <div className="h-64 overflow-y-auto p-4 bg-gray-50">
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
                    Analyzing your audio...
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
                  placeholder="Ask about the audio analysis..."
                  className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:ring-indigo-500 focus:border-indigo-500"
                  disabled={loading || step === 3}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={loading || !inputMessage.trim() || step === 3}
                  className={`bg-indigo-600 text-white px-4 py-2 rounded-r-lg flex items-center ${
                    loading || !inputMessage.trim() || step === 3
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

              {step === 3 && (
                <div className="mt-4 text-center">
                  <Link
                    to="/"
                    className="text-indigo-600 font-medium hover:text-indigo-800"
                  >
                    Return to Home
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Profile preview */}
          {profileData && (step === 2 || step === 3) && (
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <FileText className="h-5 w-5 text-indigo-600 mr-2" />
                Your Expert Profile
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Name</h4>
                  <p className="text-gray-800">{profileData.name}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500">
                    Expertise
                  </h4>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {profileData.expertise.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500">
                    Experience
                  </h4>
                  <p className="text-gray-800">{profileData.experience}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500">Skills</h4>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {profileData.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500">
                    Key Projects
                  </h4>
                  <div className="space-y-3 mt-1">
                    {profileData.projects.map((project, i) => (
                      <div
                        key={i}
                        className="bg-gray-50 border border-gray-200 rounded-md p-3"
                      >
                        <p className="font-medium text-gray-800">
                          {project.title}
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                          {project.description}
                        </p>
                        <p className="text-sm text-green-600 mt-1">
                          Impact: {project.impact}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500">
                    Education
                  </h4>
                  <p className="text-gray-800">{profileData.education}</p>
                </div>
              </div>

              {step === 2 && (
                <div className="mt-6">
                  <button
                    onClick={submitApplication}
                    disabled={loading}
                    className={`w-full bg-indigo-600 text-white py-2 rounded-md font-medium hover:bg-indigo-700 ${
                      loading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    {loading ? (
                      <span className="flex items-center justify-center">
                        <Loader2 className="h-5 w-5 animate-spin mr-2" />
                        Submitting...
                      </span>
                    ) : (
                      "Submit Application"
                    )}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      );
    }
  };
}
