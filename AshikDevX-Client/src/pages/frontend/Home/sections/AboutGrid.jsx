"use client";

import AboutMarque from "@/components/frontend/About/AboutMarque";
import { MoveRight } from "lucide-react";
import React from "react";
import Global from "../../About/sections/WorkTogether";

// Simple icon placeholder
const BoxIcon = (props) => (
  <svg
    {...props}
    className="hidden"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
  </svg>
);

// Basic grid wrapper
const BentoGrid = ({ children }) => {
  return (
    <div
      className="
        grid gap-4
        grid-cols-1                
        md:grid-cols-3             
        auto-rows-[22rem]         
      "
    >
      {children}
    </div>
  );
};

// Card component
const BentoCard = ({ name, description, Icon, cta, href, className, background }) => (
  <div
    className={`
      relative overflow-hidden rounded-xl p-6 flex flex-col justify-between
      bg-white dark:bg-black shadow group
      ${className}
    `}
  >
    <div className="absolute inset-0">{background}</div>
    <div className="relative z-10 bottom">
    </div>
    <div className="relative z-10  translate-y-15 transition-all duration-300 group-hover:translate-y-0">
      <Icon className="w-8 h-8 mb-2 text-gray-800 dark:text-gray-200" />
      <h3 className=" font-semibold text-base text-gray-500 dark:text-[#a1a1a1]">{name}</h3>
      <p className=" text-gray-600 pb-6 font-semibold pt-1 text-xl  dark:text-[#d4d4d4]">{description}</p>

      <a href={href} className=" flex items-center  gap-4 font-medium hover:underline">
        {cta} <MoveRight className="w-4 h-4" />
      </a>
    </div>
  </div>
);

export default function BentoGridCom() {
  const features = [
    {
      name: "Collaboration",
      description: "I prioritize client collaboration, fostering open communications.",
      Icon: BoxIcon,
      cta: "Connect with Ashik",
      href: "#",
      className: "md:col-span-2 ", // Large screens: spans 2 columns
      background: <div className="absolute inset-0 group " >
        <div className="flex justify-center items-center h-full">
          {/* X Organizations Black Background with Top Glow */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(120, 180, 255, 0.25), transparent 70%), #000000",
            }}
          />
          <img className="w-40 group-hover:-translate-y-15 transition-all duration-300 z-10 bg-white/10 border border-white/15 p-1.5  rounded-full " 
          
          src="public/assets/images/hero3.jpg" alt="" />
        </div>
      </div>,
    },
    {
      name: "",
      Icon: BoxIcon,
      cta: "View All Projects",
      href: "#",
      className: "row-span-2 md:row-span-2", // Large screens: spans 2 rows
      background: <div className="absolute inset-0" >
        <AboutMarque/>
      </div>,
    },
    {
      name: "Remote",
      description: "Bangladesh",
      Icon: BoxIcon,
      cta: "Connect Now",
      href: "#",
      className: "row-span-2 md:row-span-2", // Large screens: spans 2 rows
      background: <div className="absolute inset-0 bg-blue-100" />,
    },
    {
      name: "",
      description: "",
      Icon: BoxIcon,
      cta: "",
      href: "#",
      className: "",
      background: <div className="absolute inset-0 bg-green-100" >
        <Global/>
      </div>,
    },
    {
      name: "Card 5",
      description: "Wide card spanning 2 columns.",
      Icon: BoxIcon,
      cta: "Start",
      href: "#",
      className: "md:col-span-2",
      background: <div className="absolute inset-0 bg-red-100" />,
    },
  ];

  return (
    <div className="w-full p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <BentoGrid>
          {features.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
}
