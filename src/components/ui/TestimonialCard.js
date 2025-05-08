import React from "react";

function TestimonialCard({ quote, authorName, authorRole, authorImage }) {
  return (
    <div className="bg-white rounded-lg p-8 shadow-sm relative">
      <div className="text-indigo-600 text-5xl font-serif absolute top-4 left-4 leading-none">
        "
      </div>
      <div className="pt-6">
        <p className="text-gray-700 italic mb-6">{quote}</p>
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden mr-4">
            <img src={authorImage} alt={authorName} />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">{authorName}</h4>
            <p className="text-gray-600 text-sm">{authorRole}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
