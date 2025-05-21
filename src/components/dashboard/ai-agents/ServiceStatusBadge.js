import React from "react";
import { CheckCircle, Clock, XCircle, AlertTriangle } from "lucide-react";

/**
 * Status badge component for AI services
 *
 * @param {string} status - The status of the service ('active', 'pending', 'rejected', etc.)
 * @param {string} size - Size of the badge ('sm' or 'md')
 * @param {boolean} showIcon - Whether to show the status icon
 */
const ServiceStatusBadge = ({ status, size = "md", showIcon = true }) => {
  // Define badge styles and icons based on status
  const getBadgeConfig = (status) => {
    switch (status.toLowerCase()) {
      case "active":
        return {
          bgColor: "bg-green-100",
          textColor: "text-green-800",
          icon: (
            <CheckCircle className={size === "sm" ? "w-3 h-3" : "w-4 h-4"} />
          ),
          label: "Active",
        };
      case "pending":
      case "review":
        return {
          bgColor: "bg-amber-100",
          textColor: "text-amber-800",
          icon: <Clock className={size === "sm" ? "w-3 h-3" : "w-4 h-4"} />,
          label: "Pending Review",
        };
      case "rejected":
        return {
          bgColor: "bg-red-100",
          textColor: "text-red-800",
          icon: <XCircle className={size === "sm" ? "w-3 h-3" : "w-4 h-4"} />,
          label: "Rejected",
        };
      case "draft":
        return {
          bgColor: "bg-gray-100",
          textColor: "text-gray-700",
          icon: <Clock className={size === "sm" ? "w-3 h-3" : "w-4 h-4"} />,
          label: "Draft",
        };
      case "suspended":
        return {
          bgColor: "bg-orange-100",
          textColor: "text-orange-800",
          icon: (
            <AlertTriangle className={size === "sm" ? "w-3 h-3" : "w-4 h-4"} />
          ),
          label: "Suspended",
        };
      default:
        return {
          bgColor: "bg-gray-100",
          textColor: "text-gray-800",
          icon: null,
          label: status.charAt(0).toUpperCase() + status.slice(1),
        };
    }
  };

  const { bgColor, textColor, icon, label } = getBadgeConfig(status);

  // Size-based classes
  const sizeClasses =
    size === "sm" ? "px-2 py-0.5 text-xs" : "px-2.5 py-0.5 text-sm";

  return (
    <span
      className={`inline-flex items-center rounded-full ${bgColor} ${textColor} ${sizeClasses} font-medium`}
    >
      {showIcon && icon && <span className="mr-1">{icon}</span>}
      {label}
    </span>
  );
};

export default ServiceStatusBadge;
