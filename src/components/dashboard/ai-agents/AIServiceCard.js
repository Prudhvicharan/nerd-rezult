import React from "react";
import {
  CheckCircle,
  Clock,
  XCircle,
  Star,
  Users,
  Calendar,
} from "lucide-react";

/**
 * Card component for displaying AI Service information
 *
 * @param {object} service - Service data object
 * @param {function} onViewDetails - Function to call when View Details is clicked
 * @param {function} onEdit - Function to call when Edit is clicked
 */
const AIServiceCard = ({ service, onViewDetails, onEdit }) => {
  // Render appropriate status badge based on service status
  const renderStatusBadge = (status) => {
    switch (status) {
      case "active":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <CheckCircle className="w-3 h-3 mr-1" />
            Active
          </span>
        );
      case "pending":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
            <Clock className="w-3 h-3 mr-1" />
            Pending
          </span>
        );
      case "rejected":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
            <XCircle className="w-3 h-3 mr-1" />
            Rejected
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-medium text-gray-900">{service.name}</h3>
          {renderStatusBadge(service.status)}
        </div>

        <p className="text-sm text-gray-600 mb-4 line-clamp-3">
          {service.description}
        </p>

        {service.technologies && service.technologies.length > 0 && (
          <div className="mb-4">
            <p className="text-xs text-gray-500 mb-1">Technologies</p>
            <div className="flex flex-wrap gap-1">
              {service.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 gap-3 mb-3">
          <div className="flex items-center text-sm text-gray-600">
            <Users className="w-4 h-4 text-gray-400 mr-1" />
            <span>{service.clients} Clients</span>
          </div>

          {service.rating > 0 && (
            <div className="flex items-center text-sm text-gray-600">
              <Star className="w-4 h-4 text-amber-500 mr-1" />
              <span>
                {service.rating} ({service.reviewCount} reviews)
              </span>
            </div>
          )}

          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="w-4 h-4 text-gray-400 mr-1" />
            <span>Updated {service.lastUpdated}</span>
          </div>

          {service.category && (
            <div className="flex items-center text-sm text-gray-600">
              <span className="px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 text-xs">
                {service.category}
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-gray-200 bg-gray-50 px-6 py-3 flex justify-between items-center">
        <button
          onClick={() => onViewDetails && onViewDetails(service.id)}
          className="text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
        >
          View Details
        </button>

        <button
          onClick={() => onEdit && onEdit(service.id)}
          className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
        >
          Edit
        </button>
      </div>

      {service.status === "rejected" && service.rejectionReason && (
        <div className="border-t border-red-200 bg-red-50 px-6 py-3">
          <p className="text-sm text-red-800">
            <strong>Rejection reason:</strong> {service.rejectionReason}
          </p>
        </div>
      )}
    </div>
  );
};

export default AIServiceCard;
