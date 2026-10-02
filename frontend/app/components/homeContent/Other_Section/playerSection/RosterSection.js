"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Rajdhani } from "next/font/google";
import { rosterData, years } from "./../../../utils/Roster/rosterData";
import PlayerCard from "./PlayerCard";
import PlayerModal from "./PlayerModal";

const rajdhani = Rajdhani({ 
  subsets: ["latin"], 
  weight: ["600", "700"] 
});

export default function RosterSection() {
  const [activeYear, setActiveYear] = useState("2026");
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  return (
    <section className="relative w-full min-h-screen bg-[#180B15] py-24 overflow-hidden">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Heading */}
        <div className="text-center mb-16">
          <h2 className={`${rajdhani.className} text-4xl md:text-6xl font-bold text-white uppercase tracking-[0.18em] drop-shadow-[0_0_25px_rgba(250,81,71,0.5)]`}>
            Our Rosters
          </h2>
          <div className="mt-4 flex justify-center gap-2">
            <span className="w-16 h-1 bg-[#FA5147] shadow-[0_0_12px_#FA5147]"></span>
            <span className="w-4 h-1 bg-[#FA5147]/40"></span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-16">
          
          {/* LEFT SIDE: Year Timeline Bar */}
          <div className="w-full md:w-48 lg:w-64 flex flex-row md:flex-col overflow-x-auto md:overflow-visible gap-2 pb-4 md:pb-0 scrollbar-hide shrink-0">
            {years.map((year) => {
              const isActive = activeYear === year;
              
              return (
                <div 
                  key={year}
                  onClick={() => setActiveYear(year)}
                  className="relative group px-8 py-5 cursor-pointer text-center md:text-left min-w-[120px] md:min-w-0"
                >
                  <div className={`absolute inset-0 bg-[#FA5147] transform -skew-x-12 origin-left transition-transform duration-400 ease-out z-0 ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}></div>
                  
                  <span className={`relative z-10 block font-bold text-2xl tracking-widest transition-colors duration-300 ${rajdhani.className} ${
                    isActive ? "text-[#180B15]" : "text-white group-hover:text-[#180B15]"
                  }`}>
                    {year}
                  </span>
                </div>
              );
            })}
          </div>

          {/* RIGHT SIDE: Players Grid */}
          <div className="w-full">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeYear}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
              >
                {rosterData[activeYear].map((player, index) => (
                  <motion.div
                    key={`${activeYear}-${player.name}-${index}`}
                    initial={{ opacity: 0, scale: 0.8, x: 50 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.8, x: -50 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 200, 
                      damping: 20, 
                      delay: index * 0.1 
                    }}
                    className="w-full flex justify-center cursor-pointer"
                    onClick={() => setSelectedPlayer(player)}
                  >
                    <PlayerCard player={player} />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedPlayer && (
          <PlayerModal 
            player={selectedPlayer} 
            onClose={() => setSelectedPlayer(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}