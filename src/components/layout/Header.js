import React, { useState } from "react";
import { Cpu, Menu, X } from "lucide-react";
import MobileMenu from "./MobileMenu";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Cpu className="h-8 w-8 text-indigo-600" />
          <h1 className="text-2xl font-bold text-gray-900">
            Nerd<span className="text-indigo-600">Rezult</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className="text-gray-700 hover:text-indigo-600 font-medium"
          >
            How It Works
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-indigo-600 font-medium"
          >
            For Businesses
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-indigo-600 font-medium"
          >
            For AI Experts
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-indigo-600 font-medium"
          >
            Success Stories
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-indigo-600 font-medium"
          >
            Pricing
          </a>
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 shadow-sm">
            Get Started
          </button>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-600 hover:text-gray-900"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileMenu isOpen={isOpen} onClose={toggleMenu} />
    </header>
  );
}

export default Header;
