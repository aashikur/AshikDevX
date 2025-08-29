import { useRouteError } from "react-router";
import Header from "../components/Header";
import PortfolioNavbar from "@/components/common/Navbar";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <PortfolioNavbar /> 
      <div className="flex min-h-screen items-center justify-center">Error</div>
    </div>
  );
};

export default Error;
