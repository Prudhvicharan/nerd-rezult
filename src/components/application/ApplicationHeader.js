import React from "react";

/**
 * A reusable component for application page headers
 * @param {string} title - The main title text
 * @param {string} description - The subtitle or description text
 * @param {string} bgColor - Optional background color class (default gradient)
 * @param {string} textColor - Optional title text color class (default white)
 * @param {string} descriptionColor - Optional description text color class (default light purple)
 */
function ApplicationHeader({
  title,
  description,
  bgColor = "bg-gradient-to-r from-indigo-700 to-purple-800",
  textColor = "text-white",
  descriptionColor = "text-indigo-100",
}) {
  return (
    <section className={`${bgColor} py-12`}>
      <div className="container mx-auto px-4 text-center">
        <h1 className={`text-4xl font-bold ${textColor} mb-4`}>{title}</h1>
        <p className={`text-xl ${descriptionColor} max-w-3xl mx-auto`}>
          {description}
        </p>
      </div>
    </section>
  );
}

export default ApplicationHeader;
