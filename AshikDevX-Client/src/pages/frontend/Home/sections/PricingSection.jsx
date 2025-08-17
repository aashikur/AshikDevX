import React from 'react';

// You can keep the icon component in the same file or import it from another file.
const CheckIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

// Pricing data - easy to manage and update
const pricingPlans = [
  {
    name: "Foundation",
    price: "Starting at $500",
    description: "Perfect for individuals and small businesses needing a professional WordPress presence or quick fixes.",
    features: [
      "WordPress Theme Customization",
      "Plugin Setup & Configuration",
      "Responsive Design",
      "Basic SEO Setup",
      "Security Hardening",
    ],
    isPopular: false,
  },
  {
    name: "Growth",
    price: "Starting at $1,500",
    description: "Ideal for growing businesses that need a custom, high-performance website.",
    features: [
      "Full Custom Website (WordPress or React)",
      "Headless CMS with WordPress",
      "E-commerce Functionality",
      "API Integration",
      "Performance Optimization",
      "Priority Support",
    ],
    isPopular: true,
  },
  {
    name: "Scale",
    price: "Let's Talk",
    description: "Custom-built, scalable web applications for startups and enterprises.",
    features: [
      "Full-Stack MERN Application",
      "Custom Database Architecture",
      "Advanced API Development",
      "User Authentication (OAuth, JWT)",
      "Deployment & CI/CD Setup",
      "Dedicated Project Management",
    ],
    isPopular: false,
  },
];

const PricingSection = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Flexible Pricing for Your Needs
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            Choose the perfect plan to launch and grow your online project.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-lg shadow-lg overflow-hidden border ${
                plan.isPopular
                  ? 'border-indigo-500 dark:border-indigo-400'
                  : 'border-gray-200 dark:border-gray-700'
              } transform hover:scale-105 transition-transform duration-300`}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="bg-indigo-500 text-white text-xs font-bold uppercase tracking-wider text-center py-1">
                  Most Popular
                </div>
              )}

              <div className="bg-white dark:bg-gray-800 p-8 flex-1">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{plan.name}</h3>
                <p className="mt-4 text-gray-500 dark:text-gray-400">{plan.description}</p>
                <div className="mt-6">
                  <span className="text-4xl font-extrabold text-gray-900 dark:text-white">{plan.price}</span>
                </div>

                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className="flex-shrink-0">
                        <CheckIcon className="h-6 w-6 text-green-500" />
                      </div>
                      <p className="ml-3 text-base text-gray-700 dark:text-gray-300">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 p-6">
                <a
                  href="#"
                  className={`block w-full text-center rounded-lg px-6 py-3 text-base font-medium ${
                    plan.isPopular
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600'
                      : 'bg-white text-indigo-600 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-900 border border-indigo-600 dark:border-indigo-400'
                  }`}
                >
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;