"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, officialLinks } from "./navData";
import { mobileOverlayVariant, mobileDrawerVariant, mobileAccordionVariant } from "./animations";
import { checkIsActive } from "./utils";

export default function MobileMenu({ pathname, isOpen, setIsOpen }) {
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  return (
    <>
      <div className="flex md:hidden items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white hover:text-[#FA5147] focus:outline-none z-50"
        >
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Background Overlay */}
            <motion.div 
              {...mobileOverlayVariant}
              className="fixed inset-0 bg-black/60 z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Slide-in Drawer */}
            <motion.div 
              {...mobileDrawerVariant}
              className="fixed top-0 left-0 w-[60%] h-screen bg-[#000000] border-r border-[#FA5147]/20 z-50 md:hidden overflow-y-auto"
            >
              <div className="flex items-center justify-center h-24 border-b border-[#FA5147]/20">
                <Image src="/Logo/official_logo.png" alt="Gaming Logo" width={60} height={38} className="object-contain" />
              </div>

              <div className="flex flex-col py-6 space-y-4 px-4">
                {navLinks.map((link, index) => {
                  const isActive = checkIsActive(pathname, link.path, link.name);

                  return (
                    <div key={index} className="relative group px-6 py-3 cursor-pointer w-full">
                      <div className={`absolute inset-0 bg-[#FA5147] transform -skew-x-12 origin-bottom-left transition-transform duration-300 ease-out z-0 ${
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}></div>
                      
                      <Link 
                        href={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`relative z-10 block font-bold text-lg tracking-widest transition-colors duration-300 ${
                          isActive ? "text-[#180B15]" : "text-white group-hover:text-[#180B15]"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </div>
                  );
                })}

                {/* Mobile Accordion */}
                <div className="relative w-full px-6 py-3 cursor-pointer">
                  <div 
                    className="relative z-10 flex items-center justify-between font-bold text-lg tracking-widest text-white hover:text-[#FA5147] transition-colors duration-300"
                    onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                  >
                    OFFICIALS
                    <motion.svg 
                      animate={{ rotate: isMobileDropdownOpen ? 180 : 0 }}
                      className={`w-5 h-5 ${isMobileDropdownOpen ? "text-[#FA5147]" : ""}`} 
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </div>
                  
                  <AnimatePresence>
                    {isMobileDropdownOpen && (
                      <motion.div 
                        {...mobileAccordionVariant}
                        className="mt-2 ml-4 flex flex-col space-y-4 overflow-hidden py-2"
                      >
                        {officialLinks.map((subLink, idx) => (
                          <Link key={idx} href={subLink.path} onClick={() => setIsOpen(false)} className="block text-sm font-semibold text-white/80 hover:text-[#FA5147] tracking-wider">
                            {subLink.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}