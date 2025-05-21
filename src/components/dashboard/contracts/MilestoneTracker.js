import React, { useState } from "react";
import {
  Check,
  Clock,
  DollarSign,
  Calendar,
  Upload,
  FileText,
  AlertTriangle,
  PlusCircle,
  X,
} from "lucide-react";

/**
 * Milestone tracker component for visualizing contract milestones
 *
 * @param {Array} milestones - Array of milestone objects
 * @param {string} contractId - ID of the parent contract
 * @param {boolean} canSubmit - Whether the user can submit milestone deliverables
 */
const MilestoneTracker = ({
  milestones = [],
  contractId,
  canSubmit = true,
}) => {
  const [activeMilestone, setActiveMilestone] = useState(null);
  const [deliverableText, setDeliverableText] = useState("");
  const [files, setFiles] = useState([]);
  const [submitting, setSubmitting] = useState(false);

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  // Format date
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  // Get milestone status config
  const getMilestoneStatus = (milestone) => {
    if (milestone.status === "completed") {
      return {
        icon: <Check className="h-5 w-5 text-white" />,
        bgColor: "bg-green-500",
        textColor: "text-green-800",
        label: "Completed",
        description: `Completed on ${formatDate(milestone.completedDate)}`,
      };
    } else if (milestone.status === "active") {
      return {
        icon: <Clock className="h-5 w-5 text-white" />,
        bgColor: "bg-indigo-500",
        textColor: "text-indigo-800",
        label: "In Progress",
        description: `Due ${formatDate(milestone.dueDate)}`,
      };
    } else if (milestone.status === "pending") {
      return {
        icon: <Clock className="h-5 w-5 text-gray-400" />,
        bgColor: "bg-gray-200",
        textColor: "text-gray-600",
        label: "Pending",
        description: `Unlocks after previous milestone`,
      };
    } else if (milestone.status === "review") {
      return {
        icon: <FileText className="h-5 w-5 text-white" />,
        bgColor: "bg-amber-500",
        textColor: "text-amber-800",
        label: "Under Review",
        description: `Submitted on ${formatDate(milestone.submittedDate)}`,
      };
    } else if (milestone.status === "rejected") {
      return {
        icon: <AlertTriangle className="h-5 w-5 text-white" />,
        bgColor: "bg-red-500",
        textColor: "text-red-800",
        label: "Needs Revision",
        description: milestone.feedback || "Revisions requested",
      };
    }

    return {
      icon: <Clock className="h-5 w-5 text-gray-400" />,
      bgColor: "bg-gray-200",
      textColor: "text-gray-600",
      label: "Pending",
      description: `Due ${formatDate(milestone.dueDate)}`,
    };
  };

  // Handle file selection
  const handleFileChange = (e) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles([...files, ...newFiles]);
    }
  };

  // Remove a file
  const handleRemoveFile = (index) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };

  // Submit milestone deliverables
  const handleSubmitMilestone = async (milestoneId) => {
    if (!deliverableText.trim() && files.length === 0) {
      return; // Don't submit if empty
    }

    setSubmitting(true);

    // In a real app, this would submit to an API
    console.log("Submitting milestone:", milestoneId);
    console.log("Deliverable text:", deliverableText);
    console.log("Files:", files);

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Reset form
    setDeliverableText("");
    setFiles([]);
    setActiveMilestone(null);
    setSubmitting(false);
  };

  // If no milestones provided
  if (!milestones || milestones.length === 0) {
    return (
      <div className="text-center p-8 bg-gray-50 rounded-lg border border-gray-200">
        <Clock className="mx-auto h-12 w-12 text-gray-400" />
        <h3 className="mt-2 text-sm font-medium text-gray-900">
          No Milestones
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          This contract doesn't have any defined milestones.
        </p>
      </div>
    );
  }

  // Calculate total contract value and completed value
  const totalValue = milestones.reduce(
    (sum, milestone) => sum + milestone.amount,
    0
  );
  const completedValue = milestones
    .filter((m) => m.status === "completed")
    .reduce((sum, milestone) => sum + milestone.amount, 0);

  // Calculate progress percentage
  const progressPercentage =
    Math.round((completedValue / totalValue) * 100) || 0;

  return (
    <div>
      {/* Progress overview */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-lg font-medium text-gray-900">
              Milestone Progress
            </h3>
            <p className="text-sm text-gray-600">
              {milestones.filter((m) => m.status === "completed").length} of{" "}
              {milestones.length} milestones completed
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">Contract Value</p>
            <p className="text-lg font-medium text-gray-900">
              {formatCurrency(completedValue)} / {formatCurrency(totalValue)}
            </p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
          <div
            className="bg-indigo-600 h-2.5 rounded-full"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <p className="text-right text-sm text-gray-600">
          {progressPercentage}% complete
        </p>
      </div>

      {/* Milestones list */}
      <div className="space-y-6">
        {milestones.map((milestone, index) => {
          const { icon, bgColor, textColor, label, description } =
            getMilestoneStatus(milestone);
          const isActive = activeMilestone === milestone.id;
          const canSubmitThis =
            canSubmit &&
            (milestone.status === "active" || milestone.status === "rejected");

          return (
            <div
              key={milestone.id}
              className={`bg-white rounded-lg shadow-sm border ${
                milestone.status === "active"
                  ? "border-indigo-300"
                  : "border-gray-200"
              } overflow-hidden`}
            >
              {/* Milestone header */}
              <div className="p-6">
                <div className="flex items-start">
                  <div
                    className={`rounded-full w-10 h-10 flex-shrink-0 ${bgColor} flex items-center justify-center mr-4`}
                  >
                    {icon}
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-lg font-medium text-gray-900">
                          {milestone.title}
                        </h4>
                        <p className="text-sm text-gray-600 mt-1">
                          {milestone.description}
                        </p>
                      </div>

                      <div className="ml-4 flex-shrink-0">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-${label.toLowerCase()}-100 ${textColor}`}
                        >
                          {label}
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500 flex items-center">
                          <DollarSign className="h-4 w-4 mr-1 text-gray-400" />
                          Payment Amount
                        </p>
                        <p className="font-medium text-gray-900">
                          {formatCurrency(milestone.amount)}
                        </p>
                      </div>

                      <div>
                        <p className="text-gray-500 flex items-center">
                          <Calendar className="h-4 w-4 mr-1 text-gray-400" />
                          Due Date
                        </p>
                        <p className="font-medium text-gray-900">
                          {formatDate(milestone.dueDate)}
                        </p>
                      </div>

                      <div>
                        <p className="text-gray-500">Status</p>
                        <p
                          className={`font-medium ${
                            milestone.status === "completed"
                              ? "text-green-600"
                              : milestone.status === "active"
                              ? "text-indigo-600"
                              : milestone.status === "review"
                              ? "text-amber-600"
                              : milestone.status === "rejected"
                              ? "text-red-600"
                              : "text-gray-900"
                          }`}
                        >
                          {description}
                        </p>
                      </div>
                    </div>

                    {/* Action buttons */}
                    {canSubmitThis && !isActive && (
                      <div className="mt-4">
                        <button
                          onClick={() => setActiveMilestone(milestone.id)}
                          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                        >
                          <Upload className="h-4 w-4 mr-2" />
                          {milestone.status === "rejected"
                            ? "Submit Revisions"
                            : "Submit Deliverables"}
                        </button>
                      </div>
                    )}

                    {/* Display feedback if rejected */}
                    {milestone.status === "rejected" && milestone.feedback && (
                      <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md">
                        <h5 className="text-sm font-medium text-red-800 flex items-center">
                          <AlertTriangle className="h-4 w-4 mr-1" />
                          Revision Requested
                        </h5>
                        <p className="text-sm text-red-700 mt-1">
                          {milestone.feedback}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Submission form */}
              {isActive && (
                <div className="border-t border-gray-200 bg-gray-50 p-6">
                  <h5 className="text-sm font-medium text-gray-900 mb-4">
                    {milestone.status === "rejected"
                      ? "Submit Revision"
                      : "Submit Deliverable"}
                  </h5>

                  <div className="mb-4">
                    <label
                      htmlFor="deliverable-text"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Deliverable Description
                    </label>
                    <textarea
                      id="deliverable-text"
                      value={deliverableText}
                      onChange={(e) => setDeliverableText(e.target.value)}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Describe what you're delivering for this milestone..."
                    ></textarea>
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Upload Files
                    </label>

                    <div className="flex items-center justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600 justify-center">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none"
                          >
                            <span>Upload files</span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              className="sr-only"
                              multiple
                              onChange={handleFileChange}
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">
                          PDF, Word, Excel, PNG, JPG up to 10MB
                        </p>
                      </div>
                    </div>

                    {/* Selected files */}
                    {files.length > 0 && (
                      <div className="mt-4">
                        <h6 className="text-sm font-medium text-gray-700 mb-2">
                          Selected Files:
                        </h6>
                        <ul className="divide-y divide-gray-200 border border-gray-200 rounded-md">
                          {files.map((file, fileIndex) => (
                            <li
                              key={fileIndex}
                              className="px-4 py-3 flex items-center justify-between"
                            >
                              <div className="flex items-center">
                                <FileText className="h-5 w-5 text-gray-400 mr-2" />
                                <span className="text-sm text-gray-700 mr-2">
                                  {file.name}
                                </span>
                                <span className="text-xs text-gray-500">
                                  {(file.size / 1024).toFixed(0)} KB
                                </span>
                              </div>
                              <button
                                onClick={() => handleRemoveFile(fileIndex)}
                                className="text-gray-400 hover:text-gray-600"
                              >
                                <X className="h-4 w-4" />
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Form actions */}
                  <div className="flex justify-end space-x-3">
                    <button
                      onClick={() => setActiveMilestone(null)}
                      className="px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                      disabled={submitting}
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => handleSubmitMilestone(milestone.id)}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400"
                      disabled={
                        submitting ||
                        (!deliverableText.trim() && files.length === 0)
                      }
                    >
                      {submitting ? (
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
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Upload className="h-4 w-4 mr-2" />
                          Submit
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MilestoneTracker;
