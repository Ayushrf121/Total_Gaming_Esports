"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Rajdhani } from "next/font/google";
import { 
  leftDoorVariant, 
  rightDoorVariant, 
  heroContentStagger, 
  bookFoldTextVariant, 
  fadeUpVariant 
} from "./animations";

// Initialize the esports font
const rajdhani = Rajdhani({ 
  subsets: ["latin"], 
  weight: ["500", "600", "700"] 
});

export default function Hero() {
  return (
    <section className={`relative w-full h-[calc(100vh-6rem)] bg-[#000000] overflow-hidden ${rajdhani.className}`}>
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/Home_Images/Home_Hero1.png" 
          alt="Total Gaming Esports Champions"
          fill
          priority
          className="object-cover object-center opacity-60" // Dimmed slightly for text readability
        />
        {/* Gradient overlay to blend with the dark theme */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/40 to-transparent"></div>
      </div>

      {/* Book Opening Animation Overlays (The "Covers") */}
      <motion.div 
        variants={leftDoorVariant}
        initial="initial"
        animate="animate"
        className="absolute inset-y-0 left-0 w-1/2 bg-[#000000] border-r-2 border-[#FA5147] z-20 origin-left shadow-[20px_0_50px_rgba(0,0,0,0.5)]"
      />
      <motion.div 
        variants={rightDoorVariant}
        initial="initial"
        animate="animate"
        className="absolute inset-y-0 right-0 w-1/2 bg-[#000000] border-l-2 border-[#FA5147] z-20 origin-right shadow-[-20px_0_50px_rgba(0,0,0,0.5)]"
      />

      {/* Main Content */}
      <div className="relative z-30 flex flex-col items-center justify-center w-full h-full px-4 text-center">
        <motion.div 
          variants={heroContentStagger}
          initial="initial"
          animate="animate"
          className="max-w-5xl mx-auto flex flex-col items-center"
        >
          {/* Subtitle */}
          <motion.div variants={fadeUpVariant} className="mb-4">
            <span className="bg-[#FA5147] text-[#000000] px-6 py-3 text-lg font-bold tracking-[0.2em] uppercase clip-path-slant">
              The Undisputed Kings
            </span>
          </motion.div>

          {/* Main Title with 3D Fold */}
          <motion.h1 
            variants={bookFoldTextVariant}
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-white uppercase tracking-tighter leading-none mb-6 drop-shadow-[0_0_20px_rgba(250,81,71,0.3)]"
          >
            TOTAL GAMING <br />
            <span className="text-[#FA5147]">ESPORTS</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p 
            variants={fadeUpVariant}
            className="text-xl md:text-3xl text-gray-300 font-medium tracking-wide max-w-2xl mx-auto mb-10"
          >
            Best Esports Organization In India. <br className="hidden md:block" /> 
            Dominating the battlegrounds, one tournament at a time.
          </motion.p>

          {/* Call to Action Button */}
          <motion.div variants={fadeUpVariant}>
            <button className="relative group rounded-2xl px-10 py-4 font-bold text-lg tracking-widest text-white uppercase bg-transparent overflow-hidden">
              <span className="absolute inset-0 w-full h-full bg-[#FA5147] transform rounded-2xl -ml-4 group-hover:bg-white transition-colors duration-300 z-0"></span>
              <span className="relative z-10 group-hover:text-[#FA5147] transition-colors duration-300">
                Explore the Legacy
              </span>
            </button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}