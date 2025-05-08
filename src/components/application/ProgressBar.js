import React from "react";

/**
 * Progress bar component for multi-step forms
 * @param {number} currentStep - The current active step
 * @param {number} totalSteps - The total number of steps
 * @param {Array} stepLabels - Optional array of labels for each step
 */
function ProgressBar({ currentStep, totalSteps, stepLabels = [] }) {
  const percentage = (currentStep / totalSteps) * 100;

  // If step labels aren't provided, use default labels
  const labels =
    stepLabels.length === totalSteps
      ? stepLabels
      : ["Your Expertise", "Your Projects", "Your Preferences", "Your Profile"];

  return (
    <div className="bg-white py-4 border-b">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-500">
              Step {currentStep} of {totalSteps}
            </span>
            <span className="text-xs text-gray-500">
              {currentStep <= totalSteps
                ? labels[currentStep - 1]
                : labels[labels.length - 1]}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-indigo-600 h-2 rounded-full transition-all duration-300 ease-in-out"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
