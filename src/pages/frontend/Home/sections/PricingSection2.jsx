import React, { useState } from "react";
import pricingData from "@/data/PricingServiceData.json";
import SectionTitle from "@/components/ui/SectionTitle";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

// A simple checkmark icon component for the feature list
const CheckIcon = () => (
  <svg
    className="flex-shrink-0 w-6 h-6 text-blue-500"
    xmlns="http://www.w3.org/2000/svg"
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

const CurrencyToggle = ({ currencyType, setCurrencyType }) => {
  return (
    <div className="flex p-1 space-x-1 bg-gray-200 dark:bg-gray-700/80 rounded-full">
      <button
        onClick={() => setCurrencyType("international")}
        className={`px-5 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 ${
          currencyType === "international"
            ? "bg-white dark:bg-gray-900 text-blue-600 dark:text-white shadow"
            : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
        }`}
      >
        USD
      </button>
      <button
        onClick={() => setCurrencyType("local")}
        className={`px-5 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 ${
          currencyType === "local"
            ? "bg-white dark:bg-gray-900 text-blue-600 dark:text-white shadow"
            : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
        }`}
      >
        BDT
      </button>
    </div>
  );
};

const PricingSection = () => {
  const [currencyType, setCurrencyType] = useState("international"); // 'international' or 'local'
  const [activeCategory, setActiveCategory] = useState(
    pricingData.categories[0].id
  );

  const currentCategory = pricingData.categories.find(
    (cat) => cat.id === activeCategory
  );

  return (
    <Section
      title={'Flexible Pricing'}
      subtitle={''}
      description={'Think of it not as paying for a website — but investing in your brand’s growth'}
      id="pricingSection" 
      className="scroll-mt-20 py-16 bg-gray-50 sm:py-24 dark:bg-gray-900"
    >
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-8 mb-12 md:flex-row md:justify-between">
          <div className="w-full md:w-auto flex justify-center md:justify-start">
            <CurrencyToggle
              currencyType={currencyType}
              setCurrencyType={setCurrencyType}
            />
          </div>

          <div className="flex flex-wrap justify-center p-1.5 bg-gray-200/70 dark:bg-gray-800/70 rounded-full">
            {pricingData.categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 sm:px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 ${
                  activeCategory === category.id
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-transparent text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          <div className="hidden md:block w-28"></div>
        </div>

        <div className="grid max-w-md grid-cols-1 gap-8 mx-auto lg:max-w-none lg:grid-cols-3">
          {currentCategory?.packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative flex flex-col p-8 transition-all duration-300 bg-white dark:bg-gray-800 border rounded-2xl shadow-lg h-[42rem] ${
                pkg.mostPopular
                  ? "border-2 border-blue-600 transform lg:scale-105"
                  : "border-gray-200 dark:border-gray-700"
              }`}
            >
              {pkg.mostPopular && (
                <div className="absolute top-0 px-4 py-1 text-xs font-semibold tracking-wide text-white uppercase transform -translate-y-1/2 bg-blue-600 rounded-full">
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
                <Button
                  variant={`${pkg.mostPopular ? "primary" : "secondary"}`}
                  className="w-full text-sm"
                >
                  Choose Plan
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default PricingSection;