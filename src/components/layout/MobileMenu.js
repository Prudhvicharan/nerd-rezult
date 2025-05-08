import React from "react";

function MobileMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-white py-4 px-4 shadow-lg">
      <nav className="flex flex-col space-y-4">
        <a
          href="#"
          className="text-gray-700 hover:text-indigo-600 font-medium py-2"
        >
          How It Works
        </a>
        <a
          href="#"
          className="text-gray-700 hover:text-indigo-600 font-medium py-2"
        >
          For Businesses
        </a>
        <a
          href="#"
          className="text-gray-700 hover:text-indigo-600 font-medium py-2"
        >
          For AI Experts
        </a>
        <a
          href="#"
          className="text-gray-700 hover:text-indigo-600 font-medium py-2"
        >
          Success Stories
        </a>
        <a
          href="#"
          className="text-gray-700 hover:text-indigo-600 font-medium py-2"
        >
          Pricing
        </a>
        <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 shadow-sm">
          Get Started
        </button>
      </nav>
    </div>
  );
}

export default MobileMenu;
