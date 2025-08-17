import { Outlet } from "react-router";
import Navbar from "../components/common/Navbar";
import Footer from "@/components/common/Footer";

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
    className="absolute  inset-0 z-0"

  />
      <Navbar/>
      <main className="overflow-x-clip">
        <Outlet></Outlet>
      </main>
      <Footer/>
    </div>
  );
};

export default RootLayout;


