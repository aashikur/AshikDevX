import React from 'react';

const NavSideLogo = () => {
    return (
      <div className="relative border max-w-[1400px]  mx-auto z-50 ">
        <div className="fixed left-10 top-8 z-50">
            <div className='px-3  flex items-center gap-2 p-1  justify-self-start rounded-full bg-black/10 backdrop-blur-[50px] '>
                <img
                    width={40}
                    className='rounded-full'
                    src="https://avatars.githubusercontent.com/u/46211523?v=4"
                    alt="Profile"
                />
                <div className='inter-main leading-0.5 hidden xl:block'>
                    <p className='font-bold text-lg'>Ashikur Rahaman</p>
                    <p className='text-gray-400 outfit-main text-xs'>
                        Code Meets Creativity.
                    </p>
                </div>
            </div>

        </div>
      </div>
    );
};

export default NavSideLogo; {/* ✅ Logo Section */ }




