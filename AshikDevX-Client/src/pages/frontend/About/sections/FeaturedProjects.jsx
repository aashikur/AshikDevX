import SectionTitle from '@/components/ui/SectionTitle';
import { Plus } from 'lucide-react';
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
                    className={` flex sticky bg-black top-${index+1}0 outfit-main `}>
                        <div className="w-2/3 pr-10">
                        <div className='bg-gray-100/10 border border-white/10 p-1.5 rounded-2xl'>
                                            <div className='rounded-2xl p-10 '
                                style={{
                                    background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139, 92, 246, 0.25), transparent 70%), #000000",
                                }}
                            > 
                            <h1>{project.description.slice(0, 180)}</h1>
                                <img className='rounded-2xl shadow-inner shadow-pink-500' src={project.image} />
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