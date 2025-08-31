// src/components/common/Button.jsx
import React from "react";

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  disabled = false,
  className = "",
}) => {
  // 🎨 Variant styles
  const variantClasses = {
    primary: `
      relative inline-flex items-center justify-center
      text-white font-semibold rounded-full
      bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800
      shadow-[0_0_20px_rgba(59,130,246,0.5)]
      hover:shadow-[0_0_30px_rgba(59,130,246,0.8)]
      transition-all duration-300
    `,
    secondary: `
      relative inline-flex items-center justify-center
      text-white font-semibold rounded-full
      bg-blue-500/20 
      hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]
      transition-all duration-300
    `,
    outline: `
     px-6 flex gap-x-2 w-42 justify-center group py-3 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white  
    `,
    danger: `
      bg-red-600 hover:bg-red-700 text-white
    `,
  };

  // 📏 Size styles
  const sizeClasses = {
    sm: "px-3 py-1 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        min-w-42 focus:outline-none cursor-pointer flex gap-2 group hover:scale-105 rounded-full font-semibold transition-all duration-300 items-center active:scale-95
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
