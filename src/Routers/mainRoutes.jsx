import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/frontend/Home/Home";
import About from "@/pages/frontend/About/About";
import Error from "@/pages/Error";
import ContactPage from "@/pages/contact/ContactPage";
import ServicesSection from "@/pages/frontend/Home/sections/ServicesSection";
import PricingSection from "@/pages/frontend/Home/sections/PricingSection2";
import CTAGetInTouch from "@/pages/frontend/Home/sections/CTAGetInTouch";
import FeaturedProjects from "@/pages/frontend/Home/sections/FeaturedProjects";


const mainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/projects",
        element: <div className='min-h-svh flex items-center flex-col justify-center'>
          <div className='min-h-svh flex items-center flex-col justify-center'>
            <FeaturedProjects></FeaturedProjects>
          </div>
        </div>,
      },

      {
        path: "/services",
        element: <div className='min-h-svh flex items-center flex-col justify-center'>
          <div className='min-h-svh flex items-center flex-col justify-center'>
            <ServicesSection></ServicesSection>
            <PricingSection></PricingSection>
          </div>
        </div>,
      },
      {
        path: "/skills",
        element: <div>Skills</div>,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },

    ],
  },
]);

export default mainRoutes;