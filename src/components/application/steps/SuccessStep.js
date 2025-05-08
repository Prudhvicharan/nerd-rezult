import React from "react";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

/**
 * Final success step shown after application is submitted
 */
function SuccessStep() {
  return (
    <div className="text-center">
      <div className="bg-indigo-100 text-indigo-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-8">
        <Check className="h-10 w-10" />
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Application Submitted!
      </h2>
      <p className="text-gray-600 mb-8">
        Thank you for applying to join the NerdRezult AI expert network. Our
        team will review your application and get back to you within 48 hours.
      </p>

      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <h3 className="font-semibold text-gray-800 mb-4">What happens next?</h3>
        <div className="space-y-4">
          <ProcessStep
            number={1}
            title="Application Review"
            description="Our expert vetting team will review your application and portfolio to ensure it meets our quality standards."
          />
          <ProcessStep
            number={2}
            title="Skills Assessment"
            description="If your application meets our criteria, you'll be invited to complete a brief AI skills assessment relevant to your expertise."
          />
          <ProcessStep
            number={3}
            title="Profile Verification"
            description="Our team will verify your credentials and professional background, ensuring trust and quality on our platform."
          />
          <ProcessStep
            number={4}
            title="Welcome to NerdRezult!"
            description="Once approved, you'll gain access to our platform and start getting matched with high-quality AI projects based on your expertise."
          />
        </div>
      </div>

      <Link to="/">
        <button className="bg-indigo-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-indigo-700">
          Return to Home
        </button>
      </Link>
    </div>
  );
}

// Helper component for the process steps
function ProcessStep({ number, title, description }) {
  return (
    <div className="flex items-start">
      <div className="bg-indigo-100 text-indigo-600 rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
        {number}
      </div>
      <div className="text-left">
        <h4 className="font-medium text-gray-800">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}

export default SuccessStep;
