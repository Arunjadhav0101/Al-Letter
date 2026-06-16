import GeminiEffect from "@/components/GeminiEffect";
import Herosection from "@/components/HeroSection";
import { OurJourney } from "@/components/OurJourney";


export default function Home() {
  return (
    <div className="h-screen w-screen dark:bg-neutral-950">
      {/* <Navbar/> */}
       <Herosection/>
       <OurJourney/>
      <GeminiEffect/>
    </div>
  );
}
