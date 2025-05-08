import React from "react";
import { Check } from "lucide-react";

function PricingCard({
  title,
  price,
  description,
  features,
  buttonText,
  isPopular = false,
  buttonVariant = "dark",
}) {
  return (
    <div
      className={`${
        isPopular ? "border-2 border-indigo-600" : "border border-gray-200"
      } rounded-lg overflow-hidden hover:shadow-lg transition-shadow relative`}
    >
      {isPopular && (
        <div className="bg-indigo-600 text-white text-center py-2 text-sm font-semibold">
          MOST POPULAR
        </div>
      )}
      <div className="p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
        <div className="flex items-baseline mb-6">
          <span className="text-4xl font-bold text-gray-900">{price}</span>
          <span className="text-gray-600 ml-2">/ month</span>
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
        <button
          className={`w-full ${
            buttonVariant === "primary"
              ? "bg-indigo-600 hover:bg-indigo-700"
              : "bg-gray-800 hover:bg-gray-700"
          } text-white py-3 rounded-md font-medium transition-colors`}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default PricingCard;
