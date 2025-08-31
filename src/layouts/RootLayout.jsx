import { Outlet } from "react-router";
import Footer from "@/components/layout/Footer";
import Navbar2 from "@/components/layout/Navbar";
import NavSideLogo from "@/components/layout/NavSideLogo";
import ToggleLightDark from "@/.reuse/ToggleLightDark";
import BackgroundGrid from "@/components/ui/BackgroundGrid";

const RootLayout = () => {
  return (
    <div 
     
    >

    {/* <BackgroundGrid/> */}


      <NavSideLogo />


      
      
 
      <Navbar2 />

      <main className="overflow-x-clip">
        <Outlet></Outlet>
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;


