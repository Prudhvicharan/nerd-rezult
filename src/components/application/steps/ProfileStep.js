import React from "react";

/**
 * Fourth step of the expert application form - personal info and final details
 * @param {object} formData - Current form data
 * @param {function} updateFormData - Function to update form data
 */
function ProfileStep({ formData, updateFormData }) {
  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };

  // Handle checkbox change
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    updateFormData({ [name]: checked });
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Complete Your Profile
      </h2>
      <p className="text-gray-600 mb-8">
        Almost there! Let's add the finishing touches to your AI expert profile.
      </p>

      <div className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-800 font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName || ""}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-gray-800 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email || ""}
              onChange={handleInputChange}
              placeholder="you@example.com"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>
      </div>

      <div className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-800 font-medium mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone || ""}
              onChange={handleInputChange}
              placeholder="Enter your phone number"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-gray-800 font-medium mb-2">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={formData.location || ""}
              onChange={handleInputChange}
              placeholder="City, Country"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>
      </div>

      <div className="mb-8">
        <label className="block text-gray-800 font-medium mb-2">
          LinkedIn Profile (Optional)
        </label>
        <input
          type="url"
          name="linkedin"
          value={formData.linkedin || ""}
          onChange={handleInputChange}
          placeholder="https://linkedin.com/in/yourprofile"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div className="mb-8">
        <label className="block text-gray-800 font-medium mb-2">
          GitHub/Portfolio URL (Optional)
        </label>
        <input
          type="url"
          name="portfolio"
          value={formData.portfolio || ""}
          onChange={handleInputChange}
          placeholder="https://github.com/yourusername"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div className="mb-8">
        <label className="block text-gray-800 font-medium mb-2">
          Professional Summary
        </label>
        <textarea
          name="summary"
          rows="5"
          value={formData.summary || ""}
          onChange={handleInputChange}
          placeholder="Write a compelling summary of your AI expertise, experience, and what makes you a standout expert..."
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
        ></textarea>
      </div>

      <div className="mb-8">
        <label className="flex items-start">
          <input
            type="checkbox"
            name="termsAgreed"
            checked={formData.termsAgreed || false}
            onChange={handleCheckboxChange}
            className="mt-1 mr-3"
          />
          <span className="text-sm text-gray-700">
            I agree to the{" "}
            <a href="#" className="text-indigo-600 hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-indigo-600 hover:underline">
              Privacy Policy
            </a>
            . I understand that NerdRezult will process my data to provide
            services and match me with potential projects.
          </span>
        </label>
      </div>
    </div>
  );
}

export default ProfileStep;
