import React from "react";
import { BrainCircuit, FileText, Video, Mic, ChevronRight } from "lucide-react";

/**
 * Application method selection component
 * Displays a grid of application methods for the user to choose from
 *
 * @param {function} onSelectMethod - Callback when a method is selected
 */
const MethodSelector = ({ onSelectMethod }) => {
  // Application methods data
  const applicationMethods = [
    {
      id: "chat",
      icon: <BrainCircuit className="h-6 w-6 text-indigo-600" />,
      title: "AI Conversation",
      description:
        "Have a natural conversation with our AI assistant to share your expertise and experience.",
    },
    {
      id: "portfolio",
      icon: <FileText className="h-6 w-6 text-indigo-600" />,
      title: "Portfolio Analysis",
      description:
        "Connect your LinkedIn, GitHub, or website, and our AI will analyze your work and build your profile.",
    },
    {
      id: "video",
      icon: <Video className="h-6 w-6 text-indigo-600" />,
      title: "Video Application",
      description:
        "Record a short video explaining your AI expertise, and our AI will extract the key information.",
    },
    {
      id: "audio",
      icon: <Mic className="h-6 w-6 text-indigo-600" />,
      title: "Voice Application",
      description:
        "Tell us about your expertise and projects by recording an audio description.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Choose Your Application Method
      </h2>
      <p className="text-gray-600 mb-8">
        Select the fastest way to share your AI expertise with us. Our AI will
        process your information to create your expert profile.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {applicationMethods.map((method) => (
          <MethodCard
            key={method.id}
            method={method}
            onSelect={() => onSelectMethod(method.id)}
          />
        ))}
      </div>
    </div>
  );
};

/**
 * Individual method card component
 */
const MethodCard = ({ method, onSelect }) => {
  return (
    <div
      onClick={onSelect}
      className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all cursor-pointer"
    >
      <div className="bg-indigo-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
        {method.icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        {method.title}
      </h3>
      <p className="text-gray-600 mb-4">{method.description}</p>
      <button className="mt-2 text-indigo-600 font-medium inline-flex items-center group">
        {method.id === "chat"
          ? "Start conversation"
          : method.id === "portfolio"
          ? "Connect profiles"
          : method.id === "video"
          ? "Record video"
          : "Record audio"}
        <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
};

export default MethodSelector;
