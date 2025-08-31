import React from "react";
import ButtonMix from "./ButtonMix";

const Section = ({
  id,
  title,
  subtitle,
  description,
  cta,
  children,
  className = "",
  containerClass = "",
  centered = true, // 🔑 auto center text or not
}) => {
  return (
    <section
      id={id}
      className={`w-full py-12 md:py-20   border my-1 ${className}`}
    >
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${containerClass}`}>
        {/* Section Header */}
        {(title || subtitle || description) && (
          <div
            className={`mb-10 ${centered ? "text-center" : "text-left"}`}
          >
            {subtitle && (
              <p className="text-sm font-semibold text-blue-500 uppercase tracking-wide mb-2">
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-3 text-lg text-slate-600 dark:text-slate-400">
                {description}
              </p>
            )}
          </div>
        )}

        {/* Section Content */}
        <div>{children}</div>
      </div>
      {cta && <div className="text-center">
      <ButtonMix style="1" className="text-sm h-10">{cta}</ButtonMix>
        </div>}
    </section>
  );
};

export default Section;
