"use client";

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
          <div className="inline-flex mx-auto items-center gap-2 px-3 py-1 bg-gray-900/80 dark:bg-white/10 border border-gray-700 dark:border-gray-600 rounded-full text-xs sm:text-sm text-gray-200 dark:text-gray-300 backdrop-blur-sm hover:bg-gray-800 dark:hover:bg-white/20 transition-all duration-300">
            <DotIcon />
            Welcome to my universe
          </div>

          <div className="relative">
            <h1 className="text-6xl text-center sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
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

          <div className="sm:flex hidden   flex-wrap gap-2 sm:gap-3 my-2 sm:my-4">
            <span className="px-3 sm:px-4 py-1 sm:py-2 bg-gray-900/80 dark:bg-white/10 border border-gray-700 dark:border-gray-600 rounded-full text-gray-200 dark:text-gray-300 text-sm sm:text-base backdrop-blur-sm hover:bg-gray-800 dark:hover:bg-white/20 transition-all duration-300 cursor-default">Learning MARN Stack</span>
            <span className="px-3 sm:px-4 py-1 sm:py-2 bg-gray-900/80 dark:bg-white/10 border border-gray-700 dark:border-gray-600 rounded-full text-gray-200 dark:text-gray-300 text-sm sm:text-base backdrop-blur-sm hover:bg-gray-800 dark:hover:bg-white/20 transition-all duration-300 cursor-default">Clean Code</span>
            <span className="px-3 sm:px-4 py-1 sm:py-2 bg-gray-900/80 dark:bg-white/10 border border-gray-700 dark:border-gray-600 rounded-full text-gray-200 dark:text-gray-300 text-sm sm:text-base backdrop-blur-sm hover:bg-gray-800 dark:hover:bg-white/20 transition-all duration-300 cursor-default">Innovation</span>
          </div>

          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg lg:text-xl max-w-lg leading-relaxed">
            JavaScript lover 🖋️ | MERN Stact  ⚡ | Crafting frameworks and coding the future ✨
          </p>

          <div className="flex flex-row gap-3 sm:gap-4 mt-4 sm:mt-6 w-full sm:w-auto">
            <button className="px-6 group flex items-center gap-x-2 w-42 justify-center py-3 bg-transparent py-3 bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-600 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
              Learn More <FaArrowUpLong className="rotate-45 group-hover:rotate-55 group-hover:scale-125 transition-all duration-300" />


            </button>
            <a
              href="/AshikurRahamanResume.pdf" className="px-6 flex gap-x-2 w-42 justify-center group py-3 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 items-center active:scale-95">
              Get Resume <Download className="group-hover:scale-125 transition-all duration-300" size={18} />
            </a>


          </div>
          

{/* Test  */}
<div className="
">

  <span class="bg-accent-amber text-neutral-900 px-2 py-1 rounded-full text-sm">
  New22211111
</span>

  <div className="
  p-6 rounded-2xl 
  bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900
  border border-slate-700 
  shadow-xl 
  hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]
  transition-all duration-300
">
  <h2 className="text-xl font-bold text-white">🌟 Premium Feature</h2>
  <p className="text-slate-300 mt-2">Unlock exclusive tools with a glowing UI experience.</p>
</div>

  <button className="
  px-6 py-3 rounded-full font-semibold text-white 
  bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700
  shadow-lg hover:shadow-[0_0_20px_rgba(99,102,241,0.7)]
  transition-all duration-300
">
  🚀 Get Started
</button>

  <button className="btn text-white bg-gradient-to-r from-blue-500 to-blue-700">
  Premium Button
</button>

  <button className="
  px-6 py-3 rounded-full 
  bg-gradient-to-r from-brand-500 to-brand-700
  text-white font-semibold shadow-lg 
  hover:opacity-90 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] 
  transition-all duration-300
  active:scale-95
">
  Premium Button
</button>

<div className="divider"></div>
<div className="
  p-6 rounded-2xl 
  bg-gradient-to-br from-brand-700 via-brand-600 to-brand-700
  border border-brand-800 
  shadow-xl 
  hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]
  transition-all duration-300
">
  <h2 className="text-xl font-bold text-white">🌟 Premium Feature</h2>
  <p className="text-blue-100 mt-2">
    Unlock exclusive pro-level tools with a glowing, trust-first UI experience.
  </p>
  <button className="mt-4 px-6 py-2 rounded-full text-white font-semibold
    bg-gradient-to-r from-brand-500 to-brand-600
    hover:from-brand-600 hover:to-brand-500
    shadow-lg transition-all duration-300
    active:scale-95">
    Try Now
  </button>
</div>



<div className="
  p-6 rounded-2xl 
  bg-gradient-to-br from-brand-700 via-brand-600 to-brand-700
  border border-brand-800 
  shadow-xl 
  hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]
  transition-all duration-300
">
  <h2 className="text-xl font-bold text-white">🌟 Premium Feature</h2>
  <p className="text-blue-100 mt-2">
    Unlock pro-level tools with a glowing, trust-first UI experience.
  </p>
  <button className="mt-4 px-6 py-2 rounded-full text-white font-semibold
    bg-gradient-to-r from-brand-500 to-brand-600
    hover:from-brand-600 hover:to-brand-500
    shadow-lg transition-all duration-300">
    Try Now
  </button>
