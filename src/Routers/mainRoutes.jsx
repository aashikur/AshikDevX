import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/frontend/Home/Home";
import About from "@/pages/frontend/About/About";


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
        element: <div>Projects</div>,
      },
    
      {
        path: "/services",
        element: <div>Services</div>,
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