import React from "react";
import { Link } from "react-router-dom";

function MobileMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  // Close the menu when a link is clicked
  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div className="md:hidden bg-white py-4 px-4 shadow-lg">
      <nav className="flex flex-col space-y-4">
        <Link
          to="/how-it-works"
          className="text-gray-700 hover:text-indigo-600 font-medium py-2"
          onClick={handleLinkClick}
        >
          How It Works
        </Link>
        <Link
          to="/for-businesses"
          className="text-gray-700 hover:text-indigo-600 font-medium py-2"
          onClick={handleLinkClick}
        >
          For Businesses
        </Link>
        <Link
          to="/join-as-expert"
          className="text-gray-700 hover:text-indigo-600 font-medium py-2"
          onClick={handleLinkClick}
        >
          For AI Experts
        </Link>
        <Link
          to="/success-stories"
          className="text-gray-700 hover:text-indigo-600 font-medium py-2"
          onClick={handleLinkClick}
        >
          Success Stories
        </Link>
        <Link
          to="/pricing"
          className="text-gray-700 hover:text-indigo-600 font-medium py-2"
          onClick={handleLinkClick}
        >
          Pricing
        </Link>
        <Link
          to="/find-ai-talent"
          className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 shadow-sm inline-block"
          onClick={handleLinkClick}
        >
          Get Started
        </Link>
      </nav>
    </div>
  );
}

export default MobileMenu;
