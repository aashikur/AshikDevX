import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/frontend/Home/Home";
import About from "@/pages/frontend/About/About";
import Projects from "@/pages/frontend/Projects/Projects";
import Services from "@/pages/frontend/Services/Services";


const mainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        errorElement: <Error></Error>,
      },
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
        element: <Projects/>,
      },
      
      {
        path: "/projects",
        element: <Projects/>,
      },
      {
        path: "/services",
        element: <Services/>,
      },
      {
        path: "/skills",
        element: <div>Skills</div>,
      },
      {
        path: "/contact",
        element: <div>Contact</div>,
      },
      
    ],
  },
]);

export default mainRoutes;