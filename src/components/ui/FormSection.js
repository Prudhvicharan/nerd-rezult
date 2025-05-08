import React from "react";
import { Check } from "lucide-react";

/**
 * A selectable card with checkbox functionality
 * @param {boolean} selected - Whether the card is selected
 * @param {function} onSelect - Function to call when the card is selected/deselected
 * @param {string} label - The card's label text
 * @param {ReactNode} icon - Optional icon to display
 * @param {string} description - Optional description text
 * @param {boolean} disabled - Whether the card is disabled
 */
function CheckboxCard({
  selected = false,
  onSelect,
  label,
  icon,
  description,
  disabled = false,
  className = "",
}) {
  const handleClick = () => {
    if (!disabled && onSelect) {
      onSelect(!selected);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`
        border rounded-lg p-4 transition-colors flex items-center 
        ${selected ? "border-indigo-600 bg-indigo-50" : "border-gray-200"} 
        ${
          !disabled
            ? "cursor-pointer hover:border-indigo-300"
            : "opacity-70 cursor-not-allowed"
        }
        ${className}
      `}
    >
      <div className="flex-shrink-0 mr-3">
        {selected ? (
          <Check className="h-5 w-5 text-indigo-600" />
        ) : (
          <div className="w-5 h-5 border border-gray-300 rounded-sm"></div>
        )}
      </div>

      <div className="flex-grow">
        <div className="flex items-center">
          {icon && <span className="mr-2">{icon}</span>}
          <span
            className={`font-medium ${
              selected ? "text-indigo-900" : "text-gray-800"
            }`}
          >
            {label}
          </span>
        </div>
        {description && (
          <p className="text-sm text-gray-600 mt-1">{description}</p>
        )}
      </div>
    </div>
  );
}

export default CheckboxCard;
