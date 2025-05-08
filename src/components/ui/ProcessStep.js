import React from "react";

function ProcessStep({ number, title, description }) {
  return (
    <div className="bg-white rounded-lg p-8 shadow-sm relative">
      <div className="bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg absolute -top-5 left-8">
        {number}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default ProcessStep;
