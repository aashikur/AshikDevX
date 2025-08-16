import { ArrowRight } from 'lucide-react';
import React from 'react';

const CTAGetInTouch = () => {
    return (
        <div>


            <div className="flex flex-col items-center justify-center py-20 gap-8">
                <div className='mb-1'>
                    <img className='w-12 h-12 mx-auto rounded-full' src="/assets/images/hero3.jpg" alt="" />
                </div>
                <div className='text-right'>
                    <h1 className='uppercase text-2xl '>TURN IDEA into <span className='font-bold'>STARTUP</span> </h1>
                    <h1 className='uppercase text-xl '>Let's BUILD it <span className='font-bold'> TOGETHER </span></h1>
                </div>

                <div>
                    <button
                        className='flex text-sm group items-center gap-2 border border-gray-500 rounded-full bg-base-100 p-1 pl-10'
                    >GET IN TOUCH
                        <span className='bg-white  p-3 ml-2 rounded-full'>
                            <ArrowRight className='
                             transition-all duration-300 group-hover:translate-x-1 group-hover:-rotate-10
                            text-gray-900' size={20} />
                        </span>
                    </button>
                </div>

                <div className='text-center max-w-xl'>

                    <h2 className='text-lg font-semibold mb-5'>
                        I'm available for full-time roles & freelance Projects.
                    </h2>
                    <p className='text-sm text-gray-500'>
                       “I thrive on crafting dynamic web applications and delivering seamless user experiences.”
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CTAGetInTouch;