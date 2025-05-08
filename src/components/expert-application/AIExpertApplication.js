import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import MethodSelector from "./MethodSelector";
import ChatApplication from "./methods/ChatApplication";
import PortfolioApplication from "./methods/PortfolioApplication";
import VideoApplication from "./methods/VideoApplication";
import AudioApplication from "./methods/AudioApplication";

/**
 * AI Expert Application main container
 * This component manages the overall application flow and state
 */
const AIExpertApplication = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const navigate = useNavigate();

  // Handle back navigation
  const handleBack = () => {
    if (selectedMethod) {
      setSelectedMethod(null);
    } else {
      navigate("/");
    }
  };

  // Render the selected application method
  const renderApplicationMethod = () => {
    if (!selectedMethod) {
      return <MethodSelector onSelectMethod={setSelectedMethod} />;
    }

    // Render the appropriate application method component
    switch (selectedMethod) {
      case "chat":
        return <ChatApplication onBack={() => setSelectedMethod(null)} />;
      case "portfolio":
        return <PortfolioApplication onBack={() => setSelectedMethod(null)} />;
      case "video":
        return <VideoApplication onBack={() => setSelectedMethod(null)} />;
      case "audio":
        return <AudioApplication onBack={() => setSelectedMethod(null)} />;
      default:
        return <MethodSelector onSelectMethod={setSelectedMethod} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Header with back button */}
      <div className="bg-white shadow-sm py-4 px-4 mb-8">
        <div className="container mx-auto">
          <button
            onClick={handleBack}
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            {selectedMethod ? "Back to Methods" : "Back to Home"}
          </button>
        </div>
      </div>

      {/* Main application area */}
      <div className="container mx-auto px-4">{renderApplicationMethod()}</div>
    </div>
  );
};

export default AIExpertApplication;
