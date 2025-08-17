// src/components/PricingSection2.jsx
import React, { useState } from "react";
import pricingData from "@/data/PricingServiceData.json";
import SectionTitle from "@/components/ui/SectionTitle";

// A simple checkmark icon component for the feature list
const CheckIcon = () => (
  <svg
    className="flex-shrink-0 w-6 h-6 text-indigo-500"
    xmlns="http://www.w.org/2000/svg"
    fill="none"
    viewBox="0 0 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

// --- NEW COMPONENT: Currency Toggle Switch ---
const CurrencyToggle = ({ currencyType, setCurrencyType }) => {
  const isInternational = currencyType === "international";

  return (
    <button
      onClick={() =>
        setCurrencyType(isInternational ? "local" : "international")
      }
      className="relative inline-flex items-center h-8 w-28 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 dark:bg-gray-700 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
    >
      <span className="sr-only">Use setting</span>
      <span
        className={`absolute inset-0 flex items-center justify-center text-sm font-semibold text-gray-500 dark:text-gray-400`}
      >
        <span className={`${isInternational ? "opacity-0" : "opacity-100"}`}>
          BD (৳)
        </span>
        <span className={`${isInternational ? "opacity-100" : "opacity-0"}`}>
          Int'l ($)
        </span>
      </span>
      <span
        aria-hidden="true"
        className={`${
          isInternational ? "translate-x-14" : "translate-x-1"
        } pointer-events-none inline-block h-6 w-12 transform rounded-full bg-white dark:bg-gray-900 shadow ring-0 transition duration-200 ease-in-out`}
      />
    </button>
  );
};

const PricingSection2 = () => {
  const [currencyType, setCurrencyType] = useState("international"); // 'international' or 'local'
  const [activeCategory, setActiveCategory] = useState(
    pricingData.categories[0].id
  );

  const currentCategory = pricingData.categories.find(
    (cat) => cat.id === activeCategory
  );

  return (
    <div className="py-16 bg-gray-50 sm:py-24 dark:bg-gray-900">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Flexible Pricing for Every Need"
          subtitle="Choose a plan that works for you. All plans are fully customizable to fit your project requirements."
        />

        {/* --- MODIFICATION START: Redesigned Controls --- */}
        <div className="flex flex-col items-center justify-center gap-8 mb-12 md:flex-row md:justify-between">
          {/* New Currency Toggle */}
          <div className="w-full md:w-auto flex justify-center md:justify-start">
            <CurrencyToggle
              currencyType={currencyType}
              setCurrencyType={setCurrencyType}
            />
          </div>

          {/* New Category Navigation */}
          <div className="flex flex-wrap justify-center p-1.5 bg-gray-200/70 dark:bg-gray-800/70 rounded-full">
            {pricingData.categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 sm:px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 ${
                  activeCategory === category.id
                    ? "bg-indigo-600 text-white shadow-md"
                    : "bg-transparent text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
           {/* Add a spacer for large screens to balance the layout */}
           <div className="hidden md:block w-28"></div>
        </div>
        {/* --- MODIFICATION END --- */}

        {/* Pricing Table */}
        <div className="grid max-w-md grid-cols-1 gap-8 mx-auto lg:max-w-none lg:grid-cols-3">
          {currentCategory?.packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative flex flex-col p-8 transition-all duration-300 bg-white dark:bg-gray-800 border rounded-2xl shadow-lg h-[42rem] ${
                pkg.mostPopular
                  ? "border-2 border-indigo-600 transform lg:scale-105"
                  : "border-gray-200 dark:border-gray-700"
              }`}
            >
              {pkg.mostPopular && (
                <div className="absolute top-0 px-4 py-1 text-xs font-semibold tracking-wide text-white uppercase transform -translate-y-1/2 bg-indigo-600 rounded-full">
                  Most Popular
                </div>
              )}

              {/* Top part of the card (non-scrollable) */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {pkg.title}
                </h3>
                <p className="mt-4 text-gray-500 dark:text-gray-400">{pkg.description}</p>
                <div className="mt-6">
                  <span className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {pkg.price[currencyType].split("/")[0]}
                  </span>
                  <span className="ml-1 text-base font-medium text-gray-500 dark:text-gray-400">
                    /{pkg.price[currencyType].split("/")[1]}
                  </span>
                </div>
              </div>
              
              <div className="flex-1 mt-8 overflow-y-auto pr-4">
                <ul role="list" className="space-y-4">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckIcon />
                      <span className="ml-3 text-sm text-gray-600 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-8">
                <a
                  href={`/get-started?package=${pkg.id}`}
                  className={`block w-full px-6 py-3 text-sm font-semibold text-center rounded-lg transition-colors ${
                    pkg.mostPopular
                      ? "bg-indigo-600 text-white hover:bg-indigo-700"
                      : "bg-indigo-50 text-indigo-700 hover:bg-indigo-100 dark:bg-indigo-500/10 dark:text-indigo-400 dark:hover:bg-indigo-500/20"
                  }`}
                >
                  Choose Plan
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection2;