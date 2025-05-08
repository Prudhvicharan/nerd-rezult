import React from "react";

function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  icon,
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

  return (
    <button className={classes} {...props}>
      <div className="flex items-center justify-center">
        {children}
        {icon && <span className="ml-2">{icon}</span>}
      </div>
    </button>
  );
}

export default Button;
