import React from 'react';
import HeroSection from './sections/HeroSection';
import AboutMeSection from './sections/AboutMeSection';
import AboutGrid from './sections/AboutGrid';
import Marque from './sections/Marque';
import MyStory from '../About/sections/MyStory';
import FeaturedProjects from '../About/sections/FeaturedProjects';

const Home = () => {
    return (
        <div className='bg-[#000000]'>
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "#020617",
      backgroundImage: `
        linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px),
        radial-gradient(circle at 50% 50%, rgba(139,92,246,0.15) 0%, transparent 70%)
      `,
      backgroundSize: "32px 32px, 32px 32px, 100% 100%",
    }}
  />
            <AboutMeSection />
            <div id='about'>
                <MyStory></MyStory>
            </div>
            <div>
                <FeaturedProjects/>
            </div>
            {/* <AboutGrid></AboutGrid> */}
            {/* <Marque></Marque> */}
            {/* <HeroSection></HeroSection> */}
        </div>
    );
};

export default Home;


<div className="min-h-screen w-full bg-[#020617] relative">
  {/* Dark Sphere Grid Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "#020617",
      backgroundImage: `
        linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px),
        radial-gradient(circle at 50% 50%, rgba(139,92,246,0.15) 0%, transparent 70%)
      `,
      backgroundSize: "32px 32px, 32px 32px, 100% 100%",
    }}
  />
     {/* Your Content/Components */}
</div>