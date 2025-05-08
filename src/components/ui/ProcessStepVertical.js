import React from "react";

/**
 * A vertical process step component with number, title, and description
 * @param {number} number - The step number
 * @param {string} title - The step title
 * @param {string} description - The step description
 * @param {string} circleColor - Background color class for the number circle
 * @param {string} textColor - Text color class for the number
 * @param {boolean} isLast - Whether this is the last step (removes connector line)
 */
function ProcessStepVertical({
  number,
  title,
  description,
  circleColor = "bg-indigo-100",
  textColor = "text-indigo-600",
  isLast = false,
}) {
  return (
    <div className="flex items-start relative">
      {/* Number circle */}
      <div
        className={`${circleColor} ${textColor} rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 z-10`}
      >
        {number}
      </div>

      {/* Connector line */}
      {!isLast && (
        <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-gray-200 -ml-0.5"></div>
      )}

      {/* Content */}
      <div className="text-left pb-8">
        <h4 className="font-medium text-gray-800">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}

export default ProcessStepVertical;
