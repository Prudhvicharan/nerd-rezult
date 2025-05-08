import React from "react";
import { ArrowLeft } from "lucide-react";

/**
 * Reusable navigation component for multi-step forms
 * @param {function} onPrevious - Function to call when previous button is clicked
 * @param {function} onNext - Function to call when next/submit button is clicked
 * @param {number} currentStep - Current step number
 * @param {number} totalSteps - Total number of steps
 * @param {boolean} isFirstStep - Whether this is the first step
 * @param {boolean} isLastStep - Whether this is the last step
 * @param {string} nextButtonText - Text for the next/submit button
 * @param {string} prevButtonText - Text for the previous button
 * @param {string} backToHomeText - Text for the "back to home" link (first step only)
 * @param {function} onBackToHome - Function to call when back to home is clicked
 * @param {boolean} isSubmitting - Whether form is currently submitting
 */
function FormNavigation({
  onPrevious,
  onNext,
  currentStep,
  totalSteps,
  isFirstStep = false,
  isLastStep = false,
  nextButtonText = "Next Step",
  prevButtonText = "Previous Step",
  backToHomeText = "Back to Home",
  onBackToHome,
  isSubmitting = false,
}) {
  return (
    <div className="flex justify-between items-center mt-8">
      {isFirstStep ? (
        <button
          onClick={onBackToHome}
          className="flex items-center text-indigo-600 font-medium"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          {backToHomeText}
        </button>
      ) : (
        <button
          onClick={onPrevious}
          className="flex items-center text-indigo-600 font-medium"
          disabled={isSubmitting}
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          {prevButtonText}
        </button>
      )}

      <button
        onClick={onNext}
        disabled={isSubmitting}
        className={`
          bg-indigo-600 text-white px-8 py-3 rounded-md font-semibold 
          hover:bg-indigo-700 transition-colors
          disabled:opacity-70 disabled:cursor-not-allowed
        `}
      >
        {isSubmitting ? (
          <span className="flex items-center">
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Processing...
          </span>
        ) : isLastStep ? (
          "Submit Application"
        ) : (
          nextButtonText
        )}
      </button>
    </div>
  );
}

export default FormNavigation;
