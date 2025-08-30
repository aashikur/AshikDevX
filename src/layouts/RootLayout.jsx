import { Outlet } from "react-router";
import Navbar from "../components/common/Navbar";
import Footer from "@/components/common/Footer";
import Navbar2 from "@/components/common/Navbar2";
import LeftLogo from "@/components/common/LeftLogo";
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
        backgroundSize: "32px 32px, 32px 32px, 100% 100%",
      }}
    >
      <div
        className="absolute  z-0"

      />

      <div className="relative border max-w-[1400px] mx-auto z-50 ">
        <div className="fixed left-10 top-8 z-50">
          <LeftLogo />
        </div>
      </div>

      <div className="relative border max-w-[1400px] mx-auto z-50">
        <div className="fixed  right-10 top-8 z-50">
          <ToggleLightDark />
        </div>
      </div>



      {/* <Navbar/> */}
      <Navbar2 />
      <main className="overflow-x-clip">
        <Outlet></Outlet>
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;


