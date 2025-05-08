import React from "react";
import { ChevronRight } from "lucide-react";

function FeatureCard({ icon, title, description, linkText = "Learn more" }) {
  return (
    <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
      <div className="bg-indigo-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a
        href="#"
        className="text-indigo-600 font-medium inline-flex items-center group"
      >
        {linkText}
        <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  );
}

export default FeatureCard;
