import React from "react";
import { AlertCircle } from "lucide-react";

/**
 * Second step of the expert application form - project showcase
 * @param {object} formData - Current form data
 * @param {function} updateFormData - Function to update form data
 */
function ProjectsStep({ formData, updateFormData }) {
  // Initialize projects array if it doesn't exist
  const projects = formData.projects || [{ id: 1 }];

  const handleProjectChange = (index, field, value) => {
    const updatedProjects = [...projects];

    // Initialize project object if it doesn't exist
    if (!updatedProjects[index]) {
      updatedProjects[index] = { id: Date.now() };
    }

    // Update the specific field
    updatedProjects[index][field] = value;

    // Update form data
    updateFormData({ projects: updatedProjects });
  };

  const addProject = () => {
    const updatedProjects = [...projects, { id: Date.now() }];
    updateFormData({ projects: updatedProjects });
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Showcase Your AI Projects
      </h2>
      <p className="text-gray-600 mb-8">
        Share your most impressive AI projects to demonstrate your expertise and
        attract high-quality opportunities.
      </p>

      {projects.map((project, index) => (
        <div
          key={project.id}
          className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-800">
              Project #{index + 1}
            </h3>
            <span className="text-sm text-gray-500">
              {index === 0 ? "Required" : "Optional"}
            </span>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Project Title
              </label>
              <input
                type="text"
                value={project.title || ""}
                onChange={(e) =>
                  handleProjectChange(index, "title", e.target.value)
                }
                placeholder="e.g., Enterprise-grade NLP Recommendation System"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">
                  Your Role
                </label>
                <input
                  type="text"
                  value={project.role || ""}
                  onChange={(e) =>
                    handleProjectChange(index, "role", e.target.value)
                  }
                  placeholder="e.g., Lead ML Engineer"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">
                  Project Duration
                </label>
                <input
                  type="text"
                  value={project.duration || ""}
                  onChange={(e) =>
                    handleProjectChange(index, "duration", e.target.value)
                  }
                  placeholder="e.g., 6 months"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Project Description
              </label>
              <textarea
                rows="4"
                value={project.description || ""}
                onChange={(e) =>
                  handleProjectChange(index, "description", e.target.value)
                }
                placeholder="Describe the project, your contributions, and the outcomes achieved..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              ></textarea>
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Technologies Used
              </label>
              <input
                type="text"
                value={project.technologies || ""}
                onChange={(e) =>
                  handleProjectChange(index, "technologies", e.target.value)
                }
                placeholder="e.g., TensorFlow, PyTorch, Kubernetes, etc."
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Measurable Results
              </label>
              <input
                type="text"
                value={project.results || ""}
                onChange={(e) =>
                  handleProjectChange(index, "results", e.target.value)
                }
                placeholder="e.g., Increased conversion rates by 45%, Reduced inference time by 75%"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
        </div>
      ))}

      <div className="text-right mb-8">
        <button
          type="button"
          onClick={addProject}
          className="inline-flex items-center text-indigo-600 font-medium"
        >
          + Add Another Project
        </button>
      </div>

      <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-4 mb-8">
        <div className="flex">
          <AlertCircle className="h-6 w-6 text-indigo-600 mr-3 flex-shrink-0" />
          <p className="text-indigo-800 text-sm">
            Projects with quantifiable outcomes and clear, detailed descriptions
            are much more likely to attract high-paying opportunities.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectsStep;
