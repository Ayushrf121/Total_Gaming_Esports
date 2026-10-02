"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import { navbarWrapperVariant } from "./animations";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <motion.nav 
      {...navbarWrapperVariant}
      className="w-full bg-[#180B15] border-b border-[#FA5147]/20 sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="cursor-pointer">
              <Image 
                src="/Logo/official_logo.png" 
                alt="Gaming Logo" 
                width={65} 
                height={40} 
                className="object-contain"
                priority
              />
            </Link>
          </div>

          <DesktopMenu pathname={pathname} />
          
          <MobileMenu
            pathname={pathname} 
            isOpen={isMobileMenuOpen} 
            setIsOpen={setIsMobileMenuOpen} 
          />

        </div>
      </div>
    </motion.nav>
  );
}