import React from "react";
import { ApplicationHeader, ExpertApplicationForm } from "./index";

// Example step components
const Step1 = ({ formData, updateFormData }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Step 1: Your Expertise
      </h2>
      <p className="text-gray-600 mb-6">
        Please tell us about your AI expertise.
      </p>

      <div className="mb-6">
        <label className="block text-gray-800 font-medium mb-2">
          Your Name
        </label>
        <input
          type="text"
          value={formData.name || ""}
          onChange={(e) => updateFormData({ name: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Enter your name"
        />
      </div>
    </div>
  );
};

const Step2 = ({ formData, updateFormData }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Step 2: Your Projects
      </h2>
      <p className="text-gray-600 mb-6">
        Please tell us about your AI projects.
      </p>

      <div className="mb-6">
        <label className="block text-gray-800 font-medium mb-2">
          Project Title
        </label>
        <input
          type="text"
          value={formData.projectTitle || ""}
          onChange={(e) => updateFormData({ projectTitle: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Enter your project title"
        />
      </div>
    </div>
  );
};

const Step3 = ({ formData, updateFormData }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Step 3: Your Preferences
      </h2>
      <p className="text-gray-600 mb-6">
        Please tell us about your preferences.
      </p>

      <div className="mb-6">
        <label className="block text-gray-800 font-medium mb-2">
          Project Interests
        </label>
        <input
          type="text"
          value={formData.interests || ""}
          onChange={(e) => updateFormData({ interests: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Enter your interests"
        />
      </div>
    </div>
  );
};

const Step4 = ({ formData, updateFormData }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Step 4: Complete Your Profile
      </h2>
      <p className="text-gray-600 mb-6">
        Please complete your profile information.
      </p>

      <div className="mb-6">
        <label className="block text-gray-800 font-medium mb-2">Email</label>
        <input
          type="email"
          value={formData.email || ""}
          onChange={(e) => updateFormData({ email: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Enter your email"
        />
      </div>
    </div>
  );
};

// Success step
const SuccessStep = () => {
  return (
    <div className="text-center py-8">
      <div className="bg-green-100 text-green-600 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Application Submitted!
      </h2>
      <p className="text-gray-600 mb-6">
        Thank you for applying to join our AI expert network. We'll review your
        application and get back to you soon.
      </p>
    </div>
  );
};

// Example usage of ExpertApplicationForm
function FormExample() {
  // Define steps for the form
  const steps = [Step1, Step2, Step3, Step4, SuccessStep];

  // Define initial form data
  const initialData = {
    name: "",
    projectTitle: "",
    interests: "",
    email: "",
  };

  // Mock submit function (would typically be an API call)
  const handleSubmit = async (formData) => {
    console.log("Form submitted with data:", formData);

    // Simulate API delay
    return new Promise((resolve) => {
      setTimeout(resolve, 1500);
    });
  };

  // Mock cancel function
  const handleCancel = () => {
    console.log("Form cancelled");
    alert("Are you sure you want to cancel?");
  };

  return (
    <div>
      <ApplicationHeader
        title="Join Our Elite AI Expert Network"
        description="Get matched with high-value AI projects and earn more with our outcome-based payment model."
      />

      <ExpertApplicationForm
        steps={steps}
        initialData={initialData}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />
    </div>
  );
}

export default FormExample;
