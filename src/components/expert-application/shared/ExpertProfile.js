import React from "react";
import { FileText, Loader2 } from "lucide-react";

/**
 * Expert profile component
 * Displays the expert profile generated from application data
 *
 * @param {object} profileData - The profile data to display
 * @param {boolean} isSubmitting - Whether the profile is being submitted
 * @param {function} onSubmit - Function to call when submitting the profile
 */
const ExpertProfile = ({
  profileData,
  isSubmitting = false,
  onSubmit = null,
}) => {
  if (!profileData) return null;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 sticky top-4">
      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
        <FileText className="h-5 w-5 text-indigo-600 mr-2" />
        Your Expert Profile
      </h3>

      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-medium text-gray-500">Name</h4>
          <p className="text-gray-800">{profileData.name}</p>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-500">Expertise</h4>
          <div className="flex flex-wrap gap-2 mt-1">
            {profileData.expertise.map((skill, i) => (
              <span
                key={i}
                className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-500">Experience</h4>
          <p className="text-gray-800">{profileData.experience}</p>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-500">Skills</h4>
          <div className="flex flex-wrap gap-2 mt-1">
            {profileData.skills.map((skill, i) => (
              <span
                key={i}
                className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-500">Key Projects</h4>
          <div className="space-y-3 mt-1">
            {profileData.projects.map((project, i) => (
              <div
                key={i}
                className="bg-gray-50 border border-gray-200 rounded-md p-3"
              >
                <p className="font-medium text-gray-800">{project.title}</p>
                <p className="text-sm text-gray-600 mt-1">
                  {project.description}
                </p>
                <p className="text-sm text-green-600 mt-1">
                  Impact: {project.impact}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-500">Education</h4>
          <p className="text-gray-800">{profileData.education}</p>
        </div>
      </div>

      {onSubmit && (
        <div className="mt-6">
          <button
            onClick={onSubmit}
            disabled={isSubmitting}
            className={`w-full bg-indigo-600 text-white py-2 rounded-md font-medium hover:bg-indigo-700 transition-colors ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <Loader2 className="h-5 w-5 animate-spin mr-2" />
                Submitting...
              </span>
            ) : (
              "Submit Application"
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default ExpertProfile;
