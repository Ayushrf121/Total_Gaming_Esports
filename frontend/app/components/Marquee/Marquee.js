"use client";

import { Rajdhani } from "next/font/google";
import { firstPlaceWins } from "./marqueeData";

// Using the same esports font from the hero section
const rajdhani = Rajdhani({ 
  subsets: ["latin"], 
  weight: ["600", "700"] 
});

export default function Marquee() {
  // We duplicate the array to ensure a seamless infinite scroll
  const marqueeItems = [...firstPlaceWins, ...firstPlaceWins];

  return (
    <div className={`w-full bg-[#c9342c] py-3 overflow-hidden flex relative ${rajdhani.className} border-y-4 border-[#e3dae1]`}>
      
      {/* Marquee Track */}
      <div className="flex whitespace-nowrap animate-marquee w-max items-center">
        {marqueeItems.map((tournament, index) => (
          <div key={index} className="flex items-center mx-4">
            
            {/* Tournament Text */}
            <span className="text-xl md:text-2xl font-bold uppercase text-[#e3dae1] tracking-widest">
              {tournament}
            </span>
            
            {/* Dot Separator */}
            <span className="mx-8 text-[#180B15] opacity-50 text-xl font-bold">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}