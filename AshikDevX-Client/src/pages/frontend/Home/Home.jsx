import React from 'react';
import HeroSection from './sections/HeroSection';
import AboutMeSection from './sections/HeroSection2';
import AboutGrid from './sections/AboutGrid';
import Marque from './sections/Marque';
import MyStory from '@/pages/frontend/About/sections/MyStory';
import FeaturedProjects from '../About/sections/FeaturedProjects';
import BlogPreviewSection from './sections/BlogPreviewSection';
import CTAGetInTouch from './sections/CTAGetInTouch';
import PricingSection from './sections/PricingSection';
import TestimonialsSection from './sections/TestimonialsSection';
import WhatsAppCTA from './sections/WhatsAppCTA';
import TechStack from './sections/TechStack';
import Marquee1 from './sections/Marquee1';
import Marquee2 from './sections/Marquee2';

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
      <Marquee1 />
      <div id='about'>
        <MyStory></MyStory>
      </div>
      <div>
        <FeaturedProjects />
      </div>
      {/* <AboutGrid></AboutGrid> */}
      {/* <div>
              <Marque></Marque>
            </div> */}
      {/* <div> <HeroSection></HeroSection>  </div> */}
      <div>
        <AboutGrid></AboutGrid>

        {/* <BlogPreviewSection/> */}

        <CTAGetInTouch></CTAGetInTouch>

        <PricingSection></PricingSection>

        <TechStack />
        <div className='py-5'></div>
        <Marquee2 />


        <TestimonialsSection></TestimonialsSection>

        <WhatsAppCTA></WhatsAppCTA>
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