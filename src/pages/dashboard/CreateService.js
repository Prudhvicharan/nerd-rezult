import React, { useState } from "react";
import { DashboardLayout } from "../../components/dashboard/layout";
import { ServiceForm } from "../../components/dashboard/ai-agents/ServiceForm";
import {
  ArrowLeft,
  Sparkles,
  Info,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

/**
 * Create Service page component for creating new AI services
 */
const CreateService = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStep, setFormStep] = useState("editing"); // editing, submitting, success, error
  const [submissionError, setSubmissionError] = useState(null);

  // Available service categories
  const categories = [
    "Customer Support",
    "Data Analytics",
    "Content Creation",
    "E-commerce",
    "Computer Vision",
    "Social Media Analytics",
    "Language Services",
    "Automation",
    "Search & Recommendation",
    "Business Intelligence",
    "Healthcare",
    "Finance",
    "Other",
  ];

  // Initial form data
  const initialServiceData = {
    name: "",
    description: "",
    category: "",
    technologies: [],
    pricingModel: "subscription",
    basePrice: "",
    features: [{ id: Date.now(), name: "", description: "" }],
    requirements: "",
    technologyInput: "",
    featureInput: "",
  };

  // Handle form submission
  const handleSubmit = async (formData) => {
    try {
      setIsSubmitting(true);
      setFormStep("submitting");

      // In a real app, this would be an API call
      // Simulate API call with a delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Simulate successful response
      setFormStep("success");
      console.log("Submitted form data:", formData);

      // In a real app, you'd navigate to the newly created service
      // after a short delay to show the success message
      setTimeout(() => {
        navigate("/expert-dashboard/services");
      }, 3000);
    } catch (error) {
      console.error("Error submitting service:", error);
      setFormStep("error");
      setSubmissionError(
        "An error occurred while creating your service. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle form cancel
  const handleCancel = () => {
    // Show confirmation if form has been modified
    if (
      window.confirm(
        "Are you sure you want to cancel? Any unsaved changes will be lost."
      )
    ) {
      navigate("/expert-dashboard/services");
    }
  };

  // Navigate back to services list
  const handleBack = () => {
    navigate("/expert-dashboard/services");
  };

  return (
    <DashboardLayout pageTitle="Create AI Service">
      {/* Back button */}
      <div className="mb-6">
        <button
          onClick={handleBack}
          className="flex items-center text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="h-5 w-5 mr-1" />
          <span>Back to Services</span>
        </button>
      </div>

      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
        <div className="flex items-center mb-4">
          <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
            <Sparkles className="h-6 w-6 text-indigo-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Create New AI Service
            </h1>
            <p className="text-gray-600">
              Showcase your AI expertise with a new service offering
            </p>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-md p-4 flex">
          <div className="flex-shrink-0">
            <Info className="h-5 w-5 text-blue-600" />
          </div>
          <div className="ml-3">
            <p className="text-sm text-blue-700">
              Your service will be reviewed by our team before being published.
              This typically takes 1-2 business days. Complete all sections
              carefully to provide the best information for potential clients.
            </p>
          </div>
        </div>
      </div>

      {/* Form status */}
      {formStep === "submitting" && (
        <div className="mb-8">
          <div className="bg-indigo-50 border border-indigo-200 rounded-md p-4 flex items-center">
            <div className="flex-shrink-0">
              <svg
                className="animate-spin h-5 w-5 text-indigo-600"
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
            </div>
            <div className="ml-3">
              <p className="text-sm text-indigo-700">
                Submitting your service. Please wait...
              </p>
            </div>
          </div>
        </div>
      )}

      {formStep === "success" && (
        <div className="mb-8">
          <div className="bg-green-50 border border-green-200 rounded-md p-4 flex items-center">
            <div className="flex-shrink-0">
              <CheckCircle className="h-5 w-5 text-green-600" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-green-700">
                Your service has been submitted successfully and is now pending
                review. You'll be notified once the review is complete.
              </p>
            </div>
          </div>
        </div>
      )}

      {formStep === "error" && (
        <div className="mb-8">
          <div className="bg-red-50 border border-red-200 rounded-md p-4 flex items-center">
            <div className="flex-shrink-0">
              <AlertTriangle className="h-5 w-5 text-red-600" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">
                {submissionError || "An error occurred. Please try again."}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Service form */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <ServiceForm
          service={null} // null for create mode
          onSubmit={handleSubmit}
          onCancel={handleCancel}
          isSubmitting={isSubmitting}
        />
      </div>

      {/* Form guidelines */}
      <div className="mt-8 bg-gray-50 rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">
          Service Creation Guidelines
        </h2>

        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-gray-800 mb-1">
              📝 Complete Description
            </h3>
            <p className="text-gray-600 text-sm">
              Provide a detailed description of your service, explaining what
              problem it solves and how it works. Be specific about what clients
              can expect.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-gray-800 mb-1">
              🎯 Clear Features
            </h3>
            <p className="text-gray-600 text-sm">
              List the specific features and capabilities included in your
              service. This helps clients understand exactly what they're
              getting.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-gray-800 mb-1">
              💰 Transparent Pricing
            </h3>
            <p className="text-gray-600 text-sm">
              Clearly explain your pricing model and what's included at each
              tier. Transparency builds trust with potential clients.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-gray-800 mb-1">
              ⚙️ Technical Requirements
            </h3>
            <p className="text-gray-600 text-sm">
              Specify any technical requirements or integration details needed
              for your service. This helps set the right expectations and
              reduces potential issues.
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CreateService;
