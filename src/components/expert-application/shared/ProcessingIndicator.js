import React from "react";
import { Loader2 } from "lucide-react";

/**
 * Reusable processing indicator component
 * Shows loading state with customizable message
 *
 * @param {boolean} loading - Whether processing is active
 * @param {string} message - Message to display while processing
 * @param {string} size - Size of the loader (sm, md, lg)
 * @param {string} className - Additional CSS classes
 */
const ProcessingIndicator = ({
  loading = true,
  message = "Processing...",
  size = "md",
  className = "",
}) => {
  if (!loading) return null;

  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  };

  return (
    <div className={`flex items-center ${className}`}>
      <Loader2 className={`${sizeClasses[size]} animate-spin mr-2`} />
      <span>{message}</span>
    </div>
  );
};

export default ProcessingIndicator;
