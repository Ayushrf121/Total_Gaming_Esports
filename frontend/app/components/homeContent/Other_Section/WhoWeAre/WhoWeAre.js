"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Rajdhani } from "next/font/google";
import { slideInLeft, slideInRight } from "./Animation";

// Using the esports font for the heading
const rajdhani = Rajdhani({ 
  subsets: ["latin"], 
  weight: ["600", "700"] 
});

export default function WhoWeAre() {
  return (
    <section className="relative w-full min-h-screen flex items-center bg-[#000000] overflow-hidden py-20">
      
      {/* --- BACKGROUNDS --- */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/Home_Images/Who_We_Are/who-are-you-bg.gif" 
          alt="Hexagonal Background Pattern"
          fill
          className="object-cover" 
          unoptimized 
          priority 
        />
      </div>

      {/* Lighter Gradient overlay: Dark enough behind the text for readability, but fades out so the GIF shines */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#000000]/90 via-[#000000]/50 to-transparent"></div>

      {/* --- CONTENT CONTAINER --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-28 items-center">
          
          {/* Left Side: Text Content */}
          <motion.div 
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col"
          >
            <div className="mb-6 inline-block">
              <h2 className={`${rajdhani.className} text-4xl md:text-6xl font-bold text-white uppercase tracking-[0.18em] relative pb-5 drop-shadow-[0_0_25px_rgba(250,81,71,0.5)]`}>
                Who Are We?
                <span className="absolute bottom-0 left-0 w-28 h-1.5 bg-[#FA5147] shadow-[0_0_12px_#FA5147]"></span>
                <span className="absolute bottom-0 left-28 w-14 h-1.5 bg-[#FA5147]/40"></span>
              </h2>
            </div>

            {/* Increased text size here to text-lg md:text-xl */}
            <p className="text-gray-200 text-lg md:text-xl leading-relaxed text-justify drop-shadow-md">
              Total Gaming Esports is India’s premier esports organization, born from an unstoppable passion for competitive gaming. What started as a collective of dedicated gamers has evolved into a dominant force in the Free Fire Max Esports scene. 
              <br /><br />
              Our core motto is to unlock the limitless potential of regional talent and showcase it on the global stage. From high-octane tournament finishes to creating unforgettable moments, our fans remain at the heart of everything we do. We game to win, and we play to inspire.
            </p>
          </motion.div>

          {/* Right Side: Team Image / Trophy */}
          <motion.div 
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative w-full aspect-[4/3] md:aspect-square lg:aspect-[4/3]"
          >
            <Image 
              src="/Home_Images/Trophies/FF_India_CUP_2025.png" 
              alt="Total Gaming Esports Team"
              fill
              className="object-contain relative z-10 drop-shadow-2xl"
              priority
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}