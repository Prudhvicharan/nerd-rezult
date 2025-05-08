import React from "react";
import { Link } from "react-router-dom";

function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  icon,
  to, // React Router path
  href, // External URL
  ...props
}) {
  const baseStyles = "rounded-md font-medium transition-colors";

  const variantStyles = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm",
    secondary:
      "border border-white text-white hover:bg-white hover:bg-opacity-10",
    tertiary: "bg-white text-indigo-700 hover:bg-gray-100",
    dark: "bg-gray-800 text-white hover:bg-gray-700",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2",
    lg: "px-8 py-3",
  };

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  const content = (
    <div className="flex items-center justify-center">
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </div>
  );

  // If it's a React Router link
  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  // If it's an external link
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  // Default: a regular button
  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}

export default Button;
