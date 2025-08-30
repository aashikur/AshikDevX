import React from "react";

const Card = ({
  title,
  description,
  children,
  style = "1", // 🔑 Choose card style
  className = "",
}) => {
  // 🎨 Card Style Variants
  const styleClasses = {
    1: `
      p-6 rounded-2xl 
      bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 
      border border-gray-700
      shadow-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]
      transition-all duration-300
    `,
    2: `
      p-6 rounded-xl 
      bg-white dark:bg-slate-900 
      shadow-lg border border-slate-200 dark:border-slate-700
      transition-all duration-300
    `,
    3: `
      rounded-2xl p-6 bg-slate-900/70 backdrop-blur-lg 
      border border-slate-700 shadow-lg 
      hover:shadow-blue-500/20 transition
    `,
  };

  return (
    <div className={`${styleClasses[style] || styleClasses[1]} ${className}`}>
      {title && (
        <h3 className="text-xl font-semibold text-white dark:text-slate-800 mb-3">
          {title}
        </h3>
      )}
      {description && (
        <p className="text-gray-300 dark:text-slate-600">{description}</p>
      )}
      {children}
    </div>
  );
};

export default Card;