</div>

{/* Premium Button */}
<button className="
  px-6 py-3 rounded-full 
  bg-gradient-to-r from-brand-500 to-brand-700
  text-white font-semibold shadow-lg 
  hover:opacity-90 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] 
  transition-all duration-300">
  Premium Button
</button>

<div className="divider"></div>
<button className="
px-5 my-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 py-3
                   text-white font-semibold shadow-lg hover:opacity-90 transition">
  Premium Button
</button>


<div className="p-6 rounded-xl bg-white dark:bg-slate-900 shadow-lg">
  <h2 className="text-xl font-bold text-slate-800 dark:text-white">Premium Card</h2>
  <p className="text-slate-600 dark:text-slate-300">Consistent styling makes UI look premium.</p>
</div>


<button className="my-1
  relative inline-flex items-center justify-center px-6 py-3
  text-white text-lg font-semibold
  rounded-full
  bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800
  shadow-[0_0_20px_rgba(59,130,246,0.5)]
  hover:shadow-[0_0_30px_rgba(59,130,246,0.8)]
  transition-all duration-300
">
   Get Started
</button>



<button className="relative px-6 py-3 rounded-full font-semibold text-white
    bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500
    shadow-lg shadow-blue-500/30 hover:shadow-purple-500/40
    hover:scale-105 transition duration-300">
  Get Started
</button>

<button className="
  px-6 py-3 
  rounded-full 
  font-semibold 
  text-white 
  shadow-lg 
  bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700
  hover:from-purple-600 hover:via-indigo-700 hover:to-blue-600
  transition-all duration-300 
  hover:shadow-[0_0_20px_rgba(99,102,241,0.7)]
">
  🚀 Premium Button 3
</button>


<div className="rounded-2xl p-6 bg-slate-900/70 backdrop-blur-lg border border-slate-700 
    shadow-lg hover:shadow-blue-500/20 transition">
  <h3 className="text-xl font-bold text-white">Premium Card</h3>
  <p className="text-slate-400 mt-2">Sleek UI with professional polish.</p>
  <button className="mt-4 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 
      text-white font-medium shadow-md hover:shadow-blue-400/40 transition">
    Learn More
  </button>
</div>


<button className="
  px-6 py-3 
  rounded-full 
  font-semibold 
  text-white 
  shadow-lg 
  bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700
  hover:from-purple-600 hover:via-indigo-700 hover:to-blue-600
  transition-all duration-300 
  hover:shadow-[0_0_20px_rgba(99,102,241,0.7)]
">
  🚀 Premium Button
</button>





<button className="
  px-6 py-3 
  rounded-full 
  font-bold 
  text-white 
  shadow-md 
  bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-500
  hover:from-emerald-500 hover:via-blue-600 hover:to-cyan-400
  transition-all duration-300 
  hover:shadow-[0_0_20px_rgba(16,185,129,0.6)]
">
  🌟 Get Started 2
</button>






{/* Gradient Glow Button */}
<button className="
  px-6 py-3 rounded-full font-semibold text-white 
  shadow-lg bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700
  hover:from-purple-600 hover:via-indigo-700 hover:to-blue-600
  transition-all duration-300 
  hover:shadow-[0_0_20px_rgba(99,102,241,0.7)]
">
  🚀 Get Started
</button>

{/* Accent Button */}
<button className="
  px-6 py-3 rounded-full font-bold text-white 
  bg-gradient-to-r from-amber-400 to-pink-500
  shadow-md hover:shadow-[0_0_20px_rgba(251,191,36,0.6)]
  transition-all duration-300
">
  ✨ Upgrade Now
</button>

<div className="divider"></div>
{/* Gradient Glow Button */}
<button className="
  px-6 py-3 rounded-full font-semibold text-white 
  shadow-lg bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700
  hover:from-purple-600 hover:via-indigo-700 hover:to-blue-600
  transition-all duration-300 
  hover:shadow-[0_0_20px_rgba(99,102,241,0.7)]
">
  🚀 Get Started
</button>

{/* Accent Button */}
<button className="
  px-6 py-3 rounded-full font-bold text-white 
  bg-gradient-to-r from-amber-400 to-pink-500
  shadow-md hover:shadow-[0_0_20px_rgba(251,191,36,0.6)]
  transition-all duration-300
">
  ✨ Upgrade Now
</button>

<div className="divider"></div>
<div className="
  p-6 rounded-2xl 
  bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900
  border border-slate-700 
  shadow-xl 
  hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]
  transition-all duration-300
">
  <h2 className="text-xl font-bold text-white">🌟 Premium Feature</h2>
  <p className="text-slate-300 mt-2">
    Unlock exclusive access to pro-level tools with a glowing UI experience.
  </p>
  <button className="mt-4 px-5 py-2 rounded-full text-white font-medium
    bg-gradient-to-r from-cyan-400 to-blue-500 
    hover:from-blue-600 hover:to-cyan-500 
    transition-all duration-300">
    Try Now
  </button>
</div>



{/* end */}
<div className="divider"></div>
</div>

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