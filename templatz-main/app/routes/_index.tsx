import type { MetaFunction } from "@remix-run/node";


import { GoogleGeminiEffectDemo } from "~/components/GeminiEffect";
import Home from "~/components/home";



export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="">
      <Home />
      
      
      <GoogleGeminiEffectDemo/>
      <div className="h-screen bg-transparent"></div>
    </div>
  );
}
