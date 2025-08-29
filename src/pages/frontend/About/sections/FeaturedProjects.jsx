// Import custom components and icons
import SectionTitle from '@/components/ui/SectionTitle'; // Custom section title component
import { MoveRight, Plus } from 'lucide-react'; // Icons from lucide-react library
import { GiPolarStar } from "react-icons/gi"; // Polar star icon from react-icons
import { FaReact } from "react-icons/fa"; // React icon from react-icons

import React, { useEffect, useState } from 'react'; // React core imports
import MyBadge from '@/components/ui/MyBadge'; // Custom badge component
import projectsData from '@/data/projectsData'; // Data containing all projects info

// FeaturedProjects component: displays a list of projects in a styled layout
const FeaturedProjects = () => {
  // State to track scroll position
  const [scrollTop, setScrollTop] = useState(0);

  // Commented-out vanilla JS sticky div scroll logic
  // const stickyDivs = document.querySelectorAll(".stickyDiv");
  // window.addEventListener("scroll", () => {
  //   stickyDivs.forEach(div => {
  //     const distanceFromTop = div.getBoundingClientRect().top;
  //     if (distanceFromTop < 100) {
  //       // When div is within 100px from top, reduce opacity
  //       div.style.opacity = 0.5;
  //     } else {
  //       div.style.opacity = 1;
  //     }
  //   });
  // });

  // useEffect: track scroll position and update state
  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY); // Update scrollTop state on scroll
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup: remove scroll listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Debugging logs
//   console.log("Current scrollTop:", scrollTop);
//   if (projectsData) {
//     console.log('Projects data loaded:', projectsData);
//   } else {
//     console.log('No projects data found');
//   }

  return (
    // Main container
    <div className='max-w-[1400px] mx-auto py-20 md:p-8 relative '>
      {/* Section title component */}
      <SectionTitle></SectionTitle>

      {/* Map over projects data and display each project */}
      {
        projectsData?.map((project, index) => <div key={index}>
          <div
            style={{ top: `${100 + index * 50}px` }} // Offset each div by 50px vertically
            className={`flex flex-col md:flex-row  my-10 stickyDiv group sticky outfit-main cursor-pointer`} // Styling classes
          >
            {/* Left side: project image and gradient background */}
            <div className="w-full md:w-2/3 md:pr-10">
              <div className='bg-gray-100/10 backdrop-blur-2xl border border-white/10 p-1.5 rounded-2xl'>
                <div
                  className='rounded-2xl md:p-10'
                  style={{
                    // Radial gradient overlay on black background
                    background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139, 92, 246, 0.25), transparent 70%), #000000",
                  }}
                >
                  {/* Project description header */}
                  <div className='md:flex items-center justify-between mb-8 hidden'>
                    <h1 className='text-xl font-semibold opacity-60 bg-gradient-to-r from-gray-300 via-purple-300 to-pink-300 bg-clip-text text-transparent'>
                      {project.description.slice(0, 120)} {/* Show first 120 chars */}
                    </h1>

                    {/* MoveRight button on hover */}
                    <div className='w-2/12'>
                      <button className='ml-4 w-4 group-hover:scale-125 transition-all duration-300 ease-in-out group-hover:translate-x-5'>
                        <MoveRight className='w-5 h-5 text-pink-500' />
                      </button>
                    </div>
                  </div>

                  {/* Project image */}
                  <img
                    className='rounded-2xl shadow-inner group-hover:scale-105 group-hover:rotate-1 transition-all duration-300 ease-in-out'
                    src={project.image} // Image URL from project data
                  />
                </div>
              </div>
            </div>

            {/* Right side: project title, description, features, badges */}
            <div className={`md:w-1/3 flex flex-col justify-center  rounded-2xl z-${index} bg-black backdrop-blur-2xl`}>
              {/* Project title with indicator dot */}
              <div className="flex items-center gap-2 mt-5">
                <span className='w-5 mt-1 h-1 bg-pink-500 rounded-full hidden'></span>
                <h1 className='text-2xl font-semibold'>{project.title}</h1>
              </div>

              {/* Project description and features */}
              <div className='p-2  md:p-6'>
                <p className='text-[#a1a1a1]  text-sm md:text-base  '>{project.description}</p>

                {/* Features list */}
                <ul className='text-sm hidden md:block'>
                  {project.features.map((feature, index) =>
                    <li key={index} className='flex gap-3 items-center mb-2'>
                      <GiPolarStar className='w-5 h-5 text-pink-500' /> {/* Star icon */}
                      <span>{feature.text}</span>
                    </li>
                  )}
                </ul>

                <br />

                {/* Badges / technologies used */}
                <div className='flex flex-wrap gap-2 justify-start'>
                  {/* Map badges from project data */}
                  {project.badges.map((badge, index) =>
                    <MyBadge iconKey={badge.iconKey} key={index}  text={badge.text} />
                    
                  )}
                  {/* Example: static badge */}
                  {/* <MyBadge iconKey="redux" text="Redux" /> */}
                </div>
              </div>
            </div>

          </div>
        </div>)
      }
    </div>
  );
};

// Export the component
export default FeaturedProjects;
