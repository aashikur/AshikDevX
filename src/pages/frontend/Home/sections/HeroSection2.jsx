"use client";

import Button from "@/components/ui/Button";
import ButtonMix from "@/components/ui/ButtonMix";
import Card from "@/components/ui/Card";
import { ArrowUpToLine, Download } from "lucide-react";
import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { FaArrowUpLong } from "react-icons/fa6";

const DotIcon = () => <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="4" cy="4" r="4" fill="currentColor" />
</svg>;
const coderData = {
  name: 'Md Ashikur Rahaman',
  role: 'Frontend Developer',
  seniority: 'Mid-Level',
  location: 'Bangladesh',
  skills: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'TailwindCSS', 'CSS', 'Figma', 'GitHub', 'HTML', 'Astro', 'Node.js', 'Express', 'MongoDB', 'Firebase', 'Git']
};
const CoderProfileCard = () => {
  return (
    <div className="w-full mx-auto bg-gradient-to-r from-zinc-100 to-zinc-200 dark:from-[#000000] dark:to-[#0a0d37] border-zinc-300 dark:border-[#1b2c68a0] relative rounded-lg border shadow-lg">

      { }
      <div className="flex flex-row">
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[2px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>

      { }
      <div className="px-4 lg:px-8 py-5 flex justify-between items-center bg-zinc-200 dark:bg-[#000000]">
        <div className="flex flex-row space-x-2">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-orange-400"></div>
          <div className="h-3 w-3 rounded-full bg-green-400"></div>
        </div>
        <div className="text-xs text-zinc-600 dark:text-gray-400 font-mono">coder.js</div>
      </div>

      { }
      <div className="overflow-hidden border-t-[2px] border-zinc-300 dark:border-indigo-900 px-4 lg:px-8 py-4 lg:py-8 relative">
        { }
        <div className="absolute -top-24 -left-24 w-56 h-56 bg-blue-600 rounded-full opacity-10 filter blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-56 h-56 bg-pink-600 rounded-full opacity-10 filter blur-3xl"></div>

        <div className="relative flex">
          { }
          <div className="hidden md:flex flex-col items-end pr-4 text-zinc-600 dark:text-gray-500 font-mono text-xs">
            {Array.from({
              length: 12
            }, (_, i) => <div key={i} className="leading-relaxed select-none opacity-70">{i + 1}</div>)}
          </div>

          { }
          <code className="font-mono text-xs md:text-sm lg:text-base w-full">
            <div>
              <span className="mr-2 text-pink-500 dark:text-pink-400">const</span>
              <span className="mr-2 text-violet-500 dark:text-violet-400">coder</span>
              <span className="mr-2 text-pink-500 dark:text-pink-400">=</span>
              <span className="text-zinc-600 dark:text-gray-400">{'{'}</span>
            </div>
            <div className="pl-6">
              <span className="text-zinc-800 dark:text-white">name:</span>
              <span className="text-zinc-600 dark:text-gray-400">&#39;</span>
              <span className="text-green-600 dark:text-green-400">{coderData.name}</span>
              <span className="text-zinc-600 dark:text-gray-400">&#39;,</span>
            </div>
            <div className="pl-6">
              <span className="text-zinc-800 dark:text-white">role:</span>
              <span className="text-zinc-600 dark:text-gray-400">&#39;</span>
              <span className="text-green-600 dark:text-green-400">{coderData.role}</span>
              <span className="text-zinc-600 dark:text-gray-400">&#39;,</span>
            </div>
            <div className="pl-6">
              <span className="text-zinc-800 dark:text-white">seniority:</span>
              <span className="text-zinc-600 dark:text-gray-400">&#39;</span>
              <span className="text-green-600 dark:text-green-400">{coderData.seniority}</span>
              <span className="text-zinc-600 dark:text-gray-400">&#39;,</span>
            </div>
            <div className="pl-6">
              <span className="text-zinc-800 dark:text-white">location:</span>
              <span className="text-zinc-600 dark:text-gray-400">&#39;</span>
              <span className="text-green-600 dark:text-green-400">{coderData.location}</span>
              <span className="text-zinc-600 dark:text-gray-400">&#39;,</span>
            </div>
            <div className="pl-6">
              <span className="text-zinc-800 dark:text-white">skills:</span>
              <span className="text-zinc-600 dark:text-gray-400">{'['}</span>
              <div className="pl-6 flex flex-wrap">
                {coderData.skills.map((skill, index) => <span key={skill} className="mr-1">
                  <span className="text-zinc-600 dark:text-gray-400">&#39;</span>
                  <span className="text-cyan-600 dark:text-cyan-400">{skill}</span>
                  <span className="text-zinc-600 dark:text-gray-400">&#39;</span>
                  {index < coderData.skills.length - 1 && <span className="text-zinc-600 dark:text-gray-400">, </span>}
                </span>)}
              </div>
              <span className="text-zinc-600 dark:text-gray-400">{'],'}</span>
            </div>
            <div>
              <span className="text-zinc-600 dark:text-gray-400">{'};'}</span>
            </div>
          </code>
        </div>
      </div>

      { }
      <div className="px-4 lg:px-8 pb-4 mt-4 border-t border-zinc-300 dark:border-gray-800 pt-3 text-xs text-zinc-600 dark:text-gray-500 flex justify-between items-center">
        <span>UTF-8</span>
        <span>JavaScript</span>
        <span>Ln 12, Col 2</span>
      </div>
    </div>
  );
};
const HeroSection2 = () => {
  return <div id="home" className="min-h-screen w-full relative flex items-center justify-center font-sans p-4 sm:p-6 lg:p-8">
    { }
    <div className="absolute inset-0 z-0 dark:hidden" style={{
      background: "radial-gradient(125% 125% at 50% 100%, #ffffff 40%, #3b82f6 100%)"
    }} />

    { }
    <div className="absolute inset-0 z-0 hidden dark:block" style={{
      background: "radial-gradient(125% 125% at 50% 100%, #000000 40%, #010133 100%)"
    }} />

    { }
    <div className="container mx-auto max-w-7xl relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 xl:gap-16 items-center">

        { }
        <div className="flex pt-30 md:pt-0 flex-col gap-4 sm:gap-6 items-start text-left  animate-fade-in-up">
          <div className="inline-flex mx-auto sm:mx-0 items-center gap-2 px-3 py-1 bg-gray-900/80 dark:bg-white/10 border border-gray-700 dark:border-gray-600 rounded-full text-xs sm:text-sm text-gray-200 dark:text-gray-300 backdrop-blur-sm hover:bg-gray-800 dark:hover:bg-white/20 transition-all duration-300">
            <DotIcon />
            Welcome to my universe
          </div>

          <div className="relative">
            <h1 className="text-6xl text-center sm:text-left sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
              {/* Hello <br />
                    I&apos;m{' '} */}
              <span className="bg-gradient-to-r">
                Full-Stack Developer
              </span> <br />
              & Creative {' '}
              <span className="">
                Coder
              </span>
            </h1>
          </div>


          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg lg:text-xl max-w-lg leading-relaxed">
            JavaScript lover 🖋️ | MERN Stact  ⚡ | Crafting frameworks and coding the future ✨
          </p>

          <div className="flex flex-row gap-3 sm:gap-4 mt-4 sm:mt-6 w-full sm:w-auto">
            <Button className="">
              Learn More
              <FaArrowUpLong className="rotate-45 group-hover:rotate-55 group-hover:scale-125 transition-all duration-300" />

            </Button>

            <Button variant="outline">
              <a target="_blank" className="flex items-center gap-2" href="/AshikurRahamanResume.pdf">
                Get Resume
                <Download className="group-hover:scale-125 transition-all duration-300" size={18} />
              </a>
            </Button>
          </div>


          {/* Test  */}


        </div>

        { }
        <div className=" animate-fade-in-up">
          <CoderProfileCard />
        </div>

      </div>
    </div>
  </div>;
};
export default HeroSection2;
const styles = `
  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in-up {
    animation: fade-in-up 0.6s ease-out forwards;
  }

  .hover\\:shadow-3xl:hover {
    box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
  }
`;
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}