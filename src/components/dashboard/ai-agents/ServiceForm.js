import React, { useState, useEffect } from "react";
import { X, Plus, Info } from "lucide-react";

/**
 * Form component for creating and editing AI services
 *
 * @param {object} service - Service data for editing (null for create mode)
 * @param {function} onSubmit - Function to call when form is submitted
 * @param {function} onCancel - Function to call when form is cancelled
 * @param {boolean} isSubmitting - Whether form is submitting
 */
const ServiceForm = ({
  service = null,
  onSubmit,
  onCancel,
  isSubmitting = false,
}) => {
  // Determine if we're in edit mode
  const isEditMode = !!service;

  // Available service categories
  const categoryOptions = [
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

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    technologies: [],
    pricingModel: "subscription",
    basePrice: "",
    features: [{ id: Date.now(), name: "", description: "" }],
    requirements: "",
    technologyInput: "", // For adding new technologies
    featureInput: "", // For adding new features
  });

  // Validation errors
  const [errors, setErrors] = useState({});

  // Initialize form with service data if in edit mode
  useEffect(() => {
    if (isEditMode && service) {
      // Map service data to form data
      setFormData({
        name: service.name || "",
        description: service.description || "",
        category: service.category || "",
        technologies: service.technologies || [],
        pricingModel: service.pricingModel || "subscription",
        basePrice: service.basePrice || "",
        features: service.features || [
          { id: Date.now(), name: "", description: "" },
        ],
        requirements: service.requirements || "",
        technologyInput: "",
        featureInput: "",
      });
    }
  }, [service, isEditMode]);

  // Handle text input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for this field if any
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Add a technology
  const handleAddTechnology = () => {
    if (formData.technologyInput.trim() !== "") {
      if (!formData.technologies.includes(formData.technologyInput.trim())) {
        setFormData((prev) => ({
          ...prev,
          technologies: [...prev.technologies, prev.technologyInput.trim()],
          technologyInput: "",
        }));
      } else {
        // Technology already exists
        setErrors((prev) => ({
          ...prev,
          technologyInput: "This technology is already added",
        }));
      }
    }
  };

  // Remove a technology
  const handleRemoveTechnology = (tech) => {
    setFormData((prev) => ({
      ...prev,
      technologies: prev.technologies.filter((t) => t !== tech),
    }));
  };

  // Add a feature
  const handleAddFeature = () => {
    if (formData.featureInput.trim() !== "") {
      const newFeature = {
        id: Date.now(),
        name: formData.featureInput.trim(),
        description: "",
      };

      setFormData((prev) => ({
        ...prev,
        features: [...prev.features, newFeature],
        featureInput: "",
      }));
    }
  };

  // Remove a feature
  const handleRemoveFeature = (id) => {
    setFormData((prev) => ({
      ...prev,
      features: prev.features.filter((feature) => feature.id !== id),
    }));
  };

  // Update a feature's description
  const handleFeatureDescriptionChange = (id, description) => {
    setFormData((prev) => ({
      ...prev,
      features: prev.features.map((feature) =>
        feature.id === id ? { ...feature, description } : feature
      ),
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Service name is required";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    }

    if (!formData.category) {
      newErrors.category = "Category is required";
    }

    if (formData.technologies.length === 0) {
      newErrors.technologies = "At least one technology is required";
    }

    if (!formData.basePrice.trim()) {
      newErrors.basePrice = "Base price is required";
    } else if (isNaN(parseFloat(formData.basePrice))) {
      newErrors.basePrice = "Price must be a number";
    }

    // Check for empty features
    if (formData.features.some((feature) => !feature.name.trim())) {
      newErrors.features = "All features must have a name";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Prepare submission data
    const submissionData = {
      ...formData,
      basePrice: parseFloat(formData.basePrice),
      // Remove temporary input fields
      technologyInput: undefined,
      featureInput: undefined,
    };

    // Call the onSubmit handler
    if (onSubmit) {
      onSubmit(submissionData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Service Basic Information */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Basic Information
        </h3>
        <div className="bg-white shadow-sm rounded-md p-6 border border-gray-200 space-y-6">
          {/* Service Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Service Name*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full px-3 py-2 border ${
                errors.name ? "border-red-300" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
              placeholder="e.g., AI Chatbot Assistant"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name}</p>
            )}
          </div>

          {/* Service Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Description*
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={4}
              className={`w-full px-3 py-2 border ${
                errors.description ? "border-red-300" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
              placeholder="Describe what your AI service does and its key benefits..."
            ></textarea>
            {errors.description && (
              <p className="mt-1 text-sm text-red-600">{errors.description}</p>
            )}
            <p className="mt-1 text-sm text-gray-500">
              Detailed descriptions help clients understand your service better
              and improve discoverability.
            </p>
          </div>

          {/* Category */}
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Category*
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className={`w-full px-3 py-2 border ${
                errors.category ? "border-red-300" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
            >
              <option value="">Select a category</option>
              {categoryOptions.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            {errors.category && (
              <p className="mt-1 text-sm text-red-600">{errors.category}</p>
            )}
          </div>
        </div>
      </div>

      {/* Technologies */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Technologies & Expertise
        </h3>
        <div className="bg-white shadow-sm rounded-md p-6 border border-gray-200 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Technologies Used*
            </label>
            <div className="flex flex-wrap gap-2 mb-3">
              {formData.technologies.map((tech) => (
                <div
                  key={tech}
                  className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm flex items-center"
                >
                  {tech}
                  <button
                    type="button"
                    onClick={() => handleRemoveTechnology(tech)}
                    className="ml-1.5 text-indigo-400 hover:text-indigo-600"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                </div>
              ))}
              {formData.technologies.length === 0 && (
                <span className="text-gray-500 text-sm">
                  No technologies added yet
                </span>
              )}
            </div>

            <div className="flex">
              <input
                type="text"
                value={formData.technologyInput}
                onChange={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    technologyInput: e.target.value,
                  }));
                  // Clear error if any
                  if (errors.technologyInput) {
                    setErrors((prev) => ({ ...prev, technologyInput: "" }));
                  }
                }}
                placeholder="e.g., Natural Language Processing"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
              <button
                type="button"
                onClick={handleAddTechnology}
                className="bg-indigo-600 text-white px-4 py-2 rounded-r-md hover:bg-indigo-700"
              >
                Add
              </button>
            </div>
            {errors.technologyInput && (
              <p className="mt-1 text-sm text-red-600">
                {errors.technologyInput}
              </p>
            )}
            {errors.technologies && (
              <p className="mt-1 text-sm text-red-600">{errors.technologies}</p>
            )}
            <p className="mt-1 text-sm text-gray-500">
              Add the key technologies and methodologies your service uses.
            </p>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Pricing</h3>
        <div className="bg-white shadow-sm rounded-md p-6 border border-gray-200 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Pricing Model
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    pricingModel: "subscription",
                  }))
                }
                className={`border rounded-md p-4 cursor-pointer ${
                  formData.pricingModel === "subscription"
                    ? "border-indigo-500 bg-indigo-50"
                    : "border-gray-300 hover:border-indigo-300"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">Subscription</span>
                  {formData.pricingModel === "subscription" && (
                    <span className="h-4 w-4 bg-indigo-500 rounded-full"></span>
                  )}
                </div>
                <p className="text-sm text-gray-600">
                  Recurring monthly or annual fee
                </p>
              </div>

              <div
                onClick={() =>
                  setFormData((prev) => ({ ...prev, pricingModel: "one-time" }))
                }
                className={`border rounded-md p-4 cursor-pointer ${
                  formData.pricingModel === "one-time"
                    ? "border-indigo-500 bg-indigo-50"
                    : "border-gray-300 hover:border-indigo-300"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">One-time</span>
                  {formData.pricingModel === "one-time" && (
                    <span className="h-4 w-4 bg-indigo-500 rounded-full"></span>
                  )}
                </div>
                <p className="text-sm text-gray-600">
                  Single payment for full service
                </p>
              </div>

              <div
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    pricingModel: "usage-based",
                  }))
                }
                className={`border rounded-md p-4 cursor-pointer ${
                  formData.pricingModel === "usage-based"
                    ? "border-indigo-500 bg-indigo-50"
                    : "border-gray-300 hover:border-indigo-300"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">Usage-based</span>
                  {formData.pricingModel === "usage-based" && (
                    <span className="h-4 w-4 bg-indigo-500 rounded-full"></span>
                  )}
                </div>
                <p className="text-sm text-gray-600">
                  Pay based on actual usage
                </p>
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="basePrice"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Base Price* (USD)
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">$</span>
              </div>
              <input
                type="text"
                name="basePrice"
                id="basePrice"
                value={formData.basePrice}
                onChange={handleInputChange}
                className={`w-full pl-7 pr-12 py-2 border ${
                  errors.basePrice ? "border-red-300" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                placeholder="0.00"
                aria-describedby="price-currency"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm" id="price-currency">
                  USD
                </span>
              </div>
            </div>
            {errors.basePrice && (
              <p className="mt-1 text-sm text-red-600">{errors.basePrice}</p>
            )}
            <p className="mt-1 text-sm text-gray-500">
              {formData.pricingModel === "subscription"
                ? "Monthly base price for your service"
                : formData.pricingModel === "one-time"
                ? "One-time payment amount"
                : "Starting price or minimum charge"}
            </p>
          </div>
        </div>
      </div>

      {/* Features */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Service Features
        </h3>
        <div className="bg-white shadow-sm rounded-md p-6 border border-gray-200 space-y-6">
          <div className="space-y-4">
            {formData.features.map((feature, index) => (
              <div key={feature.id} className="flex space-x-4">
                <div className="flex-1 space-y-2">
                  <div className="flex items-center">
                    <span className="w-6 h-6 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center text-sm font-medium mr-3">
                      {index + 1}
                    </span>
                    <input
                      type="text"
                      value={feature.name}
                      onChange={(e) => {
                        const newFeatures = [...formData.features];
                        newFeatures[index].name = e.target.value;
                        setFormData((prev) => ({
                          ...prev,
                          features: newFeatures,
                        }));
                      }}
                      placeholder="Feature name"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveFeature(feature.id)}
                      className="ml-2 text-gray-400 hover:text-gray-600"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                  <input
                    type="text"
                    value={feature.description}
                    onChange={(e) =>
                      handleFeatureDescriptionChange(feature.id, e.target.value)
                    }
                    placeholder="Brief description (optional)"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>
            ))}

            {errors.features && (
              <p className="text-sm text-red-600">{errors.features}</p>
            )}

            <div className="flex">
              <input
                type="text"
                value={formData.featureInput}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    featureInput: e.target.value,
                  }))
                }
                placeholder="Add another feature"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
              <button
                type="button"
                onClick={handleAddFeature}
                disabled={!formData.featureInput.trim()}
                className="bg-indigo-600 text-white px-4 py-2 rounded-r-md hover:bg-indigo-700 disabled:bg-indigo-300"
              >
                Add
              </button>
            </div>

            <p className="text-sm text-gray-500">
              List the key features and capabilities of your AI service.
            </p>
          </div>
        </div>
      </div>

      {/* Requirements */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Requirements & Integration
        </h3>
        <div className="bg-white shadow-sm rounded-md p-6 border border-gray-200">
          <div>
            <label
              htmlFor="requirements"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Client Requirements
            </label>
            <textarea
              id="requirements"
              name="requirements"
              value={formData.requirements}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Describe any technical requirements, data inputs, or integration needs..."
            ></textarea>
            <p className="mt-1 text-sm text-gray-500">
              Include information about APIs, data sources, or other technical
              details clients need to know.
            </p>
          </div>
        </div>
      </div>

      {/* Submission Notice */}
      <div className="bg-blue-50 border border-blue-200 rounded-md p-4 flex">
        <div className="flex-shrink-0">
          <Info className="h-5 w-5 text-blue-600" />
        </div>
        <div className="ml-3">
          <p className="text-sm text-blue-700">
            Your service will be reviewed by our team before being published.
            This typically takes 1-2 business days.
          </p>
        </div>
      </div>

      {/* Form actions */}
      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-2 bg-indigo-600 text-white rounded-md text-sm font-medium hover:bg-indigo-700 disabled:bg-indigo-400 flex items-center"
        >
          {isSubmitting ? (
            <>
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
              {isEditMode ? "Updating..." : "Creating..."}
            </>
          ) : isEditMode ? (
            "Update Service"
          ) : (
            "Create Service"
          )}
        </button>
      </div>
    </form>
  );
};

export default ServiceForm;
