import React from "react";

const ButtonMix = ({
  children,
  onClick,
  type = "button",
  style = "2", // 🔑 style prop to switch button styles
  size = "md",
  disabled = false,
  className = "",
}) => {
  // 🎨 Button Style Variants
  const styleClasses = {
    1: `
      px-6 py-3 rounded-full font-semibold text-white 
      bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700
      shadow-lg hover:shadow-[0_0_20px_rgba(99,102,241,0.7)]
      transition-all duration-300
    `,
    2: `
      px-6 py-3 rounded-full text-white font-semibold shadow-lg
      bg-gradient-to-r from-brand-500 to-brand-700
      hover:opacity-90 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]
      transition-all duration-300 active:scale-95
    `,
    3: `
      relative px-6 py-3 rounded-full font-semibold text-white
      bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500
      shadow-lg shadow-blue-500/30 hover:shadow-purple-500/40
      hover:scale-105 transition duration-300
    `,
    4: `
      px-6 py-3 rounded-full font-bold text-white 
      bg-gradient-to-r from-amber-400 to-pink-500
      shadow-md hover:shadow-[0_0_20px_rgba(251,191,36,0.6)]
      transition-all duration-300
    `,
    5: `
      px-6 py-3 rounded-full font-bold text-white 
      bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-500
      shadow-md hover:from-emerald-500 hover:via-blue-600 hover:to-cyan-400
      hover:shadow-[0_0_20px_rgba(16,185,129,0.6)]
      transition-all duration-300
    `,
  };

  // 📏 Size styles (extra flexibility)
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
        focus:outline-none cursor-pointer 
        ${styleClasses[style] || styleClasses[1]} 
        ${sizeClasses[size]}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default ButtonMix;
