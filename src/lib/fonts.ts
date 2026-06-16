import { Brawler, Geist } from "next/font/google";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const brawler = Brawler({
    subsets:["latin"],
    weight:["400", '700']
})

export {brawler, geistSans, montserrat}