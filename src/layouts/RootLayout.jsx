import { Outlet } from "react-router";
import Footer from "@/components/layout/Footer";
import Navbar2 from "@/components/layout/Navbar";
import NavSideLogo from "@/components/layout/NavSideLogo";
import ToggleLightDark from "@/.reuse/ToggleLightDark";

const RootLayout = () => {
  return (
    <div
      style={{
        background: "",
        backgroundImage: `
        linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px),
        radial-gradient(circle at 50% 50%, rgba(139,92,246,0.15) 0%, transparent 70%)
      `,
        backgroundSize: "100px 100px, 100px 100px, 100% 100%",
      }}
    >

     {/* <Navbar/> */}


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


