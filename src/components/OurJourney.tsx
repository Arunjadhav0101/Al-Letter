import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Link from "next/link";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";

export function OurJourney() {
  const data = [
    {
      title: "July 2024",
      content: (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <ul className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4 space-y-1 pl-0 col-span-1">
              <li className="relative pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
                Introduced template-based letter formatting.
              </li>
              <li className="relative pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
                Users manually input details to generate formatted letters.
              </li>
            </ul>
            <div className="relative w-full h-48 md:h-64 rounded-2xl overflow-hidden shadow-md mb-4 col-span-1 border border-blue-500">
              <Image
                src="/v1.png"
                width={400}
                height={300}
                alt="V1 Screenshot"
                className="object-top object-cover w-full h-full"
              />
            </div>
          </div>
          <Link href="https://letter-template.netlify.app/" target="_blank">
          <Button variant={"outline"}>
              Live Preview <ExternalLink/>
            </Button>
          </Link>
        </>
      ),
    },
    {
      title: "Nov 2024",
      content: (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <ul className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4 space-y-1 pl-0 col-span-1">
              <li className="relative pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
                Integrated AI-powered letter generation.
              </li>
              <li className="relative pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
                Utilized Gemini 1.5 Flash Model for generating formal letters.
              </li>
              <li className="relative pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
                Backend deployed on Render for API processing.
              </li>
            </ul>
            <div className="relative w-full h-48 md:h-64 rounded-md overflow-hidden shadow-md mb-4 col-span-1">
              <Image
                src="/v2.png"
                width={400}
                height={300}
                alt="V2 Screenshot"
                className="object-top object-cover w-full h-full"
              />
            </div>
          </div>
          <Link href="https://ai-letter-template.vercel.app/" target="_blank">
          <Button variant={"outline"}>
              Live Preview <ExternalLink/>
            </Button>
          </Link>
        </>
      ),
    },
    {
      title: "Current - Feb 2025",
      content: (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <ul className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4 space-y-1 pl-0 col-span-1">
              <li className="relative pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
                Upgraded to React with Next.js for better performance and
                scalability.
              </li>
              <li className="relative pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
                Introduced a dedicated backend for improved functionality.
              </li>
              <li className="relative pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
                Enhanced UI and UX for a seamless user experience.
              </li>
            </ul>
            <div className="relative w-full h-48 md:h-64 rounded-md overflow-hidden shadow-md mb-4 col-span-1">
              <Image
                width={300}
                height={300}
                src="/v3.png"
                alt="V3 Screenshot"
                className="object-top object-cover w-full h-full"
              />
            </div>
          </div>
          <Link href="https://templatz.vercel.app" target="_blank">
            <Button variant={"outline"}>
              Live Preview <ExternalLink/>
            </Button>
          </Link>
        </>
      ),
    },
    {
      title: "Upcoming",
      content: (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <ul className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4 space-y-1 pl-0 col-span-1">
              <li className="relative pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
                Adding authentication for secure access to services.
              </li>
              <li className="relative pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
                Developing an AI-powered ATS-friendly resume builder 
              </li>
            </ul>
            <div className="relative w-full h-48 md:h-64 rounded-md overflow-hidden shadow-md mb-4 col-span-1">
              {/* <Image
                src="/placeholder-image.jpg"
                alt="Upcoming Features"
                layout="fill"
                objectFit="cover"
                className="object-top"
              /> */}
            </div>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="">
      <Timeline data={data} />
    </div>
  );
}
