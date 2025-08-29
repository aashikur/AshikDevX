import MyBadge from '@/components/ui/MyBadge';
import React from 'react';

const Global = () => {
    return (
        <div className='z-10 top-0 relative h-full left-0 group'>
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: "#000000",
                    backgroundImage: `
        radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.2) 1px, transparent 0),
        radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.18) 1px, transparent 0),
        radial-gradient(circle at 1px 1px, rgba(236, 72, 153, 0.15) 1px, transparent 0)
      `,
                    backgroundSize: "20px 20px, 30px 30px, 25px 25px",
                    backgroundPosition: "0 0, 10px 10px, 15px 5px",
                }}
            />
            <img className='absolute -bottom-20 w-full
            
            transition-all duration-500 ease-in-out
            group-hover:translate-y-10
            ' src="/assets/images/global-1.png" alt="" />

            <div className='bottom-0  
            bg-gradient-to-t from-[#000000] to-transparent
            w-full h-[400px] absolute z-20'></div>

        <div className="absolute inset-0">
                    <div className='flex items-center justify-center w-full h-full text-white' >
                        <div className='z-10 absolute py-30 flex flex-col font-semibold top-0 justify-center gap-4 text-center'>
                    
                            <h1 className='outfit-main text-3xl text-left'><span className='font-light'>I'm </span><br /> very flexible with time <br /> zone communications</h1>
            
                            <div className='flex items-center justify-center gap-2 cursor-pointer'>
                               <MyBadge text="USA"/>
                               <MyBadge text="Bangladesh"/>
                               <MyBadge text="UK"/>
                               <MyBadge text="India"/>
                               <MyBadge text="Pakistan"/>
                            </div>
                        </div>
            
                    </div>
        </div>
        </div>
    );
};

export default Global;