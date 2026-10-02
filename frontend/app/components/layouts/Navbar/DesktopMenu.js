"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { navLinks, officialLinks } from "./navData";
import { desktopContainerVariant, desktopItemVariant } from "./animations";
import { checkIsActive } from "./utils";

export default function DesktopMenu({ pathname }) {
  return (
    <motion.div 
      variants={desktopContainerVariant}
      initial="hidden"
      animate="show"
      className="hidden md:flex items-center space-x-2"
    >
      {/* Standard Links */}
      {navLinks.map((link, index) => {
        const isActive = checkIsActive(pathname, link.path, link.name);

        return (
          <motion.div variants={desktopItemVariant} key={index} className="relative group px-6 py-2 cursor-pointer">
            <div className={`absolute inset-0 bg-[#FA5147] transform -skew-x-12 origin-bottom-left transition-transform duration-300 ease-out z-0 ${
              isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
            }`}></div>
            
            <Link 
              href={link.path}
              className={`relative z-10 block font-bold text-sm tracking-widest transition-colors duration-300 ${
                isActive ? "text-[#180B15]" : "text-white group-hover:text-[#180B15]"
              }`}
            >
              {link.name}
            </Link>
          </motion.div>
        );
      })}

      {/* Dropdown Link (Officials) */}
      <motion.div variants={desktopItemVariant} className="relative group px-6 py-2 cursor-pointer">
        <div className="absolute inset-0 bg-[#FA5147] transform -skew-x-12 origin-bottom-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out z-0"></div>
        
        <span className="relative z-10 font-bold text-sm tracking-widest text-white group-hover:text-[#180B15] transition-colors duration-300 flex items-center gap-1">
          OFFICIALS
          <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </span>

        {/* Dropdown Menu Container */}
        <div className="absolute top-full left-0 mt-4 w-52 bg-[#180B15] border-t-4 border-[#FA5147] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 shadow-2xl shadow-[#FA5147]/10">
          <ul className="flex flex-col py-2">
            {officialLinks.map((subLink, idx) => (
              <li key={idx}>
                <Link href={subLink.path} className="block px-6 py-3 text-sm font-semibold text-white hover:bg-[#FA5147] hover:text-[#180B15] transition-colors">
                  {subLink.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}