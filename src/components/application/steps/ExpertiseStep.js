import React from "react";
import { Check } from "lucide-react";

// Data for expertise options
const expertiseOptions = [
  { id: "aipm", label: "AI Product Management" },
  { id: "ml", label: "Machine Learning Engineering" },
  { id: "ds", label: "Data Science" },
  { id: "cv", label: "Computer Vision" },
  { id: "nlp", label: "Natural Language Processing" },
  { id: "ra", label: "Responsible AI" },
  { id: "mlops", label: "MLOps" },
  { id: "ai-research", label: "AI Research" },
];

/**
 * First step of the expert application form - expertise selection
 * @param {object} formData - Current form data
 * @param {function} updateFormData - Function to update form data
 */
function ExpertiseStep({ formData, updateFormData }) {
  // Initialize expertise array if it doesn't exist
  const expertise = formData.expertise || [];

  // Handle expertise checkbox changes
  const handleExpertiseChange = (id) => {
    let updatedExpertise;

    if (expertise.includes(id)) {
      // Remove if already selected
      updatedExpertise = expertise.filter((item) => item !== id);
    } else {
      // Add if not selected
      updatedExpertise = [...expertise, id];
    }

    updateFormData({ expertise: updatedExpertise });
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Tell Us About Your AI Expertise
      </h2>
      <p className="text-gray-600 mb-8">
        Select your areas of expertise and provide details about your experience
        to help us match you with the perfect projects.
      </p>

      <div className="mb-8">
        <label className="block text-gray-800 font-medium mb-4">
          Your AI Expertise (Select all that apply)
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {expertiseOptions.map((option) => (
            <div
              key={option.id}
              onClick={() => handleExpertiseChange(option.id)}
              className={`border rounded-lg p-4 cursor-pointer transition-colors flex items-center ${
                expertise.includes(option.id)
                  ? "border-indigo-600 bg-indigo-50"
                  : "border-gray-200 hover:border-indigo-300"
              }`}
            >
              {expertise.includes(option.id) ? (
                <Check className="h-5 w-5 text-indigo-600 mr-3" />
              ) : (
                <div className="w-5 h-5 border border-gray-300 rounded-sm mr-3"></div>
              )}
              <span>{option.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <label className="block text-gray-800 font-medium mb-2">
          Years of Experience
        </label>
        <select
          name="yearsExperience"
          value={formData.yearsExperience || ""}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="">Select years of experience</option>
          <option value="0-2">0-2 years</option>
          <option value="3-5">3-5 years</option>
          <option value="6-10">6-10 years</option>
          <option value="10+">10+ years</option>
        </select>
      </div>

      <div className="mb-8">
        <label className="block text-gray-800 font-medium mb-2">
          Highest Education
        </label>
        <select
          name="education"
          value={formData.education || ""}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="">Select your highest education</option>
          <option value="bachelor">Bachelor's Degree</option>
          <option value="master">Master's Degree</option>
          <option value="phd">Ph.D.</option>
          <option value="self-taught">Self-Taught Expert</option>
        </select>
      </div>

      <div className="mb-8">
        <label className="block text-gray-800 font-medium mb-2">
          AI Certifications (Optional)
        </label>
        <input
          type="text"
          name="certification"
          value={formData.certification || ""}
          onChange={handleInputChange}
          placeholder="e.g., Duke AI Product Management, Stanford ML, etc."
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
    </div>
  );
}

export default ExpertiseStep;
