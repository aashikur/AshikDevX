import SectionTitle from '@/components/ui/SectionTitle';
import { Plus } from 'lucide-react';
import { GiPolarStar } from "react-icons/gi";
import { FaReact } from "react-icons/fa";


import React from 'react';
import MyBadge from '@/components/ui/MyBadge';
const FeaturedProjects = () => {
    return (
        <div className='max-w-[1400px] mx-auto p-8'>
            <SectionTitle></SectionTitle>
            <div className='flex inter-main'>
                <div className="w-2/3 ">
                    <img className='shadow-inner shadow-pink-500' src={`src/assets/1.jpg`} />
                </div>
                <div className="w-1/3">
                    <div className="flex items-center gap-2">
                        <span className='w-5 mt-1 h-1 bg-pink-500 rounded-full'></span>
                        <h1 className='text-2xl font-semibold'>AuctionG</h1>
                    </div>

                    <div className='p-6'>
                        <p className='text-[#a1a1a1] text-base '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe magnam possimus nam vitae exercitationem, corporis facere cum sapiente libero repellendus eos officia illo voluptatibus dicta laudantium provident ex esse a ut fugit sunt cumque ratione. Odit earum soluta neque amet.</p>
                        <br />
                        <ul className=' text-sm  leading-relaxed'>
                            <li className='flex gap-3 items-center'>
                                <GiPolarStar className='w-5 h-5 text-pink-500' />
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, nesciunt?</span>
                            </li>

                            <li className='flex gap-3 items-center'>
                                <GiPolarStar className='w-5 h-5 text-pink-500' />
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, nesciunt?</span>
                            </li>
                            <li className='flex gap-3 items-center'>
                                <GiPolarStar className='w-5 h-5 text-pink-500' />
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, nesciunt?</span>
                            </li>
                        </ul>

                        <br />
                        <div className='flex flex-wrap gap-2 justify-start'>

                            {/* <MyBadge icon={<FaReact  className='w-4 h-4 text-sky-500' />} text='My works'/> */}
                            <MyBadge iconKey="react" text="ReactJS" />
                            <MyBadge iconKey="redux" text="Redux" />
                            <MyBadge iconKey="javascript" text="JavaScript" />
                            <MyBadge iconKey="tailwind" text="TailwindCSS" />
                            <MyBadge iconKey="bootstrap" text="Bootstrap" />
                            <MyBadge iconKey="node" text="NodeJS" />
                            <MyBadge iconKey="express" text="ExpressJS" />
                            <MyBadge iconKey="mongodb" text="MongoDB" />
                            <MyBadge iconKey="vscode" text="VS Code" />
                            <MyBadge iconKey="git" text="Git" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FeaturedProjects;