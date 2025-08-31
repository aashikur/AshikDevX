import React from 'react';
import HeroSection from './sections/HeroSection';
import AboutGrid from './sections/AboutGrid';
import MyStory from '@/pages/frontend/Home/sections/AboutMeSection';
import FeaturedProjects from './sections/FeaturedProjects';
import CTAGetInTouch from './sections/CTAGetInTouch';
import Reviews from './sections/Reviews';
import TechStack from './sections/TechStack';
import Marquee2 from './sections/Marquee2';
import PricingSection2 from './sections/PricingSection2';
import JoinWhatsappCTA from './sections/JoinWhatsappCTA';

import Section from '@/components/ui/Section';
import ServicesSection from './sections/ServicesSection';
import ProcessSection from './sections/ProcessSection';

const Home = () => {
  return (
    <div className='bg-[#000000]'>

      <HeroSection />
 

      {/* <Marquee1 /> */}
        <MyStory></MyStory>
        {/* <AboutGrid></AboutGrid> */}


        <ServicesSection></ServicesSection>
      <div>
        <FeaturedProjects />
      </div>

      <ProcessSection/>
      {/* <AboutGrid></AboutGrid> */}
      {/* <div>
              <Marque></Marque>
            </div> */}
      {/* <div> <HeroSection></HeroSection>  </div> */}
      <div>

        {/* <BlogPreviewSection/> */}


        {/* <PricingSection></PricingSection> */}
        <PricingSection2></PricingSection2>

        <JoinWhatsappCTA></JoinWhatsappCTA>
        <TechStack />
        <div className='py-5'></div>
        <Marquee2 />


        <Reviews></Reviews>


        <CTAGetInTouch></CTAGetInTouch>

 


















      </div>
    </div>
  );
};

export default Home;


// {/* <div className="min-h-screen w-full bg-[#020617] relative">
//   {/* Dark Sphere Grid Background */}
//   <div
//     className="absolute inset-0 z-0"
//     style={{
//       background: "#020617",
//       backgroundImage: `
//         linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px),
//         linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px),
//         radial-gradient(circle at 50% 50%, rgba(139,92,246,0.15) 0%, transparent 70%)
//       `,
//       backgroundSize: "32px 32px, 32px 32px, 100% 100%",
//     }}
//   />
//      {/* Your Content/Components */}
// </div> */}