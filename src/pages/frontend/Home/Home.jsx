import React from 'react';
import HeroSection from './sections/HeroSection';
import AboutGrid from './sections/AboutGrid';
import AboutMeSection from '@/pages/frontend/Home/sections/AboutMeSection';
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
import BackgroundGrid from '@/components/ui/BackgroundGrid';
import BackgroundGrid2 from '@/components/ui/BackgroundGrid2';
import ScrollToTop from '@/components/ui/ScrollToTop';

const Home = () => {

  return (
    <div
    >
      <HeroSection />
      <AboutMeSection></AboutMeSection>
      <ServicesSection></ServicesSection>
      <FeaturedProjects />
      <ProcessSection />
      <PricingSection2></PricingSection2>
      <JoinWhatsappCTA></JoinWhatsappCTA>
      <TechStack />
      <Reviews></Reviews>
      <CTAGetInTouch></CTAGetInTouch> 
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