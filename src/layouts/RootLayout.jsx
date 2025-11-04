import { Outlet } from "react-router";
import Footer from "@/components/layout/Footer";
import Navbar2 from "@/components/layout/Navbar";
import NavSideLogo from "@/components/layout/NavSideLogo";
import ToggleLightDark from "@/.reuse/ToggleLightDark";
import BackgroundGrid from "@/components/ui/BackgroundGrid";
import ScrollToTop from "@/components/ui/ScrollToTop";

const RootLayout = () => {
  return (
    <div>
    {/* <BackgroundGrid/> */}
      <NavSideLogo />   
      <Navbar2 />
      <main className="overflow-x-clip">
        <Outlet></Outlet>
      </main>
      <Footer />
      <ScrollToTop/>
    </div>
  );
};

export default RootLayout;