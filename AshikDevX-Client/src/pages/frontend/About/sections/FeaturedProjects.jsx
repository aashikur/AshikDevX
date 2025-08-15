import SectionTitle from '@/components/ui/SectionTitle';
import { MoveRight, Plus } from 'lucide-react';
import { GiPolarStar } from "react-icons/gi";
import { FaReact } from "react-icons/fa";


import React, { useEffect, useState } from 'react';
import MyBadge from '@/components/ui/MyBadge';
import projectsData from '@/data/projectsData';


const FeaturedProjects = () => {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log("Current scrollTop:", scrollTop);

    if (projectsData) { console.log('true', projectsData) } else { console.log('false'); }


    return (
        <div className='max-w-[1400px] mx-auto p-8 relative'>
            <SectionTitle></SectionTitle>
            {
                projectsData?.map((project, index) => <>
                    <div key={index} 
                    style={{ top: `${100 + index * 50}px` }}
                    className={`flex group sticky bg-black top-${index+1}0 outfit-main cursor-pointer`}>
                        <div className="w-2/3 pr-10">
                        <div className='bg-gray-100/10 border border-white/10 p-1.5 rounded-2xl'>
                                            <div className='rounded-2xl p-10 '
                                style={{
                                    background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139, 92, 246, 0.25), transparent 70%), #000000",
                                }}
                            > 
                        <div className='flex items-center justify-between mb-8'>
                                <h1 className='text-xl font-semibold opacity-60 bg-gradient-to-r from-gray-300 via-purple-300 to-pink-300 bg-clip-text text-transparent'>{project.description.slice(0, 120)}</h1> 

                                <div className='w-2/12'>
                                <button className='ml-4 w-4 group-hover:scale-125 transition-all duration-300 ease-in-out group-hover:translate-x-5'><MoveRight className='w-5 h-5 text-pink-500' /></button>
                                </div>
                        </div>
                                <img className='rounded-2xl shadow-inner group-hover:scale-105 group-hover:rotate-1 transition-all duration-300 ease-in-out' src={project.image} />
                            </div>
                        </div>
                        </div>
                        <div className="w-1/3">
                            <div className="flex items-center gap-2">
                                <span className='w-5 mt-1 h-1 bg-pink-500 rounded-full'></span>
                                
                                <h1 className='text-2xl font-semibold'>{project.title}</h1>
                            </div>


                            <div className='p-6'>
                                <p className='text-[#a1a1a1] text-base '>{project.description}</p>
                                <br />
                                <ul className=' text-sm '>
                                    {
                                        project.features.map((feature, index) =>
                                            <li key={index} className='flex gap-3 items-center mb-2'>
                                                <GiPolarStar className='w-5 h-5 text-pink-500' />
                                                <span>{feature.text}</span>
                                            </li>)
                                    }


                                </ul>

                                <br />
                                <div className='flex flex-wrap gap-2 justify-start'>

                                    {/* <MyBadge icon={<FaReact  className='w-4 h-4 text-sky-500' />} text='My works'/> */}
                                    {
                                        project.badges.map((badge, index) =>
                                            //  <MyBadge key={index} iconKey={badge.icon} text={badge.text} />
                                            <MyBadge key={index} iconKey={badge.iconKey} text={badge.text} />

                                        )
                                    }

                                    {/* <MyBadge iconKey="redux" text="Redux" /> */}

                                </div>
                            </div>
                        </div>

                    </div>
                </>)
            }
        </div>
    );
};

export default FeaturedProjects;