import React from "react";
import { Plus } from "lucide-react";
import AIServiceCard from "./AIServiceCard";

/**
 * Grid layout for displaying AI services
 *
 * @param {Array} services - Array of service objects to display
 * @param {function} onViewDetails - Function to call when View Details is clicked
 * @param {function} onEdit - Function to call when Edit is clicked
 * @param {function} onCreate - Function to call when Create Service is clicked
 * @param {boolean} loading - Whether services are loading
 * @param {boolean} showCreateCard - Whether to show the "Create New" card
 */
const AIServiceGrid = ({
  services = [],
  onViewDetails,
  onEdit,
  onCreate,
  loading = false,
  showCreateCard = true,
}) => {
  // Handle loading state
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden animate-pulse"
          >
            <div className="p-6">
              <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="flex space-x-2 mb-4">
                <div className="h-6 bg-gray-200 rounded-full w-20"></div>
                <div className="h-6 bg-gray-200 rounded-full w-24"></div>
              </div>
              <div className="flex justify-between">
                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              </div>
            </div>
            <div className="border-t border-gray-200 bg-gray-50 px-6 py-3 flex justify-between items-center">
              <div className="h-4 bg-gray-200 rounded w-20"></div>
              <div className="h-4 bg-gray-200 rounded w-12"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Empty state for when there are no services and create card is hidden
  if (services.length === 0 && !showCreateCard) {
    return (
      <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
        <svg
          className="mx-auto h-12 w-12 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
        <h3 className="mt-2 text-sm font-medium text-gray-900">
          No services available
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          Start by creating your first AI service.
        </p>
        <div className="mt-6">
          <button
            onClick={onCreate}
            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            <Plus className="-ml-1 mr-2 h-5 w-5" />
            Create Service
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Create new service card */}
      {showCreateCard && (
        <div
          onClick={onCreate}
          className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:border-indigo-300 hover:bg-indigo-50 transition-colors"
        >
          <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
            <Plus className="h-8 w-8 text-indigo-600" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-1">
            Create a new AI service
          </h3>
          <p className="text-sm text-gray-500 mb-4">
            Showcase your AI expertise with a new service
          </p>
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
            Create Service
          </button>
        </div>
      )}

      {/* Service cards */}
      {services.map((service) => (
        <AIServiceCard
          key={service.id}
          service={service}
          onViewDetails={onViewDetails}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default AIServiceGrid;
