import React from "react";

// Data for project types
const projectTypes = [
  "Predictive Analytics",
  "Computer Vision",
  "NLP/NLU Systems",
  "Recommendation Engines",
  "Generative AI",
  "AI Ethics & Governance",
  "MLOps Implementation",
  "AI Strategy",
];

// Data for industries
const industries = [
  "Healthcare",
  "Finance",
  "E-commerce",
  "Manufacturing",
  "Technology",
  "Entertainment",
  "Education",
  "Insurance",
  "Logistics",
];

/**
 * Third step of the expert application form - preferences
 * @param {object} formData - Current form data
 * @param {function} updateFormData - Function to update form data
 */
function PreferencesStep({ formData, updateFormData }) {
  // Initialize preference arrays if they don't exist
  const projectInterests = formData.projectInterests || [];
  const preferredIndustries = formData.preferredIndustries || [];

  // Handle checkbox changes for project types
  const handleProjectTypeChange = (type) => {
    let updatedInterests;

    if (projectInterests.includes(type)) {
      updatedInterests = projectInterests.filter((item) => item !== type);
    } else {
      updatedInterests = [...projectInterests, type];
    }

    updateFormData({ projectInterests: updatedInterests });
  };

  // Handle checkbox changes for industries
  const handleIndustryChange = (industry) => {
    let updatedIndustries;

    if (preferredIndustries.includes(industry)) {
      updatedIndustries = preferredIndustries.filter(
        (item) => item !== industry
      );
    } else {
      updatedIndustries = [...preferredIndustries, industry];
    }

    updateFormData({ preferredIndustries: updatedIndustries });
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Set Your Preferences
      </h2>
      <p className="text-gray-600 mb-8">
        Tell us about your desired projects and compensation to help us match
        you with the perfect opportunities.
      </p>

      <div className="mb-8">
        <label className="block text-gray-800 font-medium mb-2">
          Project Types You're Interested In
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projectTypes.map((type) => (
            <div
              key={type}
              onClick={() => handleProjectTypeChange(type)}
              className="border rounded-lg p-4 cursor-pointer hover:border-indigo-300 flex items-center"
            >
              <div
                className={`w-5 h-5 border ${
                  projectInterests.includes(type)
                    ? "bg-indigo-600 border-indigo-600"
                    : "border-gray-300"
                } rounded-sm mr-3 flex items-center justify-center`}
              >
                {projectInterests.includes(type) && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>
              <span>{type}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <label className="block text-gray-800 font-medium mb-2">
          Industries You Prefer
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {industries.map((industry) => (
            <div
              key={industry}
              onClick={() => handleIndustryChange(industry)}
              className="border rounded-lg p-4 cursor-pointer hover:border-indigo-300 flex items-center"
            >
              <div
                className={`w-5 h-5 border ${
                  preferredIndustries.includes(industry)
                    ? "bg-indigo-600 border-indigo-600"
                    : "border-gray-300"
                } rounded-sm mr-3 flex items-center justify-center`}
              >
                {preferredIndustries.includes(industry) && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>
              <span>{industry}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-gray-800 font-medium mb-2">
            Availability
          </label>
          <select
            name="availability"
            value={formData.availability || ""}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Select your availability</option>
            <option value="full-time">Full-time (40+ hrs/week)</option>
            <option value="part-time">Part-time (20-39 hrs/week)</option>
            <option value="limited">Limited (10-19 hrs/week)</option>
            <option value="minimal">Minimal (Less than 10 hrs/week)</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-800 font-medium mb-2">
            Desired Project Duration
          </label>
          <select
            name="preferredDuration"
            value={formData.preferredDuration || ""}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Select preferred project length</option>
            <option value="short">Short-term (Less than 1 month)</option>
            <option value="medium">Medium-term (1-3 months)</option>
            <option value="long">Long-term (3+ months)</option>
            <option value="any">Any duration</option>
          </select>
        </div>
      </div>

      <div className="mb-8">
        <label className="block text-gray-800 font-medium mb-2">
          Expected Compensation Range (per project)
        </label>
        <select
          name="compensationRange"
          value={formData.compensationRange || ""}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="">Select compensation range</option>
          <option value="range1">$1,000 - $5,000</option>
          <option value="range2">$5,000 - $15,000</option>
          <option value="range3">$15,000 - $50,000</option>
          <option value="range4">$50,000+</option>
          <option value="custom">Depends on project scope</option>
        </select>
      </div>
    </div>
  );
}

export default PreferencesStep;
