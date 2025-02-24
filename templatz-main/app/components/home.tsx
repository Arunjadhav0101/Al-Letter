import { Link } from "@remix-run/react";

import { HoverBorderGradient } from "./ui/hover-border-gradient";
import SplineDesign from "./spline";

function Home() {
  return (
      <div className="flex flex-row p-3 bg-fixed mt-36 h-full max-h-[1024px] min-h-[600px]">
        <div className=" max-w-3xl w-full text-center p-10 rounded-2xl ">
          <h1 className="text-4xl font-bold  mb-4">
            AI Generate Letter – Write Smarter, Faster
          </h1>
          <p className="text-lg mb-6">
            Need a professional, personal, or business letter in seconds? Our
            AI-powered tool crafts well-structured, polished letters tailored to
            your needs.
          </p>
          <Link to={"/generate"}>
            <HoverBorderGradient className="px-8">Start</HoverBorderGradient>
          </Link>
        </div>
        <SplineDesign/>
      </div>
  );
}
export default Home;
